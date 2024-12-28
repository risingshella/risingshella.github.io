export async function load({ fetch }) {
  const res = await fetch(
    "https://raw.githubusercontent.com/shellawa/www/refs/heads/contents/general/profile_links.json"
  )
  const profile_links = await res.json()
  return { profile_links }
}
