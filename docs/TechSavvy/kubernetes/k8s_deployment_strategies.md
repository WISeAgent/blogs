---
title: "Kubernetes Deployment Strategies: A Senior DevOps Perspective"
description: Real-world lessons and best practices for scaling Kubernetes deployments using Helm, GitOps, and ArgoCD. Learn trade-offs, operational tips, and how to choose the right strategy for your team.
slug: /TechSavvy/kubernetes/deployment-strategies
authors: [wiseagent]
tags: [kubernetes, devops, helm, gitops, argocd, deployment, best-practices]
---

<!-- cspell:words bitnami overcomplicate trunc -->

# Kubernetes Deployment Strategies: A Senior DevOps Perspective

## Introduction

After years of watching teams struggle with Kubernetes deployments, I've seen the same patterns emerge repeatedly. The combination of Helm, GitOps, and ArgoCD has become the de facto standard for good reason, but the path to implementing them effectively is littered with abandoned POCs and over-engineered solutions.

This isn't another "getting started" guide. Instead, I'll share what I wish someone had told me before implementing these tools at scale: the real trade-offs, the hidden operational costs, and the decisions that will either save or sink your deployment strategy.

**The Stack:**
- **Helm**: Package manager that brings sanity to Kubernetes manifests
- **GitOps**: Operational model where Git drives infrastructure changes
- **ArgoCD**: Controller that enforces Git state on your clusters

## The Helm Foundation

Helm solves the manifest management problem that every Kubernetes team eventually faces. Raw YAML becomes unmanageable around the 10-service mark, and that's being generous.

### What Helm Actually Gives You

**Templating with Go Templates** (not Jinja—common misconception):
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "myapp.fullname" . }}
  labels:
    {{- include "myapp.labels" . | nindent 4 }}
spec:
  replicas: {{ .Values.replicaCount }}
  template:
    spec:
      containers:
      - name: {{ .Chart.Name }}
        image: "{{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}"
