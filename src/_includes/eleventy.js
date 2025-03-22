eleventyConfig.addCollection("LinkedInPost", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/LinkedInPost/**/*.md");
});
eleventyConfig.addCollection("KnowledgeBase", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/KnowledgeBase/**/*.md");
});