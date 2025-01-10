<script>
  import Giscus from "@giscus/svelte"
  import "$lib/styles/markdown.pcss"

  let { data } = $props()
</script>

<div class="my-6 flex justify-around px-4">
  <div class="markdown min-w-0 max-w-5xl">
    {@html data.html}
    <Giscus
      repo="shellawa/www"
      repoId="MDEwOlJlcG9zaXRvcnkzNzU1NjEwMTg="
      category="Giscus"
      categoryId="DIC_kwDOFmKbOs4Clk1Z"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="transparent_dark"
      lang="en"
      loading="lazy"
    />
  </div>
</div>
