---
title: "Google Gemini CLI: Complete Installation and Usage Guide"
sidebar_label: "Gemini CLI Guide"
slug: /GenAI/gemini/cli-guide
---

# 🚀 Google Gemini CLI: Complete Installation and Usage Guide

**Gemini CLI** is Google's open-source command-line AI agent that brings the power of Gemini directly into your terminal. It provides an interactive REPL environment for AI conversations, code generation, file analysis, and task automation with built-in tools and extensions.

---

## 📋 Overview

### What is Gemini CLI?

Gemini CLI is an open-source terminal-based AI agent that enables developers to:

- **Interactive AI conversations** directly in the terminal
- **Code generation, debugging, and analysis** with full project context
- **File manipulation and analysis** across entire codebases
- **Web search and real-time data fetching** capabilities
- **Shell command execution** with AI assistance
- **Integration with development workflows** through extensions and MCP servers

### Key Features

- ✅ **Interactive REPL mode** for conversational AI assistance
- 🔍 **Project-wide context awareness** with `--all-files` support
- 🛡️ **Secure sandbox execution** for untrusted code
- 🔧 **Built-in development tools** and extensible architecture
- 🌐 **Web search integration** for up-to-date information
- 🎯 **Multiple AI models** including Gemini 2.5 Pro
- 🆓 **Generous free tier** with Google account authentication

---

## 🛠️ Prerequisites

### System Requirements

| Component | Requirement | Notes |
|-----------|-------------|-------|
| **Node.js** | Version 18+ (20+ recommended) | Check with `node --version` |
| **npm/yarn** | Latest version | Comes with Node.js |
| **OS Support** | Windows 10+, macOS 10.15+, Linux | All major distributions |
| **Terminal** | Any modern terminal | bash, zsh, PowerShell, etc. |
| **Internet** | Required | For API calls and authentication |

### Authentication Requirements

Choose **one** of the following authentication methods:

- **Google Account** (recommended for most users) - Free tier available
- **Google AI Studio API Key** (for advanced users and automation)
- **Google Cloud Project** (for enterprise and high-volume usage)

---

## 📦 Installation

### Method 1: NPM Installation (Recommended)

#### Quick Start (No Installation)
```bash
# Run immediately without installing
npx @google/gemini-cli
```

#### Global Installation
```bash
# Install globally for system-wide access
npm install -g @google/gemini-cli

# Verify installation
gemini --version
```

### Method 2: Homebrew (macOS/Linux)

```bash
# Install via Homebrew
brew install google-gemini/gemini-cli/gemini-cli

# Verify installation
gemini --version
```

### Method 3: Yarn Alternative

```bash
# Global installation with Yarn
yarn global add @google/gemini-cli

# Verify installation
gemini --version
```

---

## 🔐 Authentication & Setup

### Option 1: Google Account Sign-in (Easiest)

1. **Launch Gemini CLI:**
   ```bash
   gemini
   ```

2. **Complete Setup:**
   - Follow the browser authentication flow
   - Sign in with your Google account
   - Choose your preferred settings (theme, model, etc.)
   - Start using immediately! 🎉

### Option 2: API Key Setup (Advanced)

1. **Get API Key:**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key securely

2. **Set Environment Variable:**
   ```bash
   # Linux/macOS (add to ~/.bashrc or ~/.zshrc for persistence)
   export GEMINI_API_KEY="your_api_key_here"
   
   # Windows PowerShell (add to profile for persistence)
   $env:GEMINI_API_KEY="your_api_key_here"
   
   # Windows Command Prompt
   set GEMINI_API_KEY=your_api_key_here
   ```

3. **Launch CLI:**
   ```bash
   gemini
   ```

### Option 3: Google Cloud Authentication

For enterprise users with Google Cloud projects:

```bash
# Authenticate with Google Cloud CLI
gcloud auth application-default login

# Set project (if needed)
gcloud config set project YOUR_PROJECT_ID

# Launch Gemini CLI
gemini
```

---

## 💻 Core Usage Patterns

### Interactive Mode (Default)

```bash
# Start interactive session
gemini

# Use specific model
gemini --model gemini-2.5-pro

# Start with project context
gemini --all-files

# Enable debug mode
gemini --debug
```

### Non-Interactive Mode

```bash
# Single prompt execution
gemini --prompt "Explain how HTTP works"

# Pipe content for analysis
cat README.md | gemini --prompt "Summarize this documentation"

# Process multiple files
gemini --prompt "Review these files for security issues" --all-files

# Interactive prompt then continue
gemini --prompt-interactive "Start a code review session"
```

