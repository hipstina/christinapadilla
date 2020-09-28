// set template engine to liquid
module.exports = {
    markdownTemplateEngine: "liquid"
};

// add scss-generated, min.css folder to _site 
// https://michaelsoolee.com/add-css-11ty/
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets/styles/css')
    eleventyConfig.addPassthroughCopy('assets/images')
    return {
      passthroughFileCopy: true
    }
  }