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

## 2. Hướng thiết kế (bản 8, tháng 10/2026, nền trắng theo SOHO Brand Kit v4.0, màu và hiệu ứng ở điểm quan trọng)

Nguồn: thư mục `SOHO_Agency_Brand_Kit_v4`. Yêu cầu của chủ web: ưu tiên màu trắng, ít chi tiết; nhưng **vẫn cần màu và hiệu ứng ở các chỗ quan trọng** (bản 7 hoàn toàn trắng bị đánh giá là quá đơn giản). Bản này thay bản 7.

### 2.1. Nguyên tắc

- Section chia rõ bằng hai kiểu xen kẽ: **nền trắng** toàn chiều ngang (`tone` white, paper) và **khối nền xám mây bo góc lớn, thụt vào hai bên** (`tone` gray, soft, dark, fade). Khoảng trắng quanh khối là ranh giới giữa các phần. Chỉ một khối tối: khối liên hệ cuối trang (điểm chuyển đổi chính).
- Một họ màu nhấn duy nhất là cam của logo (đặc hoặc gradient). Không dùng san hô, tím.
- Màu chỉ ở điểm quan trọng: cụm từ chính trong tiêu đề (`.hl`, gradient cam), nút hành động, minh họa hero, ba chặng của ma trận hành trình, số bước quy trình, con số kết quả, huy hiệu đối tác.
- Hiệu ứng chỉ ở điểm quan trọng: minh họa hero chuyển động, quầng cam "thở" sau khối liên hệ, dải logo khách hàng chạy ngang (dừng khi rê chuột), đường ray quy trình tự vẽ khi cuộn tới, phản hồi khi rê chuột ở nút, thẻ dịch vụ, khối ma trận, thẻ dự án. Tắt hết khi bật giảm chuyển động.
- Không trang trí thừa: không vạch trước nhãn, không dấu chấm cuối H1, không biểu tượng cuộn.

### 2.2. Màu (`app/styles/tokens.css`)

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--grad-cta` | `#F6A341` sang `#E7622B` | Nút chính (chữ Midnight), số bước quy trình, chữ nhấn trên nền tối |
| `--grad-warm` | gradient logo `#F6A341` sang `#D95026` | Chặng BOFU, đường ray quy trình, vạch nhấn khi rê chuột |
| `--grad-warm-text` | `#E8642A` sang `#C2410C` | Chữ nhấn `.hl` trong tiêu đề (đạt 3:1 cho chữ lớn, màu đặc `--brand-ink` dự phòng) |
| `--warm-1` | `#FCE3CC` | Chặng TOFU, nền dấu tích |
| `--brand` | `#F28C35` | Nét nhấn trong minh họa và sơ đồ |
| `--brand-ink` / `--accent` | `#AE420D` | Chữ cam nhỏ, link, con số kết quả |
| `--midnight` / `--ink` | `#10121C` | Chữ; nền khối liên hệ và thanh "doanh thu theo kênh" |
| `--ink-3` | `#60697B` | Chữ phụ, nhãn nhỏ trên tiêu đề |
| `--line` / `--gray` | `#E7E9F0` / `#F5F6FA` | Đường kẻ, viền / ô nền rất nhạt |
| `--glow-warm` | quầng cam rất nhạt | Chỉ nền hero |

### 2.2b. Hình 3D trang trí (`public/decor/`, thuộc tính `decor` của `Section`)

Nguồn: bộ 3dicons của Vijay Verma (3dicons.co, github.com/realvjy/3dicons), giấy phép **CC0**, dùng thương mại không cần ghi nguồn (ghi chú trong `public/decor/LICENSE.txt`). Kiểu clay (trắng xám, mờ), 400px, WebP khoảng 5 KB mỗi hình.

Chỉ hiện ở section dạng khối nền xám, góc phải trên, có quầng cam nhạt phía sau, trôi lên xuống chậm (tắt khi giảm chuyển động); section nền trắng không đặt hình để không đè nội dung. Đang dùng: trang chủ `target` (ma trận hành trình), `flag` (quy trình), `chat-bubble` (FAQ); trang dịch vụ `calender` (quy trình), `zoom` (vì sao); Dự án `chart`; Giới thiệu `megaphone`; giải pháp `rocket`. Có sẵn thêm `trophy`, `bulb`. Muốn thêm hình: tải bản clay từ link trong `content/3dicons-meta/<tên>.md` của repo trên, chuyển WebP, đặt vào `public/decor/`.

### 2.3. Chữ

Chỉ dùng Inter (cả tiêu đề và thân bài), nạp bộ ký tự tiếng Việt qua `next/font`. H1 700 tới 64px, H2 700 tới 38px, H3 600. Nhãn trên tiêu đề (`.kicker`, eyebrow hero) là chữ thường 13px màu `--ink-3`.

