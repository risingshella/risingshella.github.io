# Cách mà em tạo website này

---

## 1. Các công cụ em dùng

- **[Visual Studio Code](https://code.visualstudio.com/)**

Trình chỉnh sửa code em dùng

- **[Svelte & SvelteKit](https://svelte.dev/)**

Framework để dựng website

- **[TailwindCSS](https://tailwindcss.com/)**

CSS framework

- **[Cloudflare Pages](https://pages.cloudflare.com/)**

Nơi em deploy cái website này

- **Một số công cụ khác trong** `package.json`

```json
"devDependencies": {
  "@sveltejs/adapter-auto": "^3.0.0",
  "@sveltejs/adapter-static": "^3.0.6",
  "@sveltejs/kit": "^2.9.0",
  "@sveltejs/vite-plugin-svelte": "^5.0.0",
  "autoprefixer": "^10.4.20",
  "prettier": "^3.4.2",
  "prettier-plugin-svelte": "^3.2.6",
  "prettier-plugin-tailwindcss": "^0.6.9",
  "svelte": "^5.0.0",
  "svelte-copy": "^2.0.0",
  "tailwindcss": "^3.4.9",
  "vite": "^6.0.0"
},
"dependencies": {
  "@cartamd/plugin-code": "^4.0.6",
  "@giscus/svelte": "^3.0.0",
  "carta-md": "^4.6.7",
  "isomorphic-dompurify": "^2.19.0",
  "lucide-svelte": "^0.468.0"
}
```

## 2. Tạo website

### 2.1. Setup

- Cài nodejs, pnpm, git, ...
- Tạo repo mới, repo của website này được để trên [GitHub](https://github.com/shellawa/www)
- Cài sveltekit và các thứ liên quan

### 2.2. Tiến hành

#### Cấu trúc website

- Homepage
  - About
    - Có các link mang thông tin chính
  - Blogs
    - Trình render markdown bởi carta
    - Phần comment bởi giscus
  - Novels (Chưa được hoàn thiện)

#### General

Đầu tiên em chọn màu cho website, chủ yếu là [slate của tailwind](https://tailwindcss.com/docs/customizing-colors)

Nền website là một cái gradient xuống góc dưới trái.

Phông chữ thì em dùng [Inter](https://fonts.google.com/specimen/Inter) cho chữ thường và [Fira Code](https://fonts.google.com/specimen/Fira+Code) cho monospace.

Em tạo cái navigator chứa link dẫn đến trang nhỏ (About, Blogs, Novels).

Do có trang about rồi nên không làm phần footer nữa.

#### Homepage

Ở đây thì không có gì nhiều lắm, em thiết kế cái logo (mà xấu quá nên chắc phải làm lại), rồi thêm 2 cái nút bên dưới để dẫn đến trang blogs với novels là xong.

#### About

Chứa các liên kết mxh với thông tin của em, thiết kế giống bên carrd.

Client khi vào trang sẽ fetch thông tin [từ github](https://github.com/shellawa/www/blob/contents/general/profile_links.json), sau đó sẽ hiển thị tương ứng.

#### Blogs

Client khi vào trang sẽ fetch danh sách blog [từ github](https://github.com/shellawa/www/blob/contents/blogs/map.json), sau đó thì sẽ hiển thị danh sách blogs. Sau này em đăng nhiều lên đây thì sẽ tách danh sách ra làm nhiều trang.

Mỗi blogs là một file markdown (.md) như cái trang mà đang được hiển thị ở đây. Client fetch file markdown về và được render bằng [carta-md](https://beartocode.github.io/carta/). Dưới blogs có phần comment được cung cấp bởi [giscus](https://giscus.app/).

#### Novels

Chưa có gì ở đây.

### 2.3. Deploy website

Trong khi thiết kế website thì với vite, ta có thể chạy `npm run dev` để xem cái website nó trông như nào. Nhưng khi deploy website thì phải build website trước rồi mới thích hợp để người dùng xem được.

Output sau khi build có cấu trúc như sau
![](https://gist.github.com/user-attachments/assets/56961bc6-ab32-4b6d-a34d-f089709bea18)

Em dùng [Cloudflare Pages](https://pages.cloudflare.com/) để chạy website này vì nó miễn phí đối với các website tĩnh. Code của website được để trên github sẽ được tự động build bởi cloudflare, sau đó được đưa lên hệ thống của họ để truy cập.

![](https://gist.github.com/user-attachments/assets/db5a7b37-173f-4865-be54-9fd604fc2801)