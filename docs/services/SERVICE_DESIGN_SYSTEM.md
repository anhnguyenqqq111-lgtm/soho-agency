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

## 5. Redesign V4.0: bố cục biên tập cho 3 trang thí điểm (23/10/2026)

Nguồn tham khảo và số đo: `DESIGN_REFERENCE_ANALYSIS.md`. Audit trước khi làm: `SERVICE_VISUAL_AUDIT.md` mục 5. Nội dung giữ theo 3.1; V4.0 chỉ đổi bố cục và cách trình bày.

### 5.1 Thông số đã dùng

| Vai trò | Giá trị | Tại 390 / 1440 |
| --- | --- | --- |
| H1 hero (SEO, Google Ads) | `clamp(38px, 28px + 2.6vw, 64px)`; Google Ads giới hạn 56px | 38 / 64 |
| H1 hero Nhận diện | `clamp(40px, 6vw, 84px)` | 40 / 84 |
| Câu tuyên bố | `clamp(36px, 5.4vw, 76px)`, line-height 1.04, 800 | 36 / 76 |
| H2 biên tập | `clamp(30px, 22px + 2.1vw, 52px)` (theo số đo; token cũ đứng yên ở 30px tới khổ tablet) | 30 / 52 |
| H3 | `clamp(21px, 1.9vw, 28px)` | 21 / 27 |
| Đoạn dẫn | `clamp(18px, 1.45vw, 21px)`, line-height 1.6 | 18 / 21 |
| Thân | 17px desktop, 16px mobile, line-height 1.7, tối đa 680px | |
| Nhãn | 13px, chữ hoa, ls 0.12em; số thứ tự màu Deep Orange | |
| Khung nội dung | 1240px (`.page` trong `editorial.module.css`) | |
| Padding section | `clamp(56px, 30px + 5vw, 112px)` | 56 / 102 |
| Lưới | 12 cột, khoảng cách `clamp(24px, 3vw, 48px)`; tách đôi 4/8; dưới 1000px còn 1 cột | |

Hệ chung nằm ở `components/services/editorial/editorial.module.css`:

- `band` (nền trắng), `canvas`, `ink` (tối nhất 1 dải mỗi trang, cộng CTA);
- các kiểu chữ `label`, `statement`, `h2`, `h3`, `lead`, `body`;
- lưới `grid` với các vùng `side`, `main`, `half`, `full`, `sticky`;
- danh sách `rows` ngăn bằng đường kẻ, và `textLink`.

Phần đầu trang thí điểm là `PilotOverview`, gồm 3 kiểu hero. Ba sơ đồ live giữ nguyên markup; chỉ khung chứa quanh chúng thay đổi.

### 5.2 Từng phần đã đổi

