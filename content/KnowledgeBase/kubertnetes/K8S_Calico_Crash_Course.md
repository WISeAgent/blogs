# Calico Crash Course

## Table of Contents
1. [Introduction](#introduction)  
2. [Core Components](#core-components)  
3. [Installation](#installation)  
4. [Networking Mechanics](#networking-mechanics)  
5. [Pod-to-Pod Communication](#pod-to-pod-communication)  
6. [Network Policies](#network-policies)  
7. [Advanced Features](#advanced-features)  
8. [Troubleshooting](#troubleshooting)  
9. [Configuration Discovery](#configuration-discovery)  

---

## Introduction 

Calico is a cloud-native networking solution providing:
- High-performance container networking
- Advanced network security policies
- Cross-platform compatibility (K8s, OpenStack, bare metal)
- Choice of data planes (Linux, eBPF, Windows)

---

## Core Components 

| Component | Function | Runs On |
|-----------|----------|---------|
| **Felix** | Programs routes/ACLs | Each node |
| **BIRD** | BGP route distribution | Each node |
| **confd** | Config generation | Control nodes |
| **CNI Plugin** | Pod networking | Each node |
| **Typha** | API server proxy (large clusters) | Control nodes |

---

## Installation 

``` bash
# Install operator
kubectl create -f https://docs.projectcalico.org/manifests/tigera-operator.yaml

# Apply custom resources
kubectl create -f https://docs.projectcalico.org/manifests/custom-resources.yaml

# Verify installation
watch kubectl get pods -n calico-system
```

---

## Networking Mechanics 

### IP Address Management (IPAM)
``` yaml
apiVersion: projectcalico.org/v3
kind: IPPool
metadata:
  name: default-pool
spec:
  cidr: 192.168.0.0/16
  ipipMode: CrossSubnet
  natOutgoing: true
```

### Routing Options
1. **BGP Direct Routing**  
   - Uses node IPs for pod-to-pod communication
   - Requires BGP-enabled network infrastructure

2. **Overlay Networks**  
   - IP-in-IP (protocol 4) or VXLAN (UDP 4789)
   - Works across any L3 network

## Pod-to-Pod Communication 

### Architecture Overview

Calico enables direct pod-to-pod communication using these key components:

- veth pairs for same-node communication  
- tunl0 interface for IP-in-IP encapsulation  
- BGP routing for cross-node traffic  
- iptables/eBPF for policy enforcement  

``` shell
graph TD
    A[Pod A] -->|veth pair| B[Host A]
    B -->|BGP/Overlay| C[Host B]
    C -->|veth pair| D[Pod B]
```
### Communication Flow

**Same node**
```
sequenceDiagram
    Pod1->>veth1: Outgoing packet
    veth1->>Linux Bridge: Forward
    Linux Bridge->>veth2: Direct delivery
    veth2->>Pod2: Incoming packet

```

**Cross-node**
```
sequenceDiagram
    Pod1->>tunl0: Encapsulated packet
    tunl0->>Node1 NIC: Add outer header (src:10.30.1.1, dst:10.30.1.2)
    Node1 NIC->>Node2 NIC: Routed via underlay
    Node2 NIC->>tunl0: Decapsulate
    tunl0->>Pod2: Deliver original packet
```

### Configuration
1. IP Pool Setup
Define CIDR and encapsulation mode:

``` text
apiVersion: projectcalico.org/v3
kind: IPPool
metadata:
  name: default-pool
spec:
  cidr: 192.168.0.0/16
  ipipMode: Always  # Options: Always, CrossSubnet, Never
  vxlanMode: Never
  natOutgoing: true
```

2. Interface Detection
Configure IP autodetection method:

``` text
# calico-config ConfigMap
data:
  ip_autodetection_method: "interface=eth.*"
```

3. BGP Configuration
For direct routing without encapsulation:

``` bash
calicoctl create -f - <<EOF
apiVersion: projectcalico.org/v3
kind: BGPConfiguration
metadata:
  name: default
spec:
  logSeverityScreen: Info
  nodeToNodeMeshEnabled: true
EOF
```
### Verification
1. Check routes on worker node:

``` bash
ip route show | grep calico
# Example output:
# 192.168.1.0/24 via 10.30.1.1 dev tunl0 proto bird 
```
2. Test pod connectivity:

``` bash
kubectl exec pod1 -- ping -c 3 <pod2-ip>
```

3. Inspect BGP peers:
``` bash
calicoctl node status
# Output:
# IPv4 BGP status
# +--------------+-------------------+-------+----------+-------------+
# | PEER ADDRESS |     PEER TYPE     | STATE |  SINCE   |    INFO     |
# +--------------+-------------------+-------+----------+-------------+
# | 10.30.1.2    | node-to-node mesh | up    | 09:32:44 | Established |
# +--------------+-------------------+-------+----------+-------------+
```

### Troubleshooting Common Issues
1. Missing Routes
Ensure Calico pods are running:

```bash
kubectl get pods -n calico-system
```

2. Encapsulation Mismatch
Verify IP pool configuration matches cluster network:

```bash
calicoctl get ippool -o yaml
```
3. Firewall Conflicts
Required open ports:
- IP-in-IP: Protocol 4  
- VXLAN: UDP 4789  
- BGP: TCP 179

4. Interface Detection
Check detected host IP:

``` bash
calicoctl get node <node-name> -o yaml | grep 'ipv4Address'
```
This implementation enables near line-rate performance (<1ms latency) while maintaining Kubernetes network model compliance146. For hybrid cloud deployments, consider VXLAN encapsulation when BGP isn't feasible25.

### Configuration Matrix

| Scenario | Configuration | Performance | Requirements |
|----------|---------------|-------------|--------------|
| Same Node | Direct veth routing | 10 μs latency | Default setup |
| Cross-Node/BGP | BGP routing table | 

``` bash
# Inspect interfaces
ip link show | grep cali

# View BGP peers
birdcl -s /var/run/calico/bird.ctl show protocols
```
---

## Network Policies 

### Example: Multi-Tier App Security

``` yaml
apiVersion: projectcalico.org/v3
kind: NetworkPolicy
metadata:
  name: frontend-policy
spec:
  selector: role == 'frontend'
  ingress:
    - action: Allow
      protocol: TCP
      source:
        selector: app == 'ingress-controller'
      destination:
        ports:[443]
  egress:
    - action: Allow
      protocol: TCP
      destination:
        selector: role == 'backend'
        ports:[8080]
```

---

## Advanced Features 

1. **eBPF Data Plane**  
   ``` bash
   calicoctl patch kubecontrollersconfiguration default \
     --patch='{"spec": {"controllers": {"node": {"hostEndpoint": {"autoCreate": "Enabled"}}}}}'
   ```

2. **WireGuard Encryption**  
   ``` yaml
   apiVersion: projectcalico.org/v3
   kind: FelixConfiguration
   metadata:
     name: default
   spec:
     wireguardEnabled: true
   ```

3. **Service Graph**  
   ``` bash
   calicoctl get serviceGraph -o wide
   ```

---

## Troubleshooting 

### Common Issues
1. **Pods can't communicate across nodes**  
   - Check BGP peer status
   - Verify IP pool CIDR matches cluster network
   - Ensure firewall allows Calico protocols

2. **Network Policy not enforced**  
   - Check policy order (`calicoctl get policy -o wide`)
   - Verify selector matches pod labels

3. **IPAM exhaustion**  
   ```
   calicoctl ipam release --ip= --from=
   ```

---

## Configuration Discovery 

1. **Cluster-wide Settings**
   ```
   calicoctl get clusterinformation -o yaml
   ```

2. **Node-specific Config**
   ```
   calicoctl get node  -o yaml
   ```

3. **Current State Analysis**
   ```
   calicoctl diags --include=all
   ```

4. **Policy Audit**
   ```
   calicoctl get networkpolicy -A -o yaml
   ```

This comprehensive guide covers Calico's fundamentals through advanced features. For production deployments, always reference the [official documentation](https://docs.projectcalico.org/) for version-specific details.

