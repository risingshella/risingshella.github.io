<script>
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js"
  import { Menu } from "lucide-svelte"
  import { page } from "$app/stores"

  const routes = [
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/novels", label: "Novels" }
  ]
  const typeOfCorner = {
    "/": "",
    "/about": "little",
    "/blogs": "blogs",
    "/novels": "novels"
  }

  let pageSubtitle = $derived(typeOfCorner[$page.url.pathname])
</script>

<header class="border-b border-slate-300/10">
  <div class="font-san container flex items-center justify-between px-8 py-4">
    <a class="group text-lg font-bold text-slate-50" href="/"
      >shellawa
      <span class="text-slate-400 transition-colors group-hover:text-slate-200">'s {pageSubtitle} corner</span>
    </a>

    <div class="flex items-center sm:hidden">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger class="text-slate-200"><Menu /></DropdownMenu.Trigger>
        <DropdownMenu.Content class="border-slate-900 bg-slate-900 font-bold text-slate-200">
          <DropdownMenu.Group>
            {#each routes as { href, label }}
              <DropdownMenu.Item><a {href}>{label}</a></DropdownMenu.Item>
            {/each}
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>

    <nav class="hidden items-center gap-8 font-bold text-slate-200 sm:flex">
      {#each routes as { href, label }}
        <a {href}>{label}</a>
      {/each}
    </nav>
  </div>
</header>
