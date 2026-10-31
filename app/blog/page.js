import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/hero/Hero';
import {BlogVisual} from '../../components/hero/Visuals';
import Section from '../../components/ui/Section';
import BlogCard from '../../components/BlogCard';
import CtaBand from '../../components/ui/CtaBand';
import {getArticlesByCategory, getLatestArticles, categorySlug} from '../../components/blogData';

export const metadata = {
  alternates: {canonical: '/blog/'},
  title: 'Blog',
  description: 'Kinh nghiệm thực tế của đội SOHO về SEO, tìm kiếm bằng AI, quảng cáo, nội dung, tối ưu tỉ lệ chuyển đổi và đo lường. Hướng dẫn từng bước cho doanh nghiệp Việt Nam.'
};

/*
  Bố cục: Hero (H1 duy nhất) → "Mới nhất": 3 thẻ → "Tất cả bài viết": nút lọc theo chủ đề + lưới thẻ.
  Lọc bằng radio + CSS (không cần JS): mỗi chủ đề một luật ẩn thẻ khác chủ đề, sinh từ danh sách danh mục.
*/
export default function BlogPage() {
  const latest = getLatestArticles(3);
  const groups = getArticlesByCategory();
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const all = getLatestArticles();
  const filterCss = groups
    .map(
      g =>
        `#cat-${g.id}:checked ~ .blog-grid > [data-cat]:not([data-cat="${g.id}"]){display:none}` +
        `#cat-${g.id}:checked ~ [role=group] [data-chip="${g.id}"]{background:var(--denim);border-color:var(--denim);color:#fff}` +
        `#cat-${g.id}:focus-visible ~ [role=group] [data-chip="${g.id}"]{outline:2px solid var(--brand);outline-offset:3px}`
    )
    .join('') +
    '#cat-all:checked ~ [role=group] [data-chip="all"]{background:var(--denim);border-color:var(--denim);color:#fff}' +
    '#cat-all:focus-visible ~ [role=group] [data-chip="all"]{outline:2px solid var(--brand);outline-offset:3px}';
  return (
    <>
      <Header activeNav="blog" />
      <main id="main">
        <Hero
          tone="blog"
          crumbs={[{label: 'Tin tức'}]}
          title={
            <>
              Blog SOHO Agency: <span className="hl">kinh nghiệm từ dự án thật</span>
            </>
          }
          tagline="Hướng dẫn từng bước về SEO, quảng cáo và đo lường. Đội marketing của bạn đọc xong là làm theo được."
          visual={<BlogVisual />}
        />
        <Section
          id="noi-dung"
          tone="white"
          title={
            <>
              Bài viết <span className="hl">mới nhất</span>
            </>
          }
          spacing="sm"
        >
          <div className={styles.latest}>
            {latest.map((p, i) => (
              <BlogCard key={p.slug} post={p} delay={i * 80} />
            ))}
          </div>
        </Section>
        <Section
          id="chu-de"
          tone="soft"
          title={
            <>
              Tất cả <span className="hl">bài viết</span>
            </>
          }
          intro={<p>{total} bài. Chọn một chủ đề để lọc nhanh.</p>}
        >
          <div className={styles.filter}>
            <style dangerouslySetInnerHTML={{__html: filterCss}} />
            <input type="radio" name="blog-cat" id="cat-all" className={styles.radio} defaultChecked />
            {groups.map(g => (
              <input key={g.id} type="radio" name="blog-cat" id={`cat-${g.id}`} className={styles.radio} />
            ))}
            <div className={styles.chips} role="group" aria-label="Lọc theo chủ đề" tabIndex={0}>
              <label htmlFor="cat-all" data-chip="all">
                Tất cả <span>{total}</span>
              </label>
              {groups.map(g => (
                <label key={g.id} htmlFor={`cat-${g.id}`} data-chip={g.id}>
                  {g.name} <span>{g.items.length}</span>
                </label>
              ))}
            </div>
            <div className={`${styles.grid} blog-grid`}>
              {all.map((p, i) => (
                <div key={p.slug} data-cat={categorySlug(p.category)}>
                  <BlogCard post={p} delay={(i % 3) * 80} />
                </div>
              ))}
            </div>
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
      </main>
      <Footer />
    </>
  );
}
