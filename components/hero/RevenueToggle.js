'use client';
import {useEffect, useRef, useState} from 'react';
import styles from './RevenueToggle.module.css';

/*
  Hero trang chủ: công tắc "Đo bằng traffic / Đo bằng doanh thu".
  Traffic: lượt truy cập tăng nhưng doanh thu đi ngang (cách đo phổ biến).
  Doanh thu: doanh thu tăng theo kênh (cách SOHO đo).
  Mở ở chế độ traffic, tự chuyển sang doanh thu sau 3 giây một lần (nếu người xem chưa bấm).
  Giảm chuyển động: mở thẳng ở chế độ doanh thu, không tự chuyển.
*/
const X = [80, 243, 407, 570, 733, 897, 1060];
const DATA = {
  traffic: {
    traffic: [400, 352, 300, 246, 196, 140, 92],
    revenue: [410, 404, 408, 398, 402, 396, 392],
    tag: 'Lượt truy cập tăng, doanh thu đứng yên',
    caption: 'Đo bằng lượt truy cập: lượt truy cập tăng nhưng doanh thu gần như không đổi.'
  },
  revenue: {
    traffic: [384, 366, 346, 326, 306, 290, 276],
    revenue: [420, 392, 336, 292, 214, 160, 84],
    tag: 'Doanh thu tăng theo từng kênh',
    caption: 'Đo bằng doanh thu: mỗi kênh được tối ưu theo doanh thu nên đường doanh thu đi lên.'
  }
};

// Đường cong mượt qua các điểm (Catmull-Rom sang Bezier)
function smooth(ys){
  const p = X.map((x, i) => [x, ys[i]]);
  let d = `M${p[0][0]} ${p[0][1]}`;
  for (let i = 0; i < p.length - 1; i++){
    const p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)}, ${c2[0].toFixed(1)} ${c2[1].toFixed(1)}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

export default function RevenueToggle(){
  const [mode, setMode] = useState('traffic');
  const touched = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce){ setMode('revenue'); return; }
    const t = setTimeout(() => { if (!touched.current) setMode('revenue'); }, 3000);
    return () => clearTimeout(t);
  }, []);

  const pick = m => { touched.current = true; setMode(m); };
  const d = DATA[mode];
  const rev = smooth(d.revenue);
  const end = [X[6], d.revenue[6]];

  return (
    <figure className={styles.wrap}>
      <div className={styles.switch} role="group" aria-label="Chọn cách đo">
        <button type="button" aria-pressed={mode === 'traffic'} className={mode === 'traffic' ? styles.on : ''} onClick={() => pick('traffic')}>Đo bằng lượt truy cập</button>
        <button type="button" aria-pressed={mode === 'revenue'} className={mode === 'revenue' ? styles.on : ''} onClick={() => pick('revenue')}>Đo bằng doanh thu</button>
      </div>

      <svg viewBox="0 0 1140 480" className={styles.svg} aria-hidden="true">
        <defs>
          <linearGradient id="rt-line" x1="0" x2="1"><stop offset="0" stopColor="#FF7A00"/><stop offset=".55" stopColor="#FF416C"/><stop offset="1" stopColor="#765BFF"/></linearGradient>
          <linearGradient id="rt-area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#FF416C" stopOpacity=".2"/><stop offset="1" stopColor="#765BFF" stopOpacity="0"/></linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map(i => <line key={i} x1="0" x2="1140" y1={60 + i * 95} y2={60 + i * 95} className={styles.grid}/>)}

        <g key={mode} className={styles.lines}>
          <path d={`${rev} L1060 440 L80 440 Z`} fill="url(#rt-area)" className={`${styles.area} ${mode === 'traffic' ? styles.areaFlat : ''}`}/>
          <path d={smooth(d.traffic)} className={styles.traffic} pathLength="1"/>
          <path d={rev} className={styles.revenue} pathLength="1"/>
          <circle cx={end[0]} cy={end[1]} r="9" className={mode === 'revenue' ? styles.pulse : styles.dotFlat}/>
          <g className={styles.tag} transform={`translate(${mode === 'revenue' ? 760 : 660} ${mode === 'revenue' ? 14 : 300})`}>
            <rect width={mode === 'revenue' ? 300 : 400} height="44" rx="12" className={mode === 'revenue' ? styles.tagHot : styles.tagCold}/>
            <text x={mode === 'revenue' ? 150 : 200} y="28" className={styles.tagText}>{d.tag}</text>
          </g>
        </g>

        <text x="80" y="466" className={styles.axis}>Tháng 1</text>
        <text x="1060" y="466" className={`${styles.axis} ${styles.end}`}>Tháng 12</text>
      </svg>

      <figcaption className={styles.legend}>
        <span><i className={styles.keyTraffic}/>Lượt truy cập</span>
        <span><i className={styles.keyRevenue}/>Doanh thu</span>
        <span className="visually-hidden" aria-live="polite">{d.caption}</span>
      </figcaption>
    </figure>
  );
}
