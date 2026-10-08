'use client';
import {useEffect, useRef, useState} from 'react';
import styles from './Header.module.css';

const MENU_KEYS = ['services', 'solutions'];

function MenuPanel({id, menu, onNavigate}){
  return (
    <div id={id} className={styles.panel} style={{'--cols': menu.groups.length, '--panel-w': menu.groups.length === 3 ? '1040px' : '800px'}}>
      <div className={styles.panelInner}>
        {menu.groups.map(({group, items}, gi) => (
          <div key={group} className={styles.panelCol}>
            <p className={styles.panelGroup}><span>{String(gi + 1).padStart(2, '0')}</span>{group}</p>
            <ul className={styles.panelList}>
              {items.map(item => (
                <li key={item.href}><a href={item.href} onClick={onNavigate}>{item.title}<span aria-hidden="true">→</span></a></li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.panelSide}>
          <p className={styles.panelSideTitle}>{menu.sideTitle}</p>
          <p className={styles.panelSideText}>{menu.sideText}</p>
          <a href={menu.allHref} onClick={onNavigate} className={styles.panelAll}>{menu.allLabel}<span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  );
}

export default function NavMenu({activeNav, menus, links, contactHref}){
  const [openPanel, setOpenPanel] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const rootRef = useRef(null);
  const closeAll = () => { setOpenPanel(null); setMobileOpen(false); };

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') closeAll(); };
    const onClick = e => { if (rootRef.current && !rootRef.current.contains(e.target)) setOpenPanel(null); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Thứ tự: Giới thiệu, Dịch vụ, Giải pháp, Dự án, Blog, Liên hệ
  const first = links.filter(l => l.first);
  const rest = links.filter(l => !l.first);
  const renderLink = link => (
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
          {first.map(renderLink)}
          {MENU_KEYS.map(key => {
            const isOpen = openPanel === key;
            return (
              <li key={key}>
                <button type="button" className={`${styles.navItem} ${activeNav === key ? styles.active : ''}`} aria-expanded={isOpen} aria-controls={`panel-${key}`} onClick={() => setOpenPanel(isOpen ? null : key)}>
                  {menus[key].label}
                  <span className={`${styles.caret} ${isOpen ? styles.caretOpen : ''}`} aria-hidden="true"/>
                </button>
              </li>
            );
          })}
          {rest.map(renderLink)}
        </ul>
        <a href={contactHref} className={styles.cta}>
          <span>Liên hệ ngay</span><span className={styles.ctaIcon} aria-hidden="true">→</span>
        </a>
      </nav>

      {openPanel && <MenuPanel id={`panel-${openPanel}`} menu={menus[openPanel]} onNavigate={closeAll}/>}

      <button type="button" className={styles.menuToggle} aria-expanded={mobileOpen} aria-controls="mobile-menu" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? 'Đóng' : 'Menu'}
      </button>

      {mobileOpen && (
        <nav id="mobile-menu" className={styles.mobile} aria-label="Điều hướng chính">
          <ul className={styles.mobileList}>
            {first.map(link => <li key={link.key}><a className={styles.mobileItem} href={link.href} onClick={closeAll}>{link.label}</a></li>)}
            {MENU_KEYS.map(key => {
              const isOpen = mobileGroup === key;
              return (
                <li key={key}>
                  <button type="button" className={styles.mobileItem} aria-expanded={isOpen} onClick={() => setMobileGroup(isOpen ? null : key)}>
                    {menus[key].label}<span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className={styles.mobileSub}>
                      {menus[key].groups.map(({group, items}) => (
                        <div key={group}>
                          <p className={styles.panelGroup}>{group}</p>
                          <ul>{items.map(item => <li key={item.href}><a href={item.href} onClick={closeAll}>{item.title}</a></li>)}</ul>
                        </div>
                      ))}
                      <a className={styles.mobileAll} href={menus[key].allHref} onClick={closeAll}>{menus[key].allLabel} ↗</a>
                    </div>
                  )}
                </li>
              );
            })}
            {rest.map(link => <li key={link.key}><a className={styles.mobileItem} href={link.href} onClick={closeAll}>{link.label}</a></li>)}
          </ul>
          <a href={contactHref} className={styles.mobileCta} onClick={closeAll}>Liên hệ ngay →</a>
        </nav>
      )}
    </div>
  );
}
