export async function load({ fetch }) {
  const res = await fetch(
    "https://raw.githubusercontent.com/shellawa/www/refs/heads/contents/blogs/map.json"
  )
  const blogs_map = await res.json()
  return { blogs_map: Array(12).fill(blogs_map[0]) }
}
