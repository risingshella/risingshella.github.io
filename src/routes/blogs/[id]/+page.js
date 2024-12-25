export async function load({ fetch }) {
  const res = await fetch("https://raw.githubusercontent.com/mxstbr/markdown-test-file/refs/heads/master/TEST.md")
  const md_test_file = await res.text()
  return { md_test_file }
}
