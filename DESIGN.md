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

## 2. Hướng thiết kế (bản 5, tháng 10/2026, theo SOHO Brand Kit v1.0)

Nguồn: `SOHO_Agency_Brand_Kit.zip` (logo, `tokens.css`, `tokens.json`, `design-system.html`). Khẩu hiệu của bộ nhận diện: "Bold in orange. Built for performance."

### 2.1. Ý tưởng

Nền trắng ngà, chữ than chì rất to, điểm nhấn cam. Cam là màu mảng (nút, số thứ tự, vùng dưới biểu đồ, dấu chấm cuối H1), không dùng làm chữ nhỏ. Chỉ hai khối tối: quy trình và footer.

### 2.2. Màu (`app/styles/tokens.css`)

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--brand` | `#FF7A00` | Nút chính, số thứ tự, nét và mảng nhấn trong sơ đồ. Không dùng cho chữ trên nền sáng (2.6:1) |
| `--brand-hover` | `#E66E00` | Hover nút cam |
| `--brand-2` | `#FF9A45` | Cam phụ trong minh họa |
| `--brand-soft` | `#FFF4E9` | Nền khối dịch vụ, form liên hệ, hero xen kẽ |
| `--brand-dark` | `#C65300` | Chữ nhấn cỡ lớn `.hl` trên nền sáng |
| `--brand-ink` / `--accent` | `#B34A00` | Chữ cam cỡ nhỏ, link. Đậm hơn `#C65300` của brand kit một chút để đạt 4.5:1 trên nền `#FAFAF8` |
| `--paper` | `#FAFAF8` | Nền trang |
| `--white` | `#FFFFFF` | Header, thẻ, section xen kẽ |
| `--ink` | `#1F1F1F` | Chữ, chữ trên nút cam |
| `--ink-3` | `#666666` | Chữ phụ |
| `--line` | `#E8E6E2` | Viền |
| `--night` | `#1F1F1F` | Khối quy trình, footer |
| `--error` | `#B42318` | Nhãn `[CẦN ...]` (để không lẫn với cam thương hiệu) |

Quy tắc tương phản: chữ trên nút cam luôn là than chì, không dùng chữ trắng. Trên nền tối, chữ nhấn dùng `--brand`.

### 2.3. Chữ

Inter (có bộ ký tự tiếng Việt), H1 800 cỡ tới 76px, chữ khít (-0.035em), H2 750. Nhãn trên tiêu đề (`.kicker`, eyebrow hero): chữ in hoa 12px cam đậm, vạch cam phía trước.

### 2.4. Nút

`Button`: bo 12px (`--r-md`). `primary` nền cam chữ than chì, hover đậm hơn và có bóng cam; `secondary` viền than chì, hover nền than chì chữ trắng; `text` chữ than chì kèm mũi tên cam, gạch chân chạy khi hover. Nút "Liên hệ ngay" trên header và nút gửi form cùng kiểu `primary`.

### 2.5. Logo (`public/brand/`)

- `soho-wordmark.svg`: chữ SOHO cam, dùng ở header (cao 30px, mobile 26px). Không dùng bản có chữ AGENCY ở header vì chữ phụ sẽ quá nhỏ.
- `soho-logo-white.svg`: logo trắng có chữ AGENCY, dùng ở footer.
- `soho-logo.svg`, `soho-wordmark-white.svg`, `soho-symbol.svg`: bản dự phòng.
- `soho-avatar.png`: ô vuông chữ S, ảnh đại diện tác giả trong bài viết dịch vụ.
- `app/favicon.ico`, `app/icon.svg`: favicon, Next.js tự gắn.

Các file SVG chỉ được cắt bớt khoảng trắng của viewBox, giữ nguyên tỷ lệ và hình chữ. Giữ khoảng trống quanh logo tối thiểu 12% chiều cao.

### 2.6. Hero (`components/hero/Hero.js`)

