// Quy trình. Render: diagram.html, cửa sổ 680,425, tỉ lệ 2. 2–6 bước; label ≤ 40 ký tự, detail ≤ 90 ký tự.
window.DATA = {
  preset: 'inline',
  type: 'steps',
  layout: 'auto',           // auto: ≤ 4 bước xếp ngang, nhiều hơn xếp dọc; hoặc 'vertical' / 'horizontal'
  title: 'Quy trình 5 bước tối ưu nội dung cho AI Search',
  items: [
    {label: 'Rà soát thực thể thương hiệu', detail: 'Schema Organization, hồ sơ tác giả, thông tin nhất quán trên mọi kênh'},
    {label: 'Chọn cụm câu hỏi', detail: 'Lấy từ Search Console, PAA và câu hỏi thật của đội sales'},
    {label: 'Viết câu trả lời đặt trước', detail: 'Trả lời trực tiếp trong 2 câu đầu mỗi mục'},
    {label: 'Bổ sung dữ liệu riêng', detail: 'Số liệu nội bộ, ảnh quy trình thật, nhận định của chuyên gia'},
    {label: 'Đo trích dẫn và cập nhật', detail: 'Theo dõi truy vấn, CTR và câu trả lời AI mỗi tháng'}
  ]
};
