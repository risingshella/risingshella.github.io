export async function load({ fetch }) {
  const res = await fetch(
    "wprofile/profile_links.json"
  )
  const profile_links = await res.json()
  return { profile_links }
}
