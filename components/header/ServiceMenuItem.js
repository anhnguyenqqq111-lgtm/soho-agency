import styles from './MegaMenu.module.css';
import Icon from '../ui/Icon';
import {sitePath} from '../paths';

// Một dịch vụ trong Mega Menu. compact: bản trong drawer mobile, chỉ có icon và tên.
export default function ServiceMenuItem({item, current, compact = false, onSelect}){
  return (
    <a
      href={sitePath(item.href)}
      className={`${styles.item} ${compact ? styles.itemCompact : ''}`}
      aria-current={current ? 'page' : undefined}
      onClick={() => onSelect?.(item)}
    >
      <span className={styles.itemIcon} aria-hidden="true"><Icon name={item.icon} size={compact ? 18 : 20}/></span>
      <span className={styles.itemText}>
        <span className={styles.itemTitle}>
          {item.label}
          {current && <span className={styles.itemCurrent}>Đang xem</span>}
        </span>
        {!compact && <span className={styles.itemDesc}>{item.desc}</span>}
      </span>
      {!compact && <Icon name="arrow-right" size={16} className={styles.itemArrow}/>}
    </a>
  );
}
