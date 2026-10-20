import styles from './HomeHero.module.css';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import {partners} from '../data/proof';
import {company} from '../data/company';
import {cases} from '../data/cases';
import {sitePath} from '../paths';

/*
  Hero trang chủ, Brand Identity 3.0, banner Concept A "SOHO Unfold" (ảnh 3D không chứa chữ, nút hay logo).
  Desktop: nền Midnight, chữ bên trái ~45%, ảnh neo bên phải; lớp phủ tối phía trái giữ tương phản cho chữ.
  Mobile: ảnh dựng riêng 900×1200 nằm dưới phần chữ và nút, không cắt từ ảnh desktop.
  Nội dung giữ nguyên bản đang chạy (H1, mô tả, nút, số điện thoại, bằng chứng); không dùng chữ mẫu trong bản demo.
*/
export default function HomeHero(){
  const google = partners.find(p => p.verified && p.logo);
  const tel = company.phone ? company.phone.replace(/\s/g, '') : null;
  return (
    <section className={`${styles.hero} dark on-dark`} aria-labelledby="hero-title">
      <picture className={styles.art} aria-hidden="true">
        <source media="(max-width: 980px)" srcSet={sitePath('/banners/A_mobile_900x1200.webp')} width="900" height="1200"/>
        <img src={sitePath('/banners/A_desktop_1920x960.webp')} alt="" width="1920" height="960" fetchPriority="high"/>
      </picture>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.kicker}>SOHO Agency · SEO, quảng cáo và website</span>
            <span className="visually-hidden">: </span>
            <span className={styles.line}>Từ tìm kiếm</span>{' '}
            <span className={styles.line}>đến <span className="hl">doanh thu</span>.</span>
          </h1>
          <p className={styles.lead}>Từ chiến lược đến tự tay triển khai: SEO, Google Ads, Facebook Ads, website và nhận diện thương hiệu. Báo cáo bằng khách hàng và doanh thu, không bằng lượt xem.</p>
          <div className={styles.actions}>
            <Button href="#lien-he">Nhận tư vấn</Button>
            <Button href="/ket-qua" variant="secondary" arrow="right">Xem dự án</Button>
          </div>
          {tel && <p className={styles.note}>Hoặc gọi <a href={`tel:${tel}`}><Icon name="phone" size={16}/>{company.phone}</a> · {company.hours}</p>}
        </div>
      </div>

      <div className={`container ${styles.proof}`}>
        {google && (
          <a className={styles.partner} href={google.profileUrl} target="_blank" rel="noopener noreferrer">
            <img src={sitePath(google.logo)} alt="" width="152" height="146"/>
            <span><strong>{google.name} {google.year}</strong>Xem hồ sơ trên Google</span>
          </a>
        )}
        <p className={styles.cases}>
          <span className={styles.casesLabel}>Một số dự án</span>
          {cases.map(c => <a key={c.slug} href={sitePath(`/du-an/${c.slug}`)}>{c.name}</a>)}
        </p>
      </div>
    </section>
  );
}
