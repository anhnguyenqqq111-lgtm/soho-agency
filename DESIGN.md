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

## 2. Hệ thiết kế (bản 10, tháng 10/2026): "tờ giấy" đưa cho người và AI trước khi làm bất cứ trang nào

Lý do có tờ giấy này: AI không có gu, nó lấp chỗ trống bằng mặc định (Inter, nền kem, khuôn "nhãn nhỏ + tiêu đề trái + ảnh phải", câu chung chung như "tận tâm, uy tín"). Mọi chỗ trống đều được ghi rõ dưới đây. Phương pháp theo video "Claude Design làm web nha khoa và văn phòng luật ra cùng một khuôn" (AI 5 Phút, 10/2026).

### 2.1. SOHO là ai, viết cho ai

- **SOHO Agency** (Công ty TNHH SOHO Agency), TP.HCM, Google Partner 2026. Làm SEO, quảng cáo Google, Meta, TikTok, nội dung và đo lường; tự tay triển khai, báo cáo bằng số đơn và doanh thu, làm theo vòng 2 tuần.
- **Khách đọc web:** chủ doanh nghiệp vừa và nhỏ ở TP.HCM đã có sản phẩm và khách mua, đã thử SEO hoặc quảng cáo nhưng không rõ kênh nào ra tiền. Không chuyên kỹ thuật. Nhiều ngành dịch vụ cao cấp (resort, nội thất, đồng hồ, studio cưới).

### 2.2. Nguồn tham chiếu (trộn hai nguồn, ghi rõ lấy gì ở đâu)

| Nguồn | Lấy gì |
|---|---|
| **Ramp** trên styles.refero.design | Cách dàn chữ kiểu báo: tiêu đề lớn, thứ bậc bằng cỡ chữ; thẻ đứng trên viền mảnh 1px, không đổ bóng; bo 16px cho thẻ nội dung; một màu nhấn chỉ ở nơi có tiền (nút, con số) |
| **Brex** trên styles.refero.design | Nền trắng tinh, một màu cam duy nhất cho hành động chính; bo 12px cho nút và ô nhập; khung tối ở cuối trang (khối liên hệ + footer) |
| **Brand Kit v3 SOHO** | Màu: cam `#FF7A00`, san hô `#FF416C`, tím `#765BFF`, Midnight `#10121C` |
| **Logo gốc SOHO** (như sohoagency.vn) | Logo, favicon (chữ S trắng trên gradient vàng đỏ của logo) |

### 2.3. Phông chữ (đã qua bài thử Ế Ứ Ỡ Ặ Ằ)

| Vai trò | Phông | Ghi chú |
|---|---|---|
| Tiêu đề H1, H2, chữ nhấn `.hl` (nghiêng), con số lớn | **Fraunces** (Google Fonts, có bộ tiếng Việt) | Độ đậm 500, khoảng chữ −1.5%, giãn dòng 1.08. Có chân, khác hẳn mặc định Inter của AI |
| Nội dung, giao diện, nút, H3 trở xuống | **Be Vietnam Pro** (Google Fonts) | 400 thân bài, 600 nhấn. Làm riêng cho tiếng Việt |

Bài thử: gõ **Ế Ứ Ỡ Ặ Ằ** ở cỡ lớn, đặt phông dự phòng là Comic Sans; chữ nào lệch nét là phông bị vá, loại. Đã loại: Sora, Figtree, DM Sans, Outfit, Instrument Sans, Urbanist, Albert Sans, Red Hat Display (không có bộ tiếng Việt). Đổi phông phải ghi đúng tên, không ghi mô tả.

### 2.4. Luật viết chữ

