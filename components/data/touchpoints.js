// Kiến trúc hành trình khách hàng cho phần dịch vụ (docs/services/CUSTOMER_JOURNEY_ARCHITECTURE.md).
// Khung khái niệm, không phải phễu cứng: một dịch vụ có thể tạo giá trị ở nhiều chặng, khách có thể vào từ bất kỳ điểm chạm nào.
// Không có số liệu kết quả; "metric" là con số dùng để đánh giá, không phải cam kết.

export const STAGES = [
  {
    key: 'nhan-biet',
    num: '01',
    name: 'Nhận biết',
    need: 'Biết tới thương hiệu, thấy vấn đề của mình có người giải',
    action: 'Xem, dừng lại, nhớ tên',
    metric: 'Người mới tiếp cận đúng tệp, lượt tìm tên thương hiệu'
  },
  {
    key: 'tim-hieu',
    num: '02',
    name: 'Tìm kiếm và cân nhắc',
    need: 'Tìm ai giải được việc này, so sánh các lựa chọn',
    action: 'Tìm trên Google, hỏi AI, đọc, so sánh',
    metric: 'Độ phủ nhóm từ khóa người muốn mua, lượt vào trang dịch vụ'
  },
  {
    key: 'chuyen-doi',
    num: '03',
    name: 'Chuyển đổi',
    need: 'Đủ tin để liên hệ, đặt hàng',
    action: 'Gọi, nhắn tin, điền form, mua',
    metric: 'Khách tiềm năng đạt chuẩn, chi phí mỗi đơn'
  },
  {
    key: 'gan-bo',
    num: '04',
    name: 'Trải nghiệm và quay lại',
    need: 'Dùng thuận tiện, có lý do quay lại',
    action: 'Đặt lại, mua lại, giới thiệu',
    metric: 'Khách quay lại, đơn lặp lại'
  }
];

export const FOUNDATION = {
  key: 'nen-tang',
  num: '∞',
  name: 'Nền tảng xuyên suốt',
  need: 'Chiến lược kinh doanh, dữ liệu khách và bán hàng, tối ưu liên tục',
  action: 'Chọn việc làm trước, đo, giữ hoặc dừng',
  metric: 'Kênh nào góp vào đơn, lộ trình có con số'
};

