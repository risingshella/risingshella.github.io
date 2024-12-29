import { PUBLIC_CONTENT_ORIGIN } from "$env/static/public"

export async function load({ fetch, url }) {
  const res = await fetch(`${PUBLIC_CONTENT_ORIGIN}/blogs/${url.pathname.split("/")[2]}.md`)
  const md = await res.text()
  return { md }
}
