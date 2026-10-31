export const serviceGroups = ['Được tìm thấy trên Google và AI', 'Quảng cáo ra đơn', 'Website và thương hiệu', 'Nội dung và đo lường'];

/*
  Sáu dịch vụ chính hiện ở trang chủ (đúng danh mục SOHO đang bán trên sohoagency.vn), theo thứ tự hiển thị.
  coreTitle: tên ngắn trên thẻ; coreDesc: một câu lợi ích; icon: tên trong bộ Lucide (components/ui/Icon.js).
*/
export const coreServices = [
  {
    slug: 'seo-tong-the',
    coreTitle: 'SEO website',
    icon: 'search',
    art: '/services/seo.svg',
    coreDesc: 'Khách tìm trên Google là thấy bạn, đúng lúc họ đang cần.'
  },
  {
    slug: 'google-ads-shopping',
    coreTitle: 'Google Ads',
    icon: 'mouse-pointer-click',
    art: '/services/google-ads.svg',
    coreDesc: 'Có khách ngay. Tiền quảng cáo dồn vào đơn hàng có lãi, không chạy theo lượt nhấp.',
    featured: true
  },
  {
    slug: 'meta-tiktok-ads',
    coreTitle: 'Facebook Ads',
    icon: 'megaphone',
    art: '/services/meta-tiktok-ads.svg',
    coreDesc: 'Quảng cáo Facebook và TikTok nhắm tới tin nhắn và đơn hàng, không chỉ lượt xem.'
  },
  {
    slug: 'thiet-ke-website',
    coreTitle: 'Thiết kế website',
    icon: 'monitor-smartphone',
    art: '/services/website-design.svg',
    coreDesc: 'Website tải nhanh, chuẩn SEO, dẫn khách tới nút gọi, nhắn tin hoặc form liên hệ.'
  },
  {
    slug: 'nhan-dien-thuong-hieu',
    coreTitle: 'Nhận diện thương hiệu',
    icon: 'palette',
    art: '/services/brand-identity.svg',
    coreDesc: 'Logo, màu sắc và kiểu chữ thống nhất ở mọi nơi khách thấy bạn.'
  },
  {
    slug: 'thiet-ke-mobile-app',
    coreTitle: 'Thiết kế Mobile App',
    icon: 'smartphone',
    art: '/services/mobile-app.svg',
    coreDesc: 'App Android và iOS cho khách đặt lịch, đặt hàng hoặc để quản lý nội bộ.'
  }
];

