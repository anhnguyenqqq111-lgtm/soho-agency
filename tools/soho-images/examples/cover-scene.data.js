// Thumbnail với cảnh dựng từ nội dung bài (scene). Render: cover.html, cửa sổ 1600,1000, tỉ lệ 1.
// Cảnh lấy các bước trong bài làm nhãn; template cảnh báo nếu quá 8 mục hoặc nhãn quá dài.
window.DATA = {
  preset: 'cover',
  palette: 'meta',
  scene: {type: 'flow', items: [
    {visual: 'phone', label: 'Trình duyệt', sub: 'Pixel bị chặn bởi iOS, ITP'},
    {visual: 'server', label: 'Máy chủ riêng', sub: 'GTM server-side'},
    {visual: 'facebook', label: 'Meta CAPI', sub: 'nhận đủ tín hiệu mua hàng'}
  ]},
  category: 'Dữ liệu & CRO',
  title: 'Facebook CAPI và Server-side Tracking',
  highlight: 'Facebook CAPI',
  note: 'Blog SOHO Agency'
};
