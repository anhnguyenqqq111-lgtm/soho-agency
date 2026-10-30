// Biến thể khối liên hệ cuối trang, giữ NGUYÊN chữ của bản đang live (soho-agency.vercel.app, commit db7af0a:
// components/data/touchpoints.js ROLES.cta, components/services/ServiceContext.js, các trang có CtaBand).
// Form bên trong luôn là components/ContactForm (bản live). Chỉ tiêu đề, lời mời và dịch vụ chọn sẵn thay đổi theo trang.
// Đề xuất lời thường cho các câu còn thuật ngữ: xem canvas "Các loại form liên hệ". Chưa thay, chờ duyệt.

// Giá trị phải trùng một lựa chọn trong ô "Dịch vụ quan tâm" của ContactForm
export const FORM_SERVICE = {
  'seo-tong-the': 'SEO website',
  'seo-ai-overview': 'SEO website',
  'local-seo-google-maps': 'SEO website',
  'google-ads-shopping': 'Google Ads',
  'meta-tiktok-ads': 'Facebook Ads, TikTok Ads',
  'cro-landing-page': 'Nội dung, đo lường hoặc dịch vụ khác',
  'thiet-ke-website': 'Thiết kế website',
  'nhan-dien-thuong-hieu': 'Nhận diện thương hiệu',
  'thiet-ke-mobile-app': 'Thiết kế Mobile App',
  'content-marketing-pr': 'Nội dung, đo lường hoặc dịch vụ khác',
  'ga4-looker-dashboard': 'Nội dung, đo lường hoặc dịch vụ khác',
  'tu-van-chien-luoc-sprint': 'Chưa rõ, cần tư vấn nên làm gì trước'
};

// Chặng chính của từng dịch vụ (tên chặng như bản live) dùng trong câu mời mặc định
const STAGE = {
  'nhan-dien-thuong-hieu': 'Nhận biết',
  'meta-tiktok-ads': 'Nhận biết',
  'content-marketing-pr': 'Nhận biết',
  'seo-tong-the': 'Tìm kiếm và cân nhắc',
  'seo-ai-overview': 'Tìm kiếm và cân nhắc',
  'local-seo-google-maps': 'Tìm kiếm và cân nhắc',
  'google-ads-shopping': 'Tìm kiếm và cân nhắc',
  'thiet-ke-website': 'Chuyển đổi',
  'cro-landing-page': 'Chuyển đổi',
  'thiet-ke-mobile-app': 'Trải nghiệm và quay lại',
  'ga4-looker-dashboard': 'Nền tảng xuyên suốt',
  'tu-van-chien-luoc-sprint': 'Nền tảng xuyên suốt'
};

const SERVICE_CTA = {
  'nhan-dien-thuong-hieu': {
    title: 'Trao đổi về nhận diện thương hiệu',
    text: 'Kể SOHO bạn đang ở đâu: mới ra mắt, đổi định vị hay hình ảnh đang mỗi nơi một kiểu. SOHO đề xuất phạm vi vừa đủ, không bắt làm trọn bộ.'
  },
  'meta-tiktok-ads': {title: 'Rà soát tài khoản Meta, TikTok'},
  'content-marketing-pr': {title: 'Trao đổi kế hoạch nội dung'},
  'seo-tong-the': {
    title: 'Nhận đánh giá hệ thống SEO',
    text: 'Gửi website và nhóm sản phẩm chính. SOHO xem các nút trên cụm chủ đề của bạn: nút nào thiếu trang, bài nào không dẫn về trang dịch vụ, và lỗi kỹ thuật nào đang chặn.'
  },
  'seo-ai-overview': {title: 'Đánh giá mức sẵn sàng cho AI tìm kiếm'},
  'local-seo-google-maps': {title: 'Rà soát hồ sơ Google của bạn'},
  'google-ads-shopping': {
    title: 'Rà soát hiệu quả quảng cáo',
    text: 'Gửi tài khoản đang chạy hoặc kế hoạch ngân sách. SOHO đọc bốn tầng của phễu và chỉ ra tầng nào đang rò tiền nhiều nhất.'
  },
  'thiet-ke-website': {title: 'Tư vấn dự án website'},
  'cro-landing-page': {title: 'Rà soát trang đích'},
  'thiet-ke-mobile-app': {title: 'Thảo luận ý tưởng ứng dụng'},
  'ga4-looker-dashboard': {title: 'Kiểm tra hệ thống đo lường'},
  'tu-van-chien-luoc-sprint': {title: 'Thảo luận lộ trình tăng trưởng'}
};

