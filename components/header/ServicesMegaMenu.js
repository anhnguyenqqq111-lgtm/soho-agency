import styles from './MegaMenu.module.css';
import ServiceMenuItem from './ServiceMenuItem';
import MegaMenuCTA from './MegaMenuCTA';
import {isCurrentPath} from './navUtils';

/*
  Panel Mega Menu desktop: 3 nhóm dịch vụ, mỗi nhóm một cột, khối CTA trải hết chiều ngang ở dưới.
  Luôn có trong DOM để aria-controls của nút trỏ đúng phần tử; khi đóng thì visibility:hidden nên không nhận focus
  và trình đọc màn hình bỏ qua. Mở bằng opacity + translateY (200ms), tắt khi người dùng chọn giảm chuyển động.
*/
export default function ServicesMegaMenu({menu, open, pathname, onSelectService, onSelectCta}){
  return (
    <div id={menu.id} className={styles.panel} data-open={open || undefined}>
      <div className={styles.groups}>
        {menu.groups.map(group => (
          <div key={group.id} className={styles.group}>
            <p className={styles.groupTitle} id={`${menu.id}-${group.id}`}><span>{group.number}</span>{group.title}</p>
            <ul className={styles.list} aria-labelledby={`${menu.id}-${group.id}`}>
              {group.items.map(item => (
                <li key={item.slug}>
                  <ServiceMenuItem item={item} current={isCurrentPath(pathname, item.href)} onSelect={it => onSelectService?.(it, group)}/>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <MegaMenuCTA cta={menu.cta} overview={menu.overview} onSelect={onSelectCta}/>
    </div>
  );
}
