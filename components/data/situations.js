// Bộ chọn tình huống ở trang chủ và trang Dịch vụ: khách chọn chuyện đang gặp, xem vì sao, SOHO làm gì trước, khi nào chưa nên làm.
// Viết cho chủ doanh nghiệp ít rành công nghệ (docs/redesign/WRITING_GUIDE.md). "case" chỉ dẫn tới dự án đã có phép công bố trong cases.js.
// Biểu tượng kính: public/media/icon/<icon>.webp, do Codex vẽ ngày 31/10/2026 (loại C, minh họa).
export const SITUATIONS = [
  {
    key: 'seo',
    icon: 'seo',
    service: 'SEO website',
    slug: 'seo-tong-the',
    title: 'Khách tìm trên Google mà không thấy bạn',
    why: [
      'Website chỉ có trang chủ và vài trang giới thiệu chung. Không trang nào trả lời đúng điều khách hay tìm, như "giá…", "…ở quận 7", "…loại nào tốt".',
      'Web tải chậm hoặc vỡ giao diện trên điện thoại nên bị Google xếp thấp.',
      'Có bài viết nhưng không dẫn khách sang trang dịch vụ để liên hệ.'
    ],
    first: [
      'Kiểm tra website, sửa trước những lỗi khiến Google khó đọc.',
      'Liệt kê các từ khóa khách hay tìm khi sắp mua.',
      'Viết trước các trang cho những từ khóa đó, đặt link về trang dịch vụ.'
    ],
    get: ['Danh sách lỗi, xếp theo thứ tự cần sửa', 'Bộ từ khóa khách hay tìm', 'Báo cáo hằng tháng: lượt hiển thị, lượt nhấp và số khách liên hệ'],
    notYet: 'Bạn cần khách ngay trong vài tuần tới. SEO thường mất vài tháng, nên chạy song song quảng cáo Google.',
    proof: 'Studio 1 Nhà: 6 bài viết mới có 102 lượt nhấp từ Google ngay trong tháng đầu.',
    caseSlug: 'seo-studio-chup-anh-tphcm'
  },
  {
    key: 'gads',
    icon: 'gads',
    service: 'Quảng cáo Google',
    slug: 'google-ads-shopping',
    title: 'Cần có khách hàng ngay',
    why: [
      'Từ khóa chọn quá rộng nên quảng cáo hiển thị cả với người chỉ tìm đọc.',
      'Khách nhấp vào quảng cáo lại bị đưa về trang chủ, phải tự đi tìm sản phẩm.',
      'Không đo được ai gọi, ai điền form, nên không biết đồng tiền nào ra khách.'
    ],
    first: [
      'Rà tài khoản đang chạy, tắt các từ khóa tốn tiền mà không ra khách.',
      'Cài đo lường cuộc gọi, tin nhắn và form.',
      'Sửa để khách nhấp quảng cáo là vào thẳng trang sản phẩm, có sẵn nút gọi.'
    ],
    get: ['Chi phí cho mỗi khách liên hệ', 'Danh sách từ khóa ra khách và từ khóa đã tắt', 'Hai tuần một lần cùng bạn xem số'],
    notYet: 'Bạn chưa đo được cuộc gọi, form, đơn hàng. Hãy sửa phần đo lường trước, rồi mới tăng ngân sách quảng cáo.',
    proof: 'Đo hiệu quả quảng cáo bằng doanh thu thực tế, không chỉ bằng giá mỗi lượt nhấp.',
    blogSlug: 'toi-uu-roas-performance-ads'
  },
  {
    key: 'meta',
    icon: 'meta',
    service: 'Quảng cáo Facebook',
    slug: 'facebook-ads',
    title: 'Đăng bài đều mà ít ai nhắn hỏi',
    why: [
      'Bài đăng chỉ tới người đã theo dõi trang, ít người mới thấy.',
      'Hình đẹp nhưng không ghi giá, ưu đãi hay cách đặt hàng.',
      'Khách nhắn tin mà trả lời chậm là khách đi chỗ khác.'
    ],
    first: [
      'Chạy quảng cáo tin nhắn nhắm đúng khu vực, đúng tệp khách.',
      'Thử nhiều mẫu hình, video cùng lúc, giữ lại mẫu có nhiều tin nhắn nhất.',
      'Soạn sẵn tin chào và câu trả lời mẫu để chốt đơn nhanh.'
    ],
    get: ['Các mẫu quảng cáo đã thử và mẫu hiệu quả nhất', 'Bộ tin nhắn trả lời mẫu', 'Chi phí cho mỗi tin nhắn từ khách'],
    notYet: 'Bạn chưa có hình ảnh, video sản phẩm để thử nhiều mẫu. Nên chuẩn bị nội dung trước.',
    proof: 'Le Viva Resort: tỉ lệ khách nhắn tin hỏi đặt phòng cao gấp 2,3 lần giai đoạn trước.',
    caseSlug: 'le-viva-resort'
  },
  {
    key: 'web',
    icon: 'web',
    service: 'Thiết kế website',
    slug: 'thiet-ke-website',
    title: 'Khách vào website rồi bỏ đi',
    why: [
      'Trang tải chậm trên điện thoại, khách không đợi.',
      'Không thấy giá, không thấy cách đặt, khách phải nhắn hỏi từ đầu.',
      'Nút gọi, nhắn Zalo nằm cuối trang hoặc không có.'
    ],
    first: [
      'Xem khách hay rời đi ở trang nào.',
      'Sắp xếp lại trang theo đúng thứ tự khách cần biết: bán gì, giá bao nhiêu, vì sao nên tin, đặt thế nào.',
      'Đặt nút gọi, nhắn tin ở chỗ dễ bấm trên điện thoại.'
    ],
    get: ['Website đứng tên doanh nghiệp bạn', 'Hướng dẫn tự sửa chữ, ảnh, giá', 'Đo lường khách liên hệ từ website'],
    notYet: 'Website hiện tại vẫn ổn, chỉ vài trang yếu. Nên sửa những trang đó thay vì làm lại toàn bộ.',
    proof: 'King Decor Luxury: sắp xếp lại website theo nhóm dịch vụ, có bài viết trả lời câu hỏi của chủ đầu tư.',
    caseSlug: 'king-decor-luxury'
  },
  {
    key: 'brand',
    icon: 'brand',
    service: 'Nhận diện thương hiệu',
    slug: 'nhan-dien-thuong-hieu',
    title: 'Mỗi nơi một kiểu, khách khó nhớ tên',
    why: [
      'Logo làm từ lâu, mỗi lần in ấn lại do một người thiết kế theo một kiểu.',
      'Bảng hiệu, fanpage, website khác màu, khác chữ.',
      'Khách thấy quảng cáo nhưng không nhận ra là cùng một cửa hàng.'
    ],
    first: ['Chốt điều bạn muốn khách nhớ về mình.', 'Thiết kế logo, màu sắc, kiểu chữ.', 'Làm sẵn mẫu bài đăng, danh thiếp, bảng hiệu để nhân viên tự dùng.'],
    get: ['Bộ logo, màu sắc, kiểu chữ', 'Mẫu dùng ngay cho fanpage và in ấn', 'Sổ tay hướng dẫn sử dụng cho đúng'],
    notYet: 'Bạn chưa rõ bán cho ai và khác đối thủ ở đâu. Nên tư vấn chiến lược trước, làm nhận diện sau.',
    proof: 'Le Viva Resort: làm mới hình ảnh fanpage theo tinh thần thiên nhiên, ven biển.',
    caseSlug: 'le-viva-resort'
  },
  {
    key: 'app',
    icon: 'app',
    service: 'Thiết kế Mobile App',
    slug: 'thiet-ke-mobile-app',
    title: 'Khách mua lại nhiều lần, muốn đặt nhanh hơn',
    why: [
      'Khách quen lần nào cũng phải gọi, nhắn tin mới đặt được.',
      'Nhân viên ghi đơn bằng tay hoặc qua tin nhắn, dễ sót.',
      'Không có cách nhắc khách quay lại đúng lúc.'
    ],
    first: [
      'Xem khách quay lại bao lâu một lần. Đủ thường xuyên mới nên làm app.',
      'Bắt đầu với vài tính năng chính: đặt lịch, đặt hàng, nhắc lịch.',
      'Cho một nhóm khách quen dùng thử trước khi mở rộng.'
    ],
    get: ['App đứng tên doanh nghiệp bạn trên Google Play và App Store', 'Trang quản lý đơn cho nhân viên', 'Số người dùng quay lại mỗi tháng'],
    notYet: 'Khách chỉ mua một lần hoặc rất thưa. Website tốt là đủ, chưa cần app.',
    proof: 'Chưa có dự án app tiêu biểu đăng tại đây.'
  }
];
