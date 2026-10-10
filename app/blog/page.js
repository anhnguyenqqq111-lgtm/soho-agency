import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/hero/Hero';
import {BlogVisual} from '../../components/hero/Visuals';
import Section from '../../components/ui/Section';
import BlogCard from '../../components/BlogCard';
import BlogRow from '../../components/BlogRow';
import CtaBand from '../../components/ui/CtaBand';
import {getArticlesByCategory, getLatestArticles} from '../../components/blogData';

export const metadata = {
  title: 'Blog',
  description: 'Ghi chép của đội SOHO về SEO, AI Search, quảng cáo, content, CRO, đo lường và các framework làm marketing từng bước cho doanh nghiệp Việt Nam.'
};

/*
  Bố cục: Hero (H1 duy nhất) → "Mới nhất": 3 thẻ có thumbnail → "Theo chủ đề": cột trái là mục lục danh mục
  bám theo khi cuộn, cột phải là các nhóm, mỗi nhóm một danh sách dòng gọn (BlogRow) thay vì lưới thẻ thưa.
*/
export default function BlogPage(){
  const latest = getLatestArticles(3);
  const groups = getArticlesByCategory();
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  return (
    <>
      <Header activeNav="blog"/>
      <main>
        <Hero tone="blog" crumbs={[{label: 'Blog'}]} eyebrow="Blog" title="Ghi chép từ đội SOHO" tagline="SEO, quảng cáo, đo lường và các framework từng bước, viết lại để đội marketing của bạn dùng được." visual={<BlogVisual/>}/>
        <Section id="noi-dung" tone="white" title={<>Bài viết <span className="hl">mới nhất</span></>} spacing="sm">
          <div className={styles.latest}>{latest.map((p, i) => <BlogCard key={p.slug} post={p} delay={i * 80}/>)}</div>
        </Section>
        <Section id="chu-de" tone="fade" title={<>Theo <span className="hl">chủ đề</span></>} intro={<p>{total} bài, xếp theo danh mục. Nhóm Framework là bài hướng dẫn từng bước.</p>}>
          <div className={styles.layout}>
            <nav aria-label="Danh mục" className={styles.toc}>
              <p className={styles.tocTitle}>Danh mục</p>
              <ul>
                {groups.map(g => <li key={g.id}><a href={`#${g.id}`}>{g.name}<span>{g.items.length}</span></a></li>)}
              </ul>
            </nav>
            <div className={styles.groups}>
              {groups.map(g => (
                <section key={g.id} id={g.id} className={styles.group} aria-labelledby={`${g.id}-title`}>
                  <h3 id={`${g.id}-title`} className={styles.groupTitle}>{g.name} <span>{g.items.length} bài</span></h3>
                  <div className={styles.list}>{g.items.map((p, i) => <BlogRow key={p.slug} post={p} delay={i * 60} headingLevel="h4" showCategory={false}/>)}</div>
                </section>
              ))}
            </div>
          </div>
        </Section>
        <CtaBand withForm={false} title={<>Muốn áp dụng vào <span className="hl">doanh nghiệp của bạn?</span></>} text="Gửi website và mục tiêu. SOHO gửi lại 3 việc nên làm trước."/>
      </main>
      <Footer/>
    </>
  );
}
