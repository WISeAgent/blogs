# WISeAgent Documentation

Documentation and blog site built with [Docusaurus](https://docusaurus.io).

## Project Setup

```bash
# Create a new Docusaurus site
npx create-docusaurus@latest docs classic

# Navigate to project directory
cd docs

# Install dependencies
npm install
```

## Development

Start the development server:
```bash
npm run start
```

Build for production:
```bash
npm run build
npm run serve # Test the production build
```

## Content Organization

### Documentation

Documentation is organized in the `docs/` directory:

1. Create a new document in the appropriate category folder:
```md
---
title: Page Title
sidebar_label: Navigation Label
sidebar_position: 1
description: Brief description for SEO
---

# Page Title
Your content here...
```

2. Update `sidebars.js` if needed to customize the documentation navigation.

### Blog Posts

Blog posts are stored in `blog/` using a date-based format:

1. Create a new blog post:
```md
---
title: Post Title
date: YYYY-MM-DD
authors:
  - wiseagent
slug: url-friendly-title
tags:
  - tag1
  - tag2
---

# Post Title

Brief introduction

<!--truncate-->

Rest of your content...
```

The following blog post directories are supported:
- `blog/` - For standalone blog posts
- `blog/YYYY/MM/` - For year/month organized posts

### Static Assets

- Place images in `static/img/`
- Reference images in markdown: `![alt text](/img/filename.png)`
- Store other static files in `static/`

### Authors

Authors are configured in `blog/authors.yml`:
```yaml
wiseagent:
  name: 'WISeAgent'
  title: 'AI and Tech Enthusiast'
  url: 'https://github.com/WISeAgent'
  image_url: '/img/logo.svg'
```

Reference authors in blog posts using their ID (e.g., `wiseagent`).