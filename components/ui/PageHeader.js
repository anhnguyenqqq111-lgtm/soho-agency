import styles from './PageHeader.module.css';
import {sitePath} from '../paths';
import Photo from './Photo';
import SplitWords from './SplitWords';

/*
  Phần đầu trang con.
  crumbs: [{label, href?}]  phần tử cuối không cần href
  aside: nội dung cột phải (tùy chọn)
  children: meta hoặc nút, đặt dưới lead
  image: ảnh banner dưới phần chữ (mục trong components/data/images.js)
*/
export default function PageHeader({crumbs = [], title, lead, aside, children, image, compact = false}){
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
                    {crumb.href
                      ? <a href={sitePath(crumb.href)}>{crumb.label}</a>
                      : <span aria-current="page">{crumb.label}</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className={styles.title}>
            {typeof title === 'string' ? <SplitWords segments={[{text: title}]}/> : title}
          </h1>
          {lead && <p className={styles.lead} data-reveal="" style={{'--reveal-delay': '350ms'}}>{lead}</p>}
          {children && <div className={styles.extra} data-reveal="" style={{'--reveal-delay': '450ms'}}>{children}</div>}
        </div>
        {aside && <div className={styles.aside}>{aside}</div>}
        {image && (
          <div className={styles.image} style={{'--reveal-delay': '200ms'}}>
            <Photo image={image} ratio="21/9" eager/>
          </div>
        )}
      </div>
    </header>
  );
}