| Trang, phần | Trước đó sai gì | Tham khảo | Bố cục đổi thế nào | Vì sao dễ hiểu hơn, phục vụ chiến lược ra sao |
| --- | --- | --- | --- | --- |
| Cả 3, hero | 12 trang chung một khuôn; sơ đồ nhỏ, đặt giữa bên dưới H1; nửa phải trống | Stripe (chữ hẹp, hình giao diện rộng) | SEO: chữ 6 cột + sơ đồ 6 cột. Google Ads: sơ đồ 7 cột trên nền canvas tràn mép trái, chữ 5 cột. Nhận diện: H1 84px trải ngang, sơ đồ 8 cột như tác phẩm treo tường | Sơ đồ (luận điểm mở đầu) nằm ngay tầm mắt, cùng hàng với H1. Ba trang nhìn khác nhau từ màn hình đầu |
| Cả 3, "Mục tiêu hướng tới" | Section riêng cho 2 dòng chữ | Instrument (một câu, một nút) | Lời hứa và nút CTA theo ngữ cảnh gộp vào hero, thêm liên kết chữ "Đọc phân tích" | Bớt một lần cuộn rỗng; CTA đứng cạnh lời hứa |
| Cả 3, dải các bước | Khối tối có biểu tượng lịch 3D, trên mobile đè lên tiêu đề | Refokus (tiêu đề trái, kẻ mảnh) | Bỏ trang trí 3D; tiêu đề 4 cột, mô tả 8 cột, sơ đồ trải hết khung. SEO và Google Ads dùng nền sáng, Nhận diện nền tối | Hết lỗi đè chữ; khối tối của Google Ads để dành cho phép tính |
| Cả 3, "Vì sao cần" | Tiêu đề trên, hai hộp dấu hiệu/mục tiêu bên dưới | Ramotion (tiêu đề trái, nội dung phải) | Tiêu đề và nhận định dính bên trái khi cuộn, sơ đồ dấu hiệu → mục tiêu bên phải | Đọc nhận định và nhìn sơ đồ cùng lúc |
| Cả 3, vấn đề | H2 hai dòng có gradient, 3 cột chữ nhỏ trong khung | Refokus (câu tuyên bố, đoạn dẫn lớn) | Câu tuyên bố 76px; đoạn dẫn 4 cột trái; biểu hiện xếp hàng 8 cột phải, số lớn màu cam, có nhãn nút hoặc tầng của sơ đồ | Một câu đủ nói vấn đề; mỗi biểu hiện chỉ rõ chỗ trên sơ đồ |
| SEO, vì sao | Bảng 6 cột, chữ 14px, trên mobile phải cuộn ngang | Refokus (hàng câu hỏi đánh số), Stripe (nhãn và số cạnh nhau) | Sáu hàng đúng sáu nút sơ đồ; truy vấn chữ đơn cách; hai thang 4 vạch cho "số người gõ" và "gần quyết định", có chữ đi kèm; tiêu đề dính bên trái | Thấy ngay hai trục ngược chiều nhau; trên mobile thành hàng xếp chồng, không cuộn ngang |
| SEO, ví dụ | Bản đồ nằm sau bảng trong cùng section | Clay (hình trải rộng) | Section riêng, bản đồ trải hết khung | Ví dụ thành một màn trình diễn riêng |
| SEO, dự án | Thẻ nhỏ, ảnh 16:7 thu nhỏ | Arqitel (khối thông tin cạnh tóm tắt), Ramotion | Ảnh 21:9 trải hết khung; tên dự án và thông tin bên trái, bối cảnh, việc đã làm và ghi chú phạm vi kết quả bên phải | Bằng chứng thật được trưng to; vẫn nói rõ kết quả công bố là về quảng cáo |
| Google Ads, vì sao | Bảng 5 cột | Stripe (so sánh có cấu trúc) | Mỗi tầng phễu một hàng: "con số dễ nhìn → con số nên xem", bên dưới là "có thể che" và liên kết dịch vụ phụ thuộc | So sánh hai loại chỉ số bằng chữ và mũi tên; trên mobile xếp dọc |
| Google Ads, phép tính | Thẻ tối giữa section sáng | Stripe (dải sản phẩm) | Dải tối toàn chiều ngang duy nhất của trang | Phép tính thành điểm nhấn số liệu; vẫn chỉ 2 khối tối mỗi trang |
| Google Ads, cấu trúc | Cây có 9 thẻ viền xám | Clay (danh sách có kẻ) | Gốc là viên tròn, nhánh là cột có kẻ trên, lá là hàng có kẻ dưới, một đường dọc nối gốc với các nhánh | Đọc như sơ đồ tổ chức, không như lưới thẻ |
| Google Ads, bằng chứng | Huy hiệu nhỏ cạnh danh sách bàn giao | Instrument (bằng chứng cạnh năng lực) | Huy hiệu 112px với 3 tiêu chí Google xác nhận, bàn giao dạng hàng 2 cột | Chứng nhận thật đặt cạnh lời hứa "báo cáo bằng lợi nhuận" |
| Nhận diện, vì sao | Đoạn chữ nhỏ và 4 cột chữ nhỏ | Refokus (đoạn dẫn lớn) | "Gốc của sự lệch" thành đoạn dẫn 32px; bốn điểm chạm đúng như sơ đồ, tên 32px, kẻ trên (Website màu cam như trên sơ đồ) | Nối trực tiếp với 4 điểm chạm trên sơ đồ hero |
| Nhận diện, trưng bày | 4 tấm logo nhỏ, thẻ trong thẻ | Arqitel (nền đồng nhất), Clay (ảnh lớn) | Logo chính chiếm 7 cột, cao 2 hàng; tấm thử cỡ nhỏ thành dải ngang; mô hình ứng dụng 2 cột, đầu trang web trải ngang; bỏ viền | Bộ nhận diện thành phần trưng bày chính của trang |
| Nhận diện, nhận xét | Thẻ nhỏ cạnh hộp bàn giao | Refokus (trích dẫn lớn) | Hai trích dẫn 32px, mỗi trích dẫn 6 cột, kẻ trên | Lời khách đã đăng công khai được đọc như trích dẫn |
| Cả 3, đo lường | Thang có 4 hộp cao dần, hộp cuối nền tối | Ramotion (hàng số liệu), Stripe (kẻ mảnh) | Bậc thang dựng bằng đường kẻ trên nâng dần; bậc kinh doanh có kẻ cam 6px; giới hạn đánh số bên phải | Hướng đi lên đọc được mà không cần hộp; không dùng số lớn vì chưa có số thật |
| Cả 3, nối vào kinh doanh | Tiêu đề hai dòng | Instrument (một câu) | Chuỗi "A → B → C" thành câu tuyên bố, rồi khối điểm chạm | Kết trang bằng vai trò của dịch vụ trong hành trình |

