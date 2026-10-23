# Audit các sơ đồ đang live trên trang dịch vụ (Redesign 3.1, Sprint 1)

Ghi ngày 23/10/2026, dựa trên code và bản live https://soho-agency.vercel.app (commit `ca61e03`). Ảnh chụp mốc của 12 trang ở 1440px và 390px nằm trong thư mục scratchpad của phiên làm việc, không đưa vào repo.

## 1. Kết luận chung

**Các sơ đồ không có tương tác.** Mỗi trang dịch vụ có ba sơ đồ, đều là SVG hoặc HTML tĩnh. Không có nút bấm, trạng thái, dữ liệu động hay nguồn dữ liệu ngoài; nhãn được viết thẳng trong code. Phần "hành vi" duy nhất là hiệu ứng xuất hiện khi cuộn tới: thêm class `is-in` qua `components/RevealObserver.js`.

| Sơ đồ | Component | Có ở | Hiệu ứng | Giảm chuyển động | Trình đọc màn hình |
| --- | --- | --- | --- | --- | --- |
| Sơ đồ riêng của dịch vụ (hero) | `ServiceDiagram` trong `components/diagrams/ServiceDiagrams.js`, hình cơ bản trong `svg.js`, CSS trong `app/styles/diagram.css` | 12 trang, mỗi trang một hình | Nét tự vẽ (`stroke-dashoffset`, 1.400ms, lệch nhau theo `--d`), chữ hiện dần | Có: hiện ngay, không vẽ | `role="img"`, `<title>` và `<desc>` riêng từng hình, `figcaption` hiện trên trang |
| Dải "SOHO làm theo N bước" | `Track` (`components/diagrams/Track.js`) | 12 trang, dữ liệu `service.process` | Đường ray tự vẽ, nút hiện lần lượt | Có | Danh sách `<ol>` có tiêu đề `h3` |
| "Dấu hiệu bạn đang gặp → Mục tiêu hướng tới" | `BeforeAfter` (`components/diagrams/BeforeAfter.js`) | 12 trang, dữ liệu `service.pains`, `service.outcomes` | Mục hiện lần lượt, mũi tên tự vẽ | Có | Hai danh sách `<ul>` có nhãn, mũi tên `aria-hidden` |

**Điều này có nghĩa là:**

- "Giữ tương tác và trạng thái của sơ đồ" thực chất là giữ nguyên hình, nhãn, chú thích, thứ tự hiệu ứng và vị trí ở phần trên trang.
- Không có thao tác bàn phím nào cần giữ.
- Sơ đồ đã có phần mô tả cho trình đọc màn hình. Không cần thêm bảng dữ liệu thay thế, vì sơ đồ minh họa khái niệm, không chứa số liệu.
- Không có sơ đồ nào hiển thị dữ liệu kinh doanh thật. Số duy nhất xuất hiện là bán kính "3 km" (Local SEO) và các mốc "Ngày 0 đến 90" (Tư vấn lộ trình), đều là ví dụ minh họa. Phần nội dung bên dưới không được nói như thể đó là số đo thật.

**Phần cần giữ trên mọi trang:**

- Thứ tự phần đầu trang: hero (H1, mô tả, sơ đồ) → mục tiêu → dải các bước (khối tối) → dấu hiệu → mục tiêu.
- `title`, `desc`, `caption` và nhãn của từng sơ đồ.
- Màu nhấn cam ở "điểm đến" của mỗi sơ đồ.
- Các bước trong `service.process`.

**Phần được phép chỉnh:** khoảng cách quanh sơ đồ, khung responsive, chú thích ngắn.

**Lỗi tìm thấy:** không có. Ở 390px không có tràn ngang, nhãn vẫn đọc được vì viewBox rộng 480.

**Các thành phần tương tác mới, chưa lên live:** bản đồ chủ đề SEO, mô phỏng lợi nhuận Google Ads, phòng trưng bày nhận diện, chẩn đoán và bản đồ hành trình ở hub. Đây không phải sơ đồ đang live, nên không thuộc diện "phải giữ". Ở Sprint 2, mỗi cái chỉ giữ lại nếu giải thích được sơ đồ live phía trên nó.

## 2. Từng dịch vụ

Mọi trang đều có `Track` và `BeforeAfter` như mục 1. Các bảng dưới đây ghi sơ đồ riêng ở hero, cùng nội dung nên giải thích bên dưới.

