<script>
  import BlogCard from "$lib/components/BlogCard.svelte"
  let { data } = $props()
</script>

<div class="mx-auto flex max-w-5xl flex-wrap justify-around">
  {#each data.blogs_map as blog}
    <div class="mx-1 pb-12"><BlogCard {blog} /></div>
  {/each}
</div>
