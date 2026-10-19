import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/ui/Section';
import HomeHero from '../components/hero/HomeHero';
import Button from '../components/ui/Button';
import Faq from '../components/ui/Faq';
import CtaBand from '../components/ui/CtaBand';
import JourneyMatrix from '../components/diagrams/JourneyMatrix';
import Track from '../components/diagrams/Track';
import ProjectCarousel from '../components/proof/ProjectCarousel';
import BlogCard from '../components/BlogCard';
import LogoMarquee from '../components/proof/LogoMarquee';
import ServiceGroups from '../components/ServiceGroups';
import {clients} from '../components/data/clients';
import {cases} from '../components/data/cases';
import {getServicesByGroup} from '../components/servicePagesData';
import {getLatestArticles} from '../components/blogData';

// Câu chữ theo DESIGN.md mục 2.4: H1 = tên + nghề, nói với đúng nhóm khách, một nhãn nút chính, không tiếng Anh không giải thích.
const steps = [
  {title: 'Xem bài toán', text: 'Mục tiêu, biên lợi nhuận, khách hàng của bạn. Rồi xem website, cách đo, quảng cáo và đối thủ.'},
  {title: 'Chọn việc làm trước', text: 'Xếp việc theo tác động và độ khó. Ít kênh, làm kỹ.'},
  {title: 'Làm theo vòng 2 tuần', text: 'Mỗi vòng có một giả thuyết, danh sách việc và con số cần theo dõi.'},
  {title: 'Giữ, sửa hoặc dừng', text: 'Việc ra kết quả thì làm rộng ra. Việc không ra thì dừng, không tiếc.'}
];
const faqs = [
  {q: 'SOHO làm những dịch vụ gì?', a: 'Ba nhóm việc. Được tìm thấy trên Google và AI: SEO tổng thể, SEO cho AI tìm kiếm, SEO địa phương và Google Maps. Quảng cáo ra đơn: Google Ads, Meta và TikTok Ads, tối ưu trang đích. Nội dung và đo lường: nội dung và PR, đo lường GA4, tư vấn lộ trình 90 ngày. Bạn có thể làm một dịch vụ hoặc gộp theo mục tiêu.'},
  {q: 'Làm sao biết SEO đang có hiệu quả?', a: 'SOHO không đo bằng số từ khóa lên top. Ba con số chính: độ phủ của nhóm từ khóa người đang muốn mua, số khách để lại thông tin từ Google, và doanh thu đến từ Google. Báo cáo đứng tên doanh nghiệp, bạn xem lúc nào cũng được.'},
  {q: 'Bao lâu thì thấy kết quả?', a: 'Tùy ngành, ngân sách và nền tảng hiện tại. Quảng cáo thường có tín hiệu sau vài tuần, SEO thường cần vài tháng. SOHO chỉ đưa mốc cụ thể sau khi xem số liệu, không hứa con số trước.'},
  {q: 'Bắt đầu làm việc với SOHO thế nào?', a: 'Bạn gửi website và mục tiêu. SOHO xem các kênh bạn đang chạy, hẹn một buổi gọi 30 phút, rồi gửi lại một trang ghi chú: chỗ nghẽn chính và 3 việc nên làm trước. Nếu làm tiếp, hai bên làm theo vòng 2 tuần.'},
  {q: 'Tài khoản quảng cáo và số liệu thuộc về ai?', a: 'Thuộc về doanh nghiệp của bạn. Google Ads, Meta, GA4 và báo cáo đều đứng tên bạn, SOHO chỉ được cấp quyền. Dừng hợp tác thì bạn giữ nguyên toàn bộ.'}
];

export default function Home(){
  const latest = getLatestArticles(3);
  const groups = getServicesByGroup();
  const slimGroups = groups.map(g => ({group: g.group, items: g.items.map(({slug, menuTitle, menuDesc}) => ({slug, menuTitle, menuDesc}))}));

  return (
    <>
      <Header activeNav="home"/>
      <main>
        <HomeHero/>

        <LogoMarquee clients={clients} label="Doanh nghiệp đang làm cùng SOHO"/>

        <Section id="dich-vu" title={<>Chín dịch vụ, chọn theo <span className="hl">chỗ đang nghẽn</span></>} intro="Không bán gói. Bạn chọn vấn đề đang gặp, SOHO gợi ý việc nên làm trước." aside={<Button href="/dich-vu" variant="text">Xem chi tiết 9 dịch vụ</Button>}>
          <ServiceGroups groups={slimGroups}/>
        </Section>

        <Section
          tone="soft"
          decor="target"
          title={<>Mỗi chặng khách đi qua, <span className="hl">một con số để theo dõi</span></>}
          intro="Khách đi qua ba chặng: tìm thấy bạn, cân nhắc, rồi mua. Ở mỗi chặng, mỗi kênh có một con số riêng. Càng về cuối càng ít người đi tiếp, và tất cả gộp về doanh thu."
          spacing="lg"
        >
          <JourneyMatrix/>
        </Section>

        <Section id="du-an" title={<>Bốn dự án, <span className="hl">kể bằng kết quả</span></>} intro="Le Viva Resort, King Decor Luxury, Kronos Luxury Timepieces, Helen Bridal. Con số chỉ ghi khi dự án đã công bố." aside={<Button href="/ket-qua" variant="text">Xem SOHO đã làm gì</Button>}>
          <ProjectCarousel items={cases}/>
        </Section>

        <Section id="cach-lam-viec" tone="dark" decor="flag" title={<>Bốn bước, <span className="hl">vòng 2 tuần</span></>} intro="Cùng một cách làm ở mọi dự án: xem số liệu trước, chọn việc trước, làm theo vòng 2 tuần, đo rồi mới quyết định.">
          <Track items={steps}/>
        </Section>

        <Section title={<>Ghi chép <span className="hl">mới nhất</span></>} intro="Hướng dẫn từng bước về SEO, quảng cáo và đo lường, viết để đội marketing của bạn làm theo được." aside={<Button href="/blog" variant="text">Đọc tất cả bài viết</Button>}>
          <div className={styles.blogGrid}>{latest.map((post, i) => <BlogCard key={post.slug} post={post} delay={i * 100}/>)}</div>
        </Section>

        <Section tone="gray" decor="chat-bubble" title={<>Câu hỏi <span className="hl">hay gặp</span></>} spacing="lg">
          <div className={styles.faqWrap}><Faq items={faqs}/></div>
        </Section>

        <CtaBand/>
      </main>
      <Footer/>
    </>
  );
}
