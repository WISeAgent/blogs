const customConfig = require("./src/_includes/eleventy");

module.exports = function (eleventyConfig) {
    // Copy static assets to the correct location
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

    // Create a collection for LinkedIn     const customConfig = require("./src/_includes/eleventy");
    
    module.exports = function (eleventyConfig) {
        // Copy static assets to the correct location
        eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
    
        // Copy images from LinkedInPost directory
        // eleventyConfig.addPassthroughCopy("content/LinkedInPost/**/*.png");
        // eleventyConfig.addPassthroughCopy("content/LinkedInPost/**/*.jpg");
        // eleventyConfig.addPassthroughCopy("content/LinkedInPost/**/*.jpeg");
        // eleventyConfig.addPassthroughCopy("content/LinkedInPost/**/*.gif");
        // // Copy images from KnowledgeBase directory
        // eleventyConfig.addPassthroughCopy("content/KnowledgeBase/**/*.png");
        // eleventyConfig.addPassthroughCopy("content/KnowledgeBase/**/*.jpg");
        // eleventyConfig.addPassthroughCopy("content/KnowledgeBase/**/*.jpeg");
        // eleventyConfig.addPassthroughCopy("content/KnowledgeBase/**/*.gif");
    
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
            }
        };
    };
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
        }
    };
};