# Audit trải nghiệm dịch vụ SOHO (Service Experience Redesign 3.0)

Ngày audit: 21/10/2026. Nguồn: mã nguồn repo `webfx-vn-nextjs` (nhánh `main`, commit `ca61e03`) và bản chạy https://soho-agency.vercel.app.

## 1. Hiện trạng kỹ thuật

| Hạng mục | Hiện trạng |
| --- | --- |
| Framework | Next.js 15 App Router, xuất tĩnh (`output: 'export'`), CSS Modules, không thư viện UI hay animation |
| Route dịch vụ | `/dich-vu/` (hub) và `/dich-vu/[slug]/` sinh từ `servicePages` (12 slug) |
| Dữ liệu | `components/servicePagesData.js`: mỗi dịch vụ có `title` (H1), `intro`, `promise`, `insight`, `outcomes` (3), `pains` (3), `process` (5–6), `deliverables` (5–6), `proof`, `artifact` |
| Bài dài | `components/articles/*.js` cho 9 dịch vụ (không có cho Thiết kế website, Nhận diện thương hiệu, Mobile App), render bằng `ArticleBody`, có mục lục và FAQ (5–7 câu) |
| Mega Menu | `components/header/navigation.js`: 3 nhóm, 6 dịch vụ chính + link "Xem tất cả dịch vụ" |
| SEO | `generateMetadata`: title từ `metaTitle` của bài, canonical `/dich-vu/<slug>/`; JSON-LD `Service`; breadcrumb trong Hero |
| Đo lường | `components/analytics.js`: `mega_menu_open`, `mega_menu_service_click`, `mega_menu_cta_click`, `generate_lead` (chỉ gửi khi có GA4/GTM; site chưa cài) |
| Form liên hệ | `ContactForm` trong `CtaBand` (#lien-he) ở cuối mọi trang; gửi tới `NEXT_PUBLIC_FORM_ENDPOINT` (chưa cấu hình, đang mở ứng dụng email); payload có `page` |
| Dự án | `components/data/cases.js`: 4 dự án, 3 Facebook/fanpage (Le Viva, Kronos, Helen Bridal), 1 SEO website + Facebook (King Decor); chỉ Le Viva có số liệu công bố |
| Hình ảnh | Logo Open Corner đã duyệt, banner 3D Concept A và C, ảnh dự án thật, sơ đồ SVG cho từng dịch vụ (`ServiceDiagrams.js`) |

## 2. Vấn đề chung

1. **Hub liệt kê 12 dịch vụ ba lần**: ô trong hero, bộ chọn điểm nghẽn, rồi 4 danh sách nhóm.
2. **12 trang chi tiết dùng chung một khuôn**: Hero, "Mục tiêu hướng tới" (3 gạch đầu dòng), 5 bước nền tối, trước/sau, danh sách bàn giao, bài dài, dịch vụ cùng nhóm, form.
3. **Lặp lợi ích**: `outcomes` hiện hai lần trên mỗi trang (khối mục tiêu và cột "sau").
4. **Không có vai trò chiến lược**: trang không nói dịch vụ đứng ở đâu trên hành trình khách, đi cùng dịch vụ nào, khi nào chưa nên làm.
5. **"Dịch vụ cùng nhóm"** chỉ là danh sách cùng `category`, không có lý do nối.
6. **CTA chung** ("Nhận tư vấn"), form không biết người dùng đến từ dịch vụ nào (chỉ có `page` trong payload).
7. **Số liệu không nguồn trong bài dài** (mục 4).

## 3. Từng dịch vụ

Ưu tiên: P1 = làm ở Sprint 2 (thí điểm), P2 = Sprint 3, P3 = Sprint 4.

| Dịch vụ | Ý định khách | Nội dung đáng giữ | Thiếu bối cảnh | Mục tiêu chuyển đổi | Bố cục đề xuất | Tương tác chính | Dịch vụ hỗ trợ | Dự án liên quan | Ưu tiên |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SEO tổng thể | Muốn khách tự tìm đến từ Google | `insight`, bản đồ từ khóa, bài dài 7 FAQ | Nối SEO với trang dịch vụ, CRO, khách tiềm năng | Đăng ký đánh giá hệ thống SEO | Search ecosystem: biên tập, mạng lưới nút | Bản đồ cụm chủ đề tương tác | Website, CRO, Nội dung | King Decor (SEO website) | P1 |
| Google Ads & Shopping | Có khách ngay, không phí tiền vào lượt bấm rác | Cấu trúc theo ý định, lợi nhuận gộp, bài dài | Kinh tế đơn vị, phụ thuộc trang đích và đo lường | Rà soát hiệu quả quảng cáo | Control room tối | Mô phỏng ngân sách và kinh tế đơn vị | CRO, GA4 | Chưa có dự án Google Ads công bố | P1 |
| Nhận diện thương hiệu | Hình ảnh chuyên nghiệp, nhất quán | `deliverables`, quy trình 6 bước | Nhận diện xuất hiện ở điểm chạm nào | Trao đổi về nhận diện | Triển lãm: hình là chính | Bộ sưu tập nhận diện có tab | Website, Nội dung, Quảng cáo | Chưa có dự án nhận diện công bố; dùng hệ nhận diện của chính SOHO làm ví dụ | P1 |
| Meta & TikTok Ads | Tạo nhu cầu, ra tin nhắn, đơn | 3 lớp nội dung, bài dài | Vòng thử nội dung, chất lượng lead | Rà soát tài khoản Meta/TikTok | Creative testing studio | Ma trận thử nội dung | Nội dung, Website, GA4 | Le Viva, Kronos, Helen Bridal | P2 |
| Thiết kế website | Website mới hoặc làm lại | Quy trình, `deliverables` | Vai trò website trên hành trình | Tư vấn dự án website | Digital experience studio | Trình diễn đa thiết bị | SEO, CRO, Nhận diện | King Decor (tái cấu trúc website) | P2 |
| Thiết kế Mobile App | Có nên làm app không | Quy trình | Khi nào chưa cần app | Thảo luận ý tưởng ứng dụng | Product lab | Luồng màn hình tương tác | Website, GA4 | Chưa có | P2 |
| SEO cho AI tìm kiếm | Được AI nhắc tên | Bài dài 6 FAQ | Giới hạn: không đảm bảo trích dẫn | Đánh giá mức sẵn sàng cho AI | Entity intelligence | Đồ thị thực thể và nguồn | SEO tổng thể, Nội dung & PR | Chưa có | P3 |
| SEO địa phương & Maps | Khách gần tìm thấy, gọi, ghé | Bài dài 6 FAQ | Hành trình tìm gần đây tới gọi điện | Rà soát hồ sơ Google | Local discovery | Hành trình tìm kiếm địa phương | Google Ads, Website | Chưa có | P3 |
| Tối ưu chuyển đổi (CRO) | Có lượt xem mà ít liên hệ | Bài dài 5 FAQ | Phụ thuộc lưu lượng và đo lường | Rà soát trang đích | Conversion lab | So sánh trước/sau | Google Ads, GA4, Website | Chưa có số đo | P3 |
| Nội dung & PR | Nội dung có chiến lược | Bài dài 5 FAQ | Câu hỏi khách → định dạng → kênh | Trao đổi kế hoạch nội dung | Editorial story system | Hành trình nội dung | SEO, Meta Ads | King Decor (viết bài theo câu hỏi) | P3 |
| Đo lường & báo cáo GA4 | Biết kênh nào ra đơn | Bài dài 5 FAQ | Giới hạn quy kết, số nền tảng khác số bán hàng | Kiểm tra hệ thống đo lường | Data clarity center | Luồng dữ liệu kênh tới doanh thu | Google Ads, Meta Ads, CRO | Chưa có | P3 |
| Tư vấn lộ trình 90 ngày | Biết nên làm gì trước | Bài dài 5 FAQ | Khung quyết định mẫu | Thảo luận lộ trình tăng trưởng | Strategic planning room | Lộ trình 30/60/90 tương tác | Mọi dịch vụ | Chưa có | P3 |

## 4. Số liệu và lời khẳng định chưa có nguồn (cần SOHO duyệt)

Quét `components/articles/*.js` tìm con số phần trăm, "gấp N lần", "Top N", số năm kinh nghiệm. Chưa sửa, giữ nguyên chờ duyệt.

| Bài | Số chỗ | Ví dụ |
| --- | --- | --- |
| metaTiktokAds.js | 20 | "hơn 30% dữ liệu chuyển đổi bị trình duyệt chặn", "khôi phục 100% dữ liệu" |
| croLandingPage.js | 17 | "98% người dùng rời đi", "tỉ lệ chuyển đổi trung bình tại Việt Nam 0,8% đến 1,5%" |
| seoTongThe.js | 16 | "hơn 6 năm tư vấn cho hơn 150 doanh nghiệp", "traffic tăng gấp 3 lần" |
| localSeoGoogleMaps.js | 13 | "76% người dùng tìm kiếm địa phương…", "28% lượt tìm kiếm dẫn tới mua" |
| googleAdsShopping.js | 12 | "CPC tăng 15% đến 25% mỗi năm", "85% người dùng thoát trong 3 giây" |
| ga4LookerDashboard.js | 11 | "theo Gartner, SME lãng phí 25% đến 40% ngân sách" (không link) |
| seoAiOverview.js | 9 | "CTR giảm 30% đến 55%", "AI Overview chiếm 70% màn hình" |
| growthStrategySprint.js | 7 | "ra quyết định nhanh gấp 3 lần, ROI cao hơn 45%" |
| contentMarketingPr.js | 4 | "65% người ra quyết định cấp cao…" |

Đề xuất: mỗi con số hoặc có link nguồn gốc, hoặc đổi thành mô tả định tính, hoặc bỏ. Riêng "hơn 6 năm, hơn 150 doanh nghiệp" là lời SOHO tự nói về mình: cần SOHO xác nhận.

## 5. Phạm vi đã làm trong đợt này

Sprint 1 và Sprint 2 theo brief: hub `/dich-vu/`, khung điểm chạm và CTA theo ngữ cảnh dùng chung, 3 trang thí điểm (SEO tổng thể, Google Ads & Shopping, Nhận diện thương hiệu). 9 trang còn lại giữ bố cục cũ, có thêm khối điểm chạm và CTA theo ngữ cảnh, chờ Sprint 3 và 4.

## 6. Kết quả kiểm tra (21/10/2026, trên máy, chưa deploy)

| Hạng mục | Kết quả |
| --- | --- |
| `npm run build` | Đạt, 48 trang tĩnh |
| `npm run lint`, `prettier --check` | Đạt |
| Tràn ngang, ảnh lỗi, lỗi console ở 320, 375, 390, 430, 768, 1024, 1440, 1920 | 64/64 đạt: hub, 3 trang thí điểm, Meta Ads, Thiết kế website, trang chủ, blog |
| axe (WCAG 2.0 đến 2.2 A, AA) ở 1440 và 390 | 0 lỗi: hub, 3 trang thí điểm, GA4. Đã sửa 2 lỗi trong lúc làm: chữ trang trí "Aa" ở hub, `<dl>` của mô phỏng |
| Link nội bộ trong `out/` | Không có link hỏng |
| SEO 12 trang dịch vụ so với bản live | Title, meta description, canonical, H1, breadcrumb, JSON-LD giống hệt |
| SEO hub `/dich-vu/` | URL, title, canonical giữ nguyên; H1 và meta description đổi theo thông điệp mới (150 ký tự) |
| Bàn phím | Thẻ nhận diện theo mẫu ARIA tabs (mũi tên, Home, End); bản đồ chủ đề và chẩn đoán dùng nút có `aria-pressed`; kết quả có `aria-live` |

Ảnh trước và sau (bản live và bản máy, 1440px) lưu ngoài repo, trong thư mục scratchpad của phiên làm việc.

## 7. Việc còn mở

- Mục 4: các con số chưa có nguồn trong bài viết vẫn giữ nguyên, chờ SOHO duyệt.
- Trang Google Ads chưa có dự án Google Ads công bố, nên chỉ dùng huy hiệu Google Partner làm bằng chứng. Trang Nhận diện chưa có dự án nhận diện công bố, nên dùng chính bộ nhận diện SOHO và ghi rõ là ví dụ.
- Trang Nhận diện chưa có bài viết chi tiết (không có trong `serviceArticlesData`).
- Form liên hệ gửi dịch vụ đã chọn sẵn cùng đường dẫn trang (`page`) tới endpoint nếu đã cấu hình. Nếu chưa có endpoint, form mở email soạn sẵn có ghi dịch vụ. Cần kiểm tra endpoint trên bản live trước khi deploy.
- Sprint 3 và 4: kiến trúc riêng cho 9 trang còn lại (xem SERVICE_DESIGN_SYSTEM.md mục 4).
