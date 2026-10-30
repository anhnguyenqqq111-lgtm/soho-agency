import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/hero/Hero';
import {ServicesVisual} from '../../components/hero/Visuals';
import Section from '../../components/ui/Section';
import LinkRows from '../../components/ui/LinkRows';
import CtaBand from '../../components/ui/CtaBand';
import ProblemPicker from '../../components/sq/ProblemPicker';
import {PAGE_CTA} from '../../components/data/contactVariants';
import {getServicesByGroup} from '../../components/servicePagesData';

export const metadata = {
  alternates: {canonical: '/dich-vu/'},
  title: 'Dịch vụ',
  description:
    'Dịch vụ của SOHO Agency: SEO, Google Ads, Facebook và TikTok Ads, thiết kế website, nhận diện thương hiệu, mobile app, nội dung và đo lường. Chọn theo chỗ đang nghẽn.'
};

const IDS = ['tim-kiem', 'quang-cao', 'website-thuong-hieu', 'noi-dung-do-luong'];

export default function ServicesIndexPage() {
  const groups = getServicesByGroup();
  return (
    <>
      <Header activeNav="services" />
      <main id="main">
        <Hero
          tone="services"
          crumbs={[{label: 'Dịch vụ'}]}
          title={
            <>
              Dịch vụ của SOHO Agency: <span className="hl">marketing, website, thương hiệu</span>
            </>
          }
          tagline="Mười hai việc SOHO làm, chia theo chỗ bạn đang mất khách. Chưa biết tên dịch vụ cũng không sao: chọn tình huống giống bạn nhất ở bên dưới."
          visual={<ServicesVisual labels={groups.flatMap(g => g.items.map(s => s.menuTitle))} />}
        />
        <Section
          id="noi-dung"
          tone="soft"
          kicker="Bắt đầu từ chuyện bạn đang gặp"
          title="Bạn đang gặp chuyện nào?"
          intro="Chọn một tình huống. SOHO nói rõ vì sao chuyện đó hay xảy ra, nên làm gì trước, và khi nào chưa nên bỏ tiền."
        >
          <ProblemPicker idPrefix="hub-pk" />
        </Section>
        {groups.map(({group, items}, i) => (
          <Section key={group} id={IDS[i]} tone={i % 2 ? 'soft' : 'white'} kicker={`Nhóm ${i + 1}`} title={group} spacing="sm">
            <LinkRows items={items.map(s => ({title: s.menuTitle, desc: s.intro, href: `/dich-vu/${s.slug}`}))} />
          </Section>
        ))}
        <CtaBand
          title={
            <>
              {PAGE_CTA.services.lead} <span className="hl">{PAGE_CTA.services.hl}</span>
            </>
          }
          text={PAGE_CTA.services.text}
        />
      </main>
      <Footer />
    </>
  );
}
