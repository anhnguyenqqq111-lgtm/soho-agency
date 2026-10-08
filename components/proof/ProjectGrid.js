import styles from './ProjectGrid.module.css';
import ImageSlot from '../ui/ImageSlot';
import Fill from '../ui/Fill';
import {sitePath} from '../paths';

/*
  Lưới dự án: dự án đầu tiên lớn, các dự án sau nhỏ.
  linkBase: nếu có, mỗi thẻ trỏ tới `${linkBase}#${slug}` (trang Kết quả)
*/
export default function ProjectGrid({projects, linkBase}){
  return (
    <ul className={styles.grid}>
      {projects.map((p, i) => {
        const featured = i === 0;
        const body = (
          <>
            <div className={styles.mediaWrap}>
            <ImageSlot
              src={p.image}
              alt={`Dự án ${p.name}`}
              need={p.imageNeed}
              size={featured ? '1600×1200' : '1200×900'}
              ratio={featured ? '4/3' : '4/3'}
              className={styles.media}
            />
            </div>
            <div className={styles.meta}>
              <p className={styles.scope}>{p.scope}</p>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.field}>{p.field}</p>
              <p className={styles.result}>
                <Fill value={p.result} need="CẦN KẾT QUẢ THẬT, 1 dòng"/>
              </p>
            </div>
          </>
        );
        return (
          <li key={p.slug} className={`${styles.item} ${featured ? styles.featured : ''}`} data-reveal="" style={{'--reveal-delay': `${i * 90}ms`}}>
            {linkBase
              ? <a href={sitePath(`${linkBase}#${p.slug}`)} className={styles.link}>{body}</a>
              : <div className={styles.link}>{body}</div>}
          </li>
        );
      })}
    </ul>
  );
}
