import {notFound} from 'next/navigation';
import styles from './BlogPostPage.module.css';
import Header from '../Header';
import Footer from '../Footer';
import Section from '../ui/Section';
import BlogCard from '../BlogCard';
import CtaBand from '../ui/CtaBand';
import {sitePath, siteUrl, srcSet, postPath} from '../paths';
import {articles, getLatestArticles, toISODate} from '../blogData';
import ReadingProgress from '../article/ReadingProgress';
import BlogToc from '../article/BlogToc';
import QuickForm from '../QuickForm';
import {heroOf, shareImageOf, creditOf, contentWithVisuals} from '../blogVisuals';

// Gắn id cho từng H2 của thân bài và lấy danh sách cho mục lục; bỏ số thứ tự đầu tiêu đề ("1. ") vì mục lục tự đánh số.
const slugify = text =>
  text
    .replace(/<[^>]+>/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
// "Những điểm chính": mỗi H2 một dòng, gồm tiêu đề và câu đầu tiên của đoạn văn đầu tiên dưới H2 đó (lấy đúng chữ trong bài).
// Bài nào cần viết tay thì thêm mảng takeaways [{label, text}] trong blogData.js.
const plain = html => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
function takeawaysOf(html) {
  const parts = html.split(/<h2\b[^>]*>/).slice(1);
  return parts
    .map(part => {
      const [h, rest = ''] = part.split(/<\/h2>/);
      const label = plain(h).replace(/^\s*\d+\.\s*/, '');
      const p = rest.match(/<p\b[^>]*>([\s\S]*?)<\/p>/);
      const first = p ? plain(p[1]).match(/^.*?[.!?](\s|$)/) : null;
      return {label, text: first ? first[0].trim() : ''};
    })
    .filter(t => t.label)
    .slice(0, 8);
}

function withHeadingIds(html) {
  const items = [];
  const used = new Set();
  const out = html.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/g, (match, attrs, inner) => {
    const title = inner.replace(/<[^>]+>/g, '').replace(/^\s*\d+\.\s*/, '').trim();
    let id = slugify(title) || `muc-${items.length + 1}`;
    while (used.has(id)) id += '-2';
    used.add(id);
    items.push({id, title});
    return /\bid=/.test(attrs) ? match : `<h2 id="${id}"${attrs}>${inner}</h2>`;
  });
  return {html: out, items};
}

// Trang bài blog. Route là app/[slug]/page.js (URL /<slug>/, không có tiền tố /blog/), dùng chung với trang dịch vụ.
// metaTitle (≤ 60 ký tự) là <title>, đặt absolute để không thêm hậu tố; title (≤ 50) là H1 duy nhất trên trang.
export function postMetadata(slug) {
  const article = articles.find(item => item.slug === slug);
  if (!article) return {title: 'Không tìm thấy bài viết'};
  // Ảnh chia sẻ: thumbnail từ Image Studio khi bài đã có, không thì ảnh gốc. Tiêu đề và mô tả giữ nguyên từ blogData.js.
  const share = shareImageOf(article);
  const description = article.metaDescription || article.excerpt;
  return {
    title: {absolute: article.metaTitle},
    description,
    alternates: {canonical: `${postPath(article.slug)}/`},
    openGraph: {
      type: 'article',
      title: article.metaTitle,
      description,
      images: [{url: share.src, width: share.width, height: share.height, alt: share.alt}]
    }
  };
}

export default function BlogPostPage({slug}) {
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  const others = getLatestArticles().filter(a => a.slug !== article.slug);
  const related = [...others.filter(a => a.category === article.category), ...others.filter(a => a.category !== article.category)].slice(0, 3);
  const hero = heroOf(article);
  const credit = creditOf(article);
  const share = shareImageOf(article);
  const description = article.metaDescription || article.excerpt;
  const {html: body, items: tocItems} = withHeadingIds(contentWithVisuals(article, sitePath));
  const takeaways = article.takeaways || takeawaysOf(article.content);
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
    mainEntityOfPage: `${siteUrl}${postPath(article.slug)}/`
  };
  const role = article.authorRole;
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
            <p className={styles.byline}>
              <strong>{article.author}</strong>, {role} · <time dateTime={toISODate(article.date)}>{article.date}</time> · {article.readTime}
            </p>
          </div>
        </header>
        {/* Banner: Hero 1600×900 từ Image Studio nếu có (kèm ghi công ảnh nguồn), không thì ảnh gốc 16:10 như trước. */}
        <figure className={`container ${styles.banner}`}>
          <img
            src={sitePath(hero.src)}
            srcSet={srcSet(hero.src, hero.width)}
            sizes="(max-width: 1072px) calc(100vw - 32px), 1040px"
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
          <div className={styles.layout}>
            {tocItems.length > 1 && (
              <aside className={styles.toc}>
                <BlogToc items={tocItems} targetId="than-bai" />
              </aside>
            )}
            <div className={styles.card}>
              {/* Sapo (đoạn mở đầu) và Những điểm chính đặt ở đầu thân bài, đều có nền nhấn */}
              <p className={styles.sapo}>{article.excerpt}</p>
              {takeaways.length > 1 && (
                <div className={styles.takeaways}>
                  <p className={styles.takeawaysTitle}>Những điểm chính</p>
                  <ul>
                    {takeaways.map(t => (
                      <li key={t.label}>
                        <strong>{t.label}</strong>
                        {t.text ? `: ${t.text}` : ''}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div id="than-bai" className={`prose ${styles.body}`} dangerouslySetInnerHTML={{__html: body}} />
              <div className={styles.author}>
                {article.authorPhoto?.src ? (
                  <img className={styles.avatar} src={sitePath(article.authorPhoto.src)} width={article.authorPhoto.width} height={article.authorPhoto.height} alt={article.author} loading="lazy" />
                ) : (
                  <span className={styles.avatar} aria-hidden="true" />
                )}
                <div>
                  <p className={styles.authorName}>{article.author}</p>
                  <p className={styles.authorRole}>{role}, SOHO Agency</p>
                </div>
              </div>
            </div>
            <aside className={styles.side} aria-label="Nhận tư vấn">
              <div className={styles.sideInner}>
                <QuickForm source={article.title} />
              </div>
            </aside>
          </div>
        </section>
        <Section
          tone="gray"
          title={
            <>
              Bài viết <span className="hl">liên quan</span>
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
