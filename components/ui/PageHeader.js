import styles from './PageHeader.module.css';
import {sitePath} from '../paths';

/*
  Đầu trang con trên nền sáng: breadcrumb, H1 lớn, lead, 3 ý có dấu ✓, nút; khối aside bên phải.
*/
/* Sau khi có Hero riêng, PageHeader thành khối mở đầu dưới hero: tiêu đề là h2. */
export default function PageHeader({crumbs = [], title, lead, bullets, aside, children, compact = false}){
  return (
    <section id="noi-dung" className={`${styles.wrap} ${compact ? styles.compact : ''}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.main}>
          <h2 className={styles.title}>{title}</h2>
          {lead && <p className={styles.lead} data-reveal="" style={{'--reveal-delay': '300ms'}}>{lead}</p>}
          {bullets && (
            <ul className={styles.bullets} data-reveal="" style={{'--reveal-delay': '380ms'}}>
              {bullets.map(b => <li key={b}><span className={styles.check} aria-hidden="true">✓</span>{b}</li>)}
            </ul>
          )}
          {children && <div className={styles.extra} data-reveal="" style={{'--reveal-delay': '460ms'}}>{children}</div>}
        </div>
        {aside && <div className={styles.aside} data-reveal="" style={{'--reveal-delay': '250ms'}}>{aside}</div>}
      </div>
    </section>
  );
}