```

**Template Helpers** (`templates/_helpers.tpl`) for reusable logic:
```yaml
{{- define "myapp.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}

{{- define "myapp.labels" -}}
helm.sh/chart: {{ include "myapp.chart" . }}
{{ include "myapp.selectorLabels" . }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}
```

**Release Management** that actually tracks what you deployed:
```bash
# See what's running and when it was deployed
helm list -A

# Atomic upgrades that rollback on failure
helm upgrade myapp ./chart --atomic --timeout 10m

# Rollback to any previous release
helm rollback myapp 3
```

**Values Hierarchy** for environment management:
```bash
helm install myapp ./chart \
  -f values.yaml \
  -f environments/production.yaml \
  --set image.tag=v1.2.3
```

### The Helm Gotchas

**Chart Dependencies Can Become Nightmare Fuel**: I've seen teams create 15-level dependency chains. Keep it simple. Most applications need at most 2-3 dependencies.

**Template Debugging is Painful**: Use `helm template` religiously before deploying. The error messages when templates fail are cryptic at best.

**Security Considerations**: Chart repositories are essentially software repositories. Treat them with the same security rigor. Pin versions, scan for vulnerabilities, and don't blindly trust public charts.

## GitOps: More Than Just Git

GitOps isn't just "put your YAML in Git." It's a fundamental shift in how you think about infrastructure changes. The real power comes from the constraints it imposes.

### The GitOps Contract

1. **Git as Single Source of Truth**: If it's not in Git, it shouldn't be in production
2. **Pull-Based Deployment**: Controllers pull changes rather than CI systems pushing
3. **Continuous Reconciliation**: The system constantly works to match desired state
4. **Observability**: All changes are auditable through Git history

### Repository Structure That Scales

After trying various approaches, this structure has proven most maintainable:

```
infrastructure-repo/
├── clusters/
│   ├── production-eu/
│   │   ├── argocd-apps/
│   │   └── cluster-config/
│   └── staging-us/
├── applications/
│   ├── payment-service/
│   │   ├── base/
│   │   └── environments/
│   └── user-service/
└── shared/
    ├── monitoring/
    └── ingress/
```

**Key Decisions:**
- **Separate cluster configs from applications**: Different change frequencies and blast radius
- **Environment-specific values in the same repo**: Reduces synchronization issues
- **Shared components in dedicated folders**: Reduces duplication

## ArgoCD: The GitOps Engine

ArgoCD transforms GitOps from theory into practice. But it's not just a deployment tool—it's a reconciliation system that becomes the backbone of your operational model.

### Why Pull-Based Matters

Push-based systems (CI deploying directly) create several problems:
- **Credential sprawl**: Every CI system needs cluster access
- **State drift**: No mechanism to detect manual changes
- **Limited rollback**: Requires re-running CI pipelines

ArgoCD's pull model solves these by inverting the relationship:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: payment-service
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/company/k8s-configs
    path: applications/payment-service/environments/production
    targetRevision: HEAD
    helm:
      valueFiles:
        - values.yaml
  destination:
    server: https://kubernetes.default.svc
    namespace: payments
  syncPolicy:
    automated:
      selfHeal: true      # Correct drift automatically
      prune: true         # Remove orphaned resources
    syncOptions:
      - CreateNamespace=true
    retry:
      limit: 3
      backoff:
        duration: 5s
        maxDuration: 3m0s
```

### Application of Applications Pattern

For teams managing 20+ services, the Application of Applications pattern is essential:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: production-apps
spec:
  source:
    repoURL: https://github.com/company/k8s-configs
    path: clusters/production-eu/argocd-apps
    targetRevision: HEAD
  destination:
    server: https://kubernetes.default.svc
    namespace: argocd
  syncPolicy:
    automated: {}
```

This creates a hierarchical structure where one "root" application manages all other applications, enabling:
- Consistent deployment patterns across services
- Centralized RBAC and policy enforcement
- Simplified onboarding for new applications

## Deployment Strategy Evolution

### Phase 1: Direct Helm (Weeks 1-4)

Start here. Don't overcomplicate initially.

```bash
# Simple deployment workflow
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install postgres bitnami/postgresql \
  --set auth.postgresPassword=secretpassword \
  --namespace database
```

**When this works**: Small teams, simple applications, development environments
**When it breaks**: Multiple environments, multiple team members, compliance requirements

### Phase 2: GitOps with CI/CD (Months 2-6)

Introduce Git as the source of truth, but keep CI/CD for deployment execution.

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]
    paths: ['environments/production/**']

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy with Helm
        run: |
          helm upgrade --install myapp ./helm-chart \
            --namespace production \
            --values environments/production/values.yaml \
            --atomic
```

**Advantages**: Deployment history in Git, environment parity, some automation
**Limitations**: No drift detection, CI system needs cluster credentials, limited rollback capabilities

### Phase 3: ArgoCD + GitOps (Month 6+)

Full GitOps with ArgoCD managing reconciliation.

**Migration Strategy**:
1. Install ArgoCD in a dedicated namespace
2. Create Applications for non-critical services first
3. Gradually migrate existing deployments
4. Remove CI/CD deployment jobs

## Operational Considerations

### Monitoring and Alerting

ArgoCD applications should be monitored like any other critical infrastructure:

```yaml
# Prometheus alerts for ArgoCD
groups:
- name: argocd
  rules:
  - alert: ArgoCDAppNotSynced
    expr: argocd_app_info{sync_status!="Synced"} == 1
    for: 15m
    annotations:
      summary: "ArgoCD application {{ $labels.name }} is not synced"
      
  - alert: ArgoCDAppUnhealthy
    expr: argocd_app_info{health_status!="Healthy"} == 1
    for: 5m
    annotations:
      summary: "ArgoCD application {{ $labels.name }} is unhealthy"
```

### Disaster Recovery

Your GitOps repository becomes a single point of failure. Plan accordingly:

- **Repository backups**: Automated backups to multiple locations
- **ArgoCD configuration backup**: Export application definitions regularly
- **Multi-region repository mirrors**: For critical production systems
- **Runbook for manual deployment**: When GitOps is completely broken

### Security Considerations

**RBAC**: ArgoCD's project-based RBAC is powerful but complex. Start simple:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: argocd-rbac-cm
data:
  policy.default: role:readonly
  policy.csv: |
    p, role:admin, applications, *, */*, allow
    p, role:dev, applications, get, default/*, allow
    p, role:dev, applications, sync, default/*, allow
    g, devops-team, role:admin
    g, developers, role:dev
```

**Secrets Management**: Never commit secrets to Git. Use:
- Sealed Secrets for simple cases
- External Secrets Operator for complex scenarios
- Helm secrets plugin for development

## When to Choose Each Approach

| Scenario | Recommended Strategy | Reasoning |
|----------|---------------------|-----------|
| 1-5 services, single team | Direct Helm | Overhead of GitOps not justified |
| 5-20 services, growing team | GitOps + CI/CD | Need consistency without complexity |
| 20+ services, multiple teams | ArgoCD + GitOps | Required for operational scale |
| Compliance/audit requirements | ArgoCD + GitOps | Audit trail and drift detection essential |
| Multi-cluster deployment | ArgoCD + ApplicationSets | Only practical solution at scale |

## Common Anti-Patterns

**The Premature GitOps**: Teams implementing ArgoCD before understanding their deployment needs. Start with Helm, add GitOps practices, then introduce ArgoCD.

**The Monolithic Chart**: Creating one massive Helm chart for everything. Break applications into logical services early.

**The Sacred Git Branch**: Making the main branch so protected that deployments take hours. Balance security with velocity.

**The Manual Override**: Regularly kubectl applying changes directly to fix "urgent" issues. This breaks the GitOps contract and creates operational debt.

## Conclusion

The progression from Helm to GitOps to ArgoCD isn't just about tools—it's about operational maturity. Each stage introduces constraints that seem limiting but ultimately enable better practices.

Start with Helm for packaging, add Git for change management, and introduce ArgoCD when manual oversight becomes the bottleneck. The key is recognizing when you've outgrown your current approach and planning the migration before it becomes a crisis.

The goal isn't to implement all three technologies immediately—it's to build a deployment strategy that scales with your team and maintains reliability as complexity grows. Sometimes that's just Helm, and that's perfectly fine.

Remember: the best deployment strategy is the one your team can operate reliably in production, not the one that looks best in a conference talk.