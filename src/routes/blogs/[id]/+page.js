export async function load({ fetch, url }) {
  const res = await fetch(
    `https://raw.githubusercontent.com/shellawa/shellawa.github.io/refs/heads/contents/blogs/${url.pathname.split("/")[2]}.md`
  )
  const md = await res.text()
  return { md }
}
