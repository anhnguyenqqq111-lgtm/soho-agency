import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/hero/Hero';
import {ServicesVisual} from '../../components/hero/Visuals';
import Section from '../../components/ui/Section';
import LinkRows from '../../components/ui/LinkRows';
import CtaBand from '../../components/ui/CtaBand';
import ServiceGroups from '../../components/ServiceGroups';
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
          tagline="Không bán gói. Mỗi dịch vụ giải một chỗ nghẽn cụ thể trên đường khách tới đơn hàng."
          visual={<ServicesVisual labels={groups.flatMap(g => g.items.map(s => s.menuTitle))} />}
        />
        <Section
          id="noi-dung"
          title={
            <>
              Bạn đang tắc <span className="hl">ở chỗ nào?</span>
            </>
          }
          intro="Không ai tìm thấy, có người xem mà không mua, hay có mua mà không biết kênh nào mang lại. Chọn vấn đề, các dịch vụ nên làm trước sẽ sáng lên."
        >
          <ServiceGroups groups={groups.map(g => ({group: g.group, items: g.items.map(({slug, menuTitle, menuDesc}) => ({slug, menuTitle, menuDesc}))}))} />
        </Section>
        {groups.map(({group, items}, i) => (
          <Section key={group} id={IDS[i]} tone={i % 2 ? 'white' : 'gray'} title={group} spacing="sm">
            <LinkRows items={items.map(s => ({title: s.menuTitle, desc: s.intro, href: `/dich-vu/${s.slug}`}))} />
          </Section>
        ))}
        <CtaBand
          title={
            <>
              Chưa biết nên <span className="hl">bắt đầu từ đâu?</span>
            </>
          }
          text="Gửi website và kênh đang chạy. SOHO chỉ ra điểm nghẽn lớn nhất và việc nên làm trước."
        />
      </main>
      <Footer />
    </>
  );
}