### SEO tổng thể (`/dich-vu/seo-tong-the/`)

| Trường | Nội dung |
| --- | --- |
| Sơ đồ | `SeoCluster`: "Sơ đồ cụm chủ đề SEO" |
| Thao tác | Không có, chỉ có hiệu ứng vẽ |
| Thông điệp chính | Một trang trụ cột ở giữa, sáu nhóm bài vệ tinh (Câu hỏi, So sánh, Chi phí, Câu chuyện khách, Quy trình) cùng dẫn về Trang dịch vụ (màu cam). Chú thích: "Mỗi cụm bài trả lời một câu hỏi của người mua, và cùng dẫn về trang dịch vụ." |
| Vấn đề của khách | Có bài, có lượt truy cập nhưng không ra khách, vì bài không trả lời đúng câu hỏi mua và không dẫn về trang dịch vụ |
| Cách hiểu | Lượt truy cập chỉ có giá trị khi nằm trên đường dẫn về trang chuyển đổi |
| Căn cứ | Sơ đồ khái niệm, không có số liệu |
| Nên giải thích bên dưới | Ý định tìm kiếm khác lượng truy cập; cấu trúc thông tin; vai trò bài vệ tinh; liên kết về trang dịch vụ; đo bằng khách đủ chuẩn |
| Phải giữ | 6 nút và nhãn, trang dịch vụ màu cam, vòng elip nét đứt, chú thích |

### SEO cho AI tìm kiếm (`/dich-vu/seo-ai-overview/`)

| Trường | Nội dung |
| --- | --- |
| Sơ đồ | `AiEntity`: "Sơ đồ thực thể thương hiệu cho AI Search" |
| Thông điệp chính | Tác giả, Schema, FAQ, Báo chí nhắc tên → Thương hiệu → câu trả lời AI có "Nguồn: bạn". Chú thích: "AI tổng hợp tín hiệu từ nhiều nguồn trước khi chọn website để trích dẫn." |
| Vấn đề của khách | Có thứ hạng nhưng ít lượt bấm vì AI trả lời ngay; Google chưa hiểu thương hiệu là ai |
| Nên giải thích bên dưới | Từng loại tín hiệu thực thể; giới hạn (không kiểm soát được việc AI trích dẫn); cách theo dõi lượt được trích dẫn |
| Phải giữ | 4 nguồn tín hiệu, nút "Thương hiệu", khung "Câu trả lời AI" |

### SEO địa phương & Google Maps (`/dich-vu/local-seo-google-maps/`)

| Trường | Nội dung |
| --- | --- |
| Sơ đồ | `LocalMap`: "Sơ đồ bán kính tìm kiếm địa phương" |
| Thông điệp chính | Cửa hàng ở giữa vòng bán kính, đối thủ xung quanh, bảng Google Maps "1. Bạn, 2. Đối thủ A, 3. Đối thủ B". Chú thích: "Mục tiêu: vào nhóm 3 kết quả đầu trên Google Maps trong bán kính phục vụ." |
| Vấn đề của khách | Nhiều lượt xem hồ sơ nhưng ít cuộc gọi; đối thủ gần hơn hoặc có đánh giá tốt hơn |
| Căn cứ | "3 km" là ví dụ. Theo trang trợ giúp Google Business Profile, Google xếp hạng địa phương theo mức liên quan, khoảng cách và mức độ nổi bật |
| Nên giải thích bên dưới | Ba yếu tố xếp hạng của Google; phần nào làm được (thông tin khớp nhau, đánh giá, ảnh) và phần nào không đổi được (khoảng cách); đo bằng cuộc gọi và lượt chỉ đường |
| Phải giữ | Vòng bán kính, ghim cửa hàng, bảng 3 kết quả, chú thích |

### Google Ads & Shopping (`/dich-vu/google-ads-shopping/`)

