import styles from './PartnerStrip.module.css';
import {partners} from '../data/proof';
import PartnerBadge from './PartnerBadge';

/* Dải chứng nhận: huy hiệu chính thức cho mục đã xác nhận, tên kèm nhãn [CẦN ...] cho mục chưa có */
export default function PartnerStrip(){
  if (!partners.length) return null;
  return (
    <div className={styles.strip}>
      <p className={styles.label}>Chứng nhận và đối tác</p>
      <ul className={styles.list}>
        {partners.map(p => (
          <li key={p.name}>
            {p.verified && p.logo
              ? <PartnerBadge partner={p} size={96} tipId="tip-partner-strip"/>
              : <>
                  <span className={styles.name}>{p.name}</span>
                  <span className="placeholder">[CẦN XÁC NHẬN và logo chính thức]</span>
                </>}
          </li>
        ))}
      </ul>
    </div>
  );
}
