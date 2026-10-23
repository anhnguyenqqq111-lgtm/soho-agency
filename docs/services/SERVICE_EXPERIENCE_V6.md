# Trang dịch vụ, Redesign V6.0: audit, ma trận quyết định, kiểm thử (23/10/2026)

Bản trước audit là bản live ở commit `db7af0a`. Prototype tham khảo là `soho_service_experience_prototype.html` (file anh/chị gửi). Nội dung "có hợp với bạn" và phạm vi của SEO, Google Ads, Nhận diện, Website lấy từ prototype đó.

## 1. Sơ đồ được giữ nguyên

Ba sơ đồ live trên mỗi trang (danh mục chi tiết ở `SERVICE_VISUAL_AUDIT.md`):

- sơ đồ riêng ở hero (`ServiceDiagram`);
- dải "SOHO làm theo N bước" (`Track`);
- "Dấu hiệu → Mục tiêu" (`BeforeAfter`).

Cả ba là SVG hoặc HTML tĩnh có hiệu ứng vẽ khi cuộn tới; không có nút điều khiển hay dữ liệu động. Sau V6, markup của 36/36 sơ đồ (3 sơ đồ × 12 trang) vẫn giống hệt bản live.

Các thành phần tương tác đã lên live từ V4 cũng được giữ:

- bản đồ chủ đề SEO;
- mô phỏng lợi nhuận Google Ads;
- phòng trưng bày nhận diện;
- chẩn đoán và bản đồ hành trình ở hub.

## 2. Ma trận quyết định

Hành động: **Giữ**, **Cải tiến**, **Gộp**, **Bỏ**, **Thêm**.

### Phần chung của 12 trang

| Phần đang có | Khách cần | Vấn đề | Hành động | Ưu tiên | File |
| --- | --- | --- | --- | --- | --- |
| Hero + sơ đồ | Hiểu dịch vụ giải quyết gì | 9 trang vẫn dùng khuôn cũ: sơ đồ nhỏ ở giữa, nửa phải trống | Cải tiến: cả 12 trang dùng `PilotOverview` với 3 kiểu hero (phân tích, hiệu quả, triển lãm), lời hứa và CTA gộp vào hero | Cao | `pilots/PilotOverview.js`, `data/serviceExperience.js` |
| "Mục tiêu hướng tới" (khối riêng) | Biết kết quả hướng tới | Lặp danh sách mục tiêu đã có trong sơ đồ dấu hiệu → mục tiêu | Gộp vào hero | Cao | như trên |
| Dải các bước + biểu tượng lịch 3D | Biết quy trình | Biểu tượng 3D đè chữ trên mobile ở 9 trang chưa sửa | Giữ dải các bước, bỏ biểu tượng 3D | Cao | như trên |
| Không có | Dịch vụ này có hợp với tôi không | Không trang nào nói khi nào chưa nên làm và cần chuẩn bị gì | Thêm `ServiceFit` | Cao | `modules/Modules.js` |
| Danh sách bàn giao, "hai bên làm gì", "chưa nên làm khi" (rải ở 3 chỗ) | Biết phạm vi, chi phí, điều kiện | Rời rạc, không nói phần nào thuộc dịch vụ khác, yếu tố nào ảnh hưởng chi phí và thời gian | Gộp vào `ScopeSpec`: trong phạm vi + bàn giao, không thuộc dịch vụ này, phụ thuộc, chi phí, thời gian, đánh giá bằng | Cao | `modules/Modules.js` |
| Khối điểm chạm trên hành trình | Biết dịch vụ nối với gì | Lặp "chưa nên làm khi" với phần mới; nhiều ô chặng | Gộp vào `NextSteps` (vai trò chính và hỗ trợ, đường đi, bước tiếp theo) | Vừa | `modules/Modules.js` |
| Không có | Điều gì xảy ra sau khi gửi form | Chưa nói | Thêm 3 bước trong `NextSteps`, không hứa thời gian phản hồi hay tư vấn miễn phí | Cao | như trên |
| Dự án | Tin được không | Có chỗ dùng kết quả quảng cáo cho trang SEO | Cải tiến `CaseEvidence`: chỉ ghi kết quả khi đúng kênh, nếu không thì ghi rõ phạm vi | Cao | `modules/Modules.js` |
| Bài viết chi tiết | Đọc sâu | Dài, nhưng có giá trị SEO | Giữ, thu gọn trong `<details>` (vẫn có trong HTML) | Thấp | `pilots/PilotParts.js` |
| CTA và form | Liên hệ | Đã chọn sẵn dịch vụ; chưa mang theo vấn đề từ hub | Cải tiến (xem mục 4) | Cao | `ContactForm.js` |

### Phần riêng từng trang

