import styles from './MegaMenu.module.css';
import Icon from '../ui/Icon';
import {sitePath} from '../paths';

// Khối kêu gọi cuối Mega Menu: một nút chính "Nhận tư vấn" và link tới trang tổng quan dịch vụ.
export default function MegaMenuCTA({cta, overview, stacked = false, onSelect}){
  return (
    <div className={`${styles.cta} ${stacked ? styles.ctaStacked : ''}`}>
      <div className={styles.ctaText}>
        <p className={styles.ctaTitle}>{cta.title}</p>
        <p className={styles.ctaDesc}>{cta.text}</p>
      </div>
      <div className={styles.ctaActions}>
        {overview && (
          <a href={sitePath(overview.href)} className={styles.ctaLink} onClick={() => onSelect?.('overview')}>
            {overview.label}<Icon name="arrow-right" size={16}/>
          </a>
        )}
        <a href={sitePath(cta.href)} className={styles.ctaButton} onClick={() => onSelect?.('consult')}>
          {cta.label}<Icon name="arrow-up-right" size={17}/>
        </a>
      </div>
    </div>
  );
}
