import {notFound} from 'next/navigation';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {getServicePage, servicePages} from '../../../components/servicePagesData';
import {sitePath} from '../../../components/paths';

export function generateStaticParams(){
  return servicePages.map(service => ({slug: service.slug}));
}

export async function generateMetadata({params}){
  const {slug} = await params;
  const service = getServicePage(slug);

  if(!service){
    return {title: 'Dich vu khong ton tai | SOHO Agency'};
  }

  return {
    title: `${service.menuTitle} | SOHO Agency`,
    description: service.intro
  };
}

export default async function ServiceLandingPage({params}){
  const {slug} = await params;
  const service = getServicePage(slug);

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
            <a className="previewLink" href="#service-process">
              <span>Xem cách triển khai</span>
              <ArrowRight size={18} className="linkArrow"/>
            </a>
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
