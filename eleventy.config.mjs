export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./src/public/": "/",
  });

  // Shortcodes
  eleventyConfig.addShortcode("a", (text, url) =>
    `<a href="${url}" target="_blank" rel="noopener noreferrer nofollow">${text}</a>`
  );
  eleventyConfig.addShortcode("yt", id => `
    <div class="youtube-video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/${id}"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>`);
  
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
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const date = new Date(dateObj);
    const formatted = date.toLocaleString('en-US', {
      month: 'short',
      year: 'numeric'
    });
    return formatted;
  });
  eleventyConfig.addCollection("tagList", (collectionApi) => {
    const tagsSet = new Set();
    collectionApi.getAll().forEach((item) => {
      if (item.data.tags) {
        item.data.tags
          .filter((tag) => !["blog", "all"].includes(tag))
          .forEach((tag) => tagsSet.add(tag));
      }
    });
    return Array.from(tagsSet).sort();
  });
  eleventyConfig.addFilter("filterTagList", tags => {
    return (tags || []).filter(
      tag => ["all", "nav", "post", "posts", "blog"].indexOf(tag) === -1
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

	// When `eleventyExcludeFromCollections` is true, the file is not included in any collection
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
