---
title: "Gemini Gems for Engineers: Build Your Custom AI Assistant"
description: "A practical guide to building and deploying custom Gemini Gems for engineering teams, including setup, best practices, and real-world examples."
slug: /GenAI/gemini/gemini-gems-guide
authors: [wiseagent]
tags: [gemini, ai-assistant, workflow, engineering, google, automation, devtools]
---

<!-- cspell:words bitnami HWPX -->

# Gemini Gems for Engineers: Build Your Custom AI Assistant

![Engineering Workflow Transformation](/img/TechSavvy/Gemini_gems_guide.PNG)

## What Are Gems and Why Should You Care?

Gems are personalized AI agents that you configure through natural language instructions. Instead of repeating the same prompts or context over and over, you create a Gem once and reuse it.

**Perfect for engineers because:**
- **Specialized expertise**: Create Gems that know your specific tech stack, APIs, or frameworks
- **Workflow automation**: Generate boilerplate code, review pull requests, or write documentation
- **Knowledge management**: Upload your internal docs, standards, and guides so the Gem always has context
- **Consistent output**: No more crafting the perfect prompt every time—your Gem remembers how you like things done

## Getting Started

### What You Need
- Google account (any Google account works)
- Access to [gemini.google.com](https://gemini.google.com)
- **Note**: Gems are now available to more Google Workspace customers and some features require Gemini Advanced, Business, or Enterprise subscriptions

### Where Gems Work
Gems now work in Gmail, Google Docs, Sheets, Slides, and Drive side panels, not just the main Gemini app. This means you can use your custom engineering assistant right where you work.

## Creating Your First Gem

### 1. Access the Gem Manager
1. Go to [gemini.google.com](https://gemini.google.com/app/gems/manager)
2. Look for "Gems" in the left sidebar
3. Click "Gem manager" or "Build"

### 2. Set Up Your Gem
You'll see a split screen:
- **Left side**: Configure your Gem (name, instructions, knowledge files)
- **Right side**: Test your Gem in real-time

### 3. Write Clear Instructions
This is where the magic happens. Your instructions define how the Gem behaves. Be specific:

**Instead of:** "Help with code"
**Try:** "You're a senior backend engineer specializing in Python and PostgreSQL. Help users write efficient, well-documented code following PEP 8 standards. Always include error handling and type hints."

### 4. Upload Knowledge Files (Game Changer)
You can upload up to 10 files to give your Gem specific knowledge. This is huge for engineering teams.

**Supported formats:**
Google Docs, TXT, DOC, DOCX, PDF, RTF, DOT, DOTX, HWP, HWPX, plus spreadsheets and code files.

**What to upload:**
- API documentation
- Coding standards and style guides
- Architecture decision records
- Common troubleshooting guides
- Project README files
- Internal wikis or confluence pages

## Practical Gems for Engineers

### Example 1: Code Review Assistant
```
Name: Code Reviewer

Instructions:
You're an experienced software engineer focused on code quality and best practices. 

When reviewing code:
1. Check for security vulnerabilities and performance issues
2. Verify adherence to our coding standards (see uploaded style guide)
3. Suggest improvements for readability and maintainability
4. Point out missing tests or documentation
5. Be constructive and specific in feedback

Always format your response with:
- ✅ What's good about the code
- ⚠️ Issues to address
- 💡 Specific improvement suggestions
- 🧪 Testing recommendations

Use a collaborative, helpful tone—we're all learning.
```

**Knowledge files**: Upload your team's style guide, security checklist, and common code patterns.

### Example 2: API Documentation Helper
```
Name: API Expert

Instructions:
You're a technical documentation specialist who helps engineers understand and use our internal APIs.

When someone asks about an API:
1. Reference our uploaded API specs for accurate information
2. Provide working code examples in their preferred language
3. Explain authentication requirements clearly
4. Include error handling examples
5. Mention rate limits and best practices

If the API docs don't cover something, say so clearly and suggest who to contact.

Always format responses with:
- Brief explanation
- Code example
- Common gotchas
- Related endpoints they might need
```

**Knowledge files**: Upload OpenAPI specs, Postman collections, and internal API documentation.

### Example 3: Infrastructure Troubleshooter
```
Name: DevOps Helper

Instructions:
You're a senior DevOps engineer who helps troubleshoot infrastructure issues and suggests solutions.

When someone reports a problem:
1. Ask clarifying questions about symptoms and timeline
2. Reference our runbooks and troubleshooting guides (uploaded files)
3. Suggest systematic debugging steps
4. Provide specific commands or scripts when helpful
5. Escalate to on-call if issues are critical

Focus on:
- Quick wins and common fixes first
- Monitoring and observability
- Prevention strategies
- Clear, actionable steps

Keep responses concise but thorough.
```

**Knowledge files**: Upload runbooks, monitoring playbooks, and infrastructure documentation.

## Tips for Better Gems

### Make Instructions Specific
- Define the role clearly ("You're a senior X engineer...")
- Set output format expectations
- Include dos and don'ts
- Specify tone and communication style

### Use the Knowledge Feature Strategically
- Upload the most frequently referenced docs
- Keep files current—outdated docs lead to wrong answers
- Each Gem can have up to 10 files, so choose wisely
- Test that the Gem actually uses the uploaded information

### Test and Iterate
Use the preview panel to test your Gem with real scenarios before saving. Ask it:
- Typical questions your team would ask
- Edge cases and tricky situations
- Questions that should reference your uploaded docs

### Keep It Focused
Don't try to make one Gem do everything. Better to have focused Gems:
- One for code review
- One for API questions  
- One for deployment help
- One for architecture discussions

## Advanced Use Cases

### Integration Testing Helper
Create a Gem that knows your test patterns and can help write integration tests, mock setups, and test data generation.

### Architecture Decision Assistant
Upload your ADRs (Architecture Decision Records) and create a Gem that helps evaluate new technical decisions against your established patterns.

### Documentation Generator
Build a Gem that knows your documentation standards and can help write or improve technical docs, API references, and README files.

### Security Review Bot
Create a Gem loaded with your security guidelines that can review code, architecture designs, and deployment configurations for security issues.

## Current Limitations and Workarounds

### What Gems Can't Do (Yet)
- Can't execute code or make API calls
- Can't access live systems or databases
- Can't learn from individual conversations (each chat starts fresh)
- Limited to text-based interactions

### Workarounds
- For code execution: Have your Gem generate scripts you can run locally
- For live data: Upload recent exports or logs as knowledge files
- For persistence: Save important context in your instructions

## Getting Your Team On Board

### Start Small
Begin with one useful Gem that solves a common pain point. Once people see the value, they'll want more.

### Share and Collaborate
Gems can be shared within your organization. Create team-wide Gems for common processes.

### Document Your Gems
Keep a team wiki of available Gems and what they're good for. Include example prompts that work well.

### Regular Maintenance
Review and update your Gems' knowledge files regularly. Outdated documentation leads to outdated advice.

## Troubleshooting Common Issues

**Gem gives generic responses**: Your instructions might be too vague. Be more specific about role and expectations.

**Gem ignores uploaded files**: Test explicitly by asking "What do you know about [specific topic from uploaded file]?"

**Responses are too long/short**: Add length guidelines to your instructions ("Keep responses under 200 words" or "Provide detailed explanations").

**Gem contradicts your docs**: Your instructions might conflict with uploaded knowledge. Review and align them.

## Next Steps

1. **Start with one practical Gem** that addresses a real workflow pain point
2. **Test it thoroughly** with real scenarios your team faces
3. **Share it with a few colleagues** and get feedback
4. **Iterate based on usage** and refine the instructions
5. **Scale up** with more specialized Gems as you learn what works

Remember: The best Gems are the ones your team actually uses. Focus on solving real problems rather than building the "perfect" AI assistant.

---

*This guide reflects Gemini Gems capabilities as of July 2025. Features and availability may change as Google continues to develop the platform.*