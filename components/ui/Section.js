import styles from './Section.module.css';
import {sitePath} from '../paths';

/*
  Section chuẩn: kicker nhỏ, H2 lớn (có thể chứa .hl), intro, rồi nội dung.
  tone: white | paper -> nền trắng; gray | soft | dark | fade -> khối nền xám mây bo góc, thụt vào hai bên (tách section rõ ràng).
  decor: tên hình 3D trong public/decor (vd 'target'), đặt mờ ở góc phải, trôi nhẹ; chỉ hiện ở section dạng khối nền xám. Hình CC0 từ 3dicons.co.
  align: left | center
  aside: nút hoặc link đặt bên phải tiêu đề (desktop)
*/
const PANEL = new Set(['gray', 'soft', 'dark', 'fade', 'panel']);

export default function Section({id, kicker, title, intro, aside, children, tone = 'white', align = 'left', spacing = 'md', decor, className = ''}){
  const panel = PANEL.has(tone);
  return (
    <section id={id} className={[styles.section, panel ? styles.panel : styles.plain, styles[`space_${spacing}`], className].join(' ')}>
      {decor && (
        <span className={styles.decor} aria-hidden="true">
          <img src={sitePath(`/decor/${decor}.webp`)} alt="" width="400" height="400" loading="lazy"/>
        </span>
      )}
      <div className={`container ${styles.inner}`}>
        {(title || kicker) && (
          <div className={`${styles.head} ${styles[align]}`} data-reveal="">
            <div>
              {kicker && <p className="kicker">{kicker}</p>}
              {title && <h2 className={styles.title}>{title}</h2>}
              {intro && <div className={styles.intro}>{intro}</div>}
            </div>
            {aside && <div className={styles.aside}>{aside}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
