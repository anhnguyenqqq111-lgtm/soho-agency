'use client';
import {useEffect, useState} from 'react';
import styles from './BlogToc.module.css';

/*
  Mục lục "Trong bài này" cho bài blog: danh sách H2 đánh số, mục đang đọc được tô sáng, kèm phần trăm đã đọc của thân bài.
  Desktop: cột trái dính theo khi cuộn. Mobile: ô thu gọn ở đầu bài. Không có JS vẫn là danh sách link neo bình thường.
  targetId: id của khối thân bài để tính phần trăm đã đọc.
*/
export default function BlogToc({items, targetId}) {
  const [active, setActive] = useState(items[0]?.id);
  const [read, setRead] = useState(0);

  useEffect(() => {
    const heads = items.map(item => document.getElementById(item.id)).filter(Boolean);
    const body = document.getElementById(targetId);
    let frame = 0;
    // Mục đang đọc: tiêu đề cuối cùng đã đi qua mốc 30% chiều cao màn hình (đúng cả khi bấm nhảy tới giữa bài).
    const update = () => {
      frame = 0;
      const mark = window.innerHeight * 0.3;
      let current = heads[0]?.id;
      for (const h of heads) {
        if (h.getBoundingClientRect().top <= mark) current = h.id;
        else break;
      }
      if (current) setActive(current);
      if (!body) return;
      const r = body.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      const done = Math.min(Math.max(-r.top + window.innerHeight * 0.4, 0), Math.max(total, 1));
      setRead(Math.round((done / Math.max(total, 1)) * 100));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items, targetId]);

  const list = (
    <ol className={styles.list}>
      {items.map((item, i) => (
        <li key={item.id}>
          <a href={`#${item.id}`} className={active === item.id ? styles.active : undefined} aria-current={active === item.id ? 'location' : undefined}>
            <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
            <span>{item.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  const head = (
    <div className={styles.head}>
      <span className={styles.label}>Trong bài này</span>
      <span className={styles.read}>{read}% đã đọc</span>
    </div>
  );

  return (
    <>
      <nav className={styles.desktop} aria-label="Trong bài này">
        {head}
        <div className={styles.bar} aria-hidden="true">
          <span style={{transform: `scaleX(${read / 100})`}} />
        </div>
        {list}
      </nav>
      <details className={styles.mobile}>
        <summary>{head}</summary>
        {list}
      </details>
    </>
  );
}
