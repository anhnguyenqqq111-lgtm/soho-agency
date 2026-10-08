# Bộ prompt viết lại giao diện SOHO, làm từng phần

Cách dùng: chạy từng prompt theo thứ tự, mỗi prompt một lượt. Xem kết quả (`npm run dev`) xong mới chạy prompt tiếp theo. Prompt nào chưa ưng thì yêu cầu sửa ngay trong lượt đó, không chuyển sang prompt sau.

Mọi prompt đều dẫn chiếu tới `DESIGN.md` và mục **Quy tắc chung** dưới đây, nên không cần dán lại các phần này.

---

## Quyết định đã chốt (sửa ở đây nếu muốn đổi)

- Palette theo logo (giấy ngà, mực, cam đỏ `#D2401A`). Bỏ màu tím `#3924BF`.
- Bỏ quy tắc `cleanPunctuation`, cho phép dùng dấu câu bình thường.
- Hiển thị 9 bài viết trong `components/articles/*` lên trang dịch vụ. Chỉ đổi giao diện, không viết lại nội dung.
- Bỏ FAQ hard-code có câu "hoàn trả ngân sách".

## Quy tắc chung (áp dụng cho mọi prompt)

1. Đọc `DESIGN.md` trước khi làm. Màu, font, lưới, khoảng cách lấy từ token, không hard-code.
2. Chỉ sửa đúng phạm vi của prompt. Không đụng vào trang hay component khác.
3. Khi thay một phần cũ, xóa luôn các rule CSS tương ứng trong `app/globals.css`. File này sẽ teo dần rồi bị xóa ở prompt cuối.
4. Không thêm thư viện. Không dùng icon lucide để trang trí, chỉ được dùng cho mũi tên, menu, đóng, chevron.
5. Mặc định là Server Component. Chỉ phần có state hoặc event mới tách ra file `'use client'`.
6. Link nội bộ đi qua `sitePath()`. Không đổi URL.
7. Không bịa số liệu. Chỗ cần số mà chưa có thì ghi `[CẦN SỐ LIỆU THẬT]`.
8. Không dùng: gradient, glow, glass, blur, shadow màu, card có icon trong ô bo góc, eyebrow VIẾT HOA, animation khi cuộn, hover nâng card, emoji.
9. Xong việc: chạy `npm run build` (phải pass), kiểm tra ở 375px và 1440px, rồi commit với message tiếng Việt mô tả phần vừa làm.
10. Báo lại: đã đổi những file nào, đã xóa gì, còn vướng gì.

---

## Giai đoạn A: Nền tảng

### A1. Font, token, base style

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: dựng nền tảng style mới, chưa đổi giao diện trang nào.
- Tạo app/styles/tokens.css: toàn bộ biến ở mục 2.2 (màu), 2.3 (cỡ chữ desktop/mobile), 2.4 (container, gap, các mức khoảng cách section).
- Tạo app/styles/base.css: reset tối giản, body (nền --paper, chữ --ink, Be Vietnam Pro 17px/1.65), h1 đến h4 dùng Newsreader theo thang chữ, link gạch chân theo mục 2.5, focus-visible rõ ràng (outline 2px --accent), prefers-reduced-motion, class tiện ích .container và .visually-hidden.
- Tạo class .prose trong base.css cho nội dung bài viết dài: h2, h3, h4, p, ul, ol, blockquote, table, strong, độ rộng tối đa 68ch.
- app/layout.js: nạp Newsreader (400, 500, italic) và Be Vietnam Pro (400, 500, 600) qua next/font/google, subset ['latin','vietnamese'], display swap, gán thành biến CSS --font-display và --font-text. Import tokens.css và base.css SAU globals.css.
- Sửa metadata mặc định: thêm template title "%s | SOHO Agency".

