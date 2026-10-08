# SOHO Agency — Design direction

Tài liệu này chốt hướng thiết kế trước khi viết lại giao diện. Mọi trang và component mới phải tuân theo file này.

---

## 1. Audit hiện trạng

### 1.1. Vấn đề chung

| Vấn đề | Ở đâu | Xử lý |
|---|---|---|
| Hiệu ứng "AI template": aurora, glass card, cyber grid, orbit ring, 3D tilt, badge LIVE, radar pulse, btnGlow + btnSweep, shimmer gradient text | `app/page.js` (HeroVisual), mọi hero, `globals.css` | Bỏ toàn bộ |
| Số liệu bịa: +185%, 4.8x, 99.2%, "+280 từ khóa", "ROAS 4.8x" trong menu và blog, "3.4k lượt xem" | Trang chủ, Header, Blog | Bỏ. Chỉ hiện số thật, chỗ cần số để `[CẦN SỐ LIỆU THẬT]` |
| Màu tím #3924BF / #7B77F2 không có trong logo. Logo là gradient vàng → cam → đỏ + chữ đen | `:root` trong globals.css | Đổi palette theo logo (mục 2.2) |
| Dữ liệu không dấu | `servicePagesData.js` (9 dịch vụ) | Thêm lại dấu đầy đủ, giữ `slug` |
| `cleanPunctuation` xóa `: ; " -` khiến câu cụt, mất nghĩa | `dich-vu/[slug]`, ServiceSectionVisualizer | Bỏ quy tắc và file này |
| 9 bài viết dịch vụ ~2.000 dòng (toc, sections, bảng, checklist, FAQ) **không được render ở đâu cả**. `ArticleRenderer.js` là code chết | `components/articles/*`, `ArticleRenderer.js` | Dùng lại làm phần thân trang dịch vụ (mục 4) |
| ServiceSectionVisualizer: 9 trang dịch vụ dùng chung một bộ FAQ/checklist hard-code, trong đó có cam kết rủi ro ("hoàn trả ngân sách nếu không đạt chỉ tiêu") | `ServiceSectionVisualizer.js` (828 dòng) | Xóa component. Dùng FAQ/checklist riêng của từng bài viết |
| Lạm dụng icon lucide (Sparkles, Zap, BrainCircuit, ShieldCheck…) trên mọi card, pill, nút | Toàn site | Chỉ giữ icon chức năng: mũi tên, menu, đóng, chevron |
| Toàn bộ trang chủ và Header là `'use client'`. Trang Liên hệ cũng vậy chỉ vì có `onSubmit` | `app/page.js`, `lien-he` | Server Component, tách phần tương tác ra |
| globals.css 5.375 dòng, phần lớn là class đã chết | `app/globals.css` | Viết lại bằng tokens + CSS Modules |

### 1.2. Theo từng trang

**Trang chủ** (`/`)

| Section hiện tại | Quyết định |
|---|---|
| Hero + HeroVisual (dashboard giả) + stats bar | **Viết lại.** Hero chữ là chính, không có visual giả |
| Logo khách hàng (CTH, ICADO, Studio 1 Nhà, Everlog, Fitfood) | **Giữ.** Đây là bằng chứng thật duy nhất. Trình bày dạng danh sách khách hàng + lĩnh vực + hạng mục |
| Strip "Không dùng công thức rập khuôn" | **Bỏ** |
| 6 service card có icon | **Viết lại** thành danh mục dịch vụ dạng bảng/danh sách đánh số theo 3 nhóm |
| Bảng so sánh SOHO và agency truyền thống (✓/✗) | **Bỏ bảng.** Lấy 3–4 ý thật nhất (sở hữu tài khoản, senior trực tiếp làm, sprint 2 tuần) đưa vào section "Cách làm việc" |
| "SOHO Engine" (vòng tròn 4 item) | **Bỏ** |
| 3 nhóm số cần nhìn mỗi tuần (SEO/ADS/CRO) | **Gộp** vào "Cách làm việc" |
| Quy trình 5 bước | **Giữ**, trình bày dạng danh sách đánh số có đường kẻ |
| "Một đội ngũ, một mục tiêu" + shape trang trí | **Gộp** vào "Cách làm việc", bỏ shape |
| 3 bài blog | **Giữ**, dạng danh sách tiêu đề (không card, không banner) |
| Form liên hệ | **Giữ** |

