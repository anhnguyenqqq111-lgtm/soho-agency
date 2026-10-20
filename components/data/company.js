// Thông tin công ty dùng chung toàn site. Trường nào null sẽ hiện placeholder [CẦN ...].
// Nguồn (crawl 10/2026): sohoagency.vn/lien-he, hồ sơ Google Partner id 6437141441, facebook.com/sohoagency.vn.
export const company = {
  name: 'SOHO Agency',
  legalName: 'Công ty TNHH SOHO Agency', // theo hồ sơ Google Partner
  taxId: null, // Mã số thuế: chưa tìm thấy công khai
  email: 'info@sohoagency.vn',
  phone: '033 678 2222',
  regions: 'TP. Hồ Chí Minh',
  address: '19 Tạ Hiện, phường Cát Lái, TP. Hồ Chí Minh',
  hours: 'Thứ 2 đến thứ 6, 8:00 đến 17:00',
  foundedYear: null, // Năm thành lập, ví dụ 2019
  clientCount: null, // Số khách hàng đã làm, ví dụ "60+"
  teamSize: null, // Quy mô đội ngũ
  responseTime: null, // Thời gian phản hồi form, ví dụ "1 ngày làm việc"
  socials: [
    {label: 'Facebook', url: 'https://www.facebook.com/sohoagency.vn'},
    {label: 'LinkedIn', url: null},
    {label: 'Zalo OA', url: null},
    {label: 'YouTube', url: null}
  ]
};