### Advanced Usage Patterns

```bash
# Secure sandbox execution
gemini --sandbox --prompt "Test this Python script safely"

# Include specific directories only
gemini --include-directories src,tests,docs --prompt "Generate documentation"

# Enable checkpointing for long sessions
gemini --checkpointing --prompt "Refactor this large codebase"

# Memory monitoring for large projects
gemini --show-memory-usage --all-files
```

---

## 🔧 Essential Command Reference

### Core Options

| Flag | Description | Example |
|------|-------------|---------|
| `-m, --model` | Specify AI model | `gemini -m gemini-2.5-pro` |
| `-p, --prompt` | Non-interactive single prompt | `gemini -p "Debug this error"` |
| `-i, --prompt-interactive` | Prompt then continue interactively | `gemini -i "Start code review"` |
| `-a, --all-files` | Include all project files in context | `gemini -a` |
| `-s, --sandbox` | Execute in secure sandbox | `gemini -s` |
| `-d, --debug` | Enable debug output | `gemini -d` |
| `-c, --checkpointing` | Enable session checkpointing | `gemini -c` |

### Context and File Management

| Flag | Description | Example |
|------|-------------|---------|
| `--include-directories` | Specify directories to include | `--include-directories src,test` |
| `--exclude-directories` | Specify directories to exclude | `--exclude-directories node_modules` |
| `--include-files` | Include specific files | `--include-files "*.js,*.ts"` |
| `--exclude-files` | Exclude specific files | `--exclude-files "*.log,*.tmp"` |

### Advanced Options

| Flag | Description | Example |
|------|-------------|---------|
| `--sandbox-image` | Custom sandbox container | `--sandbox-image node:18-alpine` |
| `--show-memory-usage` | Display memory consumption | `--show-memory-usage` |
| `--list-extensions` | Show available extensions | `--list-extensions` |
| `--config` | Specify config file | `--config ~/.gemini/custom.json` |

---

## 🎯 Common Workflows

### 🔍 Code Review Workflow

```bash
# Navigate to your project
cd /path/to/your/project

# Start comprehensive code review
gemini --all-files --prompt-interactive "Review this codebase for:
- Code quality and best practices
- Security vulnerabilities
- Performance optimizations
- Documentation gaps"
```

### 🐛 Debugging Workflow

```bash
# Debug with error logs
gemini --prompt "Debug this error: $(cat error.log)" --include-directories src

# Interactive debugging session
gemini --debug --prompt-interactive "Help me debug this application"

# Sandbox testing of fixes
gemini --sandbox --prompt "Test this fix safely: $(cat fix.patch)"
```

### 📝 Documentation Generation

```bash
# Generate comprehensive documentation
gemini --all-files --prompt "Create README.md with:
- Project overview
- Installation instructions
- Usage examples
- API documentation"

# Update existing documentation
gemini --prompt "Update this documentation based on recent changes" --all-files
```

### 🔧 Development Assistance

```bash
# Get shell command help
gemini --prompt "How do I find all .js files modified in the last week?"

# Code generation with context
gemini --all-files --prompt "Generate unit tests for the authentication module"

# Refactoring assistance
gemini --checkpointing --prompt "Help me refactor this legacy code for better maintainability"
```

### 🌐 Research and Analysis

```bash
# Web-enabled research
gemini --prompt "Research the latest best practices for React performance optimization"

# Competitive analysis
gemini --prompt "Compare different approaches to implementing JWT authentication"

# Technology evaluation
gemini --prompt "Should I use TypeScript or JavaScript for this new project?"
```

---

## 🚨 Troubleshooting Guide

### Installation Issues

#### ❌ "command not found: gemini"

**Causes & Solutions:**

```bash
# Check if globally installed
npm list -g @google/gemini-cli

# If not found, install globally
npm install -g @google/gemini-cli

# Check PATH includes npm global binaries
npm config get prefix
# Ensure the bin directory is in your PATH

# Alternative: Use npx for one-time usage
npx @google/gemini-cli
```

#### ❌ Node.js Version Issues

```bash
# Check current Node.js version
node --version

# Install/update Node.js (recommended: use nvm)
# Install nvm first, then:
nvm install 20
nvm use 20

# Or download from https://nodejs.org/
```

#### ❌ Permission Issues (macOS/Linux)

```bash
# Fix npm permissions
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

# Or use npm prefix configuration
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
# Add ~/.npm-global/bin to PATH in ~/.bashrc or ~/.zshrc
```

