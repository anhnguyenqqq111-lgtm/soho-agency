# Kế hoạch 12 bài đọc kỹ trên trang dịch vụ (31/10/2026)

Mỗi trang dịch vụ `/dich-vu/<slug>/` có một bài đọc kỹ ở cuối trang (section `#doc-ky`).
Bài thay hoàn toàn bản cũ ở `components/articles/*.js`. Bản cũ có nhiều số không nguồn, thông tin lỗi thời
(Enhanced CPC, Chrome bỏ cookie bên thứ ba) và lời khuyên trái chính sách Google (xin đánh giá 5 sao), nên không chép lại.

## 1. Luật chung cho cả 12 bài

**Độ dài:** 1.800–2.400 từ, tính cả tiêu đề mục và FAQ. Không vượt 2.500.

**Giọng văn:** theo `docs/redesign/WRITING_GUIDE.md` mục 1, 3, 4.
- Viết cho chủ doanh nghiệp vừa và nhỏ ở Việt Nam. Tiếng Việt tự nhiên, câu ngắn.
- Dùng thuật ngữ phổ biến (SEO, lượt hiển thị, lượt nhấp, khách hàng tiềm năng, tỉ lệ chuyển đổi, landing page). Thuật ngữ lạ giải thích một lần.
- Không phẩy trước "và". Không cụm dịch máy. Không cường điệu ("đột phá", "bùng nổ", "thần tốc", "tuyệt đối", "hàng đầu").

**Sự thật và nguồn:**
- Số liệu thị trường, chính sách nền tảng, tính năng sản phẩm phải tra cứu lúc viết (WebSearch/WebFetch). Ưu tiên tài liệu chính thức: Google Search Central, Google Ads Help, Google Business Profile Help, Analytics Help, Meta Business Help Center, TikTok Business Help, Apple App Store Review Guidelines, Google Play Policy, văn bản pháp luật Việt Nam.
- Mỗi số hay khẳng định về chính sách ghi nguồn ngay trong câu: "theo [Google Search Central](https://…)". Cú pháp link `[chữ](https://…)` đã được hỗ trợ.
- Không viết số về SOHO (số khách, số năm, % tăng trưởng) ngoài những gì có trong `components/data/cases.js`. Nhắc case thì dùng đúng số, khoảng ngày và tên như trong file đó.
- Không hứa thứ hạng, không hứa doanh thu, không hứa thời gian lên top. Nói khoảng thời gian thường gặp thì kèm điều kiện.
- Thông tin không chắc thì bỏ, không đoán.

**Không trùng lặp:** mỗi bài chỉ viết phần thuộc chủ đề của mình (mục 3). Phần thuộc bài khác thì viết một câu rồi dẫn sang trang dịch vụ đó: "xem [trang Tối ưu chuyển đổi](/dich-vu/cro-landing-page/)". Link nội bộ dùng đường dẫn tương đối, không cần `https`. Không chép đoạn văn giữa các bài, kể cả FAQ.

**Cấu trúc file** (giữ tên export cũ để trang không vỡ; 3 bài mới tạo file mới):
```js
export const <tênArticle> = {
  metaTitle: '…',            // ≤ 60 ký tự, có từ khóa chính, đuôi "| SOHO"
  metaDesc: '…',             // ≤ 155 ký tự
  readingTime: 'N phút đọc', // số từ / 220, làm tròn
  updatedDate: '31/10/2026',
  author: {name: 'Nguyễn Thế Tuấn Anh', role: 'Phụ trách chiến lược tăng trưởng, SOHO Agency'},
  cover: {src: '/media/articles/<slug>/soho-<slug>-cover.webp', alt: '…'},
  toc: [{id, title}],        // khớp sections
  sections: [{id, heading, content}]  // content là markdown
};
```
- `heading` dạng "1. …". Mục cuối là FAQ, heading có chữ "Câu hỏi thường gặp", mỗi câu hỏi là `### …`, 4–6 câu. Trang tự sinh schema FAQ.
- Markdown hỗ trợ: `###`, `####`, danh sách, bảng, `>`, **đậm**, *nghiêng*, link, ảnh.
- Ảnh trong bài: `![alt](/media/articles/<slug>/<file>.webp "1360x850")`, dòng ngay sau là chú thích in nghiêng `*…*`. Kích thước theo preset: `inline` 1360x850, `inline-tall` 1360x1120, `square` 1360x1360.