Không xóa globals.css ở bước này. Chấp nhận việc trang cũ trông lệch font.
```

### A2. Thêm dấu cho dữ liệu dịch vụ

```text
Đọc mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: components/servicePagesData.js đang viết tiếng Việt không dấu. Thêm lại dấu đầy đủ, chính xác cho mọi trường (title, menuTitle, category, intro, promise, insight, outcomes, pains, process, proof).
- Giữ nguyên slug và tên thuật ngữ tiếng Anh (SEO, ROAS, CRM, Performance Max...).
- category phải khớp đúng tên nhóm trong Header: "Tối ưu tìm kiếm & AI", "Paid Ads & Performance", "Content & Dữ liệu".
- Không viết lại ý, chỉ thêm dấu. Câu nào sai chính tả rõ ràng thì sửa và liệt kê lại cho tôi.
```

### A3. Component dùng chung

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: tạo các component dùng chung, mỗi cái kèm một file .module.css.
- components/ui/Section.js: khung section theo lưới 4/8. Props: index ("02"), label ("Dịch vụ"), title, intro, children, variant ("default" | "wide" | "split"), spacing ("sm" | "md" | "lg"), tone ("paper" | "paper2"). Cột nhãn sticky trên desktop, trên mobile xếp chồng. Có đường kẻ trên cùng.
- components/ui/NumberedList.js: danh sách đánh số kiểu mục 2.5 (số Newsreader màu --accent, tiêu đề, mô tả, đường kẻ giữa các dòng). Props: items [{title, text, href?}], start.
- components/ui/Button.js: dạng primary (nền --ink, hover --accent) và text link có ký tự →. Render thẻ <a> khi có href, <button> khi không có.
- components/ui/PageHeader.js: phần đầu cho các trang con. Gồm breadcrumb dạng chữ nhỏ, H1, lead, và slot cho meta hoặc nút.

Chưa dùng các component này ở trang nào. Để kiểm tra, tạo trang tạm app/_preview/page.js hiển thị đủ biến thể, chụp ảnh ở 375px và 1440px, sau đó xóa trang tạm trước khi commit.
```

---

## Giai đoạn B: Khung site

### B1. Header

```text
Đọc DESIGN.md (mục 2.5 phần Header) và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: viết lại components/Header.js.
- Header.js là Server Component: logo (public/brand/soho-logo.svg, cao 36px), các link Dịch vụ, Giải pháp, Kết quả, Blog, Về SOHO, và nút "Liên hệ" (Button primary cỡ nhỏ). Giữ prop activeNav để đánh dấu mục đang xem (gạch chân --accent, không đổi nền).
- Dữ liệu menu: lấy từ servicePagesData (nhóm theo category) và solutionPagesData. Không hard-code lại mảng megaServices/megaSolutions. Bỏ icon, tag "Hiệu quả cao / Xu hướng 2026 / ROAS 4.8x", promo box.
- Tách components/NavMenu.js ('use client'):
  - Desktop: bấm "Dịch vụ" hoặc "Giải pháp" thì mở panel full-width nền --paper, viền dưới --rule. Panel chia cột theo nhóm, mỗi cột gồm tên nhóm (13px, --ink-3) và danh sách link (tên + mô tả 1 dòng --ink-2). Cuối panel có link "Tất cả dịch vụ →". Đóng khi bấm Esc, bấm ra ngoài hoặc chọn link. Có aria-expanded và aria-controls.
  - Mobile (dưới 960px): nút "Menu" dạng chữ, mở lớp phủ toàn màn hình, các nhóm dạng accordion, khóa cuộn body khi mở.
- Header sticky, nền --paper, viền dưới 1px --rule. Không blur, không shadow.
- Xóa topbar (nếu có) và toàn bộ CSS cũ của header, nav, mega menu, hamb, service3dIcon trong globals.css.
- Kiểm tra trên mọi trang hiện có, vì Header được dùng chung.
```

