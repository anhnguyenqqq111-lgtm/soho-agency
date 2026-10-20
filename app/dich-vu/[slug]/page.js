import {notFound} from 'next/navigation';
import styles from './page.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Hero from '../../../components/hero/Hero';
import PageHeader from '../../../components/ui/PageHeader';
import Section from '../../../components/ui/Section';
import Button from '../../../components/ui/Button';
import Track from '../../../components/diagrams/Track';
import ImageSlot from '../../../components/ui/ImageSlot';
import ServiceDiagram from '../../../components/diagrams/ServiceDiagrams';
import BeforeAfter from '../../../components/diagrams/BeforeAfter';
import ArticleBody from '../../../components/article/ArticleBody';
import {getServicePage, servicePages} from '../../../components/servicePagesData';
import {getServiceArticle} from '../../../components/serviceArticlesData';
import ReadingProgress from '../../../components/article/ReadingProgress';
import {siteUrl} from '../../../components/paths';
import {ServiceTouchpointContext, ContextualServiceCTA} from '../../../components/services/ServiceContext';
import SeoService from '../../../components/services/pilots/SeoService';
import GoogleAdsService from '../../../components/services/pilots/GoogleAdsService';
import BrandService from '../../../components/services/pilots/BrandService';

// Trang dịch vụ đã có kiến trúc riêng (docs/services/SERVICE_DESIGN_SYSTEM.md). Các trang còn lại dùng khuôn chung bên dưới.
const PILOTS = {
  'seo-tong-the': SeoService,
  'google-ads-shopping': GoogleAdsService,
  'nhan-dien-thuong-hieu': BrandService
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
  const Pilot = PILOTS[slug];

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
        {Pilot ? (
          <Pilot service={service} article={article} names={names} />
        ) : (
          <>
            <Hero
              tone="services"
              crumbs={[{label: 'Dịch vụ', href: '/dich-vu'}, {label: service.menuTitle}]}
              title={service.title}
              long
              tagline={service.intro}
              visual={
                <div className={styles.heroDiagram}>
                  <ServiceDiagram slug={service.slug} card />
                </div>
              }
            />
            <PageHeader title="Mục tiêu hướng tới" lead={service.promise} bullets={service.outcomes}>
              <Button href="#lien-he">Nhận tư vấn</Button>
            </PageHeader>

            {/* Quy trình + sơ đồ */}
            <Section
              tone="dark"
              decor="calender"
              title={
                <>
                  SOHO làm theo <span className="hl">{service.process.length} bước</span>
                </>
              }
              intro="Mỗi bước có việc cụ thể và con số để bạn kiểm tra."
            >
              <Track items={service.process.map(title => ({title}))} />
            </Section>

            {/* Dấu hiệu và kết quả */}
            <Section
              title={
                <>
                  Vì sao doanh nghiệp cần <span className="hl">{service.menuTitle}</span>?
                </>
              }
              intro={service.insight}
            >
              <BeforeAfter before={service.pains} after={service.outcomes} beforeLabel="Dấu hiệu bạn đang gặp" afterLabel="Mục tiêu hướng tới" />
              <p className={styles.proof}>{service.proof}</p>
            </Section>

            {/* Bàn giao */}
            <Section
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

            {/* Bài viết chi tiết */}
            {article && (
              <Section
                tone="gray"
                title={
                  <>
                    Hiểu sâu về <span className="hl">{service.menuTitle}</span>
                  </>
                }
                spacing="lg"
              >
                <div className={styles.articleCard}>
                  <ArticleBody article={article} />
                </div>
              </Section>
            )}

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

            <ContextualServiceCTA slug={service.slug} />
          </>
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceJsonLd)}} />
      </main>
      <Footer />
    </>
  );
}
