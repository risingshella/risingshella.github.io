<script>
  import Link from "$lib/components/Link.svelte"
  let { links } = $props()
</script>

<div class="mx-auto flex max-w-md justify-center text-xl text-slate-200">
  <div class="flex w-full flex-col gap-3.5">
    {#each links as link}
      <Link {link} />
    {/each}
  </div>
</div>
