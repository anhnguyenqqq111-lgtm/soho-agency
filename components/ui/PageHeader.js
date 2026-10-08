import styles from './PageHeader.module.css';
import {sitePath} from '../paths';
import SplitWords from './SplitWords';

/*
  Đầu trang con trên nền sáng: breadcrumb, H1 lớn, lead, 3 ý có dấu ✓, nút; khối aside bên phải.
*/
export default function PageHeader({crumbs = [], title, lead, bullets, aside, children, compact = false}){
  return (
    <header className={`${styles.wrap} ${compact ? styles.compact : ''}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.main}>
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className={styles.crumbs}>
              <ol>
                <li><a href={sitePath('/')}>Trang chủ</a></li>
                {crumbs.map(crumb => (
                  <li key={crumb.label}>
                    {crumb.href ? <a href={sitePath(crumb.href)}>{crumb.label}</a> : <span aria-current="page">{crumb.label}</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className={styles.title}>{typeof title === 'string' ? <SplitWords segments={[{text: title}]}/> : title}</h1>
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
    </header>
  );
}
