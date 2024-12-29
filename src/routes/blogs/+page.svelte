<script>
  import BlogCard from "$lib/components/BlogCard.svelte"
  let { data } = $props()
</script>

<svelte:head>
  <title>shellawa's blog corner</title>
  <meta name="description" content="shellawa's blog corner" />
</svelte:head>

<div class="mx-auto flex max-w-5xl px-6 flex-wrap justify-around mt-8">
  {#each data.blogs_map as blog}
    <div class="mx-1 pb-10"><BlogCard {blog} /></div>
  {/each}
</div>
