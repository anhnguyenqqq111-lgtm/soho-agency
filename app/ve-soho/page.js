import {ArrowRight, CheckCircle2} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Về SOHO Agency | Digital Marketing dựa trên dữ liệu',
  description: 'SOHO Agency là đội ngũ tư vấn và triển khai digital marketing tập trung vào tăng trưởng có thể đo lường.'
};

export default function AboutPage(){
  return (
    <main>
      <Header activeNav="about" />
      <section className="menuPageHero">
        <p className="eyebrow">VỀ SOHO</p>
        <h1>Một đội ngũ marketing cùng nhìn về tăng trưởng thật</h1>
        <p>SOHO đồng hành từ chiến lược đến triển khai, ưu tiên dữ liệu có thể hành động và những việc tạo tác động rõ tới lead, doanh thu, lợi nhuận.</p>
      </section>
      <section className="section aboutPageGrid">
        {['Chủ động triển khai, không chỉ gửi khuyến nghị', 'Minh bạch dữ liệu, ngân sách và lý do ưu tiên', 'Kết nối SEO, Ads, Content, CRO và Analytics trong cùng một hệ thống', 'Làm việc theo sprint để thử nghiệm, học nhanh và mở rộng đúng lúc'].map(item => (
          <article key={item}>
            <CheckCircle2/>
            <h2>{item}</h2>
          </article>
        ))}
      </section>
      <section className="serviceFinalCta">
        <div>
          <p className="eyebrow gold">ĐỒNG HÀNH CÙNG SOHO</p>
          <h2>Bắt đầu bằng một cuộc trao đổi về mục tiêu kinh doanh</h2>
          <p>Cho SOHO biết website, thị trường và điều bạn muốn cải thiện trong quý tới.</p>
        </div>
        <a className="btn primary btnGlow" href="/lien-he">
          <span>Liên hệ SOHO</span>
          <ArrowRight size={18}/>
          <span className="btnSweep"></span>
        </a>
      </section>
      <Footer />
    </main>
  );
}