| Trang | Đã có | Vấn đề | Hành động |
| --- | --- | --- | --- |
| SEO tổng thể | Vấn đề, hàng ý định, bản đồ, chẩn đoán → thay đổi, dự án, thang đo, điểm chạm | Phần vấn đề trùng sơ đồ dấu hiệu → mục tiêu; bản đồ và hàng ý định tách hai section | Bỏ phần vấn đề (thay bằng "có hợp với bạn?"). Gộp hàng ý định và bản đồ thành "Bảng ý định tìm kiếm" (câu hỏi → ý định → loại trang → bước tiếp theo). Giữ chẩn đoán → thay đổi và thang đo |
| Google Ads | Vấn đề, so sánh theo tầng, mô phỏng, cây tài khoản, bằng chứng, thang đo | Không có công cụ quyết định có nên tăng ngân sách hay chưa | Thêm bảng kiểm 6 điều kiện (tương tác) trong "có hợp với bạn?". Gộp Google Partner vào cạnh phạm vi. Bỏ phần vấn đề |
| Nhận diện | Vấn đề, chỗ lệch ở 4 điểm chạm, phòng trưng bày, nhận xét, mốc duyệt, thang đo | Mốc duyệt và trách nhiệm hai bên tách khỏi phạm vi | Câu tuyên bố chuyển lên tiêu đề phần "vì sao". Mốc duyệt đặt cạnh phạm vi. Thang đo chuyển thành dòng "đánh giá bằng" |
| Thiết kế website | Chỉ có khuôn chung | Không có sản phẩm thật nào để xem | Thêm phần website của chính SOHO: ảnh chụp thật trên máy tính và điện thoại, 4 quyết định thiết kế, điểm Lighthouse đo thật. Dự án King Decor có ghi đúng phạm vi |
| SEO cho AI | Khuôn chung | Không giải thích tín hiệu nào AI cần | Thêm bảng 4 nguồn tín hiệu (đúng 4 nguồn trên sơ đồ), ghi rõ không ai đảm bảo được việc được trích dẫn |
| Local SEO | Khuôn chung | Không nói yếu tố nào làm được | Thêm hành trình 4 bước, dẫn trang trợ giúp của Google về 3 yếu tố xếp hạng |
| Meta & TikTok | Khuôn chung | Không giải thích cách thử mẫu quảng cáo | Thêm công cụ ghép câu mở đầu × thông điệp × ưu đãi × định dạng (ví dụ khái niệm), dự án Le Viva có số liệu đã công bố, kèm Kronos, Helen Bridal |
| CRO | Khuôn chung | Không thấy trước và sau | Thêm so sánh trang đích khái niệm theo 5 điểm |
| Mobile App | Khuôn chung | Không giúp quyết định có nên làm app | Thêm 4 câu hỏi gợi ý app hay website trong "có hợp với bạn?" |
| Nội dung & PR | Khuôn chung | Không có bài thật | Thêm 4 bài SOHO đã đăng: câu hỏi → bài → kênh → cách đội sale dùng |
| GA4 & Looker | Khuôn chung | Không thấy đo lường cụ thể là gì | Thêm hợp đồng đo lường 4 sự kiện: định nghĩa, nguồn, cách kiểm tra, quyết định |
| Tư vấn lộ trình | Khuôn chung | Không thấy cách xếp ưu tiên | Thêm ma trận ưu tiên (ví dụ giả định, có thể sắp xếp) |
| Hub | Chẩn đoán, hành trình, năng lực, giải pháp chuyên biệt, kết hợp, dự án | Chẩn đoán hiện kết quả của dự án khác kênh (ví dụ kết quả quảng cáo Facebook cho vấn đề SEO); không nói vì sao gợi ý; không mang vấn đề sang form | Thêm "Vì sao bắt đầu từ đây"; chỉ ghi dự án đúng kênh, kèm phạm vi và ghi chú; nút "Gửi bối cảnh này cho SOHO". Không dựng lại danh mục dịch vụ |

## 3. Module mới

| Module | File | Ghi chú |
| --- | --- | --- |
| `ServiceFit` | `components/services/modules/Modules.js` | Nên cân nhắc khi, chưa nên ưu tiên khi (kèm dịch vụ nên xem trước), cần chuẩn bị. Nhận `children` để chèn công cụ riêng |
| `ScopeSpec` | như trên | 6 hàng: trong phạm vi và bàn giao, không thuộc dịch vụ này, phụ thuộc, chi phí, thời gian, đánh giá bằng. Nền tối hoặc sáng theo luật 2 khối tối |
| `CaseEvidence` | như trên | Ảnh lớn, vấn đề, SOHO đã làm, kết quả (chỉ khi đúng kênh), nguồn |
| `NextSteps` | như trên | Vai trò trên hành trình, bước tiếp theo, 3 bước sau khi gửi yêu cầu |
| `ContextualServiceCTA` | `components/services/ServiceContext.js` | Giữ; form chọn sẵn dịch vụ |
| Phần riêng có tương tác | `components/services/signatures/Interactive.js` | `ReadinessChecklist`, `CreativeExplorer`, `CroBeforeAfter`, `AppSuitability`, `PriorityMatrix` |
| Phần riêng tĩnh | `components/services/signatures/Signatures.js` | `EntityEvidence`, `LocalJourney`, `MeasurementContract`, `EditorialPortfolio`, `WebsiteShowcase` |
| Bộ ghép | `components/services/ServiceExperience.js` | 9 trang; mỗi trang có thứ tự riêng; nền tự xen kẽ |