export const servicePages = [
  {
    slug: 'seo-tong-the',
    menuDesc: 'Sửa lỗi website, sắp xếp lại bài viết để khách tìm trên Google là thấy bạn',
    deliverables: [
      'Danh sách lỗi kỹ thuật khiến Google đọc website kém',
      'Bộ từ khóa khách hay tìm, chia theo giai đoạn: tìm hiểu, so sánh, sắp mua',
      'Sơ đồ bài viết: bài tổng quan và các bài trả lời câu hỏi thường gặp',
      'Dàn ý cho từng trang, từng bài',
      'Kế hoạch đặt link qua lại giữa các bài viết và trang dịch vụ',
      'Báo cáo hằng tháng: bao nhiêu khách, bao nhiêu doanh thu đến từ Google'
    ],
    artifact: {image: null, need: 'Bản đồ từ khóa thật của một dự án, đã che tên khách hàng'},
    eyebrow: 'SEO tổng thể',
    title: 'SEO tổng thể cho doanh nghiệp muốn khách tự tìm đến từ Google',
    menuTitle: 'SEO tổng thể',
    category: 'Được tìm thấy trên Google và AI',
    intro:
      'Dành cho doanh nghiệp đã có website và sản phẩm rõ ràng. Website đã có lượt truy cập từ Google, nhưng chưa đều đặn ra cuộc gọi, tin nhắn hay đơn hàng.',
    promise:
      'SOHO làm chắc phần nền: sửa lỗi website, sắp xếp lại bài viết, cho Google biết rõ doanh nghiệp là ai và ai viết bài. Cách làm an toàn với Google. Kết quả đo bằng doanh thu.',
    insight:
      'Vấn đề ít khi nằm ở chỗ viết chưa đủ nhiều. Phần lớn website mất khách vì bài viết rời rạc, mỗi bài một hướng. Khách nhấp vào nhưng không thấy đúng điều mình cần. Bài viết cũng chưa cho thấy bạn thật sự giỏi nghề.',
    outcomes: [
      'Khách đang cần mua tìm trên Google là thấy bạn',
      'Thêm khách hàng tiềm năng từ Google, không chỉ thêm lượt truy cập',
      'Về lâu dài, bớt phụ thuộc vào quảng cáo'
    ],
    pains: [
      'Đã viết nhiều bài, nhưng tìm tên sản phẩm trên Google vẫn không thấy mình ở trang đầu',
      'Website có lượt truy cập, nhưng ít ai gọi, điền form hay đặt hàng',
      'Website có lỗi kỹ thuật mình không thấy, khiến Google đọc không hết và xếp hạng thấp'
    ],
    process: [
      'Rà lỗi kỹ thuật và cấu trúc các trang trên website',
      'Nghiên cứu từ khóa khách hay tìm, chia theo giai đoạn tìm hiểu, so sánh, sắp mua',
      'Viết bài tổng quan và các bài trả lời câu hỏi thường gặp, đặt link về trang dịch vụ',
      'Khai báo rõ doanh nghiệp là ai, ai viết bài, theo cách Google đọc được và tin tưởng',
      'Gửi báo cáo hằng tháng: lượt hiển thị, lượt nhấp, số khách và doanh thu đến từ Google'
    ],
    proof: 'Hợp với doanh nghiệp B2B, dịch vụ chuyên môn, shop online và doanh nghiệp nhỏ muốn có nguồn khách bền vững.'
  },
  {
    slug: 'seo-ai-overview',
    menuDesc: 'Để phần trả lời bằng AI trên Google hiểu đúng và nhắc đúng tên bạn',
    deliverables: [
      'Báo cáo Google đang hiểu doanh nghiệp và tác giả bài viết ra sao',
      'Danh sách câu hỏi khách hay hỏi, chia theo chủ đề',
      'Khai báo thông tin doanh nghiệp, tác giả và phần hỏi đáp theo chuẩn Google đọc được',
      'Mẫu trang trả lời thẳng vào câu hỏi của khách',
      'Bảng theo dõi các từ khóa có phần trả lời bằng AI của Google'
    ],
    artifact: {image: null, need: 'Ảnh chụp AI Overview có trích dẫn website khách hàng'},
    eyebrow: 'SEO & AI Overview',
    title: 'SEO để được nhắc tên trong phần trả lời bằng AI của Google',
    menuTitle: 'SEO cho AI tìm kiếm',
    category: 'Được tìm thấy trên Google và AI',
    intro:
      'Dành cho doanh nghiệp muốn khi khách hỏi Google, phần trả lời bằng AI (AI Overview) hiểu đúng, trích đúng và có nhắc tên mình.',
    promise:
      'SOHO sắp xếp lại bài viết quanh chuyên môn và thương hiệu của bạn. Bài nào cũng trả lời rõ, đủ bối cảnh, có tác giả thật và số liệu kiểm chứng được.',
    insight:
      'AI của Google không chỉ đọc một bài. Nó tổng hợp thông tin từ cả website: tác giả, thông tin doanh nghiệp, phần hỏi đáp và những trang khác có nhắc tới bạn.',
    outcomes: [
      'Bài viết của bạn dễ được AI trích dẫn khi trả lời khách',
      'Bớt bài sơ sài, bài trùng ý, bài thiếu bối cảnh',
      'Google xem tác giả và doanh nghiệp là nguồn đáng tin'
    ],
    pains: [
      'Bài đã lên trang đầu, nhưng ít lượt nhấp vì Google trả lời sẵn ngay phía trên',
      'Khách hỏi một câu, bài của mình lại vòng vo, không trả lời thẳng',
      'Tìm tên công ty mình, Google vẫn chưa biết mình là ai, làm nghề gì'
    ],
    process: [
      'Kiểm tra Google đang hiểu doanh nghiệp, tác giả và chủ đề của bạn ra sao',
      'Viết lại bài theo câu hỏi thật của khách',
      'Khai báo thông tin doanh nghiệp, tác giả và phần hỏi đáp bằng schema (đoạn mã giúp Google đọc đúng thông tin)',
      'Thêm bảng số liệu, các bước làm và ví dụ thật vào bài',
      'Theo dõi từ khóa nào có phần trả lời bằng AI và bài nào của bạn có cơ hội được trích dẫn'
    ],
    proof: 'Hợp với ngành mà khách phải tin mới mua: tài chính, giáo dục, y tế, pháp lý, công nghệ, doanh nghiệp B2B.'
  },
  {
    slug: 'local-seo-google-maps',
    menuDesc: 'Tối ưu Google Maps, đánh giá của khách và trang riêng cho từng khu vực',
    deliverables: [
      'Báo cáo kiểm tra hồ sơ doanh nghiệp trên Google Maps',
      'Bảng tên, địa chỉ, số điện thoại thống nhất ở mọi nơi',
      'Trang riêng cho từng khu vực',
      'Quy trình mời mọi khách để lại đánh giá, đúng chính sách Google',
      'Báo cáo cuộc gọi, lượt chỉ đường và thứ hạng của bạn trên Maps'
    ],
    artifact: {image: null, need: 'Báo cáo Google Business Profile trước và sau tối ưu'},
    eyebrow: 'Local SEO & Maps',
    title: 'SEO địa phương và Google Maps cho doanh nghiệp phục vụ theo khu vực',
    menuTitle: 'SEO địa phương & Google Maps',
    category: 'Được tìm thấy trên Google và AI',
    intro: 'Dành cho nhà hàng, phòng khám, showroom, trung tâm đào tạo, dịch vụ tại nhà và chuỗi cửa hàng.',
    promise:
      'SOHO tối ưu lại hồ sơ Google Maps, làm trang riêng cho từng khu vực và cách xin đánh giá từ khách. Mục tiêu: khách ở gần tìm là thấy bạn.',
    insight:
      'Người tìm chỗ "gần đây" thường đã muốn mua và chọn rất nhanh. Hồ sơ Maps ít đánh giá, ảnh sơ sài hay tên, địa chỉ, số điện thoại không khớp nhau là khách chọn ngay chỗ khác gần đó.',
    outcomes: [
      'Thêm cuộc gọi, lượt chỉ đường và lượt truy cập website từ Google Maps',
      'Xếp hạng cao hơn khi khách tìm kèm tên khu vực',
      'Tên, địa chỉ, số điện thoại khớp nhau trên website và Google Maps'
    ],
    pains: [
      'Nhiều người xem cửa hàng mình trên Maps, nhưng ít ai gọi',
      'Đối thủ có đánh giá tốt hơn nên luôn đứng trên mình',
      'Có nhiều chi nhánh mà địa chỉ, số điện thoại mỗi nơi ghi một kiểu'
    ],
    process: [
      'Rà hồ sơ Google Maps, kiểm tra tên, địa chỉ, số điện thoại có khớp ở mọi nơi không',
      'Sửa ngành nghề, danh sách dịch vụ, ảnh và bài đăng trên Maps',
      'Làm trang riêng trên website cho từng địa điểm, từng dịch vụ',
      'Gửi link đánh giá cho mọi khách sau khi phục vụ xong, trả lời từng đánh giá',
      'Theo dõi cuộc gọi, lượt chỉ đường, lịch hẹn và thứ hạng của bạn trên Maps'
    ],
    proof: 'Hợp với doanh nghiệp có cửa hàng thực tế, hoặc phục vụ khách trong một khu vực nhất định.'
  },
  {
    slug: 'google-ads-shopping',
    menuDesc: 'Quảng cáo trên Google đúng lúc khách đang tìm mua, dồn tiền vào nhóm hàng có lãi',
    deliverables: [
      'Báo cáo kiểm tra tài khoản quảng cáo và cách đang đo cuộc gọi, form, đơn hàng',
      'Cấu trúc chiến dịch tách riêng khách sắp mua và khách mới tìm hiểu',
      'Bộ mẫu quảng cáo',
      'Danh sách từ khóa loại trừ, để không tốn tiền cho lượt nhấp vô ích',
      'Danh sách sản phẩm cho Google Shopping, đã chuẩn hóa tên và thông tin',
      'Báo cáo chi phí mỗi đơn, ROAS và lãi sau giá vốn'
    ],
    artifact: {image: null, need: 'Cấu trúc chiến dịch hoặc báo cáo ROAS theo nhóm sản phẩm, đã che số nhạy cảm'},
    eyebrow: 'Google Ads & Shopping',
    title: 'Google Ads và Shopping tối ưu theo khách thật và lợi nhuận thật',
    menuTitle: 'Google Ads & Shopping',
    category: 'Quảng cáo ra đơn',
    intro: 'Dành cho doanh nghiệp cần khách ngay, nhưng không muốn trả tiền cho những lượt nhấp rẻ từ người không có ý định mua.',
    promise:
      'SOHO chạy quảng cáo tìm kiếm, quảng cáo mua sắm (có ảnh và giá sản phẩm) và Performance Max (Google tự chọn nơi hiển thị). Ngân sách chia theo mức độ sẵn sàng mua của khách, đơn hàng thật và lợi nhuận của từng nhóm hàng.',
    insight:
      'Tài khoản Google Ads đi sai hướng khi chỉ chạy theo con số dễ đạt. Lúc đó hệ thống không còn phân biệt được khách thật, đơn có lãi với người chỉ xem cho biết.',
    outcomes: [
      'Bớt tiền cho những từ khóa không mang về khách',
      'Mỗi đồng quảng cáo cho nhóm hàng có lãi mang về nhiều doanh thu hơn',
      'Đơn hàng thật được gửi ngược về Google Ads, để Google tối ưu theo khách mua thật'
    ],
    pains: [
      'Quảng cáo nhiều lượt nhấp, nhưng nhân viên gọi lại toàn người không định mua',
      'Để Google tự chạy Performance Max, tiền vẫn tiêu đều mà không biết từ khóa nào ra khách',
      'Báo cáo quảng cáo nhìn đẹp, nhưng không biết mình lãi thật bao nhiêu'
    ],
    process: [
      'Rà cách đang đo cuộc gọi, tin nhắn, đơn hàng và cấu trúc tài khoản',
      'Chia từ khóa theo mức độ sẵn sàng mua của khách và giá trị của từng nhóm',
      'Viết quảng cáo và landing page khớp đúng điều khách đang tìm',
      'Điều chỉnh giá thầu dựa trên khách hàng và đơn hàng thật',
      'Báo cáo chi phí mỗi đơn, mỗi khách mua, ROAS (mỗi đồng quảng cáo mang về bao nhiêu doanh thu) và lãi sau giá vốn'
    ],
    proof: 'Hợp với shop online, doanh nghiệp B2B cần khách hàng tiềm năng, dịch vụ giá cao và doanh nghiệp đang tăng ngân sách quảng cáo.'
  },
  {
    slug: 'meta-tiktok-ads',
    menuDesc: 'Liên tục thử mẫu quảng cáo mới, chạy quảng cáo bám đuổi người đã quan tâm',
    deliverables: [
      'Chân dung khách hàng và lý do họ còn chần chừ',
      'Bảng ý tưởng mẫu quảng cáo',
      'Kế hoạch chạy thử các mẫu quảng cáo',
      'Cài mã theo dõi của Facebook (Pixel) lên website, gửi cả đơn hàng thật về Facebook',
      'Báo cáo mẫu nào ra khách và khách đó có mua thật không'
    ],
    artifact: {image: null, need: 'Ma trận creative thật cùng các mẫu quảng cáo đã chạy'},
    eyebrow: 'Meta & TikTok Ads',
    title: 'Quảng cáo Facebook và TikTok cho thương hiệu cần thêm khách và đơn hàng',
    menuTitle: 'Meta & TikTok Ads',
    category: 'Quảng cáo ra đơn',
    intro: 'Dành cho sản phẩm mà khách cần xem ảnh, video và nghe người đã mua kể lại rồi mới quyết định.',
    promise:
      'SOHO liên tục thử mẫu quảng cáo mới, nhắm đúng tệp khách và chạy quảng cáo bám đuổi người đã quan tâm. Mục tiêu là tiền quảng cáo ra đơn hàng, hoặc ra khách hàng tiềm năng dễ chốt.',
    insight:
      'Quảng cáo Facebook, Instagram và TikTok không hiệu quả hơn nhờ đổi tệp khách liên tục. Điều quyết định là mẫu quảng cáo kể chuyện gì, ưu đãi gì và landing page sau khi khách nhấp. Tiếp theo là phản hồi của nhân viên bán hàng: khách đó tốt hay không.',
    outcomes: [
      'Luôn có mẫu quảng cáo mới đang chạy thử',
      'Không phụ thuộc vào một mẫu quảng cáo duy nhất',
      'Thông tin khách từ form, tin nhắn, sổ bán hàng và website được nối với nhau'
    ],
    pains: [
      'Mẫu quảng cáo chạy vài ngày là người xem chán, chi phí mỗi khách tăng vọt',
      'Tin nhắn về nhiều, nhưng chốt được rất ít',
      'Chạy nhiều mẫu mà không biết mẫu nào ra khách mua thật'
    ],
    process: [
      'Tìm hiểu khách là ai, vì sao họ chần chừ, điều gì khiến họ mua',
      'Lên ý tưởng theo câu mở đầu, ưu đãi, bằng chứng và dạng ảnh hay video',
      'Chạy thử ngắn để tìm mẫu ra khách',
      'Dồn ngân sách cho tệp khách mang về đơn hàng thật',
      'Báo cáo từng mẫu: chi phí mỗi khách, khách có mua thật không, mang về bao nhiêu doanh thu'
    ],
    proof: 'Hợp với sản phẩm bán cho người tiêu dùng, giáo dục, làm đẹp, bất động sản, dịch vụ địa phương và sản phẩm khách cần cân nhắc lâu.'
  },
  {
    slug: 'cro-landing-page',
    menuDesc: 'Tăng khách liên hệ từ chính lượng truy cập website đang có',
    deliverables: [
      'Báo cáo các bước khách đi qua trên website, kèm bản đồ nhiệt',
      'Danh sách chỗ khiến khách bỏ ngang trên từng màn hình',
      'Bản viết lại phần đầu trang, nút bấm và phần bằng chứng',
      'Kế hoạch A/B test để giữ lại bản trang tốt hơn',
      'Báo cáo kết quả từng lần thử'
    ],
    artifact: {image: null, need: 'Landing page trước và sau khi viết lại'},
    eyebrow: 'CRO landing page',
    title: 'Tối ưu tỉ lệ chuyển đổi: biến lượt truy cập thành khách hàng',
    menuTitle: 'Tối ưu chuyển đổi (CRO)',
    category: 'Quảng cáo ra đơn',
    intro: 'Dành cho doanh nghiệp đã có lượt truy cập từ Google hoặc quảng cáo, nhưng ít ai điền form, gọi điện hay đặt lịch.',
    promise:
      'SOHO xem khách dùng trang ra sao: nội dung, form, bằng chứng và tốc độ tải trang. Mục tiêu là thêm khách mà không phải tăng tiền quảng cáo.',
    insight:
      'Landing page thường không thiếu thông tin, mà sắp sai thứ tự. Khách cần thấy đúng vấn đề mình gặp, cách bạn giải quyết, bằng chứng, rồi biết bấm vào đâu tiếp.',
    outcomes: [
      'Thêm khách từ cùng lượng truy cập',
      'Giảm chi phí mỗi khách mà không phải trả giá quảng cáo cao hơn',
      'Tìm ra thông điệp và ưu đãi hiệu quả để dùng cho cả các kênh khác'
    ],
    pains: [
      'Lượt truy cập nhiều, mà form gửi về thì ít',
      'Khách mở trang trên điện thoại rồi thoát ra ngay',
      'Trang nói nhiều về công ty mình, ít nói điều khách đang cần'
    ],
    process: [
      'Xem số liệu, bản đồ nhiệt (chỗ khách nhấp và cuộn tới) và các bước điền form',
      'Tìm chỗ khách bị vướng và lý do họ chần chừ trên từng màn hình',
      'Viết lại phần đầu trang, nút bấm và phần bằng chứng',
      'Chạy A/B test (hai bản trang chạy song song), thử trước chỗ ảnh hưởng nhiều nhất',
      'Báo cáo tỉ lệ chuyển đổi tăng bao nhiêu và khách có đúng người cần mua không'
    ],
    proof: 'Hợp với doanh nghiệp đang trả tiền quảng cáo để có lượt truy cập, hoặc đã có khách từ Google mà chưa tận dụng hết.'
  },
  {
    slug: 'thiet-ke-website',
    menuDesc: 'Website tải nhanh, chuẩn SEO, tự sửa được, dẫn khách tới chỗ liên hệ',
    deliverables: [
      'Sơ đồ trang và hành trình của khách từ lúc vào web tới lúc liên hệ',
      'Bản thiết kế giao diện trên máy tính và điện thoại',
      'Website hoàn chỉnh, đã kiểm tra kỹ',
      'Cài sẵn đo lường cuộc gọi, tin nhắn và form liên hệ',
      'Tài liệu và buổi hướng dẫn để bạn tự sửa website'
    ],
    artifact: {image: null, need: 'Ảnh chụp một website SOHO đã làm, đã được khách đồng ý'},
    eyebrow: 'Thiết kế website',
    title: 'Thiết kế website cho doanh nghiệp cần một công cụ bán hàng chạy cả ngày',
    menuTitle: 'Thiết kế website',
    category: 'Website và thương hiệu',
    intro:
      'Dành cho doanh nghiệp cần website mới hoặc làm lại. Website đúng nhận diện thương hiệu, chạy tốt trên điện thoại, chuẩn SEO và đo được khách liên hệ.',
    promise:
      'SOHO thiết kế riêng, không dùng mẫu có sẵn. SOHO tìm hiểu ngành và khách hàng của bạn, lên sơ đồ trang rồi mới thiết kế và lập trình. Cuối cùng là đưa nội dung lên và hướng dẫn bạn tự quản lý.',
    insight:
      'Website là nơi khách tìm đến đầu tiên để hiểu về bạn. Web đẹp mà tải chậm trên điện thoại, hoặc không dẫn khách tới chỗ liên hệ, thì tiền quảng cáo và SEO đều phí.',
    outcomes: [
      'Giao diện đúng logo, màu sắc, kiểu chữ, hiển thị tốt trên cả máy tính và điện thoại',
      'Mỗi trang dẫn khách tới một việc rõ ràng: gọi, nhắn tin, đặt lịch hoặc mua hàng',
      'Sẵn sàng làm SEO và chạy quảng cáo: tải nhanh, đo được cuộc gọi, tin nhắn, đơn đặt'
    ],
    pains: [
      'Website cũ tải chậm, xem trên điện thoại thì chữ và ảnh bị vỡ',
      'Có website nhưng gần như không ai liên hệ qua đó',
      'Muốn sửa một dòng chữ cũng phải nhờ người khác, chờ vài ngày'
    ],
    process: [
      'Nghe bạn nói nhu cầu, tìm hiểu ngành và khách hàng của bạn',
      'Lên định hướng, sơ đồ trang và hành trình của khách trên web',
      'Thiết kế giao diện theo logo, màu sắc, kiểu chữ của bạn',
      'Lập trình, tối ưu tốc độ trên điện thoại, kiểm tra từng tính năng',
      'Đưa nội dung lên, ra mắt website và hướng dẫn bạn quản lý. Sau đó SOHO lo bảo trì.'
    ],
    proof: 'Hợp với doanh nghiệp cần website mới, kể cả web có đặt lịch, thanh toán, quản lý khách hàng, gửi email cho khách hay nhiều ngôn ngữ.'
  },
  {
    slug: 'nhan-dien-thuong-hieu',
    menuDesc: 'Logo, màu sắc, kiểu chữ và cách dùng thống nhất ở mọi nơi khách thấy bạn',
    deliverables: [
      'Logo và các phiên bản dùng cho từng nơi',
      'Bảng màu và kiểu chữ',
      'Mẫu ứng dụng sẵn: danh thiếp, giấy tờ văn phòng, bao bì, ảnh mạng xã hội',
      'File gốc để chỉnh sửa, file in và file xem nhanh',
      'Sổ tay hướng dẫn dùng logo, màu sắc, kiểu chữ cho đúng'
    ],
    artifact: {image: null, need: 'Ảnh một bộ nhận diện SOHO đã làm, đã được khách đồng ý'},
    eyebrow: 'Nhận diện thương hiệu',
    title: 'Thiết kế nhận diện thương hiệu nhất quán từ online đến cửa hàng',
    menuTitle: 'Nhận diện thương hiệu',
    category: 'Website và thương hiệu',
    intro: 'Dành cho doanh nghiệp mới ra mắt, muốn làm mới hình ảnh, hoặc đang có hình ảnh mỗi nơi một kiểu.',
    promise:
      'SOHO thiết kế logo, màu sắc, kiểu chữ và phong cách hình ảnh. Tất cả dựa trên cá tính thương hiệu, khách hàng bạn hướng tới và điều bạn muốn khách nhớ về mình. Bộ nhận diện dùng được ngay trên website, mạng xã hội, bao bì và giấy tờ văn phòng.',
    insight:
      'Mỗi lần khách gặp thương hiệu là một lần họ nhớ thêm, hoặc quên bạn. Chỉ một chỗ lệch màu, lệch chữ hay lệch logo cũng đủ làm khách bớt thiện cảm và phí công bạn đã xây.',
    outcomes: [
      'Khách nhận ra bạn nhanh hơn ở mọi nơi',
      'Hình ảnh thống nhất trên website, mạng xã hội, bao bì và tại cửa hàng',
      'Có sổ tay hướng dẫn để nhân viên và đối tác tự làm đúng'
    ],
    pains: [
      'Bảng hiệu, danh thiếp, fanpage mỗi chỗ một logo, một màu',
      'Nhìn qua thấy na ná đối thủ cùng ngành, khách khó nhớ tên mình',
      'Logo xem trên máy thì đẹp, nhưng in ra hay đưa vào quảng cáo thì khó dùng'
    ],
    process: [
      'Trao đổi phạm vi công việc, báo giá và ký hợp đồng',
      'Tìm hiểu doanh nghiệp: điều bạn coi trọng, định hướng phát triển, cá tính thương hiệu',
      'Nghiên cứu ngành, khách hàng mục tiêu và đối thủ',
      'Đề xuất định hướng thiết kế: màu sắc, kiểu chữ, phong cách hình ảnh, dáng logo',
      'Thiết kế logo rồi áp dụng vào danh thiếp, giấy tờ, bao bì, mạng xã hội',
      'Trình bày, chỉnh sửa theo góp ý của bạn, rồi bàn giao đủ file kèm sổ tay hướng dẫn'
    ],
    proof: 'Hợp với doanh nghiệp muốn có nhiều phương án để chọn, làm theo mốc thời gian rõ ràng và ít phải sửa đi sửa lại.'
  },
  {
    slug: 'thiet-ke-mobile-app',
    menuDesc: 'App Android và iOS cho khách đặt lịch, đặt hàng hoặc để quản lý nội bộ',
    deliverables: [
      'Bản mô tả các tính năng của app',
      'Bản phác màn hình và các bước người dùng thao tác',
      'Thiết kế giao diện',
      'App Android và iOS (iPhone) đã kiểm tra kỹ',
      'Kế hoạch bảo trì và cập nhật'
    ],
    artifact: {image: null, need: 'Ảnh màn hình một app SOHO đã làm, đã được khách đồng ý'},
    eyebrow: 'Thiết kế Mobile App',
    title: 'Thiết kế và phát triển ứng dụng di động cho Android và iOS',
    menuTitle: 'Thiết kế Mobile App',
    category: 'Website và thương hiệu',
    intro: 'Dành cho doanh nghiệp cần app đặt lịch, đặt hàng, bán hàng, dịch vụ tiện ích hoặc quản lý nội bộ.',
    promise:
      'SOHO đồng hành từ ý tưởng, phác màn hình, thiết kế, lập trình tới bảo trì và cập nhật. App có thể kết nối với website, trang quản trị hoặc phần mềm quản lý khách hàng (CRM) bạn đang dùng.',
    insight:
      'App đáng làm khi khách quay lại thường xuyên để đặt lịch, đặt hàng hay tích điểm. Vì vậy câu hỏi đầu tiên là: khách mở app để làm gì? Trả lời xong mới vẽ màn hình.',
    outcomes: [
      'Dễ dùng, chạy mượt trên Android và iOS',
      'Kết nối với website và phần mềm đang dùng, không phải nhập một thông tin hai lần',
      'Có người bảo trì và cập nhật sau khi ra mắt'
    ],
    pains: [
      'Khách phải gọi điện hoặc nhắn tin mới đặt được lịch, đặt được hàng',
      'Thông tin khách nằm rải rác mỗi nơi một ít, không ai nắm hết',
      'App đang có thì chậm, hay lỗi, mà không còn ai cập nhật'
    ],
    process: [
      'Làm rõ ý tưởng và những việc khách sẽ làm trên app',
      'Phác màn hình và các bước người dùng thao tác',
      'Thiết kế giao diện dễ nhìn, dễ bấm',
      'Lập trình, kết nối app với website hoặc trang quản trị',
      'Kiểm tra, đưa app lên Google Play và App Store, rồi bảo trì, cập nhật'
    ],
    proof: 'Hợp với doanh nghiệp cần app đặt lịch, đặt hàng, bán hàng online, dịch vụ tiện ích hoặc app quản lý nội bộ.'
  },
  {
    slug: 'content-marketing-pr',
    menuDesc: 'Bài viết chuyên sâu, câu chuyện khách hàng thật và đề tài để báo chí đưa tin',
    deliverables: [
      'Bảng chủ đề và câu hỏi khách hay hỏi',
      'Lịch đăng bài',
      'Bài tổng quan và các bài trả lời câu hỏi thường gặp',
      'Câu chuyện khách hàng',
      'Tài liệu để nhân viên bán hàng gửi khách',
      'Báo cáo số khách đã đọc bài trước khi mua'
    ],
    artifact: {image: null, need: 'Sơ đồ topic cluster thật của một dự án'},
    eyebrow: 'Content marketing & PR',
    title: 'Nội dung và PR tạo niềm tin trước khi khách mua',
    menuTitle: 'Nội dung & PR',
    category: 'Nội dung và đo lường',
    intro:
      'Dành cho doanh nghiệp muốn bài viết có mục đích, không chỉ đăng cho đều. Mỗi bài phải giúp khách tìm thấy bạn trên Google, hỗ trợ bán hàng và tạo niềm tin.',
    promise:
      'SOHO viết bài chuyên sâu, câu chuyện khách hàng thật và đề tài cho báo chí. Mỗi loại phục vụ một giai đoạn: khách mới tìm hiểu, đang so sánh hay sắp mua.',
    insight:
      'Khách không đọc bài để nghe quảng cáo. Họ đọc để khỏi mua nhầm: so sánh các lựa chọn, hiểu chi phí, thấy bằng chứng và tin bạn làm được.',
    outcomes: [
      'Có bài cho từng giai đoạn: tìm hiểu, so sánh, sắp mua',
      'Khách nhìn bạn như người am hiểu nghề',
      'Nhân viên bán hàng có sẵn tài liệu để gửi khách'
    ],
    pains: [
      'Đăng bài đều đặn mà không thấy khách nào tìm tới từ đó',
      'Bài viết na ná đối thủ, đọc không thấy cái riêng của mình',
      'Nhân viên bán hàng không có câu chuyện khách hàng, bài hướng dẫn hay bài so sánh để gửi khách'
    ],
    process: [
      'Tìm hiểu khách đang cần gì và vì sao còn chần chừ',
      'Viết bài tổng quan, bài trả lời câu hỏi thường gặp, câu chuyện khách hàng và tài liệu bán hàng',
      'Biến số liệu nội bộ thành bài viết có góc nhìn riêng',
      'Biên tập bài cho phù hợp với Google, mạng xã hội và báo chí',
      'Đo số khách đã đọc bài trước khi mua và mức độ quan tâm của người đọc'
    ],
    proof: 'Hợp với doanh nghiệp B2B, dịch vụ chuyên môn, giáo dục, công nghệ và thương hiệu cần xây niềm tin lâu dài.'
  },
  {
    slug: 'ga4-looker-dashboard',
    menuDesc: 'Đo đúng cuộc gọi, tin nhắn, đơn hàng và gom báo cáo về một chỗ',
    deliverables: [
      'Kế hoạch đo lường: đo những gì, đo ở đâu',
      'Quy tắc đặt tên thống nhất cho từng hành động của khách trên web',
      'Cài đặt GA4, Google Tag Manager và mã theo dõi của Meta',
      'Báo cáo trên Looker, làm riêng cho từng người xem',
      'Hướng dẫn đọc báo cáo'
    ],
    artifact: {image: null, need: 'Một trang Looker dashboard thật, đã che số nhạy cảm'},
    eyebrow: 'GA4 & Looker',
    title: 'GA4 và báo cáo Looker giúp bạn thấy tiền đến từ đâu',
    menuTitle: 'Đo lường & báo cáo GA4',
    category: 'Nội dung và đo lường',
    intro:
      'Dành cho doanh nghiệp chạy marketing trên nhiều kênh nhưng không tin được số liệu, hoặc không biết kênh nào thật sự mang khách về.',
    promise:
      'SOHO cài đặt đo lường những hành động quan trọng của khách và dựng báo cáo. Lượt truy cập, khách hàng tiềm năng, đơn hàng và doanh thu nằm chung một chỗ.',
    insight:
      'Báo cáo tốt không phải là có nhiều biểu đồ. Báo cáo tốt trả lời được: kênh nào đang mang khách về, tiền nào đang phí, việc gì cần làm tiếp.',
    outcomes: [
      'Bộ phận marketing và bán hàng nhìn chung một bộ số',
      'Không còn cảnh mỗi kênh báo một con số rồi cãi nhau',
      'Phân bổ ngân sách quảng cáo theo chi phí mỗi đơn và doanh thu'
    ],
    pains: [
      'GA4 lúc thiếu đơn, lúc đếm sai cuộc gọi, tin nhắn',
      'Số liệu trên tài khoản quảng cáo, sổ bán hàng và website không khớp nhau',
      'Phải tự ngồi gom số từ nhiều nơi, mất quá nhiều thời gian'
    ],
    process: [
      'Kiểm tra hiện đang đo những gì và số liệu chạy từ đâu về đâu',
      'Chốt những hành động cần đo và đặt tên thống nhất',
      'Cài GA4 (công cụ đo lường của Google), Google Tag Manager (nơi quản lý mã theo dõi) và mã theo dõi của Meta khi cần',
      'Dựng báo cáo trên Looker (công cụ làm báo cáo của Google), riêng cho từng người xem',
      'Soát lại số liệu, hướng dẫn bạn đọc báo cáo mỗi tuần'
    ],
    proof: 'Hợp với doanh nghiệp bán trên nhiều kênh, nhiều trang bán hàng và có nhiều bộ phận cần nhìn chung một bộ số.'
  },
  {
    slug: 'tu-van-chien-luoc-sprint',
    menuDesc: 'Biết nên làm gì trước trong 30 đến 90 ngày tới',
    deliverables: [
      'Biên bản buổi trao đổi',
      'Báo cáo kiểm tra website, quảng cáo và nội dung hiện có',
      'Phân tích đối thủ đang làm gì',
      'Lộ trình 30 đến 90 ngày',
      'Danh sách việc cần làm và chỉ tiêu cần đạt'
    ],
    artifact: {image: null, need: 'Một trang roadmap sprint đã bàn giao, đã che tên khách hàng'},
    eyebrow: 'Growth strategy sprint',
    title: 'Tư vấn lộ trình marketing để biết nên làm gì trước',
    menuTitle: 'Tư vấn lộ trình 90 ngày',
    category: 'Nội dung và đo lường',
    intro:
      'Dành cho chủ doanh nghiệp, người phụ trách marketing hoặc bán hàng. Bạn cần biết việc gì làm trước, rồi mới chi tiền cho SEO, quảng cáo, nội dung hay đo lường.',
    promise:
      'SOHO kiểm tra nhanh để tìm chỗ đang nghẽn. Sau đó ước tính việc nào đem lại hiệu quả nhiều nhất và xếp việc cho 30 đến 90 ngày tới.',
    insight:
      'Doanh nghiệp ít khi thiếu ý tưởng marketing. Cái thiếu là biết làm gì trước, dựa trên lợi nhuận từng sản phẩm, cách khách mua, sức của đội ngũ và số liệu đang có.',
    outcomes: [
      'Có lộ trình 30 đến 90 ngày: rõ việc, rõ chỉ tiêu, rõ người làm',
      'Biết kênh nào làm trước, kênh nào tạm dừng',
      'Bớt rủi ro đổ tiền vào một chiến dịch khi chưa sẵn sàng'
    ],
    pains: [
      'Không biết nên làm SEO, quảng cáo hay nội dung trước',
      'Đã đổi mấy bên làm marketing mà mọi thứ vẫn rời rạc',
      'Nhân viên ai cũng bận, mà không rõ việc nào giúp bán được hàng'
    ],
    process: [
      'Trao đổi nhanh về mục tiêu, lợi nhuận và cách bạn đang bán hàng',
      'Kiểm tra website, quảng cáo, nội dung và số liệu hiện tại',
      'Xem thị trường, đối thủ và chỗ nào nên làm trước',
      'Lập lộ trình việc cần làm trong 30 đến 90 ngày',
      'Bàn giao danh sách việc, chỉ tiêu cần đạt và cách kiểm tra'
    ],
    proof: 'Hợp với doanh nghiệp muốn tăng trưởng nhanh, doanh nghiệp B2B có khách cân nhắc lâu và đội ngũ muốn ra quyết định marketing gọn gàng.'
  }
];

export function getCoreServices() {
  return coreServices.map(c => ({...servicePages.find(s => s.slug === c.slug), ...c}));
}

export function getServicePage(slug) {
  return servicePages.find(service => service.slug === slug);
}

export function getServicesByGroup() {
  return serviceGroups.map(group => ({
    group,
    items: servicePages.filter(service => service.category === group)
  }));
}
