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
  description: 'Chín dịch vụ của SOHO Agency: SEO, SEO cho AI tìm kiếm, Google Maps, Google Ads, Meta và TikTok Ads, tối ưu trang đích, nội dung, đo lường GA4, tư vấn lộ trình. Chọn theo chỗ đang nghẽn.'
};

const STAGES = [
  {title: 'Được tìm thấy', text: 'Khách tìm bạn trên Google, Google Maps và câu trả lời của AI.'},
  {title: 'Được chọn', text: 'Quảng cáo và trang đích biến lượt xem thành khách liên hệ.'},
  {title: 'Được tin và đo đúng', text: 'Nội dung tạo niềm tin, số liệu cho biết kênh nào mang về doanh thu.'}
];
const IDS = ['tim-kiem', 'quang-cao', 'content-du-lieu'];

export default function ServicesIndexPage(){
  const groups = getServicesByGroup();
  return (
    <>
      <Header activeNav="services"/>
      <main>
        <Hero tone="services" crumbs={[{label: 'Dịch vụ'}]} title={<>Chín dịch vụ marketing của SOHO, <span className="hl">chọn theo chỗ nghẽn</span></>} tagline="Không bán gói. Mỗi dịch vụ giải một chỗ nghẽn cụ thể trên đường khách tới đơn hàng." visual={<ServicesVisual labels={groups.flatMap(g => g.items.map(s => s.menuTitle))}/>}/>
        <PageHeader
          title="Bạn đang tắc ở chỗ nào?"
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
          <Section key={group} id={IDS[i]} tone={i % 2 ? 'white' : 'gray'} title={group} spacing="sm">
            <LinkRows items={items.map(s => ({title: s.menuTitle, desc: s.intro, href: `/dich-vu/${s.slug}`}))}/>
          </Section>
        ))}
        <CtaBand title={<>Chưa biết nên <span className="hl">bắt đầu từ đâu?</span></>} text="Gửi website và kênh đang chạy. SOHO chỉ ra điểm nghẽn lớn nhất và việc nên làm trước."/>
      </main>
      <Footer/>
    </>
  );
}
