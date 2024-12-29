import { PUBLIC_CONTENT_ORIGIN } from "$env/static/public"

export async function load({ fetch }) {
  const res = await fetch(`${PUBLIC_CONTENT_ORIGIN}/general/profile_links.json`)
  const profile_links = await res.json()
  return { profile_links }
}
