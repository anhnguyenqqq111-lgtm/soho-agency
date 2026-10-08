import styles from './JourneyWorkflow.module.css';

/*
  Sơ đồ workflow kiểu n8n: nút = ô vuông bo góc có icon, nối bằng đường cong.
  Luồng: Khách tìm kiếm → 4 kênh song song, mỗi kênh đi qua 3 chặng → gộp (Merge) → Doanh thu.
  Mỗi nút ghi tên và dòng chỉ số bên dưới. Đường nối tự vẽ khi cuộn tới, điểm sáng chạy liên tục.
*/
const COLS = [130, 400, 650, 900];          // x của: nguồn, chặng 1, 2, 3
const MERGE_X = 1120, OUT_X = 1300;
const ROWS = [110, 245, 380, 515];           // y của 4 kênh
const LANES = [
  {key: 'seo', name: 'SEO và AI Search', color: '#C9391A', icon: 'search',
    steps: [['Visibility', 'Từ khóa, trích dẫn AI'], ['Lead organic', 'Form, gọi từ trang SEO'], ['Doanh thu organic', 'CAC theo kênh']]},
  {key: 'ads', name: 'Quảng cáo', color: '#F26716', icon: 'target',
    steps: [['Hiển thị', 'Đúng tệp, nhớ quảng cáo'], ['Lead đạt chuẩn', 'Bỏ truy vấn lãng phí'], ['CPA, ROAS', 'Lợi nhuận gộp']]},
  {key: 'content', name: 'Content', color: '#E8A800', icon: 'doc',
    steps: [['Traffic bài viết', 'Nhắc tên thương hiệu'], ['Lead từ nội dung', 'Tải tài liệu, đọc sâu'], ['Assisted conv.', 'Nội dung góp vào chốt']]},
  {key: 'data', name: 'Đo lường', color: '#8A8178', icon: 'chart',
    steps: [['Tracking', 'Đủ event, đúng nguồn'], ['Khớp số', 'Ads, GA4 và CRM'], ['Quyết định', 'Ngân sách theo kênh']]}
];
const STAGE_HEAD = ['01 · Được tìm thấy', '02 · Được chọn', '03 · Được tin, mua'];

const Icon = ({type}) => {
  switch (type){
    case 'search': return <path d="M15.5 15.5 20 20M3 10.5a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0z"/>;
    case 'target': return <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/></>;
    case 'doc': return <path d="M6 3h8l5 5v13H6zM14 3v5h5M9 12h7M9 16h7"/>;
    case 'chart': return <path d="M4 20h16M7 17V10M12 17V5M17 17v-7"/>;
    case 'user': return <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></>;
    case 'merge': return <path d="M4 6h5l6 6-6 6H4M15 12h5m-3-3 3 3-3 3"/>;
    case 'money': return <><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5h3.5a1.75 1.75 0 0 1 0 3.5H11a1.75 1.75 0 0 0 0 3.5h3.5"/></>;
    default: return null;
  }
};

function Node({x, y, label, sub, icon, color, w = 150, acc, d = 0}){
  return (
    <g className={styles.node} style={{'--d': `${d}ms`}}>
      <rect x={x - w / 2} y={y - 28} width={w} height={56} rx="12" className={`${styles.box} ${acc ? styles.boxAcc : ''}`} style={{'--c': color}}/>
      <g transform={`translate(${x - w / 2 + 14} ${y - 11})`} className={styles.icon} style={{'--c': color}}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><Icon type={icon}/></svg></g>
      <text x={x - w / 2 + 44} y={y - 3} className={styles.label}>{label}</text>
      <text x={x - w / 2 + 44} y={y + 14} className={styles.sub}>{sub}</text>
      <circle cx={x - w / 2} cy={y} r="4" className={styles.port}/>
      <circle cx={x + w / 2} cy={y} r="4" className={styles.port}/>
    </g>
  );
}

const curve = (x1, y1, x2, y2) => `M${x1} ${y1} C ${x1 + (x2 - x1) * .5} ${y1}, ${x1 + (x2 - x1) * .5} ${y2}, ${x2} ${y2}`;