/*
  Vai trò của từng dịch vụ:
  primary: chặng tạo giá trị chính · supporting: chặng hỗ trợ
  need: khách đang cần gì khi gặp điểm chạm này · interaction: khách làm gì ở đó
  next: bước tiếp theo trên hành trình, kèm lý do nối · pair: dịch vụ hỗ trợ hay đi cùng
  notYet: khi nào chưa nên làm, và làm gì thay · metric: con số để đánh giá · cta: nhãn nút liên hệ theo ngữ cảnh
*/
export const ROLES = {
  'nhan-dien-thuong-hieu': {
    primary: 'nhan-biet',
    supporting: ['chuyen-doi'],
    need: 'Nhận ra bạn và thấy bạn đáng tin ngay lần gặp đầu',
    interaction: 'Thấy logo, màu, hình ảnh ở quảng cáo, bảng hiệu, website',
    chain: ['Định vị', 'Nhận diện thị giác', 'Website, chiến dịch', 'Khách nhận ra bạn'],
    next: {slug: 'thiet-ke-website', why: 'Website là nơi đầu tiên bộ nhận diện phải chạy đúng'},
    pair: ['content-marketing-pr', 'meta-tiktok-ads'],
    notYet: 'Chưa rõ bán cho ai và khác đối thủ ở đâu: làm tư vấn lộ trình trước, nhận diện sau.',
    notYetSlug: 'tu-van-chien-luoc-sprint',
    metric: 'Lượt tìm tên thương hiệu, mức nhất quán hình ảnh ở các điểm chạm',
    cta: 'Trao đổi về nhận diện thương hiệu'
  },
  'meta-tiktok-ads': {
    primary: 'nhan-biet',
    supporting: ['chuyen-doi', 'gan-bo'],
    need: 'Thấy một vấn đề mình chưa nghĩ tới, hoặc một ưu đãi đúng lúc',
    interaction: 'Lướt bảng tin, xem video ngắn, nhắn tin',
    chain: ['Nội dung quảng cáo', 'Quan tâm', 'Trang đích hoặc tin nhắn', 'Chuyển đổi', 'Đo lường'],
    next: {slug: 'cro-landing-page', why: 'Người bấm quảng cáo cần một trang đích nói tiếp đúng thông điệp'},
    pair: ['content-marketing-pr', 'ga4-looker-dashboard'],
    notYet: 'Chưa có nội dung, hình ảnh để chạy thử nhiều mẫu: chuẩn bị nội dung trước.',
    notYetSlug: 'content-marketing-pr',
    metric: 'Chi phí mỗi khách tiềm năng đạt chuẩn, tỉ lệ chốt từ tin nhắn',
    cta: 'Rà soát tài khoản Meta, TikTok'
  },
  'content-marketing-pr': {
    primary: 'nhan-biet',
    supporting: ['tim-hieu', 'gan-bo'],
    need: 'Hiểu vấn đề, có lý do tin một bên',
    interaction: 'Đọc bài, xem video, đọc báo nhắc tên',
    chain: ['Câu hỏi của khách', 'Định dạng nội dung', 'Kênh', 'Hành động tiếp theo'],
    next: {slug: 'seo-tong-the', why: 'Nội dung trả lời đúng câu hỏi sẽ được tìm thấy trên Google'},
    pair: ['seo-ai-overview', 'meta-tiktok-ads'],
    notYet: 'Chưa có người duyệt nội dung chuyên môn phía bạn: thống nhất người duyệt trước.',
    metric: 'Khách đọc bài trước khi liên hệ, số lần được nhắc tên',
    cta: 'Trao đổi kế hoạch nội dung'
  },
  'seo-tong-the': {
    primary: 'tim-hieu',
    supporting: ['chuyen-doi'],
    need: 'Tìm đúng đơn vị giải được việc mình đang cần',
    interaction: 'Gõ câu hỏi trên Google, đọc kết quả, vào trang',
    chain: ['Tìm trên Google', 'Trang dịch vụ, trang đích', 'Tối ưu chuyển đổi', 'Khách tiềm năng đạt chuẩn'],
    next: {slug: 'cro-landing-page', why: 'Khách từ Google cần một trang đích đủ thuyết phục để liên hệ'},
    pair: ['thiet-ke-website', 'content-marketing-pr'],
    notYet: 'Cần khách trong vài tuần tới: SEO thường cần vài tháng, nên chạy Google Ads song song.',
    notYetSlug: 'google-ads-shopping',
    metric: 'Khách để lại thông tin từ Google tự nhiên, độ phủ nhóm từ khóa mua',
    cta: 'Nhận đánh giá hệ thống SEO'
  },
  'seo-ai-overview': {
    primary: 'tim-hieu',
    supporting: [],
    need: 'Hỏi AI một câu và nhận câu trả lời có tên đơn vị phù hợp',
    interaction: 'Hỏi Google AI, ChatGPT, đọc nguồn được ghi',
    chain: ['Câu hỏi gửi AI', 'Nguồn đáng tin', 'Được nhắc tên', 'Vào website'],
    next: {slug: 'seo-tong-the', why: 'AI lấy nguồn từ các trang đã đủ tốt trên tìm kiếm thường'},
    pair: ['content-marketing-pr'],
    notYet: 'Website chưa có nền SEO cơ bản: làm SEO tổng thể trước.',
    notYetSlug: 'seo-tong-the',
    metric: 'Số câu hỏi mẫu AI trả lời có nhắc bạn (theo dõi định kỳ, không đảm bảo)',
    cta: 'Đánh giá mức sẵn sàng cho AI tìm kiếm'
  },
  'local-seo-google-maps': {
    primary: 'tim-hieu',
    supporting: ['chuyen-doi'],
    need: 'Tìm một nơi gần đây, mở cửa, đánh giá tốt',
    interaction: 'Tìm “gần đây” trên Google Maps, xem hồ sơ, gọi hoặc chỉ đường',
    chain: ['Tìm trong khu vực', 'Hồ sơ doanh nghiệp', 'Đánh giá', 'Gọi, chỉ đường, đặt lịch'],
    next: {slug: 'thiet-ke-website', why: 'Khách xem hồ sơ thường bấm sang website trước khi gọi'},
    pair: ['google-ads-shopping'],
    notYet: 'Không có địa điểm khách tới tận nơi: ưu tiên SEO tổng thể.',
    notYetSlug: 'seo-tong-the',
    metric: 'Lượt gọi, chỉ đường, bấm website từ hồ sơ Google',
    cta: 'Rà soát hồ sơ Google của bạn'
  },
  'google-ads-shopping': {
    primary: 'tim-hieu',
    supporting: ['chuyen-doi'],
    need: 'Mua hoặc liên hệ ngay khi đang có nhu cầu',
    interaction: 'Gõ từ khóa có ý định mua, bấm quảng cáo, so giá Shopping',
    chain: ['Từ khóa có ý định mua', 'Quảng cáo', 'Trang đích', 'Form, cuộc gọi', 'Số liệu bán hàng'],
    next: {slug: 'cro-landing-page', why: 'Mỗi lượt bấm đã trả tiền, trang đích quyết định nó thành đơn hay không'},
    pair: ['ga4-looker-dashboard'],
    notYet: 'Chưa đo được form, cuộc gọi, đơn hàng: sửa đo lường trước khi tăng ngân sách.',
    notYetSlug: 'ga4-looker-dashboard',
    metric: 'Chi phí mỗi đơn, doanh thu trên chi phí quảng cáo, lợi nhuận gộp',
    cta: 'Rà soát hiệu quả quảng cáo'
  },
  'thiet-ke-website': {
    primary: 'chuyen-doi',
    supporting: ['tim-hieu'],
    need: 'So sánh, kiểm tra năng lực, tìm cách liên hệ',
    interaction: 'Xem dịch vụ, dự án, giá, rồi gọi hoặc điền form',
    chain: ['Khách tới từ mọi kênh', 'Trang phù hợp', 'Bằng chứng', 'Liên hệ'],
    next: {slug: 'cro-landing-page', why: 'Sau khi ra mắt, đo và sửa những trang khách hay bỏ đi'},
    pair: ['seo-tong-the', 'nhan-dien-thuong-hieu'],
    notYet: 'Website hiện tại vẫn ổn, chỉ vài trang yếu: sửa trang đích thay vì làm lại toàn bộ.',
    notYetSlug: 'cro-landing-page',
    metric: 'Tỉ lệ khách vào web để lại thông tin, tốc độ tải trên điện thoại',
    cta: 'Tư vấn dự án website'
  },
  'cro-landing-page': {
    primary: 'chuyen-doi',
    supporting: [],
    need: 'Hiểu nhanh mình được gì, tin, và liên hệ dễ dàng',
    interaction: 'Đọc tiêu đề, xem bằng chứng, điền form',
    chain: ['Lượt truy cập', 'Trang đích', 'Thử nghiệm', 'Khách tiềm năng'],
    next: {slug: 'ga4-looker-dashboard', why: 'Thử nghiệm chỉ có ý nghĩa khi đo đúng từng lượt để lại thông tin'},
    pair: ['google-ads-shopping', 'thiet-ke-website'],
    notYet: 'Lượt truy cập còn quá ít để so sánh hai phiên bản: tăng lưu lượng trước.',
    notYetSlug: 'google-ads-shopping',
    metric: 'Tỉ lệ để lại thông tin trên trang đích',
    cta: 'Rà soát trang đích'
  },
  'thiet-ke-mobile-app': {
    primary: 'gan-bo',
    supporting: [],
    need: 'Làm lại một việc quen thuộc nhanh hơn',
    interaction: 'Mở app, đặt lịch, đặt hàng, nhận thông báo',
    chain: ['Có người dùng', 'Dùng lần đầu', 'Dùng lặp lại', 'Gắn bó'],
    next: {slug: 'ga4-looker-dashboard', why: 'Đo người dùng quay lại để biết app có đáng đầu tư tiếp'},
    pair: ['thiet-ke-website'],
    notYet: 'Khách chỉ mua một lần hoặc rất thưa: website tốt là đủ, chưa cần app.',
    notYetSlug: 'thiet-ke-website',
    metric: 'Người dùng quay lại, đơn lặp lại trong app',
    cta: 'Thảo luận ý tưởng ứng dụng'
  },
  'ga4-looker-dashboard': {
    primary: 'nen-tang',
    supporting: ['chuyen-doi'],
    need: 'Doanh nghiệp cần biết kênh nào thật sự góp vào đơn',
    interaction: 'Đội marketing, sale và chủ doanh nghiệp xem cùng một báo cáo',
    chain: ['Kênh', 'Hành động', 'Khách tiềm năng', 'Cơ hội đạt chuẩn', 'Đơn hàng', 'Doanh thu'],
    next: {slug: 'tu-van-chien-luoc-sprint', why: 'Có số đúng thì mới chọn được kênh nên tăng, kênh nên cắt'},
    pair: ['google-ads-shopping', 'meta-tiktok-ads'],
    notYet: 'Chưa có nơi ghi đơn hàng, khách hàng (CRM, sổ bán hàng): dựng nơi ghi trước.',
    metric: 'Kênh nào góp vào đơn, chênh lệch số nền tảng và số bán hàng',
    cta: 'Kiểm tra hệ thống đo lường'
  },
  'tu-van-chien-luoc-sprint': {
    primary: 'nen-tang',
    supporting: [],
    need: 'Chủ doanh nghiệp cần biết nên làm gì trước, với ngân sách đang có',
    interaction: 'Buổi làm việc, xem số liệu, chọn ưu tiên',
    chain: ['Chẩn đoán', 'Chọn ưu tiên', 'Phối hợp kênh', 'Thử nghiệm', 'Đo', 'Quyết định'],
    next: {slug: 'ga4-looker-dashboard', why: 'Lộ trình cần một bộ số để biết mỗi vòng có đi đúng hướng'},
    pair: ['seo-tong-the', 'google-ads-shopping'],
    notYet: 'Đã biết rõ kênh cần làm và có số đo: làm thẳng dịch vụ đó.',
    metric: 'Lộ trình 90 ngày có con số cho từng kênh',
    cta: 'Thảo luận lộ trình tăng trưởng'
  }
};

