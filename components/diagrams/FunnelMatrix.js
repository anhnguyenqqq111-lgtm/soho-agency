import styles from './FunnelMatrix.module.css';

/*
  Ma trận "Chặng × Kênh": cột trái là phễu gồm 3 khối mũi tên chỉ xuống (TOFU, MOFU, BOFU),
  bên phải là 4 cột kênh với chỉ số SOHO theo dõi ở từng chặng.
*/
const STAGES = [
  {key: 'tofu', code: 'TOFU', label: 'Được tìm thấy', sub: 'Nhận biết', goal: 'Marketing'},
  {key: 'mofu', code: 'MOFU', label: 'Được chọn', sub: 'Cân nhắc', goal: 'Marketing'},
  {key: 'bofu', code: 'BOFU', label: 'Được tin, mua', sub: 'Quyết định', goal: 'Sales'}
];
const CHANNELS = ['SEO và AI Search', 'Quảng cáo', 'Content', 'Đo lường'];
const CELLS = {
  tofu: [
    ['Visibility nhóm từ khóa', 'Trích dẫn trên AI Overview', 'Người dùng mới'],
    ['Hiển thị đúng tệp', 'Lượt xem video', 'Tỉ lệ nhớ quảng cáo'],
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
        <div className={styles.headChannels}>{CHANNELS.map(c => <span key={c}>{c}</span>)}</div>
      </div>
      {STAGES.map((st, i) => (
        <div key={st.key} className={styles.row} style={{'--i': i}}>
          <div className={styles.goal}><span>{st.goal}</span></div>
          <div className={`${styles.stage} ${styles[st.key]}`}>
            <span className={styles.code}>{st.code}</span>
            <strong>{st.label}</strong>
            <span className={styles.sub}>{st.sub}</span>
          </div>
          <div className={styles.cells}>
            {CELLS[st.key].map((items, j) => (
              <ul key={j} data-channel={CHANNELS[j]}>{items.map(it => <li key={it}>{it}</li>)}</ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
