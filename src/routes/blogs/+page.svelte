<script>
  let { data } = $props()
  console.log(data)
</script>

<div>
  {#each data.blogs_map as { id, title }}
    <div><a href="/blogs/{id}">{title}</a></div>
  {/each}
</div>
