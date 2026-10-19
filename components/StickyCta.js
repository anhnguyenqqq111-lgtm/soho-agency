'use client';
import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import styles from './StickyCta.module.css';
import Icon from './ui/Icon';

/*
  Thanh liên hệ cố định ở đáy màn hình, chỉ trên mobile (CSS ẩn từ 761px).
  Hiện sau khi cuộn qua hero; ẩn khi khối form #lien-he hoặc footer đang trong màn hình, và ở trang Liên hệ.
*/
export default function StickyCta({phone, contactHref}){
  const pathname = usePathname() || '';
  const [show, setShow] = useState(false);
  const onContact = /\/lien-he\/?$/.test(pathname);

  useEffect(() => {
    if (onContact) return;
    let blocked = false;
    const update = () => setShow(window.scrollY > 520 && !blocked);
    const targets = [document.getElementById('lien-he'), document.querySelector('footer')].filter(Boolean);
    const seen = new Set();
    const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      entries.forEach(e => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
      blocked = seen.size > 0;
      update();
    }) : null;
    targets.forEach(t => io && io.observe(t));
    window.addEventListener('scroll', update, {passive: true});
    update();
    return () => { window.removeEventListener('scroll', update); io && io.disconnect(); };
  }, [onContact]);

  if (onContact) return null;
  const tel = phone ? phone.replace(/\s/g, '') : null;
  return (
    <div className={`${styles.bar} ${show ? styles.on : ''}`} aria-hidden={!show} inert={!show}>
      {tel && <a href={`tel:${tel}`} className={styles.call}><Icon name="phone" size={18}/>Gọi</a>}
      <a href={contactHref} className={styles.cta}>Đặt lịch tư vấn</a>
    </div>
  );
}
