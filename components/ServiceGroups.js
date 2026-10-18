import styles from './ServiceGroups.module.css';
import {sitePath} from './paths';

/* Khối dịch vụ trang chủ: ba cột (một cột mỗi nhóm), mỗi cột ba dịch vụ dạng dòng có link */
export default function ServiceGroups({groups}){
  return (
    <div className={styles.grid}>
      {groups.map(({group, items}, gi) => (
        <article key={group} className={styles.card} data-reveal="" style={{'--reveal-delay': `${gi * 100}ms`}}>
          <header className={styles.head}>
            <h3 className={styles.group}>{group}</h3>
          </header>
          <ul className={styles.list}>
            {items.map(s => (
              <li key={s.slug}>
                <a href={sitePath(`/dich-vu/${s.slug}`)} className={styles.row}>
                  <span className={styles.text}>
                    <strong>{s.menuTitle}</strong>
                    <span>{s.menuDesc}</span>
                  </span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
