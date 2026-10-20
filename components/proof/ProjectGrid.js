import styles from './ProjectGrid.module.css';
import Icon from '../ui/Icon';
import {sitePath} from '../paths';

/*
  Lưới dự án đã công bố (components/data/cases.js), ảnh thật, mỗi thẻ trỏ tới trang chi tiết /du-an/<slug>.
*/
export default function ProjectGrid({projects}){
  return (
    <ul className={styles.grid}>
      {projects.map((p, i) => (
        <li key={p.slug} className={styles.item} data-reveal="" style={{'--reveal-delay': `${i * 90}ms`}}>
          <a href={sitePath(`/du-an/${p.slug}`)} className={styles.link}>
            <div className={styles.media}><img src={sitePath(p.image)} alt={`Dự án ${p.name}`} loading="lazy" width={p.imageWidth} height={p.imageHeight} style={{objectPosition: p.imagePosition}}/></div>
            <div className={styles.meta}>
              <p className={styles.scope}>{p.scope} · {p.period}</p>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.field}>{p.field}</p>
              <p className={styles.result}>{p.result}</p>
              <span className={styles.more}>Xem chi tiết <Icon name="arrow-right" size={16}/></span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
