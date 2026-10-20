# Hệ thiết kế trang dịch vụ

Hub `/dich-vu/` và trang chi tiết dịch vụ dùng chung token trong `app/styles/tokens.css`: màu, hai phông Bricolage Grotesque và Plus Jakarta Sans, bo góc, khoảng cách. Hai trang dịch vụ không được giống nhau ở bố cục. Tài liệu này ghi phần dùng chung và phần riêng của từng trang.

## 1. Phần dùng chung

| Thành phần | File | Dùng ở |
| --- | --- | --- |
| `ServiceTouchpointContext` | `components/services/ServiceContext.js` | Mọi trang dịch vụ. Mỗi trang tự đặt ở chỗ hợp với câu chuyện của nó. Có biến thể `tone="dark"`. |
| `ContextualServiceCTA` | `components/services/ServiceContext.js` | Cuối mọi trang dịch vụ. Nhãn và lời mời theo dịch vụ, form chọn sẵn dịch vụ. |
| `Crumbs` | `components/services/pilots/PilotParts.js` | Breadcrumb trong hero riêng của trang có kiến trúc riêng. |
| `MethodSection` | `components/services/pilots/PilotParts.js` | Bọc bài viết chi tiết sẵn có (`serviceArticlesData`) thành phần "Phương pháp chi tiết". Giữ nội dung cho Google đọc. |
| `SohoMark` | `components/services/pilots/SohoMark.js` | Logo Open Corner dạng SVG nội tuyến, đổi màu được. Cùng nét với file đã duyệt trong `public/assets/brand/approved/`. |

## 2. Luật chung

- Giữ nguyên URL, H1 (`service.title`), title, meta description, canonical, JSON-LD `Service` và breadcrumb của từng trang. Định tuyến nằm ở `app/dich-vu/[slug]/page.js`.
- Mỗi trang tối đa hai khối nền tối, tính cả khối liên hệ cuối trang (luật của `Section`).
- Không ghi con số chưa có nguồn. Số trong mô phỏng là số ví dụ và ghi rõ như vậy. Ví dụ minh họa luôn có nhãn.
- Không hứa kiểm tra miễn phí, không cam kết kết quả hay doanh thu.
- Chữ cam nhỏ trên nền sáng dùng Deep Orange `#C2410C`. Cam `#F26522` chỉ làm nền, chữ trên đó là Midnight.
- Vùng bấm tối thiểu 44px. Thành phần tương tác dùng nút thật, có `aria-pressed` hoặc mẫu ARIA tabs, và có `aria-live` cho phần kết quả.

## 3. Ba trang có kiến trúc riêng (đợt 1)

### SEO tổng thể: "Hệ sinh thái tìm kiếm"

Hero sáng, có thang truy vấn: bốn lần gõ của một người tìm, từ tìm hiểu tới tin tưởng → bản đồ cụm chủ đề `SeoKnowledgeMap` → ba lớp nền xếp như mặt cắt (uy tín, nội dung, kỹ thuật; lớp kỹ thuật tối nhất vì là nền móng) kèm mục tiêu hướng tới → điểm chạm → hồ sơ bàn giao và dự án King Decor Luxury → phương pháp → liên hệ.

`SeoKnowledgeMap`: một trang trụ cột, tám trang vệ tinh chia bốn làn ý định (tìm hiểu, so sánh, quyết định, tin tưởng). Chọn một trang để xem truy vấn, loại trang, điều trang phải trả lời và chặng hành trình. Các trang được liên kết tới sáng lên trên bản đồ, và bấm vào từng liên kết sẽ chọn trang đó. Dữ liệu là ví dụ một doanh nghiệp thi công quán cà phê, có ghi chú. Sự kiện: `service_map_select`.

### Google Ads & Shopping: "Phòng điều khiển hiệu quả"

Một khối tối liền gồm hero và mô phỏng. Hero có bảng kiểm bốn câu trước khi tăng ngân sách → `AdsProfitSimulator` → cây tài khoản theo ý định và biên lợi nhuận, kèm rào chắn chung → ba thứ quảng cáo phụ thuộc vào (trang đích, đo lường, biên lợi nhuận), mỗi thứ dẫn tới dịch vụ tương ứng → điểm chạm → bàn giao và huy hiệu Google Partner kèm ba tiêu chí Google xác nhận → phương pháp → liên hệ.

`AdsProfitSimulator` có sáu đầu vào: ngân sách, CPC, tỉ lệ chuyển đổi, tỉ lệ chốt, doanh thu mỗi khách, % chi phí biến đổi. Đầu ra là phễu (lượt bấm, khách để lại thông tin, khách mua), sổ lãi lỗ (doanh thu, chi phí biến đổi, chi phí quảng cáo, lợi nhuận sau quảng cáo) và bốn chỉ số đơn vị (chi phí mỗi khách để lại thông tin, chi phí có một khách mua, mức tối đa để hòa vốn, ROAS kèm mức hòa vốn). Mỗi kết quả hiện công thức ngay bên dưới. Có nhãn "Mô phỏng giả định, không phải dự báo hay cam kết". Mô phỏng chưa tính mua lại, chi phí cố định và thuế.

### Nhận diện thương hiệu: "Triển lãm nhận diện"

Hero như tường trưng bày: logo đóng khung, có nhãn tác phẩm → `BrandIdentityGallery` → lộ trình sáu buổi, mỗi buổi ghi "Bạn duyệt" gì, kèm dấu hiệu nên làm lại nhận diện → điểm chạm → hộp bàn giao, mục tiêu hướng tới và hai nhận xét khách đã đăng công khai → liên hệ. Trang này chưa có bài viết chi tiết nên không có phần phương pháp.

`BrandIdentityGallery` có năm thẻ theo mẫu ARIA tabs (phím mũi tên, Home, End). Ví dụ là hệ nhận diện của chính SOHO, vì chưa có dự án nhận diện nào được công bố:

- Logo: bản chính, bản đảo, bản một màu, thử ở cỡ nhỏ.
- Màu: sáu màu kèm vai trò và tỉ lệ tương phản từ `tokens.css`, cùng tỉ lệ 70/20/10.
- Chữ: mẫu hai phông với ẾỨỠẶẰ.
- Ứng dụng: danh thiếp, bài đăng, đầu trang web dựng bằng CSS.
- Quy tắc dùng: một mẫu nên và ba mẫu không nên.

Cả năm thẻ đều có trong HTML để Google đọc được. Sự kiện: `service_gallery_tab`.

## 4. Chín trang còn lại (đợt sau)

Tạm thời giữ khuôn cũ: hero, mục tiêu, quy trình, dấu hiệu và mục tiêu, bàn giao, bài viết. Khối "Dịch vụ cùng nhóm" được thay bằng `ServiceTouchpointContext`, và khối liên hệ chung được thay bằng `ContextualServiceCTA`. Kiến trúc riêng dự kiến:

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

Để thêm một trang có kiến trúc riêng: tạo component trong `components/services/pilots/`, nhận `{service, article, names}`, rồi thêm vào `PILOTS` trong `app/dich-vu/[slug]/page.js`.
