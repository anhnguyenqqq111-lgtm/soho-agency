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

## 2. Hướng thiết kế (bản 9, tháng 10/2026: bố cục bản 8, màu Brand Kit v3, logo gốc của SOHO)

Chủ web chọn: giữ bố cục nền trắng, khối nền xám, hiệu ứng và tương tác của bản 8; **dùng lại màu của Brand Kit v3** (cam, san hô, tím, Midnight); **dùng logo gốc** đang chạy trên sohoagency.vn (chữ SOHO có chân, chuyển sắc vàng sang đỏ, AGENCY đen). Bản này thay bản 8.

### 2.1. Nguyên tắc

- Section chia rõ bằng hai kiểu xen kẽ: **nền trắng** toàn chiều ngang (`tone` white, paper) và **khối bo góc lớn, thụt vào hai bên**: nền xám mây (`tone` gray, dark, fade) hoặc gradient Mist (`tone` soft, dùng cho ma trận hành trình). Một khối tối duy nhất: khối liên hệ, nền gradient Midnight.
- Cam #FF7A00 là màu chính. Gradient Signature (cam, san hô, tím) chỉ ở vài điểm nhấn: chữ nhấn trong tiêu đề, đường doanh thu ở hero, đường ray quy trình, vạch khi rê chuột. Không tô gradient lên logo.
- Màu và hiệu ứng chỉ ở điểm quan trọng (xem 2.2c). Tắt hết khi bật giảm chuyển động.
- Không trang trí thừa: không vạch trước nhãn, không dấu chấm cuối H1, không biểu tượng cuộn.

### 2.2. Màu (`app/styles/tokens.css`)

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--brand` / `--grad-cta` | `#FF7A00` | Nút chính (chữ Midnight), số bước quy trình, nét nhấn. Không dùng cho chữ nhỏ trên nền sáng (2.6:1) |
| `--brand-hover` | `#E56F00` | Hover nút |
| `--brand-ink` / `--accent` | `#B84A00` | Chữ cam nhỏ, link, con số kết quả |
| `--coral` | `#FF416C` | Chặng MOFU, điểm nhấn minh họa |
| `--violet` | `#765BFF` | Chặng BOFU (chữ trắng trên tím đậm `#5A3FE0`), cuối gradient |
| `--grad-warm` | Signature `#FF7A00`, `#FF416C`, `#765BFF` | Đường ray quy trình, vạch nhấn, chú thích biểu đồ |
| `--grad-warm-text` | `#E0560F`, `#E0245E`, `#6A4CF0` | Chữ nhấn `.hl` (bản đậm của Signature, ≥ 3.5:1; màu đặc `--brand-ink` dự phòng) |
| `--grad-midnight` | `#10121C`, `#261E44`, `#593358` | Nền khối liên hệ |
| `--grad-mist` | `#F5F6FA`, `#E8E9FF`, `#F7E5EB` | Nền khối ma trận hành trình |
| `--glow-warm` | quầng tím và cam rất nhạt | Chỉ nền hero |
| `--ink` | `#10121C` | Chữ |
| `--ink-3` | `#62697D` | Chữ phụ |
| `--line` / `--gray` | `#DCE0E9` / `#F5F6FA` | Viền / nền khối xám, ô nền nhạt |

### 2.2b. Hình 3D trang trí (`public/decor/`, thuộc tính `decor` của `Section`)

Nguồn: bộ 3dicons của Vijay Verma (3dicons.co, github.com/realvjy/3dicons), giấy phép **CC0**, dùng thương mại không cần ghi nguồn (ghi chú trong `public/decor/LICENSE.txt`). Kiểu clay (trắng xám, mờ), 400px, WebP khoảng 5 KB mỗi hình.

Chỉ hiện ở section dạng khối nền xám, góc phải trên, có quầng cam nhạt phía sau, trôi lên xuống chậm (tắt khi giảm chuyển động); section nền trắng không đặt hình để không đè nội dung. Đang dùng: trang chủ `target` (ma trận hành trình), `flag` (quy trình), `chat-bubble` (FAQ); trang dịch vụ `calender` (quy trình), `zoom` (vì sao); Dự án `chart`; Giới thiệu `megaphone`; giải pháp `rocket`. Có sẵn thêm `trophy`, `bulb`. Muốn thêm hình: tải bản clay từ link trong `content/3dicons-meta/<tên>.md` của repo trên, chuyển WebP, đặt vào `public/decor/`.

### 2.2c. Tương tác có ý nghĩa (giúp người đọc hiểu nhanh hoặc quyết định dễ hơn)

