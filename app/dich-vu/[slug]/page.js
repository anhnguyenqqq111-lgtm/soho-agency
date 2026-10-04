import { notFound } from 'next/navigation';
import {
  ArrowRight,
  ShieldCheck,
  LineChart,
  Target,
  Sparkles,
  Zap,
  CheckCircle2
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
              <span>Nhận đề xuất cho dịch vụ này</span>
              <ArrowRight size={18} />
              <span className="btnSweep"></span>
            </a>
            <a className="serviceHeroSecondaryLink" href="#giai-phap">
              <span>Khám phá giải pháp và trụ cột</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Core Trust Indicators Bar */}
          <div className="serviceHeroTrustBar">
            <div className="trustPill">
              <Target size={16} className="iconBrandIndigo" />
              <span>Đúng insight khách hàng</span>
            </div>
            <div className="trustDivider" />
            <div className="trustPill">
              <LineChart size={16} className="iconBrandGold" />
              <span>Đo theo Qualified Leads</span>
            </div>
            <div className="trustDivider" />
            <div className="trustPill">
              <ShieldCheck size={16} className="iconBrandFlame" />
              <span>Sở hữu 100% raw data</span>
            </div>
            <div className="trustDivider" />
            <div className="trustPill">
              <Zap size={16} className="iconBrandPurple" />
              <span>Sprint 2 tuần linh hoạt</span>
            </div>
          </div>
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