1. **H1 = tên + nghề**, không phải lời chào. Thử xóa tên SOHO khỏi H1: nếu câu vẫn đúng với agency khác thì viết lại. Trang dịch vụ: H1 = tên dịch vụ + cho ai.
2. **Hẹp thắng rộng:** nói với "doanh nghiệp vừa và nhỏ ở TP.HCM đã có sản phẩm và khách mua", không "doanh nghiệp Việt Nam".
3. **Một nhãn nút chính trên toàn site: "Đặt lịch tư vấn".** Header, hero, form, thanh mobile, cuối trang đều dùng đúng nhãn này. Nút khác là nút chữ (link có mũi tên).
4. **Nút = động từ + đối tượng cụ thể** ("Xem SOHO đã làm gì", "Đọc tất cả bài viết"), không "Tìm hiểu", "Xem thêm".
5. **Mỗi lời tự khen kèm một tên riêng không phải của SOHO:** Google Partner (hồ sơ Google), tên dự án (Le Viva Resort...), tên khách nhận xét. Con số chỉ ghi khi đã được công bố (xem `components/data/cases.js`); không bịa số.
6. Câu ngắn, viết hoa đầu câu, không emoji, dấu tiếng Việt đúng. Mỗi tiêu đề tối đa một cụm `.hl`.

**Từ cấm và từ thay** (thuật ngữ tiếng Anh chỉ dùng khi là tên sản phẩm, hoặc để trong ngoặc sau từ tiếng Việt):

| Không dùng | Thay bằng |
|---|---|
| lead | khách tiềm năng, khách để lại thông tin |
| traffic | lượt truy cập |
| organic | từ Google tự nhiên |
| conversion, CR | lượt chuyển đổi, tỉ lệ khách để lại thông tin |
| landing page | trang đích |
| tracking | cách đo, đo lường |
| dashboard | báo cáo |
| sprint | vòng 2 tuần |
| audit | kiểm tra, xem số liệu |
| insight | điều khách cần, lý do khách mua |
| creative | mẫu quảng cáo |
| funnel, TOFU/MOFU/BOFU | các bước khách đi qua, chặng 1/2/3 |
| visibility | độ phủ |
| entity, E-E-A-T | độ uy tín của thương hiệu và tác giả |
| KPI | con số cần đạt |
| roadmap, backlog | lộ trình, danh sách việc |
| founder, manager | chủ doanh nghiệp, trưởng bộ phận |
| B2B, SME, ecommerce | bán cho doanh nghiệp, doanh nghiệp nhỏ, bán hàng online |
| tận tâm, uy tín, chuyên nghiệp, giải pháp toàn diện | (bỏ, thay bằng bằng chứng cụ thể) |

Ngoại lệ được giữ: tên sản phẩm (Google Ads, Meta, TikTok, GA4, Looker, Performance Max), SEO, và CPA/ROAS khi đã có giải nghĩa tiếng Việt đi trước.

### 2.5. Icon

Đúng **một bộ: Lucide** (`lucide-static` 0.460.0, giấy phép ISC), qua `components/ui/Icon.js`. Không để AI tự vẽ icon, không trộn bộ khác, không dùng ký tự ⌖ ✆ ✉ ↗ làm icon. Cần icon mới: lấy từ `unpkg.com/lucide-static@0.460.0/icons/<tên>.svg` (bỏ dòng chú thích giấy phép, chỉ lấy phần bên trong thẻ svg) rồi thêm vào `ICONS`. Hình minh họa nét (hero, sơ đồ dịch vụ) là SVG tự dựng; hình 3D trang trí là bộ 3dicons CC0 (mục 2.9).

### 2.6. Màu (`app/styles/tokens.css`)

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--brand` | `#FF7A00` | Nút chính "Đặt lịch tư vấn" (chữ Midnight). Không dùng cho chữ nhỏ trên nền trắng |
| `--brand-ink` | `#B84A00` | Chữ cam nhỏ, link, con số kết quả (đạt 4.5:1) |
| `--grad-warm-text` | `#E0560F` → `#E0245E` → `#6A4CF0` | Cụm chữ nhấn `.hl` (Fraunces nghiêng) |
| `--grad-warm` | Signature `#FF7A00` → `#FF416C` → `#765BFF` | Đường doanh thu ở hero, đường ray quy trình, vạch khi rê chuột |
| `--grad-mist` | `#F5F6FA` → `#E8E9FF` → `#F7E5EB` | Khối ma trận hành trình |
| `--grad-midnight` / `--midnight` | `#10121C` … | Khối liên hệ, footer (khung tối cuối trang) |
| `--ink` / `--ink-3` | `#10121C` / `#62697D` | Chữ / chữ phụ |
| `--line` / `--gray` | `#DCE0E9` / `#F5F6FA` | Viền mảnh / khối nền xám |

