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

## 2. Hướng thiết kế

### 2.1. Ý tưởng

**"Báo cáo tư vấn in giấy."** SOHO bán sự rõ ràng và dữ liệu thật, nên web nên trông giống một bản báo cáo chiến lược được dàn trang cẩn thận, không giống dashboard SaaS. Logo serif cổ điển là điểm neo: chữ serif làm tiêu đề, nền giấy ngà, mực đen, màu cam đỏ của logo dùng như bút đánh dấu.

### 2.2. Màu (lấy từ logo)

```css
--paper:      #F7F4EE;  /* nền chính, giấy ngà */
--paper-2:    #EFEAE0;  /* nền section phụ */
--ink:        #16130F;  /* chữ chính, gần đen ấm */
--ink-2:      #4A443B;  /* chữ phụ */
--ink-3:      #6E665A;  /* meta, caption (đạt AA trên cả paper và paper-2) */
--rule:       #D9D2C5;  /* đường kẻ */
--rule-strong:#B9B0A1;  /* đường kẻ đậm, gạch chân link */
--accent:     #D2401A;  /* cam đỏ giữa gradient logo: link, điểm nhấn */
--accent-ink: #A82E10;  /* chữ nhỏ màu accent, hover (6.2:1 trên paper) */
--gold:       #F2A900;  /* chỉ dùng cho đánh dấu nhỏ (gạch chân, số thứ tự) */
--night:      #16130F;  /* section nền tối (footer, CTA): nền mực + chữ giấy */
```

Quy tắc:
- 90% diện tích là `paper` / `ink` / `rule`.
- `accent` (4.3:1) chỉ dùng cho chữ từ 24px trở lên hoặc chi tiết trang trí: cụm từ nhấn trong hero, số thứ tự lớn, marker danh sách. Chữ nhỏ màu đỏ cam dùng `accent-ink`. Mỗi màn hình có tối đa 2 điểm accent.
- Không gradient, trừ logo. Không shadow màu.
- Chỉ dùng một section nền tối: footer + CTA cuối trang.

### 2.3. Chữ

| Vai trò | Font | Ghi chú |
|---|---|---|
| Display (H1–H3, số lớn) | **Newsreader** (Google Fonts, subset `vietnamese`) | Serif editorial, hợp với logo, dấu tiếng Việt đẹp ở cỡ lớn. Dùng weight 400–500, có italic để nhấn |
| Text, UI | **Be Vietnam Pro** (subset `vietnamese`) | Do người Việt thiết kế, dấu chuẩn. Weight 400 / 500 / 600 |

Thang chữ (desktop / mobile):
- H1: 72 / 40px, line-height 1.02, letter-spacing −0.02em, Newsreader 400
- H2: 44 / 30px, line-height 1.1
- H3: 24 / 20px
- Lead: 21 / 18px, Be Vietnam Pro, `ink-2`
- Body: 17px, line-height 1.65, tối đa 68ch
- Meta/label: 13px, Be Vietnam Pro 500, viết thường (không VIẾT HOA), `ink-3`
- Số: `font-variant-numeric: tabular-nums`

Không dùng eyebrow viết HOA. Nhãn section là số thứ tự + tên viết thường, ví dụ `02 — Dịch vụ`, đặt bên trái ngang hàng tiêu đề.

### 2.4. Lưới và nhịp

- Container 1240px, padding hai bên 24px (mobile 16px).
- Lưới 12 cột, gap 24px. Mặc định bố cục **4/8**: cột trái 4 là nhãn section (sticky trên desktop), cột phải 8 là nội dung. Một số section phá lưới, full-width hoặc 6/6, để tạo nhịp.
- Khoảng cách section thay đổi theo nội dung: 96px / 128px / 64px, không cố định một giá trị.
- Phân tách bằng đường kẻ 1px `rule`, không dùng card có nền và shadow.
- Góc vuông (radius 0) cho mọi thứ, chỉ input và nút có 2px.

### 2.5. Thành phần

- **Nút chính:** nền `ink`, chữ `paper`, hover chuyển nền sang `accent`. Không icon, hoặc chỉ có một mũi tên → dạng ký tự.
- **Link:** gạch chân 1px, offset 4px, hover đổi màu sang `accent`.
- **Danh sách đánh số:** số Newsreader cỡ lớn màu `accent` + tiêu đề + mô tả, mỗi dòng cách nhau bằng đường kẻ.
- **Bảng:** đường kẻ ngang, không viền dọc, header viết thường 13px.
- **Header:** logo + 6 link chữ + nút "Liên hệ". Mega menu chỉ là danh sách link chia cột theo nhóm, không icon, không tag "Hot / Xu hướng 2026", không promo box.
- **Footer:** nền `night`, logo trắng, 3 cột link, dòng bản quyền.

### 2.6. Chuyển động

- Chỉ transition `color`, `background-color`, `text-decoration-color` trong 150ms.
- Không có animation khi cuộn, không hover nâng card.
- Có `prefers-reduced-motion` (đặt `scroll-behavior: auto`).

### 2.7. Minh họa

Mặc định không có hình. Chỉ thêm khi giúp giải thích quy trình: SVG nét 1.5px màu `ink`, một điểm `accent`, không fill gradient. Ảnh `public/images/seo-tong-the/seo-ecosystem-infographic.jpg` dùng lại trong bài viết SEO tổng thể nếu bài có nhắc tới.

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
