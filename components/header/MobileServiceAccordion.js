import styles from './MobileNavigation.module.css';
import ServiceMenuItem from './ServiceMenuItem';
import Icon from '../ui/Icon';
import {sitePath} from '../paths';
import {isCurrentPath} from './navUtils';

// Mục "Dịch vụ" trong drawer mobile: nút disclosure mở danh sách 3 nhóm dịch vụ và link tổng quan.
export default function MobileServiceAccordion({label, menu, open, onToggle, pathname, active, onSelectService, onSelectOverview}) {
  const panelId = `${menu.id}-mobile`;
  return (
    <>
      <button type="button" className={`${styles.item} ${active ? styles.itemActive : ''}`} aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
        {label}
        <Icon name="chevron-down" size={20} className={styles.caret} />
      </button>
      <div id={panelId} className={styles.sub} hidden={!open}>
        {menu.groups.map(group => (
          <div key={group.id} className={styles.subGroup}>
            <p className={styles.subTitle} id={`${panelId}-${group.id}`}>
              <span>{group.number}</span>
              {group.title}
            </p>
            <ul aria-labelledby={`${panelId}-${group.id}`}>
              {group.items.map(item => (
                <li key={item.slug}>
                  <ServiceMenuItem item={item} compact current={isCurrentPath(pathname, item.href)} onSelect={it => onSelectService(it, group)} />
                </li>
              ))}
            </ul>
          </div>
        ))}
        <a href={sitePath(menu.overview.href)} className={styles.overview} onClick={onSelectOverview}>
          {menu.overview.label}
          <Icon name="arrow-right" size={16} />
        </a>
      </div>
    </>
  );
}
