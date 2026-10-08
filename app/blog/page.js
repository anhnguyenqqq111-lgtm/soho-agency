import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/hero/Hero';
import {BlogVisual} from '../../components/hero/Visuals';
import PageHeader from '../../components/ui/PageHeader';
import Section from '../../components/ui/Section';
import BlogCard from '../../components/BlogCard';
import CtaBand from '../../components/ui/CtaBand';
import {getLatestArticles, categorySlug} from '../../components/blogData';

export const metadata = {
  title: 'Blog',
  description: 'Ghi chép của đội SOHO về SEO, AI Search, quảng cáo, content, CRO và đo lường cho doanh nghiệp Việt Nam.'
};

export default function BlogPage(){
  const all = getLatestArticles();
  const cats = [];
  for (const a of all) if (!cats.find(c => c.name === a.category)) cats.push({name: a.category, id: categorySlug(a.category), n: all.filter(x => x.category === a.category).length});
  return (
    <>
      <Header activeNav="blog"/>
      <main>
        <Hero tone="blog" crumbs={[{label: 'Blog'}]} eyebrow="Blog" title="Ghi chép từ đội SOHO" tagline="SEO, quảng cáo, đo lường, viết lại để đội marketing của bạn dùng được." visual={<BlogVisual/>}/>
        <PageHeader compact crumbs={[{label: 'Blog'}]} title="Ghi chép từ đội SOHO" lead="Những gì SOHO học được khi làm SEO, quảng cáo và đo lường cho khách hàng, viết lại để đội marketing của bạn dùng được."/>
        <Section tone="fade" title={<>Những bài viết <span className="hl">mới nhất</span></>} aside={
          <nav aria-label="Danh mục" className={styles.cats}>
            {cats.map(c => <a key={c.id} href={`#${c.id}`}>{c.name} <span>{c.n}</span></a>)}
          </nav>
        }>
          <div className={styles.grid}>{all.map((p, i) => <BlogCard key={p.slug} post={p} delay={i * 70}/>)}</div>
          <div className={styles.anchors} aria-hidden="true">{cats.map(c => <span key={c.id} id={c.id}/>)}</div>
        </Section>
        <CtaBand withForm={false} title={<>Muốn áp dụng vào <span className="hl">doanh nghiệp của bạn?</span></>} text="Gửi website và mục tiêu. SOHO gửi lại 3 việc nên làm trước."/>
      </main>
      <Footer/>
    </>
  );
}
