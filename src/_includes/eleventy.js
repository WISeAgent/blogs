module.exports = function(eleventyConfig) {
    // Add a custom filter
    eleventyConfig.addFilter("myCustomFilter", function(value) {
        // Custom filter logic
        return value.toUpperCase();
    });

    // Add a shortcode
    eleventyConfig.addShortcode("myShortcode", function(name) {
        // Custom shortcode logic
        return `<span>Hello, ${name}!</span>`;
    });

    // ...additional customizations...
};
