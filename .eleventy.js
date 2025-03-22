module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets"); // Copy static assets
    return {
        dir: {
            input: "content", // Markdown files
            output: "public", // Generated site
            includes: "../src/_includes" // Layouts
        }
    };
};