### B2. Footer

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: viết lại components/Footer.js thành Server Component (bỏ 'use client').
- Nền --night, chữ --paper. Hàng trên: logo trắng (soho-logo-white.svg) và một câu mô tả SOHO ngắn, cụ thể (không dùng "giải pháp toàn diện").
- Lưới link 4 cột: Dịch vụ (lấy từ servicePagesData), Giải pháp, Công ty (Kết quả, Blog, Về SOHO, Liên hệ), Liên hệ (email là link mailto, khu vực Hà Nội và TP.HCM).
- Hàng dưới cùng: © năm hiện tại (tính bằng new Date()) và link quay lên đầu trang.
- Mobile: các cột xếp thành 2 cột rồi 1 cột.
- Xóa CSS footer cũ trong globals.css.
```

---

## Giai đoạn C: Trang chủ (mỗi prompt làm một section)

Thứ tự section mới: Hero → Khách hàng → Dịch vụ → Cách làm việc → Quy trình → Bài viết → Liên hệ.

### C1. Chuyển trang chủ sang Server Component + Hero

```text
Đọc DESIGN.md (mục 1.2 phần Trang chủ, mục 2) và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ:
1. Bỏ 'use client' ở app/page.js. Xóa hàm HeroVisual, mảng tabs và toàn bộ import lucide không còn dùng. Phần nào cần state thì tách ra component client riêng.
2. Viết lại Hero (app/page.module.css):
   - Bố cục bất đối xứng: H1 chiếm 8–9 cột, bên phải hoặc bên dưới là một khối chữ nhỏ gồm 3 dòng "SOHO làm gì" (SEO và AI Search / Quảng cáo Google, Meta, TikTok / Đo lường và CRO), mỗi dòng là link tới trang dịch vụ.
   - H1: viết lại cụ thể, nói rõ SOHO làm gì và đo bằng gì, tối đa khoảng 12 từ. Có thể in nghiêng (Newsreader italic) hoặc tô --accent cho một cụm từ. Đưa ra 3 phương án H1 trong báo cáo để tôi chọn, trên trang dùng phương án đầu.
   - Lead 1–2 câu. Hai hành động: Button "Đặt lịch trao đổi" (đến #lien-he) và link "Xem cách SOHO làm việc →".
   - Không có stats bar, không có visual, không có badge.
3. Xóa toàn bộ CSS hero cũ trong globals.css (hero, heroVisual, aurora, grid, orbit, satellite, glassCard, floatingBadge, heroStatsBar, radarPulse, shimmerGradientText, btnGlow, btnSweep...).

Tạm thời giữ nguyên các section bên dưới.
```

### C2. Khách hàng

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: viết lại section logo khách hàng trên trang chủ.
- Chuyển mảng clientLogos sang components/data/clients.js để dùng lại ở trang Kết quả.
- Trình bày dạng bảng hoặc danh sách có đường kẻ, mỗi dòng gồm: logo (grayscale, cao 28px, hover hiện màu gốc), tên, lĩnh vực, hạng mục SOHO làm. Tên là link mở tab mới (rel noopener).
- Mobile: mỗi khách hàng là một khối xếp dọc, không cuộn ngang.
- Tiêu đề section viết ngắn, không dùng "Được tin tưởng bởi". Ví dụ: "Một số doanh nghiệp SOHO đang làm cùng".
- Kiểm tra logo everlog-dark.png và fitfood-dark.png trên nền --paper. Nếu logo nào bị chìm thì dùng bản thường.
- Xóa CSS clientTrust* cũ.
```

### C3. Dịch vụ

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: thay section 6 service card trên trang chủ.
- Dùng <Section index="02" label="Dịch vụ">. Lấy dữ liệu từ servicePagesData, nhóm theo 3 category.
- Mỗi nhóm có tên nhóm làm tiêu đề nhỏ, bên dưới là các dịch vụ dạng dòng: tên dịch vụ (Newsreader 24px), một câu intro rút gọn, mũi tên → căn phải. Cả dòng là link tới /dich-vu/[slug]. Hover chỉ đổi màu chữ sang --accent.
- Cuối section có link "Tất cả dịch vụ →".
- Xóa mảng services cũ và CSS serviceGrid/serviceCard, cùng section "strip" phía trên.
```

### C4. Cách làm việc

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: gộp 4 section cũ (bảng so sánh comparison, "dark" approach + SOHO Engine, "results" 3 nhóm số, "why") thành một section "Cách làm việc".
- <Section index="03" label="Cách làm việc">, variant "split".
- Nội dung là 4 nguyên tắc, mỗi nguyên tắc có tiêu đề ngắn và 2–3 câu giải thích cụ thể. Lấy ý thật từ comparisonData:
  1. Doanh nghiệp sở hữu toàn bộ tài khoản và dữ liệu
  2. Người lập chiến lược là người trực tiếp làm
  3. Làm theo sprint 2 tuần, có giả thuyết và chỉ số
  4. Báo cáo theo lead và doanh thu (gộp ý 3 nhóm số SEO/ADS/CRO thành một bảng nhỏ: kênh, chỉ số theo dõi hằng tuần)
- Không so sánh với "agency truyền thống", không dùng dấu ✓/✗.
- Xóa comparisonData, CSS comparison*, engine*, metricGrid, why*, shape*, floating*.
```

### C5. Quy trình

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: viết lại section quy trình 5 bước trên trang chủ bằng <NumberedList>.
- Giữ nội dung 5 bước trong mảng process, sửa câu nếu sáo.
- Section dùng tone "paper2" để tạo nhịp.
- Thêm một dòng ghi chú về thời gian, ví dụ "Sprint đầu tiên thường bắt đầu sau 2 tuần audit", nhưng chỉ khi thông tin này đúng. Không chắc thì để [CẦN XÁC NHẬN].
- Xóa CSS timeline, soft cũ.
```

### C6. Bài viết + Liên hệ

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: làm 2 section cuối trang chủ.
1. Bài viết: lấy 3 bài mới nhất từ blogData (sắp theo date), không hard-code. Mỗi bài là một dòng gồm ngày, danh mục, tiêu đề (Newsreader), cả dòng là link. Không card, không banner. Có link "Tất cả bài viết →".
2. Liên hệ (id="lien-he"):
   - Tạo components/ContactForm.js ('use client'). Trường: website, họ tên, email, số điện thoại (không bắt buộc), mục tiêu (select), ghi chú (textarea). Có label thật, required, kiểu input đúng (url, email, tel). Khi submit: chặn reload, hiện thông báo "Đã nhận thông tin, SOHO sẽ phản hồi trong 1 ngày làm việc [CẦN XÁC NHẬN]". Để comment TODO chỗ nối API.
   - Bố cục 5/7: trái là tiêu đề, 3 bước "sau khi gửi form", email trực tiếp; phải là form.
   - Input: viền dưới 1px --ink, nền trong suốt, radius 2px, focus đổi viền --accent.
3. Đổi các anchor #contact cũ trên toàn site thành #lien-he (grep để tìm).
4. Xóa CSS insights, articleGrid, contact cũ. Rà lại app/page.js: không còn import thừa.
```

---

## Giai đoạn D: Trang dịch vụ

### D1. Trang /dich-vu

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: viết lại app/dich-vu/page.js.
- Dùng <PageHeader>: H1 ngắn và một lead nói SOHO chọn dịch vụ theo điểm nghẽn.
- Thân trang: 3 nhóm theo category. Mỗi nhóm là một bảng gồm các cột: Dịch vụ (link), Dành cho (intro rút gọn), Kết quả đo (outcomes[0]). Trên mobile, mỗi dòng chuyển thành khối xếp dọc.
- Bỏ mảng serviceStats (01/90D/2W lặp lại), servicesHeroBoard và icon.
- Cuối trang: một khối CTA chữ đơn giản dẫn tới /lien-he.
- Xóa CSS menuPageHero, servicesIndexHero, servicesHeroBoard*, menuPageGrid, menuPageCard, serviceMiniStats, serviceOutcomeList nếu không trang nào còn dùng.
```

### D2. Component ArticleBody

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: tạo components/article/ArticleBody.js (Server Component) để render dữ liệu trong components/articles/*.js. Mỗi file có dạng { metaTitle, metaDesc, readingTime, updatedDate, author, toc[], sections[{id, heading, content}] }, trong đó content là markdown.

Viết một bộ chuyển markdown đơn giản (components/article/markdown.js, không dùng thư viện) hỗ trợ đúng các cú pháp đang có trong 9 file:
- ### và #### thành h3, h4
- đoạn văn, **đậm**, *nghiêng*
- danh sách * và -, danh sách số 1. (kể cả dòng thụt lề nằm dưới item)
- checklist "- [ ] " thành danh sách có ô vuông tĩnh (chỉ để hiển thị, không cần state)
- bảng markdown có dòng căn lề :--- thành <table> nằm trong khung cuộn ngang trên mobile
- blockquote >
Trước khi viết, grep cả 9 file để liệt kê mọi cú pháp thực tế đang có và báo lại cho tôi.

Trình bày:
- Section FAQ (heading có chữ "FAQ" hoặc "Câu hỏi thường gặp"): mỗi "### Câu hỏi" render thành <details>/<summary>, không cần JS. Xuất thêm JSON-LD FAQPage.
- Mục lục: components/article/Toc.js ('use client'), sticky ở cột trái trên desktop, đánh dấu mục đang đọc bằng IntersectionObserver. Trên mobile, mục lục là một <details> đặt đầu bài.
- Nội dung dùng class .prose.
- Bỏ số thứ tự "1." ở đầu heading khi hiển thị nếu đã có số do layout tự đánh, nhưng không sửa file data.

Đánh dấu bằng <mark data-verify> (style: gạch chân chấm màu --gold) các câu có số liệu khẳng định về SOHO như "hơn 150 doanh nghiệp", "6 năm", "gấp 3 lần", "60% chi phí". Liệt kê toàn bộ các câu này trong báo cáo để tôi kiểm tra.

Chưa gắn component này vào trang nào.
```

### D3. Trang /dich-vu/[slug]

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: viết lại app/dich-vu/[slug]/page.js.
1. Đầu trang (<PageHeader>): breadcrumb Dịch vụ / Tên nhóm, H1 = service.title, lead = service.intro, meta gồm thời gian đọc, ngày cập nhật, tác giả (lấy từ article). Nút "Trao đổi về dịch vụ này" đến /lien-he.
2. Khối tóm tắt dạng lưới 3 cột có đường kẻ, không card: "Dấu hiệu bạn cần" (pains), "Kết quả cần đạt" (outcomes), "SOHO làm gì" (process, dạng danh sách số). Thêm service.insight thành một câu trích dẫn lớn (Newsreader italic).
3. Thân bài: <ArticleBody> với Toc ở cột trái (4/8). Nếu dịch vụ không có article thì bỏ qua phần này.
4. Cuối trang: "Dịch vụ liên quan" (2–3 dịch vụ cùng category) và CTA.
5. generateMetadata: dùng article.metaTitle/metaDesc, bỏ cleanPunctuation. Thêm JSON-LD Service.
6. Xóa components/ServiceSectionVisualizer.js, components/cleanPunctuation.js, components/ArticleRenderer.js và toàn bộ CSS liên quan (serviceCleanHero, serviceHeroMosaic, serviceHeroTrustBar, serviceSubnav*, visualSection*, frameworkDiagram*, diagram*, track*, qualityGate*, faqAccordion*, articleTable*, serviceFinalCta nếu không còn dùng...).
7. Build và mở thử cả 9 slug.
```

---

## Giai đoạn E: Các trang còn lại

### E1. Giải pháp

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: viết lại app/giai-phap/page.js và app/giai-phap/[slug]/page.js.
- solutionPagesData: bỏ trường icon và import lucide. Thêm trường group: "Theo mô hình kinh doanh" cho 3 slug đầu, "Cách SOHO làm việc" cho 3 slug sau. Thêm trường relatedServices (mảng slug dịch vụ phù hợp, chọn hợp lý và liệt kê lại cho tôi).
- Trang danh sách: <PageHeader> + 2 nhóm, mỗi nhóm là danh sách dòng (tiêu đề, desc, →).
- Trang chi tiết: <PageHeader> (eyebrow chuyển thành breadcrumb, viết thường), <NumberedList> các outcomes, khối "Dịch vụ thường dùng" từ relatedServices, CTA. Bỏ solutionDetailVisual.
- Header (mega menu Giải pháp) dùng trường group mới.
- Xóa CSS solutionIndex*, solutionDetail*, serviceOutcomeGrid nếu không còn dùng.
```

### E2. Kết quả

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: viết lại app/ket-qua/page.js thành trang "Cách SOHO đo kết quả".
- <PageHeader> với H1 cụ thể.
- Bảng chỉ số theo kênh gồm các cột: Kênh, Chỉ số hằng tuần, Chỉ số hằng tháng, Không dùng làm KPI chính. Dòng: SEO, Quảng cáo, CRO, Content, Đo lường. Nội dung lấy từ servicePagesData/outcomes và metrics cũ, viết gọn.
- Section "Dự án": dùng components/data/clients.js. Mỗi khách hàng có khung case study gồm Bối cảnh / Việc đã làm / Kết quả, tất cả để [CẦN CASE STUDY THẬT]. Không bịa.
- CTA cuối trang.
```

### E3. Về SOHO

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: viết lại app/ve-soho/page.js.
- <PageHeader>.
- Phần giới thiệu: 2–3 đoạn văn trong .prose, cột 8. Thông tin về năm thành lập, quy mô đội ngũ, văn phòng để [CẦN THÔNG TIN THẬT].
- "Nguyên tắc làm việc": <NumberedList> 4 ý (từ mảng hiện có), mỗi ý thêm 1–2 câu giải thích.
- "Đội ngũ": lưới tên + vai trò, lấy các tác giả đang xuất hiện trong blogData và articles (Nguyễn Thế Tuấn Anh, Trần Minh Quân...). Không ảnh, không bịa tiểu sử.
- CTA cuối trang.
- Xóa CSS aboutPageGrid.
```

### E4. Liên hệ

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: viết lại app/lien-he/page.js.
- Bỏ 'use client', thêm metadata (title, description).
- Dùng lại components/ContactForm.js.
- Bố cục 5/7: trái là H1, email (mailto), khu vực, "Sau khi gửi form" 3 bước, giờ làm việc [CẦN XÁC NHẬN]; phải là form.
- Xóa CSS contactPage nếu không còn dùng.
```

### E5. Blog: trang danh sách

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: viết lại app/blog/page.js theo kiểu trang mục lục tạp chí.
- <PageHeader> ngắn.
- Bài nổi bật: không banner. Bố cục 8/4: trái là danh mục, tiêu đề Newsreader 44px, excerpt, tác giả, ngày; phải để trống hoặc là danh sách 3 bài tiếp theo dạng chữ nhỏ.
- Phần còn lại: danh sách dòng gồm ngày (tabular-nums), danh mục, tiêu đề, thời gian đọc. Nhóm theo danh mục hoặc theo tháng (chọn một và giải thích lý do).
- Bộ lọc danh mục: tạo route tĩnh hoặc dùng anchor theo nhóm. Không làm chip giả không bấm được như hiện tại.
- Trong blogData: xóa trường views và banner, không hiển thị lượt xem.
- Bỏ blogHeroVisual, categoryHighlights và icon.
- Xóa CSS blogHero*, blogCategory*, blogBanner*, featuredPost*, blogCard*, blogFilterRow.
```

### E6. Blog: trang bài viết

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: viết lại app/blog/[slug]/page.js.
- Đầu bài: link "← Blog", danh mục, H1 (Newsreader, tối đa 20ch mỗi dòng), excerpt làm lead, dòng meta gồm tác giả, vai trò, ngày, thời gian đọc.
- Nội dung (article.content là HTML) đặt trong .prose, cột 680px căn giữa hoặc lệch trái theo lưới. Bỏ banner gradient và box tác giả nổi.
- Cuối bài: hộp tác giả đơn giản có đường kẻ trên, một CTA dạng chữ, "Đọc tiếp" gồm 3 bài cùng danh mục (thiếu thì lấy bài mới nhất) dạng danh sách.
- Thêm JSON-LD Article.
- Rà nội dung HTML trong blogData: thay dấu "–" làm gạch đầu dòng bị lỗi nếu có, không sửa nội dung.
- Xóa CSS postPage*, postShell, postBanner, postAuthorBox, relatedPosts nếu không còn dùng.
```

---

## Giai đoạn F: Dọn dẹp và kiểm tra

### F1. Dọn dẹp

```text
Đọc mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: dọn dẹp toàn bộ dự án.
- Chuyển những rule còn sót lại trong app/globals.css (nếu còn dùng) về đúng module, rồi xóa globals.css và dòng import của nó.
- grep mọi import từ lucide-react. Chỉ được còn ArrowRight, ArrowLeft, Menu, X, ChevronDown. Nếu chỉ còn 2–3 icon thì cân nhắc thay bằng ký tự hoặc SVG inline rồi gỡ hẳn lucide-react khỏi package.json, kèm giải thích.
- Xóa file không còn được tham chiếu: public/brand/page-*.png, logo trùng lặp, components không còn import. Liệt kê trước khi xóa.
- Cập nhật README.md: bỏ nội dung "GrowthLab / WebFX", mô tả đúng dự án SOHO, cách chạy, cấu trúc thư mục và đường dẫn tới DESIGN.md.
```

### F2. Kiểm tra cuối

```text
Đọc DESIGN.md và mục Quy tắc chung trong PROMPTS.md.

Nhiệm vụ: kiểm tra toàn site, chỉ báo cáo, không sửa trừ lỗi build.
1. npm run build. Liệt kê mọi route trong out/ và so với danh sách URL cũ: /, /dich-vu (+9 slug), /giai-phap (+6 slug), /ket-qua, /blog (+các slug), /ve-soho, /lien-he.
2. Build lại với GITHUB_PAGES=true, kiểm tra mọi link và ảnh có basePath /soho-agency.
3. Với từng trang, đối chiếu danh sách "Cấm tuyệt đối" (Quy tắc chung mục 8) và ghi vi phạm nếu có.
4. Kiểm tra truy cập: mỗi trang chỉ có một h1, heading không nhảy cấp, ảnh có alt, form có label, đi được toàn bộ menu bằng bàn phím, độ tương phản --ink-3 và --accent trên --paper đạt AA (tính ra tỉ lệ).
5. Chụp ảnh mỗi trang ở 375px và 1440px nếu có công cụ. Kiểm tra không có cuộn ngang.
6. Gom toàn bộ placeholder [CẦN ...] và <mark data-verify> thành một danh sách để tôi điền.
Báo cáo dạng bảng: trang, vấn đề, mức độ, đề xuất.
```
