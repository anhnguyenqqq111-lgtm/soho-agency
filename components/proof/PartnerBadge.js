import styles from './PartnerBadge.module.css';
import {sitePath} from '../paths';

/*
  Huy hiệu đối tác chính thức (hiện chỉ Google Partner).
  Có profileUrl thì cả huy hiệu là link mở trang hồ sơ đối tác (yêu cầu của Google); chưa có thì hiện nhãn thiếu dữ liệu.
  Có criteria thì rê chuột hoặc Tab vào huy hiệu hiện ô giải thích các tiêu chí Google đã xác nhận.
  size: chiều cao hiển thị (px). Không đổi màu, không cắt, không đặt lên nền làm mất viền của huy hiệu.
*/
export default function PartnerBadge({partner, size = 88, showNeed = true, tipId, align = 'start'}){
  if (!partner?.verified || !partner.logo) return null;
  const tid = partner.criteria?.length ? (tipId || `tip-${partner.name.toLowerCase().replace(/\s+/g, '-')}`) : undefined;
  const img = (
    <img
      src={sitePath(partner.logo)}
      alt={`${partner.name}${partner.year ? ` ${partner.year}` : ''}`}
      width={partner.width}
      height={partner.height}
      className={styles.img}
      style={{height: size}}
      loading="lazy"
    />
  );
  return (
    <span className={`${styles.wrap} ${align === 'end' ? styles.end : ''}`}>
      {partner.profileUrl
        ? <a href={partner.profileUrl} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label={`${partner.name}: xem hồ sơ đối tác của SOHO trên Google`} aria-describedby={tid}>{img}</a>
        : img}
      {tid && (
        <span className={styles.tip} role="tooltip" id={tid}>
          <strong>Google xác nhận SOHO đạt:</strong>
          <span className={styles.tipList}>{partner.criteria.map(c => <span key={c}>{c}</span>)}</span>
          {partner.profileUrl && <span className={styles.tipMore}>Bấm để xem hồ sơ trên Google ↗</span>}
        </span>
      )}
      {!partner.profileUrl && showNeed && <span className="placeholder">[CẦN LINK HỒ SƠ {partner.name.toUpperCase()}]</span>}
    </span>
  );
}
