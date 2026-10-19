'use client';
import {useCallback, useEffect, useRef, useState} from 'react';
import {usePathname} from 'next/navigation';
import styles from './MobileNavigation.module.css';
import MobileServiceAccordion from './MobileServiceAccordion';
import MegaMenuCTA from './MegaMenuCTA';
import Icon from '../ui/Icon';
import {sitePath} from '../paths';
import {track} from '../analytics';
import {DESKTOP_QUERY, isCurrentPath} from './navUtils';

/*
  Drawer mobile (dưới 1000px).
  - Nút Menu có aria-expanded + aria-controls. Mở: khóa cuộn trang, nội dung phía sau inert, focus vào mục đầu và được giữ trong drawer.
  - Esc hoặc nút Đóng: đóng và trả focus về nút Menu. Xoay màn hình hoặc kéo rộng qua breakpoint desktop thì tự đóng.
  - "Dịch vụ" là accordion; đang ở một trang dịch vụ thì mở sẵn.
*/
export default function MobileNavigation({items, activeNav, services, cta}){
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(activeNav === 'services');
  const pathname = usePathname();
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) requestAnimationFrame(() => toggleRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    // Thanh StickyCta nằm trong <footer> nên cũng inert theo
    const background = [...document.querySelectorAll('#main, body > footer')];
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    background.forEach(el => el.setAttribute('inert', ''));
    requestAnimationFrame(() => drawer.querySelector('a[href], button')?.focus());

    const focusables = () => [toggleRef.current, ...drawer.querySelectorAll('a[href], button:not([disabled])')].filter(el => el && el.offsetParent !== null);
    const onKey = e => {
      if (e.key === 'Escape'){ e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      const list = focusables();
      const first = list[0], last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    };
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = () => { if (mq.matches) close(false); };
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onBreakpoint);
    return () => {
      document.body.style.overflow = prevOverflow;
      background.forEach(el => el.removeAttribute('inert'));
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onBreakpoint);
    };
  }, [open, close]);

  const onNavigate = () => close(false);

  return (
    <div className={styles.root}>
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => (open ? close() : setOpen(true))}
      >
        <Icon name={open ? 'x' : 'menu'} size={20}/>{open ? 'Đóng' : 'Menu'}
      </button>

      <nav id="mobile-navigation" ref={drawerRef} className={styles.drawer} aria-label="Điều hướng chính" hidden={!open}>
        <ul className={styles.list}>
          {items.map(item => {
            const active = item.activeFor ? item.activeFor.includes(activeNav) : activeNav === item.key;
            if (item.megaMenu){
              return (
                <li key={item.key}>
                  <MobileServiceAccordion
                    label={item.label}
                    menu={services}
                    open={servicesOpen}
                    onToggle={() => setServicesOpen(o => !o)}
                    pathname={pathname}
                    active={active}
                    onSelectService={(service, group) => { track('mega_menu_service_click', {service: service.slug, service_group: group.title}); onNavigate(); }}
                    onSelectOverview={() => { track('mega_menu_cta_click', {cta: services.overview.label}); onNavigate(); }}
                  />
                </li>
              );
            }
            return (
              <li key={item.key}>
                <a
                  href={sitePath(item.href)}
                  className={`${styles.item} ${active ? styles.itemActive : ''}`}
                  aria-current={isCurrentPath(pathname, item.href) ? 'page' : undefined}
                  onClick={onNavigate}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <MegaMenuCTA cta={services.cta} stacked onSelect={() => { track('mega_menu_cta_click', {cta: cta.label}); onNavigate(); }}/>
      </nav>
    </div>
  );
}
