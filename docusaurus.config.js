// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WISeAgent Documentation',
  tagline: 'WISeAgent Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://WISeAgent.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blogs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WISeAgent', // Usually your GitHub org/user name.
  projectName: 'blogs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          authorsMapPath: 'authors.yml',
          path: 'blog',
          routeBasePath: 'blog',
          include: ['2025/**/*.{md,mdx}', 'blog/authors.yml'],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'WISeAgent',
        logo: {
          alt: 'WISeAgent Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar', 
            position: 'left',
            label: 'Documentations',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/WISeAgent',
            label: 'WISeAgent',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/placeholder',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://WISeAgent.github.io/blogs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/WISeAgent',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WISeAgent@gmail.com`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

console.log('Authors Map Path:', path.resolve(__dirname, 'blog/authors.yml'));
console.log('Debugging Blog Plugin: Authors Map Path:', path.resolve(__dirname, 'blog/authors.yml'));
console.log('Debugging Blog Plugin: Authors Map Content:', require('fs').readFileSync(path.resolve(__dirname, 'blog/authors.yml'), 'utf-8'));

export default config;
