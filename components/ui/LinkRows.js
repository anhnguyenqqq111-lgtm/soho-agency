import styles from './LinkRows.module.css';
import {sitePath} from '../paths';

// Danh sách dòng có đường kẻ, cả dòng là link. items: [{title, desc, href, meta}]
export default function LinkRows({items, size = 'md'}){
  return (
    <ul className={`${styles.list} ${styles[size]}`}>
      {items.map(item => (
        <li key={item.href}>
          <a href={sitePath(item.href)} className={styles.row}>
            {item.meta && <span className={styles.meta}>{item.meta}</span>}
            <span className={styles.title}>{item.title}</span>
            {item.desc && <span className={styles.desc}>{item.desc}</span>}
            <span className={styles.arrow} aria-hidden="true">→</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
