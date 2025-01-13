import rehypeShiki from "@shikijs/rehype"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"
import fs from "fs"

if (!fs.existsSync("./contents/_dist")) fs.mkdirSync("./contents/_dist")

const blogs = fs.readdirSync("./contents/blogs").filter((x) => x.slice(-3) == ".md")
for (const blog of blogs) {
  const html = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShiki, {
      theme: "dark-plus"
    })
    .use(rehypeStringify)
    .process(fs.readFileSync(`./contents/blogs/${blog}`))

  fs.writeFileSync(`./contents/_dist/${blog.replace(".md", ".html")}`, html.toString())
}
