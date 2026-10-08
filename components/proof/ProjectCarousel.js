'use client';
import {useEffect, useRef, useState} from 'react';
import styles from './ProjectCarousel.module.css';
import ImageSlot from '../ui/ImageSlot';
import Fill from '../ui/Fill';
import {sitePath} from '../paths';

/*
  Băng chuyền dự án: thẻ cuộn ngang theo scroll-snap, vuốt được trên mobile,
  nút trước/sau và chấm tiến trình đặt phía trên dãy thẻ. Không tự chạy.
*/
export default function ProjectCarousel({clients}){
  const trackRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => {
      const card = el.firstElementChild;
      if (!card) return;
      const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || 0);
      setPerView(Math.max(1, Math.round(el.clientWidth / step)));
      setIdx(Math.round(el.scrollLeft / step));
    };
    measure();
    el.addEventListener('scroll', measure, {passive: true});
    window.addEventListener('resize', measure);
    return () => { el.removeEventListener('scroll', measure); window.removeEventListener('resize', measure); };
  }, []);

  const pages = Math.max(1, clients.length - perView + 1);
  const go = n => {
    const el = trackRef.current; const card = el?.firstElementChild;
    if (!el || !card) return;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || 0);
    const target = Math.min(Math.max(n, 0), pages - 1);
    el.scrollTo({left: target * step, behavior: 'smooth'});
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        <ol className={styles.dots} aria-label="Vị trí">
          {Array.from({length: pages}).map((_, i) => (
            <li key={i}><button type="button" aria-label={`Trang ${i + 1}`} aria-current={i === idx} className={i === idx ? styles.on : ''} onClick={() => go(i)}/></li>
          ))}
        </ol>
        <div className={styles.arrows}>
          <button type="button" onClick={() => go(idx - 1)} disabled={idx <= 0} aria-label="Dự án trước">←</button>
          <button type="button" onClick={() => go(idx + 1)} disabled={idx >= pages - 1} aria-label="Dự án tiếp theo">→</button>
        </div>
      </div>
      <ul ref={trackRef} className={styles.track} aria-label="Dự án SOHO đang làm">
        {clients.map((c, i) => (
          <li key={c.slug} className={styles.card} data-reveal="" style={{'--reveal-delay': `${i * 90}ms`}}>
            <a href={sitePath(`/ket-qua#${c.slug}`)} className={styles.link}>
              <ImageSlot src={c.image} alt={`Dự án ${c.name}`} need={c.imageNeed} size="1200×900" ratio="4/3"/>
              <div className={styles.body}>
                <div className={styles.top}>
                  <img src={sitePath(c.logo)} alt="" className={styles.logo} loading="lazy"/>
                  <span className={styles.scope}>{c.scope}</span>
                </div>
                <h3 className={styles.name}>{c.name}</h3>
                <p className={styles.result}><Fill value={c.result} need="CẦN KẾT QUẢ THẬT, 1 dòng"/></p>
                <span className={styles.more}>Xem dự án ↗</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
