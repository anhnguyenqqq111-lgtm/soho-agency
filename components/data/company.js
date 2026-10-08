// Thông tin công ty dùng chung toàn site. Trường nào null sẽ hiện placeholder [CẦN ...].
export const company = {
  name: 'SOHO Agency',
  legalName: null,          // Tên pháp nhân đầy đủ, dùng cho chính sách và điều khoản
  taxId: null,              // Mã số thuế
  email: 'hello@sohoagency.vn',
  phone: null,
  regions: 'TP. Hồ Chí Minh',
  address: null,            // Địa chỉ văn phòng
  hours: null,              // Giờ làm việc, ví dụ "Thứ 2 đến thứ 6, 8:30 đến 17:30"
  foundedYear: null,        // Năm thành lập, ví dụ 2019
  clientCount: null,        // Số khách hàng đã làm, ví dụ "60+"
  teamSize: null,           // Quy mô đội ngũ
  responseTime: null,       // Thời gian phản hồi form, ví dụ "1 ngày làm việc"
  socials: [
    {label: 'Facebook', url: null},
    {label: 'LinkedIn', url: null},
    {label: 'Zalo OA', url: null},
    {label: 'YouTube', url: null}
  ]
};
