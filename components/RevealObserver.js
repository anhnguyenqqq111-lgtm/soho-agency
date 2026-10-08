'use client';
import {useEffect} from 'react';

// Gắn class is-in cho phần tử [data-reveal] khi cuộn tới. Không có JS thì nội dung vẫn hiện bình thường
// (CSS chỉ ẩn khi <html> có class js, được thêm bằng script nhỏ trong layout).
export default function RevealObserver(){
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]:not(.is-in)'));
    const show = el => el.classList.add('is-in');

    if (!('IntersectionObserver' in window)){
      els.forEach(show);
      return;
    }

    // Phần tử đã nằm trong màn hình lúc tải: hiện ngay, không chờ observer.
    const vh = window.innerHeight;
    const pending = [];
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) show(el);
      else pending.push(el);
    });

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          show(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, {rootMargin: '0px 0px -8% 0px', threshold: 0.08});
    pending.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
