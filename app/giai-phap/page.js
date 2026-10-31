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
  description:
    'Giải pháp marketing của SOHO Agency theo mô hình kinh doanh: bán cho doanh nghiệp (B2B), bán hàng online, doanh nghiệp nhỏ. Làm theo chu kỳ 2 tuần, đo bằng doanh thu.'
};

const copy = {
  'Theo mô hình kinh doanh': {
    title: (
      <>
        Ba mô hình, <span className="hl">ba thứ tự ưu tiên</span> khác nhau
      </>
    ),
    intro: 'Cùng là SEO hay quảng cáo, nhưng doanh nghiệp B2B, bán hàng online và doanh nghiệp nhỏ cần ưu tiên những việc rất khác nhau.'
  },
  'Cách SOHO làm việc': {
    title: (
      <>
        Điều <span className="hl">giống nhau</span> ở mọi dự án
      </>
    ),
    intro: 'Chia việc theo chu kỳ 2 tuần, đo bằng doanh thu. Báo cáo ngắn gọn, chủ doanh nghiệp và nhân viên đều đọc hiểu.'
  }
};

export default function SolutionsPage() {
  const groups = getSolutionsByGroup();
  return (
    <>
      <Header activeNav="solutions" />
      <main id="main">
        <Hero
          tone="solutions"
          crumbs={[{label: 'Giải pháp'}]}
          title={
            <>
              Giải pháp của SOHO <span className="hl">theo mô hình kinh doanh</span>
            </>
          }
          tagline="Bán cho doanh nghiệp, bán hàng online hay doanh nghiệp nhỏ: mỗi mô hình cần ưu tiên những việc khác nhau."
          visual={<SolutionsVisual />}
        />
        <PageHeader
          title="Bắt đầu từ mô hình kinh doanh của bạn"
          lead="SOHO xem thị trường, biên lợi nhuận, chu kỳ bán hàng và đội ngũ hiện có của bạn trước, rồi mới chọn kênh."
        />
        {groups.map(({group, items}, i) => (
          <Section key={group} tone={i ? 'gray' : 'white'} title={copy[group].title} intro={copy[group].intro}>
            <LinkRows items={items.map(s => ({title: s.title, desc: s.desc, href: `/giai-phap/${s.slug}`}))} />
          </Section>
        ))}
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