// Chẩn đoán theo vấn đề kinh doanh ở hub: thông tin tham khảo, không phải chẩn đoán chính thức.
export const DIAGNOSES = [
  {
    key: 'tim-thay',
    label: 'Ít người tìm thấy',
    bottleneck: 'Khách đang tìm nhưng bạn không xuất hiện ở Google, Maps hoặc câu trả lời của AI.',
    first: 'seo-tong-the',
    support: 'content-marketing-pr',
    improve: 'Thêm khách tự tìm đến từ tìm kiếm, bớt phụ thuộc quảng cáo về lâu dài.',
    caseSlug: 'king-decor-luxury'
  },
  {
    key: 'quang-cao',
    label: 'Chi phí quảng cáo cao',
    bottleneck: 'Ngân sách đi vào lượt bấm, lượt xem nhưng ít khi thành đơn có lãi.',
    first: 'google-ads-shopping',
    support: 'cro-landing-page',
    improve: 'Chi phí mỗi đơn rõ ràng hơn, ngân sách dồn về nhóm khách có lãi.',
    caseSlug: 'kronos-luxury-timepieces'
  },
  {
    key: 'chuyen-doi',
    label: 'Có người xem nhưng ít liên hệ',
    bottleneck: 'Khách tới trang nhưng không tìm thấy lý do hay cách để liên hệ.',
    first: 'cro-landing-page',
    support: 'thiet-ke-website',
    improve: 'Tỉ lệ để lại thông tin trên cùng lượng truy cập.',
    caseSlug: 'helen-bridal'
  },
  {
    key: 'thuong-hieu',
    label: 'Thương hiệu mờ nhạt',
    bottleneck: 'Khách không nhớ tên, hình ảnh mỗi nơi một kiểu, khó tạo tin tưởng.',
    first: 'nhan-dien-thuong-hieu',
    support: 'meta-tiktok-ads',
    improve: 'Khách nhận ra và nhớ bạn, hình ảnh nhất quán ở mọi điểm chạm.',
    caseSlug: 'le-viva-resort'
  },
  {
    key: 'do-luong',
    label: 'Không biết kênh nào hiệu quả',
    bottleneck: 'Mỗi kênh báo một con số, không khớp với số đơn thật.',
    first: 'ga4-looker-dashboard',
    support: 'tu-van-chien-luoc-sprint',
    improve: 'Một bộ số chung để quyết định tăng hay cắt ngân sách kênh nào.',
    caseSlug: null
  }
];

