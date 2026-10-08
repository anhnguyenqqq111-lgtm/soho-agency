import styles from './JourneyMatrix.module.css';

/*
  Ba khối chặng xếp dọc, giữa các khối là mũi tên chỉ xuống.
  Mỗi khối: nhãn Marketing/Sales dọc + phễu mũi tên ngang bên trái, 4 dải kênh bên phải.
  Dải nhỏ dần theo chặng. Không icon, không hiệu ứng.
*/
const CHANNELS = [
  {name: 'SEO và AI Search', color: '#C9391A'},
  {name: 'Quảng cáo', color: '#F26716'},
  {name: 'Content', color: '#E8A800'},
  {name: 'Đo lường', color: '#8A8178'}
];
const STAGES = [
  {code: 'TOFU', name: 'Được tìm thấy', sub: 'Nhận biết', owner: 'Marketing', q: '“Có ai giải được việc này không?”',
    cells: [['Visibility nhóm từ khóa', 'Trích dẫn trên AI Overview'], ['Hiển thị đúng tệp', 'Tỉ lệ nhớ quảng cáo'], ['Traffic bài viết', 'Nhắc tên thương hiệu'], ['Tracking đủ event', 'Nguồn traffic đúng']]},
  {code: 'MOFU', name: 'Được chọn', sub: 'Cân nhắc', owner: 'Marketing', q: '“Bên nào đáng tin hơn?”',
    cells: [['Lead từ trang organic'], ['Lead đạt chuẩn', 'Truy vấn lãng phí'], ['Lead có chạm nội dung', 'Tải tài liệu'], ['Số liệu khớp Ads và CRM']]},
  {code: 'BOFU', name: 'Được tin, mua', sub: 'Quyết định', owner: 'Sales', q: '“Mua thì được gì, bao nhiêu?”',
    cells: [['Doanh thu nguồn organic'], ['CPA, ROAS', 'Lợi nhuận gộp'], ['Assisted conversion'], ['Quyết định ngân sách theo kênh']]}
];
const WIDTH = ['100%', '88%', '76%'];

const Arrow = () => (
  <div className={styles.arrow} aria-hidden="true">
    <svg viewBox="0 0 24 40" width="24" height="40"><path d="M12 0v30M4 23l8 9 8-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </div>
);

export default function JourneyMatrix(){
  return (
    <div className={styles.wrap}>
      {/* Header kênh (desktop) */}
      <div className={styles.head}>
        <div className={styles.corner}><span>Mục tiêu</span><span>Chặng hành trình</span></div>
        {CHANNELS.map(c => <div key={c.name} className={styles.chHead}><span className={styles.chDot} style={{background: c.color}}/>{c.name}</div>)}
      </div>

      {STAGES.map((st, i) => (
        <div key={st.code} className={styles.stageWrap}>
          <section className={styles.block} style={{'--w': WIDTH[i]}} aria-label={`Chặng ${i + 1}: ${st.name}`}>
            <div className={`${styles.goal} ${i === 2 ? styles.goalSales : ''}`}><span>{st.owner}</span></div>
            <div className={`${styles.stage} ${styles['s' + i]}`}>
              <span className={styles.code}>{st.code}</span>
              <strong>{st.name}</strong>
              <span className={styles.sub}>{st.sub}</span>
            </div>
            <p className={styles.q}>{st.q}</p>
            {CHANNELS.map((c, j) => (
              <div key={c.name} className={styles.cell}>
                <p className={styles.cellCh}><span className={styles.chDot} style={{background: c.color}}/>{c.name}</p>
                <div className={styles.band} style={{background: c.color}}>
                  {st.cells[j].map(it => <span key={it}>{it}</span>)}
                </div>
              </div>
            ))}
          </section>
          {i < 2 && <Arrow/>}
        </div>
      ))}

      <Arrow/>
      <div className={styles.dest}>Tất cả gộp về một con số: <strong>doanh thu theo kênh</strong></div>
    </div>
  );
}
