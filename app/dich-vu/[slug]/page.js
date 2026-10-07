import { notFound } from 'next/navigation';
import {
  ArrowRight,
  ShieldCheck,
  LineChart,
  Target,
  Zap,
  CheckCircle2,
  BarChart3,
  Search,
  Layers3
} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getServicePage, servicePages } from '../../../components/servicePagesData';
import { getServiceArticle } from '../../../components/serviceArticlesData';
import ServiceSectionVisualizer from '../../../components/ServiceSectionVisualizer';
import { cleanPunctuation } from '../../../components/cleanPunctuation';
import { sitePath } from '../../../components/paths';

export function generateStaticParams() {
  return servicePages.map(service => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServicePage(slug);
  const article = getServiceArticle(slug);

  if (!service) {
    return { title: 'Dịch vụ không tồn tại | SOHO Agency' };
  }

  return {
    title: cleanPunctuation(article?.metaTitle || `${service.menuTitle} SOHO Agency`),
    description: cleanPunctuation(article?.metaDesc || service.intro)
  };
}

export default async function ServiceLandingPage({ params }) {
  const { slug } = await params;
  const service = getServicePage(slug);
  const article = getServiceArticle(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="servicePageMain">
      <Header activeNav="services" />

      {/* 1. CLEAN & EXECUTIVE SERVICE HERO */}
      <section className="serviceCleanHero">
        <div className="serviceCleanHeroInner">
          <div className="serviceHeroCopyBlock">
            <div className="heroEyebrowBadge">
              <span className="radarPulse">
                <span className="radarCore"></span>
              </span>
              <span>{cleanPunctuation(service.eyebrow || 'DỊCH VỤ SOHO GROWTH ENGINE 2026')}</span>
            </div>

            <h1 className="serviceHeroH1">{cleanPunctuation(service.title)}</h1>
            <p className="serviceHeroLead">{cleanPunctuation(service.intro)}</p>

            <div className="serviceHeroActionRow">
              <a className="btn primary btnGlow" href={sitePath('/#contact')}>
                <span>Nhận đề xuất</span>
                <ArrowRight size={18} />
                <span className="btnSweep"></span>
              </a>
              <a className="serviceHeroSecondaryLink" href="#giai-phap">
                <span>Xem framework</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="serviceHeroMosaic" aria-label="Các tín hiệu chính của dịch vụ">
            <div className="serviceMosaicTile darkTile">
              <span>01</span>
              <strong>Audit trước</strong>
              <small>{cleanPunctuation(service.pains?.[0] || 'Tìm đúng điểm nghẽn')}</small>
            </div>
            <div className="serviceMosaicTile iconTile">
              <Search size={28} />
              <strong>{cleanPunctuation(service.category)}</strong>
              <small>Đúng intent, đúng tệp</small>
            </div>
            <div className="serviceMosaicTile statTile">
              <span>90D</span>
              <strong>Roadmap</strong>
              <small>Việc ưu tiên theo tác động</small>
            </div>
            <div className="serviceMosaicTile softTile">
              <BarChart3 size={27} />
              <strong>Lead & ROI</strong>
              <small>Đo bằng dữ liệu kinh doanh</small>
            </div>
          </div>
        </div>

        <div className="serviceHeroTrustBar">
          <div className="trustPill"><Target size={16} /> Đúng insight</div>
          <div className="trustDivider" />
          <div className="trustPill"><LineChart size={16} /> Qualified leads</div>
          <div className="trustDivider" />
          <div className="trustPill"><ShieldCheck size={16} /> Sở hữu raw data</div>
          <div className="trustDivider" />
          <div className="trustPill"><Zap size={16} /> Sprint 2 tuần</div>
          <div className="trustDivider" />
          <div className="trustPill"><Layers3 size={16} /> Framework rõ</div>
        </div>
      </section>

      {/* 2. DEDICATED VISUAL SECTIONS WITH STICKY SUBNAV */}
      {article && (
        <ServiceSectionVisualizer service={service} article={article} serviceTitle={service.title} />
      )}

      {/* 3. FINAL ACTION CTA */}
      <section className="serviceFinalCta" id="contact">
        <div>
          <p className="eyebrow gold">BẮT ĐẦU ĐÚNG VIỆC</p>
          <h2>Muốn biết dịch vụ này có phù hợp với bài toán hiện tại?</h2>
          <p>
            SOHO sẽ xem nhanh website, các kênh hiện có và mục tiêu kinh doanh để đề xuất hướng triển khai ưu tiên cùng bài toán định lượng ROI minh bạch.
          </p>
        </div>
        <a className="btn primary btnGlow" href={sitePath('/#contact')}>
          <span>Trao đổi với SOHO</span>
          <ArrowRight size={18} />
          <span className="btnSweep"></span>
        </a>
      </section>

      <Footer />
    </main>
  );
}
