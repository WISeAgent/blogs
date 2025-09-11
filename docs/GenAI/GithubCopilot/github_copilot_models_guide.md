---
title: "GitHub Copilot Available AI Models Guide"
description: "Comprehensive reference for enterprise teams on all AI models available in GitHub Copilot Enterprise, including model selection, premium access, and integration strategies as of September 2025."
slug: /GenAI/GithubCopilot/models-guide
authors: [wiseagent]
tags: [github-copilot, ai-models, enterprise, productivity, openai, anthropic, gemini, vs-code, ide, best-practices]
sidebar_label: "Copilot AI Models Guide"
---

# GitHub Copilot Available AI Models Guide

*Last Updated: September 10, 2025*

This technical reference provides enterprise teams with comprehensive information about AI models available in GitHub Copilot Enterprise, based on verified access in production Enterprise environments and the latest [GitHub blog announcements](https://github.blog/ai-and-ml/github-copilot/under-the-hood-exploring-the-ai-models-powering-github-copilot/).

## Overview

GitHub Copilot Enterprise now supports a diverse ecosystem of AI models from leading providers, with significant expansions in 2025. The platform has evolved from a single-model architecture (originally Codex) to a multi-model system that allows developers to choose the optimal model for their specific tasks.

### Key Enterprise Features

- **Model Selection**: Choose models through the model picker in Copilot Chat, agent mode, and code completions
- **Default Baseline**: GPT-4.1 now serves as the default model across chat, agent mode, and code completions, optimized for speed, reasoning, and context handling
- **Platform Support**: Available across IDEs (VS Code, Visual Studio, JetBrains) and GitHub.com
- **Premium Model Access**: Enterprise plans include access to frontier models via premium requests
- **Agentic Workflows**: Advanced models power autonomous coding agents for complex tasks
<!-- truncate -->git
### Understanding Premium Requests

Enterprise, Business, and Pro+ plans provide premium model access through a premium request system, alongside unlimited access to agent mode, context-driven chat, and code completions using the base model.

## Available Models by Provider

### OpenAI Models

#### GPT-4.1 (Default Baseline)
- **Status**: Generally Available (New Default)
- **Capabilities**: Optimized for speed, reasoning, and context handling, tuned specifically for developer workflows and supports more than 30 programming languages
- **Performance**: ~40% faster response generation than GPT-4o with significantly increased context windows
- **Best For**: Balanced performance across all development tasks
- **Enterprise Use Cases**: 
  - Primary model for daily development workflows
  - Code completions and pull request summaries
  - Reliable baseline for chat and agent interactions

#### GPT-4o
- **Status**: Generally Available 
- **Capabilities**: General-purpose model with strong multimodal support for analysing screenshots and visual content
- **Best For**: Tasks requiring visual analysis and multimodal understanding
- **Enterprise Use Cases**:
  - UI/UX debugging with visual context
  - Diagram and architecture analysis
  - Documentation with visual elements

#### GPT-5 (Preview)
- **Status**: Public Preview
- **Capabilities**: High-end reasoning for complex tasks with advanced problem-solving capabilities
- **Best For**: Complex, multi-step reasoning requiring maximum intelligence
- **Enterprise Use Cases**:
  - Strategic architecture decisions
  - Complex system design and optimization
  - High-stakes technical problem-solving

#### GPT-5 mini (Preview) 
- **Status**: Public Preview
- **Capabilities**: Lightweight reasoning model optimized for efficiency
- **Best For**: Efficient handling of well-defined tasks without heavy compute requirements
- **Enterprise Use Cases**:
  - High-volume development environments
  - Quick reasoning tasks requiring fast turnaround
  - Cost-effective solution for routine analysis

#### o3 (Preview)
- **Status**: Public Preview
- **Capabilities**: Advanced planning and multi-step reasoning specialized for algorithmic thinking
- **Best For**: Complex system debugging and strategic planning
- **Enterprise Use Cases**:
  - Algorithm design and optimization
  - Cross-system debugging and analysis
  - Technical strategy development

#### o3-mini
- **Status**: Generally Available
- **Capabilities**: Lightweight reasoning model with fast response times for routine tasks
- **Best For**: Quick responses to well-defined problems
- **Enterprise Use Cases**:
  - Syntax assistance and error resolution
  - Rapid prototyping support
  - High-frequency, low-complexity queries

#### o4-mini (Preview)
- **Status**: Public Preview  
- **Capabilities**: Speed, low-latency completions with optimized resource usage
- **Best For**: Ultra-fast responses for immediate feedback
- **Enterprise Use Cases**:
  - Real-time code completion assistance
  - Interactive debugging sessions
  - Mobile and resource-constrained development

### Anthropic Models

#### Claude Sonnet 3.5
- **Status**: Generally Available
- **Capabilities**: Reliable, everyday coding tasks with balanced performance
- **Best For**: Standard development workflows requiring consistent quality
- **Enterprise Use Cases**:
  - Feature development and maintenance
  - Code documentation generation
  - Training and onboarding scenarios

#### Claude Sonnet 3.7
- **Status**: Generally Available
- **Capabilities**: Deeper reasoning for large codebases with enhanced analysis capabilities
- **Best For**: Complex refactoring and multi-file analysis
- **Enterprise Use Cases**:
  - Large-scale codebase analysis
  - Legacy system modernization
  - Cross-module dependency management

#### Claude Sonnet 3.7 Thinking
- **Status**: Generally Available
- **Capabilities**: Long-horizon, structured problem-solving with explicit reasoning chains
- **Best For**: Tasks requiring transparent, explainable AI reasoning
- **Enterprise Use Cases**:
  - Code review processes requiring detailed explanations
  - Compliance scenarios needing audit trails
  - Technical education and knowledge transfer

#### Claude Sonnet 4
- **Status**: Generally Available
- **Capabilities**: Higher reasoning depth with advanced problem-solving capabilities
- **Best For**: Complex development challenges requiring sophisticated analysis
- **Enterprise Use Cases**:
  - Advanced debugging and troubleshooting
  - Architecture planning and design decisions
  - Complex refactoring projects

#### Claude Opus 4 (Preview)
- **Status**: Public Preview
- **Capabilities**: Premium reasoning power representing Anthropic's most advanced model
- **Best For**: Mission-critical tasks requiring maximum reasoning capability
- **Enterprise Use Cases**:
  - Strategic technical decision-making
  - Complex system architecture design
  - High-stakes problem-solving scenarios

#### Claude Opus 4.1 (Preview)
- **Status**: Public Preview
- **Capabilities**: Most advanced Anthropic option with cutting-edge reasoning abilities
- **Best For**: Frontier AI applications and autonomous coding tasks
- **Enterprise Use Cases**:
  - Advanced AI-driven development workflows
  - Experimental and research-oriented projects
  - Next-generation coding assistance scenarios

### Google Models

#### Gemini 2.0 Flash
- **Status**: Generally Available
- **Capabilities**: Fast, multimodal capabilities optimized for visual and interactive tasks
- **Best For**: Real-time visual analysis and interactive development
- **Enterprise Use Cases**:
  - Frontend development and UI analysis
  - Real-time debugging of visual applications
  - Interactive prototyping and design work

#### Gemini 2.5 Pro  
- **Status**: Generally Available
- **Capabilities**: Advanced multimodal reasoning with strong research and analysis capabilities
- **Best For**: Research-oriented development and complex data analysis
- **Enterprise Use Cases**:
  - Technical research and competitive analysis
  - Scientific computing workflows
  - Large-scale data analysis projects

## Model Selection Guide for Enterprise Teams

### Task-Based Model Recommendations

Different models excel at different tasks, and by integrating a variety of them, GitHub Copilot can deliver more tailored, powerful experiences. Here's how to choose:

#### For Daily Development (High Volume)
- **Primary**: GPT-4.1 (default baseline)
- **Alternative**: Claude Sonnet 3.5
- **Rationale**: Optimized for developer workflows with fast response times

#### For Complex Problem-Solving (Strategic)
- **Primary**: Claude Opus 4.1 (Preview) or GPT-5 (Preview)
- **Alternative**: Claude Opus 4 (Preview)
- **Rationale**: Maximum reasoning capabilities for critical decisions

#### For Speed-Critical Tasks (Real-time)
- **Primary**: o4-mini (Preview) or Gemini 2.0 Flash
- **Alternative**: o3-mini
- **Rationale**: Ultra-low latency for interactive development

#### For Visual/Frontend Development
- **Primary**: Gemini 2.0 Flash or GPT-4o
- **Alternative**: Gemini 2.5 Pro
- **Rationale**: Strong multimodal capabilities for UI/UX work

#### For Large Codebase Analysis
- **Primary**: Claude Sonnet 3.7 or Gemini 2.5 Pro
- **Alternative**: Claude Sonnet 4
- **Rationale**: Deep reasoning across complex, multi-file contexts

## Enterprise Implementation Strategy

### Agentic Workflows and Model Selection

Copilot's agentic capabilities mean developers can delegate tasks with Copilot operating directly inside your IDE and GitHub, with full context into your repositories.

**Agent Mode Optimization:**
- **Default**: GPT-4.1 for baseline agent tasks
- **Advanced**: Claude Sonnet series for complex reasoning
- **Specialized**: o3 for algorithmic planning

**Code Review Enhancement:**
- Code reviews are powered by GPT-4.1 for balanced accuracy and responsiveness, with options to upgrade to Claude 3.7 Sonnet or Claude 3.7 Thinking for deeper reasoning across large codebases

### Cost and Resource Management

**Preview Model Strategy:**
- Use preview models (GPT-5, Claude Opus 4.1, o3, o4-mini) for experimental workflows
- Establish clear guidelines for when preview features are appropriate
- Monitor preview model performance and stability

**Premium Request Optimization:**
- Establish tiered access based on role and project criticality
- Monitor usage patterns to optimize model selection
- Create training programs for effective model utilization

## Platform Integration

### IDE and Platform Support
All models are available across:
- **GitHub.com**: Full web-based experience with native integration
- **VS Code**: Complete IDE integration with enhanced context
- **Visual Studio**: Native .NET development support  
- **JetBrains IDEs**: IntelliJ, PyCharm, and other JetBrains products
- **Eclipse & Xcode**: Platform-specific integrations

### Recent Infrastructure Improvements
Recent upgrades include GPT-4.1 integration across Copilot Chat, code completions, and pull request summaries, delivering faster responses and increased context windows.

## Future-Proofing Your Enterprise Setup

### Model Evolution Strategy
- As the world of AI keeps evolving, so will the models that power GitHub Copilot, with continuous refinement and updating of AI infrastructure
- Establish processes for evaluating and adopting new models as they become available
- Create feedback loops to assess model performance in your specific use cases

### Best Practices for Model Selection
1. **Start with Defaults**: Begin with GPT-4.1 for baseline workflows
2. **Experiment with Previews**: Test preview models in non-critical scenarios
3. **Measure Performance**: Track developer satisfaction and productivity metrics
4. **Iterate Based on Feedback**: Adjust model selection based on team preferences and outcomes

## Additional Resources

- [Latest GitHub Blog: Under the Hood](https://github.blog/ai-and-ml/github-copilot/under-the-hood-exploring-the-ai-models-powering-github-copilot/)
- [Official Model Documentation](https://docs.github.com/en/copilot/reference/ai-models/supported-models)
- [GitHub Copilot Enterprise Features](https://github.com/features/copilot/plans)
- [Model Hosting Information](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

---

*Note: This document reflects current model availability as of September 10, 2025, based on verified Enterprise access and official GitHub announcements. Preview models may have limited availability and are subject to changes. Enterprise teams should verify current model access through their GitHub Enterprise settings.*