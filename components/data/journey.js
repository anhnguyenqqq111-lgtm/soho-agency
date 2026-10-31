// Ba chặng hành trình khách hàng: dùng chung cho hero trang chủ và ma trận hành trình (components/diagrams/JourneyMatrix.js).
// measure: một con số SOHO theo dõi ở chặng đó, lấy từ cells (không thêm số liệu).
// Ô chỉ số viết bằng tiếng Việt (luật viết chữ: không dùng thuật ngữ tiếng Anh không giải thích)
export const STAGES = [
  {
    code: 'Giai đoạn 1',
    name: 'Tìm hiểu',
    sub: 'Khách mới biết tới bạn',
    owner: 'Marketing',
    q: '“Bên nào giải quyết được việc này?”',
    cells: [
      ['Số từ khóa mua hàng lên top Google', 'Được AI của Google nhắc tên'],
      ['Quảng cáo tới đúng tệp khách', 'Tỉ lệ nhớ quảng cáo'],
      ['Lượt đọc bài viết', 'Số lần thương hiệu được nhắc tới'],
      ['Đo đủ các hành động quan trọng', 'Biết khách đến từ kênh nào']
    ]
  },
  {
    code: 'Giai đoạn 2',
    name: 'Cân nhắc',
    sub: 'Khách đang so sánh các bên',
    owner: 'Marketing',
    q: '“Bên nào đáng tin hơn?”',
    cells: [
      ['Khách hàng tiềm năng từ Google'],
      ['Khách hàng tiềm năng đúng tệp', 'Từ khóa tốn tiền vô ích'],
      ['Khách đọc bài trước khi liên hệ', 'Lượt tải tài liệu'],
      ['Số liệu quảng cáo khớp sổ bán hàng']
    ]
  },
  {
    code: 'Giai đoạn 3',
    name: 'Mua',
    sub: 'Khách ra quyết định',
    owner: 'Bán hàng',
    q: '“Mua thì được gì, giá bao nhiêu?”',
    cells: [['Doanh thu từ SEO'], ['Chi phí mỗi đơn', 'Lợi nhuận gộp'], ['Kênh góp phần ra đơn'], ['Phân bổ ngân sách theo kênh']]
  }
];
export const STAGE_MEASURE = ['Số từ khóa mua hàng lên top Google', 'Khách hàng tiềm năng từ Google', 'Chi phí mỗi đơn, lợi nhuận gộp'];
export const JOURNEY_TOTAL = {lead: 'Tất cả quy về một con số:', value: 'doanh thu theo từng kênh'};
