<script>
  import { Mail } from "lucide-svelte"
  let { link } = $props()
</script>

<a href={link.value} target="_blank">
  <div class="flex items-center rounded-lg border border-slate-600 px-4 py-4 transition-colors hover:bg-slate-800">
    <Mail class="absolute" />
    <div class="mx-auto">{link.label}</div>
  </div>
</a>
