module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  // Blog collection — grabs all markdown files in /blog, sorted newest first
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/*.md").reverse();
  });

  // Format dates nicely
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};