<script>
  import { PUBLIC_CONTENT_ORIGIN } from "$env/static/public"
  let { blog } = $props()
</script>

<a href="/blogs/{blog.path}">
  <div
    class="h-96 w-72 rounded-md border border-slate-300/10 bg-slate-700/50 transition-all hover:scale-[1.03] hover:bg-slate-700/75"
  >
    <img
      class="h-44 w-full rounded-t-md object-cover"
      src="{PUBLIC_CONTENT_ORIGIN}/blogs/covers/{blog.path}.jpg"
      alt={blog.title}
    />
    <div class="p-4">
      <h2 class="mb-2 text-xl font-semibold text-slate-50">{blog.title}</h2>
      <p class="text-justify text-sm text-slate-50/50">{blog.desc}</p>
    </div>
  </div>
</a>
