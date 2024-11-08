export async function load({ fetch, params }) {
  const res = await fetch(
    `https://raw.githubusercontent.com/shellawa/shellawa.github.io/refs/heads/dev/contents/blogs/${params.id}.md`
  )
  const content = await res.text()

  return { content }
}
