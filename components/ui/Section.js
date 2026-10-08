import styles from './Section.module.css';

/*
  Khung section theo lưới 12 cột.
  variant:
    default  nhãn sticky cột 1–4, nội dung cột 5–12
    wide     nhãn + tiêu đề một hàng, nội dung tràn 12 cột bên dưới
    split    nhãn, tiêu đề, intro ở cột trái (1–5), nội dung cột phải (7–12)
*/
export default function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
  variant = 'default',
  spacing = 'md',
  tone = 'paper',
  rule = true,
  asideMedia,
  className = ''
}){
  const head = (index || label) && (
    <p className={styles.label}>
      {index && <span className={styles.index}>{index}</span>}
      {label && <span>{label}</span>}
    </p>
  );

  const heading = (title || intro) && (
    <div className={styles.heading} data-reveal="">
      {title && <h2 className={styles.title}>{title}</h2>}
      {intro && <div className={styles.intro}>{intro}</div>}
    </div>
  );

  return (
    <section
      id={id}
      className={[
        styles.section,
        styles[`space_${spacing}`],
        styles[`tone_${tone}`],
        className
      ].join(' ')}
    >
      <div className="container">
        <div className={`${styles.inner} ${rule ? styles.ruled : ''}`}>
        <div className={`${styles.grid} ${styles[variant]}`}>
          {variant === 'default' && (
            <>
              <div className={styles.aside}>
                <div className={styles.sticky}>
                  {head}
                  {asideMedia && <div className={styles.asideMedia}>{asideMedia}</div>}
                </div>
              </div>
              <div className={styles.main}>
                {heading}
                {children}
              </div>
            </>
          )}
          {variant === 'wide' && (
            <>
              <div className={styles.aside}>{head}</div>
              <div className={styles.main}>{heading}</div>
              <div className={styles.full}>{children}</div>
            </>
          )}
          {variant === 'split' && (
            <>
              <div className={styles.aside}>
                <div className={styles.sticky}>
                  {head}
                  {heading}
                  {asideMedia && <div className={styles.asideMedia}>{asideMedia}</div>}
                </div>
              </div>
              <div className={styles.main}>{children}</div>
            </>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
