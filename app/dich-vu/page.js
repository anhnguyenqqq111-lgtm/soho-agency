import {ArrowRight, CheckCircle2} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {servicePages} from '../../components/servicePagesData';

export const metadata = {
  title: 'Dịch vụ Digital Marketing | SOHO Agency',
  description: 'Các dịch vụ SEO, Google Ads, Content, CRO, GA4 và tư vấn tăng trưởng của SOHO Agency.'
};

export default function ServicesIndexPage(){
  return (
    <main>
      <Header activeNav="services" />
      <section className="menuPageHero">
        <p className="eyebrow">DỊCH VỤ SOHO</p>
        <h1>Một hệ dịch vụ marketing được thiết kế quanh doanh thu</h1>
        <p>Chọn dịch vụ theo điểm nghẽn hiện tại: cần tăng hiện diện, tạo nhu cầu, tối ưu chuyển đổi hay đo lường đúng tác động kinh doanh.</p>
      </section>
      <section className="section menuPageGrid">
        {servicePages.map(service => (
          <article className="menuPageCard" key={service.slug}>
            <span>{service.category}</span>
            <h2>{service.menuTitle}</h2>
            <p>{service.intro}</p>
            <ul>
              {service.outcomes.slice(0,2).map(outcome => (
                <li key={outcome}><CheckCircle2 size={16}/> {outcome}</li>
              ))}
            </ul>
            <a href={`/dich-vu/${service.slug}`}>Xem landing page <ArrowRight size={16}/></a>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
