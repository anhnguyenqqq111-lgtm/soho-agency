import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/hero/Hero';
import {ResultsVisual} from '../../components/hero/Visuals';
import PageHeader from '../../components/ui/PageHeader';
import Section from '../../components/ui/Section';
import CtaBand from '../../components/ui/CtaBand';
import PartnerStrip from '../../components/proof/PartnerStrip';
import {ResultsScatter, ProjectsSection, ReportExplainer, QuotesSection} from '../../components/sq/Blocks';
import {PAGE_CTA} from '../../components/data/contactVariants';
import {clients} from '../../components/data/clients';
import LogoMarquee from '../../components/proof/LogoMarquee';

export const metadata = {
  alternates: {canonical: '/ket-qua/'},
  title: 'Dự án SOHO đã làm và cách đo kết quả',
  description:
    'Le Viva Resort, King Decor Luxury, Kronos Luxury Timepieces, Helen Bridal: bối cảnh, việc SOHO đã làm và kết quả. Cách SOHO đo từng kênh bằng đơn hàng và doanh thu.',
  openGraph: {images: [{url: '/og/soho-projects-og.png', width: 1200, height: 630, alt: 'Dự án thật và kết quả SOHO đã công bố'}]}
};

// Bảng đo theo kênh: viết bằng tiếng Việt, thuật ngữ tiếng Anh (nếu cần) để trong ngoặc
const channels = [
  {
    name: 'SEO',
    weekly: 'Bạn hiện ra ở bao nhiêu câu tìm kiếm của người muốn mua, lỗi nào khiến Google không đọc được trang',
    monthly: 'Số người để lại thông tin và doanh thu đến từ Google (không trả tiền)',
    notKpi: 'Tổng lượt vào web, số bài viết, số đường dẫn từ web khác'
  },
  {
    name: 'Quảng cáo',
    weekly: 'Tốn bao nhiêu cho mỗi người hỏi mua, bỏ ra bao nhiêu mang về bao nhiêu, từ khóa nào tốn tiền mà không ra khách',
    monthly: 'Tốn bao nhiêu để có một khách mua, lãi theo từng chiến dịch',
    notKpi: 'Giá mỗi lượt bấm, tỉ lệ bấm, số lần quảng cáo hiện ra'
  },
  {
    name: 'Trang bán hàng',
    weekly: 'Trong 100 người vào trang, bao nhiêu người để lại số, chia theo trang và theo điện thoại hay máy tính',
    monthly: 'Tăng bao nhiêu sau mỗi lần sửa thử',
    notKpi: 'Thời gian khách ở lại trang'
  },
  {name: 'Nội dung', weekly: 'Tiến độ đăng bài, bình luận và tin nhắn hỏi thật', monthly: 'Số khách đã đọc bài trước khi liên hệ', notKpi: 'Lượt xem, lượt thích'},
  {
    name: 'Đo lường',
    weekly: 'Hành động nào bị đếm thiếu hoặc đếm hai lần',
    monthly: 'Số của quảng cáo, Google Analytics và sổ bán hàng có khớp nhau không',
    notKpi: 'Số biểu đồ trên báo cáo'
  }
];

export default function ResultsPage() {
  return (
    <>
      <Header activeNav="results" />
      <main id="main">
        <Hero
          tone="results"
          crumbs={[{label: 'Dự án'}]}
          title={
            <>
              Dự án SOHO đã làm, <span className="hl">kể bằng kết quả</span>
            </>
          }
          tagline="Một khu nghỉ dưỡng, một đơn vị thi công quán cà phê và homestay, một nhà phân phối đồng hồ, một studio ảnh cưới, và một studio chụp ảnh xin giữ kín tên. Mỗi dự án kể bối cảnh, việc SOHO làm và kết quả có nguồn."
          visual={<ResultsVisual />}
        />
        <PageHeader
          title="Đo bằng đơn hàng, không bằng lượt xem"
          lead="Lượt truy cập và lượt bấm vẫn được theo dõi, nhưng không phải thước đo chính. SOHO nối số liệu quảng cáo với số đơn và doanh thu trong sổ bán hàng của bạn."
        />

        <ResultsScatter title="Ba con số khách đã cho phép công bố" showLink={false} />
        <ProjectsSection all showLink={false} />
        <section className="bg-white" style={{paddingBottom: 'var(--space-sm)'}}>
          <div className={`container ${styles.partners}`}>
            <PartnerStrip />
          </div>
        </section>
        <LogoMarquee clients={clients} />

        <Section
          tone="gray"
          decor="chart"
          title={
            <>
              Mỗi kênh, SOHO <span className="hl">xem con số nào</span>
            </>
          }
          kicker="Cách SOHO đo"
          intro="Cột cuối là những con số đẹp nhưng không nói lên doanh thu. SOHO vẫn theo dõi, chỉ không dùng để chấm điểm việc làm."
        >
          <div className={styles.tableWrap} tabIndex={0} role="region" aria-label="Bảng con số theo kênh">
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Kênh</th>
                  <th scope="col">Hằng tuần</th>
                  <th scope="col">Hằng tháng</th>
                  <th scope="col">Không dùng để đánh giá</th>
                </tr>
              </thead>
              <tbody>
                {channels.map(c => (
                  <tr key={c.name}>
                    <th scope="row">{c.name}</th>
                    <td data-label="Hằng tuần">{c.weekly}</td>
                    <td data-label="Hằng tháng">{c.monthly}</td>
                    <td data-label="Không dùng để đánh giá" className={styles.muted}>
                      {c.notKpi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <ReportExplainer tone="white" />
        <QuotesSection tone="tint" />

        <CtaBand
          title={
            <>
              {PAGE_CTA.results.lead} <span className="hl">{PAGE_CTA.results.hl}</span>
            </>
          }
          text={PAGE_CTA.results.text}
        />
      </main>
      <Footer />
    </>
  );
}
