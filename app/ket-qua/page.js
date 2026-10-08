import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHeader from '../../components/ui/PageHeader';
import Section from '../../components/ui/Section';
import CtaBand from '../../components/ui/CtaBand';
import Fill from '../../components/ui/Fill';
import ProjectGrid from '../../components/proof/ProjectGrid';
import PartnerStrip from '../../components/proof/PartnerStrip';
import Testimonials from '../../components/proof/Testimonials';
import {clients} from '../../components/data/clients';
import {sitePath} from '../../components/paths';

export const metadata = {
  title: 'Dự án và cách SOHO đo kết quả',
  description: 'SOHO đo SEO, quảng cáo, CRO, content và tracking bằng chỉ số gắn với lead và doanh thu. Các dự án đang triển khai.'
};

const channels = [
  {name: 'SEO', weekly: 'Visibility nhóm từ khóa có ý định mua, lỗi index mới', monthly: 'Lead từ trang organic, doanh thu nguồn organic', notKpi: 'Tổng traffic, số bài, số backlink'},
  {name: 'Quảng cáo', weekly: 'CPA, ROAS, tỉ lệ lead đạt chuẩn, truy vấn lãng phí', monthly: 'CAC, lợi nhuận gộp theo chiến dịch', notKpi: 'CPC, CTR, lượt hiển thị'},
  {name: 'CRO', weekly: 'Tỉ lệ chuyển đổi theo trang và thiết bị', monthly: 'Mức tăng sau mỗi test, CPL sau tối ưu', notKpi: 'Thời gian trên trang'},
  {name: 'Content', weekly: 'Tiến độ, tương tác có chất lượng', monthly: 'Assisted conversion, lead có chạm nội dung', notKpi: 'Lượt xem, lượt thích'},
  {name: 'Đo lường', weekly: 'Event thiếu hoặc sai, conversion trùng', monthly: 'Độ khớp giữa Ads, GA4 và CRM', notKpi: 'Số biểu đồ trên dashboard'}
];

export default function ResultsPage(){
  return (
    <>
      <Header activeNav="results"/>
      <main>
        <PageHeader crumbs={[{label: 'Dự án'}]} title="Đo những con số có ý nghĩa với doanh nghiệp" lead="Traffic và lượt click vẫn được theo dõi, nhưng không phải thước đo chính. SOHO nối dữ liệu marketing với lead và doanh thu."/>

        <Section kicker="Dự án" title={<>Doanh nghiệp SOHO <span className="hl">đang làm cùng</span></>} intro="Số liệu từng dự án chỉ công bố khi khách hàng đồng ý.">
          <ProjectGrid projects={clients}/>
          <div className={styles.partners}><PartnerStrip/></div>
        </Section>

        <Section tone="gray" title={<>Mỗi kênh, SOHO <span className="hl">xem gì</span></>}>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead><tr><th scope="col">Kênh</th><th scope="col">Hằng tuần</th><th scope="col">Hằng tháng</th><th scope="col">Không dùng làm KPI chính</th></tr></thead>
              <tbody>
                {channels.map(c => (
                  <tr key={c.name}>
                    <th scope="row">{c.name}</th>
                    <td data-label="Hằng tuần">{c.weekly}</td>
                    <td data-label="Hằng tháng">{c.monthly}</td>
                    <td data-label="Không dùng làm KPI chính" className={styles.muted}>{c.notKpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title={<>Từng dự án, <span className="hl">SOHO đã làm gì</span></>}>
          <ul className={styles.cases}>
            {clients.map((client, i) => (
              <li key={client.slug} id={client.slug} className={styles.case} data-reveal="" style={{'--reveal-delay': `${i * 80}ms`}}>
                <div className={styles.caseHead}>
                  <img src={sitePath(client.logo)} alt="" loading="lazy" className={styles.caseLogo}/>
                  <h3>{client.name}</h3>
                  <p className={styles.caseField}>{client.field}</p>
                  <p className={styles.caseScope}>{client.scope}</p>
                  <a href={client.url} target="_blank" rel="noopener noreferrer" className={styles.caseSite}>{client.url.replace(/^https?:\/\//, '')} ↗</a>
                </div>
                <dl className={styles.caseBody}>
                  <div><dt>Bối cảnh</dt><dd><Fill value={client.context} need="CẦN CASE STUDY THẬT"/></dd></div>
                  <div><dt>Việc đã làm</dt><dd><Fill value={client.work} need="CẦN CASE STUDY THẬT"/></dd></div>
                  <div><dt>Kết quả</dt><dd><Fill value={client.result} need="CẦN SỐ LIỆU THẬT"/></dd></div>
                </dl>
              </li>
            ))}
          </ul>
        </Section>

        <Section tone="gray" title={<>Khách hàng <span className="hl">nói gì</span></>}>
          <Testimonials/>
        </Section>

        <CtaBand title={<>Muốn biết kênh nào đang <span className="hl">tạo ra doanh thu?</span></>} text="SOHO audit nhanh tracking, dashboard và phễu chuyển đổi để chỉ ra chỗ số liệu đang sai hoặc thiếu."/>
      </main>
      <Footer/>
    </>
  );
}
