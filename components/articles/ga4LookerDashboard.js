export const ga4LookerDashboardArticle = {
  metaTitle: 'Dịch Vụ Đo Lường GA4 & Looker Studio Dashboard 2026: Kết Nối Tiếp Thị Với Dòng Tiền Thực Tế | SOHO',
  metaDesc: 'Chiến lược đo lường dữ liệu GA4, Google Tag Manager & thiết kế Looker Studio Dashboard chuyên sâu 2026. Xóa bỏ điểm mù dữ liệu, kết nối chi phí marketing trực tiếp với doanh thu và lợi nhuận ròng.',
  readingTime: '17 phút đọc',
  updatedDate: '04/10/2026',
  author: {
    name: 'Nguyễn Thế Tuấn Anh',
    role: 'Head of Growth Strategy @ SOHO Agency',
    avatar: '/brand/soho-logo.png'
  },
  toc: [
    { id: 'tham-kich-mu-du-lieu-marketing', title: '1. Thực trạng: Thảm kịch "Mù dữ liệu" - Mỗi kênh báo một số, không biết tiền đi đâu' },
    { id: 'chi-phi-co-hoi-lang-phi-ngan-sach', title: '2. Chi phí cơ hội: Lãng phí 40% ngân sách tiếp thị vì ra quyết định bằng cảm tính' },
    { id: 'ban-chat-he-thong-du-lieu-soho', title: '3. Bản chất Hệ thống Đo lường Tiếp thị Hiện Đại & Single Source of Truth' },
    { id: '4-tru-cot-data-analytics-engine', title: '4. 4 Trụ cột kiến trúc dữ liệu và trực quan hóa Dashboard của SOHO' },
    { id: 'quy-trinh-sprint-trien-khai-ga4', title: '5. Quy trình Sprint 5 bước chuẩn hóa dữ liệu & xây dựng Dashboard thực chiến' },
    { id: 'bang-so-sanh-bao-cao-ga4', title: '6. So sánh: Báo cáo Excel thủ công vs Live Looker Studio Dashboard' },
    { id: 'checklist-15-tieu-chi-ga4-audit', title: '7. Bộ Checklist 15 tiêu chí kiểm toán tính chính xác của hệ thống GA4' },
    { id: 'faq-ga4-looker-dashboard', title: '8. Câu hỏi thường gặp (FAQ chuẩn Schema)' }
  ],
  sections: [
    {
      id: 'tham-kich-mu-du-lieu-marketing',
      heading: '1. Thực trạng: Thảm kịch "Mù dữ liệu" - Mỗi kênh báo một số, không biết tiền đi đâu',
      content: `
### 1.1. Cơn ác mộng trong phòng họp Ban giám đốc cuối mỗi tháng

Tại phòng họp giao ban của nhiều doanh nghiệp, khi Ban giám đốc đặt câu hỏi: *"Tháng vừa qua chúng ta chi 300 triệu tiền marketing, vậy chính xác kênh nào mang về doanh thu, kênh nào đang đốt tiền lãng phí?"*, một hoạt cảnh quen thuộc lại diễn ra:
* Trưởng nhóm Google Ads báo cáo: *"Google Ads mang về 150 chuyển đổi, doanh thu ước tính 800 triệu!"*
* Trưởng nhóm Facebook Ads báo cáo: *"Facebook Ads mang về 180 đơn hàng, doanh thu ước tính 950 triệu!"*
* Đội ngũ SEO khẳng định: *"Organic Traffic tăng 50%, đóng góp ít nhất 40% doanh số công ty!"*
* Nhưng khi Giám đốc Tài chính (CFO) công bố số liệu thực thu từ ngân hàng: **Tổng doanh thu thực tế của toàn công ty chỉ đạt 1.1 tỷ VNĐ**.

Nếu cộng tất cả các con số báo cáo của từng kênh lại, tổng doanh thu lẽ ra phải đạt hơn 2 tỷ VNĐ. Vậy gần 1 tỷ doanh thu chênh lệch kia đã biến đi đâu?

Câu trả lời là: **Dữ liệu bị trùng lặp và ghi nhận công khống (Attribution Overlap)**. Cả ba kênh cùng tranh nhau nhận công cho một khách hàng duy nhất: Khách hàng thấy quảng cáo Facebook đầu tiên, sau đó lên Google tìm kiếm thông tin, nhấp vào bài viết SEO để đọc đánh giá, và cuối cùng nhấp vào một link quảng cáo Google Search để mua hàng. Khi hệ thống theo dõi dữ liệu bị phân mảnh, ban lãnh đạo hoàn toàn rơi vào trạng thái "mù dữ liệu" (Data Blindness).

### 1.2. 3 Điểm mù chí mạng trong việc triển khai Google Analytics 4 (GA4)

1. **Cài đặt GA4 theo kiểu "Mặc định tự động" (Out-of-the-box Setup):**
   Nhiều đơn vị chỉ chèn một đoạn mã đo lường cơ bản rồi bỏ mặc. Các sự kiện cốt lõi tạo ra doanh số (điền form, bấm nút gọi hotline, nhắn tin Zalo, tải bảng giá) hoàn toàn không được thiết lập thành sự kiện chuyển đổi (Conversion Events), khiến báo cáo GA4 chỉ toàn những con số xem trang (Pageviews) vô nghĩa.

2. **Dữ liệu rác và sai lệch tham số URL (UTM Chaos):**
   Mỗi nhân viên đặt tên link quảng cáo một kiểu: bên viết hoa, bên viết thường, bên đặt sai tên nguồn (source/medium). Hậu quả là hơn 50% lượng truy cập bị GA4 gom vào nhóm "Unassigned" hoặc "Direct", biến toàn bộ báo cáo phân bổ nguồn thành một mớ bòng bong không thể phân tích.

3. **Mất từ 30% đến 40% dữ liệu do rào cản quyền riêng tư và Cookie:**
   Sau khi các trình duyệt như Safari, Chrome và hệ điều hành iOS chặn cookie của bên thứ ba, các hệ thống đo lường truyền thống phía máy khách (Client-side Tracking) bị tê liệt nghiêm trọng, khiến dữ liệu báo cáo bị sụt giảm giả tạo.
`
    },
    {
      id: 'chi-phi-co-hoi-lang-phi-ngan-sach',
      heading: '2. Chi phí cơ hội: Lãng phí 40% ngân sách tiếp thị vì ra quyết định bằng cảm tính',
      content: `
### 2.1. Đưa ra quyết định kinh doanh trên những con số sai lệch

Nhà kinh tế học nổi tiếng W. Edwards Deming từng nói một câu bất hủ: *"In God we trust, all others must bring data"* (Chúng ta tin vào Chúa, còn tất cả những người khác đều phải nói chuyện bằng số liệu).

Tuy nhiên, nếu số liệu bạn mang vào phòng họp là số liệu sai, thì những quyết định chiến lược đưa ra sau đó sẽ dẫn doanh nghiệp đến bờ vực phá sản:
* **Cắt nhầm kênh sinh lời thực tế:** Bạn thấy một chiến dịch quảng cáo có chi phí trên mỗi đơn hàng trực tiếp có vẻ cao và quyết định tắt nó đi. Nhưng bạn không hề biết rằng chiến dịch đó chính là điểm chạm đầu tiên (First-touch) mở phễu để thu hút khách hàng tiềm năng. Khi tắt chiến dịch đó đi, 3 tuần sau toàn bộ doanh số của các kênh khác sụp đổ theo dây chuyền.
* **Đổ thêm tiền vào các kênh ảo:** Tiếp tục tăng ngân sách cho một kênh có vẻ có nhiều lượt click rẻ nhưng thực chất tệp khách đó không bao giờ ký hợp đồng.

Theo ước tính của Gartner, các doanh nghiệp vừa và nhỏ lãng phí trung bình từ **25% đến 40% tổng ngân sách tiếp thị mỗi năm** chỉ vì thiếu một hệ thống đo lường dữ liệu chuẩn xác để cắt giảm các khoản chi tiêu không hiệu quả.

### 2.2. Lãng phí hàng trăm giờ lao động của cấp quản lý vào việc "Xào xáo bảng biểu Excel"

Cuối mỗi tuần hoặc mỗi tháng, các nhà quản lý tiếp thị và chuyên viên phân tích phải dành từ 2 đến 3 ngày chỉ để tải file dữ liệu từ Facebook Ads, Google Ads, TikTok Ads, CRM và Google Sheets về máy, sau đó ngồi copy - paste thủ công để tạo ra một bản báo cáo slide thuyết trình. 

Đến thời điểm bản báo cáo đó được trình lên Ban giám đốc, dữ liệu trong đó đã bị lỗi thời 5 ngày. Doanh nghiệp hoàn toàn mất đi khả năng phản ứng nhanh trước những biến động giá thầu và xu hướng tiêu dùng trên thị trường.
`
    },
    {
      id: 'ban-chat-he-thong-du-lieu-soho',
      heading: '3. Bản chất Hệ thống Đo lường Tiếp thị Hiện Đại & Single Source of Truth',
      content: `
### 3.1. Single Source of Truth (Nguồn Chân Lý Dữ Liệu Duy Nhất) là gì?

Tại SOHO Agency, chúng tôi xây dựng giải pháp đo lường dựa trên tiêu chuẩn kiến trúc dữ liệu doanh nghiệp: **Thiết lập một "Nguồn chân lý dữ liệu duy nhất" (Single Source of Truth) kết nối liền mạch từ Lượt hiển thị quảng cáo ➔ Lượt truy cập website ➔ Hành vi tương tác trang đích ➔ Khách hàng tiềm năng (Lead) ➔ Cơ hội kinh doanh (Pipeline) ➔ Doanh thu thực thu trong tài khoản ngân hàng**.

Một hệ thống đo lường xuất sắc tại SOHO phải giải quyết triệt để 3 câu hỏi sống còn của người làm kinh doanh:
1. **Khách hàng sinh lời cao nhất đến từ đâu?** (Kênh tiếp thị, chiến dịch, từ khóa hoặc mẫu video cụ thể nào đóng góp lớn nhất vào lợi nhuận).
2. **Hành trình mua hàng diễn ra như thế nào?** (Bao nhiêu điểm chạm, mất bao nhiêu ngày từ lúc nhìn thấy thương hiệu đến khi quẹt thẻ thanh toán).
3. **Mỗi đồng ngân sách bỏ ra đang mang về bao nhiêu đồng lợi nhuận gộp?** (Đo lường chỉ số ROAS thực tế và Customer Acquisition Cost - CAC chuẩn xác).
`
    },
    {
      id: '4-tru-cot-data-analytics-engine',
      heading: '4. 4 Trụ cột kiến trúc dữ liệu và trực quan hóa Dashboard của SOHO',
      content: `
Hệ thống Đo lường & Phân tích Dữ liệu tại SOHO vận hành dựa trên **4 trụ cột công nghệ vững chắc**:

### Trụ cột 1: Kiến trúc Thu thập Dữ liệu Phía Máy chủ (Server-side GTM Tracking)
Khắc phục hoàn toàn rào cản chặn cookie của iOS và trình duyệt:
* Triển khai bộ chứa Google Tag Manager phía máy chủ (Server-side GTM Container) chạy trên hạ tầng đám mây bảo mật.
* Dữ liệu từ trình duyệt người dùng được gửi về máy chủ của chính doanh nghiệp trước khi chuyển tiếp về Google Analytics 4, Meta CAPI và Google Ads qua kết nối First-party Cookie.
* Khôi phục từ 25% đến 35% lượng dữ liệu chuyển đổi bị thất thoát, nâng cao độ chính xác của báo cáo lên mức trên 98%.

### Trụ cột 2: Chuẩn Hóa Mô Hình Dữ Liệu Sự Kiện (Event Taxonomy & Naming Convention)
Chúng tôi không thu thập dữ liệu hỗn loạn; chúng tôi xây dựng một từ điển dữ liệu (Data Dictionary) chuẩn hóa:
* Mọi hành vi quan trọng đều được đặt tên theo quy chuẩn quốc tế: *generate_lead, click_to_call, view_promotion, begin_checkout, submit_form*.
* Đính kèm các tham số ngữ cảnh chi tiết (Parameters): tên dịch vụ quan tâm, vị trí form trên trang, giá trị hợp đồng ước tính, nguồn chiến dịch và thiết bị người dùng.

### Trụ cột 3: Mô Hình Phân Bổ Giá Trị Đa Kênh (Data-Driven Attribution Modeling)
Chấm dứt việc tranh công giữa các kênh tiếp thị:
* Kích hoạt mô hình phân bổ dựa trên dữ liệu (Data-Driven Attribution - DDA) trong GA4, sử dụng thuật toán máy học để đánh giá công bằng đóng góp của từng điểm chạm trên toàn bộ hành trình khách hàng.
* Cung cấp góc nhìn phân tích phễu đa kênh (Multi-Channel Funnel Reports) giúp ban giám đốc nhìn rõ vai trò mở phễu (First-click), vai trò nuôi dưỡng (Assist-click) và vai trò chốt hạ (Last-click) của từng kênh.

### Trụ cột 4: Trực Quan Hóa Báo Cáo Thời Gian Thực Trên Looker Studio (Executive Dashboard)
Xóa bỏ hoàn toàn các bản báo cáo Excel thủ công nặng nề:
* Thiết kế bảng điều khiển Looker Studio Dashboard tự động cập nhật dữ liệu 24/7 theo thời gian thực.
* Phân tầng giao diện theo vai trò người dùng:
  * **Executive Dashboard (Dành cho CEO/Hội đồng quản trị):** Chỉ hiển thị các chỉ số tài chính vĩ mô: Doanh thu, Chi phí tiếp thị, MER, CAC, ROAS và Xu hướng tăng trưởng theo quý.
  * **Manager Dashboard (Dành cho CMO/Marketing Lead):** Đi sâu vào hiệu suất từng kênh, giá lead, chất lượng chuyển đổi và tỷ lệ hoàn vốn từng chiến dịch.
  * **Specialist Dashboard (Dành cho chuyên viên kỹ thuật):** Theo dõi chi tiết từng mẫu quảng cáo, từ khóa, trang đích và tỷ lệ chuyển đổi form hàng ngày.
`
    },
    {
      id: 'quy-trinh-sprint-trien-khai-ga4',
      heading: '5. Quy trình Sprint 5 bước chuẩn hóa dữ liệu & xây dựng Dashboard thực chiến',
      content: `
SOHO triển khai dự án chuẩn hóa dữ liệu và xây dựng Dashboard theo quy trình 5 bước tinh gọn trong 14–21 ngày:

### Bước 1: Khảo Sát Nhu Cầu Dữ Liệu & Kiểm Toán Hệ Thống Hiện Tại (Tracking Audit)
* Phỏng vấn Ban giám đốc và các trưởng bộ phận để xác định danh sách các câu hỏi kinh doanh cốt lõi mà báo cáo cần phải trả lời hàng ngày.
* Kiểm tra toàn diện tài khoản GA4, GTM và các mã pixel hiện có, lập danh mục các lỗi cài đặt sai, sự kiện bị đếm trùng và các khoảng trống dữ liệu cần khắc phục.

### Bước 2: Thiết Kế Kế Hoạch Đo Lường Toàn Diện (Measurement Plan)
* Xây dựng tài liệu kế hoạch đo lường chi tiết bao gồm: Danh sách sự kiện cần bắt, các tham số tùy chỉnh (Custom Dimensions & Metrics), quy tắc đặt tên link UTM đồng bộ toàn công ty và các ngưỡng kích hoạt mục tiêu chuyển đổi.

### Bước 3: Triển Khai Kỹ Thuật GTM & Xác Thực Dữ Liệu Server-Side
* Cài đặt và cấu hình bộ mã thẻ qua Google Tag Manager, kích hoạt chế độ Consent Mode v2 để tuân thủ các quy định bảo mật dữ liệu quốc tế.
* Kiểm thử kỹ thuật (Debug Mode) từng trường hợp người dùng tương tác thực tế để đảm bảo không có bất kỳ sự kiện nào bị kích hoạt nhầm hoặc sót dữ liệu.

### Bước 4: Thiết Kế & Xây Dựng Bảng Điều Khiển Looker Studio Độc Quyền
* Kết nối trực tiếp các nguồn dữ liệu gốc (GA4, Google Ads, Meta Ads, TikTok Ads, CRM Google Sheets) vào Looker Studio.
* Thiết kế giao diện trực quan hóa dữ liệu theo chuẩn nhận diện thương hiệu của doanh nghiệp, sử dụng biểu đồ phễu, bản đồ nhiệt và thẻ chỉ số KPI nổi bật.

### Bước 5: Bàn Giao, Đào Tạo Đọc Báo Cáo & Đồng Hành Tối Ưu
* Tổ chức buổi đào tạo thực chiến cho Ban giám đốc và đội ngũ tiếp thị về cách đọc báo cáo, cách sử dụng các bộ lọc phân khúc (Filters) và cách phát hiện sớm các bất thường trong dữ liệu kinh doanh.
* Bàn giao tài liệu hướng dẫn vận hành và tiếp tục đồng hành kiểm toán độ chính xác của dữ liệu trong 30 ngày tiếp theo.
`
    },
    {
      id: 'bang-so-sanh-bao-cao-ga4',
      heading: '6. So sánh: Báo cáo Excel thủ công vs Live Looker Studio Dashboard',
      content: `
Sự khác biệt giữa cách làm báo cáo truyền thống và hệ thống trực quan hóa dữ liệu hiện đại tại SOHO:

| Tiêu chí đối chiếu | Báo Cáo Excel Thủ Công Truyền Thống | Live Looker Studio Dashboard @ SOHO |
| :--- | :--- | :--- |
| **Tính cập nhật** | Dữ liệu bị trễ từ 3 đến 7 ngày, chỉ xem được dữ liệu quá khứ | **Cập nhật tự động theo thời gian thực (Real-time), dữ liệu luôn mới nhất từng phút** |
| **Độ chính xác** | Rất dễ sai sót do con người copy - paste, công thức tính bị lỗi | **Chính xác tuyệt đối 100%, dữ liệu được truyền thẳng từ API gốc của nền tảng** |
| **Thời gian chuẩn bị** | Tốn từ 10 đến 20 giờ làm việc của nhân sự mỗi tuần | **Tốn 0 giây; mở đường link trình duyệt là có sẵn toàn bộ biểu đồ hoàn chỉnh** |
| **Khả năng tương tác** | File tĩnh, không thể lọc sâu theo chiến dịch hay phân khúc | **Tương tác linh hoạt: Lọc theo khoảng ngày, theo kênh, theo thiết bị chỉ với 1 click** |
| **Góc nhìn kinh doanh** | Chỉ thấy các chỉ số vanity (click, view, impression rời rạc) | **Kết nối trực tiếp chi phí tiếp thị với dòng tiền doanh thu và lợi nhuận ròng** |
`
    },
    {
      id: 'checklist-15-tieu-chi-ga4-audit',
      heading: '7. Bộ Checklist 15 tiêu chí kiểm toán tính chính xác của hệ thống GA4',
      content: `
Kiểm tra sức khỏe hệ thống đo lường dữ liệu GA4 của doanh nghiệp bạn ngay hôm nay theo **15 tiêu chuẩn quốc tế**:

#### Nhóm 1: Cấu hình Tài khoản & Quyền Riêng tư (Account & Compliance)
- [ ] **1. Kích hoạt tính năng Google Signals:** Bật thu thập dữ liệu nhân khẩu học và hỗ trợ theo dõi người dùng trên nhiều thiết bị (Cross-device).
- [ ] **2. Tăng thời gian lưu trữ dữ liệu sự kiện lên 14 tháng:** Thay đổi cài đặt mặc định 2 tháng của Google lên mức tối đa 14 tháng trong Data Retention Settings.
- [ ] **3. Cấu hình thời gian phiên làm việc (Session Timeout):** Điều chỉnh thời gian hết hạn phiên phù hợp với hành vi đọc bài viết chuyên sâu (thường đặt từ 30 phút trở lên).
- [ ] **4. Triển khai Google Consent Mode v2:** Đảm bảo website tuân thủ chính sách thu thập dữ liệu người dùng mới nhất của Google.

#### Nhóm 2: Lọc Dữ liệu Rác & Phân khúc Lưu lượng (Data Cleansing)
- [ ] **5. Loại trừ địa chỉ IP nội bộ của công ty:** Ngăn chặn nhân viên công ty tự truy cập website làm sai lệch số liệu lượng truy cập thực tế.
- [ ] **6. Loại trừ các cổng thanh toán trung gian khỏi danh sách giới thiệu (Referral Exclusion):** Đưa các tên miền như vnpay.vn, onepay.vn, paypal.com vào danh sách loại trừ để không làm mất nguồn gốc của chiến dịch ban đầu.
- [ ] **7. Áp dụng quy chuẩn đặt tên link UTM nghiêm ngặt:** Toàn bộ liên kết quảng cáo sử dụng chữ thường, không có dấu cách và tuân thủ bảng từ điển dữ liệu nội bộ.
- [ ] **8. Tỷ lệ lưu lượng "Unassigned" dưới 5%:** Kiểm tra báo cáo Session Default Channel Group để đảm bảo mọi lượt truy cập đều được gán đúng kênh.

#### Nhóm 3: Chuyển đổi & Trực quan hóa Dữ liệu (Conversions & Reporting)
- [ ] **9. Thiết lập tối thiểu 3 sự kiện chuyển đổi cốt lõi:** Có các sự kiện tạo lead, cuộc gọi hoặc đơn hàng được đánh dấu là "Key Event" trong GA4.
- [ ] **10. Giá trị tiền tệ (Currency) được đặt chuẩn là VND:** Đảm bảo các chỉ số doanh thu không bị nhầm lẫn sang USD.
- [ ] **11. Liên kết tài khoản GA4 với Google Search Console:** Đồng bộ dữ liệu từ khóa tự nhiên và thứ hạng trang đích vào báo cáo GA4.
- [ ] **12. Liên kết tài khoản GA4 với Google Ads:** Chia sẻ tệp đối tượng khách hàng tiềm năng và dữ liệu chuyển đổi để phục vụ Smart Bidding.
- [ ] **13. Bảng điều khiển Looker Studio hoạt động trơn tru:** Không có biểu đồ nào bị lỗi gãy kết nối dữ liệu (Data Source Error).
- [ ] **14. Có bộ lọc phân quyền xem dữ liệu theo cấp bậc:** Đảm bảo các số liệu tài chính nhạy cảm chỉ hiển thị cho Ban giám đốc.
- [ ] **15. Quy trình kiểm tra đối soát định kỳ hàng tháng:** Có biên bản rà soát đối chiếu số lượng đơn hàng trên GA4 và số liệu thực thu của phòng kế toán.
`
    },
    {
      id: 'faq-ga4-looker-dashboard',
      heading: '8. Câu hỏi thường gặp (FAQ chuẩn Schema)',
      content: `
### Câu hỏi 1: Google Analytics 4 (GA4) có thực sự khó sử dụng hơn phiên bản Universal Analytics (GA3) cũ không?
**Trả lời:** Có, đối với người dùng thông thường, và **Đúng vậy, nếu bạn cố gắng sử dụng GA4 theo thói quen cũ**:
* Phiên bản GA3 cũ dựa trên mô hình phiên truy cập (Session-based) và có sẵn hàng trăm báo cáo cố định.
* GA4 được xây dựng lại hoàn toàn từ con số 0 dựa trên mô hình sự kiện (Event-based Data Model) được thiết kế cho các nhà khoa học dữ liệu. Giao diện báo cáo mặc định của GA4 rất trống trải và khó tìm kiếm thông tin.
* Đây chính là lý do vì sao SOHO **kết hợp GA4 với Looker Studio**: Chúng tôi trích xuất toàn bộ dữ liệu phức tạp của GA4 sang bảng điều khiển Looker Studio trực quan, đẹp mắt và dễ hiểu, giúp bạn chỉ cần 30 giây mỗi sáng là nắm trọn toàn bộ sức khỏe kinh doanh của doanh nghiệp mà không cần phải mày mò trong giao diện rối rắm của GA4.

### Câu hỏi 2: Hệ thống Looker Studio Dashboard của SOHO có thể tích hợp dữ liệu từ những nguồn nào?
**Trả lời:** Chúng tôi có thể đồng bộ hóa hầu hết mọi nguồn dữ liệu mà doanh nghiệp của bạn đang sử dụng:
* Nền tảng quảng cáo: Google Ads, Meta Ads (Facebook/Instagram), TikTok Ads, Zalo Ads, LinkedIn Ads.
* Nền tảng website & phân tích: Google Analytics 4, Google Search Console, YouTube Analytics.
* Nền tảng quản lý quan hệ khách hàng (CRM) & Bán hàng: HubSpot, Salesforce, Lark Suite, KiotViet, Sapo, Haravan hoặc các file Google Sheets nội bộ của công ty.
* Tất cả được gom về một giao diện duy nhất, cho phép bạn đối chiếu chi phí quảng cáo và doanh thu thực tế một cách tức thì.

### Câu hỏi 3: Chi phí triển khai dịch vụ đo lường GA4 và thiết kế Dashboard Looker Studio tại SOHO được tính như thế nào?
**Trả lời:** Dịch vụ được cung cấp theo hình thức dự án trọn gói bàn giao một lần:
* Chi phí bao gồm: Khảo sát nhu cầu, xây dựng Measurement Plan, lập trình cài đặt toàn bộ hệ thống GTM/GA4/Server-side, thiết kế bảng điều khiển Looker Studio tùy biến theo yêu cầu, đào tạo nhân sự sử dụng và bảo hành kỹ thuật 6 tháng.
* Không phát sinh phí duy trì hàng tháng cho phần mềm (bởi vì cả Google Analytics 4 và Looker Studio đều là công cụ hoàn toàn miễn phí của Google). Sau khi hoàn thành, doanh nghiệp sở hữu trọn đời 100% hệ sinh thái dữ liệu của mình.
`
    }
  ]
};