**Ảnh (bắt buộc, mỗi bài 1 ảnh bìa + 2–3 sơ đồ):** dựng bằng mẫu SOHO đã chép vào `tools/soho-images/`
(logo Open Corner, bảng màu `denim`). Không dùng ảnh stock, không ảnh người, không ảnh AI.
1. File dữ liệu: `docs/articles/<slug>/images/src/soho-<slug>-cover.data.js`, `…-steps-01.data.js`, `…-compare-01.data.js`…
   Mẫu: `tools/soho-images/examples/*.data.js`. Luật trường và giới hạn ký tự: mục "Bước 2" của
   `/Users/t.anh/.gemini/antigravity-ide/scratch/goha-seo-ws2/.agents/skills/creating-images-soho/SKILL.md`.
   Luôn đặt `palette: 'denim'`. Ảnh bìa: `preset: 'cover'`, `title` ≤ 50 ký tự, `scene` dựng từ nội dung bài (3–4 mục), `category` là tên nhóm dịch vụ, `note: 'SOHO Agency'`.
2. Render: `python3 tools/soho-images/scripts/render.py docs/articles/<slug>/images/src/*.data.js` → ra `docs/articles/<slug>/images/*.webp`.
3. Mở từng ảnh bằng công cụ đọc ảnh để xem: không chữ bị cắt, không ngắt dòng xấu, dấu tiếng Việt đủ. Lỗi thì sửa file dữ liệu và render lại.
4. Chép ảnh đạt sang `public/media/articles/<slug>/`.
- Mọi chữ trên ảnh lấy từ nội dung bài. Alt tiếng Việt ≤ 125 ký tự, nói ảnh thể hiện gì, không mở đầu bằng "Hình ảnh".

**Tự kiểm tra trước khi báo xong:**
- `node -e "import('./components/articles/<file>.js').then(m=>{const a=Object.values(m)[0];const t=[a.metaTitle,...a.sections.map(s=>s.heading+' '+s.content)].join(' ').replace(/!\[[^\]]*\]\([^)]*\)/g,'').replace(/[#*|>\[\]()`-]/g,' ');console.log(t.split(/\s+/).filter(Boolean).length,'từ');console.log(a.metaTitle.length,a.metaDesc.length)})"`
- toc khớp sections (id), mọi ảnh trong markdown có file trong `public/media/articles/<slug>/`.

## 2. Bốn nhóm

| Nhóm | Bài |
|---|---|
| A. Được tìm thấy trên Google và AI | seo-tong-the, seo-ai-overview, local-seo-google-maps |
| B. Quảng cáo ra đơn | google-ads-shopping, meta-tiktok-ads, cro-landing-page |
| C. Website và thương hiệu | thiet-ke-website, nhan-dien-thuong-hieu, thiet-ke-mobile-app |
| D. Nội dung và đo lường | content-marketing-pr, ga4-looker-dashboard, tu-van-chien-luoc-sprint |

## 3. Bản đồ chủ đề (ai viết gì, ai không viết gì)

