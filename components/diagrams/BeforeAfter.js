import styles from './BeforeAfter.module.css';

/*
  Sơ đồ "Hiện tại → Sau khi làm": hai cột, mũi tên tự vẽ ở giữa.
*/
export default function BeforeAfter({before, after, beforeLabel = 'Hiện tại', afterLabel = 'Sau khi làm'}){
  return (
    <div className={styles.wrap} data-reveal="ba">
      <div className={styles.col}>
        <p className={styles.label}>{beforeLabel}</p>
        <ul className={styles.list}>
          {before.map((item, i) => (
            <li key={item} style={{'--i': i}}><span className={styles.mark} aria-hidden="true"/>{item}</li>
          ))}
        </ul>
      </div>
      <svg className={styles.arrow} viewBox="0 0 80 24" aria-hidden="true">
        <path d="M2 12 H74" pathLength="1"/>
        <path d="M66 4 L76 12 L66 20" pathLength="1" className={styles.head}/>
      </svg>
      <div className={`${styles.col} ${styles.after}`}>
        <p className={styles.label}>{afterLabel}</p>
        <ul className={styles.list}>
          {after.map((item, i) => (
            <li key={item} style={{'--i': i + 3}}><span className={styles.mark} aria-hidden="true"/>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
