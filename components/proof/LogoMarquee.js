import styles from './LogoMarquee.module.css';
import {sitePath} from '../paths';

// Hàng logo khách hàng đứng yên (bản tối giản), logo giữ màu gốc.
export default function LogoMarquee({clients, label = 'Doanh nghiệp đang làm cùng SOHO'}){
  return (
    <section className={styles.band} aria-label={label}>
      <div className={styles.viewport}>
        <p className={styles.label}>{label}</p>
        <ul className={styles.row}>
          {clients.map(c => (
            <li key={c.slug}><img src={sitePath(c.logo)} alt={c.name} loading="lazy"/></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
