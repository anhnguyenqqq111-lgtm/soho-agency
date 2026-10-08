import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/hero/Hero';
import {ServicesVisual} from '../../components/hero/Visuals';
import PageHeader from '../../components/ui/PageHeader';
import Section from '../../components/ui/Section';
import LinkRows from '../../components/ui/LinkRows';
import CtaBand from '../../components/ui/CtaBand';
import Track from '../../components/diagrams/Track';
import {getServicesByGroup} from '../../components/servicePagesData';

export const metadata = {
  title: 'Dịch vụ',
  description: 'Chín dịch vụ SEO, AI Search, Google Ads, Meta và TikTok Ads, CRO, content, GA4 và tư vấn chiến lược của SOHO Agency, chia theo điểm nghẽn tăng trưởng.'
};

const STAGES = [
  {title: 'Được tìm thấy', text: 'Khách hàng tìm trên Google, Maps và AI Search.'},
  {title: 'Được chọn', text: 'Quảng cáo và landing page biến lượt xem thành lead.'},
  {title: 'Được tin và đo đúng', text: 'Nội dung tạo niềm tin, dữ liệu cho biết kênh nào mang về doanh thu.'}
];
const IDS = ['tim-kiem', 'quang-cao', 'content-du-lieu'];

export default function ServicesIndexPage(){
  const groups = getServicesByGroup();
  return (
    <>
      <Header activeNav="services"/>
      <main>
        <Hero tone="services" crumbs={[{label: 'Dịch vụ'}]} eyebrow="Dịch vụ" title="Chín việc SOHO làm" tagline="Chọn theo điểm nghẽn, không theo gói." visual={<ServicesVisual labels={groups.flatMap(g => g.items.map(s => s.menuTitle))}/>}/>
        <PageHeader
          title="Chọn dịch vụ theo điểm nghẽn, không theo gói"
          lead="Mỗi doanh nghiệp tắc ở một chỗ khác nhau: không ai tìm thấy, có người tìm thấy nhưng không mua, hoặc có mua nhưng không biết kênh nào mang lại."
        />
        <Section title={<>Ba nhóm dịch vụ, <span className="hl">ba chặng</span> trên hành trình khách hàng</>}>
          <Track
            items={groups.map(({group, items}, i) => ({
              meta: group,
              title: STAGES[i].title,
              text: STAGES[i].text,
              acc: i === 2,
              links: items.map(s => ({label: s.menuTitle, href: `/dich-vu/${s.slug}`}))
            }))}
          />
        </Section>
        {groups.map(({group, items}, i) => (
          <Section key={group} id={IDS[i]} tone={i % 2 ? 'white' : 'gray'} kicker={`0${i + 1}`} title={group} spacing="sm">
            <LinkRows items={items.map(s => ({title: s.menuTitle, desc: s.intro, href: `/dich-vu/${s.slug}`}))}/>
          </Section>
        ))}
        <CtaBand title={<>Chưa biết nên <span className="hl">bắt đầu từ đâu?</span></>} text="Gửi website và kênh đang chạy. SOHO chỉ ra điểm nghẽn lớn nhất và việc nên làm trước."/>
      </main>
      <Footer/>
    </>
  );
}