| Trường | Nội dung |
| --- | --- |
| Sơ đồ | `AdsFunnel`: "Phễu Google Ads từ truy vấn đến đơn có lợi nhuận" |
| Thông điệp chính | Bốn tầng, mỗi tầng một việc tối ưu: Truy vấn (lọc từ khóa phủ định) → Lượt bấm (trang đích đúng ý định) → Khách đúng tệp (khớp với sổ bán hàng) → Đơn có lãi (giá thầu theo lợi nhuận, màu cam). Chú thích: "Tối ưu ở từng tầng phễu, không chỉ ở giá click." |
| Vấn đề của khách | Chi phí tăng nhưng lợi nhuận không tăng theo; báo cáo đẹp mà lợi nhuận không rõ |
| Cách hiểu | Mỗi tầng có một chỉ số dễ nhìn (CPC, CPL, ROAS) có thể che chỗ rò ở tầng đó |
| Nên giải thích bên dưới | Cấu trúc chi phí; chất lượng khách; tỉ lệ chốt; đo lường và phân bổ; kinh tế đơn vị |
| Phải giữ | 4 tầng, 4 việc tối ưu, tầng cuối màu cam, chú thích |

### Meta & TikTok Ads (`/dich-vu/meta-tiktok-ads/`)

| Trường | Nội dung |
| --- | --- |
| Sơ đồ | `CreativeMatrix`: "Bảng thử mẫu quảng cáo" |
| Thông điệp chính | 3 câu mở đầu × 3 ưu đãi = 9 mẫu; ô "Thắng" → "Mở rộng ngân sách". Chú thích: "Test theo ma trận để biết thứ gì làm quảng cáo thắng, rồi mới tăng ngân sách." |
| Vấn đề của khách | Quảng cáo nhanh nhàm, giá mỗi khách tăng; nhiều tin nhắn ít người mua |
| Nên giải thích bên dưới | Câu mở đầu, ưu đãi, trang đích hoặc tin nhắn, lọc khách, vòng thử |
| Phải giữ | Lưới 3×3, nhãn mở đầu và ưu đãi, ô thắng màu cam |

### Tối ưu chuyển đổi (CRO) (`/dich-vu/cro-landing-page/`)

| Trường | Nội dung |
| --- | --- |
| Sơ đồ | `CroWireframe`: "Trang đích với bốn điểm cần tối ưu" |
| Thông điệp chính | Thông điệp rõ, Nút bấm rõ, Bằng chứng, Form ngắn, đánh số 1 đến 4. Chú thích: "Bốn chỗ khách hay rời trang, sắp theo thứ tự cần sửa." |
| Vấn đề của khách | Nhiều lượt truy cập, ít form; khách rời trang trên điện thoại |
| Nên giải thích bên dưới | Mỗi điểm rời trang; cách thử nghiệm; giới hạn khi lượng truy cập nhỏ |
| Phải giữ | Khung trang và 4 điểm đánh số |

### Nội dung & PR (`/dich-vu/content-marketing-pr/`)

| Trường | Nội dung |
| --- | --- |
| Sơ đồ | `ContentJourney`: "Nội dung theo hành trình mua" |
| Thông điệp chính | Nhận biết (bài hướng dẫn, bài chuyên gia) → Cân nhắc (so sánh, hỏi đáp) → Quyết định (case study, tài liệu cho sales, màu cam) |
| Vấn đề của khách | Đăng đều nhưng không ra khách; sale thiếu tài liệu |
| Nên giải thích bên dưới | Mỗi giai đoạn cần loại nội dung nào; nội dung nối với đội sale ra sao |
| Phải giữ | 3 giai đoạn, 6 loại nội dung |

### Đo lường & báo cáo GA4 (`/dich-vu/ga4-looker-dashboard/`)

| Trường | Nội dung |
| --- | --- |
| Sơ đồ | `DataFlow`: "Luồng dữ liệu từ nguồn đến quyết định" |
| Thông điệp chính | Website, Quảng cáo, CRM → GA4 + GTM → Báo cáo → Quyết định ngân sách (màu cam). Chú thích: "Một nguồn số liệu chung cho marketing và sales." |
| Vấn đề của khách | GA4 đếm sai; số các kênh không khớp |
| Nên giải thích bên dưới | Thu thập dữ liệu, chất lượng sự kiện, giới hạn phân bổ, phân loại khách, nối CRM, ra quyết định |
| Phải giữ | 3 nguồn, GA4 + GTM, báo cáo, ô quyết định |

### Tư vấn lộ trình 90 ngày (`/dich-vu/tu-van-chien-luoc-sprint/`)

| Trường | Nội dung |
| --- | --- |
| Sơ đồ | `SprintTimeline`: "Lộ trình 90 ngày theo vòng 2 tuần" |
| Thông điệp chính | Chẩn đoán 2 tuần, rồi các vòng S1 đến S5, đánh giá ngày 90 |
| Căn cứ | Các mốc ngày là cách tổ chức sprint của SOHO, không phải số đo |
| Nên giải thích bên dưới | Chẩn đoán xem gì; mỗi vòng quyết định gì; khi nào dừng một kênh |
| Phải giữ | Trục ngày, ô chẩn đoán, 5 vòng |

