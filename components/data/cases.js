// Dự án SOHO đã công bố. Nguồn: sohoagency.vn/du-an/<slug> (đăng bởi SOHO, kiểm tra 10/2026).
// Ảnh bìa lấy từ cùng trang, đặt ở public/projects/<slug>.webp. Trang chi tiết: /du-an/<slug> (giữ đúng URL của site cũ).
// problem, solution: một dòng tóm tắt từ context và work, không thêm ý mới. services: slug dịch vụ liên quan.
// Luật viết chữ số 5: chỉ ghi con số khi chính trang dự án đã công bố; không thêm số mới.
// Dự án mới không có trên sohoagency.vn thì ghi nguồn riêng ở trường source, kèm limits (giới hạn của số liệu).
export const cases = [
  {
    slug: 'le-viva-resort',
    problem: 'Chưa có định vị rõ ở Mũi Né, đặt phòng theo mùa lúc được lúc không.',
    solution: 'Dựng lại hình ảnh fanpage, quảng cáo nhắn tin theo mùa cho khách cuối tuần từ TP.HCM.',
    services: ['meta-tiktok-ads'],
    channel: 'meta-tiktok-ads',
    consent: 'full',
    consentRef: 'Trang dự án SOHO đã công bố',
    limits: ['Chỉ dùng kết quả thuộc fanpage và quảng cáo Facebook.'],
    name: 'Le Viva Resort',
    field: 'Khu nghỉ dưỡng ven biển ở Mũi Né',
    scope: 'Fanpage, quảng cáo Facebook',
    period: 'Từ 01/2025',
    image: '/projects/le-viva-resort.webp',
    imageWidth: 1200,
    imageHeight: 457,
    imagePosition: 'center',
    // Số do SOHO công bố trên trang dự án
    kpis: [
      {value: '+135%', label: 'lượt thích, bình luận, chia sẻ không trả tiền trên fanpage, sau 2 tháng'},
      {value: '×2,3', label: 'tỉ lệ tin nhắn hỏi đặt phòng so với giai đoạn trước'},
      {value: '−35%', label: 'tiền quảng cáo cho mỗi 1.000 lần quảng cáo hiện ra'}
    ],
    result: 'Tỉ lệ tin nhắn hỏi đặt phòng gấp 2,3 lần giai đoạn trước.',
    context:
      'Resort chưa có định vị rõ ở thị trường Mũi Né. Fanpage đăng đều nhưng hình ảnh không thống nhất, chưa cho thấy trải nghiệm ở resort. Quảng cáo theo mùa lúc được lúc không.',
    work: 'Dựng lại hình ảnh và giọng nói của fanpage theo tinh thần thiên nhiên, ven biển. Chạy quảng cáo nhắn tin và nhắc lại theo mùa cho khách cuối tuần từ TP.HCM, Đồng Nai, Bình Dương. Viết sẵn tin chào và trả lời tự động để chốt đặt phòng nhanh hơn.'
  },
  {
    slug: 'king-decor-luxury',
    problem: 'Công trình đẹp nhưng website chưa trả lời được câu hỏi của chủ đầu tư.',
    solution: 'Tái cấu trúc website theo nhóm dịch vụ, viết bài cho từng câu hỏi, quảng cáo Facebook đúng tệp.',
    services: ['seo-tong-the', 'meta-tiktok-ads'],
    channel: 'meta-tiktok-ads',
    consent: 'full',
    consentRef: 'Trang dự án SOHO đã công bố',
    limits: ['Kết quả công bố thuộc quảng cáo Facebook, không áp dụng cho SEO.'],
    name: 'King Decor Luxury',
    field: 'Thiết kế, thi công quán cà phê sân vườn, studio, homestay',
    scope: 'SEO website, quảng cáo Facebook',
    period: 'Từ 05/2025',
    image: '/projects/king-decor-luxury.webp',
    imageWidth: 1200,
    imageHeight: 542,
    imagePosition: 'center',
    result: 'Quảng cáo tạo yêu cầu tư vấn đều, đúng nhóm chủ đầu tư; bớt phụ thuộc khách giới thiệu.',
    context:
      'Công trình đẹp, năng lực thi công tốt, nhưng website chưa tối ưu cho tìm kiếm. Chủ đầu tư tìm rất kỹ mẫu, chi phí, diện tích trước khi liên hệ, còn nội dung trên web chưa trả lời đủ.',
    work: 'Tái cấu trúc website theo từng nhóm dịch vụ chính: quán cà phê sân vườn, studio áo cưới, phim trường. Viết bài trả lời đúng câu hỏi của chủ đầu tư về mẫu, chi phí, kinh nghiệm thi công. Quảng cáo Facebook nhắm đúng nhóm chủ đầu tư để có yêu cầu tư vấn nhanh trong lúc chờ SEO lên.'
  },
  {
    slug: 'kronos-luxury-timepieces',
    problem: 'Hình ảnh sang trọng nhưng quảng cáo đẹp mà không ra đơn.',
    solution: 'Chia nội dung theo dòng đồng hồ và dịp tặng quà, quảng cáo nhắn tin theo mùa lễ.',
    services: ['meta-tiktok-ads'],
    channel: 'meta-tiktok-ads',
    consent: 'full',
    consentRef: 'Trang dự án SOHO đã công bố',
    limits: ['Không có số liệu công bố ngoài mô tả kết quả.'],
    name: 'Kronos Luxury Timepieces',
    field: 'Phân phối đồng hồ cao cấp',
    scope: 'Fanpage, quảng cáo Facebook',
    period: 'Từ 02/2025',
    image: '/projects/kronos-luxury-timepieces.webp',
    imageWidth: 961,
    imageHeight: 457,
    imagePosition: 'center',
    result: 'Tin nhắn hỏi mua tăng mạnh trong các mùa lễ, Tết.',
    context:
      'Hình ảnh sản phẩm đẹp nhưng quảng cáo dễ rơi vào "đẹp mà không ra đơn". Mỗi dòng đồng hồ như Cartier, Patek Philippe có nhóm khách khác nhau, các dịp lễ chưa được khai thác hết.',
    work: 'Chia nội dung theo từng dòng sản phẩm và từng dịp tặng quà. Chạy quảng cáo nhắn tin và chốt đơn theo mùa, nhắm riêng nhóm doanh nhân và nhóm mua quà.'
  },
  {
    slug: 'helen-bridal',
    problem: 'Đông người theo dõi nhưng nội dung chưa dẫn tới bước đặt lịch.',
    solution: 'Sắp nội dung theo hành trình cô dâu chú rể, quảng cáo theo mùa cưới.',
    services: ['meta-tiktok-ads'],
    channel: 'meta-tiktok-ads',
    consent: 'full',
    consentRef: 'Trang dự án SOHO đã công bố',
    limits: ['Không có số liệu công bố ngoài mô tả kết quả.'],
    name: 'Helen Bridal',
    field: 'Studio ảnh cưới phong cách Hàn Quốc',
    scope: 'Fanpage, quảng cáo Facebook',
    period: 'Từ 08/2024',
    image: '/projects/helen-bridal.webp',
    imageWidth: 950,
    imageHeight: 450,
    imagePosition: 'center',
    result: 'Tin nhắn tư vấn tăng rõ trong mùa cưới.',
    context:
      'Fanpage đông người theo dõi, ảnh đẹp, nhưng nội dung chưa dẫn khách tới bước đặt lịch. Thị trường studio cưới rất đông, nhiều nơi có phong cách giống nhau.',
    work: 'Sắp lại nội dung theo hành trình của cô dâu chú rể: concept mới, phim trường riêng, trước và sau trang điểm, ảnh cặp đôi thật. Quảng cáo theo mùa cưới, nhắm vào cảm xúc của cặp đôi thay vì liệt kê dịch vụ.'
  },
  // Dự án ẩn tên: khách đồng ý công bố số liệu nhưng xin giữ kín tên (23/10/2026). Không thêm tên, logo, tên miền, ảnh website khách.
  // Số lấy từ Google Search Console của khách qua API ngày 23/10/2026; bản gốc ở docs/private (không commit).
  // anonymous: không hiện ở trang chủ (khối dự án trang chủ dành cho thương hiệu có tên).
  {
    slug: 'seo-studio-chup-anh-tphcm',
    anonymous: true,
    problem: 'Website mạnh về ảnh cưới và phim trường, nhưng người tìm studio chụp ảnh nói chung chưa có trang nào để vào.',
    solution: 'Viết một bài tổng quan và 5 bài trả lời câu khách hay hỏi khi tìm studio, nối các bài với nhau, cập nhật bài cũ.',
    services: ['seo-tong-the', 'content-marketing-pr'],
    channel: 'seo-tong-the',
    consent: 'anonymous',
    consentRef: null, // cần: đường dẫn Drive tới tin nhắn/email khách đồng ý
    name: 'Studio chụp ảnh ở TP.HCM',
    field: 'Studio chụp ảnh cưới và ảnh studio. Khách đồng ý công bố số liệu, xin giữ kín tên',
    scope: 'SEO website, nội dung',
    period: 'Từ 08/2026',
    image: '/proof/seo-studio-chup-anh-tphcm/cover.webp',
    imageWidth: 1600,
    imageHeight: 686,
    imagePosition: 'center',
    imageAlt: 'Sơ đồ các bài SOHO viết: bài tổng quan Studio chụp ảnh TP.HCM nối với 5 bài về studio, cặp đôi, chuẩn bị, giá và sản phẩm bàn giao',
    kpis: [
      {value: '102', label: 'lượt khách bấm vào 6 trang mới từ Google, 22/09–22/10/2026'},
      {value: '4.771', label: 'lần 6 trang đó hiện ra trên Google trong cùng kỳ'},
      {value: '4,7', label: 'vị trí trung bình của bài tổng quan khi khách tìm “studio chụp ảnh”, tức thường đứng thứ 4 đến 5 ở trang đầu'}
    ],
    result: '6 trang mới có 102 lượt khách bấm vào từ Google trong tháng đầu. Tổng lượt khách vào cả website chưa đổi rõ.',
    context:
      'Website đã có nhiều trang về ảnh cưới, phim trường và bảng giá. Người tìm “studio chụp ảnh” nói chung, như chụp cặp đôi, hỏi giá, hỏi cần chuẩn bị gì, chưa có trang nào trả lời.',
    work: 'Tìm hiểu khách hay tìm gì khi chọn studio, xếp theo thứ tự: tìm hiểu, so sánh, hỏi giá, liên hệ. Viết một bài tổng quan “studio chụp ảnh TP.HCM” và 5 bài trả lời câu khách hay hỏi (studio là gì, chụp cặp đôi, cần chuẩn bị gì, giá, nhận được những gì), các bài dẫn qua lại với bài tổng quan. Cập nhật 13 bài cũ đang có thứ hạng: thông tin mới năm 2026, mục lục, câu hỏi thường gặp, đường dẫn sang bảng giá và ảnh mẫu.',
    // 6 trang mới cộng lại, mỗi cột 7 ngày, kết thúc 22/10/2026. Các trang bắt đầu xuất hiện trên Google từ 22–25/09.
    series: {
      title: 'Lượt khách bấm vào 6 trang mới từ Google, mỗi cột 7 ngày',
      note: 'Trước 22/09/2026 cả 6 trang chưa hiện ra lần nào trên Google.',
      weeks: [
        {label: '18–24/09', clicks: 4, impressions: 126},
        {label: '25/09–01/10', clicks: 25, impressions: 1073},
        {label: '02–08/10', clicks: 27, impressions: 1126},
        {label: '09–15/10', clicks: 22, impressions: 1094},
        {label: '16–22/10', clicks: 24, impressions: 1352}
      ]
    },
    limits: [
      'Đây là số tháng đầu. Kế hoạch SEO của dự án tính theo 6 tháng.',
      'Tổng lượt khách bấm vào cả website trong 12 tuần sau khi bắt đầu gần bằng 12 tuần trước đó (1.395 so với 1.349). Phần tăng mới thấy ở các trang mới, chưa thấy ở cả website.',
      'Đây là lượt bấm vào từ Google, chưa phải lượt đặt lịch. SOHO chưa có số đặt lịch đến từ các trang này.'
    ],
    source: 'Google Search Console của website khách, kéo qua API ngày 23/10/2026. Khách đồng ý công bố số liệu và xin giữ kín tên.'
  }
];

// Chỉ các dự án có phép công bố mới được dùng cho lưới, đường dẫn, sitemap và bằng chứng trang dịch vụ.
export const publishedCases = cases.filter(project => project.consent !== 'none');

export function getCase(slug) {
  return publishedCases.find(c => c.slug === slug);
}
