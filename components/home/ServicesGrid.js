import styles from './ServicesGrid.module.css';
import Icon from '../ui/Icon';
import ServiceArt from './ServiceArt';
import {sitePath} from '../paths';

/*
  Sáu dịch vụ chính (servicePagesData.coreServices), lưới 3 × 2 trên desktop, 1 cột trên mobile.
  Brand Identity 3.0: thẻ nền tối, mỗi thẻ một hình hình học riêng (ServiceArt), số thứ tự cam, tên trắng.
  Cả thẻ là một link tới trang dịch vụ đang có; hover nâng nhẹ, sáng viền và trượt mũi tên.
*/
export default function ServicesGrid({services, partnerLabel}){
  return (
    <ul className={styles.grid}>
      {services.map((s, i) => (
        <li key={s.slug} data-reveal="" style={{'--reveal-delay': `${(i % 3) * 80}ms`}}>
          <a href={sitePath(`/dich-vu/${s.slug}`)} className={styles.card}>
            <span className={styles.media}>
              <ServiceArt slug={s.slug} className={styles.art}/>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              {s.featured && partnerLabel && <span className={styles.badge}>{partnerLabel}</span>}
            </span>
            <span className={styles.body}>
              <span className={styles.name}>{s.coreTitle}</span>
              <span className={styles.desc}>{s.coreDesc}</span>
              <span className={styles.more}>Xem dịch vụ <Icon name="arrow-right" size={16}/></span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