// Kết hợp minh họa ở hub: quan hệ chiến lược, không phải gói bắt buộc hay kết quả đảm bảo.
export const COMBOS = [
  {
    key: 'seo-cro',
    title: 'SEO + Tối ưu chuyển đổi',
    slugs: ['seo-tong-the', 'cro-landing-page'],
    story: 'SEO đưa thêm người đang tìm đúng việc tới website; trang đích tốt hơn giúp nhiều người trong số đó liên hệ.'
  },
  {
    key: 'meta-content-web',
    title: 'Meta Ads + Nội dung + Website',
    slugs: ['meta-tiktok-ads', 'content-marketing-pr', 'thiet-ke-website'],
    story: 'Quảng cáo tạo quan tâm, nội dung tạo lòng tin, website là nơi khách hành động.'
  },
  {
    key: 'brand-web-ads',
    title: 'Nhận diện + Website + Google Ads',
    slugs: ['nhan-dien-thuong-hieu', 'thiet-ke-website', 'google-ads-shopping'],
    story: 'Cùng một định vị từ lần đầu khách thấy quảng cáo tới lúc họ đọc trang đích.'
  },
  {
    key: 'local-ads',
    title: 'SEO địa phương + Google Ads',
    slugs: ['local-seo-google-maps', 'google-ads-shopping'],
    story: 'Khách gần đây thấy bạn ở cả kết quả bản đồ lẫn quảng cáo khi đang cần ngay.'
  }
];

// Ngữ cảnh chuyên biệt cho 6 dịch vụ không nằm trong nhóm chính ở hub
export const SPECIALIST_CONTEXT = {
  'seo-ai-overview': 'Khi khách của bạn hỏi AI thay vì bấm từng link',
  'local-seo-google-maps': 'Khi khách tới tận cửa hàng, phòng khám, showroom',
  'cro-landing-page': 'Khi đã có lượt truy cập mà ít người liên hệ',
  'content-marketing-pr': 'Khi khách cần đọc, hiểu và tin trước khi mua',
  'ga4-looker-dashboard': 'Khi mỗi kênh báo một con số và không ai tin số nào',
  'tu-van-chien-luoc-sprint': 'Khi chưa biết nên làm gì trước với ngân sách đang có'
};

export const stageOf = key => STAGES.find(s => s.key === key) || FOUNDATION;
export const roleOf = slug => ROLES[slug];
// Dịch vụ theo chặng: chính trước, hỗ trợ sau
export function servicesInStage(key) {
  const slugs = Object.keys(ROLES);
  return {
    primary: slugs.filter(s => ROLES[s].primary === key),
    supporting: slugs.filter(s => ROLES[s].supporting.includes(key))
  };
}
