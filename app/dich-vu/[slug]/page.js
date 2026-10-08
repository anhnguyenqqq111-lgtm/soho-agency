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
import LinkRows from '../../../components/ui/LinkRows';
import CtaBand from '../../../components/ui/CtaBand';
import ServiceDiagram from '../../../components/diagrams/ServiceDiagrams';
import BeforeAfter from '../../../components/diagrams/BeforeAfter';
import ArticleBody from '../../../components/article/ArticleBody';
import {getServicePage, servicePages} from '../../../components/servicePagesData';
import {getServiceArticle} from '../../../components/serviceArticlesData';

export function generateStaticParams(){
  return servicePages.map(service => ({slug: service.slug}));
}

export async function generateMetadata({params}){
  const {slug} = await params;
  const service = getServicePage(slug);
  if (!service) return {title: 'Không tìm thấy dịch vụ'};
  const article = getServiceArticle(slug);
  return {
    title: article?.metaTitle ? {absolute: article.metaTitle} : service.menuTitle,
    description: article?.metaDesc || service.intro
  };
}

export default async function ServicePage({params}){
  const {slug} = await params;
  const service = getServicePage(slug);
  if (!service) notFound();
  const article = getServiceArticle(slug);
  const related = servicePages.filter(s => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  const serviceJsonLd = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: service.menuTitle, description: service.intro, serviceType: service.category, areaServed: 'VN',
    provider: {'@type': 'Organization', name: 'SOHO Agency'}
  };

  return (
    <>
      <Header activeNav="services"/>
      <main>
        <Hero tone="services" crumbs={[{label: 'Dịch vụ', href: '/dich-vu'}, {label: service.menuTitle}]} eyebrow={service.category} title={service.menuTitle} tagline={service.menuDesc} visual={<div className={styles.heroDiagram}><ServiceDiagram slug={service.slug} card/></div>}/>
        <PageHeader
          title={service.menuTitle}
          lead={service.intro}
          bullets={service.outcomes}
        >
          <Button href="#lien-he">Nhận audit {service.menuTitle}</Button>
        </PageHeader>

        {/* Quy trình + sơ đồ */}
        <Section tone="dark" title={<>Quy trình triển khai <span className="hl">tại SOHO</span></>} intro={service.promise}>
          <Track items={service.process.map(title => ({title}))}/>
        </Section>

        {/* Dấu hiệu và kết quả */}
        <Section tone="gray" title={<>Vì sao doanh nghiệp cần <span className="hl">{service.menuTitle}</span>?</>} intro={service.insight}>
          <BeforeAfter before={service.pains} after={service.outcomes} beforeLabel="Dấu hiệu bạn đang gặp" afterLabel="Kết quả cần đạt"/>
          <p className={styles.proof}>{service.proof}</p>
        </Section>

        {/* Bàn giao */}
        <Section title={<>Bạn nhận được gì khi làm <span className="hl">{service.menuTitle}</span> với SOHO</>}>
          <div className={styles.deliver}>
            <ol className={styles.deliverList}>
              {service.deliverables.map((d, i) => (
                <li key={d} data-reveal="" style={{'--reveal-delay': `${i * 80}ms`}}><span>{String(i + 1).padStart(2, '0')}</span>{d}</li>
              ))}
            </ol>
            <figure className={styles.artifact} data-reveal="" style={{'--reveal-delay': '200ms'}}>
              <ImageSlot src={service.artifact.image} alt={service.artifact.need} need={service.artifact.need} size="1600×1000"/>
              <figcaption>Ví dụ sản phẩm bàn giao: {service.artifact.need.charAt(0).toLowerCase() + service.artifact.need.slice(1)}.</figcaption>
            </figure>
          </div>
        </Section>

        {/* Bài viết chi tiết */}
        {article && (
          <Section tone="gray" kicker="Phân tích chi tiết" title={<>Hiểu sâu về <span className="hl">{service.menuTitle}</span></>} spacing="lg">
            <div className={styles.articleCard}><ArticleBody article={article}/></div>
          </Section>
        )}

        {related.length > 0 && (
          <Section title={<>Dịch vụ <span className="hl">cùng nhóm</span></>} spacing="sm">
            <LinkRows items={related.map(s => ({title: s.menuTitle, desc: s.menuDesc, href: `/dich-vu/${s.slug}`}))}/>
          </Section>
        )}

        <CtaBand/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceJsonLd)}}/>
      </main>
      <Footer/>
    </>
  );
}
