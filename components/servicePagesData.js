export const serviceGroups = [
  'Được tìm thấy trên Google và AI',
  'Quảng cáo ra đơn',
  'Website và thương hiệu',
  'Nội dung và đo lường'
];

/*
  Sáu dịch vụ chính hiện ở trang chủ (đúng danh mục SOHO đang bán trên sohoagency.vn), theo thứ tự hiển thị.
  coreTitle: tên ngắn trên thẻ; coreDesc: một câu lợi ích; icon: tên trong bộ Lucide (components/ui/Icon.js).
*/
export const coreServices = [
  {slug: 'seo-tong-the', coreTitle: 'SEO website', icon: 'search', art: '/services/seo.svg', coreDesc: 'Khách tự tìm thấy bạn trên Google khi đang có nhu cầu.'},
  {slug: 'google-ads-shopping', coreTitle: 'Google Ads', icon: 'mouse-pointer-click', art: '/services/google-ads.svg', coreDesc: 'Có khách ngay, tối ưu theo đơn có lãi chứ không theo lượt bấm.', featured: true},
  {slug: 'meta-tiktok-ads', coreTitle: 'Facebook Ads', icon: 'megaphone', art: '/services/meta-tiktok-ads.svg', coreDesc: 'Quảng cáo Facebook và TikTok tạo nhu cầu, ra tin nhắn và đơn hàng.'},
  {slug: 'thiet-ke-website', coreTitle: 'Thiết kế website', icon: 'monitor-smartphone', art: '/services/website-design.svg', coreDesc: 'Website nhanh, chuẩn SEO, dẫn khách tới bước liên hệ.'},
  {slug: 'nhan-dien-thuong-hieu', coreTitle: 'Nhận diện thương hiệu', icon: 'palette', art: '/services/brand-identity.svg', coreDesc: 'Logo, màu và chữ nhất quán ở mọi nơi khách gặp bạn.'},
  {slug: 'thiet-ke-mobile-app', coreTitle: 'Thiết kế Mobile App', icon: 'smartphone', art: '/services/mobile-app.svg', coreDesc: 'App Android và iOS cho đặt lịch, đặt hàng, quản lý nội bộ.'}
];

