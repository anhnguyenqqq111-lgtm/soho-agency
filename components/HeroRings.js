import styles from './HeroRings.module.css';

/*
  Hình trang trí hero: dãy vòng nghiêng gradient vàng → cam → đỏ, thay cho vòng 3D xanh của GOHA.
  Thuần SVG, không ảnh.
*/
export default function HeroRings({className = ''}){
  const rings = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={`${styles.wrap} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 760 640" className={styles.svg}>
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FEBC01"/>
            <stop offset=".55" stopColor="#F26716"/>
            <stop offset="1" stopColor="#D2401A" stopOpacity=".2"/>
          </linearGradient>
          <radialGradient id="glow" cx=".5" cy=".5" r=".5">
            <stop offset="0" stopColor="#FEBC01" stopOpacity=".55"/>
            <stop offset="1" stopColor="#FEBC01" stopOpacity="0"/>
          </radialGradient>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="22"/></filter>
        </defs>
        <ellipse cx="470" cy="300" rx="300" ry="240" fill="url(#glow)" filter="url(#blur)"/>
        {rings.map(i => (
          <ellipse
            key={i}
            className={styles.ring}
            style={{'--i': i}}
            cx={330 + i * 48}
            cy={330 - i * 30}
            rx={210 - i * 6}
            ry={95 - i * 3}
            transform={`rotate(-38 ${330 + i * 48} ${330 - i * 30})`}
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth={i === 0 ? 14 : 10 - i * 0.6}
            strokeLinecap="round"
            opacity={1 - i * 0.09}
          />
        ))}
      </svg>
    </div>
  );
}
