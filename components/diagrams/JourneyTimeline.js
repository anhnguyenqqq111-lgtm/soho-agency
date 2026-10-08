import styles from './JourneyTimeline.module.css';

/*
  Dòng thời gian dọc zigzag: mỗi chặng một khối lệch trái/phải, nối bằng trục giữa và chấm.
  Khối gồm: thanh tiêu đề (số + tên chặng + phụ trách), câu khách hỏi, mục tiêu, chỉ số theo kênh.
*/
const CH = {seo: ['SEO và AI Search', 'cSeo'], ads: ['Quảng cáo', 'cAds'], content: ['Content', 'cContent'], data: ['Đo lường', 'cData']};
const STAGES = [
  {num: '01', name: 'Được tìm thấy', owner: 'Marketing', question: '“Có ai giải được việc này không?”', goal: 'Xuất hiện đúng lúc khách bắt đầu tìm.',
    metrics: [['seo', 'Visibility nhóm từ khóa, trích dẫn trên AI Overview'], ['ads', 'Hiển thị đúng tệp'], ['content', 'Traffic bài viết'], ['data', 'Tracking đủ event']]},
  {num: '02', name: 'Được chọn', owner: 'Marketing', question: '“Bên nào đáng tin hơn?”', goal: 'Biến lượt xem thành lead đủ chuẩn.',
    metrics: [['seo', 'Lead từ trang organic'], ['ads', 'Tỉ lệ lead đạt chuẩn, truy vấn lãng phí'], ['content', 'Lead có chạm nội dung'], ['data', 'Số liệu khớp Ads và CRM']]},
  {num: '03', name: 'Được tin, mua', owner: 'Sales', acc: true, question: '“Mua thì được gì, bao nhiêu?”', goal: 'Biết kênh nào mang về doanh thu.',
    metrics: [['seo', 'Doanh thu nguồn organic'], ['ads', 'CPA, ROAS, lợi nhuận gộp'], ['content', 'Assisted conversion'], ['data', 'Quyết định ngân sách theo kênh']]}
];

export default function JourneyTimeline(){
  return (
    <div className={styles.wrap} data-reveal="">
      <div className={styles.axis} aria-hidden="true"/>
      <ol className={styles.list}>
        {STAGES.map((st, i) => (
          <li key={st.num} className={`${styles.step} ${i % 2 ? styles.right : styles.left} ${st.acc ? styles.acc : ''}`} style={{'--i': i}}>
            <div className={styles.marker} aria-hidden="true">
              <span className={styles.badge}>{st.num}</span>
              <span className={styles.markerLabel}>Chặng {i + 1}</span>
            </div>
            <div className={styles.block}>
              <div className={styles.bar}>
                <h3 className={styles.name}>{st.name}</h3>
                <span className={styles.owner}>{st.owner} phụ trách</span>
              </div>
              <div className={styles.body}>
                <p className={styles.question}>{st.question}</p>
                <p className={styles.goal}>{st.goal}</p>
                <ul className={styles.metrics}>
                  {st.metrics.map(([ch, text]) => (
                    <li key={ch}><span className={`${styles.dot} ${styles[CH[ch][1]]}`} aria-hidden="true"/><strong>{CH[ch][0]}</strong><span>{text}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