### Authentication Issues

#### ❌ "Authentication failed"

**For Google Account Authentication:**
```bash
# Clear cached credentials
rm -rf ~/.config/gemini-cli
gemini # Re-authenticate
```

**For API Key Authentication:**
```bash
# Verify environment variable
echo $GEMINI_API_KEY    # Linux/macOS
echo %GEMINI_API_KEY%   # Windows CMD

# Test API key validity
curl -H "Content-Type: application/json" \
     -H "x-goog-api-key: $GEMINI_API_KEY" \
     -d '{"contents":[{"parts":[{"text":"Hello"}]}]}' \
     https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
```

#### ❌ "API quota exceeded"

**Solutions:**
- Switch to Google Cloud authentication for higher limits
- Use `--model gemini-2.5-flash` for faster, more efficient processing
- Implement request throttling in automated scripts
- Monitor usage in Google AI Studio or Google Cloud Console

### Performance Issues

#### ❌ Slow Response Times

**Optimizations:**
```bash
# Use faster model for quick tasks
gemini --model gemini-2.5-flash --prompt "Quick question"

# Limit context size
gemini --include-directories src --prompt "Review only source code"

# Enable memory monitoring
gemini --show-memory-usage --debug
```

#### ❌ Memory Issues with Large Projects

**Solutions:**
```bash
# Exclude unnecessary directories
gemini --exclude-directories node_modules,dist,build --all-files

# Process in smaller chunks
gemini --include-directories src/components --prompt "Review components"

# Use checkpointing for long sessions
gemini --checkpointing --prompt "Long refactoring session"
```

### Runtime Issues

#### ❌ Sandbox Execution Failures

```bash
# Check Docker availability (if using sandbox)
docker --version

# Use alternative sandbox image
gemini --sandbox --sandbox-image alpine:latest --prompt "Test in minimal environment"

# Disable sandbox if not needed
gemini --prompt "Safe analysis task" # No --sandbox flag
```

#### ❌ File Access Issues

```bash
# Check file permissions
ls -la /path/to/project

# Run from project root
cd /path/to/project
gemini --all-files

# Use specific file inclusion
gemini --include-files "*.js,*.json" --prompt "Review JavaScript files"
```

---

## 🏆 Best Practices

### 🔒 Security Best Practices

1. **API Key Management:**
   ```bash
   # ✅ DO: Use environment variables
   export GEMINI_API_KEY="your_key"
   
   # ❌ DON'T: Hardcode keys in scripts
   # gemini --api-key "hardcoded_key"  # NEVER DO THIS
   ```

2. **Sandbox Usage:**
   ```bash
   # ✅ Use sandbox for untrusted code
   gemini --sandbox --prompt "Test this user-submitted script"
   
   # ✅ Review AI-generated commands before execution
   gemini --prompt "Generate shell script" # Review output before running
   ```

3. **File Access Control:**
   ```bash
   # ✅ Be selective with file inclusion
   gemini --include-directories src,docs --prompt "Review documentation"
   
   # ❌ Avoid exposing sensitive files
   # gemini --all-files # Be cautious with secrets, keys, etc.
   ```

### 📈 Performance Optimization

1. **Model Selection:**
   ```bash
   # Fast tasks: Use Gemini 2.5 Flash
   gemini --model gemini-2.5-flash --prompt "Quick code review"
   
   # Complex tasks: Use Gemini 2.5 Pro
   gemini --model gemini-2.5-pro --prompt "Architectural analysis"
   ```

2. **Context Management:**
   ```bash
   # ✅ Targeted context
   gemini --include-directories src/auth --prompt "Review authentication"
   
   # ❌ Unnecessary broad context
   # gemini --all-files --prompt "Fix this one small bug"
   ```

3. **Session Management:**
   ```bash
   # Long sessions: Enable checkpointing
   gemini --checkpointing --prompt "Multi-hour refactoring session"
   
   # Monitor resource usage
   gemini --show-memory-usage --debug
   ```

### 🎯 Effective Prompting

1. **Be Specific and Contextual:**
   ```bash
   # ✅ Good: Specific with context
   gemini --prompt "Review the user authentication module in src/auth/ for security vulnerabilities, focusing on input validation and session management"
   
   # ❌ Poor: Vague
   gemini --prompt "check my code"
   ```

2. **Structured Requests:**
   ```bash
   # ✅ Well-structured prompt
   gemini --all-files --prompt "Analyze this React application and provide:
   1. Code quality assessment
   2. Performance optimization suggestions
   3. Security vulnerability analysis
   4. Recommended refactoring priorities"
   ```