### 5.3 Tự chấm (heuristic của người làm, không phải kết quả nghiên cứu người dùng)

| Tiêu chí (trọng số) | SEO | Google Ads | Nhận diện |
| --- | ---: | ---: | ---: |
| Bố cục, chỉ đạo hình ảnh (25) | 19 | 20 | 18 |
| Phân cấp thông tin (20) | 17 | 17 | 17 |
| Gắn sơ đồ với nội dung (20) | 17 | 18 | 16 |
| Câu chuyện riêng của dịch vụ (15) | 12 | 13 | 12 |
| Mobile (10) | 8 | 8 | 8 |
| Truy cập, hiệu năng (10) | 9 | 9 | 9 |
| **Tổng (100)** | **82** | **85** | **80** |

**Lý do chấm:**

- **SEO:** hero và phần "vì sao" rõ, câu tuyên bố mạnh. Bản đồ chủ đề vẫn là cụm ô có viền và trên mobile phải vuốt ngang. Sơ đồ ở hero còn đặt trong thẻ.
- **Google Ads:** bốn tầng phễu xuyên suốt từ sơ đồ tới phép tính, nên đây là trang có câu chuyện liền mạch nhất. Không có dự án Google Ads để trưng.
- **Nhận diện:** chưa có ảnh dự án nhận diện thật đã công bố, nên phần hình chỉ là bộ nhận diện SOHO. Bốn điểm chạm vẫn chỉ là chữ.

**Điểm yếu chung:** ngoài hero và khối đặc trưng, cả ba trang dùng lại một nhịp "nhãn + H2 bên trái 4 cột, nội dung bên phải 8 cột" nhiều lần. Nhịp này rõ ràng, nhưng nếu nhân lên 12 trang sẽ lại thành một khuôn.

### 5.4 Kế hoạch cho 9 trang còn lại

1. **Sửa ngay trên khung chung (cả 12 trang):**
   - bỏ biểu tượng 3D ở dải các bước, vì đè chữ trên mobile;
   - gộp "Mục tiêu hướng tới" vào hero;
   - áp dụng thang chữ và padding mới.
2. **Mỗi trang chỉ dùng tách đôi 4/8 tối đa 2 lần.** Các phần khác chọn một trong: tuyên bố toàn chiều ngang, hình toàn khung, so sánh, hàng đánh số, trích dẫn lớn.
3. **Bố cục dự kiến:**

| Dịch vụ | Kiểu chủ đạo | Phần đặc trưng dưới sơ đồ |
| --- | --- | --- |
| Meta & TikTok Ads | Studio sáng tạo | Ma trận 3×3 của sơ đồ thành hàng "câu mở đầu × ưu đãi"; ảnh quảng cáo thật nếu SOHO duyệt; dự án Meta đã công bố: Le Viva Resort (có số liệu), Kronos và Helen Bridal (chỉ có mô tả, chưa có số) |
| Thiết kế website | Danh mục sản phẩm số | Ảnh website dự án thật cỡ lớn (cần SOHO cấp); 3 điểm cản trở trên đường tới nút liên hệ của sơ đồ |
| Mobile App | Trải nghiệm sản phẩm | Ba màn hình của sơ đồ thành ba hàng "khách cần làm gì"; xem trước dạng khái niệm có ghi rõ; khi nào chưa cần app |
| SEO cho AI | Phân tích tín hiệu | Bốn nguồn tín hiệu của sơ đồ thành bốn hàng; giới hạn: không kiểm soát được việc AI trích dẫn |
| Local SEO | Hành trình trên bản đồ | Ba yếu tố xếp hạng của Google (liên quan, khoảng cách, nổi bật): yếu tố nào làm được, yếu tố nào không |
| CRO | Phòng thí nghiệm so sánh | Bốn điểm đánh số của sơ đồ thành 4 hàng "khách rời vì → sửa bằng"; giới hạn khi lượng truy cập nhỏ |
| Nội dung & PR | Hành trình biên tập | Ba giai đoạn của sơ đồ thành ba cột chữ lớn; tài liệu cho sale |
| GA4 & Looker | Câu chuyện đo lường | Luồng dữ liệu của sơ đồ thành 4 chặng; tách rõ ví dụ giả định với số thật |
| Tư vấn lộ trình | Lộ trình | Trục 90 ngày của sơ đồ: mỗi vòng quyết định gì |

**SOHO cần cung cấp trước Sprint rollout:**

- ảnh website và app thật đã được khách đồng ý công bố;
- ảnh quảng cáo Meta, TikTok đã chạy;
- dự án nhận diện có thể công bố.
