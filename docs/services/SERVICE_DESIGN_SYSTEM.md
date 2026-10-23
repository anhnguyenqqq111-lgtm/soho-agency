# Hệ thiết kế trang dịch vụ

Hub `/dich-vu/` và trang chi tiết dịch vụ dùng chung token trong `app/styles/tokens.css`: màu, hai phông Bricolage Grotesque và Plus Jakarta Sans, bo góc, khoảng cách. Mọi trang mở đầu bằng cùng một phần sơ đồ (giữ đúng bản đang live), phần bên dưới làm rõ các sơ đồ đó và khác nhau theo từng dịch vụ. Tài liệu này ghi phần dùng chung và phần riêng của từng trang.

## 1. Phần dùng chung

| Thành phần | File | Dùng ở |
| --- | --- | --- |
| `ServiceTouchpointContext` | `components/services/ServiceContext.js` | Mọi trang dịch vụ. Mỗi trang tự đặt ở chỗ hợp với câu chuyện của nó. Có biến thể `tone="dark"`. |
| `ContextualServiceCTA` | `components/services/ServiceContext.js` | Cuối mọi trang dịch vụ. Nhãn và lời mời theo dịch vụ, form chọn sẵn dịch vụ. |
| `ServiceOverview` | `components/services/ServiceOverview.js` | Phần đầu mọi trang, giữ như bản live: hero có sơ đồ riêng của dịch vụ (`ServiceDiagram`), mục tiêu hướng tới, dải "SOHO làm theo N bước" (`Track`), sơ đồ "Dấu hiệu → Mục tiêu" (`BeforeAfter`). |
| `MethodSection` | `components/services/pilots/PilotParts.js` | Bọc bài viết chi tiết sẵn có (`serviceArticlesData`) thành phần "Phương pháp chi tiết", thu gọn trong `<details>`. Nội dung vẫn có trong HTML cho Google đọc. |
| `ProblemStatement`, `Responsibility`, `MeasurementLadder` | `components/services/insight/Insight.js` | Khối nội dung cho lớp vấn đề, SOHO làm gì, đo lường. Không phải khuôn bắt buộc. |
| `ServiceSubnav` | `components/services/pilots/PilotParts.js` | Điều hướng neo dính dưới header. Danh sách mục do `app/dich-vu/[slug]/page.js` lập, trang có phần riêng thêm một mục. |
| `SohoMark` | `components/services/pilots/SohoMark.js` | Logo Open Corner dạng SVG nội tuyến, đổi màu được. Cùng nét với file đã duyệt trong `public/assets/brand/approved/`. |

## 2. Luật chung

- Giữ nguyên URL, H1 (`service.title`), title, meta description, canonical, JSON-LD `Service` và breadcrumb của từng trang. Định tuyến nằm ở `app/dich-vu/[slug]/page.js`.
- Mỗi trang tối đa hai khối nền tối, tính cả khối liên hệ cuối trang (luật của `Section`).
- Không ghi con số chưa có nguồn. Số trong mô phỏng là số ví dụ và ghi rõ như vậy. Ví dụ minh họa luôn có nhãn.
- Không hứa kiểm tra miễn phí, không cam kết kết quả hay doanh thu.
- Chữ cam nhỏ trên nền sáng dùng Deep Orange `#C2410C`. Cam `#F26522` chỉ làm nền, chữ trên đó là Midnight.
- Vùng bấm tối thiểu 44px. Thành phần tương tác dùng nút thật, có `aria-pressed` hoặc mẫu ARIA tabs, và có `aria-live` cho phần kết quả.
- Khung đọc chuẩn: phần sơ đồ live (`ServiceOverview`) → phần làm rõ sơ đồ (mô-đun đặc trưng nếu có) → bàn giao và bằng chứng → điểm chạm → nội dung chuyên sâu thu gọn → CTA. Mỗi phần làm rõ nhắc lại sơ đồ hoặc bước nó giải thích.
- Không dùng card cho mọi đoạn nội dung. Section nền màu ưu tiên bề mặt phẳng; đường kẻ và khoảng trắng tạo phân cấp trước khi dùng viền, bóng hay bo góc.
- Mỗi trang chỉ có một tương tác chính. Nội dung phụ dùng progressive disclosure để không cạnh tranh với hành động chính.

## 3. Ba trang thí điểm theo Redesign 3.1

Ba sơ đồ live ở đầu trang (xem `SERVICE_VISUAL_AUDIT.md`) là luận điểm mở đầu. Phần dưới đi theo 5 lớp: **vấn đề → vì sao → SOHO làm gì → đo thế nào → nối vào kinh doanh**, mỗi lớp nhắc lại nút, tầng hoặc điểm chạm trên sơ đồ mà nó giải thích. Lớp "vì sao" của mỗi trang có cách trình bày riêng.

Khối dùng chung nằm ở `components/services/insight/Insight.js`:

- `ProblemStatement`: đoạn dẫn nối với sơ đồ, kèm 2–3 biểu hiện cụ thể có ghi chú "ví dụ minh họa".
- `Responsibility`: SOHO chịu trách nhiệm gì, bạn cung cấp gì.
- `MeasurementLadder`: 4 bậc đo (hoạt động → trung gian → hành vi khách → kinh doanh) cùng các giới hạn của phép đo.

