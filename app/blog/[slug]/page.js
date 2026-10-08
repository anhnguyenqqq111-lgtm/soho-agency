import {notFound} from 'next/navigation';
import styles from './page.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Hero from '../../../components/hero/Hero';
import {BlogVisual} from '../../../components/hero/Visuals';
import PageHeader from '../../../components/ui/PageHeader';
import Section from '../../../components/ui/Section';
import BlogCard from '../../../components/BlogCard';
import CtaBand from '../../../components/ui/CtaBand';
import {articles, getLatestArticles, toISODate} from '../../../components/blogData';

export function generateStaticParams(){
  return articles.map(article => ({slug: article.slug}));
}
export async function generateMetadata({params}){
  const {slug} = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) return {title: 'Không tìm thấy bài viết'};
  return {title: article.title, description: article.excerpt, openGraph: {type: 'article', title: article.title, description: article.excerpt}};
}

export default async function BlogPostPage({params}){
  const {slug} = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  const others = getLatestArticles().filter(a => a.slug !== article.slug);
  const related = [...others.filter(a => a.category === article.category), ...others.filter(a => a.category !== article.category)].slice(0, 3);
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.excerpt,
    datePublished: toISODate(article.date), author: {'@type': 'Person', name: article.author, jobTitle: article.authorRole},
    publisher: {'@type': 'Organization', name: 'SOHO Agency'}, inLanguage: 'vi'
  };
  const role = article.authorRole.replace(/\s*@\s*SOHO$/, '');
  return (
    <>
      <Header activeNav="blog"/>
      <main>
        <Hero tone="blog" crumbs={[{label: 'Blog', href: '/blog'}, {label: article.category}]} eyebrow={article.category} title={article.title} tagline={`${article.author} · ${article.date} · ${article.readTime}`} visual={<BlogVisual/>}/>
        <PageHeader compact title={article.title} lead={article.excerpt}>
          <p className={styles.byline}><strong>{article.author}</strong>, {role} · <time dateTime={toISODate(article.date)}>{article.date}</time> · {article.readTime}</p>
        </PageHeader>
        <section className={styles.wrap}>
          <div className="container">
            <div className={styles.card}>
              <div className={`prose ${styles.body}`} dangerouslySetInnerHTML={{__html: article.content}}/>
              <div className={styles.author}>
                <span className={styles.avatar} aria-hidden="true"/>
                <div><p className={styles.authorName}>{article.author}</p><p className={styles.authorRole}>{role}, SOHO Agency</p></div>
              </div>
            </div>
          </div>
        </section>
        <Section tone="gray" title={<>Đọc <span className="hl">tiếp</span></>} spacing="sm">
          <div className={styles.related}>{related.map((a, i) => <BlogCard key={a.slug} post={a} delay={i * 80}/>)}</div>
        </Section>
        <CtaBand withForm={false} title={<>Muốn áp dụng vào <span className="hl">doanh nghiệp của bạn?</span></>} text="Gửi website và mục tiêu. SOHO gửi lại 3 việc nên làm trước."/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
      </main>
      <Footer/>
    </>
  );
}
