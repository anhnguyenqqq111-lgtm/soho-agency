import {notFound} from 'next/navigation';
import {ArrowLeft, ArrowRight, Clock3, Eye} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {articles} from '../../../components/blogData';

export function generateStaticParams(){
  return articles.map(article => ({slug: article.slug}));
}

export async function generateMetadata({params}){
  const {slug} = await params;
  const article = articles.find(item => item.slug === slug);

  if(!article){
    return {
      title: 'Không tìm thấy bài viết | SOHO Agency'
    };
  }

  return {
    title: `${article.title} | Blog Marketing SOHO`,
    description: article.excerpt
  };
}

export default async function BlogDetailPage({params}){
  const {slug} = await params;
  const article = articles.find(item => item.slug === slug);

  if(!article){
    notFound();
  }

  const relatedArticles = articles
    .filter(item => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <main>
      <Header activeNav="blog" />
      <article className="postPage">
        <div className="postShell">
          <a className="backToBlog" href="/blog">
            <ArrowLeft size={17}/> Quay lại Blog Marketing
          </a>
          <div className="postHeader">
            <span className="postKicker">{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <div className="postMeta">
              <span>{article.author}</span>
              <span>{article.date}</span>
              <span><Clock3 size={15}/> {article.readTime}</span>
              <span><Eye size={15}/> {article.views}</span>
            </div>
          </div>
          <div className={`blogBanner postBanner ${article.banner}`}>
            <span>{article.category}</span>
            <b>{article.title}</b>
            <i></i>
          </div>
          <div className="postAuthorBox">
            <div>
              <strong>{article.author}</strong>
              <span>{article.authorRole}</span>
            </div>
            <a href="/#contact">Tư vấn chiến lược <ArrowRight size={15}/></a>
          </div>
          <div
            className="postContent"
            dangerouslySetInnerHTML={{__html: article.content}}
          />
        </div>
      </article>
      <section className="section relatedPosts">
        <div className="sectionHead left">
          <p className="eyebrow">ĐỌC TIẾP</p>
          <h2>Bài viết liên quan</h2>
        </div>
        <div className="blogCardGrid">
          {relatedArticles.map(item => (
            <article className="blogCard" key={item.slug}>
              <div className={`blogBanner cardBanner ${item.banner}`}>
                <span>{item.category}</span>
                <i></i>
              </div>
              <span className="postKicker">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a href={`/blog/${item.slug}`}>Đọc bài viết <ArrowRight size={16}/></a>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
