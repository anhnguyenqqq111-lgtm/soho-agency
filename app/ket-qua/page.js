import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/hero/Hero';
import {ResultsVisual} from '../../components/hero/Visuals';
import PageHeader from '../../components/ui/PageHeader';
import Section from '../../components/ui/Section';
import CtaBand from '../../components/ui/CtaBand';
import ProjectGrid from '../../components/proof/ProjectGrid';
import PartnerStrip from '../../components/proof/PartnerStrip';
import Testimonials from '../../components/proof/Testimonials';
import {cases} from '../../components/data/cases';
import {clients} from '../../components/data/clients';
import LogoMarquee from '../../components/proof/LogoMarquee';

export const metadata = {
  alternates: {canonical: '/ket-qua/'},
  title: 'Dự án SOHO đã làm và cách đo kết quả',
  description: 'Le Viva Resort, King Decor Luxury, Kronos Luxury Timepieces, Helen Bridal: bối cảnh, việc SOHO đã làm và kết quả. Cách SOHO đo từng kênh bằng đơn hàng và doanh thu.'
};

// Bảng đo theo kênh: viết bằng tiếng Việt, thuật ngữ tiếng Anh (nếu cần) để trong ngoặc
const channels = [
  {name: 'SEO', weekly: 'Độ phủ của nhóm từ khóa có ý định mua, lỗi khiến Google không đọc được trang', monthly: 'Khách để lại thông tin và doanh thu đến từ Google tự nhiên', notKpi: 'Tổng lượt truy cập, số bài viết, số liên kết'},
  {name: 'Quảng cáo', weekly: 'Chi phí cho mỗi khách tiềm năng (CPA), doanh thu trên chi phí (ROAS), từ khóa tốn tiền vô ích', monthly: 'Chi phí để có một khách mua, lợi nhuận gộp theo chiến dịch', notKpi: 'Giá mỗi lượt bấm, tỉ lệ bấm, lượt hiển thị'},
  {name: 'Trang đích', weekly: 'Tỉ lệ khách để lại thông tin theo từng trang, từng thiết bị', monthly: 'Mức tăng sau mỗi lần thử nghiệm', notKpi: 'Thời gian ở lại trang'},
  {name: 'Nội dung', weekly: 'Tiến độ, bình luận và tin nhắn có chất lượng', monthly: 'Số khách đã đọc bài trước khi liên hệ', notKpi: 'Lượt xem, lượt thích'},
  {name: 'Đo lường', weekly: 'Hành động bị thiếu hoặc đếm trùng', monthly: 'Số liệu quảng cáo, GA4 và sổ bán hàng có khớp nhau không', notKpi: 'Số biểu đồ trên báo cáo'}
];

export default function ResultsPage(){
  return (
    <>
      <Header activeNav="results"/>
      <main id="main">
        <Hero tone="results" crumbs={[{label: 'Dự án'}]} title={<>Dự án SOHO đã làm, <span className="hl">kể bằng kết quả</span></>} tagline="Một số dự án SOHO đã làm: một khu nghỉ dưỡng, một đơn vị thiết kế thi công, một nhà phân phối đồng hồ, một studio ảnh cưới." visual={<ResultsVisual/>}/>
        <PageHeader title="Đo bằng đơn hàng, không bằng lượt xem" lead="Lượt truy cập và lượt bấm vẫn được theo dõi, nhưng không phải thước đo chính. SOHO nối số liệu quảng cáo với số đơn và doanh thu trong sổ bán hàng của bạn."/>

        <Section title={<>Một số <span className="hl">dự án</span></>} intro="Con số chỉ ghi khi chính dự án đã công bố. Dự án khác đang chạy, số liệu công bố khi khách hàng đồng ý.">
          <ProjectGrid projects={cases}/>
          <div className={styles.partners}><PartnerStrip/></div>
        </Section>
        <LogoMarquee clients={clients}/>

        <Section tone="gray" decor="chart" title={<>Mỗi kênh, SOHO <span className="hl">xem con số nào</span></>} intro="Cột cuối là những con số đẹp nhưng không nói lên doanh thu. SOHO vẫn theo dõi, chỉ không dùng để đánh giá.">
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead><tr><th scope="col">Kênh</th><th scope="col">Hằng tuần</th><th scope="col">Hằng tháng</th><th scope="col">Không dùng để đánh giá</th></tr></thead>
              <tbody>
                {channels.map(c => (
                  <tr key={c.name}>
                    <th scope="row">{c.name}</th>
                    <td data-label="Hằng tuần">{c.weekly}</td>
                    <td data-label="Hằng tháng">{c.monthly}</td>
                    <td data-label="Không dùng để đánh giá" className={styles.muted}>{c.notKpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>


        <Section tone="gray" title={<>Khách hàng <span className="hl">nói gì</span></>}>
          <Testimonials/>
        </Section>

        <CtaBand title={<>Muốn biết kênh nào đang <span className="hl">tạo ra doanh thu?</span></>} text="SOHO kiểm tra cách đo, báo cáo và các bước khách đi qua trên web của bạn, rồi chỉ ra chỗ số liệu đang sai hoặc thiếu."/>
      </main>
      <Footer/>
    </>
  );
}
