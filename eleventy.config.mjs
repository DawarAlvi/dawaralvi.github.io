export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./src/public/": "/",
  });
  
  eleventyConfig.addTemplateFormats("mdx");

  return {
    dir: {
      input: "src",
    },
  };
}
