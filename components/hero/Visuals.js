/*
  Minh họa SVG lớn cho hero, mỗi trang một hình, mỗi hình một phối màu (đặt ở Hero.module.css).
  Chuyển động bằng CSS keyframes và animateMotion; prefers-reduced-motion thì dừng.
*/
import styles from './Hero.module.css';

const CURVE = 'M80 420 C 300 400, 380 330, 520 300 S 800 220, 1060 80';

// Trang chủ: đường tăng trưởng, điểm sáng chạy dọc đường, vệ tinh xoay quanh đích
export function HomeVisual(){
  const pts = [[80, 420], [260, 390], [420, 330], [580, 290], [740, 210], [900, 160], [1060, 80]];
  return (
    <svg viewBox="0 0 1140 480" className={styles.svg} aria-hidden="true">
      <defs>
        <linearGradient id="hv-line" x1="0" x2="1"><stop offset="0" stopColor="#E8A800"/><stop offset="1" stopColor="#C9391A"/></linearGradient>
        <radialGradient id="hv-glow"><stop offset="0" stopColor="#F26716" stopOpacity=".55"/><stop offset="1" stopColor="#F26716" stopOpacity="0"/></radialGradient>
      </defs>
      {[0, 1, 2, 3, 4].map(i => <line key={i} x1="0" x2="1140" y1={60 + i * 95} y2={60 + i * 95} className={styles.grid}/>)}
      <path d={CURVE} className={styles.curveShadow}/>
      <path d={CURVE} className={`${styles.curve} ${styles.draw}`} pathLength="1"/>
      {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" className={styles.node} style={{'--i': i}}/>)}
      <circle r="60" fill="url(#hv-glow)"><animateMotion dur="7s" repeatCount="indefinite" path={CURVE}/></circle>
      <circle r="9" fill="#FFFFFF" stroke="#C9391A" strokeWidth="3"><animateMotion dur="7s" repeatCount="indefinite" path={CURVE}/></circle>
      <g className={styles.orbit} style={{transformOrigin: '1060px 80px'}}>
        <circle cx="1060" cy="80" r="46" className={styles.orbitRing}/>
        <circle cx="1106" cy="80" r="6" fill="#E8A800"/>
      </g>
      <g className={styles.orbitSlow} style={{transformOrigin: '1060px 80px'}}>
        <circle cx="1060" cy="80" r="76" className={styles.orbitRing}/>
        <circle cx="1060" cy="4" r="5" fill="#F26716"/>
      </g>
      <text x="80" y="460" className={styles.axisLabel}>Tháng 1</text>
      <text x="1060" y="460" className={`${styles.axisLabel} ${styles.end}`}>Tháng 12</text>
    </svg>
  );
}

// Dịch vụ: 9 ô dịch vụ, sáng lên luân phiên
export function ServicesVisual({labels = []}){
  const cols = 3;
  return (
    <svg viewBox="0 0 900 540" className={styles.svg} aria-hidden="true">
      <path d="M180 170 L180 200 M450 170 L450 200 M720 170 L720 200 M180 330 L180 360 M450 330 L450 360 M720 330 L720 360" className={styles.tileLink}/>
      {labels.slice(0, 9).map((label, i) => {
        const x = 60 + (i % cols) * 270, y = 40 + Math.floor(i / cols) * 160;
        return (
          <g key={label} className={styles.tile} style={{'--i': i}}>
            <rect x={x} y={y} width="240" height="130" rx="18" className={styles.tileBg}/>
            <circle cx={x + 32} cy={y + 34} r="10" className={styles.tileDot}/>
            <text x={x + 24} y={y + 92} className={styles.tileText}>{label}</text>
          </g>
        );
      })}
    </svg>
  );
}

// Giải pháp: 4 lớp chồng lên nhau, nổi nhẹ
export function SolutionsVisual(){
  const labels = ['Kênh', 'Thông điệp', 'Dữ liệu', 'Mô hình kinh doanh'];
  return (
    <svg viewBox="0 0 900 540" className={styles.svg} aria-hidden="true">
      {[0, 1, 2, 3].map(i => (
        <g key={i} className={styles.layer} style={{'--i': i}}>
          <path d={`M450 ${430 - i * 72} L 700 ${330 - i * 72} L 450 ${230 - i * 72} L 200 ${330 - i * 72} Z`} className={i === 3 ? styles.layerTop : styles.layerBody}/>
          <text x="730" y={336 - i * 72} className={styles.sideLabel}>{labels[i]}</text>
        </g>
      ))}
      <circle cx="450" cy="160" r="14" className={styles.pulse}/>
    </svg>
  );
}

// Kết quả: cột mọc lên và đường doanh thu tự vẽ
export function ResultsVisual(){
  const bars = [120, 160, 150, 210, 240, 230, 290, 330, 320, 380, 410, 460];
  return (
    <svg viewBox="0 0 1140 520" className={styles.svg} aria-hidden="true">
      {[0, 1, 2, 3].map(i => <line key={i} x1="40" x2="1100" y1={100 + i * 100} y2={100 + i * 100} className={styles.grid}/>)}
      {bars.map((h, i) => (
        <rect key={i} x={70 + i * 86} y={500 - h} width="52" height={h} rx="8" className={styles.bar} style={{'--i': i, transformOrigin: `${96 + i * 86}px 500px`}}/>
      ))}
      <path d={`M96 ${500 - 90} ${bars.map((h, i) => `L${96 + i * 86} ${500 - h - 40}`).join(' ')}`} className={`${styles.resultLine} ${styles.draw}`} pathLength="1"/>
      <circle cx={96 + 11 * 86} cy={500 - 460 - 40} r="10" className={styles.pulse}/>
    </svg>
  );
}

// Blog: trang giấy xếp lớp, dòng chữ chạy ra
export function BlogVisual(){
  const widths = [260, 360, 300, 340, 220, 330, 180];
  return (
    <svg viewBox="0 0 900 540" className={styles.svg} aria-hidden="true">
      {[2, 1, 0].map(i => (
        <g key={i} className={styles.page} style={{'--i': i}}>
          <rect x={230 + i * 40} y={60 - i * 20} width="440" height="440" rx="20" className={styles.pageBg}/>
          {i === 0 && widths.map((w, k) => (
            <rect key={k} x="270" y={120 + k * 44} width={w} height={k === 0 ? 18 : 10} rx="5" className={`${styles.textLine} ${k === 0 ? styles.textTitle : ''}`} style={{'--k': k}}/>
          ))}
        </g>
      ))}
      <circle cx="250" cy="430" r="26" className={styles.pulse}/>
    </svg>
  );
}

// Về SOHO: hai vòng giao nhau, chấm xoay quanh
export function AboutVisual(){
  return (
    <svg viewBox="0 0 900 540" className={styles.svg} aria-hidden="true">
      <circle cx="380" cy="270" r="180" className={styles.ringA}/>
      <circle cx="520" cy="270" r="180" className={styles.ringB}/>
      <path d="M450 128 A180 180 0 0 1 450 412 A180 180 0 0 1 450 128 Z" className={styles.lens}/>
      <g className={styles.orbitSlow} style={{transformOrigin: '380px 270px'}}>
        {[0, 1, 2, 3].map(i => <circle key={i} cx={380 + 180 * Math.cos(i * Math.PI / 2)} cy={270 + 180 * Math.sin(i * Math.PI / 2)} r="9" fill="#C9391A"/>)}
      </g>
      <g className={styles.orbit} style={{transformOrigin: '520px 270px'}}>
        {[0, 1, 2].map(i => <circle key={i} cx={520 + 180 * Math.cos(i * 2 * Math.PI / 3)} cy={270 + 180 * Math.sin(i * 2 * Math.PI / 3)} r="9" fill="#E8A800"/>)}
      </g>
      <text x="300" y="275" className={`${styles.sideLabel} ${styles.mid}`}>SOHO</text>
      <text x="600" y="275" className={`${styles.sideLabel} ${styles.mid}`}>Khách hàng</text>
    </svg>
  );
}

// Liên hệ: sóng tín hiệu toả ra, một tia nối tới điểm đích
export function ContactVisual(){
  return (
    <svg viewBox="0 0 900 540" className={styles.svg} aria-hidden="true">
      {[0, 1, 2, 3, 4].map(i => <circle key={i} cx="450" cy="270" r={60 + i * 70} className={styles.wave} style={{'--i': i}}/>)}
      <circle cx="450" cy="270" r="26" className={styles.pulse}/>
      <path d="M450 270 L 760 120" className={`${styles.beam} ${styles.draw}`} pathLength="1"/>
      <circle cx="760" cy="120" r="8" fill="#FFFFFF" stroke="#C9391A" strokeWidth="3"/>
    </svg>
  );
}
