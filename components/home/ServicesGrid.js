import styles from './ServicesGrid.module.css';
import Icon from '../ui/Icon';
import {sitePath} from '../paths';

/*
  Sáu dịch vụ chính (servicePagesData.coreServices), lưới 3 × 2 trên desktop, 1 cột trên mobile.
  Học cách Positivus làm lưới thẻ dịch vụ có tương phản: thẻ trắng viền mảnh, một thẻ nổi bật nền Midnight.
  Cả thẻ là một link, vùng bấm lớn; hover nâng nhẹ và mũi tên trượt.
*/
export default function ServicesGrid({services, partnerLabel}){
  return (
    <ul className={styles.grid}>
      {services.map((s, i) => (
        <li key={s.slug} className={s.featured ? styles.featured : ''} data-reveal="" style={{'--reveal-delay': `${(i % 3) * 80}ms`}}>
          <a href={sitePath(`/dich-vu/${s.slug}`)} className={styles.card}>
            <span className={styles.top}>
              <span className={styles.icon}>
                {s.art ? <img src={sitePath(s.art)} alt="" width="96" height="96" loading="lazy"/> : <Icon name={s.icon} size={24}/>}
              </span>
              {s.featured && partnerLabel && <span className={styles.badge}>{partnerLabel}</span>}
            </span>
            <span className={styles.name}>{s.coreTitle}</span>
            <span className={styles.desc}>{s.coreDesc}</span>
            <span className={styles.more}>Xem dịch vụ <Icon name="arrow-right" size={16}/></span>
          </a>
        </li>
      ))}
    </ul>
  );
}