### Thiết kế website (`/dich-vu/thiet-ke-website/`)

| Trường | Nội dung |
| --- | --- |
| Sơ đồ | `WebsiteFrames`: "Khung website trên máy tính và điện thoại" |
| Thông điệp chính | Cùng một nội dung, bố cục đổi theo màn hình, trang nào cũng dẫn tới nút liên hệ |
| Vấn đề của khách | Website chậm, vỡ bố cục trên điện thoại; có web nhưng không ai liên hệ |
| Nên giải thích bên dưới | Nhu cầu người dùng, thứ bậc thông tin, chỗ khách bị cản, điện thoại, tốc độ, khả năng tiếp cận |
| Phải giữ | Hai khung máy tính và điện thoại, nút liên hệ màu cam |

### Nhận diện thương hiệu (`/dich-vu/nhan-dien-thuong-hieu/`)

| Trường | Nội dung |
| --- | --- |
| Sơ đồ | `BrandSystem`: "Hệ thống nhận diện thương hiệu" |
| Thông điệp chính | Bảng màu và Kiểu chữ hai bên Logo → Website (màu cam), Mạng xã hội, Bao bì, Cửa hàng. Chú thích: "Logo, màu và chữ được quy định một lần, rồi dùng giống nhau ở mọi nơi khách gặp bạn." |
| Vấn đề của khách | Logo, màu mỗi nơi một kiểu; trông giống đối thủ; đẹp trên màn hình nhưng khó in |
| Nên giải thích bên dưới | Định vị và khác biệt; vì sao lệch xảy ra ở từng điểm chạm; quy định dùng; đo mức nhận ra |
| Phải giữ | 3 thành phần gốc, 4 điểm chạm, nhãn |

### Thiết kế Mobile App (`/dich-vu/thiet-ke-mobile-app/`)

| Trường | Nội dung |
| --- | --- |
| Sơ đồ | `AppFlow`: "Luồng đặt lịch trên app" |
| Thông điệp chính | Chọn dịch vụ → Chọn giờ → Xác nhận (màu cam). Chú thích: "Thiết kế bắt đầu từ việc khách cần làm trên app, rồi mới tới từng màn hình." |
| Vấn đề của khách | Khách phải gọi điện mới đặt được; dữ liệu khách rải rác |
| Nên giải thích bên dưới | Khi nào chưa cần app; luồng việc chính; nối với hệ thống đang có; bảo trì |
| Phải giữ | 3 màn hình, mũi tên, màn xác nhận màu cam |

## 3. Trùng lặp trong phần đầu trang

Phần đầu trang live có một chỗ trùng: "Mục tiêu hướng tới" (`PageHeader`) liệt kê `service.outcomes`, rồi sơ đồ `BeforeAfter` liệt kê lại đúng danh sách đó ở cột phải. Sprint 2 giữ `BeforeAfter` (là sơ đồ) và chỉ để lời hứa (`service.promise`) ở `PageHeader`. Không sơ đồ nào bị đổi.

## 4. Kết quả kiểm tra sau Sprint 2 (23/10/2026, trên máy)

| Hạng mục | Kết quả |
| --- | --- |
| Hồi quy sơ đồ | So markup của sơ đồ hero, `Track`, `BeforeAfter` trên 12 trang giữa bản build và bản live: 36/36 giống hệt |
| `npm run build` | Đạt, 48 trang tĩnh |
| Lint, Prettier | Đạt |
| Tràn ngang, ảnh lỗi, lỗi console ở 320, 375, 390, 430, 768, 1024, 1440, 1920 | 48/48 đạt (hub, 3 trang thí điểm, Meta Ads, Local SEO) |
| axe (WCAG 2.0 đến 2.2 A, AA) ở 1440 và 390 | 0 lỗi trên 3 trang thí điểm, Meta Ads, GA4, Website. Đã sửa: tương phản chữ ở dòng được tô sáng trong bảng; vùng bảng cuộn ngang nhận focus bàn phím |
| SEO 12 trang | Title, meta description, canonical, H1, breadcrumb, JSON-LD giống bản live |
| Link nội bộ | Không có link hỏng |
