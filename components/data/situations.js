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
      'Website chỉ có trang chủ và vài trang giới thiệu chung, không có trang nào trả lời đúng câu khách gõ như "giá…", "…ở quận 7", "…loại nào tốt".',
      'Web chậm hoặc vỡ giao diện trên điện thoại, Google xếp xuống dưới.',
      'Có bài viết nhưng không dẫn khách sang trang dịch vụ để liên hệ.'
    ],
    first: ['Khám lỗi website, sửa trước những lỗi làm Google khó đọc.', 'Liệt kê các câu khách hay gõ khi sắp mua.', 'Viết trước các trang cho những câu đó, nối về trang dịch vụ.'],
    get: ['Danh sách lỗi, xếp theo việc cần sửa trước', 'Danh sách câu khách hay tìm', 'Báo cáo tháng: số người tìm thấy và liên hệ'],
    notYet: 'Bạn cần khách trong vài tuần tới. SEO thường cần vài tháng, nên chạy quảng cáo Google song song.',
    proof: 'Một studio chụp ảnh ở TP.HCM (giữ kín tên): 6 bài mới có 102 lượt bấm từ Google trong tháng đầu.',
    caseSlug: 'seo-studio-chup-anh-tphcm'
  },
  {
    key: 'gads',
    icon: 'gads',
    service: 'Quảng cáo Google',
    slug: 'google-ads-shopping',
    title: 'Cần có khách hỏi mua ngay',
    why: [
      'Quảng cáo hiện cả với người chỉ tìm đọc, vì chọn từ khóa quá rộng.',
      'Người bấm bị đưa về trang chủ, phải tự đi tìm sản phẩm.',
      'Không đếm được ai gọi, ai điền form, nên không biết đồng tiền nào ra khách.'
    ],
    first: ['Xem tài khoản đang chạy, tắt các từ khóa tốn tiền mà không ra khách.', 'Gắn cách đếm cuộc gọi, tin nhắn, form.', 'Đưa người bấm tới đúng trang sản phẩm, có nút gọi ngay.'],
    get: ['Chi phí cho mỗi khách liên hệ', 'Danh sách từ khóa ra khách và từ khóa đã tắt', 'Cùng xem số hai tuần một lần'],
    notYet: 'Bạn chưa đếm được cuộc gọi, form, đơn hàng. Sửa phần đếm trước, rồi mới tăng tiền quảng cáo.',
    proof: 'Chưa có dự án Google Ads được khách cho phép công bố số. Đọc trước bài "Đo Performance Ads bằng doanh thu thực tế".',
    blogSlug: 'toi-uu-roas-performance-ads'
  },
  {
    key: 'meta',
    icon: 'meta',
    service: 'Quảng cáo Facebook, TikTok',
    slug: 'meta-tiktok-ads',
    title: 'Đăng bài đều mà ít người hỏi',
    why: ['Bài đăng chỉ tới người đã theo dõi trang, ít người mới thấy.', 'Hình đẹp nhưng không nói giá, ưu đãi, cách đặt.', 'Khách nhắn tin vào mà trả lời chậm, khách đi chỗ khác.'],
    first: ['Chạy quảng cáo nhắn tin tới đúng khu vực, đúng nhóm khách.', 'Thử vài mẫu hình, video cùng lúc, giữ mẫu có nhiều người hỏi.', 'Viết sẵn tin chào và câu trả lời mẫu để chốt nhanh.'],
    get: ['Các mẫu quảng cáo đã thử và mẫu hiệu quả nhất', 'Bộ tin trả lời mẫu', 'Chi phí cho mỗi tin nhắn hỏi mua'],
    notYet: 'Bạn chưa có hình ảnh, video sản phẩm để thử nhiều mẫu. Chuẩn bị nội dung trước.',
    proof: 'Le Viva Resort: tỉ lệ khách nhắn hỏi đặt phòng gấp 2,3 lần giai đoạn trước.',
    caseSlug: 'le-viva-resort'
  },
  {
    key: 'web',
    icon: 'web',
    service: 'Thiết kế website',
    slug: 'thiet-ke-website',
    title: 'Khách vào website rồi bỏ đi',
    why: ['Trang mở chậm trên điện thoại, khách không đợi.', 'Không thấy giá, không thấy cách đặt, phải nhắn hỏi từ đầu.', 'Nút gọi, nhắn Zalo nằm cuối trang hoặc không có.'],
    first: ['Xem khách hay bỏ đi ở trang nào.', 'Sắp lại trang theo đúng thứ tự khách hỏi: bán gì, giá, vì sao tin, cách đặt.', 'Đặt nút gọi, nhắn ở chỗ dễ bấm trên điện thoại.'],
    get: ['Website đứng tên bạn', 'Hướng dẫn tự sửa chữ, ảnh, giá', 'Cách đếm khách liên hệ từ website'],
    notYet: 'Website hiện tại vẫn ổn, chỉ vài trang yếu. Sửa những trang đó thay vì làm lại toàn bộ.',
    proof: 'King Decor Luxury: sắp lại website theo nhóm dịch vụ, có bài trả lời câu hỏi của chủ đầu tư.',
    caseSlug: 'king-decor-luxury'
  },
  {
    key: 'brand',
    icon: 'brand',
    service: 'Nhận diện thương hiệu',
    slug: 'nhan-dien-thuong-hieu',
    title: 'Mỗi nơi một kiểu, khách khó nhớ tên',
    why: ['Logo làm từ lâu, mỗi lần in ấn một người thiết kế một kiểu.', 'Bảng hiệu, fanpage, website khác màu, khác chữ.', 'Khách thấy quảng cáo nhưng không nhận ra là cùng một cửa hàng.'],
    first: ['Chốt điều bạn muốn khách nhớ về mình.', 'Làm logo, màu, kiểu chữ.', 'Làm sẵn mẫu bài đăng, danh thiếp, bảng hiệu để đội bạn tự dùng.'],
    get: ['Bộ logo, màu, kiểu chữ', 'Mẫu dùng ngay cho fanpage, in ấn', 'Sổ hướng dẫn dùng cho đúng'],
    notYet: 'Bạn chưa rõ bán cho ai và khác đối thủ ở đâu. Nên tư vấn chiến lược trước, làm nhận diện sau.',
    proof: 'Le Viva Resort: dựng lại hình ảnh fanpage theo tinh thần thiên nhiên, ven biển.',
    caseSlug: 'le-viva-resort'
  },
  {
    key: 'app',
    icon: 'app',
    service: 'Thiết kế Mobile App',
    slug: 'thiet-ke-mobile-app',
    title: 'Khách mua lại nhiều lần, muốn đặt nhanh hơn',
    why: ['Khách quen lần nào cũng phải gọi, nhắn để đặt.', 'Nhân viên ghi đơn bằng tay hoặc qua tin nhắn, dễ sót.', 'Không có cách nhắc khách quay lại đúng lúc.'],
    first: ['Xem khách quay lại bao lâu một lần. Đủ thường xuyên mới nên làm app.', 'Bắt đầu với vài chức năng chính: đặt lịch, đặt hàng, nhắc lịch.', 'Thử với một nhóm khách quen trước khi mở rộng.'],
    get: ['App đứng tên bạn trên kho ứng dụng', 'Trang quản lý đơn cho nhân viên', 'Số người dùng quay lại mỗi tháng'],
    notYet: 'Khách chỉ mua một lần hoặc rất thưa. Website tốt là đủ, chưa cần app.',
    proof: 'Chưa có dự án app được khách cho phép công bố.'
  }
];
