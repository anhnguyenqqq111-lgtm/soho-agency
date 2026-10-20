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
  layout.js                  font Bricolage Grotesque (tiêu đề) + Plus Jakarta Sans (nội dung), metadata mặc định, RevealObserver
  favicon.ico, icon.png, apple-icon.png   favicon: logo Open Corner trên nền Midnight (quy ước file của Next)
  styles/tokens.css          biến màu, chữ, khoảng cách theo màu SOHO Brand Kit v3.0 (nền trắng, màu ở điểm quan trọng) (toàn bộ màu định nghĩa ở đây)
  styles/base.css            reset, typography, .prose, hiệu ứng hé lộ
  styles/diagram.css         style chung cho sơ đồ SVG
  page.js                    trang chủ
  dich-vu/                   danh sách + chi tiết 9 dịch vụ
  giai-phap/                 danh sách + chi tiết 6 giải pháp
  ket-qua/  ve-soho/  lien-he/  blog/
  chinh-sach-bao-mat/  dieu-khoan-su-dung/   trang pháp lý (bản nháp)

components/
  Header.js                  trỏ tới header/SiteHeader.js
  header/                    SiteHeader, Mega Menu dịch vụ (DesktopNavigation, ServicesMegaMenu), drawer mobile; dữ liệu menu ở navigation.js
  Footer.js
  ServiceGroups.js           khối dịch vụ trang chủ (3 thẻ nhóm trên nền cam nhạt)
  ContactForm.js             form Nhận tư vấn (client): kiểm tra từng ô, chống gửi trùng, bẫy bot; gửi tới NEXT_PUBLIC_FORM_ENDPOINT
  home/                      khối trang chủ: ServicesGrid + ServiceArt (6 hình SVG), Differentiators, ProjectShowcase, ProcessAccordion
  RevealObserver.js          gắn class is-in cho [data-reveal] khi cuộn tới
  hero/                      Hero (đầu trang) và Visuals (7 minh họa SVG theo trang)
  ui/                        Section, PageHeader, Button, NumberedList, LinkRows, CtaBand, Faq, Fill, ImageSlot
  diagrams/                  JourneyMatrix (trang chủ), ServiceDiagrams (9 sơ đồ dịch vụ), Track, BeforeAfter, svg.js
  proof/                     ProjectGrid, LogoMarquee, PartnerStrip, PartnerBadge, Testimonials
  ui/Icon.js                 bộ icon duy nhất (Lucide); không dùng ký tự hay icon tự vẽ
  article/                   ArticleBody, Toc, Markdown, parseMarkdown: render bài viết dịch vụ từ markdown
  data/company.js            thông tin công ty (địa chỉ, điện thoại, năm thành lập...)
  data/clients.js            khách hàng, dự án
  data/proof.js              chứng nhận đối tác, nhận xét khách hàng
  servicePagesData.js        9 dịch vụ
  solutionPagesData.js       6 giải pháp
  blogData.js                bài blog (HTML trong chuỗi), danh mục, ảnh banner/thumbnail
  articles/*.js              bài viết dài cho từng dịch vụ (markdown trong chuỗi)

public/assets/brand/approved/ logo đã duyệt: SOHO_01_Open_Corner_APPROVED.svg (header, footer) và soho-logo-open-corner.png (schema, chia sẻ)
public/banners/              banner 3D Concept A (hero) và C (CTA cuối), desktop 1920×960 + mobile 900×1200
public/partners/             huy hiệu đối tác chính thức (google-partner.svg)
public/decor/                hình 3D trang trí CC0 từ 3dicons.co (dùng qua thuộc tính decor của Section)
public/clients/              logo khách hàng
public/blog/                 ảnh bài blog (thumbnail và banner dùng chung), render bằng skill creating-images-soho
docs/REDESIGN-REPORT.md      báo cáo các đợt redesign; docs/brand/: tài liệu audit tài sản hình và logo
DESIGN.md                    "tờ giấy" hệ thiết kế: nguồn tham chiếu, màu, phông, luật viết chữ, từ cấm, icon, ảnh (mục 2). Đọc trước khi sửa giao diện hay câu chữ
```

Mỗi component và trang có `.module.css` riêng. Server Component mặc định; client component: `DesktopNavigation`, `MobileNavigation`, `HeaderScroll`, `ContactForm`, `RevealObserver`, `Toc`, `ServiceGroups`, `ProcessAccordion`, `StickyCta`, `ReadingProgress`.

## Kiểm tra code

```bash
npm run lint          # ESLint, bộ quy tắc next/core-web-vitals
npm run format        # Prettier, ghi đè file
npm run format:check  # Prettier, chỉ báo
npm run build         # xuất tĩnh vào out/
```

## Form liên hệ

Web xuất tĩnh nên không có máy chủ nhận form. Đặt biến môi trường trên Vercel (Settings > Environment Variables) rồi deploy lại:

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://...   # địa chỉ nhận POST JSON
```

Nội dung gửi: `{name, contact, service, message, consent, page, sentAt}`. Endpoint phải trả mã 2xx và cho phép CORS từ tên miền của site. Dùng được Formspree, Getform, Google Apps Script (ghi vào Google Sheet) hoặc API riêng nối CRM.

- Form chỉ báo "Đã gửi" khi endpoint trả 2xx. Lỗi thì giữ nguyên nội dung và cho gửi lại.
- Chưa đặt biến: bấm gửi sẽ mở ứng dụng email với nội dung điền sẵn tới `company.email`, không báo gửi thành công giả.
- Gửi thành công thì đẩy sự kiện `generate_lead` vào `window.dataLayer` nếu site có Google Tag Manager (site cũ dùng GTM-K2FCZS8S).

## SEO kỹ thuật

- `NEXT_PUBLIC_SITE_URL` (mặc định `https://soho-agency.vercel.app`): dùng cho canonical, sitemap, Open Graph. Đổi khi chuyển sang tên miền chính.
- `app/robots.js`, `app/sitemap.js` tự sinh từ dữ liệu dịch vụ, dự án, bài viết.
- `vercel.json`: chuyển hướng URL cũ của sohoagency.vn (`/gioi-thieu`, `/seo-website`, `/tin-tuc`...) sang trang mới. Trang dự án giữ đúng đường dẫn cũ `/du-an/<slug>`.

## Dữ liệu chưa có

Những chỗ cần dữ liệu thật được render bằng component `Fill` hoặc `ImageSlot`, hiện chữ đỏ `[CẦN ...]` trên trang. Tìm bằng:

```bash
grep -rn "need=\"CẦN\|\[CẦN" app components
```

Điền vào 4 file dữ liệu, giao diện tự cập nhật:

| File | Cần điền |
| --- | --- |
| `components/data/company.js` | tên pháp nhân, mã số thuế, địa chỉ, điện thoại, giờ làm việc, năm thành lập, số khách hàng, quy mô, link mạng xã hội |
| `components/data/cases.js` | dự án đã công bố (ảnh trong `public/projects/`, chỉ ghi số đã công bố) |
| `components/data/clients.js` | ảnh dự án (đặt vào `public/projects/`), kết quả, bối cảnh, việc đã làm |
| `components/data/proof.js` | chứng nhận đối tác (hiện chỉ Google Partner, đã có link hồ sơ), nhận xét khách hàng |
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

- Hai trang pháp lý là bản nháp, cần pháp chế duyệt. Đầu trang có dòng cảnh báo đỏ, xóa sau khi duyệt.
- Bài viết dịch vụ có câu số liệu khẳng định về SOHO (gạch chân chấm vàng, đánh dấu tự động bởi `isClaim()` trong `components/article/parseMarkdown.js`). Cần kiểm chứng hoặc sửa.
- Ảnh bìa 9 bài blog trong `public/blog/` còn logo cũ, cần xuất lại theo logo đang dùng.
- Tên tác giả chưa thống nhất giữa `blogData.js` ("Nguyễn Tuấn Anh") và `articles/*.js` ("Nguyễn Thế Tuấn Anh").

## Kiểm tra trước khi merge

```bash
npm run build:pages
```

Build phải pass và ra đủ 41 trang trong `out/`. Mỗi trang đúng một `h1`, heading không nhảy cấp, mọi `img` có `alt`, không tràn ngang ở 375px.