| Slug (file) | Từ khóa chính | Góc viết riêng | Không viết, dẫn link sang |
|---|---|---|---|
| seo-tong-the (seoTongThe.js, `seoTongTheArticle`) | dịch vụ SEO tổng thể | SEO mang khách về thế nào; một dự án SEO trọn vẹn gồm gì (kỹ thuật, nội dung theo ý định tìm kiếm, liên kết, đo); bao lâu thấy kết quả và vì sao; chi phí phụ thuộc gì; cách chọn đơn vị SEO, dấu hiệu nên tránh (hứa top 1, backlink mua số lượng) | AI Overview → seo-ai-overview; Google Maps → local-seo-google-maps; kế hoạch nội dung chi tiết → content-marketing-pr; cài đặt đo → ga4-looker-dashboard |
| seo-ai-overview (seoAiOverview.js, `seoAiOverviewArticle`) | SEO AI Overview, tối ưu cho ChatGPT/Gemini | AI Overview và trợ lý AI chọn nguồn thế nào (theo tài liệu Google); khác gì SEO truyền thống; cách viết để được trích dẫn; dữ liệu có cấu trúc liên quan; đo được gì và giới hạn đo (Search Console gộp số) | SEO kỹ thuật nền tảng → seo-tong-the; lịch nội dung → content-marketing-pr |
| local-seo-google-maps (localSeoGoogleMaps.js, `localSeoGoogleMapsArticle`) | SEO Google Maps, tối ưu Google Business Profile | 3 yếu tố xếp hạng địa phương theo Google (mức độ liên quan, khoảng cách, mức độ nổi bật); hồ sơ đầy đủ; đánh giá đúng chính sách (không xin có chọn lọc, không đổi quà); thông tin tên, địa chỉ, điện thoại nhất quán; nhiều chi nhánh | SEO website → seo-tong-the |
| google-ads-shopping (googleAdsShopping.js, `googleAdsShoppingArticle`) | quảng cáo Google Ads, Google Shopping | Search, Shopping, Performance Max khác nhau và khi nào dùng; cấu trúc tài khoản; từ khóa và từ khóa phủ định; chiến lược giá thầu hiện hành; ngân sách thử nghiệm; đọc báo cáo theo doanh thu | landing page → cro-landing-page; cài chuyển đổi chi tiết → ga4-looker-dashboard |
| meta-tiktok-ads (metaTiktokAds.js, `metaTiktokAdsArticle`) | chạy quảng cáo Facebook, quảng cáo TikTok | Tạo nhu cầu khác bắt nhu cầu; mẫu quảng cáo là biến số lớn nhất; cấu trúc chiến dịch hiện hành (Advantage+…); tần suất và mỏi quảng cáo; đặc thù TikTok (video ngắn, Spark Ads); khi nào chạy tin nhắn, khi nào chạy chuyển đổi | landing page → cro-landing-page; Pixel/CAPI chi tiết → ga4-looker-dashboard |
| cro-landing-page (croLandingPage.js, `croLandingPageArticle`) | tối ưu tỷ lệ chuyển đổi, landing page | Tìm chỗ khách rời đi (phễu GA4, bản đồ nhiệt, ghi phiên); cấu trúc một landing page; form và nút gọi; tốc độ trên điện thoại; A/B test đúng cách (cỡ mẫu, thời gian) | thiết kế cả website → thiet-ke-website; chạy quảng cáo → hai bài quảng cáo |
| thiet-ke-website (thietKeWebsite.js, `thietKeWebsiteArticle`, file mới) | thiết kế website doanh nghiệp | Website để nhận khách: sơ đồ trang, nội dung trước giao diện; tốc độ và Core Web Vitals; chuẩn SEO khi dựng; nền tảng (WordPress, tự code…) theo nhu cầu; bàn giao, quyền sở hữu tên miền, hosting; chi phí phụ thuộc gì | tối ưu chuyển đổi bằng thử nghiệm → cro-landing-page; SEO dài hạn → seo-tong-the |
| nhan-dien-thuong-hieu (nhanDienThuongHieu.js, `nhanDienThuongHieuArticle`, file mới) | thiết kế nhận diện thương hiệu | Bộ nhận diện gồm gì; quy trình từ định vị tới hướng dẫn thương hiệu; khi nào nên làm mới; dùng nhất quán trên kênh online; bảo hộ nhãn hiệu (tra cứu thủ tục chính thức của Cục Sở hữu trí tuệ); chi phí phụ thuộc gì | website → thiet-ke-website |
| thiet-ke-mobile-app (thietKeMobileApp.js, `thietKeMobileAppArticle`, file mới) | thiết kế app mobile | Có thật sự cần app (app, web, Zalo Mini App); MVP; native hay đa nền tảng (Flutter, React Native); quy trình; chính sách duyệt App Store, Google Play; bảo trì sau ra mắt; chi phí phụ thuộc gì | website → thiet-ke-website |
| content-marketing-pr (contentMarketingPr.js, `contentMarketingPrArticle`) | content marketing, dịch vụ PR báo chí | Nội dung theo giai đoạn mua; lịch nội dung và tái sử dụng; bằng chứng (case, đánh giá); PR báo chí và quy định ghi nhãn quảng cáo theo Luật Quảng cáo; đo hiệu quả nội dung | SEO kỹ thuật → seo-tong-the; AI Overview → seo-ai-overview |
| ga4-looker-dashboard (ga4LookerDashboard.js, `ga4LookerDashboardArticle`) | GA4, đo lường chuyển đổi, Looker Studio | Sự kiện và sự kiện chính (key events); UTM; chế độ đồng ý; gắn thẻ phía máy chủ, Meta CAPI (đúng tình trạng hiện tại, kể cả quyết định của Google về cookie bên thứ ba trên Chrome); báo cáo Looker Studio tự cập nhật và độ trễ dữ liệu | cách chạy quảng cáo → hai bài quảng cáo |
| tu-van-chien-luoc-sprint (growthStrategySprint.js, `growthStrategySprintArticle`) | lộ trình marketing 90 ngày, tư vấn chiến lược marketing | Khi nào cần tư vấn; đầu vào cần chuẩn bị; chọn kênh theo giai đoạn doanh nghiệp; chia ngân sách thử nghiệm; nhịp 2 tuần; đầu ra là kế hoạch 90 ngày | chi tiết từng kênh → dẫn sang trang dịch vụ tương ứng |

