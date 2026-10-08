import styles from './Track.module.css';
import {sitePath} from '../paths';

/*
  Sơ đồ dạng đường ray: một đường kẻ tự vẽ nối các nút đánh số.
  Ngang trên desktop, dọc trên mobile.
  items: [{title, text?, meta?, links?: [{label, href}], acc?}]
  headingLabel: true khi Track đứng ngay sau h1, để nhãn thành h2 và heading không nhảy cấp
*/
export default function Track({items, label, headingLabel = false, numbered = true, className = ''}){
  return (
    <div className={`${styles.track} ${className}`} data-reveal="track" style={{'--n': items.length}}>
      {label && (headingLabel
        ? <h2 className={styles.label}>{label}</h2>
        : <p className={styles.label}>{label}</p>)}
      <ol className={styles.list}>
        {items.map((item, i) => (
          <li key={item.title} className={`${styles.item} ${item.acc ? styles.acc : ''}`} style={{'--i': i}}>
            <span className={styles.node} aria-hidden="true">
              {numbered ? String(i + 1).padStart(2, '0') : ''}
            </span>
            <div className={styles.body}>
              {item.meta && <p className={styles.meta}>{item.meta}</p>}
              <h3 className={styles.title}>{item.title}</h3>
              {item.text && <p className={styles.text}>{item.text}</p>}
              {item.links && (
                <ul className={styles.links}>
                  {item.links.map(link => (
                    <li key={link.href}><a href={sitePath(link.href)}>{link.label}</a></li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
