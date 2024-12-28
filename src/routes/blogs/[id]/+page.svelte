<script>
  import { Carta, Markdown } from "carta-md"
  import DOMPurify from "isomorphic-dompurify"
  import Giscus from "@giscus/svelte"
  import { code } from "@cartamd/plugin-code"
  import "$lib/styles/markdown.pcss"

  const carta = new Carta({
    extensions: [code()],
    sanitizer: DOMPurify.sanitize,
    theme: "dark-plus"
  })

  let { data } = $props()
  let value = data.md
</script>

<div class="my-6 flex justify-around px-4">
  <div class="markdown min-w-0 max-w-5xl">
    <Markdown {carta} {value} />
    <Giscus
      repo="shellawa/shellawa.github.io"
      repoId="MDEwOlJlcG9zaXRvcnkzNzU1NjEwMTg="
      category="Announcements"
      categoryId="DIC_kwDOFmKbOs4ClkvT"
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
