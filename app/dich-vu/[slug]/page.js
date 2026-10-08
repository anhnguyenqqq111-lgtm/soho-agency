import {notFound} from 'next/navigation';
import styles from './page.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageHeader from '../../../components/ui/PageHeader';
import Button from '../../../components/ui/Button';
import CtaBand from '../../../components/ui/CtaBand';
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
            <blockquote className={styles.insight}>
              <p>{service.insight}</p>
            </blockquote>
            <div className={styles.cols}>
              <div>
                <h2 className={styles.colTitle}>Dấu hiệu bạn cần dịch vụ này</h2>
                <ul className={styles.list}>
                  {service.pains.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h2 className={styles.colTitle}>Kết quả cần đạt</h2>
                <ul className={styles.list}>
                  {service.outcomes.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h2 className={styles.colTitle}>SOHO làm gì</h2>
                <ol className={`${styles.list} ${styles.steps}`}>
                  {service.process.map(item => <li key={item}>{item}</li>)}
                </ol>
              </div>
            </div>
            <p className={styles.proof}>{service.proof}</p>
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
