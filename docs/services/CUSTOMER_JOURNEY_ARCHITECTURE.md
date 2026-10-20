# Kiến trúc hành trình khách hàng cho các dịch vụ SOHO

Tài liệu này giải thích cách 12 dịch vụ của SOHO được xếp theo hành trình khách hàng, thay vì liệt kê theo tên kênh. Dữ liệu nằm ở `components/data/touchpoints.js`. Đây là nguồn duy nhất: hub `/dich-vu/`, khối điểm chạm trên mỗi trang dịch vụ và lời mời liên hệ đều đọc từ file này.

## 1. Mô hình: 4 chặng và 1 nền tảng

Khách không đi theo thứ tự. Họ có thể vào từ bất kỳ chặng nào, quay lại chặng trước và bỏ qua chặng khác. Mỗi chặng có ba thông tin: khách cần gì, khách làm gì, đo bằng gì.

| Chặng | Khách cần | Dịch vụ vai trò chính | Dịch vụ vai trò hỗ trợ |
| --- | --- | --- | --- |
| 01 Nhận biết | Biết bạn tồn tại, nhớ bạn | Nhận diện thương hiệu, Meta & TikTok Ads, Nội dung & PR | |
| 02 Tìm kiếm và cân nhắc | Tìm đúng đơn vị, so sánh | SEO tổng thể, SEO cho AI, Local SEO, Google Ads | Nội dung & PR, Thiết kế website |
| 03 Chuyển đổi | Đủ tin để liên hệ, mua | Thiết kế website, Tối ưu chuyển đổi (CRO) | Google Ads, SEO tổng thể, Local SEO, Nhận diện, Meta Ads, Đo lường |
| 04 Trải nghiệm và quay lại | Dùng tiếp, mua lại, giới thiệu | Thiết kế Mobile App | Nội dung & PR, Meta Ads (nhắc lại) |
| ∞ Nền tảng xuyên suốt | Biết cái gì đang chạy | Đo lường & báo cáo GA4, Tư vấn lộ trình 90 ngày | |

Bảng đầy đủ, gồm cả "khách làm" và "đo bằng" của từng chặng, nằm ở `STAGES` và `FOUNDATION` trong `touchpoints.js`.

## 2. Vai trò của từng dịch vụ (`ROLES`)

Mỗi dịch vụ có:

- `primary`: chặng nơi dịch vụ tạo giá trị chính. Chỉ có một.
- `supporting`: các chặng dịch vụ góp thêm.
- `need`, `interaction`, `metric`: khách cần gì, khách làm gì ở điểm chạm này, đánh giá bằng con số nào.
- `chain`: đường đi ngắn của khách qua điểm chạm, ví dụ "Tìm trên Google → Trang dịch vụ → Tối ưu chuyển đổi → Khách tiềm năng".
- `next`: bước tiếp theo nên xem, kèm lý do nối (`why`). Đây là liên kết nội bộ có ý nghĩa, không phải "dịch vụ cùng nhóm".
- `pair`: dịch vụ hay đi cùng.
- `notYet` và `notYetSlug`: khi nào chưa nên làm dịch vụ này, và nên xem gì thay thế. Ví dụ: SEO cần vài tháng, nên cần khách sớm thì chạy Google Ads song song.
- `cta`: nhãn liên hệ theo dịch vụ, ví dụ "Nhận đánh giá hệ thống SEO". Không hứa kiểm tra miễn phí.

## 3. Chẩn đoán theo vấn đề (`DIAGNOSES`)

Hub bắt đầu từ vấn đề kinh doanh. Năm vấn đề, mỗi vấn đề chỉ ra một điểm nghẽn, một dịch vụ nên xem trước, một dịch vụ hỗ trợ, loại cải thiện có thể kỳ vọng (không ghi con số) và dự án liên quan nếu đã công bố.

| Vấn đề | Xem trước | Hỗ trợ | Dự án |
| --- | --- | --- | --- |
| Khách không tìm thấy | SEO tổng thể | Nội dung & PR | King Decor Luxury |
| Quảng cáo tốn tiền, ít khách | Google Ads | CRO | Kronos |
| Có truy cập, ít liên hệ | CRO | Thiết kế website | Helen Bridal |
| Thương hiệu khó nhớ | Nhận diện | Meta Ads | Le Viva Resort |
| Không biết kênh nào hiệu quả | Đo lường GA4 | Tư vấn lộ trình | Chưa có dự án công bố |

Lượt chọn được ghi bằng sự kiện `service_diagnostic_select` (chỉ gửi khi trang có gtag hoặc dataLayer).

## 4. Kết hợp minh họa (`COMBOS`)

Bốn ví dụ về cách các điểm chạm bổ trợ nhau: SEO + CRO; Meta Ads + Nội dung + Website; Nhận diện + Website + Google Ads; Local SEO + Google Ads. Trang ghi rõ đây là quan hệ để tham khảo, không phải gói bắt buộc hay kết quả được đảm bảo.

## 5. Luồng liên hệ giữ ngữ cảnh

`ContextualServiceCTA` hiển thị nhãn `cta` của dịch vụ và truyền `service` vào `CtaBand`, rồi vào `ContactForm` qua `defaultService`. Ô "Dịch vụ quan tâm" được chọn sẵn đúng dịch vụ của trang. Bảng ánh xạ slug sang lựa chọn trong form là `FORM_SERVICE` trong `components/services/ServiceContext.js`. Giá trị phải trùng một mục trong `SERVICES` của form, nếu không form sẽ để trống như cũ.

## 6. Khi thêm hoặc sửa dịch vụ

1. Thêm dịch vụ trong `servicePagesData.js` (giữ slug, vì URL không đổi).
2. Thêm mục trong `ROLES`, với đúng một `primary`.
3. Thêm dòng trong `FORM_SERVICE` nếu form có lựa chọn phù hợp.
4. Nếu dịch vụ là giải pháp chuyên biệt, thêm câu "Khi…" trong `SPECIALIST_CONTEXT`.
