import {notFound} from 'next/navigation';
import styles from './page.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Section from '../../../components/ui/Section';
import ImageSlot from '../../../components/ui/ImageSlot';
import {getServicePage, servicePages} from '../../../components/servicePagesData';
import {getServiceArticle} from '../../../components/serviceArticlesData';
import ReadingProgress from '../../../components/article/ReadingProgress';
import {siteUrl} from '../../../components/paths';
import {ServiceTouchpointContext, ContextualServiceCTA} from '../../../components/services/ServiceContext';
import SeoService from '../../../components/services/pilots/SeoService';
import GoogleAdsService from '../../../components/services/pilots/GoogleAdsService';
import BrandService from '../../../components/services/pilots/BrandService';
import {MethodSection} from '../../../components/services/pilots/PilotParts';
import ServiceOverview from '../../../components/services/ServiceOverview';

// Trang dịch vụ đã có phần giải thích riêng (docs/services/SERVICE_DESIGN_SYSTEM.md), kèm mục riêng trên thanh điều hướng.
// Các trang còn lại dùng phần thân chung bên dưới. Mọi trang đều mở đầu bằng ServiceOverview (các sơ đồ đang live).
const PILOTS = {
  'seo-tong-the': {Body: SeoService, nav: ['ban-do', 'Bản đồ chủ đề']},
  'google-ads-shopping': {Body: GoogleAdsService, nav: ['mo-phong', 'Mô phỏng lợi nhuận']},
  'nhan-dien-thuong-hieu': {Body: BrandService, nav: ['trung-bay', 'Bộ nhận diện']}
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
  const pilot = PILOTS[slug];
  const nav = [
    ['cach-lam', 'Cách làm'],
    ['vi-sao', 'Vì sao cần'],
    ...(pilot ? [pilot.nav] : []),
    ['ban-giao', 'Bàn giao'],
    ['diem-cham', 'Hành trình khách'],
    ...(article ? [['phuong-phap', 'Đọc sâu']] : []),
    ['lien-he', 'Liên hệ']
  ];

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
        <ServiceOverview service={service} nav={nav} />
        {pilot ? (
          <pilot.Body service={service} article={article} names={names} />
        ) : (
          <>
            <Section
              id="ban-giao"
              tone="gray"
              title={
                <>
                  Bạn nhận được gì khi làm <span className="hl">{service.menuTitle}</span> với SOHO
                </>
              }
            >
              <div className={`${styles.deliver} ${service.artifact?.image ? '' : styles.deliverFull}`}>
                <ol className={styles.deliverList}>
                  {service.deliverables.map((d, i) => (
                    <li key={d} data-reveal="" style={{'--reveal-delay': `${i * 80}ms`}}>
                      <span>{String(i + 1).padStart(2, '0')}</span>
                      {d}
                    </li>
                  ))}
                </ol>
                {service.artifact?.image && (
                  <figure className={styles.artifact} data-reveal="" style={{'--reveal-delay': '200ms'}}>
                    <ImageSlot src={service.artifact.image} alt={service.artifact.need} need={service.artifact.need} size="1600×1000" />
                    <figcaption>Ví dụ sản phẩm bàn giao: {service.artifact.need.charAt(0).toLowerCase() + service.artifact.need.slice(1)}.</figcaption>
                  </figure>
                )}
              </div>
            </Section>

            <Section
              id="diem-cham"
              title={
                <>
                  {service.menuTitle} trên <span className="hl">hành trình khách hàng</span>
                </>
              }
              intro="Dịch vụ này tạo giá trị ở chặng nào, khách cần gì ở đó, và nên đi tiếp sang đâu."
            >
              <ServiceTouchpointContext slug={service.slug} names={names} />
            </Section>

            <MethodSection article={article} name={service.menuTitle} />
            <ContextualServiceCTA slug={service.slug} />
          </>
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceJsonLd)}} />
      </main>
      <Footer />
    </>
  );
}
