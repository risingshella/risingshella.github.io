<script>
  import LinksSection from "$lib/components/LinksSection.svelte"
  let { data } = $props()
</script>

<div class="mx-4 mb-8">
  <div class="my-4 text-center text-slate-200 md:my-10">
    <h1 class="text-2xl font-bold">Hi there, I'm shellawa</h1>
    <p class="mx-auto mt-2 max-w-3xl md:mt-4 md:text-lg">
      This is where I share games stuff, things I'm learning, and anything else that seems interesting. I'm also
      learning to translate novels—check out the novels page if you're curious, though it's still pretty much empty
      there.
    </p>
  </div>

  <LinksSection links={data.profile_links} />
</div>
