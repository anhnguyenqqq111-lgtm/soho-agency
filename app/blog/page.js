import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHeader from '../../components/ui/PageHeader';
import {images} from '../../components/data/images';
import {getLatestArticles, categorySlug} from '../../components/blogData';
import {sitePath} from '../../components/paths';

export const metadata = {
  title: 'Blog',
  description: 'Ghi chép của đội SOHO về SEO, AI Search, quảng cáo, content, CRO và đo lường cho doanh nghiệp Việt Nam.'
};

export default function BlogPage(){
  const all = getLatestArticles();
  const featured = all.find(a => a.featured) || all[0];
  const rest = all.filter(a => a.slug !== featured.slug);
  const next = rest.slice(0, 3);

  // Nhóm theo danh mục, giữ thứ tự xuất hiện của bài mới nhất.
  const groups = [];
  for (const article of all){
    let group = groups.find(g => g.category === article.category);
    if (!group){
      group = {category: article.category, id: categorySlug(article.category), items: []};
      groups.push(group);
    }
    group.items.push(article);
  }

  return (
    <>
      <Header activeNav="blog"/>
      <main>
        <PageHeader
          image={images.pageBlog}
          compact
          crumbs={[{label: 'Blog'}]}
          title="Ghi chép từ đội SOHO"
          lead="Những gì SOHO học được khi làm SEO, quảng cáo và đo lường cho khách hàng, viết lại để đội marketing của bạn dùng được."
        />

        {/* Bài nổi bật */}
        <section className="container" aria-label="Bài nổi bật">
          <div className={styles.featured}>
            <article className={styles.lead}>
              <p className={styles.kicker}>
                <span>Bài nổi bật</span>
                <span>{featured.category}</span>
              </p>
              <h2 className={styles.leadTitle}>
                <a href={sitePath(`/blog/${featured.slug}`)}>{featured.title}</a>
              </h2>
              <p className={styles.leadExcerpt}>{featured.excerpt}</p>
              <p className={styles.byline}>
                {featured.author}, <time dateTime={featured.date.split('/').reverse().join('-')}>{featured.date}</time>, {featured.readTime}
              </p>
            </article>
            <aside className={styles.next} aria-label="Bài mới">
              <p className={styles.nextLabel}>Mới đăng</p>
              <ul>
                {next.map(a => (
                  <li key={a.slug}>
                    <a href={sitePath(`/blog/${a.slug}`)}>
                      <span className={styles.nextMeta}>{a.date}, {a.category}</span>
                      <span className={styles.nextTitle}>{a.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* Lưu trữ theo danh mục */}
        <section className={`container ${styles.archive}`} aria-labelledby="archive-title">
          <div className={styles.archiveHead}>
            <h2 id="archive-title" className={styles.archiveTitle}>Tất cả bài viết</h2>
            <nav aria-label="Danh mục" className={styles.cats}>
              {groups.map(g => (
                <a key={g.id} href={`#${g.id}`}>{g.category} <span>{g.items.length}</span></a>
              ))}
            </nav>
          </div>

          {groups.map(g => (
            <div key={g.id} id={g.id} className={styles.group}>
              <h3 className={styles.groupTitle}>{g.category}</h3>
              <ul className={styles.rows}>
                {g.items.map(a => (
                  <li key={a.slug}>
                    <a href={sitePath(`/blog/${a.slug}`)} className={styles.row}>
                      <span className={`num ${styles.date}`}>{a.date}</span>
                      <span className={styles.title}>{a.title}</span>
                      <span className={styles.read}>{a.readTime}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
      <Footer/>
    </>
  );
}
