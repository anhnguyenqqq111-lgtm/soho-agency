import styles from './CtaBand.module.css';
import Button from './Button';
import ContactForm from '../ContactForm';

/*
  Khối liên hệ cuối trang trên nền sáng: tiêu đề và mô tả ở giữa, form trong thẻ trắng bên dưới.
  withForm=false: chỉ tiêu đề + nút.
*/
export default function CtaBand({
  id = 'lien-he',
  title = <>Kể cho SOHO <span className="hl">bài toán hiện tại</span></>,
  text = 'Gửi website và mục tiêu quý tới. SOHO xem các kênh bạn đang chạy và gửi lại 3 việc nên làm trước.',
  withForm = true,
  href = '/lien-he',
  label = 'Liên hệ ngay'
}){
  return (
    <section id={id} className={styles.band}>
      <div className="container">
        <div className={styles.copy} data-reveal="">
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          {!withForm && <div className={styles.btn}><Button href={href}>{label}</Button></div>}
        </div>
        {withForm && (
          <div className={styles.card} data-reveal="" style={{'--reveal-delay': '150ms'}}>
            <ContactForm/>
          </div>
        )}
      </div>
    </section>
  );
}
