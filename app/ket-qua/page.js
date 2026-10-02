import {ArrowRight, BarChart3, Target, TrendingUp} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Kết quả Digital Marketing | SOHO Agency',
  description: 'Cách SOHO đo lường kết quả SEO, Ads, CRO và tăng trưởng bằng chỉ số gắn với doanh thu.'
};

const metrics = [
  {icon: TrendingUp, label: 'SEO', title: 'Tăng khả năng được tìm thấy', text: 'Theo dõi visibility, nhóm từ khóa tạo nhu cầu, organic lead và đóng góp vào pipeline.'},
  {icon: Target, label: 'ADS', title: 'Tối ưu chi phí tạo khách hàng', text: 'Đo CPA, ROAS, lead quality và doanh thu thay vì chỉ nhìn CPC hoặc CTR.'},
  {icon: BarChart3, label: 'CRO', title: 'Biến traffic thành cơ hội', text: 'Cải thiện landing page, form, thông điệp và hành trình chuyển đổi.'}
];

export default function ResultsPage(){
  return (
    <main>
      <Header activeNav="results" />
      <section className="menuPageHero">
        <p className="eyebrow">KẾT QUẢ</p>
        <h1>Đo những gì thực sự có ý nghĩa với doanh nghiệp</h1>
        <p>Kết quả tốt không chỉ là traffic hay lượt click. SOHO kết nối dữ liệu marketing với lead, cơ hội bán hàng và doanh thu để biết hoạt động nào đáng mở rộng.</p>
      </section>
      <section className="section solutionIndexGrid">
        {metrics.map(metric => (
          <article className="solutionIndexCard" key={metric.label}>
            <div className="solutionIcon"><metric.icon size={24}/></div>
            <span>{metric.label}</span>
            <h2>{metric.title}</h2>
            <p>{metric.text}</p>
          </article>
        ))}
      </section>
      <section className="serviceFinalCta">
        <div>
          <p className="eyebrow gold">BÁO CÁO MINH BẠCH</p>
          <h2>Muốn biết kênh nào đang tạo ra doanh thu?</h2>
          <p>SOHO có thể audit nhanh tracking, dashboard và phễu chuyển đổi hiện tại để chỉ ra điểm nghẽn cần ưu tiên.</p>
        </div>
        <a className="btn primary btnGlow" href="/lien-he">
          <span>Nhận audit</span>
          <ArrowRight size={18}/>
          <span className="btnSweep"></span>
        </a>
      </section>
      <Footer />
    </main>
  );
}
