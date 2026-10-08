import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/hero/Hero';
import {SolutionsVisual} from '../../components/hero/Visuals';
import PageHeader from '../../components/ui/PageHeader';
import Section from '../../components/ui/Section';
import LinkRows from '../../components/ui/LinkRows';
import CtaBand from '../../components/ui/CtaBand';
import {getSolutionsByGroup} from '../../components/solutionPagesData';

export const metadata = {
  title: 'Giải pháp',
  description: 'Giải pháp tăng trưởng của SOHO Agency theo mô hình kinh doanh B2B, ecommerce, SME và cách SOHO vận hành theo sprint, đo theo doanh thu.'
};

const copy = {
  'Theo mô hình kinh doanh': {title: <>Ba mô hình, <span className="hl">ba thứ tự ưu tiên</span> khác nhau</>, intro: 'Cùng là SEO hay quảng cáo, nhưng B2B, cửa hàng online và SME mới tăng tốc cần thứ tự ưu tiên rất khác nhau.'},
  'Cách SOHO làm việc': {title: <>Phần <span className="hl">giống nhau</span> ở mọi dự án</>, intro: 'Chia việc theo sprint, đo theo doanh thu, báo cáo để cả founder và đội vận hành đọc được.'}
};

export default function SolutionsPage(){
  const groups = getSolutionsByGroup();
  return (
    <>
      <Header activeNav="solutions"/>
      <main>
        <Hero tone="solutions" crumbs={[{label: 'Giải pháp'}]} eyebrow="Giải pháp" title="Theo mô hình của bạn" tagline="B2B, bán lẻ hay SME, mỗi mô hình một thứ tự ưu tiên." visual={<SolutionsVisual/>}/>
        <PageHeader title="Bắt đầu từ mô hình kinh doanh của bạn" lead="Mỗi giải pháp xuất phát từ thị trường, biên lợi nhuận, chu kỳ bán hàng và năng lực vận hành hiện có, rồi mới chọn kênh."/>
        {groups.map(({group, items}, i) => (
          <Section key={group} tone={i ? 'gray' : 'white'} kicker={group} title={copy[group].title} intro={copy[group].intro}>
            <LinkRows items={items.map(s => ({title: s.title, desc: s.desc, href: `/giai-phap/${s.slug}`}))}/>
          </Section>
        ))}
        <CtaBand/>
      </main>
      <Footer/>
    </>
  );
}
