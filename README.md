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

## Development Workflow

### Using Make

The project includes a Makefile for common development tasks:

```bash
# Install all dependencies
make deps

# Run spell check
make spellcheck

# Run markdown linting
make lint

# Start local development server
make local

# Run all checks and start server
make all

# See all available commands
make help
```

### Local Testing Before PR

Before submitting a Pull Request, ensure your changes pass all checks locally:

```bash
# Install required development tools
npm install -g markdownlint-cli cspell

# Run spell check
cspell "**/*.{md,mdx}"

# Run markdown linting
markdownlint "**/*.md" --ignore node_modules

# Build the site locally
npm run build

# Test the built site
npm run serve
```

### Pull Request Workflow

1. Create a new branch for your changes:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and test locally using the commands above

3. Commit and push your changes:
```bash
git add .
git commit -m "description of your changes"
git push origin feature/your-feature-name
```

4. Create a Pull Request on GitHub

5. The GitHub Actions workflow will:
   - Run spell checking on all markdown files
   - Perform markdown linting
   - Build and deploy the site when the PR is merged

### Common Issues and Solutions

- If spell check fails:
  - Review the spell check output
  - Add any legitimate technical terms to `.cspell.json`

- If markdown lint fails:
  - Check line lengths (should be ≤ 120 characters)
  - Ensure proper heading hierarchy
  - Verify list formatting

- If build fails:
  - Check console output for errors
  - Verify all images and assets are committed
  - Ensure all required dependencies are installed

## Code Quality and Documentation Standards

### Markdown Linting

The project uses `markdownlint-cli` to ensure consistent markdown formatting. Configuration can be found in `.markdownlint.json`.

```bash
# Install markdownlint-cli (if not already installed)
npm install --save-dev markdownlint-cli

# Run markdown linting
npm run lint:md
# or directly with npx
npx markdownlint "**/*.md" --ignore node_modules
```

### Spell Checking

We use `cspell` for spell checking markdown files. Custom dictionary and configuration can be found in `.cspell.json`.

```bash
# Install cspell (if not already installed)
npm install --save-dev cspell

# Run spell check
npm run spellcheck
# or directly with npx
npx cspell "**/*.{md,mdx}"
```

### Local Development Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    // ...existing scripts...
    "lint:md": "markdownlint \"**/*.md\" --ignore node_modules",
    "spellcheck": "cspell \"**/*.{md,mdx}\""
  }
}
```

## Content Organization

The repository is structured for clarity and scalability. Top-level folders and their purposes:

- `blog/`  
  Contains all blog posts, organized by year/month (e.g., `blog/2025/04/`). Each post is a Markdown (`.md` or `.mdx`) file. Use subfolders for chronological or topical grouping.

- `docs/`  
  Technical documentation, guides, and reference material. Subfolders group content by topic, technology, or audience (e.g., `docs/AWS/`, `docs/Lifestyle/`). Each doc is a Markdown file.

- `src/`  
  React components, custom pages, and CSS for site customization.

- `static/`  
  Static assets such as images, downloadable files, and favicon. Use subfolders like `static/img/blog/` for blog images.

**Best Practice:**  
- Keep blog posts in `blog/YYYY/MM/` for easy navigation and archiving.
- Group docs by subject area or audience in `docs/`.
- Place all images in `static/img/` and reference them with absolute paths (e.g., `/img/blog/my-image.png`).

---

## docusaurus.config.js: Site Configuration

The `docusaurus.config.js` file controls site-wide settings, navigation, theming, and plugin options.

**Key Sections:**
- `title`, `tagline`, `url`, `baseUrl`: Site metadata and deployment settings.
- `presets`: Configure docs, blog, and theme options.
- `themeConfig`: Controls navbar, footer, color themes, and more.

**How to Add New Navbar or Footer Entries:**
1. Open `docusaurus.config.js`.
2. Find the `themeConfig.navbar.items` array for the top navigation bar.
3. Add a new object for your entry, e.g.:
   ```js
   {
     label: 'My Guide',
     to: '/docs/my-guide',
     position: 'left'
   }
   ```
4. For footer links, edit `themeConfig.footer.links`.

**Tip:**  
- Use `type: 'docSidebar'` for dropdowns that link to a sidebar group.
- Use `to: '/blog'` or `to: '/docs/...'` for direct links.

---

## Adding New Content

### Add a New Blog Post

1. Create a new Markdown file in `blog/YYYY/MM/`, e.g. `blog/2025/06/2025-06-30-my-new-post.md`.
2. Add front matter at the top:
   ```
   ---
   title: "My New Post"
   authors: [yourname]
   tags: [tag1, tag2]
   slug: my-new-post
   ---
   ```
3. Write your content below the front matter.
4. Add images to `static/img/blog/` and reference them as `/img/blog/your-image.png`.

### Add a New Documentation Page

1. Create a Markdown file in the appropriate `docs/` subfolder, e.g. `docs/AWS/aws-best-practices.md`.
2. Add front matter:
   ```
   ---
   id: aws-best-practices
   title: AWS Best Practices
   sidebar_label: AWS Best Practices
   ---
   ```
3. Write your documentation content.
4. Update `sidebars.js` if you want to add the new page to a sidebar group.

**Tip:**  
- Use headings (`##`, `###`) for structure.
- Use code blocks and images as needed.
- For advanced docs, use `.mdx` for React components.

---

Continue using the rest of this README for setup, development, and workflow instructions.