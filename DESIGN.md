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

## 2. Hướng thiết kế (bản 4, tháng 10/2026)

### 2.1. Ý tưởng

Nền sáng kem, chữ nâu đen rất to, nhấn đỏ gạch. Đầu trang theo phong cách growthcurve.co: header trắng gọn, nút viên thuốc có mũi tên trong ô riêng ngăn bằng vạch, hero chữ to bên trái với 3 ý ✓ tròn, ảnh bo góc lớn bên phải, hàng logo dưới. Không còn hero tối, gradient hay hình trang trí, nên khác hẳn goha.vn.

### 2.2. Màu (`app/styles/tokens.css`)

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--paper` | `#F7F3EC` | Nền trang |
| `--white` | `#FFFFFF` | Section xen kẽ, thẻ |
| `--ink` | `#1B1611` | Chữ, nút header |
| `--red` | `#A82E10` | Nút chính, dấu check |
| `--accent` | `#C9391A` | Chữ nhấn `.hl`, hover |
| `--gold` | `#E8A800` | Chữ nhấn trên nền tối, chi tiết nhỏ |
| `--night` | `#231A14` | Chỉ footer và 1 section quy trình trên trang chủ |

Gradient thương hiệu chỉ còn ở vòng số chặng cuối, dải chảy mờ và viền trên thẻ blog.

### 2.3. Chữ

Be Vietnam Pro, H1 800 cỡ tới 76px, thân 400.

### 2.4. Nút

`Button`: viên thuốc, phần chữ và mũi tên tách bằng vạch dọc. `primary` nền đỏ, `secondary` viền đỏ (dùng ở hero), `text` chữ kèm mũi tên.

### 2.5. Hero (`components/hero/Hero.js`)

Mỗi trang mở đầu bằng hero cao gần một màn hình, chia 2 cột: trái là breadcrumb, eyebrow, H1 ngắn (tối đa 4 từ), một dòng tagline và gợi ý cuộn; phải là minh họa SVG lớn có chuyển động (`Visuals.js`). Mỗi trang một phối màu và một hình riêng: trang chủ nền nâu đen với đường tăng trưởng và điểm sáng chạy; Dịch vụ nền kem đậm với 9 ô sáng luân phiên; Giải pháp nền xanh rêu với 4 lớp nổi; Dự án nền kem hồng với cột mọc lên; Blog nền kem với trang giấy xếp lớp; Giới thiệu nền nâu đỏ với hai vòng giao nhau; Liên hệ nền xanh đêm với sóng tín hiệu. Trang dịch vụ con dùng sơ đồ riêng của dịch vụ. Nội dung chi tiết (lead, 3 ✓, nút) chuyển xuống khối `#noi-dung` ngay dưới, tiêu đề ở đó là h2.

### 2.6. Trang chủ

Hero → khối mở đầu (chữ, 3 ✓, nút viền, ảnh thật) → hàng logo → sơ đồ workflow (`JourneyWorkflow`): trên nền sáng, không khung, không hiệu ứng; nút trắng viền mảnh có icon, 4 làn kênh song song qua 3 chặng, gộp về nút Doanh thu; mobile cuộn ngang → băng chuyền dự án (`ProjectCarousel`) → quy trình đường ray trên nền tối → 4 nguyên tắc dạng thẻ + ảnh đội → blog → form trên nền kem → FAQ kẻ dòng.

### 2.7. Trang con

Hero riêng → `PageHeader` thành khối mở đầu nền kem với h2, lead, 3 ✓, nút; aside bên phải (form ở trang Liên hệ).

### 2.8. Chuyển động và ảnh

Chữ hiện từng từ, nội dung hiện mờ dần, sơ đồ tự vẽ, tắt khi bật giảm chuyển động. Không còn ảnh stock; mọi ảnh dùng `ImageSlot` chờ ảnh thật của SOHO.

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
