import {notFound} from 'next/navigation';
import styles from './page.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageHeader from '../../../components/ui/PageHeader';
import Button from '../../../components/ui/Button';
import CtaBand from '../../../components/ui/CtaBand';
import ImageSlot from '../../../components/ui/ImageSlot';
import ServiceDiagram from '../../../components/diagrams/ServiceDiagrams';
import Track from '../../../components/diagrams/Track';
import BeforeAfter from '../../../components/diagrams/BeforeAfter';
import ArticleBody from '../../../components/article/ArticleBody';
import {getServicePage, servicePages} from '../../../components/servicePagesData';
import {getServiceArticle} from '../../../components/serviceArticlesData';
import {sitePath} from '../../../components/paths';

export function generateStaticParams(){
  return servicePages.map(service => ({slug: service.slug}));
}

export async function generateMetadata({params}){
  const {slug} = await params;
  const service = getServicePage(slug);
  if (!service) return {title: 'Không tìm thấy dịch vụ'};
  const article = getServiceArticle(slug);
  return {
    // metaTitle trong dữ liệu đã có hậu tố "| SOHO", nên dùng absolute để tránh lặp.
    title: article?.metaTitle ? {absolute: article.metaTitle} : service.menuTitle,
    description: article?.metaDesc || service.intro
  };
}

export default async function ServicePage({params}){
  const {slug} = await params;
  const service = getServicePage(slug);
  if (!service) notFound();
  const article = getServiceArticle(slug);

  const related = servicePages
    .filter(s => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.menuTitle,
    description: service.intro,
    serviceType: service.category,
    areaServed: 'VN',
    provider: {'@type': 'Organization', name: 'SOHO Agency'}
  };

  return (
    <>
      <Header activeNav="services"/>
      <main>
        <PageHeader
          crumbs={[{label: 'Dịch vụ', href: '/dich-vu'}, {label: service.menuTitle}]}
          title={service.title}
          lead={service.intro}
        >
          <Button href="/lien-he">Trao đổi về dịch vụ này</Button>
          {article && (
            <p className={styles.meta}>
              {article.readingTime}, cập nhật {article.updatedDate}
              {article.author?.name && <>, {article.author.name}</>}
            </p>
          )}
        </PageHeader>

        {/* Tóm tắt */}
        <section className={styles.summary} aria-label="Tóm tắt dịch vụ">
          <div className="container">
            <div className={styles.intro}>
              <div>
                <blockquote className={styles.insight}>
                  <p>{service.insight}</p>
                </blockquote>
                <p className={styles.proof}>{service.proof}</p>
              </div>
              <div className={styles.diagram}>
                <ServiceDiagram slug={service.slug}/>
              </div>
            </div>

            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Từ chỗ đang vướng đến kết quả cần đạt</h2>
              <BeforeAfter
                before={service.pains}
                after={service.outcomes}
                beforeLabel="Dấu hiệu bạn đang gặp"
                afterLabel="Kết quả cần đạt"
              />
            </div>

            <div className={styles.block}>
              <h2 className={styles.blockTitle}>SOHO làm gì</h2>
              <Track items={service.process.map(title => ({title}))}/>
            </div>

            <div className={styles.deliver}>
              <div>
                <h2 className={styles.colTitle}>Bạn nhận được gì</h2>
                <ul className={`${styles.list} ${styles.deliverList}`}>
                  {service.deliverables.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <figure className={styles.artifact}>
                <ImageSlot
                  src={service.artifact.image}
                  alt={service.artifact.need}
                  need={service.artifact.need}
                  size="1600×1000"
                />
                <figcaption>Ví dụ sản phẩm bàn giao: {service.artifact.need.charAt(0).toLowerCase() + service.artifact.need.slice(1)}.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Bài viết đầy đủ */}
        {article && (
          <section className={styles.article} aria-label="Phân tích chi tiết">
            <div className="container">
              <ArticleBody article={article}/>
            </div>
          </section>
        )}

        {/* Dịch vụ liên quan */}
        {related.length > 0 && (
          <section className={styles.related} aria-labelledby="related-title">
            <div className="container">
              <div className={styles.relatedGrid}>
                <h2 id="related-title" className={styles.relatedTitle}>Dịch vụ cùng nhóm</h2>
                <ul className={styles.relatedList}>
                  {related.map(s => (
                    <li key={s.slug}>
                      <a href={sitePath(`/dich-vu/${s.slug}`)}>
                        <span className={styles.relatedName}>{s.menuTitle}</span>
                        <span className={styles.relatedDesc}>{s.menuDesc}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        <CtaBand
          title="Dịch vụ này có hợp với bài toán của bạn?"
          text="Gửi website và các kênh đang chạy. SOHO xem nhanh và đề xuất việc nên làm trước."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(serviceJsonLd)}}
        />
      </main>
      <Footer/>
    </>
  );
}
