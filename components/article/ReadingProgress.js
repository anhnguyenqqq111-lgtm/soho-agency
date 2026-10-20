'use client';
import {useEffect, useRef} from 'react';
import styles from './ReadingProgress.module.css';

// Thanh tiến độ đọc ở mép trên màn hình cho bài dài (blog, trang dịch vụ). Cập nhật bằng transform, không gây reflow.
export default function ReadingProgress() {
  const bar = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className={styles.track} aria-hidden="true">
      <div ref={bar} className={styles.bar} />
    </div>
  );
}
