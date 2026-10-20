import styles from './HomeHero.module.css';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import {partners} from '../data/proof';
import {company} from '../data/company';
import {cases} from '../data/cases';
import {STAGES, STAGE_MEASURE, JOURNEY_TOTAL} from '../data/journey';
import {sitePath} from '../paths';

/*
  Hero trang chủ (Sprint 1, phương án A "Gradient art" được chọn; xem docs/REDESIGN-REPORT.md mục D).
  Nguyên tắc KOTA: một màn hình, chữ rất lớn và ngắn, trường gradient tràn mép, hàng bằng chứng ở đáy.
  - H1: dòng nhỏ tên + nghề, rồi thông điệp lớn hai dòng lệch nhau "Từ tìm kiếm / đến doanh thu".
  - Phải: hành trình 3 chặng xếp bậc thang (danh sách có thứ tự, đọc được bằng trình đọc màn hình), gộp về doanh thu theo kênh.
  - Đáy hero: bằng chứng có tên riêng (Google Partner, một số dự án).
  Không cần JavaScript; chuyển động chỉ bằng CSS và tắt khi giảm chuyển động.
*/
export default function HomeHero(){
  const google = partners.find(p => p.verified && p.logo);
  const tel = company.phone ? company.phone.replace(/\s/g, '') : null;
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.field} aria-hidden="true"/>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.kicker}>SOHO Agency · SEO, quảng cáo và website</span>
            <span className="visually-hidden">: </span>
            <span className={styles.line1}>Từ tìm kiếm</span>{' '}
            <span className={styles.line2}>đến <span className="hl">doanh thu</span>.</span>
          </h1>
          <p className={styles.lead}>Từ chiến lược đến tự tay triển khai: SEO, Google Ads, Facebook Ads, website và nhận diện thương hiệu. Báo cáo bằng khách hàng và doanh thu, không bằng lượt xem.</p>
          <div className={styles.actions}>
            <Button href="#lien-he">Nhận tư vấn</Button>
            <Button href="/ket-qua" variant="secondary" arrow="right">Xem dự án</Button>
          </div>
          {tel && <p className={styles.note}>Hoặc gọi <a href={`tel:${tel}`}><Icon name="phone" size={16}/>{company.phone}</a> · {company.hours}</p>}
        </div>

        <div className={styles.journeyWrap}>
          <picture className={styles.journeyArt} aria-hidden="true">
            <source media="(max-width: 980px)" srcSet={sitePath('/hero/customer-journey-mobile.webp')}/>
            <img src={sitePath('/hero/customer-journey-desktop.webp')} alt="" width="1536" height="1024" fetchPriority="high"/>
          </picture>
          <ol className={styles.journey} aria-label="Hành trình một khách hàng với SOHO">
            {STAGES.map((st, i) => (
              <li key={st.code} className={styles.step} style={{'--i': i}}>
                <span className={styles.num} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <p className={styles.name}><span className="visually-hidden">{st.code}: </span>{st.name}</p>
                <p className={styles.q}>{st.q}</p>
                <p className={styles.measure}><Icon name="chart-line" size={14}/>{STAGE_MEASURE[i]}</p>
              </li>
            ))}
            <li className={styles.total} style={{'--i': 3}}>
              <Icon name="target" size={18}/>
              <span>{JOURNEY_TOTAL.lead} <strong>{JOURNEY_TOTAL.value}</strong></span>
            </li>
          </ol>
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
