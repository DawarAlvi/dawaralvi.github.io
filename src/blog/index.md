---
layout: "layouts/simple.html"
eleventyExcludeFromCollections:
  - blog
title: Blog
---

{%- if not collections.blog %}
<div class="blog-list-none">All blog posts will appear here...</div>
{%- else %}
{% assign postslist = collections.blog | reverse %}
{%- include "partials/posts-list.html" %}
{% endif %}