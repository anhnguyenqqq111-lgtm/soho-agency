'use client';
import {useState} from 'react';
import styles from './CaseShowcase.module.css';
import ImageSlot from '../ui/ImageSlot';
import Fill from '../ui/Fill';
import {sitePath} from '../paths';

/*
  Khối case study theo GOHA: thẻ xám lớn (tên khách hàng, kết quả, nút) + hàng logo bên dưới,
  bấm logo để đổi khách hàng. Mũi tên trái phải ở hai mép.
*/
export default function CaseShowcase({clients}){
  const [idx, setIdx] = useState(0);
  const c = clients[idx];
  const go = d => setIdx((idx + d + clients.length) % clients.length);

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <button type="button" className={`${styles.nav} ${styles.prev}`} onClick={() => go(-1)} aria-label="Dự án trước">←</button>
        <div className={styles.copy}>
          <p className={styles.client}>{c.name}</p>
          <h3 className={styles.quote}>
            {c.result ? c.result : <>{c.scope} cho {c.field.charAt(0).toLowerCase() + c.field.slice(1)}. <Fill value={null} need="CẦN KẾT QUẢ THẬT, 1 câu"/></>}
          </h3>
          <a href={sitePath(`/ket-qua#${c.slug}`)} className={styles.btn}>Tìm hiểu thêm <span aria-hidden="true">→</span></a>
        </div>
        <div className={styles.media}>
          <ImageSlot src={c.image} alt={`Dự án ${c.name}`} need={c.imageNeed} size="1200×900" ratio="4/3"/>
        </div>
        <button type="button" className={`${styles.nav} ${styles.next}`} onClick={() => go(1)} aria-label="Dự án tiếp theo">→</button>
      </div>
      <ul className={styles.logos} role="tablist" aria-label="Chọn dự án">
        {clients.map((cl, i) => (
          <li key={cl.slug}>
            <button type="button" role="tab" aria-selected={i === idx} className={`${styles.logoBtn} ${i === idx ? styles.on : ''}`} onClick={() => setIdx(i)}>
              <img src={sitePath(cl.logo)} alt={cl.name} loading="lazy"/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
