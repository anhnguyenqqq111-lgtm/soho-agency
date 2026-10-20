import {notFound} from 'next/navigation';
import styles from './page.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Section from '../../../components/ui/Section';
import BlogCard from '../../../components/BlogCard';
import CtaBand from '../../../components/ui/CtaBand';
import {sitePath, siteUrl} from '../../../components/paths';
import {articles, getLatestArticles, toISODate} from '../../../components/blogData';
import ReadingProgress from '../../../components/article/ReadingProgress';
import {heroOf, shareImageOf, creditOf, contentWithVisuals} from '../../../components/blogVisuals';

export function generateStaticParams() {
  return articles.map(article => ({slug: article.slug}));
}
// metaTitle (≤ 60 ký tự) là <title>, đặt absolute để không thêm hậu tố; title (≤ 50) là H1 duy nhất trên trang.
export async function generateMetadata({params}) {
  const {slug} = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) return {title: 'Không tìm thấy bài viết'};
  // Ảnh chia sẻ: thumbnail từ Image Studio khi bài đã có, không thì ảnh gốc. Tiêu đề và mô tả giữ nguyên từ blogData.js.
  const share = shareImageOf(article);
  return {
    title: {absolute: article.metaTitle},
    description: article.excerpt,
    alternates: {canonical: `/blog/${article.slug}/`},
    openGraph: {
      type: 'article',
      title: article.metaTitle,
      description: article.excerpt,
      images: [{url: share.src, width: share.width, height: share.height, alt: share.alt}]
    }
  };
}

export default async function BlogPostPage({params}) {
  const {slug} = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  const others = getLatestArticles().filter(a => a.slug !== article.slug);
  const related = [...others.filter(a => a.category === article.category), ...others.filter(a => a.category !== article.category)].slice(0, 3);
  const hero = heroOf(article);
  const credit = creditOf(article);
  const share = shareImageOf(article);
  const body = contentWithVisuals(article, sitePath);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: toISODate(article.date),
    author: {'@type': 'Person', name: article.author, jobTitle: article.authorRole},
    publisher: {'@type': 'Organization', name: 'SOHO Agency'},
    inLanguage: 'vi',
    image: `${siteUrl}${share.src}`,
    mainEntityOfPage: `${siteUrl}/blog/${article.slug}/`
  };
  const role = article.authorRole.replace(/\s*@\s*SOHO$/, '');
  return (
    <>
      <Header activeNav="blog" />
      <ReadingProgress />
      <main id="main">
        {/* Đầu bài: breadcrumb, danh mục, H1 duy nhất, trích dẫn, tác giả. Banner (cùng ảnh với thumbnail, 16:10) đặt ngay sau. */}
        <header className={styles.head}>
          <div className={`container ${styles.headInner}`}>
            <nav aria-label="Breadcrumb" className={styles.crumbs}>
              <ol>
                <li>
                  <a href={sitePath('/')}>Trang chủ</a>
                </li>
                <li>
                  <a href={sitePath('/blog')}>Tin tức</a>
                </li>
                <li>
                  <span aria-current="page">{article.category}</span>
                </li>
              </ol>
            </nav>
            <p className={styles.eyebrow}>{article.category}</p>
            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.lead}>{article.excerpt}</p>
            <p className={styles.byline}>
              <strong>{article.author}</strong>, {role} · <time dateTime={toISODate(article.date)}>{article.date}</time> · {article.readTime}
            </p>
          </div>
        </header>
        {/* Banner: Hero 1600×900 từ Image Studio nếu có (kèm ghi công ảnh nguồn), không thì ảnh gốc 16:10 như trước. */}
        <figure className={`container ${styles.banner}`}>
          <img
            src={sitePath(hero.src)}
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            fetchPriority="high"
            style={{aspectRatio: `${hero.width} / ${hero.height}`}}
          />
          {credit && (
            <figcaption className={styles.credit}>
              {credit.url ? (
                <a href={credit.url} target="_blank" rel="nofollow noopener">
                  {credit.text}
                </a>
              ) : (
                credit.text
              )}
            </figcaption>
          )}
        </figure>
        <section className={styles.wrap}>
          <div className="container">
            <div className={styles.card}>
              <div className={`prose ${styles.body}`} dangerouslySetInnerHTML={{__html: body}} />
              <div className={styles.author}>
                <span className={styles.avatar} aria-hidden="true" />
                <div>
                  <p className={styles.authorName}>{article.author}</p>
                  <p className={styles.authorRole}>{role}, SOHO Agency</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Section
          tone="gray"
          title={
            <>
              Đọc <span className="hl">tiếp</span>
            </>
          }
          spacing="sm"
        >
          <div className={styles.related}>
            {related.map((a, i) => (
              <BlogCard key={a.slug} post={a} delay={i * 80} />
            ))}
          </div>
        </Section>
        <CtaBand
          withForm={false}
          title={
            <>
              Muốn áp dụng vào <span className="hl">doanh nghiệp của bạn?</span>
            </>
          }
          text="Gửi website và mục tiêu. SOHO gửi lại 3 việc nên làm trước."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      </main>
      <Footer />
    </>
  );
}