3. **Iterative Development:**
   ```bash
   # Start interactive for complex tasks
   gemini --prompt-interactive "I need help optimizing this database query"
   # Then continue the conversation with follow-up questions
   ```

### 📁 Project Organization

1. **Directory Structure Awareness:**
   ```bash
   # Work from project root
   cd /path/to/project
   gemini --all-files --prompt "Understand project structure"
   ```

2. **Selective File Inclusion:**
   ```bash
   # Include only relevant files
   gemini --include-files "*.ts,*.tsx,*.json" --prompt "TypeScript code review"
   
   # Exclude build artifacts
   gemini --exclude-directories dist,build,node_modules --all-files
   ```

3. **Configuration Management:**
   ```bash
   # Create project-specific config
   echo '{"model": "gemini-2.5-pro", "includeDirectories": ["src", "test"]}' > .gemini/config.json
   
   # Use custom config
   gemini --config .gemini/config.json
   ```

### 🔄 Workflow Integration

1. **Git Integration:**
   ```bash
   # Review changes before commit
   git diff | gemini --prompt "Review these changes for potential issues"
   
   # Generate commit messages
   git diff --cached | gemini --prompt "Generate a clear commit message for these changes"
   ```

2. **CI/CD Integration:**
   ```bash
   # In CI scripts
   npm install -g @google/gemini-cli
   export GEMINI_API_KEY="$SECRET_API_KEY"
   gemini --prompt "Analyze test failures" --include-files "test-results.json"
   ```

3. **Documentation Automation:**
   ```bash
   # Auto-generate docs
   gemini --all-files --prompt "Update README.md based on recent code changes" > README.md
   ```

---

## 🔄 Updates and Maintenance

### Keeping Gemini CLI Updated

```bash
# Check current version
gemini --version

# Check for updates
npm outdated -g @google/gemini-cli

# Update to latest version
npm update -g @google/gemini-cli

# Or reinstall
npm uninstall -g @google/gemini-cli
npm install -g @google/gemini-cli
```

### Configuration Management

```bash
# View current configuration
gemini --list-extensions

# Reset configuration
rm -rf ~/.config/gemini-cli
gemini # Will prompt for reconfiguration

# Backup configuration
cp -r ~/.config/gemini-cli ~/.config/gemini-cli.backup
```

---

## 🆘 Getting Help and Support

### Built-in Help

```bash
# General help
gemini --help

# List available models
gemini --list-models

# Show extensions
gemini --list-extensions

# Interactive help
gemini
# Then type: help
```

### Official Resources

- **Official Documentation:** [Gemini CLI Documentation](https://gemini-cli-docs.pages.dev/guide)
- **GitHub Repository:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)
- **Issue Tracking:** [GitHub Issues](https://github.com/google-gemini/gemini-cli/issues)
- **Google AI Studio:** [gemini.google.com](https://aistudio.google.com/)

### Community and Learning

- **Official Announcement:** [Google Blog](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)
- **Tutorial Series:** Multiple community tutorials available
- **Stack Overflow:** Tag questions with `gemini-cli`

---

## 🎉 Getting Started Checklist

Ready to start using Gemini CLI? Follow this checklist:

- [ ] **Install Node.js 18+** (20+ recommended)
- [ ] **Install Gemini CLI** via npm or Homebrew
- [ ] **Verify installation** with `gemini --version`
- [ ] **Authenticate** using Google account or API key
- [ ] **Test basic functionality** with `gemini --prompt "Hello, Gemini!"`
- [ ] **Try project analysis** with `gemini --all-files`
- [ ] **Explore interactive mode** by running `gemini`
- [ ] **Set up your development workflow** integration

### Quick Start Command

```bash
# One-liner to test everything works
npx @google/gemini-cli --prompt "Explain what you can help me with as a developer"
```

---

*Happy coding with Gemini CLI! 🤖✨*

---

## 📋 Quick Reference Card

### Most Common Commands
```bash
# Interactive mode
gemini

# Quick question
gemini -p "Your question here"

# Project analysis
gemini -a -p "Analyze this codebase"

# Safe code execution
gemini -s -p "Test this script"

# Debug mode
gemini -d -p "Help debug this issue"
```

### Key Flags to Remember
- `-a, --all-files` - Include all project files
- `-s, --sandbox` - Safe execution environment  
- `-d, --debug` - Enable debug output
- `-m, --model` - Choose specific model
- `-i, --prompt-interactive` - Start interactive after prompt