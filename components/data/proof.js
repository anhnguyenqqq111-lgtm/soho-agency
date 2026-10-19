// Chứng nhận đối tác. Chỉ thêm mục khi SOHO thật sự có chứng nhận và có logo chính thức (SOHO không có Meta, TikTok).
// Google Partner: huy hiệu 2026 lấy từ bộ "Partner badge 2026 assets" của Google (bản RGB, không chỉnh sửa).
// Quy định của Google: huy hiệu trên web phải dẫn tới trang hồ sơ đối tác của công ty. Điền profileUrl
// (dạng https://www.google.com/partners/agency?id=...) để huy hiệu thành link; khi còn null trang sẽ hiện nhãn [CẦN ...].
export const partners = [
  {name: 'Google Partner', year: 2026, verified: true, logo: '/partners/google-partner.svg', width: 152, height: 146, profileUrl: 'https://www.google.com/partners/agency?id=6437141441',
    // Ba tiêu chí Google xác nhận trên hồ sơ đối tác (kiểm tra 10/2026), hiện trong ô giải thích khi rê chuột vào huy hiệu
    criteria: ['Điểm tối ưu hóa tài khoản từ 70% trở lên', 'Quản lý tối thiểu 10.000 USD chi tiêu quảng cáo trong 90 ngày', 'Ít nhất một nửa chuyên viên có chứng chỉ Google Ads']}
];

// Nhận xét khách hàng: lấy nguyên văn từ trang chủ sohoagency.vn (SOHO đã đăng công khai, kiểm tra 10/2026).
// Tên và ngành giữ như bản gốc. Thêm nhận xét mới chỉ khi khách đồng ý.
export const testimonials = [
  {quote: 'Soho giúp tụi mình hoàn thiện nhận diện thương hiệu và chạy quảng cáo ổn định hơn. Điều thích nhất là team theo sát và phản hồi nhanh.', name: 'Nguyễn Minh Tâm', role: 'Chủ nhà hàng Nhật Bản'},
  {quote: 'Sau khi làm bộ nhận diện mới, thương hiệu của chúng tôi được phản hồi chuyên nghiệp hơn rất nhiều. Lượng khách từ mạng xã hội tăng ổn định.', name: 'Anh Bình', role: 'Ngành chăm sóc xe'},
  {quote: 'Từ khi có bộ content kế hoạch theo tháng của Soho, team tụi mình dễ triển khai hơn, không bị bí ý tưởng như trước.', name: 'Chị Mai', role: 'Khách hàng bất động sản'},
  {quote: 'Soho làm nhanh, đúng deadline, trình bày rõ ràng và rất hiểu insight khách hàng. Dịch vụ chăm sóc sau dự án cũng rất tốt.', name: 'Trà My', role: 'Khách hàng dịch vụ'}
];