Dữ liệu: `components/data/serviceExperience.js`. Thứ tự trang và tông nền ghi trong `SERVICE_DESIGN_SYSTEM.md` mục 6.

## 4. Luồng liên hệ

- Hub, phần chẩn đoán: nút "Gửi bối cảnh này cho SOHO" dẫn tới `/lien-he/?van-de=<vấn đề>&dich-vu=<dịch vụ gợi ý>`.
- Form đọc hai tham số: chọn sẵn dịch vụ và hiện "Vấn đề bạn đã chọn" (có nút bỏ). Vấn đề được gửi kèm trong dữ liệu form và trong email soạn sẵn.
- Form trên trang dịch vụ chọn sẵn dịch vụ của trang.
- Kiểm tra lỗi: tên, email hoặc số điện thoại, dịch vụ, đồng ý điều khoản; báo lỗi tại từng ô.
- **Blocker:** bản live chưa cấu hình `NEXT_PUBLIC_FORM_ENDPOINT`. Khi chưa có endpoint, nút gửi mở ứng dụng email soạn sẵn và hiện "Ứng dụng email đã mở…", không báo "đã gửi". Chỉ khi máy chủ trả về thành công mới hiện "Đã gửi yêu cầu". Cần SOHO chọn nơi nhận lead (Formspree, Google Apps Script hoặc API nối CRM) và đặt biến này trên Vercel.
- Đã nới câu chữ: bỏ "SOHO trả lời trong giờ làm việc" vì chưa có cam kết thời gian phản hồi.

## 5. Kiểm thử (bản build trên máy, 23/10/2026)

| Hạng mục | Kết quả |
| --- | --- |
| `npm run build`, lint, Prettier | Đạt, 48 trang tĩnh |
| Hồi quy sơ đồ so với bản live | 36/36 giống hệt |
| SEO 12 trang so với bản live | Title, meta description, canonical, H1, breadcrumb, JSON-LD giống hệt |
| Link nội bộ | Không có link hỏng |
| Tràn ngang, ảnh lỗi, lỗi console ở 320, 375, 390, 430, 768, 1024, 1440, 1920 | 14 trang (hub, liên hệ, 12 dịch vụ). Lần đầu lỗi 3/112 ở trang CRO (khung trang đích có `aspect-ratio` kéo rộng 381px); đã sửa, chạy lại 8/8 đạt |
| axe (WCAG 2.0 đến 2.2 A, AA) ở 1440 và 390 | 0 lỗi trên 14 trang |
| Tương tác và luồng liên hệ (Chrome, 17 bài) | 17/17 đạt, 0 lỗi runtime (bảng kiểm Google Ads, mô phỏng, ghép mẫu Meta, so sánh CRO, câu hỏi app, sắp xếp ma trận, phím mũi tên ở phòng trưng bày, bản đồ SEO, chẩn đoán mang bối cảnh sang liên hệ, chọn sẵn dịch vụ và vấn đề, báo lỗi form, mở email thay vì báo đã gửi, email có dịch vụ và vấn đề, form trang dịch vụ chọn sẵn dịch vụ) |
| Lighthouse trang chủ bản live, điện thoại | Hiệu năng 98, Truy cập 100, Thực hành tốt 100, SEO 100; LCP 2,2 giây, CLS 0 |

Ảnh trước/sau ở 1440 và 390 cho SEO, Google Ads, Nhận diện, Website, Meta, CRO nằm trong scratchpad `v6/ba/`.

**Chiều cao trang 1440px, trước → sau:**

| Trang | Trước | Sau |
| --- | --- | --- |
| SEO | 11.676 | 11.451 |
| Google Ads | 10.897 | 11.029 |
| Nhận diện | 10.929 | 9.217 |
| Website | 5.705 | 8.829 |
| Meta | 6.118 | 9.047 |
| CRO | 6.006 | 7.099 |

Các trang trước đây dùng khuôn chung dài thêm vì có thêm phần quyết định, phạm vi và bước tiếp theo.

## 6. Việc còn mở

1. Endpoint nhận form (mục 4).
2. Nội dung phạm vi, "không thuộc dịch vụ này" và yếu tố chi phí, thời gian là bản em viết từ dữ liệu sẵn có và prototype. Cần SOHO xác nhận đúng cách làm thật trước khi coi là cam kết.
3. Chưa có dự án đã công bố cho: Google Ads, nhận diện, website (giao diện), app, CRO, GA4, SEO cho AI, Local, nội dung. Các trang này hoặc không có khối dự án, hoặc ghi rõ phạm vi.
4. Khoảng 110 con số chưa có nguồn trong các bài viết chi tiết (xem `SERVICE_UX_AUDIT.md` mục 4) vẫn giữ nguyên chờ SOHO duyệt. Brief không cho đổi số khi chưa kiểm nguồn.
5. Ảnh quảng cáo thật cho Meta và ảnh website hoặc app thật của khách: cần SOHO cấp, kèm quyền công bố.
