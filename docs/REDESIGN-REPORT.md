# Báo cáo redesign SOHO Agency

Nhánh `minimal-v4`. Bản đang chạy (đối chứng "trước") là `main` tại https://soho-agency.vercel.app/.
Mọi con số trong báo cáo đều đo trên bản build tĩnh (`npm run build`, thư mục `out/`), không ước lượng.

Báo cáo gồm ba phần, làm theo thứ tự yêu cầu:

1. Master Brief: audit và redesign tổng thể (mục A).
2. Mega Menu dịch vụ (mục B).
3. Màu và chữ (mục C).

---

## A. Master Brief: UI/UX redesign và tối ưu website

### A1. Audit bản đang chạy

| Khu vực | Hiện trạng trên `main` | Mức | Đã xử lý |
|---|---|---|---|
| Hero trang chủ | H1 "Marketing đo bằng doanh thu." không có tên SOHO, agency nào cũng dùng được. Khối ảnh `[CẦN ẢNH THẬT]` còn hiện trên trang | Cao | H1 có tên và nghề, hero 2 cột với biểu đồ so sánh đo lượt truy cập và đo doanh thu, chip Google Partner dẫn tới hồ sơ thật |
| Thứ tự trang chủ | Sau hero là khối giới thiệu thứ hai, ô ảnh trống, rồi mới tới logo khách và 9 dịch vụ dàn đều. Khối dự án chỉ dẫn về `/ket-qua`, không có trang chi tiết | Cao | Sắp lại theo hành trình: hero, khách hàng, 6 dịch vụ chính, khác biệt, dự án, quy trình, nhận xét, bài viết, FAQ, liên hệ |
| Dịch vụ | Thiếu 3 dịch vụ SOHO đang bán trên sohoagency.vn: thiết kế website, nhận diện thương hiệu, mobile app | Cao | Thêm 3 trang dịch vụ, nội dung lấy từ sohoagency.vn, có sơ đồ riêng |
| Dự án | Không có trang chi tiết; URL `/du-an/...` của site cũ không tồn tại | Cao | Trang `/du-an/<slug>` cho 4 dự án, mỗi trang có vấn đề, giải pháp, kết quả; chỉ ghi số khi dự án đã công bố |
| Nút kêu gọi | Ba nhãn khác nhau cho cùng một việc: "Liên hệ ngay", "Đặt lịch trao đổi", "Gửi yêu cầu" | Trung bình | Một nhãn chính "Nhận tư vấn"; menu xổ có nút bấm, Esc, bàn phím. Phần B làm lại toàn bộ |
| Form liên hệ | Báo "đã gửi" dù không gửi đi đâu | Cao | Chỉ báo thành công khi máy chủ trả mã 2xx. Chưa cấu hình endpoint thì mở ứng dụng email với nội dung điền sẵn. Kiểm tra từng ô, bẫy bot, giữ dữ liệu khi lỗi |
| SEO kỹ thuật | Không có canonical, ảnh chia sẻ, robots.txt, sitemap, schema doanh nghiệp. 941 link nội bộ thiếu dấu `/` cuối nên bị chuyển hướng | Cao | Đủ cả 5 mục. Link nội bộ có `/` cuối. `vercel.json` chuyển 13 URL cũ của sohoagency.vn |
| Hiệu năng | Ở nhánh trước đợt này: 27 file font (~500 KB), logo SVG 78 KB, LCP mobile 5,8 giây | Cao | Font còn tối đa 10 file, logo WebP 16 KB, LCP mobile 3,7 giây |
| Truy cập | Lighthouse báo thiếu tương phản (96 điểm). Không có link bỏ qua tới nội dung. Trang 404 không có vùng `main` | Trung bình | 100 điểm. Có link bỏ qua. Trang 404 riêng |
| Responsive | Tràn ngang ở 768px do tooltip huy hiệu Google Partner chiếm chỗ dù đang ẩn | Trung bình | Không còn tràn ở 7 khổ màn hình, 41 trang |

### A2. Quyết định thiết kế theo từng tham chiếu

| Tham chiếu | Lấy gì | Không lấy gì |
|---|---|---|
| A. Positivus | Hero 2 cột chữ và hình; lưới dịch vụ có một thẻ tối nổi bật; quy trình dạng accordion mở nhiều mục | Màu xanh lá, viền đen dày |
| B. AgencyAI | Header dính có nút chính rõ ràng; form tách ô, báo lỗi ngay dưới ô | Nền tối toàn trang |
| C. Creative Agency | Dự án dàn kiểu tạp chí: một dự án lớn, ba thẻ nhỏ, mỗi thẻ có vấn đề và kết quả | Ảnh tràn viền không có thông tin |
| D. Desgy | Nhịp section trắng xen khối nền nhạt bo góc; FAQ một cột dễ đọc | Hình minh họa dày đặc |
| E. Bigspring | Cấu trúc nhiều trang: dịch vụ, giải pháp, dự án, blog; trang chi tiết có breadcrumb và mục liên quan | Thanh điều hướng phụ nhiều tầng |

Luật chung: không bịa nhận xét, khách hàng hay số liệu; giữ logo SOHO gốc; không dùng nền `#FFF4E9`; một bộ icon duy nhất (Lucide).

### A3. Thay đổi chính và file

