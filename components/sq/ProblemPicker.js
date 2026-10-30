import styles from './picker.module.css';
import {sitePath} from '../paths';
import {SITUATIONS} from '../data/situations';
import {getCase} from '../data/cases';

/*
  Bộ chọn tình huống: khách chọn chuyện đang gặp, khung bên phải nói vì sao hay xảy ra, SOHO làm gì trước,
  bạn nhận gì, khi nào chưa nên làm, và việc thật đã làm. Chạy bằng radio + CSS, không cần JS; không có JS vẫn chọn được.
*/
export default function ProblemPicker({idPrefix = 'pk'}) {
  const id = i => `${idPrefix}${i}`;
  return (
    <div className={styles.pk} data-picker={idPrefix}>
      {SITUATIONS.map((s, i) => (
        <input key={s.key} type="radio" name={idPrefix} id={id(i)} className={styles.radio} defaultChecked={i === 0} aria-label={s.title} />
      ))}
      <div className={styles.grid}>
        <div className={styles.tabs}>
          {SITUATIONS.map((s, i) => (
            <label key={s.key} htmlFor={id(i)} className={styles.tab} data-i={i}>
              <img src={sitePath(`/media/icon/${s.icon}.webp`)} srcSet={`${sitePath(`/media/icon/${s.icon}.webp`)} 1x, ${sitePath(`/media/icon/${s.icon}@2x.webp`)} 2x`} alt="" width="56" height="56" loading="lazy" />
              <span>
                <b>{s.title}</b>
                <small>{s.service}</small>
              </span>
            </label>
          ))}
        </div>
        <div>
          {SITUATIONS.map((s, i) => {
            const proj = s.caseSlug ? getCase(s.caseSlug) : null;
            const goHref = sitePath(`/dich-vu/${s.slug}/`);
            return (
              <article key={s.key} className={styles.panel} data-i={i} aria-label={s.title}>
                <header className={styles.head}>
                  <p>
                    Tình huống {String(i + 1).padStart(2, '0')} · {s.service}
                  </p>
                  <h3>{s.title}</h3>
                </header>
                <div className={styles.cols}>
                  <div>
                    <h4>Vì sao hay xảy ra</h4>
                    <ul>
                      {s.why.map(x => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>SOHO làm gì trước</h4>
                    <ol>
                      {s.first.map(x => (
                        <li key={x}>{x}</li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h4>Bạn nhận được</h4>
                    <ul>
                      {s.get.map(x => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <footer className={styles.foot}>
                  <p className={styles.not}>
                    <b>Khi nào chưa nên làm</b>
                    {s.notYet}
                  </p>
                  <p className={styles.case}>
                    <b>Việc thật đã làm</b>
                    {proj ? <a href={sitePath(`/du-an/${proj.slug}/`)}>{s.proof}</a> : s.blogSlug ? <a href={sitePath(`/blog/${s.blogSlug}/`)}>{s.proof}</a> : s.proof}
                  </p>
                  <p className={styles.go}>
                    <a href={goHref} className={styles.goBtn}>
                      Xem dịch vụ
                    </a>
                  </p>
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