export default function JourneyWorkflow(){
  const W = 190;
  const edges = [];
  // nguồn -> 4 kênh (chặng 1)
  LANES.forEach((ln, r) => edges.push({d: curve(COLS[0] + 75, 300, COLS[1] - W / 2, ROWS[r]), c: ln.color, k: `s${r}`}));
  // chặng 1 -> 2 -> 3
  LANES.forEach((ln, r) => { for (let c = 1; c < 3; c++) edges.push({d: curve(COLS[c] + W / 2, ROWS[r], COLS[c + 1] - W / 2, ROWS[r]), c: ln.color, k: `l${r}${c}`}); });
  // chặng 3 -> merge
  LANES.forEach((ln, r) => edges.push({d: curve(COLS[3] + W / 2, ROWS[r], MERGE_X - 60, 300 + (r - 1.5) * 14), c: ln.color, k: `m${r}`}));
  edges.push({d: curve(MERGE_X + 60, 300, OUT_X - 85, 300), c: '#E8A800', k: 'out', acc: true});

  return (
    <figure className={styles.wrap} data-reveal="">
      <svg viewBox="0 0 1400 590" className={styles.svg} role="img" aria-labelledby="jw-t jw-d">
        <title id="jw-t">Sơ đồ hành trình khách hàng theo kênh</title>
        <desc id="jw-d">Khách tìm kiếm đi qua bốn kênh SEO, quảng cáo, content và đo lường, mỗi kênh có ba chặng: được tìm thấy, được chọn, được tin và mua; tất cả gộp lại thành doanh thu.</desc>
        <defs>
          <pattern id="jw-dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" className={styles.dotBg}/></pattern>
        </defs>
        <rect width="1400" height="590" fill="url(#jw-dots)"/>

        {/* Nhãn cột chặng */}
        {STAGE_HEAD.map((h, i) => <text key={h} x={COLS[i + 1]} y="28" className={styles.stageHead}>{h}</text>)}
        {STAGE_HEAD.map((h, i) => <line key={i} x1={COLS[i + 1] - W / 2 - 20} x2={COLS[i + 1] + W / 2 + 20} y1="40" y2="40" className={styles.stageRule}/>)}

        {/* Đường nối */}
        {edges.map((e, i) => (
          <g key={e.k}>
            <path d={e.d} className={styles.edgeBg}/>
            <path d={e.d} pathLength="1" className={`${styles.edge} ${e.acc ? styles.edgeAcc : ''}`} style={{'--c': e.c, '--d': `${i * 40}ms`}}/>
            <circle r="3.5" className={styles.runner} style={{'--c': e.c}}><animateMotion dur={`${4 + (i % 5) * .6}s`} begin={`${(i % 7) * .5}s`} repeatCount="indefinite" path={e.d}/></circle>
          </g>
        ))}

        {/* Nút */}
        <Node x={COLS[0]} y={300} w={170} label="Khách tìm kiếm" sub="Có nhu cầu, chưa biết bạn" icon="user" color="#E8A800" d={0}/>
        {LANES.map((ln, r) => ln.steps.map(([label, sub], c) => (
          <Node key={ln.key + c} x={COLS[c + 1]} y={ROWS[r]} label={label} sub={sub} icon={ln.icon} color={ln.color} d={300 + c * 250 + r * 60}/>
        )))}
        <Node x={MERGE_X} y={300} w={130} label="Gộp số liệu" sub="GA4 + CRM" icon="merge" color="#8A8178" d={1300}/>
        <Node x={OUT_X} y={300} w={170} label="Doanh thu" sub="Kênh nào mang về" icon="money" color="#E8A800" acc d={1600}/>

        {/* Nhãn kênh bên trái mỗi làn */}
        {LANES.map((ln, r) => (
          <g key={ln.key}>
            <circle cx={COLS[1] - W / 2 + 4} cy={ROWS[r] - 40} r="3.5" fill={ln.color}/>
            <text x={COLS[1] - W / 2 + 13} y={ROWS[r] - 36} className={styles.laneLabel}>{ln.name}</text>
          </g>
        ))}
      </svg>
      <figcaption className={styles.caption}>Bốn kênh chạy song song qua ba chặng. Mỗi nút là một chỉ số SOHO theo dõi, tất cả gộp về doanh thu.</figcaption>
    </figure>
  );
}
