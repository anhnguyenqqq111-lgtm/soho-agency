import styles from './CtaBand.module.css';
import Button from './Button';
import ContactForm from '../ContactForm';
import {sitePath} from '../paths';

/*
  Khối liên hệ cuối trang: khối tối duy nhất của trang, quầng cam phía sau; form trong thẻ trắng đặc bên dưới.
  withForm=false: chỉ tiêu đề + nút.
*/
export default function CtaBand({
  id = 'lien-he',
  title = <>Kể cho SOHO <span className="hl">bài toán hiện tại</span></>,
  text = 'Gửi website và mục tiêu quý tới. SOHO xem các kênh bạn đang chạy và gửi lại 3 việc nên làm trước.',
  withForm = true,
  href = '/lien-he',
  label = 'Nhận tư vấn'
}){
  return (
    <section id={id} className={`${styles.band} on-dark`}>
      <img className={styles.visual} src={sitePath('/cta/conversion-path.svg')} alt="" width="420" height="420" loading="lazy"/>
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
