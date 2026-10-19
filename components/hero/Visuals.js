/*
  Minh họa SVG cho hero, mỗi trang một hình: nét xám làm nền, cam của logo cho phần chính (biến màu ở Hero.module.css).
  Chuyển động bằng CSS keyframes và animateMotion; prefers-reduced-motion thì dừng.
*/
import styles from './Hero.module.css';

// Dịch vụ: 9 ô dịch vụ, sáng lên luân phiên
export function ServicesVisual({labels = []}){
  // Dải rộng 4 cột × 3 hàng cho 12 dịch vụ, ô sáng lên luân phiên
  const cols = 4, w = 280, h = 104, gx = 24, gy = 20;
  return (
    <svg viewBox="0 0 1192 372" className={styles.svg} aria-hidden="true">
      {labels.slice(0, 12).map((label, i) => {
        const x = 8 + (i % cols) * (w + gx), y = 8 + Math.floor(i / cols) * (h + gy);
        return (
          <g key={label} className={styles.tile} style={{'--i': i}}>
            <rect x={x} y={y} width={w} height={h} rx="16" className={styles.tileBg}/>
            <circle cx={x + 26} cy={y + 30} r="8" className={styles.tileDot}/>
            <text x={x + 22} y={y + 78} className={styles.tileText}>{label}</text>
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
      <circle cx="760" cy="120" r="8" fill="#FFFFFF" stroke="#FF7A00" strokeWidth="3"/>
    </svg>
  );
}
