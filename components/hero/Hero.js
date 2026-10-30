import styles from './Hero.module.css';
import {sitePath} from '../paths';
import Glass from '../sq/Glass';

/*
  Hero trang con, xếp dọc (tránh khuôn "nhãn nhỏ + tiêu đề trái + ảnh phải" của thiết kế AI):
  breadcrumb, H1 lớn (Fraunces), một dòng mô tả; minh họa thành dải rộng bên dưới, ngăn bằng đường kẻ mảnh.
  Nội dung chi tiết nằm ở section ngay dưới (#noi-dung). Trang chủ dùng HomeHero.
*/
export default function Hero({tone, title, tagline, visual, crumbs = [], long = false}) {
  return (
    <section className={`${styles.hero} ${styles[tone] || ''}`}>
      <span className={styles.glass} aria-hidden="true">
        <Glass tone="denim" icon="search" style={{right: '-60px', top: '36px', width: 170, height: 170, transform: 'rotate(-8deg)'}} />
        <Glass tone="light" style={{right: '120px', top: '150px', width: 120, height: 64, transform: 'rotate(5deg)'}} />
        <Glass tone="orange" sm style={{right: '200px', top: '40px', width: 24, height: 24, transform: 'rotate(14deg)'}} />
      </span>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className={styles.crumbs}>
              <ol>
                <li>
                  <a href={sitePath('/')}>Trang chủ</a>
                </li>
                {crumbs.map(c => (
                  <li key={c.label}>{c.href ? <a href={sitePath(c.href)}>{c.label}</a> : <span aria-current="page">{c.label}</span>}</li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className={`${styles.title} ${long ? styles.long : ''}`}>{title}</h1>
          {tagline && <p className={styles.tagline}>{tagline}</p>}
        </div>
        {visual && <div className={styles.visual}>{visual}</div>}
      </div>
    </section>
  );
}