Hero cao gần một màn hình, chia 2 cột: trái là breadcrumb, eyebrow, H1 ngắn kết thúc bằng dấu chấm cam, tagline và gợi ý cuộn; phải là minh họa SVG lớn có chuyển động (`Visuals.js`). Mọi hero nền sáng, xen kẽ trắng ngà và cam nhạt, minh họa vẽ bằng cam và than chì: trang chủ đường tăng trưởng có vùng cam và nhãn "Doanh thu"; Dịch vụ 9 ô trắng; Giải pháp 4 lớp nổi; Dự án cột cam xen than chì; Blog trang giấy xếp lớp; Giới thiệu hai vòng giao nhau; Liên hệ sóng tín hiệu. Trang dịch vụ con dùng sơ đồ riêng của dịch vụ. Nội dung chi tiết chuyển xuống khối `#noi-dung` ngay dưới, tiêu đề ở đó là h2.

### 2.7. Trang chủ

Theo hướng dẫn section của brand kit:

Hero (trắng ngà) → khối mở đầu (trắng, 3 ✓ cam, nút cam) → hàng logo khách hàng → **Dịch vụ: 3 thẻ trắng trên nền cam nhạt** (`ServiceGroups`, mỗi thẻ một nhóm, số 01 đến 03 cam lớn) → ma trận hành trình (`JourneyMatrix`, phễu từ cam nhạt qua cam tới than chì; kênh: SEO than chì, Quảng cáo cam, Content cam nhạt, Đo lường xám) → **Dự án: thẻ trắng, kết quả chữ cam đậm** → **Quy trình: nền than chì, số cam** → 4 nguyên tắc → **Blog: nền trắng ngà** → form trên nền cam nhạt → FAQ → **Footer than chì, viền cam, logo trắng**.

### 2.8. Trang con

Hero riêng → `PageHeader` (khối mở đầu nền trắng ngà) với h2, lead, 3 ✓, nút; aside bên phải (form ở trang Liên hệ). Section dùng `tone`: `white`, `paper`, `soft` (cam nhạt), `gray`, `dark` (than chì).

### 2.9. Chuyển động và ảnh

Chữ hiện từng từ, nội dung hiện mờ dần, sơ đồ tự vẽ, tắt khi bật giảm chuyển động. Không ảnh stock; mọi ảnh dùng `ImageSlot` chờ ảnh thật của SOHO.

Ảnh bìa 9 bài blog (`public/blog/*.webp`) được làm trước brand kit, còn logo cũ. Cần xuất lại theo logo mới.

---

## 3. Cấu trúc code mới

```
app/
  layout.js              next/font (Inter), import styles
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
public/brand/soho-wordmark.svg, soho-logo-white.svg   logo theo brand kit, dùng ở header/footer (xem 2.5)
```

Xóa: `globals.css`, `ServiceSectionVisualizer.js`, `ArticleRenderer.js` (thay bằng ArticleBody), `cleanPunctuation.js`, `public/brand/page-*.png` nếu không dùng.

Giữ nguyên: mọi URL, `output: 'export'`, `basePath`, `sitePath()`, metadata.

---

## 4. Việc cần bạn xác nhận

1. **Đổi màu từ tím sang palette theo logo.** Prompt ban đầu ghi giữ #3924BF, nhưng màu này không có trong logo. Mình đề xuất dùng màu logo. Nếu tím là màu nhận diện chính thức ở nơi khác (brand guide, social) thì báo mình.
2. **Render 9 bài viết dịch vụ** (~3.000 từ/bài) lên trang dịch vụ. Tốt cho SEO, nhưng nội dung còn nhiều câu sáo ("thất vọng tột cùng", "đau đớn", "chí mạng") và số liệu chưa kiểm chứng ("hơn 150 doanh nghiệp", "6 năm"). Ở bước này mình chỉ đổi giao diện, không viết lại bài. Các con số chưa kiểm chứng sẽ được đánh dấu để bạn rà.
3. **Bỏ FAQ hard-code** có câu "hoàn trả ngân sách nếu không đạt chỉ tiêu". Nếu SOHO thật sự có chính sách này thì giữ lại.
