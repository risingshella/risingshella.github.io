<script>
  import { Carta, Markdown } from "carta-md"
  import DOMPurify from "isomorphic-dompurify"
  import { code } from "@cartamd/plugin-code"
  import "$lib/styles/markdown.pcss"

  const carta = new Carta({
    extensions: [code()],
    sanitizer: DOMPurify.sanitize
  })

  let { data } = $props()
  let value = data["md_test_file"]
</script>

<div class="my-6 flex justify-around px-4">
  <div class="markdown min-w-0 max-w-5xl"><Markdown {carta} {value} /></div>
</div>
