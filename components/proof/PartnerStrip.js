import styles from './PartnerStrip.module.css';
import {partners} from '../data/proof';
import {sitePath} from '../paths';

export default function PartnerStrip(){
  if (!partners.length) return null;
  return (
    <div className={styles.strip}>
      <p className={styles.label}>Chứng nhận và đối tác</p>
      <ul className={styles.list}>
        {partners.map(p => (
          <li key={p.name}>
            {p.logo
              ? <img src={sitePath(p.logo)} alt={p.name} className={styles.logo}/>
              : <span className={styles.name}>{p.name}</span>}
            {!p.verified && <span className="placeholder">[CẦN XÁC NHẬN và logo chính thức]</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
