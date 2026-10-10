# SOHO Agency website

Website giới thiệu dịch vụ của SOHO Agency (SEO, AI Search, quảng cáo, content, CRO, đo lường).
Next.js 15 App Router, React 19, JavaScript, CSS Modules. Xuất tĩnh (`output: 'export'`), không server, không thư viện UI.

Live: <https://anhnguyenqqq111-lgtm.github.io/soho-agency/>

## Chạy

Yêu cầu Node 20 (có `.nvmrc`).

```bash
npm ci
npm run dev          # http://localhost:3000
npm run build        # xuất tĩnh ra out/
npm run build:pages  # build cho GitHub Pages, basePath /soho-agency
npm run serve        # xem thử thư mục out/
```

## Deploy

Push lên `main` là GitHub Actions tự build và deploy lên GitHub Pages (xem `.github/workflows/pages.yml`).
Workflow đặt `GITHUB_PAGES=true` để `next.config.js` thêm basePath `/soho-agency`.

Mọi link nội bộ và đường dẫn ảnh phải đi qua `sitePath()` trong `components/paths.js`, nếu không sẽ hỏng khi có basePath.

### Demo trên Vercel

Không cần cấu hình gì thêm: không đặt `GITHUB_PAGES` nên basePath rỗng, site chạy ở root domain.

Cách 1, qua web: vào <https://vercel.com/new>, chọn Import Git Repository, trỏ tới repo GitHub này.
Vercel tự nhận Next.js, giữ nguyên Build Command `next build` và Output Directory mặc định, bấm Deploy.
Sau đó mỗi lần push `main` Vercel tự deploy lại; mỗi branch hoặc PR có link preview riêng.

Cách 2, qua CLI:

Chạy từng lệnh một. Lệnh `vercel` tạo bản preview và lần đầu sẽ hỏi link project. Lệnh `vercel --prod` deploy bản chính.

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

Không thêm biến môi trường nào trên Vercel. Nếu lỡ đặt `GITHUB_PAGES=true`, mọi link sẽ thừa `/soho-agency` và hỏng.

## Cấu trúc

```text
app/
  layout.js                  font Be Vietnam Pro, metadata mặc định, RevealObserver
  styles/tokens.css          biến màu, chữ, khoảng cách (toàn bộ màu định nghĩa ở đây)
  styles/base.css            reset, typography, .prose, hiệu ứng hé lộ
  styles/diagram.css         style chung cho sơ đồ SVG
  page.js                    trang chủ
  dich-vu/                   danh sách + chi tiết 9 dịch vụ
  giai-phap/                 danh sách + chi tiết 6 giải pháp
  ket-qua/  ve-soho/  lien-he/  blog/
  chinh-sach-bao-mat/  dieu-khoan-su-dung/   trang pháp lý (bản nháp)

components/
  Header.js, NavMenu.js      header; NavMenu là client component (mega menu, menu mobile)
  Footer.js
  ContactForm.js             form liên hệ (client), chưa nối API, xem TODO trong file
  RevealObserver.js          gắn class is-in cho [data-reveal] khi cuộn tới
  hero/                      Hero (đầu trang) và Visuals (7 minh họa SVG theo trang)
  ui/                        Section, PageHeader, Button, NumberedList, LinkRows, CtaBand, Faq, Fill, ImageSlot, SplitWords
  diagrams/                  JourneyMatrix (trang chủ), ServiceDiagrams (9 sơ đồ dịch vụ), Track, BeforeAfter, svg.js
  proof/                     ProjectCarousel, ProjectGrid, LogoMarquee, PartnerStrip, Testimonials
  article/                   ArticleBody, Toc, Markdown, parseMarkdown: render bài viết dịch vụ từ markdown
  data/company.js            thông tin công ty (địa chỉ, điện thoại, năm thành lập...)
  data/clients.js            khách hàng, dự án
  data/proof.js              chứng nhận đối tác, nhận xét khách hàng
  servicePagesData.js        9 dịch vụ
  solutionPagesData.js       6 giải pháp
  blogData.js                bài blog (HTML trong chuỗi), danh mục, ảnh banner/thumbnail
  articles/*.js              bài viết dài cho từng dịch vụ (markdown trong chuỗi)

public/brand/                logo (bản đã cắt sát: soho-logo-crop.svg, soho-logo-white-crop.svg)
public/clients/              logo khách hàng
public/blog/                 ảnh bài blog (thumbnail và banner dùng chung), render bằng skill creating-images-soho
DESIGN.md                    hướng thiết kế, token, quy tắc
```

