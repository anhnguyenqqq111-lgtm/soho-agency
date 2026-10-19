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
  alternates: {canonical: '/giai-phap/'},
  title: 'Giải pháp',
  description: 'Giải pháp của SOHO Agency theo mô hình kinh doanh: bán cho doanh nghiệp, bán hàng online, doanh nghiệp nhỏ. Làm theo vòng 2 tuần, đo bằng doanh thu.'
};

const copy = {
  'Theo mô hình kinh doanh': {title: <>Ba mô hình, <span className="hl">ba thứ tự ưu tiên</span> khác nhau</>, intro: 'Cùng là SEO hay quảng cáo, nhưng bán cho doanh nghiệp, bán hàng online và doanh nghiệp nhỏ cần thứ tự ưu tiên rất khác nhau.'},
  'Cách SOHO làm việc': {title: <>Phần <span className="hl">giống nhau</span> ở mọi dự án</>, intro: 'Chia việc theo vòng 2 tuần, đo bằng doanh thu, báo cáo để cả chủ doanh nghiệp và người vận hành đọc được.'}
};

export default function SolutionsPage(){
  const groups = getSolutionsByGroup();
  return (
    <>
      <Header activeNav="solutions"/>
      <main id="main">
        <Hero tone="solutions" crumbs={[{label: 'Giải pháp'}]} title={<>Giải pháp của SOHO <span className="hl">theo mô hình kinh doanh</span></>} tagline="Bán cho doanh nghiệp, bán hàng online hay doanh nghiệp nhỏ: mỗi mô hình một thứ tự ưu tiên." visual={<SolutionsVisual/>}/>
        <PageHeader title="Bắt đầu từ mô hình kinh doanh của bạn" lead="Mỗi giải pháp xuất phát từ thị trường, biên lợi nhuận, chu kỳ bán hàng và năng lực vận hành hiện có, rồi mới chọn kênh."/>
        {groups.map(({group, items}, i) => (
          <Section key={group} tone={i ? 'gray' : 'white'} title={copy[group].title} intro={copy[group].intro}>
            <LinkRows items={items.map(s => ({title: s.title, desc: s.desc, href: `/giai-phap/${s.slug}`}))}/>
          </Section>
        ))}
        <CtaBand/>
      </main>
      <Footer/>
    </>
  );
}
