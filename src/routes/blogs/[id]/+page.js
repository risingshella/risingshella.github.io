import { PUBLIC_CONTENT_ORIGIN } from "$env/static/public"

export async function load({ fetch, url }) {
  const res = await fetch(`${PUBLIC_CONTENT_ORIGIN}/_dist/${url.pathname.split("/")[2]}.html`)
  const html = await res.text()
  return { html }
}