Mỗi component và trang có `.module.css` riêng. Server Component mặc định; chỉ `NavMenu`, `ContactForm`, `RevealObserver`, `Toc`, `ProjectCarousel` là client.

## Dữ liệu chưa có

Những chỗ cần dữ liệu thật được render bằng component `Fill` hoặc `ImageSlot`, hiện chữ đỏ `[CẦN ...]` trên trang. Tìm bằng:

```bash
grep -rn "need=\"CẦN\|\[CẦN" app components
```

Điền vào 4 file dữ liệu, giao diện tự cập nhật:

| File | Cần điền |
| --- | --- |
| `components/data/company.js` | tên pháp nhân, mã số thuế, địa chỉ, điện thoại, giờ làm việc, năm thành lập, số khách hàng, quy mô, link mạng xã hội |
| `components/data/clients.js` | ảnh dự án (đặt vào `public/projects/`), kết quả, bối cảnh, việc đã làm |
| `components/data/proof.js` | chứng nhận đối tác (`verified: true` + logo), nhận xét khách hàng |
| `components/servicePagesData.js` | `artifact.image`: ảnh sản phẩm bàn giao mẫu cho từng dịch vụ |

Ảnh đội ngũ, văn phòng trên trang chủ và trang Giới thiệu dùng `ImageSlot` với `src={null}`; thay bằng đường dẫn ảnh thật.

## Blog

Bài viết nằm trong `components/blogData.js`, mỗi bài một object. Trang `/blog` gom bài theo danh mục, thứ tự theo mảng `categories` trong cùng file; ba nhóm đầu là Framework Marketing, Framework SEO, Framework Ads (bài hướng dẫn từng bước). Thêm danh mục mới chỉ cần thêm tên vào mảng này và gán `category` cho bài.

Quy tắc chung của blog (sẽ là quy tắc của CMS sau này), kiểm tra tự động khi build:

- `title` là H1 duy nhất trên trang, tối đa 50 ký tự, cũng là chữ trên thumbnail.
- `metaTitle` là thẻ `<title>`, tối đa 60 ký tự, không thêm hậu tố site.
- `excerpt` là mô tả meta và đoạn dẫn dưới H1.
- `image: {src, alt}` bắt buộc. Một ảnh 1600×1000 dùng chung cho thumbnail trên thẻ bài viết (trang chủ, trang Blog, mục Đọc tiếp) và banner ngay dưới H1 trên trang bài, đều hiển thị 16:10 không cắt. Chữ bên trái là H1, bên phải là cảnh dựng từ nội dung bài (các bước có nhãn, phễu, hub, hai nguồn hợp lại).

Ảnh render bằng skill `creating-images-soho` trong workspace goha-seo-ws2: mỗi bài một file dữ liệu `clients/SOHO/brands/SOHO/keywords/<slug>/images/src/soho-<slug>-cover.data.js` (preset `cover`, trường `palette` chọn màu theo ngữ cảnh bài, trường `scene` dựng cảnh), ảnh ra chép vào `public/blog/<slug>.webp`. Bảng màu, bộ hình khối và kiểu cảnh nằm trong `assets/palettes.js`, `assets/visuals.js`, `assets/scenes.js` của skill.

## Việc còn lại trước khi xuất bản

- Form liên hệ (`components/ContactForm.js`) chỉ hiện thông báo đã gửi, chưa gửi đi đâu. Cần nối API hoặc dịch vụ form.
- Hai trang pháp lý là bản nháp, cần pháp chế duyệt. Đầu trang có dòng cảnh báo đỏ, xóa sau khi duyệt.
- Bài viết dịch vụ có câu số liệu khẳng định về SOHO (gạch chân chấm vàng, đánh dấu tự động bởi `isClaim()` trong `components/article/parseMarkdown.js`). Cần kiểm chứng hoặc sửa.
- Tên tác giả chưa thống nhất giữa `blogData.js` ("Nguyễn Tuấn Anh") và `articles/*.js` ("Nguyễn Thế Tuấn Anh").

## Kiểm tra trước khi merge

```bash
npm run build:pages
```

Build phải pass và ra đủ 34 trang trong `out/`. Mỗi trang đúng một `h1`, heading không nhảy cấp, mọi `img` có `alt`, không tràn ngang ở 375px.