Trang chủ mới: Hero → Khách hàng → Dịch vụ → Cách làm việc → Quy trình → Bài viết → Liên hệ (7 section thay vì 11).

**Trang khác**

| Trang | Hiện tại | Quyết định |
|---|---|---|
| `/dich-vu` | Hero + "service map" giả + 9 card có mini-stats giống hệt nhau (01 / 90D / 2W) | Danh mục dịch vụ dạng bảng 3 nhóm. Bỏ mini-stats lặp |
| `/dich-vu/[slug]` | Hero mosaic + trust bar 5 pill + Visualizer | Trang dài kiểu editorial: tóm tắt (intro, pains, outcomes, process lấy từ servicePagesData) rồi bài viết đầy đủ có mục lục bám theo khi cuộn |
| `/giai-phap` | 6 card có icon | Chia 2 nhóm: "Theo mô hình kinh doanh" và "Cách SOHO làm việc", dạng danh sách |
| `/giai-phap/[slug]` | Hero + visual icon to + 3 card ✓ | Hero chữ + danh sách trọng tâm + dịch vụ liên quan |
| `/ket-qua` | 3 card SEO/ADS/CRO | Đổi thành "Cách SOHO đo kết quả": bảng chỉ số theo kênh + khu vực case study để trống `[CẦN CASE STUDY THẬT]` |
| `/ve-soho` | 4 card ✓ | Đoạn văn giới thiệu + 4 nguyên tắc làm việc dạng danh sách đánh số |
| `/lien-he` | Form | Form + thông tin liên hệ + "Sau khi gửi form sẽ diễn ra gì" (3 bước) |
| `/blog` | Hero + visual giả + chip danh mục + featured + card có banner gradient | Danh sách bài kiểu tạp chí: bài nổi bật dạng chữ lớn, phần còn lại là danh sách có ngày + danh mục. Bỏ banner gradient và lượt xem |
| `/blog/[slug]` | Banner gradient + nội dung HTML | Trang đọc: cột chữ 680px, tác giả + ngày ở đầu, bài liên quan dạng danh sách |

---

## 2. Hướng thiết kế (bản 3, tháng 10/2026)

### 2.1. Ý tưởng

Lấy cảm hứng từ nhịp section tối xen sáng và hình khối bo tròn của goha.vn, nhưng mọi thành phần nhận diện được làm khác để tránh vấn đề pháp lý: hero dùng vầng sáng và đường chân trời (không vòng 3D), ma trận chặng × kênh với phễu mũi tên chỉ xuống (GOHA dùng mũi tên ngang), băng chuyền dự án có nút và chấm tiến trình đặt phía trên (GOHA đặt mũi tên hai mép và tab logo), quy trình dạng đường ray (không accordion cạnh ảnh), thẻ blog không ảnh bìa, FAQ kẻ dòng dấu cộng, form liên hệ trên nền sáng, header trắng, footer phẳng. Không dùng nội dung, ảnh, logo khách hàng hay chứng nhận của GOHA.

### 2.2. Màu (token trong `app/styles/tokens.css`)

| GOHA | SOHO | Dùng cho |
|---|---|---|
| Navy `#011624`, tím `#210788` | `--night #150C08`, `--night-2 #2E1109`, `--night-3 #4A1709` | Nền tối, header, footer |
| Xanh `#1863dc` → cyan `#39c0ff` | `--red #A82E10` → `--accent #D2401A` → `--orange #F26716` → `--gold #FEBC01` | Gradient hero (`--grad-hero`), gradient thương hiệu (`--grad-brand`) |
| Cyan nhấn trong tiêu đề | `--gold` trên nền tối, `--accent` trên nền sáng (class `.hl`) | Cụm từ nhấn trong H1, H2 |
| Nút tím | Nút `--red`, hover `--accent`; trên nền tối: nút trắng chữ đỏ | Mọi CTA |
| Xám `#f4f4f4` | `--gray #F4F3F1`, `--paper #F7F4EE` | Section phụ, thẻ FAQ, case study |

