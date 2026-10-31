// Dự án SOHO đã công bố. Nguồn: sohoagency.vn/du-an/<slug> (đăng bởi SOHO, kiểm tra 10/2026).
// Ảnh bìa lấy từ cùng trang, đặt ở public/projects/<slug>.webp. Trang chi tiết: /du-an/<slug> (giữ đúng URL của site cũ).
// problem, solution: một dòng tóm tắt từ context và work, không thêm ý mới. services: slug dịch vụ liên quan.
// Luật viết chữ số 5: chỉ ghi con số khi chính trang dự án đã công bố; không thêm số mới.
// Dự án mới không có trên sohoagency.vn thì ghi nguồn riêng ở trường source, kèm limits (giới hạn của số liệu).
// meta: mô tả cho Google (≤160 ký tự), viết tay, không ghép từ context/result. metaTitle: chỉ khi tên + scope quá 60 ký tự.
export const cases = [
  {
    slug: 'le-viva-resort',
    problem: 'Resort chưa có định vị rõ ở Mũi Né, quảng cáo theo mùa lúc hiệu quả lúc không.',
    solution: 'Làm lại hình ảnh fanpage, chạy quảng cáo tin nhắn theo mùa nhắm khách đi nghỉ cuối tuần từ TP.HCM.',
    services: ['meta-tiktok-ads'],
    channel: 'meta-tiktok-ads',
    consent: 'full',
    consentRef: 'Trang dự án SOHO đã công bố',
    limits: ['Số liệu chỉ tính trên fanpage và quảng cáo Facebook.'],
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
      {value: '+135%', label: 'tương tác tự nhiên trên fanpage (thích, bình luận, chia sẻ) sau 2 tháng'},
      {value: '×2,3', label: 'tỉ lệ tin nhắn hỏi đặt phòng so với giai đoạn trước'},
      {value: '−35%', label: 'chi phí cho mỗi 1.000 lượt hiển thị quảng cáo'}
    ],
    result: 'Tỉ lệ tin nhắn hỏi đặt phòng gấp 2,3 lần giai đoạn trước.',
    meta: 'Le Viva Resort, khu nghỉ dưỡng ở Mũi Né: SOHO làm lại fanpage và chạy quảng cáo Facebook theo mùa. Tin nhắn hỏi đặt phòng gấp 2,3 lần giai đoạn trước.',
    context:
      'Resort chưa có định vị rõ ở thị trường Mũi Né. Fanpage đăng bài đều nhưng hình ảnh không thống nhất, chưa cho thấy trải nghiệm ở resort. Quảng cáo chạy theo mùa, lúc hiệu quả lúc không.',
    work: 'Làm lại hình ảnh và giọng văn của fanpage theo phong cách thiên nhiên, ven biển. Chạy quảng cáo tin nhắn và quảng cáo nhắc lại theo mùa, nhắm khách đi nghỉ cuối tuần từ TP.HCM, Đồng Nai, Bình Dương. Soạn sẵn tin nhắn chào và trả lời tự động để chốt đặt phòng nhanh hơn.'
  },
  {
    slug: 'king-decor-luxury',
    problem: 'Công trình đẹp nhưng website chưa trả lời được câu hỏi của chủ đầu tư.',
    solution: 'Sắp xếp lại website theo nhóm dịch vụ, viết bài trả lời từng câu hỏi của chủ đầu tư, chạy quảng cáo Facebook đúng tệp khách.',
    services: ['seo-tong-the', 'meta-tiktok-ads'],
    channel: 'meta-tiktok-ads',
    consent: 'full',
    consentRef: 'Trang dự án SOHO đã công bố',
    limits: ['Kết quả này đến từ quảng cáo Facebook, không phải từ SEO.'],
    name: 'King Decor Luxury',
    field: 'Thiết kế, thi công quán cà phê sân vườn, studio, homestay',
    scope: 'SEO website, quảng cáo Facebook',
    period: 'Từ 05/2025',
    image: '/projects/king-decor-luxury.webp',
    imageWidth: 1200,
    imageHeight: 542,
    imagePosition: 'center',
    result: 'Quảng cáo mang về yêu cầu tư vấn đều đặn, đúng nhóm chủ đầu tư. Công ty bớt phụ thuộc vào khách giới thiệu.',
    meta: 'King Decor Luxury, thiết kế thi công quán cà phê sân vườn: SOHO làm SEO website và quảng cáo Facebook, mang về yêu cầu tư vấn đều đặn, đúng nhóm chủ đầu tư.',
    context:
      'Công trình đẹp, năng lực thi công tốt, nhưng website chưa được tối ưu SEO. Chủ đầu tư thường tìm hiểu rất kỹ về mẫu, chi phí và diện tích trước khi liên hệ. Nội dung trên website chưa trả lời đủ những câu đó.',
    work: 'Sắp xếp lại website theo từng nhóm dịch vụ chính: quán cà phê sân vườn, studio áo cưới, phim trường. Viết bài trả lời đúng câu hỏi của chủ đầu tư về mẫu, chi phí và kinh nghiệm thi công. Chạy quảng cáo Facebook nhắm đúng nhóm chủ đầu tư để có yêu cầu tư vấn ngay, trong lúc chờ SEO có kết quả.'
  },
  {
    slug: 'kronos-luxury-timepieces',
    problem: 'Hình ảnh sang trọng, quảng cáo đẹp nhưng không ra đơn.',
    solution: 'Làm nội dung riêng cho từng dòng đồng hồ và từng dịp tặng quà, chạy quảng cáo tin nhắn theo mùa lễ.',
    services: ['meta-tiktok-ads'],
    channel: 'meta-tiktok-ads',
    consent: 'full',
    consentRef: 'Trang dự án SOHO đã công bố',
    limits: ['Dự án này chưa có số liệu cụ thể, kết quả chỉ ghi bằng mô tả.'],
    name: 'Kronos Luxury Timepieces',
    field: 'Phân phối đồng hồ cao cấp',
    scope: 'Fanpage, quảng cáo Facebook',
    period: 'Từ 02/2025',
    image: '/projects/kronos-luxury-timepieces.webp',
    imageWidth: 961,
    imageHeight: 457,
    imagePosition: 'center',
    result: 'Lượng tin nhắn hỏi hàng tăng mạnh vào các dịp lễ, Tết.',
    metaTitle: 'Kronos Luxury Timepieces: quảng cáo Facebook',
    meta: 'Kronos Luxury Timepieces, phân phối đồng hồ cao cấp: SOHO xây fanpage và chạy quảng cáo Facebook, tin nhắn hỏi hàng tăng mạnh dịp lễ, Tết.',
    context:
      'Hình ảnh sản phẩm đẹp, nhưng quảng cáo dễ rơi vào cảnh “đẹp mà không ra đơn”. Mỗi dòng đồng hồ như Cartier hay Patek Philippe có nhóm khách riêng. Các dịp lễ chưa được khai thác hết.',
    work: 'Làm nội dung riêng cho từng dòng sản phẩm và từng dịp tặng quà. Chạy quảng cáo tin nhắn theo mùa để chốt đơn, nhắm riêng nhóm doanh nhân và nhóm khách mua làm quà.'
  },
  {
    slug: 'helen-bridal',
    problem: 'Fanpage đông người theo dõi, nhưng nội dung chưa khiến khách đặt lịch chụp.',
    solution: 'Sắp xếp lại nội dung theo hành trình chuẩn bị cưới, chạy quảng cáo theo mùa cưới.',
    services: ['meta-tiktok-ads'],
    channel: 'meta-tiktok-ads',
    consent: 'full',
    consentRef: 'Trang dự án SOHO đã công bố',
    limits: ['Dự án này chưa có số liệu cụ thể, kết quả chỉ ghi bằng mô tả.'],
    name: 'Helen Bridal',
    field: 'Studio ảnh cưới phong cách Hàn Quốc',
    scope: 'Fanpage, quảng cáo Facebook',
    period: 'Từ 08/2024',
    image: '/projects/helen-bridal.webp',
    imageWidth: 950,
    imageHeight: 450,
    imagePosition: 'center',
    result: 'Lượng tin nhắn hỏi tư vấn tăng rõ vào mùa cưới.',
    meta: 'Helen Bridal, studio ảnh cưới phong cách Hàn Quốc: SOHO làm fanpage và quảng cáo Facebook, tin nhắn hỏi tư vấn tăng rõ vào mùa cưới.',
    context:
      'Fanpage đông người theo dõi, ảnh đẹp, nhưng nội dung chưa khiến khách đặt lịch. Thị trường studio cưới cạnh tranh gay gắt, nhiều nơi có phong cách na ná nhau.',
    work: 'Sắp xếp lại nội dung theo hành trình chuẩn bị cưới của cô dâu chú rể: concept mới, phim trường riêng, ảnh trước và sau trang điểm, ảnh thật của các cặp đôi. Chạy quảng cáo theo mùa cưới, chạm vào cảm xúc của cặp đôi thay vì liệt kê dịch vụ.'
  },
  // Studio 1 Nhà: 31/10/2026 SOHO xác nhận khách cho phép nêu tên, ảnh website và số (trước đó chỉ cho đăng số, không tên).
  // Số lấy từ Google Search Console của studio1nha.vn qua API ngày 23/10/2026; bản gốc ở docs/private (không commit).
  // Giữ slug cũ để không đổi đường dẫn.
  {
    slug: 'seo-studio-chup-anh-tphcm',
    problem: 'Website có nhiều trang về ảnh cưới và phim trường, nhưng chưa có trang nào cho người tìm “studio chụp ảnh” nói chung.',
    solution: 'Viết 1 bài tổng quan và 5 bài trả lời những câu khách hay hỏi khi chọn studio, liên kết các bài với nhau, cập nhật bài cũ.',
    services: ['seo-tong-the', 'content-marketing-pr'],
    channel: 'seo-tong-the',
    consent: 'full',
    consentRef: 'SOHO xác nhận khách cho phép nêu tên, ảnh website và số, 31/10/2026', // cần lưu tin nhắn/email khách đồng ý ở Drive
    name: 'Studio 1 Nhà',
    field: 'Studio chụp ảnh cưới và ảnh studio ở TP.HCM',
    scope: 'SEO website, nội dung',
    period: 'Từ 08/2026',
    image: '/projects/studio-1-nha.webp',
    imageWidth: 1600,
    imageHeight: 686,
    imagePosition: 'center',
    imageAlt: 'Trang chủ website studio1nha.vn, chụp ngày 31/10/2026',
    kpis: [
      {value: '102', label: 'lượt nhấp từ Google vào 6 trang mới, 22/09–22/10/2026'},
      {value: '4.771', label: 'lượt hiển thị trên Google của 6 trang đó trong cùng kỳ'},
      {value: '4,7', label: 'vị trí trung bình của bài tổng quan với từ khóa “studio chụp ảnh”, thường nằm trong top 5'}
    ],
    result: '6 trang mới có 102 lượt nhấp từ Google trong tháng đầu. Tổng lượt nhấp từ Google của cả website chưa thay đổi rõ.',
    meta: 'Studio 1 Nhà, studio chụp ảnh ở TP.HCM: SOHO làm SEO và viết nội dung, 6 trang mới có 102 lượt nhấp từ Google trong tháng đầu. Số liệu từ Search Console.',
    context:
      'Website đã có nhiều trang về ảnh cưới, phim trường và bảng giá. Nhưng người tìm “studio chụp ảnh” nói chung lại hỏi chuyện khác: chụp ảnh cặp đôi, giá bao nhiêu, cần chuẩn bị gì. Chưa có trang nào trả lời những câu đó.',
    work: 'Nghiên cứu từ khóa khách hay tìm khi chọn studio, xếp theo từng giai đoạn: tìm hiểu, so sánh, hỏi giá, liên hệ. Viết 1 bài tổng quan “studio chụp ảnh TP.HCM” và 5 bài trả lời câu khách hay hỏi: studio là gì, chụp ảnh cặp đôi, cần chuẩn bị gì, giá, nhận được những gì. Các bài liên kết qua lại với bài tổng quan. Cập nhật 13 bài cũ đang có thứ hạng: thêm thông tin mới năm 2026, mục lục, câu hỏi thường gặp, liên kết sang bảng giá và ảnh mẫu.',
    // 6 trang mới cộng lại, mỗi cột 7 ngày, kết thúc 22/10/2026. Các trang bắt đầu xuất hiện trên Google từ 22–25/09.
    series: {
      title: 'Lượt nhấp từ Google vào 6 trang mới, mỗi cột 7 ngày',
      note: 'Trước 22/09/2026, cả 6 trang chưa có lượt hiển thị nào trên Google.',
      weeks: [
        {label: '18–24/09', clicks: 4, impressions: 126},
        {label: '25/09–01/10', clicks: 25, impressions: 1073},
        {label: '02–08/10', clicks: 27, impressions: 1126},
        {label: '09–15/10', clicks: 22, impressions: 1094},
        {label: '16–22/10', clicks: 24, impressions: 1352}
      ]
    },
    limits: [
      'Đây mới là số liệu tháng đầu. Kế hoạch SEO của dự án tính theo 6 tháng.',
      'Tổng lượt nhấp từ Google của cả website trong 12 tuần sau khi bắt đầu gần bằng 12 tuần trước đó (1.395 so với 1.349). Phần tăng mới thấy ở các trang mới, chưa thấy trên toàn website.',
      'Đây là lượt nhấp từ Google, chưa phải lượt đặt lịch. SOHO chưa có số liệu đặt lịch đến từ các trang này.'
    ],
    source: 'Số liệu từ Google Search Console của studio1nha.vn, lấy ngày 23/10/2026.'
  },
  // Everest Logistics: SOHO nhận SEO từ 08/2026 (hồ sơ dự án trên Drive). Việc làm lấy từ báo cáo tháng 9 gửi khách.
  // Số lấy từ Google Search Console của everlog.com.vn qua API ngày 31/10/2026, đo tới 29/10 (ngày gần nhất chưa đủ số).
  {
    slug: 'everest-logistics',
    problem: 'Nhiều bài về thủ tục xuất nhập khẩu nằm từ trang 2 Google trở đi, rất ít lượt nhấp.',
    solution: 'Viết bài mới theo từ khóa khách hay tìm, tối ưu lại bài cũ và trang dịch vụ, liên kết các bài về trang dịch vụ.',
    services: ['seo-tong-the', 'content-marketing-pr'],
    channel: 'seo-tong-the',
    consent: 'full',
    consentRef: 'SOHO xác nhận khách cho phép nêu tên, ảnh website và số, 31/10/2026', // cần lưu tin nhắn/email khách đồng ý ở Drive
    name: 'Everest Logistics',
    field: 'Dịch vụ hải quan và vận chuyển quốc tế ở TP.HCM',
    scope: 'SEO website, nội dung',
    period: 'Từ 08/2026',
    image: '/projects/everest-logistics.webp',
    imageWidth: 1600,
    imageHeight: 686,
    imagePosition: 'center',
    imageAlt: 'Trang chủ website everlog.com.vn, chụp ngày 31/10/2026',
    kpis: [
      {value: '8.130', label: 'lượt hiển thị trên Google của bài “Cách in mã vạch hải quan”, 13/09–29/10/2026. Đây là bài SOHO viết mới, trước 13/09 chưa có lượt hiển thị nào'},
      {value: '4,8', label: 'vị trí trung bình của bài đó với từ khóa “in mã vạch hải quan pus1”, thường nằm trong top 5'},
      {value: '25', label: 'lượt nhấp từ Google vào bài “Giá EXW là gì” từ 01/09 đến 29/10/2026, sau khi SOHO sửa lại. Cả 8 tháng đầu năm 2026, bài chỉ có 1 lượt'}
    ],
    result: 'Bài mới về in mã vạch hải quan có 8.130 lượt hiển thị trên Google sau 7 tuần. Bài “Giá EXW là gì” sau khi sửa có 25 lượt nhấp trong 2 tháng.',
    meta: 'Everest Logistics, dịch vụ hải quan ở TP.HCM: SOHO làm SEO và nội dung, bài về in mã vạch hải quan đạt 8.130 lượt hiển thị trên Google sau 7 tuần.',
    context:
      'Everest Logistics làm thủ tục hải quan và vận chuyển hàng quốc tế. Website có nhiều bài về thủ tục xuất nhập khẩu. Nhưng các bài về điều kiện giao hàng (EXW, CIF, CFR, DDP) nằm từ trang 2 Google trở đi, gần như không có lượt nhấp.',
    work: 'Tháng 9/2026: viết mới 3 bài theo từ khóa khách hay tìm (in mã vạch tờ khai hải quan, Incoterms, gửi hàng đi Mỹ) và viết lại hoàn toàn bài về giá DDP. Sửa lại 7 bài cũ và 2 trang dịch vụ (vận chuyển đường biển, đường hàng không): bố cục, nội dung, tiêu đề và đoạn mô tả hiển thị trên Google. Thêm liên kết qua lại giữa các bài và về trang dịch vụ.',
    limits: [
      'Tính cả website, so 89 ngày từ 02/08/2026 với 89 ngày trước đó: lượt hiển thị trên Google tăng từ 8.256 lên 20.317, nhưng lượt nhấp giảm từ 399 xuống 313. Phần tăng lớn nhất đến từ bài in mã vạch. Nhiều người tìm “pus1” chỉ muốn vào thẳng trang của Hải quan, nên ít nhấp vào bài.',
      'Đây là lượt nhấp từ Google, chưa phải số khách hỏi giá. SOHO chưa có số khách liên hệ đến từ các bài này.',
      'Bài “Gửi hàng đi Mỹ” và “Incoterms” mới có dưới 70 lượt hiển thị mỗi bài, chưa đủ để đánh giá.'
    ],
    source: 'Số liệu từ Google Search Console của everlog.com.vn, lấy ngày 31/10/2026. Danh sách bài SOHO viết và sửa theo báo cáo tháng 9 gửi Everest Logistics.'
  },
  // May Mặc CTH: SOHO nhận chăm sóc website và SEO từ 08/2026, khi website mới làm xong, chưa làm SEO (hồ sơ dự án trên Drive).
  // Số lấy từ Google Search Console của maymaccth.com qua API ngày 31/10/2026. Search Console bắt đầu ghi số từ 14/08/2026.
  {
    slug: 'may-mac-cth',
    problem: 'Website bán đồng phục và áo thun vừa làm xong, gần như chưa xuất hiện trên Google.',
    solution: 'Chăm sóc website, tối ưu SEO từng trang và viết bài tin tức để website bắt đầu xuất hiện trên Google.',
    services: ['seo-tong-the'],
    channel: 'seo-tong-the',
    consent: 'full',
    consentRef: 'SOHO xác nhận khách cho phép nêu tên, ảnh website và số, 31/10/2026', // cần lưu tin nhắn/email khách đồng ý ở Drive
    name: 'May Mặc CTH',
    field: 'Xưởng may đồng phục và áo thun',
    scope: 'Chăm sóc website, SEO',
    period: 'Từ 08/2026',
    image: '/projects/may-mac-cth.webp',
    imageWidth: 1600,
    imageHeight: 686,
    imagePosition: 'center',
    imageAlt: 'Trang chủ website maymaccth.com, chụp ngày 31/10/2026',
    kpis: [
      {value: '192', label: 'lượt hiển thị trên Google trong tháng 10/2026, so với 53 lượt trong tháng 9 và 18 lượt cuối tháng 8'},
      {value: '263', label: 'lượt hiển thị trên Google từ 14/08 đến 30/10/2026'},
      {value: '24', label: 'lượt nhấp từ Google vào website trong cùng kỳ'}
    ],
    result: 'Website mới bắt đầu xuất hiện trên Google: tháng 10 có 192 lượt hiển thị, gấp 3,6 lần tháng 9.',
    meta: 'May Mặc CTH, xưởng may đồng phục: SOHO chăm sóc website và làm SEO, tháng 10 có 192 lượt hiển thị trên Google, gấp 3,6 lần tháng 9.',
    context: 'Xưởng may bán đồng phục và áo thun qua website mới. Website đã làm xong nhưng chưa làm SEO, gần như chưa xuất hiện trên Google.',
    work: 'SOHO nhận website khi chưa làm SEO gì. Việc đã làm: rà soát lại website, tối ưu từng trang theo kế hoạch đã gửi xưởng, viết bài tin tức cho website.',
    limits: [
      'Số còn nhỏ vì đây mới là 2,5 tháng đầu của một website mới.',
      'Các từ khóa như “xưởng may quần áo bảo hộ lao động” vẫn ở vị trí 46 đến 77, tức từ trang 5 Google trở đi.',
      'Search Console của website bắt đầu ghi số liệu từ 14/08/2026, nên không có số trước đó để so sánh.'
    ],
    source: 'Số liệu từ Google Search Console của maymaccth.com, lấy ngày 31/10/2026.'
  }
];

// Chỉ các dự án có phép công bố mới được dùng cho lưới, đường dẫn, sitemap và bằng chứng trang dịch vụ.
export const publishedCases = cases.filter(project => project.consent !== 'none');

export function getCase(slug) {
  return publishedCases.find(c => c.slug === slug);
}
