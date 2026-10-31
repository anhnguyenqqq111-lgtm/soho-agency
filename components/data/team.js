// Người thật của SOHO. Ảnh do SOHO gửi; không vẽ lại, không đổi mặt, dáng, trang phục.
// Chung NG: 3 ảnh và tên SOHO gửi ngày 31/10/2026 kèm yêu cầu đăng web. Ảnh hero tách nền bằng Apple Vision; các ảnh khác giữ nền thật, chỉ cắt khung.
// Ảnh áo thun cắt trên ngực nên chữ in trên áo không hiện. Bản gốc ở docs/private/team/ (không commit).
// Hoàng VH: 3 ảnh và giới thiệu SOHO gửi ngày 31/10/2026. Ảnh giữ nền thật, chỉ cắt khung.
// Kinh nghiệm (VNG, FPT, KingSport) là của cá nhân anh Hoàng, không phải khách của SOHO: không dùng làm bằng chứng dự án SOHO.
// Thanh Hằng, chuyên viên SEO & AIO: ảnh SOHO gửi ngày 31/10/2026 (ảnh thứ hai, thay ảnh chụp lại màn hình máy ảnh), chỉ cắt khung.
// Pony, chuyên viên nội dung và mạng xã hội: ảnh SOHO gửi ngày 31/10/2026, nền trắng, chỉ cắt khung.
// Nam Hoàng, lập trình viên full stack: ảnh SOHO gửi ngày 31/10/2026, chỉ cắt khung.
// 31/10/2026 SOHO chốt: đội trên web chỉ gồm những người trong file này; 5 tên lấy từ bản live cũ đã bỏ.
export const team = [
  {
    key: 'pm',
    name: 'Chung NG',
    title: 'Nhà sáng lập SOHO',
    role: 'Phụ trách dự án và làm việc trực tiếp với khách hàng',
    short: 'Người phụ trách dự án',
    does: 'Trực tiếp gặp bạn buổi đầu, theo sát từng đầu việc và báo cáo kết quả cho bạn.',
    photo: '/media/team/chung-chan-dung.webp',
    width: 420,
    height: 501,
    photos: {
      cutout: {src: '/media/team/chung-jean-cutout.webp', width: 716, height: 1000},
      vest: {src: '/media/team/chung-vest.webp', width: 900, height: 1200},
      smile: {src: '/media/team/chung-ao-thun.webp', width: 900, height: 630}
    },
    consentRef: 'SOHO gửi 3 ảnh và tên ngày 31/10/2026, yêu cầu đăng lên web'
  },
  {
    key: 'mkt',
    name: 'Hoàng VH',
    title: null,
    role: 'Lên kế hoạch và thực thi marketing cho từng dự án',
    short: 'Người lên kế hoạch và triển khai',
    exp: 'Hơn 10 năm làm marketing',
    bio: 'Hơn 10 năm làm marketing ở nhiều ngành. Từng là quản lý marketing, chạy chiến dịch ở VNG, FPT, KingSport và nhiều doanh nghiệp nhỏ.',
    does: 'Lên kế hoạch cho dự án của bạn, rồi trực tiếp làm SEO, quảng cáo, website và đo lường. Cứ 2 tuần xem lại số liệu và điều chỉnh.',
    photo: '/media/team/hoang-chan-dung.webp',
    width: 420,
    height: 504,
    photos: {
      main: {src: '/media/team/hoang-van-phong.webp', width: 900, height: 1200},
      smile: {src: '/media/team/hoang-tui.webp', width: 900, height: 630}
    },
    consentRef: 'SOHO gửi 3 ảnh, tên và giới thiệu ngày 31/10/2026, yêu cầu đăng lên web'
  },
  {
    key: 'seo',
    name: 'Thanh Hằng',
    title: null,
    role: 'Chuyên viên SEO và tối ưu cho AI (AIO)',
    short: 'Người trực tiếp làm SEO',
    does: 'Trực tiếp làm SEO cho website và tối ưu nội dung để được Google và các công cụ AI như ChatGPT, Gemini nhắc tới.',
    photo: '/media/team/thanh-hang-chan-dung.webp',
    width: 420,
    height: 502,
    services: ['seo-tong-the', 'seo-ai-overview', 'local-seo-google-maps'],
    consentRef: 'SOHO gửi ảnh và tên ngày 31/10/2026, yêu cầu đăng lên web'
  },
  {
    key: 'content',
    name: 'Pony Diễm Quỳnh',
    title: null,
    role: 'Chuyên viên nội dung và mạng xã hội',
    short: 'Người làm nội dung và mạng xã hội',
    does: 'Viết bài, lên lịch đăng, làm nội dung cho fanpage, TikTok và mẫu quảng cáo, giữ giọng thương hiệu thống nhất trên mọi kênh.',
    photo: '/media/team/pony-chan-dung.webp',
    width: 420,
    height: 502,
    services: ['content-marketing-pr', 'meta-tiktok-ads'],
    consentRef: 'SOHO gửi ảnh và tên ngày 31/10/2026, yêu cầu đăng lên web'
  },
  {
    key: 'dev',
    name: 'Nam Hoàng',
    title: null,
    role: 'Lập trình viên full stack',
    short: 'Người lập trình website và app',
    does: 'Trực tiếp code website, landing page và app, lo phần kỹ thuật để trang tải nhanh và Google đọc được.',
    photo: '/media/team/nam-hoang-chan-dung.webp',
    width: 420,
    height: 502,
    services: ['thiet-ke-website', 'thiet-ke-mobile-app', 'cro-landing-page'],
    consentRef: 'SOHO gửi ảnh và tên ngày 31/10/2026, yêu cầu đăng lên web'
  }
];

export function getPerson(key) {
  return team.find(p => p.key === key);
}

const lower = s => s.charAt(0).toLowerCase() + s.slice(1);

// "Nhà sáng lập SOHO, phụ trách dự án và làm việc trực tiếp với khách"
export function personTitle(p) {
  return p.title ? `${p.title}, ${lower(p.role)}` : p.role;
}

export function personAlt(p) {
  return p.name ? `${p.name}, ${lower(p.title || p.role)}` : `${p.role} của SOHO`;
}
