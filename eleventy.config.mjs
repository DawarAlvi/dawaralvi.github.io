export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./src/public/": "/",
  });
  
  eleventyConfig.addTemplateFormats("mdx");

  // Filters
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (code, callback) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });
  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });
  eleventyConfig.addFilter("excerpt", (post, length = 100) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", length)) + "...";
  });
  eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
    const date = new Date(dateObj);
    const formatted = date.toLocaleString('en-US', {
      month: 'short',
      year: 'numeric'
    });
    return formatted;
  });
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });
  eleventyConfig.addFilter("getAllTags", (collection) => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    }
    return Array.from(tagSet);
  });
  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts", "blog"].indexOf(tag) === -1
    );
  });
  eleventyConfig.addFilter("hasPostTag", function hasPostTag(tags) {
    return (tags || []).indexOf("post") > -1;
  });

  // Ignore posts with `draft: true`
  // When `permalink` is false, the file is not written to disk
	eleventyConfig.addGlobalData("eleventyComputed.permalink", function () {
		return (data) => {
			// Always skip during non-watch/serve builds
			if (data.draft && !process.env.BUILD_DRAFTS) {
				return false;
			}

			return data.permalink;
		};
	});

	// When `eleventyExcludeFromCollections` is true, the file is not included in any collections
	eleventyConfig.addGlobalData(
		"eleventyComputed.eleventyExcludeFromCollections",
		function () {
			return (data) => {
				// Always exclude from non-watch/serve builds
				if (data.draft && !process.env.BUILD_DRAFTS) {
					return true;
				}

				return data.eleventyExcludeFromCollections;
			};
		}
	);

  return {
    dir: {
      input: "src",
    },
  };
}
