export async function load({ fetch }) {
  const res = await fetch(
    "https://raw.githubusercontent.com/shellawa/shellawa.github.io/refs/heads/dev/README.md"
  );
  const data = await res.text();
  return { data };
}
