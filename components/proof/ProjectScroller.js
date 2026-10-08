import styles from './ProjectScroller.module.css';
import ImageSlot from '../ui/ImageSlot';
import Fill from '../ui/Fill';
import {sitePath} from '../paths';

// Dãy thẻ dự án cuộn ngang (scroll-snap), không mũi tên, không tab logo.
export default function ProjectScroller({clients}){
  return (
    <ul className={styles.track} aria-label="Dự án SOHO đang làm">
      {clients.map((c, i) => (
        <li key={c.slug} className={styles.card} data-reveal="" style={{'--reveal-delay': `${i * 90}ms`}}>
          <a href={sitePath(`/ket-qua#${c.slug}`)} className={styles.link}>
            <ImageSlot src={c.image} alt={`Dự án ${c.name}`} need={c.imageNeed} size="1200×900" ratio="4/3"/>
            <div className={styles.body}>
              <img src={sitePath(c.logo)} alt="" className={styles.logo} loading="lazy"/>
              <p className={styles.scope}>{c.scope}</p>
              <h3 className={styles.name}>{c.name}</h3>
              <p className={styles.result}><Fill value={c.result} need="CẦN KẾT QUẢ THẬT, 1 dòng"/></p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
