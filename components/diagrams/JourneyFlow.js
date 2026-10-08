import styles from './JourneyFlow.module.css';

/*
  Infographic "dòng chảy chuyển đổi": 3 chặng xếp ngang, nối bằng đường chảy thu hẹp dần (SVG).
  Mỗi chặng: vòng số, câu hỏi khách hàng đang có, và các chỉ số SOHO theo dõi gắn chip kênh.
  Kênh mã màu bằng chấm, có chú giải ở dưới. Không dùng bảng, không mũi tên khối.
*/
const CHANNELS = {
  seo: {label: 'SEO và AI Search', cls: 'cSeo'},
  ads: {label: 'Quảng cáo', cls: 'cAds'},
  content: {label: 'Content', cls: 'cContent'},
  data: {label: 'Đo lường', cls: 'cData'}
};

const STAGES = [
  {
    num: '01', name: 'Được tìm thấy', owner: 'Marketing',
    question: '“Có ai giải được việc này không?”',
    goal: 'Xuất hiện đúng lúc khách bắt đầu tìm',
    metrics: [
      ['seo', 'Visibility nhóm từ khóa'], ['seo', 'Trích dẫn trên AI Overview'],
      ['ads', 'Hiển thị đúng tệp'], ['content', 'Traffic bài viết'], ['data', 'Tracking đủ event']
    ]
  },
  {
    num: '02', name: 'Được chọn', owner: 'Marketing',
    question: '“Bên nào đáng tin hơn?”',
    goal: 'Biến lượt xem thành lead đủ chuẩn',
    metrics: [
      ['seo', 'Lead từ trang organic'], ['ads', 'Tỉ lệ lead đạt chuẩn'], ['ads', 'Truy vấn lãng phí'],
      ['content', 'Lead có chạm nội dung'], ['data', 'Số liệu khớp Ads và CRM']
    ]
  },
  {
    num: '03', name: 'Được tin, mua', owner: 'Sales', acc: true,
    question: '“Mua thì được gì, bao nhiêu?”',
    goal: 'Biết kênh nào mang về doanh thu',
    metrics: [
      ['seo', 'Doanh thu nguồn organic'], ['ads', 'CPA, ROAS'], ['ads', 'Lợi nhuận gộp'],
      ['content', 'Assisted conversion'], ['data', 'Quyết định ngân sách theo kênh']
    ]
  }
];

export default function JourneyFlow(){
  return (
    <div className={styles.flow} data-reveal="">
      {/* Đường nối cong giữa các thẻ, tự vẽ khi cuộn tới */}
      <svg className={styles.stream} viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
        <path className={styles.streamPath} pathLength="1" d="M 380 120 C 410 120, 395 150, 425 150 M 780 150 C 810 150, 795 180, 825 180" fill="none"/>
        <path className={styles.streamHead} pathLength="1" d="M 417 143 L 425 150 L 417 157 M 817 173 L 825 180 L 817 187" fill="none"/>
      </svg>

      <ol className={styles.stages}>
        {STAGES.map((st, i) => (
          <li key={st.num} className={`${styles.stage} ${st.acc ? styles.acc : ''}`} style={{'--i': i}}>
            <div className={styles.head}>
              <span className={styles.num}>{st.num}</span>
              <div>
                <h3 className={styles.name}>{st.name}</h3>
                <p className={styles.owner}>{st.owner} phụ trách</p>
              </div>
            </div>
            <p className={styles.question}>{st.question}</p>
            <p className={styles.goal}>{st.goal}</p>
            <ul className={styles.metrics}>
              {st.metrics.map(([ch, text], k) => (
                <li key={text} style={{'--k': k}}>
                  <span className={`${styles.dot} ${styles[CHANNELS[ch].cls]}`} aria-hidden="true"/>
                  <span className="visually-hidden">{CHANNELS[ch].label}: </span>{text}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <ul className={styles.legend} aria-label="Chú giải kênh">
        {Object.values(CHANNELS).map(c => (
          <li key={c.label}><span className={`${styles.dot} ${styles[c.cls]}`} aria-hidden="true"/>{c.label}</li>
        ))}
      </ul>
    </div>
  );
}
