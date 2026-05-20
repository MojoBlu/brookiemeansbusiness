module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/*.md").reverse();
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  eleventyConfig.addFilter("absoluteUrl", (url, base) => {
    return new URL(url, base).toString();
  });

  return {
    dir: {
      input: "blog",
      output: "blog",
      includes: "../_includes"
    }
  };
};
