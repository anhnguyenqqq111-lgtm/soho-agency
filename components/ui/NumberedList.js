import styles from './NumberedList.module.css';
import {sitePath} from '../paths';

export default function NumberedList({items, start = 1, size = 'md', className = ''}){
  return (
    <ol className={`${styles.list} ${styles[size]} ${className}`} start={start}>
      {items.map((item, i) => {
        const n = String(start + i).padStart(2, '0');
        return (
          <li className={styles.item} key={item.title} data-reveal="" style={{'--reveal-delay': `${i * 70}ms`}}>
            <span className={styles.num} aria-hidden="true">{n}</span>
            <div className={styles.body}>
              <h3 className={styles.title}>
                {item.href ? <a href={sitePath(item.href)}>{item.title}</a> : item.title}
              </h3>
              {item.text && <p className={styles.text}>{item.text}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
