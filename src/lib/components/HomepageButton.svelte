<script>
  let { href, label, icon, colors } = $props()
</script>

<a {href}>
  <div class="flex h-12 w-44 items-center rounded-md shadow-md transition-all hover:scale-[1.03] {colors}">
    <div class="absolute ml-3">
      {@render icon()}
    </div>
    <div class="mx-auto font-semibold">
      {@render label()}
    </div>
  </div>
</a>
