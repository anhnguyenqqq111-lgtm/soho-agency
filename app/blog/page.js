import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Clock3,
  Eye,
  Search,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {articles, categories} from '../../components/blogData';

export const metadata = {
  title: 'Blog Marketing SOHO | Kiến thức SEO, Ads, Content & AI Search',
  description: 'Tổng hợp kiến thức digital marketing, SEO, performance ads, content, CRO và AI Search từ SOHO Agency.'
};

const categoryHighlights = [
  {label: 'SEO & AI Search', icon: Search},
  {label: 'Performance Ads', icon: Target},
  {label: 'Dữ liệu & CRO', icon: BarChart3},
  {label: 'Chiến lược Tăng trưởng', icon: TrendingUp}
];

export default function BlogPage(){
  const featuredArticle = articles.find(article => article.featured) || articles[0];
  const regularArticles = articles.filter(article => article.slug !== featuredArticle.slug);

  return (
    <main>
      <Header activeNav="blog" />
      <section className="blogHero">
        <div className="blogHeroCopy">
          <p className="eyebrow">BLOG MARKETING SOHO</p>
          <h1>Kiến thức marketing giúp doanh nghiệp ra quyết định sắc hơn</h1>
          <p>
            Các bài viết thực chiến về SEO, quảng cáo, nội dung, đo lường và AI Search,
            được biên tập cho đội ngũ muốn biến marketing thành tăng trưởng có thể đo lường.
          </p>
          <div className="blogHeroActions">
            <a className="btn primary btnGlow" href={`/blog/${featuredArticle.slug}`}>
              <span>Đọc bài nổi bật</span>
              <ArrowRight size={18}/>
              <span className="btnSweep"></span>
            </a>
            <a className="previewLink" href="#all-posts">
              <span>Xem tất cả bài viết</span>
              <ArrowRight size={18} className="linkArrow"/>
            </a>
          </div>
        </div>
        <div className="blogHeroVisual" aria-hidden="true">
          <div className="blogSignalCard primarySignal">
            <Sparkles size={18}/>
            <span>AI Search</span>
            <strong>Entity-first</strong>
          </div>
          <div className="blogSignalCard adsSignal">
            <Target size={18}/>
            <span>Performance</span>
            <strong>ROAS 4.8x</strong>
          </div>
          <div className="blogOrbit">
            <BookOpen size={58}/>
            <b>SOHO Insights</b>
            <small>SEO • Ads • Content • Data</small>
          </div>
        </div>
      </section>

      <section className="blogCategoryBand">
        <div className="blogCategoryInner">
          {categoryHighlights.map(item => (
            <div className="blogCategoryChip" key={item.label}>
              <item.icon size={18}/>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section blogFeatureSection">
        <article className="featuredPost">
          <div>
            <div className={`blogBanner featuredBanner ${featuredArticle.banner}`}>
              <span>{featuredArticle.category}</span>
              <b>{featuredArticle.menuTitle || 'SOHO Insight'}</b>
              <i></i>
            </div>
            <span className="postKicker">Bài viết nổi bật</span>
            <h2>{featuredArticle.title}</h2>
            <p>{featuredArticle.excerpt}</p>
            <div className="postMeta">
              <span><Clock3 size={15}/> {featuredArticle.readTime}</span>
              <span><Eye size={15}/> {featuredArticle.views}</span>
              <span>{featuredArticle.date}</span>
            </div>
            <a className="featuredPostLink" href={`/blog/${featuredArticle.slug}`}>
              Đọc phân tích đầy đủ <ArrowRight size={17}/>
            </a>
          </div>
          <div className="featuredPostPanel">
            <span>{featuredArticle.category}</span>
            <strong>{featuredArticle.author}</strong>
            <small>{featuredArticle.authorRole}</small>
          </div>
        </article>
      </section>

      <section className="section blogArchive" id="all-posts">
        <div className="sectionHead left">
          <p className="eyebrow">THƯ VIỆN KIẾN THỨC</p>
          <h2>Blog về marketing, SEO và tăng trưởng</h2>
        </div>
        <div className="blogFilterRow">
          {categories.map(category => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <div className="blogCardGrid">
          {regularArticles.map(article => (
            <article className="blogCard" key={article.slug}>
              <div className={`blogBanner cardBanner ${article.banner}`}>
                <span>{article.category}</span>
                <i></i>
              </div>
              <span className="postKicker">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="postMeta">
                <span><Clock3 size={14}/> {article.readTime}</span>
                <span>{article.date}</span>
              </div>
              <a href={`/blog/${article.slug}`}>
                Đọc bài viết <ArrowRight size={16}/>
              </a>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