### 2.3. Chữ

Chỉ một font: Be Vietnam Pro (400, 500, 600, 700, 800). Tiêu đề 700–800, thân 400. Không còn serif Newsreader.

### 2.4. Hình khối

Nút viên thuốc 100px, thẻ 16px, input 100px (textarea 12px). Bóng mềm `--shadow-card`. Hero và banner trang con dùng `components/HeroGlow.js`: vầng sáng ấm góc dưới phải và các đường chân trời mảnh tự vẽ, thuần SVG.

### 2.5. Cấu trúc trang chủ (theo thứ tự GOHA)

Hero (chữ trái, 3 nhóm dịch vụ phải, hàng logo) → ma trận chặng × kênh (`FunnelMatrix`) → băng chuyền dự án (`ProjectCarousel`) → quy trình đường ray trên nền tối (`Track`) → 4 nguyên tắc dạng thẻ + ảnh đội → blog 3 thẻ tối giản (`BlogCard`) → form liên hệ trên nền giấy (`CtaBand`) → FAQ kẻ dòng (`Faq`).

### 2.6. Trang dịch vụ

Hero tối: H1, 3 ý có dấu ✓, nút; sơ đồ SVG riêng của dịch vụ trong thẻ trắng bên phải. Tiếp theo: quy trình đường ray, khối "dấu hiệu / kết quả", danh sách bàn giao, bài viết dài trong thẻ trắng, dịch vụ cùng nhóm, khối liên hệ.

### 2.7. Chuyển động và ảnh

Giữ như bản 2: chữ hiện từng từ, nội dung hiện mờ dần khi cuộn, sơ đồ tự vẽ, tắt khi bật giảm chuyển động. Ảnh tạm còn 2 tấm ở trang chủ; ảnh đội ngũ, văn phòng, dự án dùng `ImageSlot` chờ ảnh thật.

---

## 3. Cấu trúc code mới

```
app/
  layout.js              next/font (Newsreader, Be Vietnam Pro), import styles
  styles/
    tokens.css           biến màu, chữ, khoảng cách
    base.css             reset, typography, link, prose (nội dung bài viết)
  page.js                Server Component
  page.module.css
  ...các route giữ nguyên, mỗi route có *.module.css nếu cần
components/
  Header.js, NavMenu.js  Header là Server Component, NavMenu ('use client') lo mega menu và menu mobile
  Footer.js
  ContactForm.js         'use client'
  ui/                    Section (lưới 4/8 có nhãn số), PageHeader, NumberedList, LinkRows, Button, CtaBand
  article/               ArticleBody, Toc ('use client'), Markdown, parseMarkdown
  data/clients.js
public/brand/soho-logo-crop.svg, soho-logo-white-crop.svg   logo đã cắt sát viewBox, dùng ở header/footer
```

Xóa: `globals.css`, `ServiceSectionVisualizer.js`, `ArticleRenderer.js` (thay bằng ArticleBody), `cleanPunctuation.js`, `public/brand/page-*.png` nếu không dùng.

Giữ nguyên: mọi URL, `output: 'export'`, `basePath`, `sitePath()`, metadata.

---

## 4. Việc cần bạn xác nhận

1. **Đổi màu từ tím sang palette theo logo.** Prompt ban đầu ghi giữ #3924BF, nhưng màu này không có trong logo. Mình đề xuất dùng màu logo. Nếu tím là màu nhận diện chính thức ở nơi khác (brand guide, social) thì báo mình.
2. **Render 9 bài viết dịch vụ** (~3.000 từ/bài) lên trang dịch vụ. Tốt cho SEO, nhưng nội dung còn nhiều câu sáo ("thất vọng tột cùng", "đau đớn", "chí mạng") và số liệu chưa kiểm chứng ("hơn 150 doanh nghiệp", "6 năm"). Ở bước này mình chỉ đổi giao diện, không viết lại bài. Các con số chưa kiểm chứng sẽ được đánh dấu để bạn rà.
3. **Bỏ FAQ hard-code** có câu "hoàn trả ngân sách nếu không đạt chỉ tiêu". Nếu SOHO thật sự có chính sách này thì giữ lại.
