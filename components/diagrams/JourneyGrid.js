import styles from './JourneyGrid.module.css';

/*
  Ma trận chặng × kênh theo bố cục ngang của GOHA:
  trái là phễu 3 khối mũi tên ngang (TOFU, MOFU, BOFU) kèm nhãn Marketing/Sales xoay dọc,
  phải là 4 cột kênh với chỉ số SOHO theo dõi ở từng chặng. Mobile: mỗi chặng một thẻ.
*/
const CHANNELS = ['SEO và AI Search', 'Quảng cáo', 'Content', 'Đo lường'];
const STAGES = [
  {code: 'TOFU', name: 'Được tìm thấy', sub: 'Nhận biết', goal: 'Marketing', goalSub: 'Tiếp cận đúng người, đủ nhiều',
    cells: [['Visibility nhóm từ khóa', 'Trích dẫn trên AI Overview', 'Người dùng mới'], ['Hiển thị đúng tệp', 'Lượt xem video', 'Tỉ lệ nhớ quảng cáo'], ['Traffic bài viết', 'Nhắc tên thương hiệu'], ['Tracking đủ event', 'Nguồn traffic đúng']]},
  {code: 'MOFU', name: 'Được chọn', sub: 'Cân nhắc', goal: 'Marketing',
    cells: [['Lead từ trang organic', 'Thời gian đọc'], ['Lead, tỉ lệ lead đạt chuẩn', 'Truy vấn lãng phí'], ['Lead có chạm nội dung', 'Tải tài liệu'], ['Số liệu khớp Ads và CRM']]},
  {code: 'BOFU', name: 'Được tin, mua', sub: 'Quyết định', goal: 'Sales', goalSub: 'Chốt thành khách hàng',
    cells: [['Doanh thu nguồn organic', 'CAC organic'], ['CPA, ROAS', 'Lợi nhuận gộp theo chiến dịch'], ['Assisted conversion'], ['Quyết định ngân sách theo kênh']]}
];

export default function JourneyGrid(){
  return (
    <div className={styles.wrap} data-reveal="">
      {/* Desktop */}
      <div className={styles.matrix}>
        <div className={styles.head}>
          <div className={styles.headStage}><span>Mục tiêu</span><span>Chặng hành trình</span></div>
          <div className={styles.headChannels}>{CHANNELS.map(c => <span key={c}>{c} <i aria-hidden="true">→</i></span>)}</div>
        </div>

        {/* Nhãn mục tiêu xoay dọc: Marketing ôm 2 chặng đầu, Sales ôm chặng cuối */}
        <div className={styles.goals} aria-hidden="true">
          <div className={styles.goalMk}><span>Marketing</span></div>
          <div className={styles.goalSales}><span>Sales</span></div>
        </div>

        <div className={styles.rows}>
          {STAGES.map((st, i) => (
            <div key={st.code} className={styles.row} style={{'--i': i}}>
              <div className={`${styles.stage} ${styles['s' + i]}`}>
                <span className={styles.code}>{st.code}</span>
                <strong>{st.name}</strong>
                <span className={styles.sub}>{st.sub}</span>
              </div>
              <div className={styles.cells}>
                {st.cells.map((items, j) => (
                  <ul key={j}>{items.map(it => <li key={it}>{it}</li>)}</ul>
                ))}
              </div>
              <span className={`${styles.marker} ${styles['m' + i]}`} aria-hidden="true"/>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <ol className={styles.cards}>
        {STAGES.map((st, i) => (
          <li key={st.code} className={styles.card} style={{'--i': i}}>
            <div className={`${styles.stage} ${styles['s' + i]} ${styles.stageMobile}`}>
              <span className={styles.code}>{st.code}</span>
              <strong>{st.name}</strong>
              <span className={styles.sub}>{st.sub} · {st.goal} phụ trách</span>
            </div>
            <dl className={styles.cardBody}>
              {CHANNELS.map((c, j) => (
                <div key={c}><dt>{c}</dt>{st.cells[j].map(it => <dd key={it}>{it}</dd>)}</div>
              ))}
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}
