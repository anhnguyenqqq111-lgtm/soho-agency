import styles from './FunnelMatrix.module.css';

/*
  Ma trận "Chặng × Kênh" theo khối TOFU/MOFU/BOFU của GOHA.
  Hàng: 3 chặng hành trình (nhãn hình mũi tên gradient). Cột: 4 kênh. Ô: chỉ số SOHO theo dõi.
*/
const STAGES = [
  {key: 'tofu', label: 'Được tìm thấy', sub: 'Nhận biết', goal: 'Marketing'},
  {key: 'mofu', label: 'Được chọn', sub: 'Cân nhắc', goal: 'Marketing'},
  {key: 'bofu', label: 'Được tin, mua', sub: 'Quyết định', goal: 'Sales'}
];
const CHANNELS = ['SEO và AI Search', 'Quảng cáo', 'Content', 'Đo lường'];
const CELLS = {
  tofu: [
    ['Visibility nhóm từ khóa', 'Trích dẫn trên AI Overview', 'Người dùng mới'],
    ['Hiển thị, lượt xem video', 'Tỉ lệ nhớ quảng cáo'],
    ['Traffic bài viết', 'Nhắc tên thương hiệu'],
    ['Tracking đủ event', 'Nguồn traffic đúng']
  ],
  mofu: [
    ['Lead từ trang organic', 'Thời gian đọc'],
    ['Lead, tỉ lệ lead đạt chuẩn', 'Truy vấn lãng phí'],
    ['Lead có chạm nội dung', 'Tải tài liệu'],
    ['Số liệu khớp Ads và CRM']
  ],
  bofu: [
    ['Doanh thu nguồn organic', 'CAC organic'],
    ['CPA, ROAS', 'Lợi nhuận gộp theo chiến dịch'],
    ['Assisted conversion'],
    ['Quyết định ngân sách theo kênh']
  ]
};

export default function FunnelMatrix(){
  return (
    <div className={styles.wrap} data-reveal="">
      <div className={styles.head}>
        <div className={styles.headStage}><span>Mục tiêu</span><span>Chặng hành trình</span></div>
        <div className={styles.headChannels}>
          {CHANNELS.map(c => <span key={c}>{c} <i aria-hidden="true">→</i></span>)}
        </div>
      </div>
      {STAGES.map((st, i) => (
        <div key={st.key} className={styles.row} style={{'--i': i}}>
          <div className={styles.goal}><span>{st.goal}</span></div>
          <div className={`${styles.stage} ${styles[st.key]}`}>
            <strong>{st.label}</strong>
            <span>{st.sub}</span>
          </div>
          <div className={styles.cells}>
            {CELLS[st.key].map((items, j) => (
              <ul key={j} data-channel={CHANNELS[j]}>
                {items.map(it => <li key={it}>{it}</li>)}
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
