import {getCoreServices} from '../servicePagesData';

/*
  Dữ liệu điều hướng chính và Mega Menu "Dịch vụ".
  Chỉ trỏ tới route đã có. Mô tả và icon lấy từ coreServices trong servicePagesData, không viết mới.
  href để dạng gốc ('/dich-vu'); component tự thêm basePath bằng sitePath() khi render.
*/
export const CTA = {label: 'Nhận tư vấn', href: '/lien-he'};

export const mainNav = [
  {key: 'home', label: 'Trang chủ', href: '/'},
  {key: 'about', label: 'Giới thiệu', href: '/ve-soho'},
  {key: 'services', label: 'Dịch vụ', megaMenu: true, activeFor: ['services', 'solutions']},
  {key: 'results', label: 'Dự án', href: '/ket-qua'},
  {key: 'blog', label: 'Tin tức', href: '/blog'},
  {key: 'contact', label: 'Liên hệ', href: '/lien-he'}
];

const SERVICE_GROUPS = [
  {
    id: 'performance',
    number: '01',
    title: 'Performance Marketing',
    items: [
      ['seo-tong-the', 'SEO Website'],
      ['google-ads-shopping', 'Google Ads'],
      ['meta-tiktok-ads', 'Facebook Ads']
    ]
  },
  {
    id: 'digital',
    number: '02',
    title: 'Digital Experiences',
    items: [
      ['thiet-ke-website', 'Thiết kế Website'],
      ['thiet-ke-mobile-app', 'Thiết kế Mobile App']
    ]
  },
  {id: 'brand', number: '03', title: 'Brand Identity', items: [['nhan-dien-thuong-hieu', 'Nhận diện thương hiệu']]}
];

export function getServicesMenu() {
  const core = new Map(getCoreServices().map(s => [s.slug, s]));
  return {
    id: 'services-menu',
    overview: {label: 'Xem tất cả dịch vụ', href: '/dich-vu'},
    groups: SERVICE_GROUPS.map(group => ({
      ...group,
      items: group.items.map(([slug, label]) => ({slug, label, href: `/dich-vu/${slug}`, desc: core.get(slug).coreDesc, icon: core.get(slug).icon}))
    })),
    cta: {title: 'Bạn chưa biết bắt đầu từ đâu?', text: 'Cùng SOHO tìm giải pháp phù hợp.', ...CTA}
  };
}
