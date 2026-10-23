# Hệ thiết kế trang dịch vụ

Hub `/dich-vu/` và trang chi tiết dịch vụ dùng chung token trong `app/styles/tokens.css`: màu, hai phông Bricolage Grotesque và Plus Jakarta Sans, bo góc, khoảng cách. Mọi trang mở đầu bằng cùng một phần sơ đồ (giữ đúng bản đang live), phần bên dưới làm rõ các sơ đồ đó và khác nhau theo từng dịch vụ. Tài liệu này ghi phần dùng chung và phần riêng của từng trang.

## 1. Phần dùng chung

| Thành phần | File | Dùng ở |
| --- | --- | --- |
| `ServiceTouchpointContext` | `components/services/ServiceContext.js` | Mọi trang dịch vụ. Mỗi trang tự đặt ở chỗ hợp với câu chuyện của nó. Có biến thể `tone="dark"`. |
| `ContextualServiceCTA` | `components/services/ServiceContext.js` | Cuối mọi trang dịch vụ. Nhãn và lời mời theo dịch vụ, form chọn sẵn dịch vụ. |
| `ServiceOverview` | `components/services/ServiceOverview.js` | Phần đầu mọi trang, giữ như bản live: hero có sơ đồ riêng của dịch vụ (`ServiceDiagram`), mục tiêu hướng tới, dải "SOHO làm theo N bước" (`Track`), sơ đồ "Dấu hiệu → Mục tiêu" (`BeforeAfter`). |
| `MethodSection` | `components/services/pilots/PilotParts.js` | Bọc bài viết chi tiết sẵn có (`serviceArticlesData`) thành phần "Phương pháp chi tiết", thu gọn trong `<details>`. Nội dung vẫn có trong HTML cho Google đọc. |
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

## 3. Ba trang có kiến trúc riêng (đợt 1)

### SEO tổng thể: "Hệ sinh thái tìm kiếm"

Dưới phần sơ đồ live: bản đồ cụm chủ đề `SeoKnowledgeMap` (nhìn gần sơ đồ trang trụ cột ở hero) → ba lớp nền xếp như mặt cắt (uy tín, nội dung, kỹ thuật), mỗi lớp gắn với các bước 1 đến 4 và với một dấu hiệu trong sơ đồ "Dấu hiệu → Mục tiêu"; bước 5 là thước đo → điểm chạm → hồ sơ bàn giao và dự án King Decor Luxury → phương pháp → liên hệ.

`SeoKnowledgeMap`: một trang trụ cột, tám trang vệ tinh chia bốn làn ý định (tìm hiểu, so sánh, quyết định, tin tưởng). Chọn một trang để xem truy vấn, loại trang, điều trang phải trả lời và chặng hành trình. Các trang được liên kết tới sáng lên trên bản đồ, và bấm vào từng liên kết sẽ chọn trang đó. Dữ liệu là ví dụ một doanh nghiệp thi công quán cà phê, có ghi chú. Sự kiện: `service_map_select`.

### Google Ads & Shopping: "Phòng điều khiển hiệu quả"

Dưới phần sơ đồ live: bốn câu kiểm tra trước khi tăng ngân sách và `AdsProfitSimulator` trong một thẻ tối (làm rõ bước 5, đo bằng chi phí mỗi đơn và lợi nhuận) → cây tài khoản theo ý định và biên lợi nhuận, kèm rào chắn chung (làm rõ bước 2) → ba thứ quảng cáo phụ thuộc vào (trang đích, đo lường, biên lợi nhuận), giải thích các dấu hiệu ở trên, mỗi thứ dẫn tới dịch vụ tương ứng → điểm chạm → bàn giao và huy hiệu Google Partner kèm ba tiêu chí Google xác nhận → phương pháp → liên hệ. Mô phỏng là thẻ tối trong section sáng, nên trang vẫn chỉ có hai khối tối toàn chiều ngang (dải các bước và CTA).

`AdsProfitSimulator` hiển thị ba đầu vào chính trước; ba giả định bán hàng và biên lợi nhuận nằm trong phần nâng cao. Ba kết quả quan trọng (lợi nhuận, CAC, CAC hòa vốn) luôn hiện; phễu và công thức đầy đủ mở khi người dùng cần kiểm tra. Có nhãn "Mô phỏng giả định, không phải dự báo hay cam kết". Mô phỏng chưa tính mua lại, chi phí cố định và thuế.

### Nhận diện thương hiệu: "Triển lãm nhận diện"

Dưới phần sơ đồ live: `BrandIdentityGallery` (làm rõ sơ đồ hệ nhận diện ở hero: bảng màu, logo, kiểu chữ dùng cho website, mạng xã hội, bao bì, cửa hàng) → mỗi bước trong sáu bước ở trên bạn duyệt gì → điểm chạm → hộp bàn giao và hai nhận xét khách đã đăng công khai → liên hệ. Trang này chưa có bài viết chi tiết nên không có phần phương pháp.

`BrandIdentityGallery` có năm thẻ theo mẫu ARIA tabs (phím mũi tên, Home, End). Ví dụ là hệ nhận diện của chính SOHO, vì chưa có dự án nhận diện nào được công bố:

- Logo: bản chính, bản đảo, bản một màu, thử ở cỡ nhỏ.
- Màu: sáu màu kèm vai trò và tỉ lệ tương phản từ `tokens.css`, cùng tỉ lệ 70/20/10.
- Chữ: mẫu hai phông với ẾỨỠẶẰ.
- Ứng dụng: danh thiếp, bài đăng, đầu trang web dựng bằng CSS.
- Quy tắc dùng: một mẫu nên và ba mẫu không nên.

Cả năm thẻ đều có trong HTML để Google đọc được. Sự kiện: `service_gallery_tab`.

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
