'use client';
import {useEffect, useRef, useState} from 'react';
import styles from './story.module.css';

/*
  Phần tương tác của trang dịch vụ kể chuyện. Mọi hiệu ứng tắt khi người dùng chọn giảm chuyển động,
  và nội dung vẫn đọc được đầy đủ khi không có JavaScript (render sẵn giá trị cuối).
*/
const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Ô tìm kiếm tự gõ lần lượt các truy vấn. queries: [{q, note}]
export function TypingSearch({queries}) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState(queries[0].q);
  const [still, setStill] = useState(true);

  useEffect(() => {
    if (reduced()) return undefined;
    setStill(false);
    let i = 0;
    let t;
    let cancelled = false;
    const run = () => {
      const q = queries[i].q;
      let n = 0;
      setIdx(i);
      const type = () => {
        if (cancelled) return;
        n += 1;
        setText(q.slice(0, n));
        if (n < q.length) t = setTimeout(type, 48 + Math.random() * 40);
        else t = setTimeout(erase, 1800);
      };
      const erase = () => {
        if (cancelled) return;
        n -= 3;
        if (n > 0) {
          setText(q.slice(0, n));
          t = setTimeout(erase, 22);
        } else {
          i = (i + 1) % queries.length;
          t = setTimeout(run, 260);
        }
      };
      setText('');
      t = setTimeout(type, 400);
    };
    t = setTimeout(run, 900);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [queries]);

  return (
    <div className={styles.search}>
      <div className={styles.searchBar} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <span className={styles.searchText}>
          {text}
          <i className={`${styles.caret} ${still ? styles.caretStill : ''}`} />
        </span>
      </div>
      <p className={styles.searchNote} aria-hidden="true">
        Người gõ câu này đang <b>{queries[idx].note}</b>
      </p>
      <ul className="visually-hidden">
        {queries.map(q => (
          <li key={q.q}>
            {q.q}: người tìm đang {q.note}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Số đếm lên khi cuộn tới. Render sẵn giá trị cuối để không có JS vẫn đúng.
export function CountUp({value, decimals = 0, duration = 1400}) {
  const ref = useRef(null);
  const [n, setN] = useState(value);
  const fmt = v => v.toLocaleString('vi-VN', {minimumFractionDigits: decimals, maximumFractionDigits: decimals});

  useEffect(() => {
    if (reduced() || !('IntersectionObserver' in window)) return undefined;
    const el = ref.current;
    let raf;
    const io = new IntersectionObserver(
      entries => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = now => {
          const p = Math.min(1, (now - start) / duration);
          const e = 1 - Math.pow(1 - p, 3);
          setN(value * e);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        setN(0);
        raf = requestAnimationFrame(tick);
      },
      {threshold: 0.6}
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="num">
      {fmt(n)}
    </span>
  );
}

// Đặt data-active = data-step của phần tử đang ở giữa màn hình, để CSS làm nổi nút tương ứng trên sơ đồ.
export function ScrollSteps({children, className = ''}) {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) root.dataset.active = e.target.dataset.step;
        });
      },
      {rootMargin: '-42% 0px -42% 0px', threshold: 0}
    );
    root.querySelectorAll('[data-step]').forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} data-active="0">
      {children}
    </div>
  );
}

// Đường kẻ dọc tô dần theo tiến độ cuộn qua phần cha (--p từ 0 tới 1).
export function ProgressLine({className = ''}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (reduced()) {
      el.style.setProperty('--p', 1);
      return undefined;
    }
    const parent = el.parentElement;
    let raf;
    const update = () => {
      const r = parent.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.72 - r.top) / r.height));
      el.style.setProperty('--p', p.toFixed(3));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
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
  return <span ref={ref} className={className} aria-hidden="true" />;
}

// Kéo thanh để so hai bản (trước bên trái, sau bên phải). Thanh là input range nên dùng được bằng bàn phím.
export function CompareSlider({before, after, beforeLabel = 'Trước', afterLabel = 'Sau'}) {
  const [x, setX] = useState(50);
  return (
    <div className={styles.compare} style={{'--x': `${x}%`}}>
      <div className={styles.compareLayer}>
        {before}
        <span className={`${styles.compareTag} ${styles.compareTagBefore}`}>{beforeLabel}</span>
      </div>
      <div className={`${styles.compareLayer} ${styles.compareAfter}`} aria-hidden="true">
        {after}
        <span className={`${styles.compareTag} ${styles.compareTagAfter}`}>{afterLabel}</span>
      </div>
      <div className={styles.compareHandle} aria-hidden="true">
        <span />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={x}
        onChange={e => setX(Number(e.target.value))}
        className={styles.compareInput}
        aria-label={`Kéo để so sánh ${beforeLabel} và ${afterLabel}`}
      />
      <div className="visually-hidden">{after}</div>
    </div>
  );
}
