module.exports = function(eleventyConfig) {
  // Pass through your existing CSS/JS/images
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};