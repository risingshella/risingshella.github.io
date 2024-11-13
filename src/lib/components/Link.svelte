<script>
  import { Copy } from "lucide-svelte"
  import { copy } from "svelte-copy"

  let { link } = $props()
</script>

<a
  href={link.open ? link.value : ""}
  target={link.open ? "_blank" : "_self"}
  onclick={(event) => {
    if (!link.open) event.preventDefault()
  }}
>
  <div
    class="relative flex items-center rounded-lg border border-slate-600 px-4 py-4 transition-colors hover:bg-slate-800"
  >
    <img class="absolute w-6 invert" src="https://raw.githubusercontent.com/shellawa/shellawa.github.io/refs/heads/dev/contents/static/icons/{link.icon}" alt="" />
    <div class="mx-auto">{link.label}</div>
    {#if link.copy}
      <button
        use:copy={link.value.split(":").pop()}
        onclick={(event) => {
          event.preventDefault()
          alert("Copied to clipboard")
        }}
        class="absolute right-0 mr-4 w-6"
        ><Copy class="rounded-sm bg-slate-800 stroke-slate-400 p-1 hover:bg-slate-600" /></button
      >
    {/if}
  </div>
</a>
