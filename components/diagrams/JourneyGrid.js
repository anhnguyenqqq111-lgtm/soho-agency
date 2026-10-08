import styles from './JourneyGrid.module.css';

/*
  Lưới hành trình: hàng là tiêu chí (phụ trách, giai đoạn, khách hỏi, mục tiêu, 4 kênh),
  cột là 3 chặng. Trên mobile mỗi chặng thành một thẻ dọc, nhãn hàng lặp trong thẻ.
*/
const STAGES = [
  {num: '01', name: 'Được tìm thấy', owner: 'marketing', question: '“Có ai giải được việc này không?”', goal: 'Xuất hiện đúng lúc khách bắt đầu tìm',
    seo: ['Visibility nhóm từ khóa', 'Trích dẫn trên AI Overview'], ads: ['Hiển thị đúng tệp'], content: ['Traffic bài viết'], data: ['Tracking đủ event']},
  {num: '02', name: 'Được chọn', owner: 'marketing', question: '“Bên nào đáng tin hơn?”', goal: 'Biến lượt xem thành lead đủ chuẩn',
    seo: ['Lead từ trang organic'], ads: ['Tỉ lệ lead đạt chuẩn', 'Truy vấn lãng phí'], content: ['Lead có chạm nội dung'], data: ['Số liệu khớp Ads và CRM']},
  {num: '03', name: 'Được tin, mua', owner: 'sales', question: '“Mua thì được gì, bao nhiêu?”', goal: 'Biết kênh nào mang về doanh thu', acc: true,
    seo: ['Doanh thu nguồn organic'], ads: ['CPA, ROAS', 'Lợi nhuận gộp'], content: ['Assisted conversion'], data: ['Quyết định ngân sách theo kênh']}
];
const ROWS = [
  {key: 'question', label: 'Khách hỏi', kind: 'quote'},
  {key: 'goal', label: 'Mục tiêu', kind: 'text'},
  {key: 'seo', label: 'SEO và AI Search', dot: 'cSeo'},
  {key: 'ads', label: 'Quảng cáo', dot: 'cAds'},
  {key: 'content', label: 'Content', dot: 'cContent'},
  {key: 'data', label: 'Đo lường', dot: 'cData'}
];

function Cell({stage, row}){
  const v = stage[row.key];
  if (row.kind === 'quote') return <p className={styles.quote}>{v}</p>;
  if (row.kind === 'text') return <p className={styles.text}>{v}</p>;
  return <ul className={styles.list}>{v.map(it => <li key={it}>{it}</li>)}</ul>;
}

export default function JourneyGrid(){
  return (
    <div className={styles.wrap} data-reveal="">
      {/* Desktop: lưới */}
      <div className={styles.grid} role="table" aria-label="Chỉ số theo chặng hành trình">
        <div className={styles.rowLabel} role="rowheader">Phụ trách</div>
        <div className={`${styles.owner} ${styles.ownerMk}`} role="cell">Marketing</div>
        <div className={`${styles.owner} ${styles.ownerSales}`} role="cell">Sales</div>

        <div className={styles.rowLabel} role="rowheader">Giai đoạn</div>
        {STAGES.map((st, i) => (
          <div key={st.num} className={`${styles.stage} ${st.acc ? styles.acc : ''}`} role="columnheader" style={{'--i': i}}>
            <span className={styles.num}>{st.num}</span>
            <span className={styles.name}>{st.name}</span>
            {i < 2 && <span className={styles.arrow} aria-hidden="true">→</span>}
          </div>
        ))}

        {ROWS.map(row => (
          <div key={row.key} className={styles.row} role="row">
            <div className={styles.rowLabel} role="rowheader">
              {row.dot && <span className={`${styles.dot} ${styles[row.dot]}`} aria-hidden="true"/>}{row.label}
            </div>
            {STAGES.map((st, i) => (
              <div key={st.num} className={`${styles.cell} ${st.acc ? styles.cellAcc : ''}`} role="cell" style={{'--i': i}}>
                <Cell stage={st} row={row}/>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Mobile: mỗi chặng một thẻ */}
      <ol className={styles.cards}>
        {STAGES.map((st, i) => (
          <li key={st.num} className={`${styles.card} ${st.acc ? styles.acc : ''}`} style={{'--i': i}}>
            <div className={styles.cardHead}>
              <span className={styles.num}>{st.num}</span>
              <div><span className={styles.name}>{st.name}</span><span className={`${styles.ownerTag} ${st.owner === 'sales' ? styles.ownerSales : styles.ownerMk}`}>{st.owner === 'sales' ? 'Sales' : 'Marketing'}</span></div>
            </div>
            {ROWS.map(row => (
              <div key={row.key} className={styles.cardRow}>
                <p className={styles.cardLabel}>{row.dot && <span className={`${styles.dot} ${styles[row.dot]}`} aria-hidden="true"/>}{row.label}</p>
                <Cell stage={st} row={row}/>
              </div>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
}
