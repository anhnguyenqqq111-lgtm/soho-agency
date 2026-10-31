import {notFound} from 'next/navigation';
import styles from './page.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Hero from '../../../components/hero/Hero';
import Section from '../../../components/ui/Section';
import LinkRows from '../../../components/ui/LinkRows';
import CtaBand from '../../../components/ui/CtaBand';
import Icon from '../../../components/ui/Icon';
import {publishedCases, getCase} from '../../../components/data/cases';
import {getServicePage} from '../../../components/servicePagesData';
import {sitePath, siteUrl} from '../../../components/paths';
import SearchTrend from '../../../components/services/proof/SearchTrend';

// Viết thường chữ đầu cho câu đứng sau dấu hai chấm, giữ chữ viết tắt (SEO) và tên riêng (Facebook).
const lowerFirst = t => (/^[A-ZĐ]{2}/.test(t) ? t : t.charAt(0).toLowerCase() + t.slice(1));

// Trang chi tiết dự án. URL /du-an/<slug> giữ đúng đường dẫn của sohoagency.vn để không mất giá trị SEO khi chuyển tên miền.
export function generateStaticParams() {
  return publishedCases.map(c => ({slug: c.slug}));
}

export async function generateMetadata({params}) {
  const {slug} = await params;
  const c = getCase(slug);
  if (!c) return {};
  return {
    title: `Dự án ${c.name}: ${lowerFirst(c.scope)}`,
    description: `${c.name}, ${lowerFirst(c.field)}. ${c.problem} SOHO: ${c.solution} Kết quả: ${c.result}`,
    alternates: {canonical: `/du-an/${c.slug}/`},
    openGraph: {images: [{url: c.image, width: c.imageWidth, height: c.imageHeight, alt: `Dự án ${c.name}`}]}
  };
}

export default async function ProjectPage({params}) {
  const {slug} = await params;
  const c = getCase(slug);
  if (!c) notFound();
  const services = (c.services || []).map(getServicePage).filter(Boolean);
  const others = publishedCases.filter(x => x.slug !== c.slug);
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {'@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${siteUrl}/`},
      {'@type': 'ListItem', position: 2, name: 'Dự án', item: `${siteUrl}/ket-qua/`},
      {'@type': 'ListItem', position: 3, name: c.name, item: `${siteUrl}/du-an/${c.slug}/`}
    ]
  };

  return (
    <>
      <Header activeNav="results" />
      <main id="main">
        <Hero
          tone="results"
          crumbs={[{label: 'Dự án', href: '/ket-qua'}, {label: c.name}]}
          title={
            <>
              {c.name}: <span className="hl">{lowerFirst(c.scope)}</span>
            </>
          }
          long
          tagline={`${c.field}. ${c.period}.`}
          visual={
            <img
              src={sitePath(c.image)}
              alt={c.imageAlt || `Dự án ${c.name}`}
              width={c.imageWidth}
              height={c.imageHeight}
              style={{objectPosition: c.imagePosition}}
              className={styles.cover}
              fetchPriority="high"
            />
          }
        />

        <Section id="noi-dung">
          <div className={styles.layout}>
            <dl className={styles.story}>
              <div>
                <dt>Bối cảnh</dt>
                <dd>{c.context}</dd>
              </div>
              <div>
                <dt>SOHO đã làm</dt>
                <dd>{c.work}</dd>
              </div>
              <div>
                <dt>Kết quả</dt>
                <dd>{c.result}</dd>
              </div>
              {c.series && (
                <div>
                  <dt>Số liệu theo tuần</dt>
                  <dd>
                    <SearchTrend series={c.series} />
                  </dd>
                </div>
              )}
              {c.limits?.length > 0 && (
                <div>
                  <dt>Lưu ý về số liệu</dt>
                  <dd>
                    <ul className={styles.limits}>
                      {c.limits.map(l => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
            <aside className={styles.side}>
              {c.kpis ? (
                <>
                  <p className={styles.sideTitle}>Số liệu nổi bật</p>
                  <ul className={styles.kpis}>
                    {c.kpis.map(k => (
                      <li key={k.label}>
                        <b>{k.value}</b>
                        <span>{k.label}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className={styles.sideNote}>Dự án này chưa có số liệu cụ thể. Kết quả ghi theo mô tả trên trang dự án.</p>
              )}
              <p className={styles.sideTitle}>Phạm vi</p>
              <p className={styles.scope}>{c.scope}</p>
              <p className={styles.source}>
                <Icon name="file-text" size={16} />
                {c.source || 'Nội dung theo trang dự án trên sohoagency.vn.'}
              </p>
            </aside>
          </div>
        </Section>

        {services.length > 0 && (
          <Section
            tone="gray"
            title={
              <>
                Dịch vụ <span className="hl">dùng trong dự án</span>
              </>
            }
            spacing="sm"
          >
            <LinkRows items={services.map(s => ({title: s.menuTitle, desc: s.menuDesc, href: `/dich-vu/${s.slug}`}))} />
          </Section>
        )}

        <Section
          title={
            <>
              Dự án <span className="hl">khác</span>
            </>
          }
          spacing="sm"
        >
          <ul className={styles.others}>
            {others.map(o => (
              <li key={o.slug}>
                <a href={sitePath(`/du-an/${o.slug}`)} className={styles.other}>
                  <img src={sitePath(o.image)} alt="" width={o.imageWidth} height={o.imageHeight} style={{objectPosition: o.imagePosition}} loading="lazy" />
                  <span>
                    <strong>{o.name}</strong>
                    {o.field}
                  </span>
                  <Icon name="arrow-right" size={18} />
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <CtaBand
          title={
            <>
              Muốn kết quả tương tự <span className="hl">cho doanh nghiệp của bạn?</span>
            </>
          }
          text="Gửi website và mục tiêu. SOHO xem các kênh bạn đang chạy và gửi lại 3 việc nên làm trước."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumb)}} />
      </main>
      <Footer />
    </>
  );
}
