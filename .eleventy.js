const customConfig = require("./src/_includes/eleventy");

module.exports = function (eleventyConfig) {
    // Copy static assets to the correct location
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

    // Create a collection for LinkedIn posts
    eleventyConfig.addCollection("LinkedInPost", function(collectionApi) {
        const linkedInPosts = collectionApi.getFilteredByGlob("content/LinkedInPost/**/*.md");
        console.log("LinkedInPost Collection:", linkedInPosts);
        return linkedInPosts;
    });

    // Create a collection for Knowledge Base posts
    eleventyConfig.addCollection("KnowledgeBase", function(collectionApi) {
        const knowledgeBasePosts = collectionApi.getFilteredByGlob("content/KnowledgeBase/**/*.md");
        console.log("KnowledgeBase Collection:", knowledgeBasePosts);
        return knowledgeBasePosts;
    });

    // Apply custom configurations
    customConfig(eleventyConfig);

    return {
        dir: {
            input: "content", // Markdown files
            output: "docs", // Generated site
            includes: "../src/_includes" // Layouts
        },
        pathPrefix: "/blogs/" // Add this line to set the base path
    };
};