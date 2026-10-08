import {notFound} from 'next/navigation';
import styles from './page.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Button from '../../../components/ui/Button';
import {articles, getLatestArticles, toISODate} from '../../../components/blogData';
import {sitePath} from '../../../components/paths';

export function generateStaticParams(){
  return articles.map(article => ({slug: article.slug}));
}

export async function generateMetadata({params}){
  const {slug} = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) return {title: 'Không tìm thấy bài viết'};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {type: 'article', title: article.title, description: article.excerpt}
  };
}

export default async function BlogPostPage({params}){
  const {slug} = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();

  const others = getLatestArticles().filter(a => a.slug !== article.slug);
  const related = [
    ...others.filter(a => a.category === article.category),
    ...others.filter(a => a.category !== article.category)
  ].slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: toISODate(article.date),
    author: {'@type': 'Person', name: article.author, jobTitle: article.authorRole},
    publisher: {'@type': 'Organization', name: 'SOHO Agency'},
    inLanguage: 'vi'
  };

  return (
    <>
      <Header activeNav="blog"/>
      <main>
        <article className={styles.article}>
          <header className={`container ${styles.head}`}>
            <p className={styles.back}><a href={sitePath('/blog')}>← Blog</a></p>
            <p className={styles.category}>{article.category}</p>
            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.lead}>{article.excerpt}</p>
            <p className={styles.byline}>
              <span>{article.author}, {article.authorRole.replace(/\s*@\s*SOHO$/, '')}</span>
              <span><time dateTime={toISODate(article.date)}>{article.date}</time></span>
              <span>{article.readTime}</span>
            </p>
          </header>

          <div className={`container ${styles.bodyWrap}`}>
            <div className={`prose ${styles.body}`} dangerouslySetInnerHTML={{__html: article.content}}/>
          </div>

          <footer className={`container ${styles.foot}`}>
            <div className={styles.footInner}>
              <div className={styles.author}>
                <p className={styles.authorLabel}>Người viết</p>
                <p className={styles.authorName}>{article.author}</p>
                <p className={styles.authorRole}>{article.authorRole.replace(/\s*@\s*SOHO$/, '')}, SOHO Agency</p>
              </div>
              <div className={styles.cta}>
                <p>Muốn áp dụng vào doanh nghiệp của bạn?</p>
                <Button href="/lien-he" variant="text">Trao đổi với SOHO</Button>
              </div>
            </div>
          </footer>
        </article>

        <section className={`container ${styles.related}`} aria-labelledby="related-title">
          <h2 id="related-title" className={styles.relatedTitle}>Đọc tiếp</h2>
          <ul className={styles.relatedList}>
            {related.map(a => (
              <li key={a.slug}>
                <a href={sitePath(`/blog/${a.slug}`)}>
                  <span className={styles.relatedMeta}>{a.date}, {a.category}</span>
                  <span className={styles.relatedName}>{a.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
      </main>
      <Footer/>
    </>
  );
}
