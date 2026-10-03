import {notFound} from 'next/navigation';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
  BookOpen
} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {getServicePage, servicePages} from '../../../components/servicePagesData';
import {getServiceArticle} from '../../../components/serviceArticlesData';
import ArticleRenderer from '../../../components/ArticleRenderer';
import {sitePath} from '../../../components/paths';

export function generateStaticParams(){
  return servicePages.map(service => ({slug: service.slug}));
}

export async function generateMetadata({params}){
  const {slug} = await params;
  const service = getServicePage(slug);
  const article = getServiceArticle(slug);

  if(!service){
    return {title: 'Dịch vụ không tồn tại | SOHO Agency'};
  }

  return {
    title: article?.metaTitle || `${service.menuTitle} | SOHO Agency`,
    description: article?.metaDesc || service.intro
  };
}

export default async function ServiceLandingPage({params}){
  const {slug} = await params;
  const service = getServicePage(slug);
  const article = getServiceArticle(slug);

  if(!service){
    notFound();
  }

  return (
    <main>
      <Header activeNav="services" />
      <section className="serviceLandingHero">
        <div className="serviceHeroCopy">
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
          <div className="serviceHeroActions">
            <a className="btn primary btnGlow" href={sitePath('/#contact')}>
              <span>Nhận đề xuất cho dịch vụ này</span>
              <ArrowRight size={18}/>
              <span className="btnSweep"></span>
            </a>
            {article ? (
              <a className="previewLink" href="#chuyen-khao-seo">
                <span>Đọc chuyên khảo SEO (~3.000 từ)</span>
                <ArrowRight size={18} className="linkArrow"/>
              </a>
            ) : (
              <a className="previewLink" href="#service-process">
                <span>Xem cách triển khai</span>
                <ArrowRight size={18} className="linkArrow"/>
              </a>
            )}
          </div>
        </div>
        <div className="serviceHeroPanel">
          <div className="serviceGoogleTile" aria-hidden="true">
            <span></span>
          </div>
          <div className="servicePanelMetric">
            <small>Trọng tâm</small>
            <strong>{service.category}</strong>
          </div>
          <div className="servicePanelStack">
            <span><Target size={16}/> Đúng insight khách hàng</span>
            <span><LineChart size={16}/> Đo theo lead/doanh thu</span>
            <span><ShieldCheck size={16}/> Minh bạch sprint triển khai</span>
          </div>
        </div>
      </section>

      <section className="servicePromiseBand">
        <div>
          <Sparkles size={20}/>
          <strong>{service.promise}</strong>
        </div>
      </section>

      <section className="section serviceInsightGrid">
        <div className="serviceInsightBlock">
          <p className="eyebrow">INSIGHT CỐT LÕI</p>
          <h2>Vì sao cách làm cũ thường không tạo tăng trưởng?</h2>
          <p>{service.insight}</p>
        </div>
        <div className="servicePainList">
          {service.pains.map(pain => (
            <div key={pain}>
              <Zap size={18}/>
              <span>{pain}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="soft" id="service-process">
        <div className="section">
          <div className="sectionHead">
            <p className="eyebrow">QUY TRÌNH TRIỂN KHAI</p>
            <h2>Không làm dàn trải, ưu tiên việc có tác động rõ</h2>
          </div>
          <div className="serviceProcessGrid">
            {service.process.map((step,index) => (
              <article key={step}>
                <span>{String(index + 1).padStart(2,'0')}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section serviceOutcomeSection">
        <div className="sectionHead left">
          <p className="eyebrow">KẾT QUẢ KỲ VỌNG</p>
          <h2>Dịch vụ được thiết kế để phục vụ mục tiêu kinh doanh</h2>
        </div>
        <div className="serviceOutcomeGrid">
          {service.outcomes.map(outcome => (
            <article key={outcome}>
              <CheckCircle2/>
              <h3>{outcome}</h3>
            </article>
          ))}
        </div>
        <div className="serviceFitBox">
          <BarChart3 size={22}/>
          <p>{service.proof}</p>
        </div>
      </section>

      {/* IN-DEPTH SEO GUIDE / ARTICLE SECTION (PAS + COMMERCIAL INTENT) */}
      {article && (
        <section className="section serviceDeepArticleSection" id="chuyen-khao-seo">
          <div className="articleIntroBlock">
            <div className="articleBadgeRow">
              <span className="articleEyebrowBadge">
                <Sparkles size={14} className="textOrange"/>
                CHUYÊN KHẢO TĂNG TRƯỞNG & CHIẾN LƯỢC SEO 2026
              </span>
              <span className="frameworkBadge">FRAMEWORK: PAS + B2B COMMERCIAL INTENT</span>
            </div>
            <h2 className="articleMainTitle">{article.metaTitle}</h2>
            <p className="articleLeadSubtitle">{article.metaDesc}</p>
            
            <div className="articleAuthorBar">
              <div className="authorProfile">
                <div className="authorAvatarWrap">
                  <img src={sitePath(article.author.avatar)} alt={article.author.name} className="authorAvatarImg" />
                </div>
                <div>
                  <strong>{article.author.name}</strong>
                  <span>{article.author.role}</span>
                </div>
              </div>
              <div className="articleMetaPills">
                <span className="metaPill">🕒 {article.readingTime}</span>
                <span className="metaPill">📅 Cập nhật: {article.updatedDate}</span>
                <span className="metaPill verifiedPill">
                  <ShieldCheck size={14}/> Đã thẩm định E-E-A-T
                </span>
              </div>
            </div>
          </div>

          <div className="articleLayoutGrid">
            {/* STICKY TOC SIDEBAR */}
            <aside className="articleSidebarCol">
              <div className="stickyTocWrapper">
                <div className="tocHead">
                  <BookOpen size={16} className="textPrimary"/>
                  <span>MỤC LỤC CHUYÊN SÂU</span>
                </div>
                <nav className="tocNavList">
                  {article.toc.map(item => (
                    <a key={item.id} href={`#${item.id}`} className="tocNavItem">
                      <span>{item.title}</span>
                    </a>
                  ))}
                </nav>

                <div className="sidebarConsultCard">
                  <div className="sidebarConsultHead">
                    <Zap size={20} className="textOrange"/>
                    <strong>Audit Website 0đ</strong>
                  </div>
                  <p>Nhận báo cáo rà soát lỗ hổng SEO và tiềm năng tăng trưởng doanh thu cùng chuyên gia SOHO.</p>
                  <a href={sitePath('/#contact')} className="btn primary btnGlow sidebarConsultBtn">
                    <span>Đăng ký Audit</span>
                    <ArrowRight size={14}/>
                    <span className="btnSweep"></span>
                  </a>
                </div>
              </div>
            </aside>

            {/* MAIN ARTICLE BODY */}
            <article className="articleContentCol">
              {article.sections.map((section, idx) => (
                <section key={section.id} id={section.id} className="articleContentBlock">
                  <div className="sectionAnchorHeader">
                    <span className="sectionIdxBadge">CHƯƠNG 0{idx + 1}</span>
                    <h2 className="sectionMainHeading">{section.heading}</h2>
                  </div>
                  <ArticleRenderer section={section} />
                </section>
              ))}
            </article>
          </div>
        </section>
      )}

      <section className="serviceFinalCta">
        <div>
          <p className="eyebrow gold">BẮT ĐẦU ĐÚNG VIỆC</p>
          <h2>Muốn biết dịch vụ này có phù hợp với bài toán hiện tại?</h2>
          <p>SOHO sẽ xem nhanh website, kênh hiện có và mục tiêu kinh doanh để đề xuất hướng triển khai ưu tiên.</p>
        </div>
        <a className="btn primary btnGlow" href={sitePath('/#contact')}>
          <span>Trao đổi với SOHO</span>
          <ArrowRight size={18}/>
          <span className="btnSweep"></span>
        </a>
      </section>
      <Footer />
    </main>
  );
}
