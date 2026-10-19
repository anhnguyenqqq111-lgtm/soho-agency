'use client';
import {useEffect} from 'react';

// Gắn data-scrolled lên header khi trang đã cuộn quá 8px để CSS thêm bóng nhẹ. Không render gì.
export default function HeaderScroll(){
  useEffect(() => {
    const header = document.querySelector('[data-site-header]');
    if (!header) return;
    const onScroll = () => header.toggleAttribute('data-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return null;
}
