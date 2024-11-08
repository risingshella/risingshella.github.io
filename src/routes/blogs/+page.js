export async function load({ fetch }) {
  const res = await fetch(
    "https://raw.githubusercontent.com/shellawa/shellawa.github.io/refs/heads/dev/contents/blogs/blogs_map.json"
  )
  const blogs_map = await res.json()

  return { blogs_map }
}
