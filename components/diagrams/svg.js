/*
  Các hình cơ bản cho sơ đồ. Mọi nét có pathLength="1" để hiệu ứng tự vẽ chạy đúng.
  d: độ trễ (ms) của hiệu ứng.
*/
const delay = d => ({'--d': `${d}ms`});

export function Figure({id, title, desc, caption, viewBox, children, bleed = false, card = false}){
  return (
    <figure className={`dg ${bleed ? 'bleed' : ''} ${card ? 'card' : ''}`} data-reveal="draw">
      <svg viewBox={viewBox} role="img" aria-labelledby={`${id}-t ${id}-d`}>
        <title id={`${id}-t`}>{title}</title>
        <desc id={`${id}-d`}>{desc}</desc>
        {children}
      </svg>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export const L = ({x1, y1, x2, y2, d = 0, c = ''}) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} pathLength="1" className={`ln ${c}`} style={delay(d)}/>
);

export const P = ({path, d = 0, c = ''}) => (
  <path d={path} pathLength="1" className={`ln ${c}`} style={delay(d)}/>
);

export const C = ({cx, cy, r, d = 0, c = 'fill'}) => (
  <circle cx={cx} cy={cy} r={r} pathLength="1" className={`ln ${c}`} style={delay(d)}/>
);

export const R = ({x, y, w, h, d = 0, c = 'fill'}) => (
  <rect x={x} y={y} width={w} height={h} pathLength="1" className={`ln ${c}`} style={delay(d)}/>
);

export const T = ({x, y, children, d = 0, c = ''}) => (
  <text x={x} y={y} className={`tx fd ${c}`} style={delay(d)}>{children}</text>
);

// Chữ nhiều dòng, mỗi dòng cách nhau lh
export const TL = ({x, y, lines, lh = 19, d = 0, c = ''}) => (
  <text x={x} y={y} className={`tx fd ${c}`} style={delay(d)}>
    {lines.map((line, i) => <tspan key={i} x={x} dy={i === 0 ? 0 : lh}>{line}</tspan>)}
  </text>
);

export const Dot = ({cx, cy, r = 4, d = 0, acc = false}) => (
  <circle cx={cx} cy={cy} r={r} className={`fd ${acc ? 'dotAcc' : 'dot'}`} style={delay(d)}/>
);

// Mũi tên thẳng: thân + đầu, đầu vẽ sau thân
export function Arrow({x1, y1, x2, y2, d = 0, c = '', size = 8}){
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h1x = x2 - size * Math.cos(a - 0.45), h1y = y2 - size * Math.sin(a - 0.45);
  const h2x = x2 - size * Math.cos(a + 0.45), h2y = y2 - size * Math.sin(a + 0.45);
  const f = n => Math.round(n * 10) / 10;
  return (
    <>
      <L x1={x1} y1={y1} x2={x2} y2={y2} d={d} c={c}/>
      <P path={`M${f(h1x)} ${f(h1y)} L${x2} ${y2} L${f(h2x)} ${f(h2y)}`} d={d + 900} c={c}/>
    </>
  );
}
