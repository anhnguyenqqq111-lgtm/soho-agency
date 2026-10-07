import {ArrowRight, CheckCircle2, LineChart, ShieldCheck, Target, Zap} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {servicePages} from '../../components/servicePagesData';
import {sitePath} from '../../components/paths';

export const metadata = {
  title: 'Dịch vụ Digital Marketing | SOHO Agency',
  description: 'Các dịch vụ SEO, Google Ads, Content, CRO, GA4 và tư vấn tăng trưởng của SOHO Agency.'
};

export default function ServicesIndexPage(){
  const serviceStats = [
    {label: 'Audit', value: '01'},
    {label: 'Roadmap', value: '90D'},
    {label: 'Sprint', value: '2W'}
  ];

  return (
    <main>
      <Header activeNav="services" />
      <section className="menuPageHero servicesIndexHero">
        <div>
          <p className="eyebrow">DỊCH VỤ SOHO</p>
          <h1>Chọn đúng đòn bẩy tăng trưởng</h1>
          <p>Ít lời hứa. Nhiều chẩn đoán, framework và chỉ số nghiệm thu.</p>
        </div>
        <div className="servicesHeroBoard">
          <div className="servicesHeroBoardTop">
            <span>SOHO SERVICE MAP</span>
            <ShieldCheck size={18} />
          </div>
          <div className="servicesHeroBoardGrid">
            <div><Target size={22}/><strong>Đúng tệp</strong><small>Intent rõ</small></div>
            <div><LineChart size={22}/><strong>Đúng số</strong><small>Lead thật</small></div>
            <div><Zap size={22}/><strong>Đúng nhịp</strong><small>Sprint gọn</small></div>
          </div>
        </div>
      </section>
      <section className="section menuPageGrid">
        {servicePages.map((service, index) => (
          <article className="menuPageCard" key={service.slug}>
            <div className="serviceCardTopline">
              <span>{service.category}</span>
              <b>{String(index + 1).padStart(2, '0')}</b>
            </div>
            <h2>{service.menuTitle}</h2>
            <p>{service.promise || service.intro}</p>
            <div className="serviceMiniStats">
              {serviceStats.map(stat => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <small>{stat.label}</small>
                </div>
              ))}
            </div>
            <ul className="serviceOutcomeList">
              {service.outcomes.slice(0,3).map(outcome => (
                <li key={outcome}><CheckCircle2 size={15}/> <span>{outcome}</span></li>
              ))}
            </ul>
            <a href={sitePath(`/dich-vu/${service.slug}`)}>Xem framework <ArrowRight size={16}/></a>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
