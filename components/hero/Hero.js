import styles from './Hero.module.css';
import {sitePath} from '../paths';

/*
  Hero toàn màn hình: chỉ gồm minh họa lớn, tên trang và một dòng ngắn.
  tone: home | services | solutions | results | blog | about | contact (mỗi tone một phối màu)
  Nội dung chi tiết nằm ở section ngay dưới (#noi-dung).
*/
export default function Hero({tone, eyebrow, title, tagline, visual, crumbs = []}){
  return (
    <section className={`${styles.hero} ${styles[tone]}`}>
      <div className={`container ${styles.inner}`}>
      <div className={styles.content}>
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <ol>
              <li><a href={sitePath('/')}>Trang chủ</a></li>
              {crumbs.map(c => <li key={c.label}>{c.href ? <a href={sitePath(c.href)}>{c.label}</a> : <span aria-current="page">{c.label}</span>}</li>)}
            </ol>
          </nav>
        )}
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {tagline && <p className={styles.tagline}>{tagline}</p>}
        <a href="#noi-dung" className={styles.scroll} aria-label="Cuộn xuống nội dung"><span/></a>
      </div>
      <div className={styles.visual}>{visual}</div>
      </div>
    </section>
  );
}
