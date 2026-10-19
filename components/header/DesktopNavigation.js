'use client';
import {useCallback, useEffect, useRef, useState} from 'react';
import {usePathname} from 'next/navigation';
import styles from './SiteHeader.module.css';
import ServicesMegaMenu from './ServicesMegaMenu';
import Icon from '../ui/Icon';
import {sitePath} from '../paths';
import {track} from '../analytics';
import {DESKTOP_QUERY, isCurrentPath} from './navUtils';

/*
  Điều hướng desktop theo mẫu Disclosure Navigation (WAI-ARIA APG): nút "Dịch vụ" có aria-expanded + aria-controls,
  bên trong là link thường. Không dùng role menu/menubar.
  - Bấm nút để mở/đóng (không mở khi rê chuột, tránh mở nhầm và đóng nhầm).
  - Esc đóng và trả focus về nút. Bấm ra ngoài thì đóng. Tab ra khỏi panel sang mục khác thì đóng.
  - Mũi tên xuống trên nút: mở và đưa focus vào dịch vụ đầu tiên.
  Panel nằm ngay sau nút trong DOM nên thứ tự Tab đi thẳng vào các dịch vụ.
*/
export default function DesktopNavigation({items, activeNav, services, cta}){
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const itemRef = useRef(null);
  const triggerRef = useRef(null);

  const close = useCallback((focusTrigger = false) => {
    setOpen(false);
    if (focusTrigger) triggerRef.current?.focus();
  }, []);

  const openMenu = (focusFirst = false) => {
    if (!open) track('mega_menu_open', {menu: 'services'});
    setOpen(true);
    if (focusFirst) requestAnimationFrame(() => itemRef.current?.querySelector(`#${services.id} a`)?.focus());
  };

  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape'){ e.preventDefault(); close(true); } };
    const onPointer = e => { if (!itemRef.current?.contains(e.target)) close(); };
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = () => { if (!mq.matches) close(); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    mq.addEventListener('change', onBreakpoint);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      mq.removeEventListener('change', onBreakpoint);
    };
  }, [open, close]);

  // Chỉ đóng khi focus chuyển sang một phần tử khác bên ngoài. relatedTarget rỗng (bấm vào vùng trống trong panel) thì giữ nguyên.
  const onBlur = e => { if (open && e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) close(); };

  const onSelectService = (item, group) => {
    track('mega_menu_service_click', {service: item.slug, service_group: group.title});
    close();
  };
  const onSelectCta = kind => {
    track('mega_menu_cta_click', {cta: kind === 'consult' ? cta.label : services.overview.label});
    close();
  };

  return (
    <nav className={styles.desktop} aria-label="Điều hướng chính">
      <ul className={styles.navList}>
        {items.map(item => {
          const active = item.activeFor ? item.activeFor.includes(activeNav) : activeNav === item.key;
          if (item.megaMenu){
            return (
              <li key={item.key} ref={itemRef} className={styles.megaItem} onBlur={onBlur}>
                <button
                  ref={triggerRef}
                  type="button"
                  className={`${styles.navItem} ${active ? styles.active : ''}`}
                  aria-expanded={open}
                  aria-controls={services.id}
                  onClick={() => (open ? close() : openMenu())}
                  onKeyDown={e => { if (e.key === 'ArrowDown'){ e.preventDefault(); openMenu(true); } }}
                >
                  {item.label}
                  <Icon name="chevron-down" size={16} className={styles.caret}/>
                </button>
                <ServicesMegaMenu menu={services} open={open} pathname={pathname} onSelectService={onSelectService} onSelectCta={onSelectCta}/>
              </li>
            );
          }
          const current = isCurrentPath(pathname, item.href);
          return (
            <li key={item.key}>
              <a href={sitePath(item.href)} className={`${styles.navItem} ${active ? styles.active : ''}`} aria-current={current ? 'page' : undefined}>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
      <a href={sitePath(cta.href)} className={styles.cta}>
        <span>{cta.label}</span><Icon name="arrow-up-right" size={17} className={styles.ctaIcon}/>
      </a>
    </nav>
  );
}
