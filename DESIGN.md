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
| Logo khách hàng (CTH, Studio 1 Nhà, Everlog, Fitfood) | **Giữ.** Đây là bằng chứng thật duy nhất. Trình bày dạng danh sách khách hàng + lĩnh vực + hạng mục |
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

## 2. Hướng thiết kế (bản 6, tháng 10/2026, theo SOHO Brand Kit v3.0)

Nguồn: thư mục `SOHO_Agency_Brand_Kit_v3` (logo, `tokens.css`, `tokens.json`, `design-system.html`, `reference/approved-brand-reference.png`). Tên hệ thống: Electric Orange / Digital Aurora. Bản này thay toàn bộ bản 5 (Brand Kit v1); không còn nền kem.

### 2.1. Nguyên tắc

- Cam #FF7A00 là màu nhận diện chính. Gradient hồng tím chỉ là điểm nhấn UI, **mỗi màn hình một điểm lớn**.
- Xen kẽ nền sáng (trắng, xám mây) và nền tối (Midnight) để tạo nhịp.
- Không đặt chữ trên gradient nhiều màu nếu không có lớp nền đặc. Không đặt form trên gradient.
- Không áp gradient hồng tím vào logo. Logo chỉ dùng gradient cam của chính nó.

### 2.2. Màu (`app/styles/tokens.css`)

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--brand` | `#FF7A00` | Nút chính, số thứ tự, mảng nhấn. Không dùng cho chữ nhỏ trên nền sáng |
| `--brand-hover` | `#E56F00` | Hover nút cam |
| `--brand-ink` / `--accent` | `#B84A00` | Chữ cam trên nền sáng: `.hl`, link, kết quả dự án |
| `--coral` | `#FF416C` | Điểm nhấn UI: chặng MOFU, minh họa hero |
| `--violet` | `#765BFF` | Điểm nhấn UI: chặng BOFU, viền focus |
| `--paper` | `#F5F6FA` | Cloud: nền trang, section xen kẽ |
| `--white` | `#FFFFFF` | Header, thẻ, section xen kẽ |
| `--ink` | `#10121C` | Midnight: chữ, chữ trên nút cam, footer |
| `--ink-3` | `#62697D` | Slate: chữ phụ |
| `--line` | `#DCE0E9` | Viền |
| `--error` | `#BE293C` | Nhãn `[CẦN ...]` |

Gradient: `--grad-signature` (cam, san hô, tím) cho một điểm nhấn lớn; `--grad-midnight` cho khối quy trình, khối liên hệ, khung minh họa hero; `--grad-mist` cho section ma trận hành trình và cột phụ của mega menu; `--grad-glow` chỉ cho nền hero.

Tương phản: chữ trên nút cam luôn là Midnight. Chữ trắng chỉ đặt trên Midnight hoặc tím đậm `#5A3FE0`.

### 2.3. Chữ

Tiêu đề Space Grotesk 700, khoảng chữ -0.045em (h1) đến -0.02em (h3). Thân bài Inter. Cả hai font nạp bộ ký tự tiếng Việt qua `next/font`. Nhãn trên tiêu đề (`.kicker`, eyebrow hero): chữ in hoa 12px `--brand-ink`, vạch cam phía trước. Lớp `.grad-text` (chữ gradient Signature, có màu đặc dự phòng) chỉ dùng cho tiêu đề lớn trang trí, tối đa một chỗ mỗi màn hình.

### 2.4. Nút

`Button`: viên thuốc (`--r-pill`), nổi lên 2px khi hover, mặc định mũi tên ↗. `primary` nền cam chữ Midnight; `secondary` viền xám, hover nền trắng viền Midnight; `text` chữ kèm mũi tên cam. Nút "Liên hệ ngay" trên header và nút gửi form cùng kiểu `primary`. Viền focus 3px tím, cách 4px.

### 2.5. Logo (`public/brand/`)

Logo v3 là chữ SOHO cách điệu, gradient cam sang cam đỏ, theo ảnh tham chiếu đã duyệt. File SVG chỉ được cắt bớt khoảng trắng của viewBox, giữ nguyên hình và màu.

- `soho-logo.svg`: SOHO gradient + AGENCY đen, dùng ở header (cao 44px, mobile 36px).
- `soho-logo-on-dark.svg`: SOHO gradient + AGENCY trắng, dùng ở footer.
- `soho-logo-white.svg`, `soho-wordmark.svg`, `soho-wordmark-white.svg`: bản dự phòng.
- `soho-avatar.png`: app icon 256px, ảnh đại diện tác giả trong bài viết dịch vụ.
- `app/favicon.ico`, `app/icon.svg`, `app/apple-icon.png`: favicon, Next.js tự gắn.

Không dùng `soho-symbol-*.svg` trong kit v3: khung của file bị lệch, cắt lẹm sang chữ O.