74 file, +1.401 / −448 dòng (commit `5bc6eaf` và `26f74bc`).

| Nhóm | File mới | File sửa nhiều nhất |
|---|---|---|
| Trang chủ | `components/home/ServicesGrid`, `Differentiators`, `ProjectShowcase`, `ProcessAccordion` | `app/page.js`, `components/hero/HomeHero.js`, `RevenueToggle.js` |
| Dự án | `app/du-an/[slug]/page.js` | `components/data/cases.js`, `app/ket-qua/page.js` |
| Dịch vụ | | `components/servicePagesData.js`, `components/diagrams/ServiceDiagrams.js`, `app/dich-vu/page.js` |
| Form | | `components/ContactForm.js` |
| SEO | `app/robots.js`, `app/sitemap.js`, `app/not-found.js`, `vercel.json`, `public/og/soho-og.png` | `app/layout.js`, `components/paths.js` |
| Thương hiệu | `public/brand/soho-logo.webp`, `soho-logo.png`, `soho-logo-white.webp` | `components/Footer.js` |

### A4. Trước và sau

| | Trước (`main`) | Sau đợt Master Brief |
|---|---|---|
| Desktop 1440px | ![](redesign/truoc-desktop.jpg) | ![](redesign/p0-sau-desktop.jpg) |
| Mobile 390px | ![](redesign/truoc-mobile.jpg) | ![](redesign/p0-sau-mobile.jpg) |

### A5. Kiểm tra responsive và truy cập

- **Tràn ngang:** 41 trang × 7 khổ (320, 375, 390, 768, 1024, 1440, 1920) = 287 lần đo, 0 trang tràn.
- **HTML tĩnh:** mỗi trang đúng một H1, không nhảy cấp tiêu đề, ảnh đủ `alt`, không trùng `id`, đủ canonical, title, description. 0 link hỏng trong 1.247 link nội bộ.
- **Console:** sạch trên 13 trang mẫu. Trang 404 chỉ có lỗi 404 mong đợi.
- **Bàn phím:**
  - Phím Tab đầu tiên tới link bỏ qua.
  - Menu mobile giữ focus bên trong; Esc đóng menu và trả focus về nút Menu; mở khóa cuộn khi đóng.
  - Accordion quy trình mở và đóng bằng Enter hoặc Space; mục đóng không nhận focus.
- **Form:** kiểm tra ở cả ba chế độ.
  - Gửi rỗng: hiện 4 lỗi và focus vào ô đầu.
  - Máy chủ trả 200: báo đã gửi.
  - Máy chủ trả 500: báo lỗi, giữ dữ liệu, nút đổi thành "Gửi lại".

### A6. Hiệu năng, truy cập, SEO (Lighthouse 12.6, mobile)

| Trang | Hiệu năng | LCP | Truy cập | SEO |
|---|---|---|---|---|
| Trang chủ `main` (đang chạy) | 93 | 2,6 s | 96 | 100 |
| Trang chủ nhánh, trước đợt này | 76 | 5,8 s | 96 | 100 |
| Trang chủ sau đợt Master Brief | 88 | 3,7 s | 100 | 100 |
| Trang dịch vụ sau | 89 | 3,4 s | 100 | 100 |
| Trang liên hệ sau | 95 | 2,8 s | 100 | 100 |
| Trang chủ sau, desktop | 100 | 0,8 s | 100 | 100 |

Trang chủ trên `main` có LCP thấp hơn vì phần tử lớn nhất ở màn hình đầu là biểu đồ SVG nhỏ, còn bản mới là tiêu đề dùng phông chữ tải từ mạng. LCP mobile vẫn trên ngưỡng 2,5 giây, xem mục "Còn tồn đọng".

### A7. Build và deploy

```bash
npm run build                 # xuất 41 trang HTML vào out/
vercel --prod                 # hoặc merge vào main, Vercel tự deploy
```

Biến môi trường trên Vercel:

- `NEXT_PUBLIC_SITE_URL`: tên miền chính thức. Mặc định là `https://soho-agency.vercel.app`.
- `NEXT_PUBLIC_FORM_ENDPOINT`: địa chỉ nhận form. Xem README mục "Form liên hệ".

Nhánh `minimal-v4` chưa merge và chưa deploy.

---

## Còn tồn đọng (cập nhật sau mỗi phần)

| Việc | Ai cần làm |
|---|---|
| LCP mobile trang chủ 3,7 giây, trên ngưỡng 2,5 giây | Dev: xem lại ảnh hero và font sau khi đổi phông ở phần C |
| Form chưa có endpoint thật, đang mở ứng dụng email | SOHO chọn Formspree, Google Apps Script hoặc CRM |
| Chính sách bảo mật và điều khoản trên sohoagency.vn chép từ PalAmerican | SOHO cung cấp bản riêng |
| Bài blog cũ trên sohoagency.vn chỉ chuyển về `/blog/`, chưa về đúng bài | Cần danh sách URL cũ |
| Logo Thegioidotap không tìm được; logo Studio 1 Nhà đọc thành "12." | SOHO gửi file logo |
| Quy trình 4 bước cần SOHO xác nhận | SOHO |
| Ảnh bìa blog còn logo cũ | Thiết kế lại theo quy tắc ảnh bìa |
| Chưa cài GA4 hay Google Tag Manager | SOHO cấp mã đo lường |
