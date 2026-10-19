import styles from './Differentiators.module.css';

/* Bốn điểm khác biệt (nội dung đã duyệt ở trang Giới thiệu). Số lớn Fraunces nghiêng, kẻ mảnh phía trên. */
const ITEMS = [
  {title: 'Người lập kế hoạch cũng là người làm', text: 'Không chuyển việc cho đội khác sau khi ký hợp đồng. Điều hứa ở buổi đầu là điều được làm.'},
  {title: 'Báo cáo bằng doanh thu', text: 'Mỗi kênh có con số gắn với khách và đơn hàng, không dừng ở lượt xem hay lượt bấm.'},
  {title: 'Tài khoản đứng tên bạn', text: 'Google Ads, Meta, GA4 và báo cáo thuộc doanh nghiệp. SOHO chỉ được cấp quyền.'},
  {title: 'Vòng 2 tuần', text: 'Hai tuần nhìn lại số liệu một lần, rồi quyết định giữ, sửa hay dừng.'}
];

export default function Differentiators(){
  return (
    <ol className={styles.list}>
      {ITEMS.map((it, i) => (
        <li key={it.title} data-reveal="" style={{'--reveal-delay': `${i * 90}ms`}}>
          <span className={styles.num} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <h3 className={styles.title}>{it.title}</h3>
          <p className={styles.text}>{it.text}</p>
        </li>
      ))}
    </ol>
  );
}
