import styles from './LogoMarquee.module.css';
import {sitePath} from '../paths';

// Dải logo khách hàng chạy ngang liên tục. Danh sách lặp 2 lần để chạy liền mạch; dừng khi hover.
export default function LogoMarquee({clients, label = 'Doanh nghiệp đang làm cùng SOHO'}){
  const row = hidden => (
    <ul className={styles.row} aria-hidden={hidden || undefined}>
      {clients.map(c => (
        <li key={c.slug}><img src={sitePath(c.logo)} alt={hidden ? '' : c.name} loading="lazy"/></li>
      ))}
    </ul>
  );
  return (
    <section className={styles.band} aria-label={label}>
      <div className="container"><p className={styles.label}>{label}</p></div>
      <div className={styles.viewport}>
        <div className={styles.track}>{row(false)}{row(true)}{row(true)}</div>
      </div>
    </section>
  );
}
