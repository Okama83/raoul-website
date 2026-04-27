const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.ignores.add("src/_templates");

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/commonplace/posts/*.md").reverse()
  );

  eleventyConfig.addCollection("lab", (api) =>
    api.getFilteredByGlob("src/lab/*.md").reverse()
  );

  eleventyConfig.addCollection("vault", (api) =>
    api.getFilteredByGlob("src/vault/*.md").reverse()
  );

  eleventyConfig.addFilter("dateDisplay", (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