Ba chặng ma trận: cam, san hô, tím (chữ trắng trên tím đậm `#5A3FE0`).

### 2.7. Hình khối và bố cục

- Nút, ô nhập: bo 12px, cao tối thiểu 44px (vùng bấm theo luật giao diện của Apple). Thẻ nội dung: bo 16px, viền 1px, **không đổ bóng**. Nhãn nhỏ: bo 6px.
- Section xen kẽ: nền trắng toàn chiều ngang và khối nền xám (hoặc Mist) bo góc lớn thụt vào hai bên. Không đặt hai khối xám liền nhau.
- **Không dùng nhãn nhỏ phía trên tiêu đề** (kicker, eyebrow): đó là dấu hiệu khuôn AI.
- **Hero trang chủ** (`components/hero/HomeHero.js`): H1 lớn trải ngang; dưới là mô tả + nút + số điện thoại (trái) và ba bằng chứng có tên riêng xếp danh sách kẻ mảnh (phải); cuối là khung biểu đồ "đo bằng traffic hay doanh thu" trải rộng.
- **Hero trang con** (`components/hero/Hero.js`): xếp dọc: breadcrumb, H1, một dòng mô tả; minh họa thành dải rộng bên dưới. Trang dịch vụ dùng `long` (H1 dài hơn, cỡ nhỏ hơn).

### 2.8. Ảnh

- Ảnh dự án: ảnh thật từ trang dự án của SOHO (`public/projects/*.webp`), không ảnh kho.
- Chưa có ảnh đội ngũ: hiện chữ cái đầu tên (Fraunces nghiêng trên nền Mist), không để khung trống. Có ảnh thì thêm `photo` vào `team` trong `app/ve-soho/page.js`.
- Ô "sản phẩm bàn giao" ở trang dịch vụ chỉ hiện khi có ảnh thật (`artifact.image`).
- Ảnh tạo bằng công cụ (nếu dùng): theo phong cách thương hiệu, 16:9, không có chữ trong ảnh.

### 2.9. Chuyển động và tương tác

Chỉ đặt ở chỗ giúp người xem hiểu hoặc quyết định nhanh hơn (xem bảng 2.10). Tắt hết khi bật giảm chuyển động. Không hiệu ứng chuột, hạt bay, parallax nặng.

### 2.9b. Hình 3D trang trí (`public/decor/`, thuộc tính `decor` của `Section`)

Bộ 3dicons của Vijay Verma (CC0), kiểu clay, WebP ~5 KB. Chỉ đặt trên khối nền xám, góc phải, trôi chậm.

### 2.10. Tương tác có ý nghĩa

| Ở đâu | Tương tác | File |
|---|---|---|
| Hero trang chủ | Công tắc **Đo bằng traffic / Đo bằng doanh thu** | `components/hero/RevenueToggle.js` |
| Khối dịch vụ trang chủ | Bộ chọn **Bạn đang gặp vấn đề gì?** làm sáng dịch vụ phù hợp | `components/ServiceGroups.js` |
| Ma trận hành trình | Ba chặng sáng lần lượt khi cuộn; rê chuột vào kênh tô cả cột | `components/diagrams/JourneyMatrix.*` |
| Huy hiệu Google Partner | Rê chuột hoặc Tab: ba tiêu chí Google xác nhận | `components/proof/PartnerBadge.*` |
| Mobile | Thanh cố định **Gọi / Đặt lịch tư vấn** | `components/StickyCta.js` |
| Bài dài | Thanh tiến độ đọc | `components/article/ReadingProgress.js` |

---

## 3. Cấu trúc code mới

```
app/
  layout.js              next/font (Fraunces, Be Vietnam Pro), import styles
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