// "Khi nào chưa nên làm" theo bản live (touchpoints.js ROLES.notYet), dùng ở hero trang dịch vụ
export const NOT_YET = {
  'nhan-dien-thuong-hieu': 'Chưa rõ bán cho ai và khác đối thủ ở đâu: làm tư vấn lộ trình trước, nhận diện sau.',
  'meta-tiktok-ads': 'Chưa có nội dung, hình ảnh để chạy thử nhiều mẫu: chuẩn bị nội dung trước.',
  'content-marketing-pr': 'Chưa có người duyệt nội dung chuyên môn phía bạn: thống nhất người duyệt trước.',
  'seo-tong-the': 'Cần khách trong vài tuần tới: SEO thường cần vài tháng, nên chạy Google Ads song song.',
  'seo-ai-overview': 'Website chưa có nền SEO cơ bản: làm SEO tổng thể trước.',
  'local-seo-google-maps': 'Không có địa điểm khách tới tận nơi: ưu tiên SEO tổng thể.',
  'google-ads-shopping': 'Chưa đo được form, cuộc gọi, đơn hàng: sửa đo lường trước khi tăng ngân sách.',
  'thiet-ke-website': 'Website hiện tại vẫn ổn, chỉ vài trang yếu: sửa trang đích thay vì làm lại toàn bộ.',
  'cro-landing-page': 'Lượt truy cập còn quá ít để so sánh hai phiên bản: tăng lưu lượng trước.',
  'thiet-ke-mobile-app': 'Khách chỉ mua một lần hoặc rất thưa: website tốt là đủ, chưa cần app.',
  'ga4-looker-dashboard': 'Chưa có nơi ghi đơn hàng, khách hàng (CRM, sổ bán hàng): dựng nơi ghi trước.',
  'tu-van-chien-luoc-sprint': 'Đã biết rõ kênh cần làm và có số đo: làm thẳng dịch vụ đó.'
};

export function serviceCta(slug) {
  const v = SERVICE_CTA[slug];
  if (!v) return null;
  return {
    title: v.title,
    text: v.text || `Gửi website và kênh đang chạy. SOHO xem điểm chạm "${STAGE[slug]}" của bạn và gửi lại những việc nên làm trước.`,
    service: FORM_SERVICE[slug] || ''
  };
}

// Khối liên hệ cuối các trang khác (chữ như bản live)
export const PAGE_CTA = {
  home: {lead: 'Kể cho SOHO', hl: 'bài toán hiện tại', text: 'Gửi website và mục tiêu quý tới. SOHO xem các kênh bạn đang chạy và gửi lại 3 việc nên làm trước.'},
  services: {
    lead: 'Chưa biết điểm chạm nào',
    hl: 'đang nghẽn?',
    text: 'Gửi website và kênh đang chạy. SOHO chỉ ra điểm chạm nghẽn nhất và việc nên làm trước, không đề xuất làm mọi dịch vụ.'
  },
  project: {lead: 'Muốn kết quả tương tự', hl: 'cho doanh nghiệp của bạn?', text: 'Gửi website và mục tiêu. SOHO xem các kênh bạn đang chạy và gửi lại 3 việc nên làm trước.'},
  results: {
    lead: 'Muốn biết kênh nào đang',
    hl: 'tạo ra doanh thu?',
    text: 'SOHO kiểm tra cách đo, báo cáo và các bước khách đi qua trên web của bạn, rồi chỉ ra chỗ số liệu đang sai hoặc thiếu.'
  },
  about: {lead: 'Bắt đầu bằng', hl: 'một cuộc trao đổi', text: 'Cho SOHO biết website, thị trường và điều bạn muốn cải thiện trong quý tới.'},
  blog: {lead: 'Muốn áp dụng vào', hl: 'doanh nghiệp của bạn?', text: 'Gửi website và mục tiêu. SOHO gửi lại 3 việc nên làm trước.'}
};
