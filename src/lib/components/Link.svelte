<script>
  import { PUBLIC_CONTENT_ORIGIN } from "$env/static/public"
  import { Copy, Check } from "lucide-svelte"
  import { copy } from "svelte-copy"

  let { link } = $props()
  let is_copied = $state(false)

  $effect(() => {
    if (is_copied) setTimeout(() => (is_copied = false), 2000)
  })

  console.log(link)
</script>

<svelte:head>
  <title>About - shellawa</title>
  <meta name="description" content="shellawa's about page" />
</svelte:head>

<div
  class="relative flex items-center rounded-lg border border-slate-600 p-4 transition-all hover:scale-[1.03] hover:bg-slate-800"
>
  {#if link.href}
    <a class="absolute left-0 h-full w-full" aria-label="open" href={link.href} target="_blank"></a>
  {/if}
  <img class="absolute w-6 invert" src="{PUBLIC_CONTENT_ORIGIN}/general/icons/{link.icon}" alt="{link.label} icon" />
  <div class="mx-auto">{link.label}</div>
  {#if link.copy}
    <button
      use:copy={link.copy}
      onclick={() => (is_copied = true)}
      class="absolute right-0 z-50 mr-4 w-6"
      aria-label="copy"
    >
      <div class="rounded-sm bg-slate-800 p-1 hover:bg-slate-600">
        {#if is_copied}
          <Check class="h-full w-full stroke-slate-400" />
        {:else}
          <Copy class="h-full w-full stroke-slate-400" />
        {/if}
      </div>
    </button>
  {/if}
</div>
