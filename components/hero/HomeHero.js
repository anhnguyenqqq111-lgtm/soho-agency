import styles from './HomeHero.module.css';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import RevenueToggle from './RevenueToggle';
import {partners} from '../data/proof';
import {company} from '../data/company';
import {sitePath} from '../paths';

/*
  Hero trang chủ kiểu editorial:
  hàng trên: dòng bằng chứng (Google Partner + khu vực) và H1 cỡ lớn trải hết chiều ngang (tên + nghề + lợi ích);
  hàng dưới: câu giá trị, nút chính + nút phụ, số điện thoại; bên phải là mảng gradient Signature với thẻ biểu đồ
  "đo bằng lượt truy cập hay doanh thu", hình 3D CC0 và chip Google Partner. Chữ luôn nằm trên nền trắng đặc, không đặt trên gradient.
*/
export default function HomeHero(){
  const google = partners.find(p => p.verified && p.logo);
  const tel = company.phone ? company.phone.replace(/\s/g, '') : null;
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.head}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true"/>
            {google ? `${google.name} ${google.year}` : 'SOHO Agency'} · TP. Hồ Chí Minh
          </p>
          <h1 className={styles.title}>SOHO Agency giúp doanh nghiệp <span className="hl">tăng trưởng bằng</span> SEO, quảng cáo và website</h1>
        </div>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.lead}>Từ chiến lược đến tự tay triển khai: SEO, Google Ads, Facebook Ads, website và nhận diện thương hiệu. Báo cáo bằng khách hàng và doanh thu, không bằng lượt xem.</p>
            <div className={styles.actions}>
              <Button href="#lien-he">Nhận tư vấn</Button>
              <Button href="/ket-qua" variant="secondary" arrow="right">Xem dự án</Button>
            </div>
            {tel && <p className={styles.note}>Hoặc gọi <a href={`tel:${tel}`}><Icon name="phone" size={16}/>{company.phone}</a> · {company.hours}</p>}
          </div>

          <div className={styles.art}>
            <div className={styles.canvas} aria-hidden="true">
              <img src={sitePath('/decor/target.webp')} alt="" width="400" height="400" className={styles.obj} fetchPriority="low"/>
            </div>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Cùng một chiến dịch, hai cách đo</p>
              <RevenueToggle/>
            </div>
            {google && (
              <a className={styles.chip} href={google.profileUrl} target="_blank" rel="noopener noreferrer">
                <img src={sitePath(google.logo)} alt="" width="152" height="146"/>
                <span><strong>{google.name} {google.year}</strong>Xem hồ sơ trên Google</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
