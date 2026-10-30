import {company} from './company';

// Tài sản bằng chứng. type: 'A' bằng chứng | 'B' tài liệu dựng lại | 'C' minh họa.
// Chỉ đăng tài sản của dự án khi cases.js cho phép; tài sản project 'soho' thuộc chính SOHO.
export const proofAssets = [
  {
    id: 'aio-03-entity-record',
    project: 'soho',
    type: 'B',
    alt: 'Bảng thực thể của SOHO Agency gồm tên, địa chỉ và các hồ sơ mạng xã hội',
    caption: 'Sơ đồ SOHO dựng lại từ dữ liệu company.js.',
    data: {
      name: company.legalName || company.name,
      address: company.address,
      sameAs: company.socials.filter(social => social.url).map(social => social.url)
    },
    masked: false
  },
  {
    id: 'cro-01-home-current',
    project: 'soho',
    type: 'A',
    src: '/proof/soho/cro-01-home-current.webp',
    width: 1440,
    height: 900,
    src800: '/proof/soho/cro-01-home-current-800.webp',
    alt: 'Trang chủ sohoagency.vn hiện tại',
    caption: 'Trang chủ SOHO hiện tại.',
    source: 'sohoagency.vn · chụp ngày 23/10/2026',
    masked: false
  }
];

export const assetsFor = project => proofAssets.filter(asset => asset.project === project);
