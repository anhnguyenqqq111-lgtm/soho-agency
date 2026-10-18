import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/ui/Section';
import Hero from '../components/hero/Hero';
import RevenueToggle from '../components/hero/RevenueToggle';
import Button from '../components/ui/Button';
import Faq from '../components/ui/Faq';
import CtaBand from '../components/ui/CtaBand';
import JourneyMatrix from '../components/diagrams/JourneyMatrix';
import Track from '../components/diagrams/Track';
import ProjectCarousel from '../components/proof/ProjectCarousel';
import BlogCard from '../components/BlogCard';
import LogoMarquee from '../components/proof/LogoMarquee';
import ServiceGroups from '../components/ServiceGroups';
import PartnerBadge from '../components/proof/PartnerBadge';
import {partners} from '../components/data/proof';
import {clients} from '../components/data/clients';
import {getServicesByGroup} from '../components/servicePagesData';
import {getLatestArticles} from '../components/blogData';
import {sitePath} from '../components/paths';

const steps = [
  {title: 'Hiểu bài toán và audit', text: 'Mục tiêu, biên lợi nhuận, khách hàng. Xem website, tracking, quảng cáo, đối thủ.'},
  {title: 'Chọn việc làm trước', text: 'Xếp việc theo tác động và độ khó. Ít kênh, làm kỹ.'},
  {title: 'Sprint 2 tuần', text: 'Mỗi sprint có giả thuyết, việc cần làm và chỉ số theo dõi.'},
  {title: 'Giữ, sửa hoặc dừng', text: 'Nhân rộng việc hiệu quả, dừng việc không.'}
];
const faqs = [
  {q: 'SOHO cung cấp những dịch vụ gì?', a: 'Ba nhóm: tối ưu tìm kiếm (SEO tổng thể, SEO cho AI Overview, Local SEO), quảng cáo hiệu suất (Google Ads, Meta và TikTok Ads, CRO) và content, dữ liệu (content marketing, GA4 và Looker, tư vấn chiến lược sprint). Có thể làm từng dịch vụ hoặc gộp theo mục tiêu.'},
  {q: 'Làm sao biết dịch vụ SEO đang hiệu quả?', a: 'SOHO không đo bằng số từ khóa lên top. Chỉ số chính là visibility của nhóm từ khóa có ý định mua, lead từ trang organic và doanh thu có nguồn organic. Dashboard đứng tên doanh nghiệp, bạn xem được bất cứ lúc nào.'},
  {q: 'Bao lâu thì thấy kết quả?', a: 'Tùy ngành, ngân sách và nền tảng hiện tại. Quảng cáo thường cho tín hiệu trong vài tuần, SEO thường cần vài tháng. SOHO chỉ đưa mốc cụ thể sau khi audit, không cam kết con số trước khi xem dữ liệu.'},
  {q: 'Cách hợp tác với SOHO như thế nào?', a: 'Bạn gửi website và mục tiêu. SOHO xem các kênh đang chạy, hẹn một buổi gọi 30 phút, rồi gửi lại một trang ghi chú: điểm nghẽn chính và 3 việc nên làm trước. Hợp tác thì làm theo sprint 2 tuần.'}
];