## 4. Ảnh, bản sửa ngày 31/10/2026 (thay quy định ảnh ở mục 1)

Người dùng chốt: ảnh trực quan lấy từ nguồn miễn phí, gắn đúng mẫu ảnh blog SOHO (Editorial Frame v2 trong goha-seo-ws2,
giống ảnh các bài ở /blog). Sơ đồ HTML (tools/soho-images) chỉ dùng ở chỗ thật cần giải thích cấu trúc.

Mỗi bài:
- **Ảnh đầu bài (cover):** khung blog 1600×900, chữ trái là tiêu đề, phải là ảnh chụp CC0.
  `cover: {src: '/media/articles/<slug>/<slug>-hero.webp', alt: '…', width: 1600, height: 900}`.
  Tiêu đề trên ảnh lấy từ metaTitle bỏ đuôi "| SOHO" (rút gọn nếu quá 4 dòng). Nhãn nhóm (category) là tên nhóm dịch vụ ở mục 2.
- **2–3 ảnh trong bài:** khung blog 1200×800, ảnh chụp CC0 + dải nhãn ở chân (nhãn ngắn ≤ 2 dòng, rút từ H2 hoặc ý của đoạn).
  Đặt ngay sau đoạn mở đầu của H2 tương ứng: `![alt](/media/articles/<slug>/<slug>-anh-01.webp "1200x800")` + dòng chú thích `*…*`.
- **Sơ đồ HTML:** giữ tối đa 2 sơ đồ có thông tin (các bước, so sánh, checklist) ở chỗ cần. Bỏ sơ đồ còn lại và bỏ ảnh bìa sơ đồ cũ khỏi bài; xóa file ảnh không còn dùng trong public/media/articles/<slug>/ (giữ file dữ liệu trong docs).
- **Ghi nguồn:** trường `credits: [{text, url}]` trong bài, chép từ docs/articles/<slug>/credits.json (bỏ trường image). Trang tự hiện dòng "Nguồn ảnh" ở cuối bài.

Chọn ảnh:
1. `python3 tools/service-visuals/fetch.py <slug> "<từ khóa tiếng Anh>" --n 9` → ảnh ứng viên CC0 (kho Unsplash trên Wikimedia Commons) + ảnh lưới đánh số trong docs/articles/<slug>/photos/cand/. Từ khóa 1–2 chữ cho nhiều kết quả hơn (ví dụ "magnifying glass", "map pins", "storefront", "smartphone", "notebook", "chart").
2. Mở ảnh lưới bằng công cụ đọc ảnh, chọn ảnh: liên quan nội dung đoạn, **không có người** (mặt, thân người nhận ra được), không logo thương hiệu nổi bật, không chữ lớn, ảnh ngang rõ nét. Mỗi ảnh chỉ dùng một lần trong cả 12 bài.
3. Ghi docs/articles/<slug>/visuals.json (định dạng ở đầu tools/service-visuals/make.py), chỉnh `focal` để chủ thể không bị cắt.
4. Render bằng môi trường của Editorial Frame:
   `/Users/t.anh/.gemini/antigravity-ide/scratch/goha-seo-ws2/tools/soho-editorial-frame/.venv/bin/python3 tools/service-visuals/make.py <slug>`
5. Mở từng ảnh ra xem: tiêu đề không tràn, chủ thể không bị cắt, nhãn đọc được. Sai thì sửa visuals.json và render lại.
