import styles from './Section.module.css';

/*
  Section chuẩn: kicker nhỏ, H2 lớn (có thể chứa .hl), intro, rồi nội dung.
  tone: giữ để tương thích; bản tối giản mọi tone đều nền trắng
  align: left | center
  aside: nút hoặc link đặt bên phải tiêu đề (desktop)
*/
export default function Section({id, kicker, title, intro, aside, children, tone = 'white', align = 'left', spacing = 'md', className = ''}){
  // Bản tối giản không còn section nền tối: tone 'dark' hiển thị như nền trắng
  const dark = false;
  return (
    <section id={id} className={[styles.section, styles[`tone_${tone}`], styles[`space_${spacing}`], dark ? 'dark' : '', className].join(' ')}>
      <div className="container">
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
