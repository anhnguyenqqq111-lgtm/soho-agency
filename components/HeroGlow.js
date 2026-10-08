import styles from './HeroGlow.module.css';

/*
  Hình nền hero: vầng sáng ấm ở góc dưới phải và các đường chân trời mảnh toả ra.
  Thuần CSS và SVG, không ảnh, không vòng 3D.
*/
export default function HeroGlow({className = ''}){
  const lines = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className={`${styles.wrap} ${className}`} aria-hidden="true">
      <div className={styles.glow}/>
      <svg viewBox="0 0 1200 600" className={styles.svg} preserveAspectRatio="xMaxYMax slice">
        <defs>
          <linearGradient id="hz" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FEBC01" stopOpacity="0"/>
            <stop offset=".6" stopColor="#F26716" stopOpacity=".55"/>
            <stop offset="1" stopColor="#FEBC01" stopOpacity=".9"/>
          </linearGradient>
        </defs>
        {lines.map(i => (
          <path
            key={i}
            className={styles.line}
            style={{'--i': i}}
            d={`M-50 ${560 - i * 58} Q 700 ${520 - i * 70} 1250 ${300 - i * 40}`}
            pathLength="1"
            fill="none"
            stroke="url(#hz)"
            strokeWidth={i === 0 ? 2 : 1.25}
          />
        ))}
      </svg>
    </div>
  );
}
