<script>
  import { Menu, X } from "lucide-svelte"
  import { page } from "$app/stores"

  const routes = [
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/novels", label: "Novels" }
  ]
  const typeOfCorner = {
    "": "little ",
    about: "little ",
    blogs: "blogs ",
    novels: "novels "
  }

  let pageSubtitle = $derived(typeOfCorner[$page.url.pathname.split("/")[1]])
  let isMenuOpened = $state(false)
</script>

<div class="sticky top-0 z-50">
  <header class="w-full border-b border-slate-300/10 bg-slate-900/65 backdrop-blur-md">
    <div class="flex items-center py-4 font-sans sm:justify-around">
      <div class="flex items-center px-4 text-slate-100 sm:hidden">
        <button onclick={() => (isMenuOpened = !isMenuOpened)}>
          {#if !isMenuOpened}
            <Menu />
          {:else}
            <X />
          {/if}
        </button>
      </div>

      <a class="group whitespace-pre text-lg font-bold text-slate-50 sm:pl-0" href="/">
        shellawa<span class="text-slate-400 transition-colors group-hover:text-slate-200"
          >'s {pageSubtitle}corner
        </span>
      </a>

      <nav class="hidden items-center gap-8 font-bold text-slate-200 sm:flex">
        {#each routes as { href, label }}
          <a {href}>{label}</a>
        {/each}
      </nav>
    </div>
  </header>

  <!-- dropdown -->
  {#if isMenuOpened}
    <div
      id="menu"
      class="absolute z-50 max-h-fit w-28 rounded-b-md border-x border-slate-300/10 bg-slate-900/65 font-semibold text-slate-100 outline-none backdrop-blur-md"
    >
      {#each routes as { href, label }}
        <a class="block h-full w-full border-b border-b-slate-500/5 p-3" {href}>{label}</a>
      {/each}
    </div>
  {/if}
</div>