### 2.4. Nút

`Button` bo 12px. `primary` nền `--grad-cta` chữ Midnight, có bóng cam nhẹ, nổi lên khi rê chuột. `secondary` viền xám. `text` chữ Midnight gạch chân mảnh, chuyển cam đậm khi rê chuột.

### 2.5. Logo (`public/brand/`)

Logo v4 truy vết từ ảnh duyệt, giữ gradient cam ấm và nếp gấp. `soho-logo.svg` dùng cho header (cao 40px, mobile 34px) và footer. Các bản khác: `soho-logo-on-dark.svg`, `soho-logo-white.svg`, `soho-wordmark*.svg`.

Favicon vẫn dùng bản ở `app/icon.svg` và `app/favicon.ico`. Favicon và chữ S đứng riêng trong kit v4 bị lẹm một phần chữ O nên không dùng.

### 2.6. Chứng nhận

Chỉ có Google Partner 2026. Huy hiệu RGB gốc ở `public/partners/google-partner.svg`, dẫn tới hồ sơ đối tác `https://www.google.com/partners/agency?id=6437141441`. Hiện ở khối mở đầu trang chủ, trang Dự án và footer.

### 2.7. Hero

Nền trắng có quầng cam rất nhạt góc phải, hai cột: trái là breadcrumb, nhãn cam, H1 (trang chủ tô gradient cụm “doanh thu”), một dòng mô tả; phải là minh họa SVG có chuyển động, nét xám làm nền và cam của logo cho phần chính (`Visuals.js`, biến màu trong `Hero.module.css`). Trang dịch vụ con đặt sơ đồ dịch vụ (thẻ trắng) ở cột phải. Hero không còn chiếm cả màn hình.

### 2.8. Trang chủ

Hero → khối mở đầu (hai cột: tiêu đề trái; mô tả, 3 ý, nút, huy hiệu Google Partner phải) → dải logo khách hàng chạy ngang → Dịch vụ (3 cột có số nhóm cam, vạch cam chạy khi rê chuột) → ma trận hành trình (TOFU cam nhạt, MOFU cam, BOFU gradient logo; khối nổi khi rê chuột) → Dự án (vạch cam trên thẻ khi rê chuột, kết quả chữ cam đậm) → Quy trình 4 bước (số cam, đường ray tự vẽ) → Blog → khối liên hệ nền tối có quầng cam → FAQ → footer trắng.

Đã bỏ: khối "4 nguyên tắc" (trùng ý với 3 ý ở khối mở đầu), ô ảnh trống ở khối mở đầu và khối giới thiệu.

### 2.9. Trang con

Hero riêng → `PageHeader` nền trắng với h2, lead, 3 ý, nút. `Section` vẫn nhận `tone` nhưng mọi tone đều hiển thị nền trắng.

### 2.10. Chuyển động và ảnh

Xem 2.1. Chữ và khối hiện mờ dần khi cuộn, sơ đồ tự vẽ. Tắt hết khi bật giảm chuyển động. Ảnh dự án, logo khách hàng giữ nguyên bản. Ảnh bìa 9 bài blog còn logo cũ, cần xuất lại.

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
public/brand/soho-logo.svg   logo Brand Kit v4, dùng ở header và footer (xem 2.5)
```

Xóa: `globals.css`, `ServiceSectionVisualizer.js`, `ArticleRenderer.js` (thay bằng ArticleBody), `cleanPunctuation.js`, `public/brand/page-*.png` nếu không dùng.

Giữ nguyên: mọi URL, `output: 'export'`, `basePath`, `sitePath()`, metadata.

---

## 4. Việc cần bạn xác nhận

1. **Đổi màu từ tím sang palette theo logo.** Prompt ban đầu ghi giữ #3924BF, nhưng màu này không có trong logo. Mình đề xuất dùng màu logo. Nếu tím là màu nhận diện chính thức ở nơi khác (brand guide, social) thì báo mình.
2. **Render 9 bài viết dịch vụ** (~3.000 từ/bài) lên trang dịch vụ. Tốt cho SEO, nhưng nội dung còn nhiều câu sáo ("thất vọng tột cùng", "đau đớn", "chí mạng") và số liệu chưa kiểm chứng ("hơn 150 doanh nghiệp", "6 năm"). Ở bước này mình chỉ đổi giao diện, không viết lại bài. Các con số chưa kiểm chứng sẽ được đánh dấu để bạn rà.
3. **Bỏ FAQ hard-code** có câu "hoàn trả ngân sách nếu không đạt chỉ tiêu". Nếu SOHO thật sự có chính sách này thì giữ lại.