export default function Home(){
  const latest = getLatestArticles(3);
  const groups = getServicesByGroup();

  return (
    <>
      <Header activeNav="home"/>
      <main>
        <Hero
          tone="home"
          eyebrow="SOHO Agency"
          title={<>Marketing đo bằng <span className="hl">doanh thu</span></>}
          tagline="SEO, quảng cáo, content và đo lường cho doanh nghiệp Việt Nam."
          visual={<RevenueToggle/>}
        />

        {/* Mở đầu: nội dung hero cũ */}
        <section id="noi-dung" className={styles.intro}>
          <div className={`container ${styles.introGrid}`}>
            <div className={styles.introCopy} data-reveal="">
              <h2 className={styles.introTitle}>Từ chiến lược đến triển khai, <span className="hl">một đội chịu trách nhiệm</span></h2>
              <p className={styles.heroLead}>SOHO lập kế hoạch và trực tiếp triển khai SEO, quảng cáo, content và đo lường, làm theo sprint 2 tuần, báo cáo bằng số liệu bán hàng.</p>
              <ul className={styles.heroBullets}>
                {['SEO, quảng cáo, content và đo lường trong một đội', 'Sprint 2 tuần, báo cáo bằng số liệu bán hàng', 'Doanh nghiệp sở hữu tài khoản và dữ liệu'].map(b => (
                  <li key={b}><span className={styles.check} aria-hidden="true">✓</span>{b}</li>
                ))}
              </ul>
              <div className={styles.heroActions}>
                <Button href="#lien-he">Đặt lịch trao đổi</Button>
                <Button href="/dich-vu" variant="text">Xem dịch vụ</Button>
              </div>
              {partners.filter(p => p.verified && p.logo).map(p => (
                <div key={p.name} className={styles.partnerRow}>
                  <PartnerBadge partner={p} size={76} tipId="tip-partner-intro"/>
                  <p><strong>SOHO là {p.name}{p.year ? ` ${p.year}` : ''}.</strong> Huy hiệu Google cấp cho agency đạt yêu cầu về chứng chỉ, mức chi tiêu và hiệu quả quảng cáo.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LogoMarquee clients={clients}/>

        {/* Dịch vụ: thẻ trắng trên nền cam nhạt */}
        <Section id="dich-vu" tone="white" kicker="Dịch vụ" title={<>Chín dịch vụ, <span className="hl">ba nhóm việc</span></>} aside={<Button href="/dich-vu" variant="text">Xem tất cả dịch vụ</Button>}>
          <ServiceGroups groups={groups.map(g => ({group: g.group, items: g.items.map(({slug, menuTitle, menuDesc}) => ({slug, menuTitle, menuDesc}))}))}/>
        </Section>

        {/* Bảng hành trình */}
        <Section
          tone="soft"
          decor="target"
          kicker="Cách SOHO đo"
          title={<>Mỗi chặng hành trình, <span className="hl">một bộ chỉ số</span></>}
          intro="Khách hàng đi qua ba chặng. Ở mỗi chặng, mỗi kênh có một chỉ số riêng để theo dõi, càng về cuối càng ít khách đi tiếp, và tất cả gộp về doanh thu."
          spacing="lg"
        >
          <JourneyMatrix/>
        </Section>

        {/* Dự án */}
        <Section id="du-an" tone="white" kicker="Dự án" title={<>Từ điểm nghẽn đến kết quả: <span className="hl">hành trình</span> của khách hàng SOHO</>} aside={<Button href="/ket-qua" variant="text">Xem tất cả dự án</Button>}>
          <ProjectCarousel clients={clients}/>
        </Section>

        {/* Quy trình */}
        <Section id="cach-lam-viec" tone="dark" decor="flag" kicker="Cách làm việc" title={<>Bốn bước <span className="hl">làm việc với SOHO</span></>} intro="Cùng một cách làm ở mọi dự án: audit trước, chọn việc trước, sprint 2 tuần, đo rồi quyết định.">
          <Track items={steps}/>
        </Section>

        {/* Blog */}
        <Section tone="white" kicker="Blog" title={<>Những bài viết <span className="hl">mới nhất</span></>} aside={<Button href="/blog" variant="text">Xem thêm</Button>}>
          <div className={styles.blogGrid}>{latest.map((post, i) => <BlogCard key={post.slug} post={post} delay={i * 100}/>)}</div>
        </Section>

        {/* Liên hệ */}
        <CtaBand/>

        {/* FAQ */}
        <Section tone="gray" decor="chat-bubble" kicker="FAQ" title={<>Câu hỏi <span className="hl">thường gặp</span></>} spacing="lg">
          <div className={styles.faqWrap}><Faq items={faqs}/></div>
        </Section>
      </main>
      <Footer/>
    </>
  );
}
