import styles from './CtaBand.module.css';
import Button from './Button';

// Khối kêu gọi cuối trang, nền mực, nằm ngay trên Footer.
export default function CtaBand({
  title = 'Kể cho SOHO bài toán hiện tại',
  text = 'Gửi website và mục tiêu quý tới. SOHO xem các kênh bạn đang chạy và gửi lại 3 việc nên làm trước.',
  href = '/lien-he',
  label = 'Đặt lịch trao đổi'
}){
  return (
    <section className={styles.band}>
      <div className={`container ${styles.grid}`}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.side}>
          <p>{text}</p>
          <Button href={href} onDark>{label}</Button>
        </div>
      </div>
    </section>
  );
}
