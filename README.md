# WISeAgent Blogs

## project setup

```bash
myrepo=blogs
mkdir $myrepo && cd $myrepo
npm init -y
npm install --save-dev @11ty/eleventy
```

## Test and deploy
1. Add sample content to `content/`.
2. Run locally: `npx @11ty/eleventy --serve` or `npx eleventy`.
3. Commit and push to `$myrepo`.
4. Create a PR to `main`; merge it to trigger CI/CD.

## Add Category, Subcategory and Pages Manually

### Adding a Category

1. Create a new directory under the `content` folder with the name of the category.
2. Add an `index.md` file in the new directory with the following frontmatter:

```yaml
---
title: "Category Title"
layout: index.njk
category: CategoryName
parent: /
parentTitle: Home
---
```

### Adding a Subcategory

1. Create a new directory under the desired category directory.
2. Add an `index.md` file in the new subcategory directory with the following frontmatter:

```yaml
---
title: "Subcategory Title"
layout: index.njk
category: CategoryName
parent: /CategoryName/
parentTitle: Category Title
---
```

### Adding a Page

1. Create a new Markdown file in the desired category or subcategory directory.
2. Add the following frontmatter to the new Markdown file:

```yaml
---
title: "Page Title"
date: YYYY-MM-DD
layout: post.njk
category: CategoryName
parent: /CategoryName/SubcategoryName/
parentTitle: Subcategory Title
---
```

3. Add your content below the frontmatter.

### Example

For a new category "Tech Savvy":

1. Create `content/TechSavvy/index.md`:

```yaml
---
title: "Tech Savvy"
layout: index.njk
category: TechSavvy
parent: /
parentTitle: Home
---
```

For a subcategory "AWS" under "Tech Savvy":

1. Create `content/TechSavvy/AWS/index.md`:

```yaml
---
title: "AWS"
layout: index.njk
category: TechSavvy
parent: /TechSavvy/
parentTitle: Tech Savvy
---
```

For a page "AWS CloudFormation Functions" under "AWS":

1. Create `content/TechSavvy/AWS/AWS_CFN_Functions.md`:

```yaml
---
title: "AWS CloudFormation Functions"
date: 2025-03-22
layout: post.njk
category: TechSavvy
parent: /TechSavvy/AWS/
parentTitle: AWS
---
```

Add your content below the frontmatter.

By following these steps, you can easily add new categories, subcategories, and pages to your blog.