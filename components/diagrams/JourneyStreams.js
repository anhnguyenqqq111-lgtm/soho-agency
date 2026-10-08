import styles from './JourneyStreams.module.css';

/*
  "Dòng chảy kênh": 4 dải màu (4 kênh) chạy từ trái sang phải qua 3 chặng.
  Qua mỗi chặng dải hẹp lại (ý phễu của GOHA) và tới chặng 3 thì hội tụ thành một dòng về Doanh thu
  (ý gộp luồng của workflow). Chỉ số ghi ngay trên dải; không icon, không ô nút.
*/
const LANES = [
  {key: 'seo', name: 'SEO và AI Search', color: '#C9391A', steps: ['Visibility nhóm từ khóa, trích dẫn AI', 'Lead từ trang organic', 'Doanh thu organic']},
  {key: 'ads', name: 'Quảng cáo', color: '#F26716', steps: ['Hiển thị đúng tệp', 'Lead đạt chuẩn, bỏ truy vấn lãng phí', 'CPA, ROAS, lợi nhuận gộp']},
  {key: 'content', name: 'Content', color: '#E8A800', steps: ['Traffic bài viết, nhắc tên', 'Lead có chạm nội dung', 'Assisted conversion']},
  {key: 'data', name: 'Đo lường', color: '#8A8178', steps: ['Tracking đủ event', 'Số liệu khớp Ads, GA4, CRM', 'Quyết định ngân sách']}
];
const STAGES = [
  {num: '01', name: 'Được tìm thấy', owner: 'Marketing', q: 'Khách hỏi: “Có ai giải được việc này không?”'},
  {num: '02', name: 'Được chọn', owner: 'Marketing', q: 'Khách hỏi: “Bên nào đáng tin hơn?”'},
  {num: '03', name: 'Được tin, mua', owner: 'Sales', q: 'Khách hỏi: “Mua thì được gì, bao nhiêu?”'}
];

// Hình học: x của 3 chặng, dải bắt đầu cao 56, hẹp dần 56 → 40 → 24, hội tụ về y=310 ở đích.
const X = [150, 510, 870, 1230];
const H = [56, 46, 36];
const GAP = [28, 20, 12];
const END_X = 1300, CY = 300;
const laneY = (lane, stage) => {
  const n = LANES.length, h = H[stage], g = GAP[stage];
  const total = n * h + (n - 1) * g;
  return CY - total / 2 + lane * (h + g);
};
// Hình dải: từ x1 (cao h1, tâm y1) sang x2 (cao h2, tâm y2), cạnh cong
function band(x1, y1, h1, x2, y2, h2){
  const cx = (x1 + x2) / 2;
  const t1 = y1 - h1 / 2, b1 = y1 + h1 / 2, t2 = y2 - h2 / 2, b2 = y2 + h2 / 2;
  return `M${x1} ${t1} C ${cx} ${t1}, ${cx} ${t2}, ${x2} ${t2} L${x2} ${b2} C ${cx} ${b2}, ${cx} ${b1}, ${x1} ${b1} Z`;
}

export default function JourneyStreams(){
  const segs = [];
  LANES.forEach((ln, i) => {
    for (let s = 0; s < 3; s++){
      const x2 = s < 2 ? X[s + 1] : X[3];
      const y2 = s < 2 ? laneY(i, s + 1) : laneY(i, 2);
      const h2 = s < 2 ? H[s + 1] : H[2];
      segs.push({d: band(X[s], laneY(i, s), H[s], x2, y2, h2), c: ln.color, k: `${ln.key}${s}`});
    }
    segs.push({d: band(X[3], laneY(i, 2), H[2], END_X, CY + (i - 1.5) * 12, 12), c: ln.color, k: `${ln.key}end`});
  });
  return (
    <figure className={styles.wrap}>
      <svg viewBox="0 0 1460 500" className={styles.svg} role="img" aria-labelledby="js-t js-d">
        <title id="js-t">Bốn kênh chạy qua ba chặng và gộp về doanh thu</title>
        <desc id="js-d">SEO, quảng cáo, content và đo lường chạy song song qua ba chặng được tìm thấy, được chọn, được tin và mua, thu hẹp dần rồi hội tụ về doanh thu.</desc>

        {/* Cột chặng: tiêu đề + phụ trách + câu khách hỏi */}
        {STAGES.map((st, s) => (
          <g key={st.num}>
            <rect x={X[s] + 40} y="24" width={X[s + 1] - X[s] - 80} height="2" fill={s === 2 ? '#C9391A' : '#E4DED3'}/>
            <text x={X[s] + 40} y="54" className={styles.stNum}>{st.num}</text>
            <text x={X[s] + 72} y="54" className={styles.stName}>{st.name}</text>
            <text x={X[s] + 40} y="76" className={styles.stQ}>{st.q}</text>
            <text x={X[s + 1] - 40} y="54" className={`${styles.stOwner} ${s === 2 ? styles.stOwnerSales : ''}`}>{st.owner}</text>
          </g>
        ))}

        {/* Dải kênh */}
        {segs.map(sg => <path key={sg.k} d={sg.d} fill={sg.c} className={styles.band}/>)}

        {/* Nhãn kênh đầu dải và chỉ số trên từng đoạn */}
        {LANES.map((ln, i) => (
          <g key={ln.key}>
            <text x={X[0] - 14} y={laneY(i, 0) + 5} className={styles.lane} fill={ln.color}>{ln.name}</text>
            {ln.steps.map((txt, s) => {
              const xm = (X[s] + X[s + 1]) / 2;
              const ym = s < 2 ? (laneY(i, s) + laneY(i, s + 1)) / 2 : laneY(i, 2);
              return <text key={s} x={xm} y={ym + 4} className={`${styles.metric} ${styles.metricIn}`}>{txt}</text>;
            })}
          </g>
        ))}

        {/* Đích */}
        <rect x={END_X} y={CY - 44} width="150" height="88" rx="14" className={styles.goal}/>
        <text x={END_X + 75} y={CY - 6} className={styles.goalT}>Doanh thu</text>
        <text x={END_X + 75} y={CY + 14} className={styles.goalS}>Kênh nào mang về</text>
        <text x={END_X + 75} y={CY + 30} className={styles.goalS}>bao nhiêu</text>

        {/* Nguồn */}
        <text x={X[0] - 14} y={laneY(0, 0) - 52} className={styles.src}>Khách tìm kiếm</text>
        <text x={X[0] - 14} y={laneY(0, 0) - 36} className={styles.srcS}>có nhu cầu, chưa biết bạn</text>
      </svg>
      <figcaption className={styles.caption}>Mỗi dải là một kênh. Dải hẹp dần vì chỉ một phần khách đi tiếp, và tới cuối chỉ còn một con số: doanh thu.</figcaption>
    </figure>
  );
}
