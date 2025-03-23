const customConfig = require("./src/_includes/eleventy");
const fs = require('fs');
const path = require('path');

module.exports = function (eleventyConfig) {
    // Get all directories in content folder
    const contentPath = 'content';
    const categories = fs.readdirSync(contentPath)
        .filter(item => fs.statSync(path.join(contentPath, item)).isDirectory())
        .filter(item => item !== '_data' && item !== '_includes');

    // Create a collection for each category
    categories.forEach(category => {
        eleventyConfig.addCollection(category, function(collectionApi) {
            // Get all files from this specific category directory
            const posts = collectionApi.getFilteredByGlob([
                `content/${category}/**/*.md`,
                `!content/${category}/index.md`,
                `!content/${category}/**/index.md`
            ]).filter(post => {
                const isIndex = require('path').basename(post.inputPath) === 'index.md';;
                return post.data && post.data.category === category && !isIndex;
            });
            
            // Create a tree structure without circular references
            const tree = {};
            posts.forEach(post => {
                const pathSegments = post.filePathStem
                    .replace(`/content/${category}/`, '')
                    .split('/')
                    .filter(segment => segment !== category);
                
                let current = tree;
                const lastIndex = pathSegments.length - 1;
                
                pathSegments.forEach((segment, index) => {
                    // Only store necessary data to avoid circular references
                    if (!current[segment]) {
                        current[segment] = {
                            name: segment,
                            isLeaf: index === lastIndex,
                            children: {},
                            data: index === lastIndex ? {
                                title: post.data.title,
                                url: post.url
                            } : null
                        };
                    }
                    current = current[segment].children;
                });
            });
    
            // For debugging
            try {
                console.log(`Tree for ${category}:`, JSON.stringify(tree, null, 2));
            } catch (e) {
                console.error(`Error stringifying tree for ${category}:`, e);
            }
            
            return {
                tree: tree,
                posts: posts.map(post => ({
                    title: post.data.title,
                    url: post.url
                }))
            };
        });
    });

    // Copy static assets to the correct location
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

    // Add shortcode for images with pathPrefix
    eleventyConfig.addShortcode("img", function(src, alt, style) {
        return `<img src="${eleventyConfig.getFilter("url")(src)}" alt="${alt}" ${style ? `style="${style}"` : ''}>`;
    });

    // Add date filters
    eleventyConfig.addFilter("dateIso", date => {
        return date.toISOString();
    });

    eleventyConfig.addFilter("dateReadable", date => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    });
    
    // Apply custom configurations
    customConfig(eleventyConfig);

    // Set pathPrefix
    const pathPrefix = "/blogs/";

    return {
        dir: {
            input: "content", // Markdown files
            output: "docs", // Generated site
            includes: "../src/_includes" // Layouts
        },
        pathPrefix: "/blogs/"
    };
};