export const servicePages = [
  {
    slug: 'seo-tong-the',
    menuDesc: 'Sửa kỹ thuật, nội dung và độ uy tín để khách tự tìm đến',
    deliverables: ['Báo cáo lỗi kỹ thuật của website', 'Bản đồ từ khóa theo từng bước mua', 'Cấu trúc trang chủ đề và bài vệ tinh', 'Dàn ý cho từng trang, từng bài', 'Kế hoạch liên kết giữa các trang', 'Báo cáo hằng tháng bằng số khách và doanh thu'],
    artifact: {image: null, need: 'Bản đồ từ khóa thật của một dự án, đã che tên khách hàng'},
    eyebrow: 'SEO tổng thể',
    title: 'SEO tổng thể cho doanh nghiệp muốn khách tự tìm đến từ Google',
    menuTitle: 'SEO tổng thể',
    category: 'Được tìm thấy trên Google và AI',
    intro: 'Dành cho doanh nghiệp đã có website và sản phẩm rõ ràng, nhưng lượt truy cập từ Google chưa thành khách liên hệ hay đơn hàng đều đặn.',
    promise: 'SOHO sửa lại nền móng: lỗi kỹ thuật, cách sắp xếp nội dung, độ uy tín của thương hiệu và tác giả, để website tăng trưởng an toàn và đo được bằng doanh thu.',
    insight: 'Vấn đề ít khi nằm ở chỗ viết chưa đủ nhiều. Phần lớn website mất khách vì từ khóa rời rạc, trang đích không trả lời đúng điều người tìm cần, và nội dung chưa chứng minh được chuyên môn.',
    outcomes: ['Hiện lên ở nhóm từ khóa của người đang có nhu cầu mua', 'Thêm khách để lại thông tin từ Google, không chỉ thêm lượt xem', 'Bớt phụ thuộc vào ngân sách quảng cáo về lâu dài'],
    pains: ['Viết rất nhiều bài nhưng từ khóa không lên trang đầu', 'Có lượt truy cập nhưng ít người điền form, gọi điện hay đặt mua', 'Website có lỗi kỹ thuật khiến Google đọc và xếp hạng kém'],
    process: ['Kiểm tra kỹ thuật và cấu trúc website', 'Lập bản đồ từ khóa theo hành trình mua', 'Dựng trang chủ đề, bài vệ tinh và liên kết giữa các trang', 'Làm rõ thương hiệu, tác giả và dữ liệu cấu trúc để Google tin', 'Báo cáo độ phủ, số khách và doanh thu từ Google mỗi tháng'],
    proof: 'Hợp với doanh nghiệp B2B, dịch vụ chuyên môn, bán hàng online và SME muốn có kênh khách bền lâu.'
  },
  {
    slug: 'seo-ai-overview',
    menuDesc: 'Để AI của Google hiểu đúng và nhắc đúng thương hiệu',
    deliverables: ['Kiểm tra cách Google hiểu thương hiệu và tác giả', 'Danh sách câu hỏi khách hay hỏi, theo chủ đề', 'Dữ liệu cấu trúc cho doanh nghiệp, tác giả, hỏi đáp', 'Mẫu trang trả lời thẳng câu hỏi', 'Theo dõi các câu tìm kiếm có câu trả lời của AI'],
    artifact: {image: null, need: 'Ảnh chụp AI Overview có trích dẫn website khách hàng'},
    eyebrow: 'SEO & AI Overview',
    title: 'SEO cho câu trả lời AI của Google và cách tìm kiếm mới',
    menuTitle: 'SEO cho AI tìm kiếm',
    category: 'Được tìm thấy trên Google và AI',
    intro: 'Dành cho thương hiệu muốn được AI của Google hiểu đúng, trích đúng và có tên trong các câu trả lời tổng hợp.',
    promise: 'SOHO sắp lại nội dung quanh thương hiệu và chuyên môn của bạn: câu trả lời rõ, đủ ngữ cảnh, tác giả có thật và số liệu kiểm chứng được.',
    insight: 'AI không đọc riêng một bài. Nó tổng hợp tín hiệu từ cả website, tác giả, dữ liệu cấu trúc, phần hỏi đáp và những nơi khác nhắc tới thương hiệu.',
    outcomes: ['Dễ được trích trong câu trả lời của AI', 'Bớt bài mỏng, bài trùng, bài thiếu ngữ cảnh', 'Chuyên gia và thương hiệu được nhận ra là nguồn đáng tin'],
    pains: ['Bài lên trang đầu nhưng ít người bấm vì AI đã trả lời ngay trên Google', 'Nội dung chưa trả lời thẳng câu hỏi', 'Google chưa hiểu thương hiệu của bạn là ai, làm gì'],
    process: ['Kiểm tra cách Google đang hiểu thương hiệu, tác giả và chủ đề', 'Viết lại nội dung theo câu hỏi thật của khách', 'Thêm dữ liệu cấu trúc cho doanh nghiệp, tác giả, hỏi đáp', 'Bổ sung bảng số liệu, quy trình, ví dụ thật', 'Theo dõi câu tìm kiếm có câu trả lời AI và cơ hội được trích'],
    proof: 'Hợp với ngành cần niềm tin cao: tài chính, giáo dục, y tế, B2B, pháp lý, công nghệ.'
  },
  {
    slug: 'local-seo-google-maps',
    menuDesc: 'Google Maps, đánh giá của khách và trang theo khu vực',
    deliverables: ['Kiểm tra hồ sơ doanh nghiệp trên Google', 'Bảng thống nhất tên, địa chỉ, số điện thoại', 'Trang riêng cho từng khu vực', 'Quy trình xin đánh giá', 'Báo cáo cuộc gọi, lượt chỉ đường, thứ hạng trên Maps'],
    artifact: {image: null, need: 'Báo cáo Google Business Profile trước và sau tối ưu'},
    eyebrow: 'Local SEO & Maps',
    title: 'SEO địa phương và Google Maps cho doanh nghiệp phục vụ theo khu vực',
    menuTitle: 'SEO địa phương & Google Maps',
    category: 'Được tìm thấy trên Google và AI',
    intro: 'Dành cho nhà hàng, phòng khám, showroom, trung tâm đào tạo, dịch vụ tại nhà và chuỗi cửa hàng.',
    promise: 'SOHO tối ưu hồ sơ Google của doanh nghiệp, trang theo khu vực và đánh giá của khách, để bạn hiện lên khi người ở gần đang tìm.',
    insight: 'Người tìm quanh đây thường đã muốn mua và quyết định nhanh. Nếu Maps, đánh giá, hình ảnh và tên, địa chỉ, số điện thoại không khớp nhau, khách sang đối thủ gần nhất.',
    outcomes: ['Thêm cuộc gọi, lượt chỉ đường và lượt vào web từ Google Maps', 'Lên hạng ở các từ khóa kèm khu vực', 'Thông tin địa điểm khớp nhau trên website và hồ sơ Google'],
    pains: ['Hồ sơ Maps nhiều lượt xem nhưng ít cuộc gọi', 'Đối thủ có đánh giá tốt hơn nên đứng trên', 'Nhiều chi nhánh nhưng thông tin mỗi nơi một kiểu'],
    process: ['Kiểm tra hồ sơ Google và độ khớp của tên, địa chỉ, số điện thoại', 'Tối ưu danh mục, dịch vụ, ảnh và bài đăng trên Maps', 'Làm trang riêng theo địa điểm và dịch vụ', 'Xin đánh giá đúng lúc khách hài lòng nhất', 'Theo dõi cuộc gọi, chỉ đường, đặt lịch và thứ hạng trên Maps'],
    proof: 'Hợp với doanh nghiệp có cửa hàng thật hoặc phục vụ theo khu vực.'
  },
  {
    slug: 'google-ads-shopping',
    menuDesc: 'Quảng cáo tìm kiếm và mua sắm, tối ưu theo lợi nhuận',
    deliverables: ['Kiểm tra tài khoản và cách đo', 'Cấu trúc chiến dịch theo ý định mua', 'Bộ mẫu quảng cáo', 'Danh sách từ khóa loại trừ', 'Danh mục sản phẩm đã tối ưu', 'Báo cáo chi phí mỗi đơn, doanh thu trên chi phí, lợi nhuận gộp'],
    artifact: {image: null, need: 'Cấu trúc chiến dịch hoặc báo cáo ROAS theo nhóm sản phẩm, đã che số nhạy cảm'},
    eyebrow: 'Google Ads & Shopping',
    title: 'Google Ads và Shopping tối ưu theo khách thật và lợi nhuận thật',
    menuTitle: 'Google Ads & Shopping',
    category: 'Quảng cáo ra đơn',
    intro: 'Dành cho doanh nghiệp cần khách ngay nhưng không muốn đổ tiền vào lượt bấm rẻ và khách không có nhu cầu.',
    promise: 'SOHO dựng chiến dịch tìm kiếm, mua sắm và Performance Max theo ý định mua, dữ liệu đơn hàng và biên lợi nhuận của từng nhóm sản phẩm.',
    insight: 'Tài khoản Google Ads hỏng khi tối ưu theo mục tiêu dễ đạt, không phân biệt khách thật, đơn có lãi và người chỉ đang tham khảo.',
    outcomes: ['Bớt tiền cho từ khóa không ra khách', 'Thêm doanh thu trên mỗi đồng quảng cáo ở nhóm hàng có lãi', 'Đưa dữ liệu đơn hàng thật về lại chiến dịch'],
    pains: ['Nhiều lượt bấm nhưng sale báo khách không đúng nhu cầu', 'Performance Max tiêu tiền mà không biết từ khóa nào hiệu quả', 'Báo cáo quảng cáo đẹp nhưng lợi nhuận thật không rõ'],
    process: ['Kiểm tra cách đo, mục tiêu chuyển đổi và cấu trúc tài khoản', 'Chia nhóm từ khóa theo ý định và giá trị', 'Viết mẫu quảng cáo và trang đích theo điều người tìm cần', 'Tối ưu giá thầu bằng dữ liệu khách và đơn hàng thật', 'Báo cáo chi phí mỗi đơn, doanh thu trên chi phí, chi phí có một khách mua và lợi nhuận gộp'],
    proof: 'Hợp với bán hàng online, B2B cần khách tiềm năng, dịch vụ giá trị cao và doanh nghiệp đang tăng ngân sách quảng cáo.'
  },
  {
    slug: 'meta-tiktok-ads',
    menuDesc: 'Thử mẫu quảng cáo liên tục, nhắc lại người đã quan tâm',
    deliverables: ['Chân dung khách và lý do họ còn ngần ngại', 'Bảng ý tưởng mẫu quảng cáo', 'Kế hoạch thử nghiệm', 'Cài đặt đo lường Meta (pixel, Conversions API)', 'Báo cáo hiệu quả từng mẫu và chất lượng khách'],
    artifact: {image: null, need: 'Ma trận creative thật cùng các mẫu quảng cáo đã chạy'},
    eyebrow: 'Meta & TikTok Ads',
    title: 'Meta và TikTok Ads cho thương hiệu cần tạo nhu cầu và ra đơn',
    menuTitle: 'Meta & TikTok Ads',
    category: 'Quảng cáo ra đơn',
    intro: 'Dành cho sản phẩm cần hình ảnh, video và lời chứng thực của khách trước khi người mua quyết định.',
    promise: 'SOHO dựng cách thử mẫu quảng cáo liên tục, chọn đúng nhóm người xem và nhắc lại người đã quan tâm, để tiền quảng cáo thành đơn hàng hoặc khách có khả năng chốt.',
    insight: 'Meta và TikTok không thắng nhờ đổi nhóm đối tượng liên tục. Thứ quyết định là góc kể của mẫu quảng cáo, ưu đãi, trang đích và phản hồi từ đội sale.',
    outcomes: ['Luôn có mẫu quảng cáo mới đang được thử', 'Không phụ thuộc vào một mẫu đang chạy tốt', 'Nối tín hiệu từ form, tin nhắn, sổ bán hàng và website'],
    pains: ['Quảng cáo nhanh nhàm, giá mỗi khách tăng sau vài ngày', 'Nhiều tin nhắn nhưng ít người mua', 'Không biết mẫu quảng cáo nào mang về khách tốt'],
    process: ['Tìm hiểu chân dung khách, lý do ngần ngại và động lực mua', 'Lập bảng ý tưởng theo câu mở đầu, ưu đãi, bằng chứng và định dạng', 'Chạy thử ngắn để tìm mẫu hiệu quả', 'Tăng ngân sách cho nhóm khách có chất lượng', 'Báo cáo theo mẫu quảng cáo, chi phí mỗi khách, chất lượng khách và doanh thu'],
    proof: 'Hợp với thương hiệu bán thẳng cho người dùng, giáo dục, làm đẹp, bất động sản, dịch vụ địa phương và sản phẩm cần thời gian nuôi nhu cầu.'
  },
  {
    slug: 'cro-landing-page',
    menuDesc: 'Thêm khách từ chính lượt truy cập đang có',
    deliverables: ['Kiểm tra các bước khách đi qua và bản đồ nhiệt', 'Danh sách chỗ khách bị vướng trên từng màn hình', 'Bản viết lại phần đầu trang, nút bấm, bằng chứng', 'Kế hoạch thử nghiệm A/B', 'Báo cáo kết quả từng thử nghiệm'],
    artifact: {image: null, need: 'Landing page trước và sau khi viết lại'},
    eyebrow: 'CRO landing page',
    title: 'Tối ưu chuyển đổi để lượt truy cập thành khách và doanh thu',
    menuTitle: 'Tối ưu chuyển đổi (CRO)',
    category: 'Quảng cáo ra đơn',
    intro: 'Dành cho doanh nghiệp đã có lượt truy cập từ SEO hoặc quảng cáo nhưng ít người điền form, gọi điện hay đặt lịch.',
    promise: 'SOHO xem cách khách dùng trang, thông điệp, form, bằng chứng và tốc độ tải, để thêm khách mà không phải tăng ngân sách quảng cáo.',
    insight: 'Trang đích thường không thiếu thông tin mà thiếu thứ tự. Khách cần thấy đúng vấn đề, đúng lời hứa, đúng bằng chứng và biết rõ bước tiếp theo.',
    outcomes: ['Thêm khách từ cùng lượng truy cập', 'Giảm chi phí mỗi khách mà không cần tăng giá thầu', 'Tìm ra thông điệp và ưu đãi có thể mở rộng'],
    pains: ['Nhiều lượt truy cập nhưng ít form', 'Khách rời trang trên điện thoại', 'Trang nói nhiều về doanh nghiệp, ít nói điều khách cần'],
    process: ['Kiểm tra số liệu, bản đồ nhiệt và các bước điền form', 'Tìm chỗ khách vướng và lý do ngần ngại trên từng màn hình', 'Viết lại phần đầu trang, nút bấm và bằng chứng', 'Lên kế hoạch thử nghiệm A/B theo mức tác động', 'Báo cáo mức tăng số khách và chất lượng khách'],
    proof: 'Hợp với mọi doanh nghiệp đang trả tiền cho lượt truy cập, hoặc đã có khách từ Google nhưng chưa khai thác hết.'
  },
  {
    slug: 'thiet-ke-website',
    menuDesc: 'Website nhanh, chuẩn SEO, dễ quản trị, dẫn khách tới bước liên hệ',
    deliverables: ['Sơ đồ thông tin và đường đi của người dùng', 'Bản thiết kế giao diện máy tính và điện thoại', 'Website hoàn chỉnh đã kiểm thử', 'Cài đặt đo lường khách liên hệ', 'Tài liệu và buổi hướng dẫn tự quản trị'],
    artifact: {image: null, need: 'Ảnh chụp một website SOHO đã làm, đã được khách đồng ý'},
    eyebrow: 'Thiết kế website',
    title: 'Thiết kế website cho doanh nghiệp cần một công cụ bán hàng chạy cả ngày',
    menuTitle: 'Thiết kế website',
    category: 'Website và thương hiệu',
    intro: 'Dành cho doanh nghiệp cần website mới hoặc làm lại: đúng nhận diện thương hiệu, chạy tốt trên điện thoại, chuẩn SEO và đo được khách liên hệ.',
    promise: 'SOHO thiết kế theo yêu cầu, không dùng mẫu có sẵn: nghiên cứu ngành và khách hàng, vẽ đường đi của người dùng, thiết kế giao diện, lập trình, đưa nội dung lên và hướng dẫn bạn tự quản trị.',
    insight: 'Website là nơi đầu tiên khách tìm đến để hiểu về bạn. Website đẹp mà chậm trên điện thoại, hoặc không dẫn khách tới bước liên hệ, là bỏ phí tiền quảng cáo và SEO đổ vào.',
    outcomes: ['Giao diện đúng nhận diện thương hiệu, thống nhất trên mọi thiết bị', 'Mỗi trang có mục tiêu rõ: gọi, nhắn tin, đặt lịch hoặc mua', 'Sẵn sàng cho SEO và quảng cáo: tải nhanh, đo được hành động của khách'],
    pains: ['Website cũ chậm, vỡ bố cục trên điện thoại', 'Có website nhưng gần như không ai liên hệ qua đó', 'Muốn sửa nội dung phải nhờ người khác, mất vài ngày'],
    process: ['Tư vấn nhu cầu, nghiên cứu ngành và chân dung khách hàng', 'Lên chiến lược, đường đi của người dùng và sơ đồ thông tin', 'Thiết kế giao diện theo nhận diện thương hiệu', 'Lập trình, tối ưu tốc độ trên điện thoại, kiểm thử tính năng', 'Đưa nội dung lên, chạy chính thức, hướng dẫn quản trị và bảo trì'],
    proof: 'Có thể tích hợp đặt lịch, thanh toán, quản lý khách hàng, email marketing và nhiều ngôn ngữ khi cần.'
  },
  {
    slug: 'nhan-dien-thuong-hieu',
    menuDesc: 'Logo, màu, chữ và cách dùng nhất quán ở mọi điểm chạm',
    deliverables: ['Logo và các phiên bản sử dụng', 'Bảng màu và kiểu chữ', 'Bộ ứng dụng: văn phòng phẩm, bao bì, mạng xã hội', 'File thiết kế, file in và file xem trước', 'Bộ hướng dẫn thương hiệu (brand guideline)'],
    artifact: {image: null, need: 'Ảnh một bộ nhận diện SOHO đã làm, đã được khách đồng ý'},
    eyebrow: 'Nhận diện thương hiệu',
    title: 'Thiết kế nhận diện thương hiệu nhất quán từ online đến cửa hàng',
    menuTitle: 'Nhận diện thương hiệu',
    category: 'Website và thương hiệu',
    intro: 'Dành cho doanh nghiệp mới ra mắt, đổi định vị, hoặc đang có hình ảnh mỗi nơi một kiểu.',
    promise: 'SOHO thiết kế logo, bộ nhận diện và hệ thống hình ảnh dựa trên tính cách thương hiệu, khách hàng mục tiêu và định vị, để dùng được ngay trên web, mạng xã hội, bao bì và văn phòng phẩm.',
    insight: 'Mỗi lần thương hiệu xuất hiện là một lần khách nhớ thêm hoặc quên bạn. Chỉ một chỗ lệch về màu, chữ hay logo cũng đủ làm giảm thiện cảm và phá vỡ sự nhất quán đã xây.',
    outcomes: ['Khách nhận ra thương hiệu nhanh hơn ở mọi điểm chạm', 'Hình ảnh thống nhất giữa web, mạng xã hội, bao bì và cửa hàng', 'Có bộ hướng dẫn để đội nhà và đối tác tự làm đúng'],
    pains: ['Logo và màu sắc mỗi nơi một kiểu', 'Thương hiệu trông giống đối thủ, khó nhớ', 'Thiết kế đẹp trên màn hình nhưng khó dùng khi in hay làm quảng cáo'],
    process: ['Tư vấn phạm vi, báo giá và ký hợp đồng', 'Tìm hiểu doanh nghiệp: giá trị cốt lõi, tầm nhìn, tính cách thương hiệu', 'Nghiên cứu ngành, khách hàng mục tiêu và đối thủ', 'Đề xuất hướng: màu sắc, kiểu chữ, phong cách đồ họa, cấu trúc logo', 'Thiết kế logo và các ứng dụng: văn phòng phẩm, bao bì, mạng xã hội', 'Trình bày, chỉnh theo phản hồi, đóng gói và bàn giao kèm hướng dẫn'],
    proof: 'SOHO đưa nhiều phương án để chọn và làm theo mốc thời gian rõ, hạn chế sửa đi sửa lại.'
  },
  {
    slug: 'thiet-ke-mobile-app',
    menuDesc: 'Ứng dụng Android và iOS: đặt lịch, đặt hàng, quản lý nội bộ',
    deliverables: ['Bản mô tả tính năng', 'Khung màn hình và luồng sử dụng', 'Thiết kế giao diện', 'App Android và iOS đã kiểm thử', 'Kế hoạch bảo trì và cập nhật'],
    artifact: {image: null, need: 'Ảnh màn hình một app SOHO đã làm, đã được khách đồng ý'},
    eyebrow: 'Thiết kế Mobile App',
    title: 'Thiết kế và phát triển ứng dụng di động cho Android và iOS',
    menuTitle: 'Thiết kế Mobile App',
    category: 'Website và thương hiệu',
    intro: 'Dành cho doanh nghiệp cần app đặt lịch, đặt hàng, bán hàng, dịch vụ tiện ích hoặc quản lý nội bộ.',
    promise: 'SOHO đi cùng bạn từ ý tưởng, khung màn hình, thiết kế giao diện, lập trình đến bảo trì và cập nhật. App có thể nối với website, hệ thống quản trị hoặc phần mềm quản lý khách hàng đang có.',
    insight: 'App đáng làm khi khách quay lại thường xuyên: đặt lịch, đặt hàng, tích điểm. Vì vậy việc đầu tiên là xác định khách dùng app để làm gì, trước khi vẽ bất kỳ màn hình nào.',
    outcomes: ['Giao diện dễ dùng, chạy mượt trên Android và iOS', 'Nối với website và hệ thống đang có, không nhập liệu hai lần', 'Có người bảo trì và cập nhật sau khi ra mắt'],
    pains: ['Khách phải gọi điện hoặc nhắn tin mới đặt được lịch, đặt được hàng', 'Dữ liệu khách nằm rải rác, không ai nắm hết', 'App cũ chậm, hay lỗi, không ai cập nhật'],
    process: ['Làm rõ ý tưởng và việc khách sẽ làm trên app', 'Vẽ khung màn hình và luồng sử dụng', 'Thiết kế giao diện và trải nghiệm', 'Lập trình, nối với website hoặc hệ thống quản trị', 'Kiểm thử, đưa lên kho ứng dụng, bảo trì và cập nhật'],
    proof: 'Phù hợp cho app đặt lịch, đặt hàng, thương mại điện tử, dịch vụ tiện ích hoặc quản lý nội bộ.'
  },
  {
    slug: 'content-marketing-pr',
    menuDesc: 'Bài chuyên sâu, câu chuyện khách hàng và góc cho báo chí',
    deliverables: ['Bản đồ chủ đề và câu hỏi của khách', 'Lịch nội dung', 'Bài chủ đề và bài vệ tinh', 'Câu chuyện khách hàng', 'Bộ tài liệu cho đội sale', 'Báo cáo số khách đã đọc bài trước khi mua'],
    artifact: {image: null, need: 'Sơ đồ topic cluster thật của một dự án'},
    eyebrow: 'Content marketing & PR',
    title: 'Nội dung và PR tạo niềm tin trước khi khách mua',
    menuTitle: 'Nội dung & PR',
    category: 'Nội dung và đo lường',
    intro: 'Dành cho thương hiệu cần nội dung có chiến lược: không chỉ đăng đều, mà phải giúp SEO, giúp sale và tạo niềm tin.',
    promise: 'SOHO làm bài chuyên sâu, câu chuyện khách hàng và góc nhìn cho báo chí, để nuôi nhu cầu ở mọi bước trước khi khách mua.',
    insight: 'Khách không đọc nội dung để nghe quảng cáo. Họ đọc để bớt rủi ro trước khi mua: so sánh lựa chọn, hiểu chi phí, thấy bằng chứng và tin vào năng lực.',
    outcomes: ['Có nội dung cho từng bước khách đi qua', 'Thương hiệu được nhìn nhận là người hiểu nghề', 'Đội sale có tài liệu để gửi khách'],
    pains: ['Đăng đều nhưng không ra khách', 'Nội dung giống đối thủ, thiếu quan điểm riêng', 'Sale không có câu chuyện khách hàng, bài hướng dẫn hay bài so sánh để thuyết phục'],
    process: ['Tìm ý định và lý do ngần ngại của khách', 'Viết bài chủ đề, bài vệ tinh, câu chuyện khách hàng và tài liệu cho sale', 'Biến số liệu nội bộ thành góc nhìn có giá trị', 'Tối ưu cho Google, mạng xã hội và báo chí', 'Đo số khách đã đọc bài trước khi mua và tương tác có chất lượng'],
    proof: 'Hợp với B2B, dịch vụ chuyên môn, giáo dục, công nghệ và thương hiệu cần xây lòng tin lâu dài.'
  },
  {
    slug: 'ga4-looker-dashboard',
    menuDesc: 'Đo đúng hành động của khách, báo cáo về một nơi',
    deliverables: ['Kế hoạch đo lường', 'Quy tắc đặt tên hành động', 'Cài đặt GA4, Google Tag Manager, đo lường Meta', 'Báo cáo Looker theo từng người xem', 'Hướng dẫn đọc báo cáo'],
    artifact: {image: null, need: 'Một trang Looker dashboard thật, đã che số nhạy cảm'},
    eyebrow: 'GA4 & Looker',
    title: 'GA4 và báo cáo Looker giúp bạn thấy tiền đến từ đâu',
    menuTitle: 'Đo lường & báo cáo GA4',
    category: 'Nội dung và đo lường',
    intro: 'Dành cho doanh nghiệp chạy nhiều kênh nhưng không tin được số liệu, hoặc không biết kênh nào thật sự ra kết quả.',
    promise: 'SOHO cài đặt cách đo, các hành động quan trọng và báo cáo, để lượt truy cập, khách tiềm năng, đơn hàng và doanh thu nằm chung một chỗ.',
    insight: 'Báo cáo tốt không phải là nhiều biểu đồ. Báo cáo tốt trả lời được: kênh nào đang mang khách, tiền nào đang phí, và việc gì cần làm tiếp.',
    outcomes: ['Marketing và sale dùng chung một bộ số', 'Hết tranh cãi vì mỗi kênh báo một con số', 'Quyết định ngân sách theo chi phí mỗi đơn và doanh thu'],
    pains: ['GA4 mất số đơn hoặc đếm sai hành động', 'Số quảng cáo, sổ bán hàng và website không khớp', 'Chủ doanh nghiệp mất quá nhiều thời gian gom số'],
    process: ['Kiểm tra cách đo và đường đi của dữ liệu hiện tại', 'Định nghĩa các hành động cần đo và cách đặt tên', 'Cài GA4, Google Tag Manager và đo lường Meta khi cần', 'Thiết kế báo cáo Looker theo người xem', 'Kiểm tra số liệu và hướng dẫn đọc báo cáo hằng tuần'],
    proof: 'Hợp với doanh nghiệp có nhiều kênh, nhiều trang đích, nhiều bộ phận cần chung một nguồn số liệu.'
  },
  {
    slug: 'tu-van-chien-luoc-sprint',
    menuDesc: 'Biết nên làm gì trước trong 30 đến 90 ngày tới',
    deliverables: ['Biên bản trao đổi', 'Báo cáo kiểm tra các kênh', 'Phân tích đối thủ', 'Lộ trình 30 đến 90 ngày', 'Danh sách việc và con số cần đạt'],
    artifact: {image: null, need: 'Một trang roadmap sprint đã bàn giao, đã che tên khách hàng'},
    eyebrow: 'Growth strategy sprint',
    title: 'Tư vấn lộ trình marketing để biết nên làm gì trước',
    menuTitle: 'Tư vấn lộ trình 90 ngày',
    category: 'Nội dung và đo lường',
    intro: 'Dành cho chủ doanh nghiệp, trưởng marketing hoặc trưởng sale cần thứ tự ưu tiên rõ trước khi chi tiền cho SEO, quảng cáo, nội dung hay đo lường.',
    promise: 'SOHO làm một vòng chẩn đoán ngắn để tìm chỗ nghẽn, ước lượng tác động và xếp việc nên làm trong 30 đến 90 ngày.',
    insight: 'Doanh nghiệp ít khi thiếu ý tưởng marketing. Cái thiếu là thứ tự ưu tiên dựa trên biên lợi nhuận, hành vi khách, năng lực đội nhà và số liệu đang có.',
    outcomes: ['Có lộ trình 30 đến 90 ngày rõ việc, rõ con số, rõ người làm', 'Biết kênh nào làm trước, kênh nào tạm dừng', 'Bớt rủi ro đổ tiền vào chiến dịch chưa sẵn sàng'],
    pains: ['Không biết nên làm SEO, quảng cáo hay nội dung trước', 'Đổi agency nhiều lần mà vẫn không có hệ thống', 'Đội nhà bận rộn nhưng không rõ tác động tới doanh thu'],
    process: ['Trao đổi nhanh về mục tiêu, biên lợi nhuận và cách bán hàng', 'Kiểm tra website, quảng cáo, nội dung và số liệu hiện tại', 'Phân tích thị trường, đối thủ và cơ hội nên làm trước', 'Lập lộ trình 30 đến 90 ngày', 'Bàn giao danh sách việc, con số cần đạt và cách đo'],
    proof: 'Hợp với SME đang tăng tốc, B2B bán hàng chu kỳ dài và đội muốn ra quyết định marketing gọn.'
  }
];

export function getCoreServices(){
  return coreServices.map(c => ({...servicePages.find(s => s.slug === c.slug), ...c}));
}

export function getServicePage(slug){
  return servicePages.find(service => service.slug === slug);
}

export function getServicesByGroup(){
  return serviceGroups.map(group => ({
    group,
    items: servicePages.filter(service => service.category === group)
  }));
}