### 2.6. Chứng nhận (`components/data/proof.js`, `components/proof/PartnerBadge.js`)

Huy hiệu Google Partner 2026 lấy nguyên bản RGB từ bộ tài liệu của Google, đặt ở `public/partners/google-partner.svg`. Hiện ở 3 chỗ: dưới nút ở khối mở đầu trang chủ, dải chứng nhận trang Dự án, cột Chứng nhận ở footer.

Quy định của Google: huy hiệu trên web phải dẫn tới trang hồ sơ đối tác của công ty. Điền `profileUrl` cho mục Google Partner trong `proof.js`, huy hiệu sẽ tự thành link và nhãn `[CẦN LINK HỒ SƠ GOOGLE PARTNER]` biến mất. Không đổi màu, không cắt, không thêm hiệu ứng lên huy hiệu.

SOHO không có chứng nhận Meta, TikTok; danh sách chỉ còn Google Partner.

### 2.7. Hero (`components/hero/Hero.js`)

Nền Cloud + quầng sáng tím cam. Trái: breadcrumb, eyebrow, H1 ngắn kết thúc bằng dấu chấm cam, tagline, gợi ý cuộn. Phải: khung Midnight bo 28px có vạch Signature ở cạnh trên, bên trong là minh họa SVG có chuyển động (`Visuals.js`), vẽ bằng cam, san hô, tím trên nền tối. Trang dịch vụ con đặt sơ đồ dịch vụ (thẻ trắng) trong khung này. Nội dung chi tiết chuyển xuống khối `#noi-dung` ngay dưới, tiêu đề ở đó là h2.

### 2.8. Trang chủ (theo bảng section của kit)

Hero (Cloud + glow) → khối mở đầu (trắng, 3 ✓ cam, nút cam, huy hiệu Google Partner) → logo khách hàng (trắng, logo giữ màu gốc) → Dịch vụ (Cloud, 3 thẻ trắng) → ma trận hành trình (nền Mist; chặng TOFU cam, MOFU san hô, BOFU tím; kênh: SEO Midnight, Quảng cáo cam, Content bạc, Đo lường xám nhạt) → Dự án (trắng, kết quả chữ cam đậm, viền Signature cho đúng một thẻ đầu) → Quy trình (Midnight, số cam) → 4 nguyên tắc (trắng) → Blog (Cloud) → Liên hệ (Midnight, form trong thẻ trắng đặc) → FAQ (trắng) → Footer (Midnight đặc, logo on-dark).

### 2.9. Trang con

Hero riêng → `PageHeader` (Cloud) với h2, lead, 3 ✓, nút; aside bên phải (form ở trang Liên hệ). Section dùng `tone`: `white`, `paper` (Cloud), `soft` (Mist), `gray`, `dark` (Midnight).

### 2.10. Chuyển động và ảnh

Chữ hiện từng từ, nội dung hiện mờ dần, sơ đồ tự vẽ, tắt hết khi bật giảm chuyển động. Không ảnh stock; mọi ảnh dùng `ImageSlot` chờ ảnh thật. Ảnh dự án và logo khách hàng giữ nguyên bản.

Ảnh bìa 9 bài blog (`public/blog/*.webp`) làm trước brand kit, còn logo cũ, cần xuất lại theo logo v3.

---

## 3. Cấu trúc code mới

```
app/
  layout.js              next/font (Inter, Space Grotesk), import styles
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
public/brand/soho-logo.svg, soho-logo-on-dark.svg   logo Brand Kit v3, dùng ở header/footer (xem 2.5)
```

Xóa: `globals.css`, `ServiceSectionVisualizer.js`, `ArticleRenderer.js` (thay bằng ArticleBody), `cleanPunctuation.js`, `public/brand/page-*.png` nếu không dùng.

Giữ nguyên: mọi URL, `output: 'export'`, `basePath`, `sitePath()`, metadata.

---

## 4. Việc cần bạn xác nhận

1. **Đổi màu từ tím sang palette theo logo.** Prompt ban đầu ghi giữ #3924BF, nhưng màu này không có trong logo. Mình đề xuất dùng màu logo. Nếu tím là màu nhận diện chính thức ở nơi khác (brand guide, social) thì báo mình.
2. **Render 9 bài viết dịch vụ** (~3.000 từ/bài) lên trang dịch vụ. Tốt cho SEO, nhưng nội dung còn nhiều câu sáo ("thất vọng tột cùng", "đau đớn", "chí mạng") và số liệu chưa kiểm chứng ("hơn 150 doanh nghiệp", "6 năm"). Ở bước này mình chỉ đổi giao diện, không viết lại bài. Các con số chưa kiểm chứng sẽ được đánh dấu để bạn rà.
3. **Bỏ FAQ hard-code** có câu "hoàn trả ngân sách nếu không đạt chỉ tiêu". Nếu SOHO thật sự có chính sách này thì giữ lại.
