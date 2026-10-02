import {ArrowRight} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {solutionPages} from '../../components/solutionPagesData';
import {sitePath} from '../../components/paths';

export const metadata = {
  title: 'Giải pháp Digital Marketing | SOHO Agency',
  description: 'Giải pháp tăng trưởng theo mô hình kinh doanh, phương pháp sprint và dữ liệu doanh thu của SOHO Agency.'
};

export default function SolutionsPage(){
  return (
    <main>
      <Header activeNav="solutions" />
      <section className="menuPageHero">
        <p className="eyebrow">GIẢI PHÁP</p>
        <h1>Chọn hướng tăng trưởng theo mô hình kinh doanh</h1>
        <p>SOHO không dùng một công thức cho mọi doanh nghiệp. Mỗi giải pháp bắt đầu từ thị trường, biên lợi nhuận, chu kỳ bán hàng và năng lực vận hành hiện tại.</p>
      </section>
      <section className="section solutionIndexGrid">
        {solutionPages.map(solution => (
          <article className="solutionIndexCard" key={solution.slug}>
            <div className="solutionIcon"><solution.icon size={24}/></div>
            <span>{solution.eyebrow}</span>
            <h2>{solution.title}</h2>
            <p>{solution.desc}</p>
            <a href={sitePath(`/giai-phap/${solution.slug}`)}>Xem chi tiết <ArrowRight size={16}/></a>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
