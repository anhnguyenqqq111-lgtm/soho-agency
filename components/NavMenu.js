'use client';
import {useCallback, useEffect, useRef, useState} from 'react';
import styles from './Header.module.css';
import Icon from './ui/Icon';

/*
  Điều hướng chính.
  Desktop: menu xổ "Dịch vụ" mở khi rê chuột (có độ trễ đóng để không mất khi di chuột), khi bấm, hoặc Enter/Space;
           Esc đóng và trả focus về nút. Bấm ra ngoài thì đóng.
  Mobile: nút Menu mở lớp phủ toàn màn hình; focus đi vào lớp phủ và được giữ trong đó; Esc hoặc nút Đóng trả focus về nút Menu.
  Header đổ bóng nhẹ khi trang đã cuộn.
*/
function MenuPanel({id, menu, onNavigate, onEnter, onLeave}){
  return (
    <div id={id} className={styles.panel} style={{'--cols': menu.groups.length}} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className={styles.panelInner}>
        {menu.groups.map(({group, items}, gi) => (
          <div key={group} className={styles.panelCol}>
            <p className={styles.panelGroup}><span>{String(gi + 1).padStart(2, '0')}</span>{group}</p>
            <ul className={styles.panelList}>
              {items.map(item => (
                <li key={item.href}><a href={item.href} onClick={onNavigate}>{item.title}<span aria-hidden="true"><Icon name="arrow-right" size={15}/></span></a></li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.panelSide}>
          <p className={styles.panelSideTitle}>{menu.sideTitle}</p>
          <ul className={styles.panelSideList}>
            {menu.sideLinks.map(l => <li key={l.href}><a href={l.href} onClick={onNavigate}>{l.label}</a></li>)}
          </ul>
          <a href={menu.allHref} onClick={onNavigate} className={styles.panelAll}>{menu.allLabel}<Icon name="arrow-right" size={16}/></a>
        </div>
      </div>
    </div>
  );
}

export default function NavMenu({activeNav, menu, links, contactHref, ctaLabel}){
  const [panelOpen, setPanelOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const rootRef = useRef(null);
  const panelBtnRef = useRef(null);
  const toggleRef = useRef(null);
  const mobileRef = useRef(null);
  const closeTimer = useRef(null);

  const openPanel = () => { clearTimeout(closeTimer.current); setPanelOpen(true); };
  const closePanelSoon = () => { clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setPanelOpen(false), 160); };
  const closeMobile = useCallback((returnFocus = true) => {
    setMobileOpen(false);
    if (returnFocus) requestAnimationFrame(() => toggleRef.current?.focus());
  }, []);
  const closeAll = () => { setPanelOpen(false); setMobileOpen(false); };

  // Esc, bấm ra ngoài
  useEffect(() => {
    const onKey = e => {
      if (e.key !== 'Escape') return;
      if (mobileOpen) closeMobile();
      else if (panelOpen){ setPanelOpen(false); panelBtnRef.current?.focus(); }
    };
    const onDown = e => { if (rootRef.current && !rootRef.current.contains(e.target)) setPanelOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onDown); };
  }, [mobileOpen, panelOpen, closeMobile]);

  // Header đổ bóng khi đã cuộn
  useEffect(() => {
    const header = rootRef.current?.closest('header');
    if (!header) return;
    const onScroll = () => header.toggleAttribute('data-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Menu mobile: khóa cuộn trang, đưa focus vào trong, giữ Tab trong lớp phủ
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const el = mobileRef.current;
    const focusables = () => [toggleRef.current, ...el.querySelectorAll('a[href], button:not([disabled])')].filter(Boolean);
    requestAnimationFrame(() => el.querySelector('a[href], button')?.focus());
    const onTab = e => {
      if (e.key !== 'Tab') return;
      const list = focusables();
      const first = list[0], last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onTab);
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onTab); };
  }, [mobileOpen]);

  const [before, after] = [links.filter(l => l.beforeMenu), links.filter(l => !l.beforeMenu)];
  const navLink = link => (
    <li key={link.key}>
      <a href={link.href} className={`${styles.navItem} ${activeNav === link.key ? styles.active : ''}`} aria-current={activeNav === link.key ? 'page' : undefined}>
        {link.label}
      </a>
    </li>
  );

  return (
    <div ref={rootRef} className={styles.nav}>
      <nav className={styles.desktop} aria-label="Điều hướng chính">
        <ul className={styles.navList}>
          {before.map(navLink)}
          <li onMouseEnter={openPanel} onMouseLeave={closePanelSoon}>
            <button
              ref={panelBtnRef}
              type="button"
              className={`${styles.navItem} ${['services', 'solutions'].includes(activeNav) ? styles.active : ''}`}
              aria-expanded={panelOpen}
              aria-controls="panel-services"
              onClick={() => setPanelOpen(o => !o)}
            >
              {menu.label}
              <Icon name="chevron-down" size={16} className={`${styles.caret} ${panelOpen ? styles.caretOpen : ''}`}/>
            </button>
          </li>
          {after.map(navLink)}
        </ul>
        <a href={contactHref} className={styles.cta}>
          <span>{ctaLabel}</span><Icon name="arrow-up-right" size={17} className={styles.ctaIcon}/>
        </a>
      </nav>

      {panelOpen && <MenuPanel id="panel-services" menu={menu} onNavigate={closeAll} onEnter={openPanel} onLeave={closePanelSoon}/>}

      <button
        ref={toggleRef}
        type="button"
        className={styles.menuToggle}
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
      >
        <Icon name={mobileOpen ? 'x' : 'menu'} size={18}/>{mobileOpen ? 'Đóng' : 'Menu'}
      </button>

      {mobileOpen && (
        <nav id="mobile-menu" ref={mobileRef} className={styles.mobile} aria-label="Điều hướng chính">
          <ul className={styles.mobileList}>
            {before.map(link => <li key={link.key}><a className={styles.mobileItem} href={link.href} aria-current={activeNav === link.key ? 'page' : undefined} onClick={() => closeMobile(false)}>{link.label}</a></li>)}
            <li>
              <button type="button" className={styles.mobileItem} aria-expanded={mobileServices} aria-controls="mobile-services" onClick={() => setMobileServices(o => !o)}>
                {menu.label}<Icon name={mobileServices ? 'minus' : 'plus'} size={20}/>
              </button>
              {mobileServices && (
                <div id="mobile-services" className={styles.mobileSub}>
                  {menu.groups.map(({group, items}) => (
                    <div key={group}>
                      <p className={styles.panelGroup}>{group}</p>
                      <ul>{items.map(item => <li key={item.href}><a href={item.href} onClick={() => closeMobile(false)}>{item.title}</a></li>)}</ul>
                    </div>
                  ))}
                  <a className={styles.mobileAll} href={menu.allHref} onClick={() => closeMobile(false)}>{menu.allLabel}</a>
                </div>
              )}
            </li>
            {after.map(link => <li key={link.key}><a className={styles.mobileItem} href={link.href} aria-current={activeNav === link.key ? 'page' : undefined} onClick={() => closeMobile(false)}>{link.label}</a></li>)}
          </ul>
          <a href={contactHref} className={styles.mobileCta} onClick={() => closeMobile(false)}>{ctaLabel}</a>
        </nav>
      )}
    </div>
  );
}
