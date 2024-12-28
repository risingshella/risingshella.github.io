<script>
  let { blog } = $props()
</script>

<a href="/blogs/{blog.path}">
  <div class="h-96 w-72 rounded-md border border-slate-300/10 bg-slate-700/50 hover:scale-[1.03] hover:bg-slate-700/75 transition-all">
    <img
      class="h-44 w-full rounded-t-md object-cover"
      src="https://raw.githubusercontent.com/shellawa/shellawa.github.io/refs/heads/contents/blogs/covers/{blog.path}.jpg"
      alt={blog.title}
    />
    <div class="p-4">
      <h2 class="mb-1 text-xl font-semibold text-slate-50">{blog.title}</h2>
      <p class="text-justify text-sm text-slate-50/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum quam voluptates necessitatibus nobis
        aliquam asperiores alias dolorum qui et, dolore non commodi iure harum modi temporibus.
      </p>
    </div>
  </div>
</a>
