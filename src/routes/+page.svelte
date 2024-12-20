<script>
  import { NotebookText, BookOpenText } from "lucide-svelte"
</script>

<div class="h-[calc(100vh-61px)] justify-around px-6 pt-10 lg:flex lg:p-0">
  <img
    src="/logo.png"
    class="m-auto max-w-80 pb-6 drop-shadow-2xl filter sm:max-w-sm lg:max-w-xl lg:pb-16"
    alt="logo"
  />
  <div class="m-auto max-w-md px-12 pb-16 text-3xl font-semibold text-slate-700 lg:px-0 lg:text-5xl">
    <a class="my-6 block" href="/blogs">
      <div
        class="flex items-center rounded-2xl bg-orange-100 p-4 text-center transition-all hover:bg-orange-200 hover:shadow-md hover:shadow-orange-400 lg:max-w-7xl lg:p-6"
      >
        <NotebookText size={64} class="mr-4" />
        To the blogs
      </div>
    </a>
    <a class="my-6" href="/novels">
      <div
        class="flex items-center rounded-2xl bg-teal-100 p-4 text-center transition-all hover:bg-teal-200 hover:shadow-md hover:shadow-teal-400 lg:max-w-7xl lg:p-6"
      >
        <BookOpenText size={64} class="mr-4" />
        To the novels
      </div>
    </a>
  </div>
</div>
