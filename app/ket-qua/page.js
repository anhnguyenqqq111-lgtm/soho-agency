import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/hero/Hero';
import {ResultsVisual} from '../../components/hero/Visuals';
import PageHeader from '../../components/ui/PageHeader';
import Section from '../../components/ui/Section';
import CtaBand from '../../components/ui/CtaBand';
import PartnerStrip from '../../components/proof/PartnerStrip';
import {ResultsScatter, ProjectsSection, ReportExplainer, ReportLive, QuotesSection} from '../../components/sq/Blocks';
import {PAGE_CTA} from '../../components/data/contactVariants';
import {clients} from '../../components/data/clients';
import LogoMarquee from '../../components/proof/LogoMarquee';

export const metadata = {
  alternates: {canonical: '/ket-qua/'},
  title: 'Dự án tiêu biểu và cách SOHO đo kết quả',
  description:
    'Dự án tiêu biểu của SOHO: Le Viva Resort, Studio 1 Nhà, Everest Logistics. Bối cảnh, việc đã làm, kết quả có nguồn và cách SOHO đo từng kênh bằng doanh thu.',
  openGraph: {images: [{url: '/og/soho-projects-og.png', width: 1200, height: 630, alt: 'Dự án tiêu biểu và kết quả nổi bật của SOHO'}]}
};

// Bảng đo theo kênh: viết bằng tiếng Việt, thuật ngữ tiếng Anh (nếu cần) để trong ngoặc
const channels = [
  {
    name: 'SEO',
    weekly: 'Website xuất hiện ở bao nhiêu từ khóa khách hay tìm khi muốn mua. Lỗi nào khiến Google không đọc được trang',
    monthly: 'Số khách hàng tiềm năng và doanh thu đến từ Google tự nhiên (không qua quảng cáo)',
    notKpi: 'Tổng lượt truy cập, số bài viết, số backlink (liên kết từ website khác)'
  },
  {
    name: 'Quảng cáo',
    weekly: 'Chi phí cho mỗi khách hàng tiềm năng, mỗi đồng quảng cáo mang về bao nhiêu doanh thu, từ khóa nào tốn tiền mà không ra khách',
    monthly: 'Chi phí cho mỗi đơn hàng, lợi nhuận theo từng chiến dịch',
    notKpi: 'Giá mỗi lượt nhấp, tỉ lệ nhấp, lượt hiển thị'
  },
  {
    name: 'Landing page',
    weekly: 'Tỉ lệ chuyển đổi: cứ 100 lượt truy cập thì bao nhiêu người để lại thông tin. Xem riêng từng trang, trên điện thoại và máy tính',
    monthly: 'Tỉ lệ chuyển đổi tăng bao nhiêu sau mỗi lần thử nghiệm',
    notKpi: 'Thời gian ở lại trang'
  },
  {name: 'Nội dung', weekly: 'Tiến độ đăng bài, số bình luận và tin nhắn hỏi thật về sản phẩm', monthly: 'Số khách đã đọc bài trước khi liên hệ', notKpi: 'Lượt xem, lượt thích'},
  {
    name: 'Đo lường',
    weekly: 'Chỗ nào đang đếm thiếu hoặc đếm trùng (cuộc gọi, tin nhắn, đơn hàng)',
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
              Dự án tiêu biểu của SOHO <span className="hl">và kết quả đạt được</span>
            </>
          }
          tagline="Từ khu nghỉ dưỡng, đơn vị thi công quán cà phê, nhà phân phối đồng hồ, studio ảnh cưới đến công ty logistics và xưởng may. Mỗi dự án ghi rõ bối cảnh, việc SOHO làm và kết quả, kèm nguồn số liệu."
          visual={<ResultsVisual />}
        />
        <PageHeader
          title="Đo bằng đơn hàng, không bằng lượt xem"
          lead="Lượt truy cập và lượt nhấp vẫn được theo dõi, nhưng không phải thước đo chính. SOHO đối chiếu số liệu quảng cáo với số đơn và doanh thu trong sổ bán hàng của bạn."
        />

        <ResultsScatter title="Ba kết quả nổi bật" showLink={false} />
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
              Mỗi kênh, SOHO <span className="hl">theo dõi chỉ số nào</span>
            </>
          }
          kicker="Cách SOHO đo"
          intro="Cột cuối là những con số đẹp nhưng không nói lên doanh thu. SOHO vẫn theo dõi, nhưng không dùng để đánh giá hiệu quả."
        >
          <div className={styles.tableWrap} tabIndex={0} role="region" aria-label="Bảng chỉ số theo kênh">
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
        <ReportLive tone="tint" idPrefix="rpk" />
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
