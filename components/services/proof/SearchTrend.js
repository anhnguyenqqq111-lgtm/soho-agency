import styles from './Proof.module.css';

/*
  Cột lượt nhấp theo từng 7 ngày, dựng tĩnh từ số Search Console (không vẽ lại bằng tay).
  Số ghi trên mỗi cột để người đọc kiểm tra được; lượt hiển thị ghi nhỏ dưới nhãn ngày.
  series: {title, note, weeks: [{label, clicks, impressions}]}; source: dòng nguồn.
*/
export default function SearchTrend({series, source}) {
  if (!series?.weeks?.length) return null;
  const max = Math.max(1, ...series.weeks.map(w => w.clicks));
  return (
    <figure className={styles.trend}>
      <p className={styles.trendTitle}>{series.title}</p>
      <ol className={styles.bars} style={{gridTemplateColumns: `repeat(${series.weeks.length}, minmax(0, 1fr))`}}>
        {series.weeks.map(w => (
          <li key={w.label}>
            <span className={styles.barArea}>
              <span className={styles.barValue}>{w.clicks}</span>
              <span className={styles.bar} style={{'--h': `${Math.max(2, (w.clicks / max) * 100)}%`}} aria-hidden="true" />
            </span>
            <span className={styles.barLabel}>
              {w.label}
              <small>{w.impressions.toLocaleString('vi-VN')} hiển thị</small>
            </span>
          </li>
        ))}
      </ol>
      <figcaption>
        {series.note && <span>{series.note}</span>}
        {source && <small>Nguồn: {source}</small>}
      </figcaption>
    </figure>
  );
}
