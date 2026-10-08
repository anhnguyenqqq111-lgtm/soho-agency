import styles from './LogoMarquee.module.css';
import {sitePath} from '../paths';

// Dải logo khách hàng chạy ngang, dừng khi hover. Danh sách lặp 2 lần để chạy liền mạch.
export default function LogoMarquee({clients}){
  const row = (hidden) => (
    <ul className={styles.row} aria-hidden={hidden || undefined}>
      {clients.map(c => (
        <li key={c.slug}>
          <img src={sitePath(c.logo)} alt={hidden ? '' : c.name} loading="lazy"/>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={styles.marquee}>
      <p className={styles.label}>Đang làm cùng</p>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
