import { PUBLIC_CONTENT_ORIGIN } from "$env/static/public"

export async function load({ fetch }) {
  const res = await fetch(`${PUBLIC_CONTENT_ORIGIN}/blogs/map.json`)
  const blogs_map = await res.json()
  return { blogs_map: Array(12).fill(blogs_map[0]) }
}
