import styles from './JourneyMatrix.module.css';

/*
  Ma trận chặng × kênh theo format GOHA: hàng là 3 chặng (phễu mũi tên bên trái, nhãn Marketing/Sales dọc),
  cột là 4 kênh. Ý "dòng chảy kênh" thể hiện bằng dải màu chạy dọc theo cột kênh, hẹp dần qua từng chặng,
  chỉ số ghi trong ô. Không icon, không hiệu ứng.
*/
const CHANNELS = [
  {name: 'SEO và AI Search', color: '#C9391A'},
  {name: 'Quảng cáo', color: '#F26716'},
  {name: 'Content', color: '#E8A800'},
  {name: 'Đo lường', color: '#8A8178'}
];
const STAGES = [
  {code: 'TOFU', name: 'Được tìm thấy', sub: 'Nhận biết', owner: 'Marketing',
    cells: [['Visibility nhóm từ khóa', 'Trích dẫn trên AI Overview'], ['Hiển thị đúng tệp', 'Tỉ lệ nhớ quảng cáo'], ['Traffic bài viết', 'Nhắc tên thương hiệu'], ['Tracking đủ event', 'Nguồn traffic đúng']]},
  {code: 'MOFU', name: 'Được chọn', sub: 'Cân nhắc', owner: 'Marketing',
    cells: [['Lead từ trang organic'], ['Lead đạt chuẩn', 'Truy vấn lãng phí'], ['Lead có chạm nội dung', 'Tải tài liệu'], ['Số liệu khớp Ads và CRM']]},
  {code: 'BOFU', name: 'Được tin, mua', sub: 'Quyết định', owner: 'Sales',
    cells: [['Doanh thu nguồn organic'], ['CPA, ROAS', 'Lợi nhuận gộp'], ['Assisted conversion'], ['Quyết định ngân sách theo kênh']]}
];
const WIDTH = ['100%', '86%', '72%'];   // dải hẹp dần theo chặng

export default function JourneyMatrix(){
  return (
    <div className={styles.wrap}>
      <div className={styles.matrix}>
        {/* Header */}
        <div className={styles.corner}><span>Mục tiêu</span><span>Chặng hành trình</span></div>
        {CHANNELS.map(c => (
          <div key={c.name} className={styles.chHead}><span className={styles.chDot} style={{background: c.color}}/>{c.name}</div>
        ))}

        {/* Hàng chặng */}
        {STAGES.map((st, i) => (
          <div key={st.code} className={styles.row} style={{'--w': WIDTH[i]}}>
            <div className={`${styles.goal} ${i === 2 ? styles.goalSales : ''} ${i === 1 ? styles.goalMid : ''}`}>
              <span>{st.owner}</span>
            </div>
            <div className={`${styles.stage} ${styles['s' + i]}`}>
              <span className={styles.code}>{st.code}</span>
              <strong>{st.name}</strong>
              <span className={styles.sub}>{st.sub}</span>
            </div>
            {CHANNELS.map((c, j) => (
              <div key={c.name} className={styles.cell}>
                <div className={styles.band} style={{background: c.color}}>
                  {st.cells[j].map(it => <span key={it}>{it}</span>)}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Đích */}
        <div className={styles.corner}/>
        <div className={styles.dest}>Tất cả gộp về một con số: <strong>doanh thu theo kênh</strong></div>
      </div>

      {/* Mobile */}
      <ol className={styles.cards}>
        {STAGES.map((st, i) => (
          <li key={st.code} className={styles.card}>
            <div className={`${styles.stage} ${styles['s' + i]} ${styles.stageMobile}`}>
              <span className={styles.code}>{st.code}</span>
              <strong>{st.name}</strong>
              <span className={styles.sub}>{st.sub} · {st.owner} phụ trách</span>
            </div>
            <ul className={styles.cardList}>
              {CHANNELS.map((c, j) => (
                <li key={c.name}>
                  <p className={styles.cardCh}><span className={styles.chDot} style={{background: c.color}}/>{c.name}</p>
                  <div className={styles.band} style={{background: c.color}}>{st.cells[j].map(it => <span key={it}>{it}</span>)}</div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
