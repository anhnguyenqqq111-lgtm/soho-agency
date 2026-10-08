import styles from './Testimonials.module.css';
import Fill from '../ui/Fill';
import {testimonials} from '../data/proof';

export default function Testimonials(){
  return (
    <ul className={styles.list}>
      {testimonials.map((t, i) => (
        <li key={i} className={styles.item}>
          <blockquote className={styles.quote}>
            <p><Fill value={t.quote} need="CẦN NHẬN XÉT THẬT, tiếng Việt, 2 đến 4 câu"/></p>
          </blockquote>
          <p className={styles.who}>
            <span className={styles.name}><Fill value={t.name} need="Tên"/></span>
            <span className={styles.role}>
              <Fill value={t.role} need="Chức danh"/>, <Fill value={t.company} need="Công ty"/>
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}
