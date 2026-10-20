// Ba chặng hành trình khách hàng: dùng chung cho hero trang chủ và ma trận hành trình (components/diagrams/JourneyMatrix.js).
// measure: một con số SOHO theo dõi ở chặng đó, lấy từ cells (không thêm số liệu).
// Ô chỉ số viết bằng tiếng Việt (luật viết chữ: không dùng thuật ngữ tiếng Anh không giải thích)
export const STAGES = [
  {
    code: 'Chặng 1',
    name: 'Được tìm thấy',
    sub: 'Khách mới biết tới bạn',
    owner: 'Marketing',
    q: '“Có ai giải được việc này không?”',
    cells: [
      ['Độ phủ nhóm từ khóa người muốn mua', 'Được AI của Google nhắc tên'],
      ['Hiện đúng nhóm khách', 'Tỉ lệ nhớ quảng cáo'],
      ['Lượt đọc bài viết', 'Số lần thương hiệu được nhắc'],
      ['Đo đủ hành động quan trọng', 'Biết khách đến từ đâu']
    ]
  },
  {
    code: 'Chặng 2',
    name: 'Được chọn',
    sub: 'Khách đang cân nhắc',
    owner: 'Marketing',
    q: '“Bên nào đáng tin hơn?”',
    cells: [
      ['Khách để lại thông tin từ Google'],
      ['Khách tiềm năng đúng tệp', 'Từ khóa tốn tiền vô ích'],
      ['Khách đã đọc bài trước khi liên hệ', 'Lượt tải tài liệu'],
      ['Số quảng cáo khớp sổ bán hàng']
    ]
  },
  {
    code: 'Chặng 3',
    name: 'Được tin, mua',
    sub: 'Khách ra quyết định',
    owner: 'Sales',
    q: '“Mua thì được gì, bao nhiêu?”',
    cells: [['Doanh thu từ Google tự nhiên'], ['Chi phí mỗi đơn', 'Lợi nhuận gộp'], ['Kênh góp phần vào đơn'], ['Chia ngân sách theo kênh']]
  }
];
export const STAGE_MEASURE = ['Độ phủ nhóm từ khóa người muốn mua', 'Khách để lại thông tin từ Google', 'Chi phí mỗi đơn, lợi nhuận gộp'];
export const JOURNEY_TOTAL = {lead: 'Tất cả gộp về một con số:', value: 'doanh thu theo kênh'};
