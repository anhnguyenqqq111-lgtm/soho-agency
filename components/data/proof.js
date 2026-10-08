// Chứng nhận đối tác. Chỉ đặt verified: true khi SOHO thật sự có chứng nhận và có logo chính thức.
// Mục chưa xác nhận vẫn hiện kèm placeholder; xóa hẳn mục nào SOHO không có.
export const partners = [
  {name: 'Google Partner', verified: false, logo: null},
  {name: 'Meta Business Partner', verified: false, logo: null},
  {name: 'TikTok Marketing Partner', verified: false, logo: null}
];

// Nhận xét khách hàng thật, tiếng Việt, 2 đến 4 câu. Cần sự đồng ý của người nhận xét.
export const testimonials = [
  {quote: null, name: null, role: null, company: null},
  {quote: null, name: null, role: null, company: null},
  {quote: null, name: null, role: null, company: null}
];
