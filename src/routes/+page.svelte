<script>
  import { NotebookText, BookOpenText } from "lucide-svelte"
  import HomepageButton from "$lib/components/HomepageButton.svelte"
</script>

<svelte:head>
  <title>shellawa's little corner</title>
  <meta name="description" content="shellawa's little corner" />
</svelte:head>

<div>
  <img src="/logo.webp" alt="logo" class="mx-auto mt-[11%] w-full max-w-[72ch] px-16" />
  <div class="mx-auto mt-12 flex h-28 max-w-md flex-wrap content-between justify-around px-8 sm:mt-24">
    <HomepageButton href="/blogs" colors="bg-orange-200 shadow-orange-300 hover:bg-orange-300">
      {#snippet icon()}
        <NotebookText />
      {/snippet}
      {#snippet label()}
        Blogs
      {/snippet}
    </HomepageButton>
    <HomepageButton href="/novels" colors="bg-teal-200 shadow-teal-300 hover:bg-teal-300">
      {#snippet icon()}
        <BookOpenText />
      {/snippet}
      {#snippet label()}
        Novels
      {/snippet}
    </HomepageButton>
  </div>
</div>
