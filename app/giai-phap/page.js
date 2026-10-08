import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
  'Theo mô hình kinh doanh': {label: 'Mô hình kinh doanh', title: 'Ba mô hình, ba thứ tự ưu tiên khác nhau'},
  'Cách SOHO làm việc': {label: 'Cách làm việc', title: 'Phần giống nhau ở mọi dự án'}
};

const intros = {
  'Theo mô hình kinh doanh': 'Cùng là SEO hay quảng cáo, nhưng doanh nghiệp B2B, cửa hàng online và SME mới tăng tốc cần thứ tự ưu tiên rất khác nhau.',
  'Cách SOHO làm việc': 'Chia việc theo sprint, đo theo doanh thu, báo cáo để cả founder và đội vận hành đọc được.'
};

export default function SolutionsPage(){
  const groups = getSolutionsByGroup();

  return (
    <>
      <Header activeNav="solutions"/>
      <main>
        <PageHeader
          crumbs={[{label: 'Giải pháp'}]}
          title="Bắt đầu từ mô hình kinh doanh của bạn"
          lead="Mỗi giải pháp xuất phát từ thị trường, biên lợi nhuận, chu kỳ bán hàng và năng lực vận hành hiện có, rồi mới chọn kênh."
        />
        {groups.map(({group, items}, i) => (
          <Section
            key={group}
            index={String(i + 1).padStart(2, '0')}
            label={copy[group].label}
            title={copy[group].title}
            intro={intros[group]}
            spacing={i === 0 ? 'sm' : 'md'}
            tone={i === 1 ? 'paper2' : 'paper'}
          >
            <LinkRows items={items.map(s => ({title: s.title, desc: s.desc, href: `/giai-phap/${s.slug}`}))}/>
          </Section>
        ))}
        <CtaBand/>
      </main>
      <Footer/>
    </>
  );
}
