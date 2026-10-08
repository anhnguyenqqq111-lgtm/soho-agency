import styles from './JourneyBoard.module.css';

/*
  Bảng hành trình 3 cột: mỗi cột là một chặng, bên trong là các kênh và chỉ số SOHO theo dõi.
  Thay cho bảng ma trận ngang; bố cục cột dọc, đọc từ trái sang phải.
*/
const STAGES = [
  {
    key: 'find', label: 'Được tìm thấy', sub: 'Khách hàng chưa biết bạn',
    channels: [
      ['SEO và AI Search', ['Visibility nhóm từ khóa', 'Trích dẫn trên AI Overview']],
      ['Quảng cáo', ['Lượt hiển thị đúng tệp', 'Tỉ lệ nhớ quảng cáo']],
      ['Content', ['Traffic bài viết', 'Nhắc tên thương hiệu']]
    ]
  },
  {
    key: 'choose', label: 'Được chọn', sub: 'Khách hàng đang so sánh',
    channels: [
      ['SEO và AI Search', ['Lead từ trang organic']],
      ['Quảng cáo', ['Lead, tỉ lệ lead đạt chuẩn', 'Truy vấn lãng phí']],
      ['Content', ['Lead có chạm nội dung', 'Tải tài liệu']],
      ['Đo lường', ['Số liệu khớp Ads và CRM']]
    ]
  },
  {
    key: 'buy', label: 'Được tin, mua', sub: 'Khách hàng quyết định', acc: true,
    channels: [
      ['SEO và AI Search', ['Doanh thu nguồn organic', 'CAC organic']],
      ['Quảng cáo', ['CPA, ROAS', 'Lợi nhuận gộp theo chiến dịch']],
      ['Content', ['Assisted conversion']],
      ['Đo lường', ['Quyết định ngân sách theo kênh']]
    ]
  }
];

export default function JourneyBoard(){
  return (
    <ol className={styles.board}>
      {STAGES.map((st, i) => (
        <li key={st.key} className={`${styles.col} ${st.acc ? styles.acc : ''}`} data-reveal="" style={{'--reveal-delay': `${i * 140}ms`}}>
          <div className={styles.head}>
            <span className={styles.step}>{i + 1}</span>
            <div>
              <h3 className={styles.label}>{st.label}</h3>
              <p className={styles.sub}>{st.sub}</p>
            </div>
          </div>
          <dl className={styles.channels}>
            {st.channels.map(([name, items]) => (
              <div key={name} className={styles.channel}>
                <dt>{name}</dt>
                {items.map(it => <dd key={it}>{it}</dd>)}
              </div>
            ))}
          </dl>
        </li>
      ))}
    </ol>
  );
}
