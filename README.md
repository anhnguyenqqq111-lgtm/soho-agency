# SOHO Agency website

Website giới thiệu dịch vụ của SOHO Agency (SEO, AI Search, quảng cáo, content, CRO, đo lường). Next.js 15 App Router, xuất tĩnh (`output: 'export'`).

Hướng thiết kế, màu, font và quy tắc giao diện: xem [DESIGN.md](DESIGN.md).

## Chạy project

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # xuất tĩnh ra thư mục out/
```

Build cho GitHub Pages (basePath `/soho-agency`):

```bash
GITHUB_PAGES=true npm run build
```

Mọi link nội bộ và đường dẫn ảnh phải đi qua `sitePath()` trong `components/paths.js` để chạy đúng với basePath.

## Cấu trúc

```text
app/
  layout.js              font (Newsreader, Be Vietnam Pro), metadata mặc định
  styles/tokens.css      biến màu, chữ, khoảng cách
  styles/base.css        reset, typography, .prose cho bài viết
  page.js                trang chủ
  dich-vu/               danh sách + chi tiết 9 dịch vụ
  giai-phap/             danh sách + chi tiết 6 giải pháp
  ket-qua/  ve-soho/  lien-he/  blog/
components/
  Header.js, NavMenu.js  header (NavMenu là client component cho mega menu, menu mobile)
  Footer.js
  ContactForm.js         form liên hệ (client), chưa nối API, xem TODO trong file
  ui/                    Section, PageHeader, NumberedList, LinkRows, Button, CtaBand
  article/               ArticleBody: render bài viết dịch vụ từ markdown, mục lục, FAQ
  data/clients.js        khách hàng hiển thị trên trang chủ và trang Kết quả
  servicePagesData.js    dữ liệu 9 dịch vụ
  solutionPagesData.js   dữ liệu 6 giải pháp
  articles/*.js          bài viết dài cho từng dịch vụ (markdown)
  blogData.js            bài blog (HTML)
```

Mỗi component và trang có file `.module.css` riêng. Không dùng thư viện UI hay icon.

## Trước khi xuất bản

Tìm và điền các chỗ còn thiếu:

```bash
grep -rn "\[CẦN" app components
```

Câu có số liệu khẳng định về SOHO trong bài viết dịch vụ được tự động đánh dấu (gạch chân chấm màu vàng) bằng `isClaim()` trong `components/article/parseMarkdown.js`. Cần kiểm chứng hoặc sửa các câu này.

Form liên hệ hiện chỉ hiện thông báo đã gửi, chưa gửi dữ liệu đi đâu.
