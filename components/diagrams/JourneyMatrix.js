import styles from './JourneyMatrix.module.css';

/*
  Ba khối chặng xếp dọc, giữa các khối là mũi tên chỉ xuống.
  Mỗi khối: nhãn Marketing/Sales dọc + phễu mũi tên ngang bên trái, 4 dải kênh bên phải.
  Dải nhỏ dần theo chặng. Cuộn tới: ba chặng sáng lần lượt, dải co hẹp như phễu, thanh doanh thu hiện cuối.
  Rê chuột vào một kênh: cả cột kênh đó được tô (CSS :has, không cần JS).
*/
const CHANNELS = [
  {name: 'SEO và AI tìm kiếm', color: '#F3F1F8', ink: '#141218'},
  {name: 'Quảng cáo', color: '#F3F1F8', ink: '#141218'},
  {name: 'Nội dung', color: '#F3F1F8', ink: '#141218'},
  {name: 'Đo lường', color: '#F3F1F8', ink: '#141218'}
];
// Ô chỉ số viết bằng tiếng Việt (luật viết chữ: không dùng thuật ngữ tiếng Anh không giải thích)
const STAGES = [
  {code: 'Chặng 1', name: 'Được tìm thấy', sub: 'Khách mới biết tới bạn', owner: 'Marketing', q: '“Có ai giải được việc này không?”',
    cells: [['Độ phủ nhóm từ khóa người muốn mua', 'Được AI của Google nhắc tên'], ['Hiện đúng nhóm khách', 'Tỉ lệ nhớ quảng cáo'], ['Lượt đọc bài viết', 'Số lần thương hiệu được nhắc'], ['Đo đủ hành động quan trọng', 'Biết khách đến từ đâu']]},
  {code: 'Chặng 2', name: 'Được chọn', sub: 'Khách đang cân nhắc', owner: 'Marketing', q: '“Bên nào đáng tin hơn?”',
    cells: [['Khách để lại thông tin từ Google'], ['Khách tiềm năng đúng tệp', 'Từ khóa tốn tiền vô ích'], ['Khách đã đọc bài trước khi liên hệ', 'Lượt tải tài liệu'], ['Số quảng cáo khớp sổ bán hàng']]},
  {code: 'Chặng 3', name: 'Được tin, mua', sub: 'Khách ra quyết định', owner: 'Sales', q: '“Mua thì được gì, bao nhiêu?”',
    cells: [['Doanh thu từ Google tự nhiên'], ['Chi phí mỗi đơn', 'Lợi nhuận gộp'], ['Kênh góp phần vào đơn'], ['Chia ngân sách theo kênh']]}
];
const WIDTH = ['100%', '88%', '76%'];

const Arrow = ({i}) => (
  <div className={styles.arrow} aria-hidden="true" style={{'--i': i}}>
    <svg viewBox="0 0 24 40" width="24" height="40"><path d="M12 0v30M4 23l8 9 8-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </div>
);

export default function JourneyMatrix(){
  return (
    <div className={styles.wrap} data-reveal="journey">
      {/* Header kênh (desktop) */}
      <div className={styles.head}>
        <div className={styles.corner}><span>Mục tiêu</span><span>Chặng hành trình</span></div>
        {CHANNELS.map((c, j) => <div key={c.name} className={styles.chHead} data-ch={j}><span className={styles.chDot} style={{background: c.color}}/>{c.name}</div>)}
      </div>

      {STAGES.map((st, i) => (
        <div key={st.code} className={styles.stageWrap}>
          <section className={styles.block} style={{'--w': WIDTH[i], '--i': i}} aria-label={`Chặng ${i + 1}: ${st.name}`}>
            <div className={`${styles.goal} ${i === 2 ? styles.goalSales : ''}`}><span>{st.owner}</span></div>
            <div className={`${styles.stage} ${styles['s' + i]}`}>
              <span className={styles.code}>{st.code}</span>
              <strong>{st.name}</strong>
              <span className={styles.sub}>{st.sub}</span>
            </div>
            <p className={styles.q}>{st.q}</p>
            {CHANNELS.map((c, j) => (
              <div key={c.name} className={styles.cell} data-ch={j}>
                <p className={styles.cellCh}><span className={styles.chDot} style={{background: c.color}}/>{c.name}</p>
                <div className={styles.band} style={{background: c.color, color: c.ink}}>
                  {st.cells[j].map(it => <span key={it}>{it}</span>)}
                </div>
              </div>
            ))}
          </section>
          {i < 2 && <Arrow i={i}/>}
        </div>
      ))}

      <Arrow i={2}/>
      <div className={styles.dest}>Tất cả gộp về một con số: <strong>doanh thu theo kênh</strong></div>
    </div>
  );
}