Lớp "nối vào kinh doanh" dùng `ServiceTouchpointContext`. Mỗi trang có một CTA theo ngữ cảnh. Nút ở mục "Mục tiêu hướng tới" chỉ dẫn xuống đúng CTA đó.

### SEO tổng thể: phân tích tìm kiếm

Sơ đồ mở đầu là cụm chủ đề, sáu nhóm bài cùng dẫn về trang dịch vụ.

- **Vấn đề:** có lượt truy cập mà không có khách; ba biểu hiện theo ví dụ một doanh nghiệp thi công quán cà phê.
- **Vì sao:** bảng "lượng tìm kiếm và ý định mua", mỗi dòng là một nút trên sơ đồ, mức tìm kiếm ghi định tính và có chú thích. Kèm `SeoKnowledgeMap` (cùng cụm, vẽ thành trang thật) và ghi chú về lỗi kỹ thuật (bước 1).
- **SOHO làm gì:** bốn cặp "kiểm tra → thay đổi", trách nhiệm hai bên, hồ sơ bàn giao và dự án King Decor Luxury. Ghi rõ kết quả công bố của dự án này là về quảng cáo, không phải SEO.
- **Đo:** 4 bậc từ trang đã dựng tới doanh thu từ khách đến qua Google; giới hạn của Search Console, câu trả lời AI và cách GA4 ghi công.

### Google Ads & Shopping: kinh tế quảng cáo

Sơ đồ mở đầu là phễu 4 tầng.

- **Vấn đề:** chi phí tăng mà lợi nhuận không tăng; mỗi biểu hiện chỉ rõ tầng nào đang rò.
- **Vì sao:** bảng "mỗi tầng có một con số che chỗ rò" gồm con số dễ nhìn, điều nó có thể che, con số nên xem, và dịch vụ tầng đó phụ thuộc vào. Kèm `AdsProfitSimulator` trong thẻ tối để tính thử với cùng bốn tầng.
- **SOHO làm gì:** cây tài khoản theo ý định và lợi nhuận (sửa tầng 1–2), nhập đơn chốt về tài khoản (tầng 3–4), trách nhiệm hai bên, bàn giao, Google Partner. Ghi rõ chưa có dự án Google Ads công bố số liệu.
- **Đo:** đọc báo cáo từ cuối phễu ngược lên; giới hạn về độ trễ mua hàng, cách mỗi hệ thống ghi công, Performance Max.

### Nhận diện thương hiệu: câu chuyện nhận diện

Sơ đồ mở đầu là hệ nhận diện dùng ở 4 điểm chạm.

- **Vấn đề:** logo đẹp mà khách không nhớ.
- **Vì sao:** gốc của sự lệch là định vị chưa rõ (bước 2–3), cộng với bốn điểm chạm đúng như trên sơ đồ, mỗi điểm ghi "hay lệch vì" và "quy định cần có".
- **SOHO làm gì:** `BrandIdentityGallery` (bộ nhận diện của chính SOHO, có ghi chú), trách nhiệm hai bên, các mốc bạn duyệt theo 6 bước, hộp bàn giao, hai nhận xét khách đã đăng công khai.
- **Đo:** ghi mốc trước khi đổi; lượt tìm tên thương hiệu, lượt truy cập trực tiếp; nêu rõ khó tách riêng đóng góp của nhận diện vào doanh thu.

Các phần đã bỏ vì trùng với sơ đồ live:

- hero riêng của từng trang;
- khối "3 giai đoạn" (trùng dải các bước);
- thanh "phù hợp khi" (trùng sơ đồ "Dấu hiệu → Mục tiêu");
- danh sách mục tiêu trong "Mục tiêu hướng tới" (trùng cột phải của sơ đồ);
- "ba lớp nền" SEO;
- bốn câu kiểm tra và khối "phụ thuộc" của Google Ads (đã gộp vào bảng tầng phễu);
- phòng "6 buổi" của Nhận diện (đã gộp vào mốc duyệt).

## 4. Chín trang còn lại

Phần sơ đồ live → bàn giao → điểm chạm → phương pháp thu gọn → liên hệ. Phần làm rõ riêng cho từng sơ đồ bổ sung dần:

| Dịch vụ | Kiến trúc | Thành phần đặc trưng |
| --- | --- | --- |
| Meta & TikTok Ads | Creative testing | `CreativeTestingWall` |
| Thiết kế website | Device showcase | `DeviceShowcase` |
| Mobile App | Flow demo | `AppFlowDemo` |
| SEO cho AI | Entity graph | `EntityGraph` |
| Local SEO | Search journey trên Maps | `LocalSearchJourney` |
| CRO | Comparison lab | `ComparisonLab` |
| Nội dung & PR | Editorial journey | `EditorialJourney` |
| GA4 & Looker | Revenue data flow | `RevenueDataFlow` |
| Tư vấn lộ trình | Roadmap | `StrategyRoadmap` |

Để thêm phần riêng cho một trang: tạo component trong `components/services/pilots/`, nhận `{service, article, names}` và chỉ chứa phần nằm dưới `ServiceOverview`, rồi thêm `{Body, nav}` vào `PILOTS` trong `app/dich-vu/[slug]/page.js`.
