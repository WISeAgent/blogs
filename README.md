# WISeAgent Documentation and Blog

A comprehensive documentation and blog platform built with [Docusaurus v2](https://docusaurus.io/), featuring technical guides, AI/ML insights, and lifestyle content. This site uses Docusaurus's classic template with enhanced blog and documentation features.

## Project Structure
```
├── blog/     # Blog posts about AI, tech trends
├── docs/     # Technical documentation, guides, and etc content
├── src/      # React components and custom styles
└── static/   # Static assets (images, files)
```

## Prerequisites

- Node.js (v16.14 or above)
- Package manager (yarn v1.22+ or npm v8+)
- Git (v2.32+)

## Package Dependencies

### Core Dependencies
- `@docusaurus/core` (v3.x) - Docusaurus core framework
- `@docusaurus/preset-classic` - Standard feature preset including:
  - Documentation (powered by MDX)
  - Blog (with tags and pagination)
  - Theme (with light/dark mode)
  - Search functionality
- `react` & `react-dom` (v18.x)
- `prism-react-renderer` - Syntax highlighting

### Development Dependencies
- `@docusaurus/module-type-aliases`
- `@docusaurus/types`

## Installation

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/WISeAgent/blogs.git
cd blogs

# Using yarn (recommended)
yarn install

# Or using npm
npm install

# Install additional dependencies if needed
yarn add @docusaurus/core@latest @docusaurus/preset-classic@latest
yarn add prism-react-renderer
```

### Manual Setup (Fresh Installation)

```bash
# Create a new Docusaurus site
npx create-docusaurus@latest my-website classic

# Navigate to project directory
cd my-website

# Install required dependencies
yarn add @docusaurus/core @docusaurus/preset-classic
yarn add prism-react-renderer
yarn add @docusaurus/theme-search-algolia  # Optional: for search functionality

# Or using npm
npm install @docusaurus/core @docusaurus/preset-classic
npm install prism-react-renderer
npm install @docusaurus/theme-search-algolia  # Optional: for search functionality
```

## Local Development

Start the development server with hot-reload:

```bash
# Using yarn (recommended)
yarn start

# Or using npm
npm run start
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### Useful Commands

```bash
# Clear Docusaurus cache (if you encounter build issues)
yarn clear    # or npm run clear

# Build the static site
yarn build    # or npm run build

# Serve the built site locally
yarn serve    # or npm run serve

# Deploy to GitHub Pages
GIT_USER=<username> yarn deploy    # or npm run deploy
```
