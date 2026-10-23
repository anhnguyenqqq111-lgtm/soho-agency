import {notFound} from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {getServicePage, servicePages} from '../../../components/servicePagesData';
import {getServiceArticle} from '../../../components/serviceArticlesData';
import ReadingProgress from '../../../components/article/ReadingProgress';
import {siteUrl} from '../../../components/paths';
import SeoService from '../../../components/services/pilots/SeoService';
import GoogleAdsService from '../../../components/services/pilots/GoogleAdsService';
import BrandService from '../../../components/services/pilots/BrandService';
import PilotOverview from '../../../components/services/pilots/PilotOverview';
import ServiceExperience, {experienceNav} from '../../../components/services/ServiceExperience';
import {EXPERIENCE} from '../../../components/data/serviceExperience';
import ed from '../../../components/services/editorial/editorial.module.css';

/*
  Trang dịch vụ (Redesign V6.0, docs/services/SERVICE_DESIGN_SYSTEM.md mục 6).
  Mọi trang mở đầu bằng PilotOverview: hero có sơ đồ live, dải "SOHO làm theo N bước", sơ đồ "Dấu hiệu → Mục tiêu".
  SEO, Google Ads, Nhận diện có phần thân riêng; các trang còn lại dùng ServiceExperience với phần riêng và thứ tự riêng.
*/
const CUSTOM = {
  'seo-tong-the': {
    Body: SeoService,
    nav: [
      ['phu-hop', 'Có hợp không'],
      ['y-dinh', 'Ý định tìm kiếm'],
      ['thay-doi', 'SOHO thay đổi gì'],
      ['du-an', 'Dự án'],
      ['pham-vi', 'Phạm vi'],
      ['do-luong', 'Đo lường'],
      ['tiep-theo', 'Bước tiếp theo']
    ]
  },
  'google-ads-shopping': {
    Body: GoogleAdsService,
    nav: [
      ['phu-hop', 'Có hợp không'],
      ['nguyen-nhan', 'Đọc phễu'],
      ['mo-phong', 'Phép tính'],
      ['thay-doi', 'SOHO thay đổi gì'],
      ['pham-vi', 'Phạm vi'],
      ['do-luong', 'Đo lường'],
      ['tiep-theo', 'Bước tiếp theo']
    ]
  },
  'nhan-dien-thuong-hieu': {
    Body: BrandService,
    nav: [
      ['phu-hop', 'Có hợp không'],
      ['nguyen-nhan', 'Vì sao lệch'],
      ['trung-bay', 'Triển lãm'],
      ['khach-noi', 'Khách nói'],
      ['pham-vi', 'Phạm vi'],
      ['tiep-theo', 'Bước tiếp theo']
    ]
  }
};

export function generateStaticParams() {
  return servicePages.map(service => ({slug: service.slug}));
}

export async function generateMetadata({params}) {
  const {slug} = await params;
  const service = getServicePage(slug);
  if (!service) return {title: 'Không tìm thấy dịch vụ'};
  const article = getServiceArticle(slug);
  return {
    title: article?.metaTitle ? {absolute: article.metaTitle} : service.menuTitle,
    description: article?.metaDesc || service.intro,
    alternates: {canonical: `/dich-vu/${service.slug}/`}
  };
}

export default async function ServicePage({params}) {
  const {slug} = await params;
  const service = getServicePage(slug);
  if (!service) notFound();
  const article = getServiceArticle(slug);
  const names = Object.fromEntries(servicePages.map(s => [s.slug, s.menuTitle]));
  const variant = EXPERIENCE[slug].hero;
  const custom = CUSTOM[slug];
  const nav = custom
    ? [['cach-lam', 'Cách làm'], ...custom.nav, ...(article ? [['phuong-phap', 'Đọc sâu']] : []), ['lien-he', 'Liên hệ']]
    : experienceNav(slug, Boolean(article));

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.menuTitle,
    description: service.intro,
    serviceType: service.category,
    areaServed: 'VN',
    provider: {'@type': 'Organization', name: 'SOHO Agency', url: siteUrl}
  };

  return (
    <>
      <Header activeNav="services" />
      <ReadingProgress />
      <main id="main">
        <div className={ed.page}>
          <PilotOverview service={service} nav={nav} variant={variant} />
          {custom ? (
            <custom.Body service={service} article={article} names={names} />
          ) : (
            <ServiceExperience service={service} article={article} names={names} trackDark={variant === 'exhibition'} />
          )}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceJsonLd)}} />
      </main>
      <Footer />
    </>
  );
}
