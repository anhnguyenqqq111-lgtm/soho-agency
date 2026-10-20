import styles from './CtaBand.module.css';
import Button from './Button';
import ContactForm from '../ContactForm';
import {sitePath} from '../paths';

/*
  Khối liên hệ cuối trang, Brand Identity 3.0, banner Concept C "Chromatic Impact".
  Desktop: nền Midnight, ảnh điêu khắc 3D chiếm bên phải; tiêu đề, mô tả và form (thẻ trắng) bên trái.
  Mobile: ảnh dựng riêng 900×1200 thành dải trên cùng, rồi tiêu đề và form. Ảnh không chứa chữ hay nút.
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
    <section id={id} className={`${styles.band} dark on-dark`}>
      <picture className={styles.art} aria-hidden="true">
        <source media="(max-width: 900px)" srcSet={sitePath('/banners/C_mobile_900x1200.webp')} width="900" height="1200"/>
        <img src={sitePath('/banners/C_desktop_1920x960.webp')} alt="" width="1920" height="960" loading="lazy"/>
      </picture>
      <div className={`container ${styles.inner}`}>
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
