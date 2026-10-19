import styles from './HomeHero.module.css';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import RevenueToggle from './RevenueToggle';
import PartnerBadge from '../proof/PartnerBadge';
import {partners} from '../data/proof';
import {company} from '../data/company';

/*
  Hero trang chủ, dàn chữ kiểu báo (tham chiếu Ramp trên styles.refero.design):
  1. H1 = tên + nghề (luật viết chữ số 1), không nhãn nhỏ phía trên.
  2. Mô tả nói thẳng với đúng nhóm khách, một nút chính, số điện thoại; bên phải ba bằng chứng có tên riêng (luật số 5).
  3. Khung biểu đồ "đo bằng traffic hay doanh thu" trải rộng bên dưới.
*/
export default function HomeHero(){
  const google = partners.find(p => p.verified && p.logo);
  const tel = company.phone ? company.phone.replace(/\s/g, '') : null;
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.top}>
          <h1 className={styles.title}>SOHO Agency làm SEO và quảng cáo <span className="hl">đo bằng doanh thu</span></h1>
          <div className={styles.lead}>
            <p className={styles.text}>Dành cho doanh nghiệp vừa và nhỏ ở TP.HCM đã có sản phẩm và khách mua. Hai tuần một lần, bạn nhận báo cáo bằng số đơn và doanh thu của từng kênh, không bằng lượt xem.</p>
            <div className={styles.actions}>
              <Button href="#lien-he">Đặt lịch tư vấn</Button>
              {tel && <a href={`tel:${tel}`} className={styles.call}><Icon name="phone" size={18}/>{company.phone}</a>}
            </div>
            <p className={styles.note}>Buổi đầu 30 phút: SOHO xem website và các kênh bạn đang chạy, rồi chỉ ra 3 việc nên làm trước.</p>
          </div>

          <ul className={styles.proofs}>
            {google && (
              <li>
                <PartnerBadge partner={google} size={56} showNeed={false} tipId="tip-partner-hero"/>
                <span><strong>{google.name} {google.year}</strong>Google xác nhận SOHO quản lý tối thiểu 10.000 USD quảng cáo trong 90 ngày.</span>
              </li>
            )}
            <li>
              <b className={styles.big}>2 tuần</b>
              <span><strong>Một vòng làm việc</strong>Mỗi vòng có giả thuyết, việc cần làm và con số để giữ, sửa hoặc dừng.</span>
            </li>
            <li>
              <span className={styles.iconBox}><Icon name="badge-check" size={22}/></span>
              <span><strong>Tài khoản đứng tên bạn</strong>Google Ads, Meta và GA4 thuộc doanh nghiệp. SOHO chỉ được cấp quyền.</span>
            </li>
          </ul>
        </div>

        <figure className={styles.instrument}>
          <figcaption className={styles.caption}>
            <strong>Cùng một chiến dịch, hai cách đo.</strong>
            <span>Đo bằng lượt truy cập thì báo cáo luôn đẹp. Đo bằng doanh thu mới biết kênh nào đáng giữ. Bấm để so.</span>
          </figcaption>
          <div className={styles.chart}><RevenueToggle/></div>
        </figure>
      </div>
    </section>
  );
}
