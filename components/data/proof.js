// Chứng nhận đối tác. Chỉ đặt verified: true khi SOHO thật sự có chứng nhận và có logo chính thức.
// Mục chưa xác nhận vẫn hiện kèm placeholder; xóa hẳn mục nào SOHO không có.
// Google Partner: huy hiệu 2026 lấy từ bộ "Partner badge 2026 assets" của Google (bản RGB, không chỉnh sửa).
// Quy định của Google: huy hiệu trên web phải dẫn tới trang hồ sơ đối tác của công ty. Điền profileUrl
// (dạng https://www.google.com/partners/agency?id=...) để huy hiệu thành link; khi còn null trang sẽ hiện nhãn [CẦN ...].
export const partners = [
  {name: 'Google Partner', year: 2026, verified: true, logo: '/partners/google-partner.svg', width: 152, height: 146, profileUrl: null},
  {name: 'Meta Business Partner', verified: false, logo: null},
  {name: 'TikTok Marketing Partner', verified: false, logo: null}
];

// Nhận xét khách hàng thật, tiếng Việt, 2 đến 4 câu. Cần sự đồng ý của người nhận xét.
export const testimonials = [
  {quote: null, name: null, role: null, company: null},
  {quote: null, name: null, role: null, company: null},
  {quote: null, name: null, role: null, company: null}
];
