window.DATA = {
  preset: 'inline',
  palette: 'denim',
  type: 'compare',
  title: 'Gắn thẻ trên trình duyệt và phía máy chủ',
  columns: {a: 'Trên trình duyệt', b: 'Phía máy chủ'},
  rows: [
    {criterion: 'Dữ liệu đi đâu', a: 'Thẳng từ trình duyệt tới Google, Meta', b: 'Qua máy chủ riêng trước khi gửi đi'},
    {criterion: 'Kiểm soát dữ liệu', a: 'Ít, mỗi mã tự gửi', b: 'Chọn được gửi gì, gửi cho ai'},
    {criterion: 'Chi phí', a: 'Không cần máy chủ', b: 'Máy chủ khoảng 45\u00A0USD/tháng, nên chạy 2'},
    {criterion: 'Bảo trì', a: 'Đơn giản', b: 'Cần người theo dõi khi có lỗi'}
  ],
  source: 'Google Tag Manager, hướng dẫn cài trên Cloud Run'
};
