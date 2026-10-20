import styles from './Hero.module.css';
import {sitePath} from '../paths';

/*
  Hero trang con, xếp dọc (tránh khuôn "nhãn nhỏ + tiêu đề trái + ảnh phải" của thiết kế AI):
  breadcrumb, H1 lớn (Fraunces), một dòng mô tả; minh họa thành dải rộng bên dưới, ngăn bằng đường kẻ mảnh.
  Nội dung chi tiết nằm ở section ngay dưới (#noi-dung). Trang chủ dùng HomeHero.
*/
export default function Hero({tone, title, tagline, visual, crumbs = [], long = false}) {
  return (
    <section className={`${styles.hero} ${styles[tone] || ''}`}>
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
