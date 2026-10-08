import styles from './CtaBand.module.css';
import Button from './Button';
import ContactForm from '../ContactForm';
import HeroRings from '../HeroRings';

/*
  Khối liên hệ cuối trang (theo "GOHA luôn sẵn sàng để đồng hành"):
  nền tối, tiêu đề + mô tả bên trái, form trắng bên phải.
  withForm=false: chỉ tiêu đề + nút.
*/
export default function CtaBand({
  id = 'lien-he',
  title = <>SOHO luôn sẵn sàng <span className="hl">để đồng hành</span></>,
  text = 'Gửi website và mục tiêu quý tới. SOHO xem các kênh bạn đang chạy và gửi lại 3 việc nên làm trước.',
  withForm = true,
  href = '/lien-he',
  label = 'Liên hệ ngay'
}){
  return (
    <section id={id} className={`${styles.band} dark`}>
      <HeroRings className={styles.rings}/>
      <div className={`container ${styles.grid} ${withForm ? '' : styles.noForm}`}>
        <div className={styles.copy} data-reveal="">
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          {!withForm && <div className={styles.btn}><Button href={href} onDark>{label}</Button></div>}
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
