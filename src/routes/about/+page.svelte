<script>
  import LinksSection from "$lib/components/LinksSection.svelte"
  let { data } = $props()
</script>

<svelte:head>
  <title>shellawa's little corner</title>
  <meta name="description" content="shellawa's little corner" />
</svelte:head>

<div class="mx-4 mb-8">
  <div class="my-4 text-center md:my-10">
    <h1 class="text-2xl font-bold text-slate-200">Hi there, I'm shellawa</h1>
    <p class="mx-auto mt-2 max-w-3xl text-slate-200/75 md:mt-4 md:text-lg">
      This is where I share games stuff, things I'm learning, and anything else that seems interesting. I'm also
      learning to translate novels—check out the novels page if you're curious, though it's still pretty much empty
      there.
    </p>
  </div>

  <LinksSection links={data.profile_links} />
</div>