| Ở đâu | Tương tác | File |
|---|---|---|
| Hero trang chủ | Công tắc **Đo bằng traffic / Đo bằng doanh thu**: chế độ traffic cho thấy traffic tăng mà doanh thu đứng yên, chế độ doanh thu cho thấy doanh thu tăng. Mở ở traffic, tự chuyển sang doanh thu sau 3 giây một lần nếu người xem chưa bấm. | `components/hero/RevenueToggle.js` |
| Khối dịch vụ trang chủ | Bộ chọn **Bạn đang gặp vấn đề gì?** (4 điểm nghẽn): dịch vụ phù hợp sáng lên, còn lại mờ, kèm một câu gợi ý. Ánh xạ ở `PROBLEMS`. | `components/ServiceGroups.js` |
| Ma trận hành trình | Cuộn tới: ba chặng sáng lần lượt, dải kênh co hẹp như phễu, thanh doanh thu hiện cuối. Rê chuột vào một kênh: tô cả cột kênh đó (CSS `:has`, không JS). | `components/diagrams/JourneyMatrix.*` |
| Huy hiệu Google Partner | Rê chuột hoặc Tab: ô giải thích 3 tiêu chí Google xác nhận (dữ liệu `criteria` trong `proof.js`). | `components/proof/PartnerBadge.*` |
| Mọi trang, mobile | Thanh cố định **Gọi / Nhận tư vấn** ở đáy, hiện sau khi cuộn qua hero, ẩn khi form liên hệ hoặc footer trong màn hình và ở trang Liên hệ. | `components/StickyCta.js` (gắn trong Footer) |
| Bài blog, trang dịch vụ | Thanh tiến độ đọc 3px ở mép trên. | `components/article/ReadingProgress.js` |

Chưa làm: số liệu dự án đếm lên khi cuộn tới (chờ số thật được khách đồng ý công bố). Tránh: hiệu ứng chuột, hạt bay, parallax nặng.

### 2.3. Chữ

Chỉ dùng Inter (cả tiêu đề và thân bài), nạp bộ ký tự tiếng Việt qua `next/font`. H1 600 tới 64px, H2 600 tới 38px, H3 600; khoảng chữ khoảng -2% (không ép khít hơn vì tiếng Việt nhiều dấu chồng). Nhãn trên tiêu đề (`.kicker`, eyebrow hero) là chữ thường 13px màu `--ink-3`.

### 2.4. Nút

`Button` bo 12px. `primary` nền `--grad-cta` chữ Midnight, có bóng cam nhẹ, nổi lên khi rê chuột. `secondary` viền xám. `text` chữ Midnight gạch chân mảnh, chuyển cam đậm khi rê chuột.

### 2.5. Logo (`public/brand/`)

Logo gốc của SOHO, giống logo trên sohoagency.vn, lấy bản vector từ lịch sử repo (trước các brand kit):

- `soho-logo.svg`: logo màu (SOHO chuyển sắc vàng, cam, đỏ; AGENCY đen), dùng ở header (cao 50px, mobile 42px) và footer (56px).
- `soho-logo-white.svg`: logo trắng cho nền tối (chưa dùng vì footer nền trắng).
- `soho-avatar.png`, `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`: chữ S trắng của logo gốc trên nền gradient vàng đỏ của logo, tạo từ `soho-logo.png` cũ. Chữ S màu trên nền trắng quá mảnh ở 16px nên đảo màu.

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
public/brand/soho-logo.svg   logo gốc của SOHO, dùng ở header và footer (xem 2.5)
```

Xóa: `globals.css`, `ServiceSectionVisualizer.js`, `ArticleRenderer.js` (thay bằng ArticleBody), `cleanPunctuation.js`, `public/brand/page-*.png` nếu không dùng.

Giữ nguyên: mọi URL, `output: 'export'`, `basePath`, `sitePath()`, metadata.

---

## 4. Việc cần bạn xác nhận

1. **Đổi màu từ tím sang palette theo logo.** Prompt ban đầu ghi giữ #3924BF, nhưng màu này không có trong logo. Mình đề xuất dùng màu logo. Nếu tím là màu nhận diện chính thức ở nơi khác (brand guide, social) thì báo mình.
2. **Render 9 bài viết dịch vụ** (~3.000 từ/bài) lên trang dịch vụ. Tốt cho SEO, nhưng nội dung còn nhiều câu sáo ("thất vọng tột cùng", "đau đớn", "chí mạng") và số liệu chưa kiểm chứng ("hơn 150 doanh nghiệp", "6 năm"). Ở bước này mình chỉ đổi giao diện, không viết lại bài. Các con số chưa kiểm chứng sẽ được đánh dấu để bạn rà.
3. **Bỏ FAQ hard-code** có câu "hoàn trả ngân sách nếu không đạt chỉ tiêu". Nếu SOHO thật sự có chính sách này thì giữ lại.
