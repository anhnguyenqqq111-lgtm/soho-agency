import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroRings from '../components/HeroRings';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import SplitWords from '../components/ui/SplitWords';
import ImageSlot from '../components/ui/ImageSlot';
import Accordion from '../components/ui/Accordion';
import Faq from '../components/ui/Faq';
import CtaBand from '../components/ui/CtaBand';
import FunnelMatrix from '../components/diagrams/FunnelMatrix';
import CaseShowcase from '../components/proof/CaseShowcase';
import LogoMarquee from '../components/proof/LogoMarquee';
import BlogCard from '../components/BlogCard';
import {clients} from '../components/data/clients';
import {images} from '../components/data/images';
import {getLatestArticles} from '../components/blogData';
import {sitePath} from '../components/paths';

const steps = [
  {title: 'Hiểu bài toán và audit', text: 'Mục tiêu, biên lợi nhuận, khách hàng. Xem website, tracking, tài khoản quảng cáo và đối thủ để biết đang mất cơ hội ở đâu.'},
  {title: 'Chọn việc làm trước', text: 'Xếp việc theo tác động và độ khó. Chọn ít kênh, làm kỹ, thay vì dàn trải ngân sách.'},
  {title: 'Triển khai theo sprint 2 tuần', text: 'Mỗi sprint có giả thuyết, danh sách việc và chỉ số theo dõi. Hai tuần một lần cùng xem số liệu.'},
  {title: 'Giữ, sửa hoặc dừng', text: 'Nhân rộng việc tạo kết quả, sửa việc có tín hiệu, dừng việc không hiệu quả.'}
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

  return (
    <>
      <Header activeNav="home"/>
      <main>
        {/* Hero */}
        <section className={`${styles.hero} dark`}>
          <HeroRings/>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <p className={styles.badge} data-reveal="">Performance marketing cho doanh nghiệp Việt Nam</p>
              <h1 className={styles.heroTitle}>
                <SplitWords segments={[{text: 'Marketing được đo bằng '}, {text: 'lead và doanh thu', em: true}]}/>
              </h1>
              <p className={styles.heroLead} data-reveal="" style={{'--reveal-delay': '450ms'}}>
                SEO, quảng cáo, content và đo lường, làm theo sprint 2 tuần, báo cáo bằng số liệu bán hàng.
              </p>
              <div className={styles.heroActions} data-reveal="" style={{'--reveal-delay': '550ms'}}>
                <Button href="#lien-he" onDark arrow="up">Liên hệ ngay</Button>
                <Button href="/dich-vu" variant="text" onDark>Xem dịch vụ</Button>
              </div>
            </div>
            <div className={styles.heroLogos} data-reveal="" style={{'--reveal-delay': '700ms'}}>
              <LogoMarquee clients={clients}/>
            </div>
          </div>
        </section>

        {/* Ma trận chặng × kênh */}
        <Section
          kicker="Cách SOHO đo"
          title={<>Mỗi chặng hành trình, <span className="hl">một bộ chỉ số</span></>}
          intro="Khách hàng đi từ chưa biết đến mua. SOHO theo dõi đúng chỉ số của từng chặng, trên từng kênh, thay vì một con số traffic chung."
          spacing="lg"
        >
          <FunnelMatrix/>
        </Section>

        {/* Hai thẻ ảnh */}
        <section className={styles.cards}>
          <div className={`container ${styles.cardsGrid}`}>
            {[
              {img: images.homeHero, title: 'Được tìm thấy đúng lúc', text: 'SEO, AI Search và Local SEO', href: '/dich-vu'},
              {img: images.homeMeeting, title: 'Lead đủ chuẩn, đo được', text: 'Quảng cáo, CRO, GA4 và dashboard', href: '/dich-vu'}
            ].map((c, i) => (
              <a key={c.title} href={sitePath(c.href)} className={styles.imgCard} data-reveal="" style={{'--reveal-delay': `${i * 120}ms`}}>
                <img src={sitePath(c.img.src)} alt={c.img.alt} loading="lazy"/>
                <span className={styles.imgCardText}>
                  <strong>{c.title}</strong>
                  <span>{c.text} ↗</span>
                </span>
                {c.img.temporary && <span className={styles.credit}>[ẢNH TẠM] {c.img.author}, Unsplash</span>}
              </a>
            ))}
          </div>
        </section>

        {/* Dự án */}
        <Section
          id="du-an"
          kicker="Dự án"
          title={<>Từ điểm nghẽn đến kết quả: <span className="hl">hành trình</span> của khách hàng SOHO</>}
          spacing="lg"
        >
          <CaseShowcase clients={clients}/>
        </Section>

        {/* Quy trình, nền tối */}
        <Section
          id="cach-lam-viec"
          tone="dark"
          title={<>Bốn bước <span className="hl">làm việc với SOHO</span></>}
          intro="Cùng một cách làm ở mọi dự án: audit trước, chọn việc trước, sprint 2 tuần, đo rồi quyết định."
        >
          <div className={styles.split}>
            <div data-reveal=""><Accordion items={steps}/></div>
            <div className={styles.splitMedia} data-reveal="" style={{'--reveal-delay': '150ms'}}>
              <ImageSlot src={null} need="Ảnh đội SOHO đang họp hoặc làm việc với khách hàng" size="1200×900" ratio="4/3"/>
            </div>
          </div>
        </Section>

        {/* Về SOHO, nền tối tiếp */}
        <section className={`${styles.about} dark`}>
          <div className={`container ${styles.split}`}>
            <div className={styles.splitMedia} data-reveal="">
              <ImageSlot src={null} need="Ảnh văn phòng hoặc đội ngũ SOHO" size="1200×900" ratio="4/3"/>
            </div>
            <div data-reveal="" style={{'--reveal-delay': '150ms'}}>
              <p className="kicker">Về chúng tôi</p>
              <h2 className={styles.aboutTitle}><span className="hl">SOHO</span> là lựa chọn của doanh nghiệp muốn marketing nói bằng số</h2>
              <ul className={styles.values}>
                {values.map(v => (
                  <li key={v.title}><h3>{v.title}</h3><p>{v.text}</p></li>
                ))}
              </ul>
              <Button href="/ve-soho" onDark arrow="up">Tìm hiểu về SOHO</Button>
            </div>
          </div>
        </section>

        {/* Blog */}
        <Section
          tone="fade"
          title={<>Những bài viết <span className="hl">mới nhất</span></>}
          aside={<Button href="/blog" variant="text">Xem thêm</Button>}
          spacing="lg"
        >
          <div className={styles.blogGrid}>
            {latest.map((post, i) => <BlogCard key={post.slug} post={post} delay={i * 100}/>)}
          </div>
        </Section>

        {/* Liên hệ */}
        <CtaBand/>

        {/* FAQ */}
        <Section
          align="center"
          title={<>Những câu hỏi thường gặp, hiểu hơn về <span className="hl">SOHO và dịch vụ</span></>}
          spacing="lg"
        >
          <Faq items={faqs}/>
          <div className={styles.center}><Button href="/lien-he">Liên hệ với chúng tôi</Button></div>
        </Section>
      </main>
      <Footer/>
    </>
  );
}
