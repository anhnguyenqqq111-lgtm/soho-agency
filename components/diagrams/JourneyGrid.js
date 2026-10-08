import styles from './JourneyGrid.module.css';

/*
  Lưới hành trình dạng dọc: hàng là tiêu chí, cột là 3 chặng.
  Học cách trình bày của GOHA: nhãn chặng hình mũi tên gradient, nhãn mục tiêu xoay dọc kẹp bên,
  header cột có mũi tên, chỉ số dạng gạch đầu dòng, không viền ô. Nội dung và màu là của SOHO.
*/
const STAGES = [
  {num: '01', code: 'TOFU', name: 'Được tìm thấy', sub: 'Nhận biết', owner: 'marketing', question: '“Có ai giải được việc này không?”', goal: 'Xuất hiện đúng lúc khách bắt đầu tìm',
    seo: ['Visibility nhóm từ khóa', 'Trích dẫn trên AI Overview'], ads: ['Hiển thị đúng tệp'], content: ['Traffic bài viết'], data: ['Tracking đủ event']},
  {num: '02', code: 'MOFU', name: 'Được chọn', sub: 'Cân nhắc', owner: 'marketing', question: '“Bên nào đáng tin hơn?”', goal: 'Biến lượt xem thành lead đủ chuẩn',
    seo: ['Lead từ trang organic'], ads: ['Tỉ lệ lead đạt chuẩn', 'Truy vấn lãng phí'], content: ['Lead có chạm nội dung'], data: ['Số liệu khớp Ads và CRM']},
  {num: '03', code: 'BOFU', name: 'Được tin, mua', sub: 'Quyết định', owner: 'sales', question: '“Mua thì được gì, bao nhiêu?”', goal: 'Biết kênh nào mang về doanh thu', acc: true,
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
      <div className={styles.grid} role="table" aria-label="Chỉ số theo chặng hành trình">
        {/* Hàng header: nhãn hàng + 3 chặng dạng mũi tên */}
        <div className={styles.headLabel} role="rowheader"><span>Tiêu chí</span><span>Chặng hành trình →</span></div>
        {STAGES.map((st, i) => (
          <div key={st.num} className={`${styles.stage} ${styles[st.code.toLowerCase()]}`} role="columnheader" style={{'--i': i}}>
            <span className={styles.code}>{st.code}</span>
            <strong>{st.name}</strong>
            <span className={styles.sub}>{st.sub}</span>
          </div>
        ))}

        {/* Hàng phụ trách: thanh ngang chia Marketing / Sales */}
        <div className={styles.rowLabel} role="rowheader">Phụ trách</div>
        <div className={`${styles.owner} ${styles.ownerMk}`} role="cell"><span>Marketing</span><small>Tiếp cận đúng người, đủ nhiều</small></div>
        <div className={`${styles.owner} ${styles.ownerSales}`} role="cell"><span>Sales</span><small>Chốt thành khách hàng</small></div>

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

      {/* Mobile */}
      <ol className={styles.cards}>
        {STAGES.map((st, i) => (
          <li key={st.num} className={`${styles.card} ${st.acc ? styles.acc : ''}`} style={{'--i': i}}>
            <div className={`${styles.stage} ${styles[st.code.toLowerCase()]} ${styles.stageMobile}`}>
              <span className={styles.code}>{st.code}</span>
              <strong>{st.name}</strong>
              <span className={styles.sub}>{st.sub} · {st.owner === 'sales' ? 'Sales' : 'Marketing'} phụ trách</span>
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
