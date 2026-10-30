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
    coreDesc: 'Khách tự tìm thấy bạn trên Google khi đang có nhu cầu.'
  },
  {
    slug: 'google-ads-shopping',
    coreTitle: 'Google Ads',
    icon: 'mouse-pointer-click',
    art: '/services/google-ads.svg',
    coreDesc: 'Có khách ngay, tiền quảng cáo dồn vào đơn có lãi chứ không chạy theo lượt bấm.',
    featured: true
  },
  {
    slug: 'meta-tiktok-ads',
    coreTitle: 'Facebook Ads',
    icon: 'megaphone',
    art: '/services/meta-tiktok-ads.svg',
    coreDesc: 'Quảng cáo Facebook và TikTok khiến người xem muốn mua, nhắn tin hỏi và đặt hàng.'
  },
  {
    slug: 'thiet-ke-website',
    coreTitle: 'Thiết kế website',
    icon: 'monitor-smartphone',
    art: '/services/website-design.svg',
    coreDesc: 'Website mở nhanh, Google dễ đọc, dẫn khách tới chỗ gọi, nhắn hoặc để lại số.'
  },
  {
    slug: 'nhan-dien-thuong-hieu',
    coreTitle: 'Nhận diện thương hiệu',
    icon: 'palette',
    art: '/services/brand-identity.svg',
    coreDesc: 'Logo, màu và kiểu chữ giống nhau ở mọi nơi khách gặp bạn.'
  },
  {
    slug: 'thiet-ke-mobile-app',
    coreTitle: 'Thiết kế Mobile App',
    icon: 'smartphone',
    art: '/services/mobile-app.svg',
    coreDesc: 'App Android và iOS để khách đặt lịch, đặt hàng, hoặc để quản lý nội bộ.'
  }
];

