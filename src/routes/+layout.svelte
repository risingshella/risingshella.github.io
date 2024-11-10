<script>
  import "../app.css"
  import Navigator from "$lib/components/Navigator.svelte"
  let { children } = $props()
</script>

<Navigator />

{@render children()}
