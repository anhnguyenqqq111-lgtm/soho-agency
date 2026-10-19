// Dự án SOHO đã công bố. Nguồn: sohoagency.vn/du-an/<slug> (đăng bởi SOHO, kiểm tra 10/2026).
// Ảnh bìa lấy từ cùng trang, đặt ở public/projects/<slug>.webp. Trang chi tiết: /du-an/<slug> (giữ đúng URL của site cũ).
// problem, solution: một dòng tóm tắt từ context và work, không thêm ý mới. services: slug dịch vụ liên quan.
// Luật viết chữ số 5: chỉ ghi con số khi chính trang dự án đã công bố; không thêm số mới.
export const cases = [
  {
    slug: 'le-viva-resort',
    problem: 'Chưa có định vị rõ ở Mũi Né, đặt phòng theo mùa lúc được lúc không.',
    solution: 'Dựng lại hình ảnh fanpage, quảng cáo nhắn tin theo mùa cho khách cuối tuần từ TP.HCM.',
    services: ['meta-tiktok-ads'],
    name: 'Le Viva Resort',
    field: 'Khu nghỉ dưỡng ven biển ở Mũi Né',
    scope: 'Fanpage, quảng cáo Facebook',
    period: 'Từ 01/2025',
    image: '/projects/le-viva-resort.webp',
    // Số do SOHO công bố trên trang dự án
    kpis: [
      {value: '+135%', label: 'tương tác tự nhiên trên fanpage sau 2 tháng'},
      {value: '×2,3', label: 'tỉ lệ tin nhắn hỏi đặt phòng so với giai đoạn trước'},
      {value: '−35%', label: 'chi phí cho 1.000 lượt hiển thị quảng cáo'}
    ],
    result: 'Tỉ lệ tin nhắn hỏi đặt phòng gấp 2,3 lần giai đoạn trước.',
    context: 'Resort chưa có định vị rõ ở thị trường Mũi Né. Fanpage đăng đều nhưng hình ảnh không thống nhất, chưa cho thấy trải nghiệm ở resort. Quảng cáo theo mùa lúc được lúc không.',
    work: 'Dựng lại hình ảnh và giọng nói của fanpage theo tinh thần thiên nhiên, ven biển. Chạy quảng cáo nhắn tin và nhắc lại theo mùa cho khách cuối tuần từ TP.HCM, Đồng Nai, Bình Dương. Viết sẵn tin chào và trả lời tự động để chốt đặt phòng nhanh hơn.'
  },
  {
    slug: 'king-decor-luxury',
    problem: 'Công trình đẹp nhưng website chưa trả lời được câu hỏi của chủ đầu tư.',
    solution: 'Tái cấu trúc website theo nhóm dịch vụ, viết bài cho từng câu hỏi, quảng cáo Facebook đúng tệp.',
    services: ['seo-tong-the', 'meta-tiktok-ads'],
    name: 'King Decor Luxury',
    field: 'Thiết kế, thi công quán cà phê sân vườn, studio, homestay',
    scope: 'SEO website, quảng cáo Facebook',
    period: 'Từ 05/2025',
    image: '/projects/king-decor-luxury.webp',
    result: 'Quảng cáo tạo yêu cầu tư vấn đều, đúng nhóm chủ đầu tư; bớt phụ thuộc khách giới thiệu.',
    context: 'Công trình đẹp, năng lực thi công tốt, nhưng website chưa tối ưu cho tìm kiếm. Chủ đầu tư tìm rất kỹ mẫu, chi phí, diện tích trước khi liên hệ, còn nội dung trên web chưa trả lời đủ.',
    work: 'Tái cấu trúc website theo từng nhóm dịch vụ chính: quán cà phê sân vườn, studio áo cưới, phim trường. Viết bài trả lời đúng câu hỏi của chủ đầu tư về mẫu, chi phí, kinh nghiệm thi công. Quảng cáo Facebook nhắm đúng nhóm chủ đầu tư để có yêu cầu tư vấn nhanh trong lúc chờ SEO lên.'
  },
  {
    slug: 'kronos-luxury-timepieces',
    problem: 'Hình ảnh sang trọng nhưng quảng cáo đẹp mà không ra đơn.',
    solution: 'Chia nội dung theo dòng đồng hồ và dịp tặng quà, quảng cáo nhắn tin theo mùa lễ.',
    services: ['meta-tiktok-ads'],
    name: 'Kronos Luxury Timepieces',
    field: 'Phân phối đồng hồ cao cấp',
    scope: 'Fanpage, quảng cáo Facebook',
    period: 'Từ 02/2025',
    image: '/projects/kronos-luxury-timepieces.webp',
    result: 'Tin nhắn hỏi mua tăng mạnh trong các mùa lễ, Tết.',
    context: 'Hình ảnh sản phẩm đẹp nhưng quảng cáo dễ rơi vào "đẹp mà không ra đơn". Mỗi dòng đồng hồ như Cartier, Patek Philippe có nhóm khách khác nhau, các dịp lễ chưa được khai thác hết.',
    work: 'Chia nội dung theo từng dòng sản phẩm và từng dịp tặng quà. Chạy quảng cáo nhắn tin và chốt đơn theo mùa, nhắm riêng nhóm doanh nhân và nhóm mua quà.'
  },
  {
    slug: 'helen-bridal',
    problem: 'Đông người theo dõi nhưng nội dung chưa dẫn tới bước đặt lịch.',
    solution: 'Sắp nội dung theo hành trình cô dâu chú rể, quảng cáo theo mùa cưới.',
    services: ['meta-tiktok-ads'],
    name: 'Helen Bridal',
    field: 'Studio ảnh cưới phong cách Hàn Quốc',
    scope: 'Fanpage, quảng cáo Facebook',
    period: 'Từ 08/2024',
    image: '/projects/helen-bridal.webp',
    result: 'Tin nhắn tư vấn tăng rõ trong mùa cưới.',
    context: 'Fanpage đông người theo dõi, ảnh đẹp, nhưng nội dung chưa dẫn khách tới bước đặt lịch. Thị trường studio cưới rất đông, nhiều nơi có phong cách giống nhau.',
    work: 'Sắp lại nội dung theo hành trình của cô dâu chú rể: concept mới, phim trường riêng, trước và sau trang điểm, ảnh cặp đôi thật. Quảng cáo theo mùa cưới, nhắm vào cảm xúc của cặp đôi thay vì liệt kê dịch vụ.'
  }
];

export function getCase(slug){
  return cases.find(c => c.slug === slug);
}