export const servicePages = [
  {
    slug: 'seo-tong-the',
    menuDesc: 'Sửa lỗi website, sắp lại bài viết và làm Google tin để khách tự tìm đến',
    deliverables: [
      'Danh sách lỗi website đang làm Google đọc kém',
      'Bảng các câu khách hay gõ trên Google, chia theo lúc tìm hiểu, so sánh, sắp mua',
      'Sơ đồ bài tổng quan và các bài trả lời câu khách hay hỏi',
      'Dàn ý cho từng trang, từng bài',
      'Kế hoạch nối các trang với nhau bằng đường dẫn trong bài',
      'Báo cáo mỗi tháng: bao nhiêu khách, bao nhiêu doanh thu đến từ Google'
    ],
    artifact: {image: null, need: 'Bản đồ từ khóa thật của một dự án, đã che tên khách hàng'},
    eyebrow: 'SEO tổng thể',
    title: 'SEO tổng thể cho doanh nghiệp muốn khách tự tìm đến từ Google',
    menuTitle: 'SEO tổng thể',
    category: 'Được tìm thấy trên Google và AI',
    intro:
      'Dành cho doanh nghiệp đã có website và sản phẩm rõ ràng. Có người vào từ Google, nhưng chưa đều đặn ra cuộc gọi, tin nhắn hay đơn hàng.',
    promise:
      'SOHO sửa phần móng: lỗi website, cách xếp bài, và cho Google biết rõ doanh nghiệp là ai, ai viết bài. Làm theo cách an toàn với Google, đo bằng doanh thu.',
    insight:
      'Ít khi do viết chưa đủ nhiều. Phần lớn website mất khách vì bài viết rời rạc, mỗi bài một hướng. Khách bấm vào nhưng trang không trả lời đúng điều họ tìm. Bài cũng chưa cho thấy bạn thật sự giỏi nghề.',
    outcomes: [
      'Hiện ra khi người đang cần mua tìm trên Google',
      'Thêm người gọi, nhắn, để lại số từ Google, không chỉ thêm lượt xem',
      'Về lâu dài, bớt phụ thuộc vào tiền quảng cáo'
    ],
    pains: [
      'Đã viết nhiều bài, nhưng tìm tên sản phẩm của mình trên Google vẫn không thấy ở trang đầu',
      'Website có người vào xem, nhưng ít ai gọi, điền form hay đặt mua',
      'Website có lỗi bên trong mà mình không thấy, làm Google đọc không hết và xếp thấp'
    ],
    process: [
      'Rà lỗi website và cách sắp xếp các trang',
      'Gom các câu khách gõ trên Google, chia theo lúc tìm hiểu, so sánh, sắp mua',
      'Viết bài tổng quan và các bài trả lời câu khách hay hỏi, nối hết về trang dịch vụ',
      'Ghi rõ doanh nghiệp là ai, ai viết bài, theo cách Google đọc được và tin',
      'Gửi báo cáo mỗi tháng: website hiện ra ở bao nhiêu câu tìm, mang về bao nhiêu khách và doanh thu'
    ],
    proof: 'Hợp với công ty bán cho doanh nghiệp, dịch vụ chuyên môn, bán hàng online, và doanh nghiệp nhỏ muốn có nguồn khách bền lâu.'
  },
  {
    slug: 'seo-ai-overview',
    menuDesc: 'Để câu trả lời AI ở đầu trang Google hiểu đúng và nhắc đúng tên bạn',
    deliverables: [
      'Bản kiểm tra Google đang hiểu doanh nghiệp và người viết bài ra sao',
      'Danh sách câu khách hay hỏi, chia theo chủ đề',
      'Phần ghi rõ doanh nghiệp, người viết và các câu hỏi đáp, theo cách Google đọc được',
      'Mẫu trang trả lời thẳng vào câu khách hỏi',
      'Bảng theo dõi những câu tìm kiếm mà Google trả lời bằng AI'
    ],
    artifact: {image: null, need: 'Ảnh chụp AI Overview có trích dẫn website khách hàng'},
    eyebrow: 'SEO & AI Overview',
    title: 'SEO cho câu trả lời AI của Google và cách tìm kiếm mới',
    menuTitle: 'SEO cho AI tìm kiếm',
    category: 'Được tìm thấy trên Google và AI',
    intro: 'Dành cho doanh nghiệp muốn khi khách hỏi Google, phần trả lời bằng AI hiểu đúng, dẫn đúng và có nhắc tên mình.',
    promise:
      'SOHO sắp lại bài viết quanh nghề và tên tuổi của bạn. Mỗi bài trả lời rõ, đủ bối cảnh, có người viết thật và số liệu kiểm tra được.',
    insight:
      'AI không đọc riêng một bài. Nó gom thông tin từ cả website, người viết, phần ghi rõ doanh nghiệp là ai, phần hỏi đáp và nơi khác nhắc tới bạn.',
    outcomes: [
      'Bài của bạn dễ được AI dẫn lại khi trả lời khách',
      'Bớt bài sơ sài, bài lặp ý nhau, bài thiếu bối cảnh',
      'Người viết và doanh nghiệp được Google xem là nguồn đáng tin'
    ],
    pains: [
      'Bài đã ở trang đầu, nhưng ít người bấm vào vì Google đã trả lời sẵn ở trên',
      'Khách hỏi một câu, bài của mình lại vòng vo, không trả lời thẳng',
      'Tìm tên công ty mình, Google vẫn chưa biết mình là ai, làm nghề gì'
    ],
    process: [
      'Xem Google đang hiểu doanh nghiệp, người viết và chủ đề của bạn ra sao',
      'Viết lại bài theo câu hỏi thật của khách',
      'Ghi rõ doanh nghiệp, người viết và phần hỏi đáp theo cách Google đọc được',
      'Thêm bảng số liệu, các bước làm và ví dụ thật vào bài',
      'Theo dõi câu tìm kiếm nào Google trả lời bằng AI, và chỗ nào bài bạn có thể được dẫn lại'
    ],
    proof: 'Hợp với ngành mà khách phải tin mới mua: tài chính, giáo dục, y tế, pháp lý, công nghệ, công ty bán cho doanh nghiệp.'
  },
  {
    slug: 'local-seo-google-maps',
    menuDesc: 'Google Maps, đánh giá của khách và trang riêng cho từng khu vực',
    deliverables: [
      'Bản kiểm tra hồ sơ doanh nghiệp trên Google Maps',
      'Bảng tên, địa chỉ, số điện thoại ghi giống nhau ở mọi nơi',
      'Trang riêng cho từng khu vực',
      'Cách xin khách để lại đánh giá, từng bước',
      'Báo cáo số cuộc gọi, số người bấm chỉ đường, vị trí của bạn trên Maps'
    ],
    artifact: {image: null, need: 'Báo cáo Google Business Profile trước và sau tối ưu'},
    eyebrow: 'Local SEO & Maps',
    title: 'SEO địa phương và Google Maps cho doanh nghiệp phục vụ theo khu vực',
    menuTitle: 'SEO địa phương & Google Maps',
    category: 'Được tìm thấy trên Google và AI',
    intro: 'Dành cho nhà hàng, phòng khám, showroom, trung tâm đào tạo, dịch vụ tại nhà và chuỗi cửa hàng.',
    promise:
      'SOHO làm lại hồ sơ Google Maps, trang riêng cho từng khu vực và cách xin đánh giá của khách. Mục tiêu là bạn hiện ra khi người ở gần đang tìm.',
    insight:
      'Người tìm chỗ gần đây thường đã muốn mua và chọn rất nhanh. Nếu hồ sơ Maps, đánh giá, ảnh và tên, địa chỉ, số điện thoại không khớp nhau, khách sang chỗ khác gần nhất.',
    outcomes: [
      'Thêm người gọi, bấm chỉ đường và vào website từ Google Maps',
      'Đứng cao hơn khi khách tìm kèm tên khu vực',
      'Tên, địa chỉ, số điện thoại khớp nhau giữa website và Google Maps'
    ],
    pains: [
      'Nhiều người xem cửa hàng mình trên Maps, nhưng ít ai gọi tới',
      'Chỗ khác có đánh giá tốt hơn nên luôn hiện phía trên mình',
      'Có nhiều chi nhánh, mà địa chỉ, số điện thoại mỗi nơi ghi một kiểu'
    ],
    process: [
      'Rà hồ sơ Google Maps, xem tên, địa chỉ, số điện thoại có khớp ở mọi nơi',
      'Sửa ngành nghề, danh sách dịch vụ, ảnh và bài đăng trên Maps',
      'Làm trang riêng trên website cho từng địa điểm và dịch vụ',
      'Xin đánh giá đúng lúc khách hài lòng nhất',
      'Theo dõi số cuộc gọi, lượt chỉ đường, lịch hẹn và vị trí của bạn trên Maps'
    ],
    proof: 'Hợp với doanh nghiệp có cửa hàng thật, hoặc phục vụ khách trong một khu vực nhất định.'
  },
  {
    slug: 'google-ads-shopping',
    menuDesc: 'Quảng cáo trên Google lúc khách đang tìm mua, dồn tiền vào hàng có lãi',
    deliverables: [
      'Bản kiểm tra tài khoản quảng cáo và cách đang đếm khách',
      'Cách chia chiến dịch theo khách đang tìm để mua hay chỉ tìm hiểu',
      'Bộ mẫu quảng cáo',
      'Danh sách từ khóa không cho quảng cáo hiện ra, để khỏi phí tiền',
      'Danh sách sản phẩm cho Google Shopping, đã sửa tên và thông tin cho rõ',
      'Báo cáo: tốn bao nhiêu cho mỗi đơn, bỏ ra bao nhiêu mang về bao nhiêu, lãi sau giá vốn'
    ],
    artifact: {image: null, need: 'Cấu trúc chiến dịch hoặc báo cáo ROAS theo nhóm sản phẩm, đã che số nhạy cảm'},
    eyebrow: 'Google Ads & Shopping',
    title: 'Google Ads và Shopping tối ưu theo khách thật và lợi nhuận thật',
    menuTitle: 'Google Ads & Shopping',
    category: 'Quảng cáo ra đơn',
    intro: 'Dành cho doanh nghiệp cần khách ngay, nhưng không muốn trả tiền cho những lượt bấm rẻ từ người không định mua.',
    promise:
      'SOHO dựng quảng cáo chữ khi khách tìm, quảng cáo sản phẩm có ảnh và giá, và Performance Max (Google tự chọn chỗ hiện). Tiền được chia theo khách muốn mua tới đâu, đơn hàng thật và lãi của từng nhóm hàng.',
    insight:
      'Tài khoản Google Ads hỏng khi chỉ chạy theo con số dễ đạt. Khi đó nó không còn phân biệt khách thật, đơn có lãi và người chỉ đang xem cho biết.',
    outcomes: [
      'Bớt tiền cho từ khóa không mang về khách',
      'Mỗi đồng quảng cáo ở nhóm hàng có lãi mang về nhiều doanh thu hơn',
      'Gửi đơn hàng thật về lại Google Ads, để quảng cáo chạy theo khách thật'
    ],
    pains: [
      'Quảng cáo nhiều người bấm, nhưng nhân viên bán hàng nói gọi lại toàn người không định mua',
      'Để Google tự chạy Performance Max, tiền vẫn đi đều mà không biết từ khóa nào ra khách',
      'Báo cáo quảng cáo nhìn đẹp, nhưng không biết mình lãi thật bao nhiêu'
    ],
    process: [
      'Rà cách đang đếm khách gọi, nhắn, đặt hàng và cách chia tài khoản',
      'Chia từ khóa theo khách muốn mua tới đâu và đáng bao nhiêu tiền',
      'Viết quảng cáo và trang khách vào sau khi bấm, đúng điều người tìm cần',
      'Chỉnh giá trả cho Google dựa trên khách và đơn hàng thật',
      'Báo cáo tốn bao nhiêu cho mỗi đơn, mỗi khách mua, bỏ ra bao nhiêu mang về bao nhiêu, và lãi sau giá vốn'
    ],
    proof: 'Hợp với bán hàng online, công ty bán cho doanh nghiệp cần người hỏi mua, dịch vụ giá cao, doanh nghiệp đang tăng tiền quảng cáo.'
  },
  {
    slug: 'meta-tiktok-ads',
    menuDesc: 'Liên tục thử mẫu quảng cáo mới, nhắc lại người đã từng quan tâm',
    deliverables: [
      'Mô tả khách của bạn là ai và vì sao họ còn chần chừ',
      'Bảng ý tưởng cho các mẫu quảng cáo',
      'Kế hoạch chạy thử các mẫu quảng cáo',
      'Cài mã đo của Facebook lên website, gửi cả đơn hàng thật về Facebook',
      'Báo cáo mẫu nào ra khách, và khách đó có mua thật không'
    ],
    artifact: {image: null, need: 'Ma trận creative thật cùng các mẫu quảng cáo đã chạy'},
    eyebrow: 'Meta & TikTok Ads',
    title: 'Meta và TikTok Ads cho thương hiệu cần tạo nhu cầu và ra đơn',
    menuTitle: 'Meta & TikTok Ads',
    category: 'Quảng cáo ra đơn',
    intro: 'Dành cho sản phẩm mà người mua cần xem ảnh, video và nghe khách cũ kể lại trước khi quyết định.',
    promise:
      'SOHO liên tục thử mẫu quảng cáo mới, chọn đúng người xem và nhắc lại người đã quan tâm. Mục tiêu là tiền quảng cáo thành đơn hàng, hoặc người hỏi mua có khả năng chốt.',
    insight:
      'Quảng cáo trên Meta (Facebook, Instagram) và TikTok không hiệu quả hơn nhờ đổi nhóm người xem liên tục. Thứ quyết định là mẫu quảng cáo kể chuyện gì, ưu đãi gì, và trang khách vào sau khi bấm. Rồi tới lời nhân viên bán hàng báo lại khách tốt hay không.',
    outcomes: [
      'Luôn có mẫu quảng cáo mới đang được thử',
      'Không phải trông vào một mẫu đang chạy tốt',
      'Nối thông tin khách từ form, tin nhắn, sổ bán hàng và website với nhau'
    ],
    pains: [
      'Mẫu quảng cáo chạy vài ngày là người xem chán, tiền cho mỗi khách đội lên',
      'Tin nhắn về nhiều, nhưng chốt được rất ít',
      'Chạy nhiều mẫu mà không biết mẫu nào mang về khách mua thật'
    ],
    process: [
      'Tìm hiểu khách là ai, vì sao họ chần chừ, điều gì khiến họ mua',
      'Lên ý tưởng theo câu mở đầu, ưu đãi, bằng chứng, và dạng ảnh hay video',
      'Chạy thử ngắn để tìm mẫu ra khách',
      'Dồn thêm tiền cho nhóm người xem mang về khách mua thật',
      'Báo cáo từng mẫu: tốn bao nhiêu cho mỗi khách, khách có mua thật không, mang về bao nhiêu doanh thu'
    ],
    proof: 'Hợp với hàng bán thẳng cho người dùng, giáo dục, làm đẹp, bất động sản, dịch vụ địa phương, và hàng khách cần nghĩ lâu.'
  },
  {
    slug: 'cro-landing-page',
    menuDesc: 'Thêm người gọi, nhắn, để lại số từ chính lượng người đang vào web',
    deliverables: [
      'Bản kiểm tra các bước khách đi qua, kèm bản ghi chỗ khách bấm và cuộn tới',
      'Danh sách chỗ khách bị vướng trên từng màn hình',
      'Bản viết lại phần đầu trang, nút bấm và phần bằng chứng',
      'Kế hoạch chạy song song hai bản trang để giữ bản tốt hơn',
      'Báo cáo kết quả của từng lần thử'
    ],
    artifact: {image: null, need: 'Landing page trước và sau khi viết lại'},
    eyebrow: 'CRO landing page',
    title: 'Tối ưu chuyển đổi để lượt truy cập thành khách và doanh thu',
    menuTitle: 'Tối ưu chuyển đổi (CRO)',
    category: 'Quảng cáo ra đơn',
    intro: 'Dành cho doanh nghiệp đã có người vào web từ Google hoặc quảng cáo, nhưng ít ai điền form, gọi điện hay đặt lịch.',
    promise:
      'SOHO xem khách dùng trang thế nào, lời trên trang, form, bằng chứng và tốc độ mở trang. Mục tiêu là thêm khách mà không phải tăng tiền quảng cáo.',
    insight:
      'Trang khách vào thường không thiếu thông tin mà sắp sai thứ tự. Khách cần thấy đúng chuyện mình gặp, điều bạn hứa, bằng chứng, rồi biết bấm vào đâu tiếp.',
    outcomes: [
      'Thêm khách từ cùng lượng người vào web',
      'Giảm tiền cho mỗi khách mà không phải trả giá quảng cáo cao hơn',
      'Tìm ra lời mời và ưu đãi đáng đem dùng ở nhiều nơi hơn'
    ],
    pains: [
      'Người vào web nhiều, mà số form gửi về thì ít',
      'Khách mở trang trên điện thoại rồi thoát ra luôn',
      'Trang kể nhiều về công ty mình, mà ít nói điều khách đang cần'
    ],
    process: [
      'Xem số liệu, chỗ khách bấm và cuộn tới, và các bước điền form',
      'Tìm chỗ khách bị vướng và lý do chần chừ trên từng màn hình',
      'Viết lại phần đầu trang, nút bấm và bằng chứng',
      'Chạy song song hai bản trang, thử chỗ ảnh hưởng nhiều nhất trước',
      'Báo cáo số khách tăng bao nhiêu, và khách có đúng người cần mua không'
    ],
    proof: 'Hợp với doanh nghiệp đang trả tiền quảng cáo để có người vào web, hoặc đã có khách từ Google mà chưa tận dụng hết.'
  },
  {
    slug: 'thiet-ke-website',
    menuDesc: 'Website mở nhanh, Google dễ đọc, tự sửa được, dẫn khách tới chỗ liên hệ',
    deliverables: [
      'Sơ đồ các trang và đường khách đi từ lúc vào tới lúc liên hệ',
      'Bản thiết kế giao diện trên máy tính và điện thoại',
      'Website hoàn chỉnh, đã chạy thử kỹ',
      'Cài sẵn cách đếm khách gọi, nhắn, để lại số',
      'Tài liệu và buổi hướng dẫn để bạn tự sửa website'
    ],
    artifact: {image: null, need: 'Ảnh chụp một website SOHO đã làm, đã được khách đồng ý'},
    eyebrow: 'Thiết kế website',
    title: 'Thiết kế website cho doanh nghiệp cần một công cụ bán hàng chạy cả ngày',
    menuTitle: 'Thiết kế website',
    category: 'Website và thương hiệu',
    intro:
      'Dành cho doanh nghiệp cần website mới hoặc làm lại. Website đúng logo, màu sắc thương hiệu, chạy tốt trên điện thoại, Google dễ đọc và đếm được khách liên hệ.',
    promise:
      'SOHO thiết kế riêng cho bạn, không dùng mẫu có sẵn. SOHO tìm hiểu ngành và khách của bạn, vẽ đường khách đi trên web, rồi thiết kế và lập trình. Cuối cùng đưa nội dung lên và hướng dẫn bạn tự quản lý.',
    insight:
      'Website là nơi đầu tiên khách tìm đến để hiểu về bạn. Web đẹp mà chậm trên điện thoại, hay không dẫn khách tới chỗ liên hệ, thì tiền quảng cáo và SEO đổ vào đều phí.',
    outcomes: [
      'Giao diện đúng logo, màu, kiểu chữ của bạn, giống nhau trên máy tính và điện thoại',
      'Mỗi trang có một việc rõ cho khách: gọi, nhắn tin, đặt lịch hoặc mua',
      'Sẵn sàng để làm SEO và chạy quảng cáo: mở nhanh, đếm được khách gọi, nhắn, đặt'
    ],
    pains: [
      'Website cũ mở chậm, xem trên điện thoại thì chữ, ảnh xô lệch',
      'Có website nhưng gần như không ai liên hệ qua đó',
      'Muốn sửa một dòng chữ cũng phải nhờ người khác, chờ vài ngày'
    ],
    process: [
      'Nghe bạn nói nhu cầu, tìm hiểu ngành và khách của bạn',
      'Lên hướng làm, sơ đồ các trang và đường khách đi trên web',
      'Thiết kế giao diện theo logo, màu, kiểu chữ của bạn',
      'Lập trình, làm cho web mở nhanh trên điện thoại, chạy thử từng tính năng',
      'Đưa nội dung lên, mở web chính thức, hướng dẫn bạn quản lý và lo bảo trì'
    ],
    proof: 'Hợp với doanh nghiệp cần web mới, kể cả web có đặt lịch, thanh toán, quản lý khách, gửi email cho khách, nhiều ngôn ngữ.'
  },
  {
    slug: 'nhan-dien-thuong-hieu',
    menuDesc: 'Logo, màu, kiểu chữ và cách dùng giống nhau ở mọi nơi khách gặp bạn',
    deliverables: [
      'Logo và các phiên bản để dùng ở từng nơi',
      'Bảng màu và kiểu chữ',
      'Mẫu áp dụng sẵn: danh thiếp, giấy tờ, bao bì, ảnh mạng xã hội',
      'File gốc để sửa, file để in và file để xem nhanh',
      'Sổ hướng dẫn dùng logo, màu, chữ cho đúng'
    ],
    artifact: {image: null, need: 'Ảnh một bộ nhận diện SOHO đã làm, đã được khách đồng ý'},
    eyebrow: 'Nhận diện thương hiệu',
    title: 'Thiết kế nhận diện thương hiệu nhất quán từ online đến cửa hàng',
    menuTitle: 'Nhận diện thương hiệu',
    category: 'Website và thương hiệu',
    intro: 'Dành cho doanh nghiệp mới ra mắt, muốn khách nhìn mình theo cách mới, hoặc đang có hình ảnh mỗi nơi một kiểu.',
    promise:
      'SOHO thiết kế logo, màu, kiểu chữ và cách dùng hình ảnh. Tất cả dựa trên cá tính thương hiệu, khách bạn hướng tới và cách bạn muốn khách nhớ về mình. Dùng được ngay trên web, mạng xã hội, bao bì và giấy tờ văn phòng.',
    insight:
      'Mỗi lần thương hiệu hiện ra là một lần khách nhớ thêm, hoặc quên bạn. Chỉ một chỗ lệch màu, lệch chữ hay lệch logo cũng đủ làm khách bớt thiện cảm, và phí công đã xây.',
    outcomes: [
      'Khách nhận ra bạn nhanh hơn ở mọi nơi họ gặp bạn',
      'Hình ảnh giống nhau trên web, mạng xã hội, bao bì và ở cửa hàng',
      'Có sổ hướng dẫn để nhân viên và đối tác tự làm đúng'
    ],
    pains: [
      'Bảng hiệu, danh thiếp, trang Facebook mỗi chỗ một logo, một màu',
      'Nhìn qua thấy na ná bên cùng ngành, khách khó nhớ tên mình',
      'Logo xem trên máy thì đẹp, mà in ra hay đưa vào quảng cáo thì khó dùng'
    ],
    process: [
      'Trao đổi cần làm những gì, báo giá và ký hợp đồng',
      'Tìm hiểu doanh nghiệp: điều bạn coi trọng, muốn đi tới đâu, cá tính thương hiệu',
      'Tìm hiểu ngành, khách bạn muốn hướng tới và các bên cùng ngành',
      'Đưa ra hướng thiết kế: màu, kiểu chữ, phong cách hình ảnh, dáng logo',
      'Thiết kế logo rồi áp vào danh thiếp, giấy tờ, bao bì, mạng xã hội',
      'Trình bày, sửa theo ý bạn, rồi giao đủ file kèm sổ hướng dẫn'
    ],
    proof: 'Hợp với doanh nghiệp muốn có nhiều phương án để chọn, làm theo mốc thời gian rõ, ít phải sửa đi sửa lại.'
  },
  {
    slug: 'thiet-ke-mobile-app',
    menuDesc: 'App Android và iOS để khách đặt lịch, đặt hàng, hoặc để quản lý nội bộ',
    deliverables: [
      'Bản mô tả app làm được những gì',
      'Bản phác các màn hình và thứ tự khách bấm qua',
      'Thiết kế giao diện',
      'App Android và iOS (iPhone) đã chạy thử kỹ',
      'Kế hoạch bảo trì và cập nhật'
    ],
    artifact: {image: null, need: 'Ảnh màn hình một app SOHO đã làm, đã được khách đồng ý'},
    eyebrow: 'Thiết kế Mobile App',
    title: 'Thiết kế và phát triển ứng dụng di động cho Android và iOS',
    menuTitle: 'Thiết kế Mobile App',
    category: 'Website và thương hiệu',
    intro: 'Dành cho doanh nghiệp cần app đặt lịch, đặt hàng, bán hàng, dịch vụ tiện ích hoặc quản lý nội bộ.',
    promise:
      'SOHO đi cùng bạn từ ý tưởng, phác màn hình, thiết kế, lập trình, tới bảo trì và cập nhật. App có thể nối với website, trang quản trị hay phần mềm quản lý khách bạn đang dùng.',
    insight:
      'App đáng làm khi khách quay lại thường xuyên để đặt lịch, đặt hàng, tích điểm. Vì vậy việc đầu tiên là trả lời: khách mở app để làm gì. Rồi mới vẽ màn hình.',
    outcomes: [
      'Dễ dùng, chạy mượt trên Android và iOS',
      'Nối với website và phần mềm đang dùng, không phải nhập một thông tin hai lần',
      'Có người bảo trì và cập nhật sau khi ra mắt'
    ],
    pains: [
      'Khách phải gọi điện hoặc nhắn tin mới đặt được lịch, đặt được hàng',
      'Thông tin khách mỗi chỗ giữ một ít, không ai nắm hết',
      'App đang có chậm, hay lỗi, mà không còn ai cập nhật'
    ],
    process: [
      'Làm rõ ý tưởng và việc khách sẽ làm trên app',
      'Phác các màn hình và thứ tự khách bấm qua',
      'Thiết kế giao diện cho dễ nhìn, dễ bấm',
      'Lập trình, nối app với website hoặc trang quản trị',
      'Chạy thử, đưa lên Google Play và App Store, rồi bảo trì, cập nhật'
    ],
    proof: 'Hợp với doanh nghiệp cần app đặt lịch, đặt hàng, bán hàng online, dịch vụ tiện ích, hoặc app quản lý nội bộ.'
  },
  {
    slug: 'content-marketing-pr',
    menuDesc: 'Bài viết sâu, chuyện khách hàng thật và đề tài để báo chí đưa tin',
    deliverables: [
      'Bảng các chủ đề và câu khách hay hỏi',
      'Lịch đăng bài',
      'Bài tổng quan và các bài trả lời câu khách hay hỏi',
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
      'Dành cho doanh nghiệp muốn bài viết có mục đích, không chỉ đăng cho đều. Mỗi bài phải giúp khách tìm thấy trên Google, giúp bán hàng và tạo niềm tin.',
    promise:
      'SOHO viết bài sâu, chuyện khách hàng thật và đề tài cho báo chí. Mỗi loại dành cho một lúc: khách mới tìm hiểu, đang so sánh, hay sắp mua.',
    insight:
      'Khách không đọc bài để nghe quảng cáo. Họ đọc để khỏi mua nhầm: so sánh các lựa chọn, hiểu chi phí, thấy bằng chứng và tin bạn làm được.',
    outcomes: [
      'Có bài cho lúc khách mới tìm hiểu, lúc so sánh, lúc sắp mua',
      'Khách nhìn bạn như người hiểu nghề',
      'Nhân viên bán hàng có sẵn tài liệu để gửi khách'
    ],
    pains: [
      'Đăng bài đều đặn, mà không thấy khách nào tìm tới từ đó',
      'Bài viết na ná bên cùng ngành, đọc không thấy cái riêng của mình',
      'Nhân viên bán hàng không có chuyện khách hàng, bài hướng dẫn hay bài so sánh để gửi khách'
    ],
    process: [
      'Tìm hiểu khách đang muốn gì, và vì sao còn chần chừ',
      'Viết bài tổng quan, bài trả lời câu khách hay hỏi, chuyện khách hàng và tài liệu bán hàng',
      'Biến số liệu trong công ty thành bài có góc nhìn riêng',
      'Chỉnh bài cho hợp với Google, mạng xã hội và báo chí',
      'Đo số khách đã đọc bài trước khi mua, và người đọc có thật sự quan tâm không'
    ],
    proof: 'Hợp với công ty bán cho doanh nghiệp, dịch vụ chuyên môn, giáo dục, công nghệ, và thương hiệu cần khách tin lâu dài.'
  },
  {
    slug: 'ga4-looker-dashboard',
    menuDesc: 'Đếm đúng khách gọi, nhắn, mua và gom báo cáo về một chỗ',
    deliverables: [
      'Kế hoạch đo: đếm những gì, đếm ở đâu',
      'Cách đặt tên thống nhất cho từng việc khách làm trên web',
      'Cài GA4 (công cụ đo của Google), Google Tag Manager (nơi quản lý mã đo) và mã đo của Meta',
      'Bảng báo cáo trên Looker (công cụ làm báo cáo của Google), làm riêng cho từng người xem',
      'Hướng dẫn đọc báo cáo'
    ],
    artifact: {image: null, need: 'Một trang Looker dashboard thật, đã che số nhạy cảm'},
    eyebrow: 'GA4 & Looker',
    title: 'GA4 và báo cáo Looker giúp bạn thấy tiền đến từ đâu',
    menuTitle: 'Đo lường & báo cáo GA4',
    category: 'Nội dung và đo lường',
    intro:
      'Dành cho doanh nghiệp làm marketing ở nhiều nơi nhưng không tin được số liệu, hoặc không biết nơi nào thật sự mang khách về.',
    promise:
      'SOHO cài cách đếm những việc quan trọng khách làm, và dựng báo cáo. Người vào web, người hỏi mua, đơn hàng và doanh thu nằm chung một chỗ.',
    insight:
      'Báo cáo tốt không phải là nhiều biểu đồ. Báo cáo tốt trả lời được: kênh nào đang mang khách về, tiền nào đang phí, và việc gì cần làm tiếp.',
    outcomes: [
      'Người làm marketing và người bán hàng nhìn chung một bộ số',
      'Không còn cảnh mỗi kênh báo một con số rồi cãi nhau',
      'Chia tiền quảng cáo dựa trên chi phí mỗi đơn và doanh thu'
    ],
    pains: [
      'GA4 lúc thiếu đơn, lúc đếm sai số người gọi, nhắn',
      'Số bên quảng cáo, sổ bán hàng và website không khớp nhau',
      'Mình phải tự ngồi gom số từ nhiều nơi, mất quá nhiều thời gian'
    ],
    process: [
      'Xem hiện đang đếm những gì, và số liệu chạy từ đâu về đâu',
      'Chốt những việc khách làm cần đếm, và đặt tên cho thống nhất',
      'Cài GA4, Google Tag Manager, và mã đo của Meta khi cần',
      'Dựng bảng báo cáo trên Looker, riêng cho từng người xem',
      'Soát lại số liệu, hướng dẫn bạn đọc báo cáo mỗi tuần'
    ],
    proof: 'Hợp với doanh nghiệp có nhiều kênh, nhiều trang bán hàng, và nhiều bộ phận cần nhìn chung một bộ số.'
  },
  {
    slug: 'tu-van-chien-luoc-sprint',
    menuDesc: 'Biết nên làm gì trước trong 30 đến 90 ngày tới',
    deliverables: [
      'Ghi chép buổi trao đổi',
      'Bản kiểm tra website, quảng cáo, nội dung đang có',
      'Bản xem đối thủ đang làm gì',
      'Lộ trình 30 đến 90 ngày',
      'Danh sách việc cần làm và con số cần đạt'
    ],
    artifact: {image: null, need: 'Một trang roadmap sprint đã bàn giao, đã che tên khách hàng'},
    eyebrow: 'Growth strategy sprint',
    title: 'Tư vấn lộ trình marketing để biết nên làm gì trước',
    menuTitle: 'Tư vấn lộ trình 90 ngày',
    category: 'Nội dung và đo lường',
    intro:
      'Dành cho chủ doanh nghiệp, người phụ trách marketing hay bán hàng. Bạn cần biết việc gì làm trước, rồi mới chi tiền cho SEO, quảng cáo, nội dung hay đo lường.',
    promise:
      'SOHO làm một vòng kiểm tra ngắn để tìm chỗ đang tắc. Sau đó ước xem việc nào đem lại nhiều nhất, và xếp việc cho 30 đến 90 ngày tới.',
    insight:
      'Doanh nghiệp ít khi thiếu ý tưởng marketing. Cái thiếu là biết làm gì trước, dựa trên tiền lãi mỗi sản phẩm, cách khách mua, sức đội nhà và số liệu đang có.',
    outcomes: [
      'Có lộ trình 30 đến 90 ngày rõ việc, rõ con số, rõ người làm',
      'Biết kênh nào làm trước, kênh nào tạm dừng',
      'Bớt rủi ro chi tiền cho một đợt chạy khi chưa sẵn sàng'
    ],
    pains: [
      'Không biết nên làm SEO, quảng cáo hay nội dung trước',
      'Đổi mấy bên làm marketing rồi, mà mọi thứ vẫn rời rạc',
      'Nhân viên ai cũng bận, mà không biết việc nào giúp bán được hàng'
    ],
    process: [
      'Trao đổi nhanh về mục tiêu, tiền lãi và cách bạn đang bán hàng',
      'Kiểm tra website, quảng cáo, nội dung và số liệu hiện tại',
      'Xem thị trường, đối thủ và chỗ nào nên làm trước',
      'Lập lộ trình việc cần làm trong 30 đến 90 ngày',
      'Giao danh sách việc, con số cần đạt và cách kiểm tra'
    ],
    proof: 'Hợp với doanh nghiệp muốn lớn nhanh, công ty bán cho doanh nghiệp với khách cân nhắc lâu, và đội muốn quyết việc marketing gọn.'
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
