export async function load({ fetch }) {
  const res = await fetch(
    "https://raw.githubusercontent.com/BearToCode/carta/983c1874b927f39035d3b2df97f79ca205679113/docs/src/pages/plugins/component.svelte.md"
  )
  const md_test_file = await res.text()
  return { md_test_file }
}
