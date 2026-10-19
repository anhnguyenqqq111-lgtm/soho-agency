import styles from './Testimonials.module.css';
import {testimonials} from '../data/proof';

// Nhận xét khách hàng (nguyên văn, nguồn sohoagency.vn). Không hiện ô trống khi chưa có dữ liệu.
export default function Testimonials(){
  const items = testimonials.filter(t => t.quote);
  if (!items.length) return null;
  return (
    <>
      <ul className={styles.list}>
        {items.map((t, i) => (
          <li key={t.name} className={styles.item} data-reveal="" style={{'--reveal-delay': `${i * 90}ms`}}>
            <blockquote className={styles.quote}><p>{t.quote}</p></blockquote>
            <p className={styles.who}>
              <span className={styles.name}>{t.name}</span>
              <span className={styles.role}>{[t.role, t.company].filter(Boolean).join(', ')}</span>
            </p>
          </li>
        ))}
      </ul>
      <p className={styles.source}>Nhận xét đã đăng trên sohoagency.vn, giữ nguyên văn.</p>
    </>
  );
}
