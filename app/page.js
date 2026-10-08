import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import SplitWords from '../components/ui/SplitWords';
import ImageSlot from '../components/ui/ImageSlot';
import Faq from '../components/ui/Faq';
import CtaBand from '../components/ui/CtaBand';
import FunnelMatrix from '../components/diagrams/FunnelMatrix';
import Track from '../components/diagrams/Track';
import ProjectCarousel from '../components/proof/ProjectCarousel';
import BlogCard from '../components/BlogCard';
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
const values = [
  {title: 'Chuyên sâu đo lường', text: 'Báo cáo theo lead và doanh thu, không dừng ở traffic hay CTR.'},
  {title: 'Người lập chiến lược trực tiếp làm', text: 'Không chuyển giao xuống đội khác sau khi ký hợp đồng.'},
  {title: 'Doanh nghiệp sở hữu dữ liệu', text: 'Tài khoản quảng cáo, GA4 và dashboard đứng tên bạn.'},
  {title: 'Minh bạch theo sprint', text: 'Hai tuần một vòng, biết việc gì đang làm và vì sao.'}
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
        {/* Hero */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroTitle}>
                <SplitWords segments={[{text: 'Marketing đo bằng lead và doanh thu'}]}/>
              </h1>
              <p className={styles.heroLead} data-reveal="" style={{'--reveal-delay': '350ms'}}>
                SOHO lập kế hoạch và trực tiếp triển khai SEO, quảng cáo, content và đo lường cho doanh nghiệp Việt Nam.
              </p>
              <ul className={styles.heroBullets} data-reveal="" style={{'--reveal-delay': '450ms'}}>
                {['SEO, quảng cáo, content và đo lường trong một đội', 'Sprint 2 tuần, báo cáo bằng số liệu bán hàng', 'Doanh nghiệp sở hữu tài khoản và dữ liệu'].map(b => (
                  <li key={b}><span className={styles.check} aria-hidden="true">✓</span>{b}</li>
                ))}
              </ul>
              <div className={styles.heroActions} data-reveal="" style={{'--reveal-delay': '550ms'}}>
                <Button href="#lien-he" variant="secondary">Đặt lịch trao đổi</Button>
                <Button href="/dich-vu" variant="text">Xem dịch vụ</Button>
              </div>
            </div>
            <div className={styles.heroMedia} data-reveal="" style={{'--reveal-delay': '300ms'}}>
              <ImageSlot src={null} need="Ảnh hoặc video đội SOHO đang làm việc (ảnh thật, không stock)" size="1200×1200" ratio="1/1"/>
            </div>
          </div>
          <div className={`container ${styles.heroLogos}`} data-reveal="" style={{'--reveal-delay': '650ms'}}>
            <ul>{clients.map(c => <li key={c.slug}><img src={sitePath(c.logo)} alt={c.name} loading="lazy"/></li>)}</ul>
          </div>
        </section>

        {/* Bảng hành trình */}
        <Section
          kicker="Cách SOHO đo"
          title={<>Mỗi chặng hành trình, <span className="hl">một bộ chỉ số</span></>}
          intro="Khách hàng đi từ chưa biết đến mua. SOHO theo dõi đúng chỉ số của từng chặng, trên từng kênh, thay vì một con số traffic chung."
          spacing="lg"
        >
          <FunnelMatrix/>
        </Section>

        {/* Dự án */}
        <Section id="du-an" tone="white" kicker="Dự án" title={<>Từ điểm nghẽn đến kết quả: <span className="hl">hành trình</span> của khách hàng SOHO</>} aside={<Button href="/ket-qua" variant="text">Xem tất cả dự án</Button>}>
          <ProjectCarousel clients={clients}/>
        </Section>

        {/* Quy trình */}
        <Section id="cach-lam-viec" tone="dark" title={<>Bốn bước <span className="hl">làm việc với SOHO</span></>} intro="Cùng một cách làm ở mọi dự án: audit trước, chọn việc trước, sprint 2 tuần, đo rồi quyết định.">
          <Track items={steps}/>
        </Section>

        {/* Về SOHO */}
        <Section align="center" kicker="Về chúng tôi" title={<>Bốn điều SOHO giữ <span className="hl">trong mọi hợp đồng</span></>} spacing="lg">
          <ul className={styles.values}>
            {values.map((v, i) => (
              <li key={v.title} data-reveal="" style={{'--reveal-delay': `${i * 90}ms`}}>
                <span className={styles.valueNum}>{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
          <div className={styles.aboutRow}>
            <div className={styles.aboutMedia}><ImageSlot src={null} need="Ảnh đội SOHO đang làm việc" size="1600×900" ratio="16/9"/></div>
            <div className={styles.aboutCta}>
              <p>SOHO làm việc tại Hà Nội và TP. Hồ Chí Minh, với doanh nghiệp đã có sản phẩm và doanh thu, cần biết kênh nào đang mang lại khách hàng.</p>
              <Button href="/ve-soho" variant="text">Tìm hiểu về SOHO</Button>
            </div>
          </div>
        </Section>

        {/* Blog */}
        <Section tone="white" title={<>Những bài viết <span className="hl">mới nhất</span></>} aside={<Button href="/blog" variant="text">Xem thêm</Button>}>
          <div className={styles.blogGrid}>{latest.map((post, i) => <BlogCard key={post.slug} post={post} delay={i * 100}/>)}</div>
        </Section>

        {/* Liên hệ */}
        <CtaBand/>

        {/* FAQ */}
        <Section title={<>Câu hỏi <span className="hl">thường gặp</span></>} spacing="lg">
          <div className={styles.faqWrap}><Faq items={faqs}/></div>
        </Section>
      </main>
      <Footer/>
    </>
  );
}
