import styles from './PartnerBadge.module.css';
import {sitePath} from '../paths';

/*
  Huy hiệu đối tác chính thức (hiện chỉ Google Partner).
  Có profileUrl thì cả huy hiệu là link mở trang hồ sơ đối tác (yêu cầu của Google); chưa có thì hiện nhãn thiếu dữ liệu.
  size: chiều cao hiển thị (px). Không đổi màu, không cắt, không đặt lên nền làm mất viền của huy hiệu.
*/
export default function PartnerBadge({partner, size = 88, showNeed = true}){
  if (!partner?.verified || !partner.logo) return null;
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
    <span className={styles.wrap}>
      {partner.profileUrl
        ? <a href={partner.profileUrl} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label={`${partner.name}: xem hồ sơ đối tác của SOHO trên Google`}>{img}</a>
        : img}
      {!partner.profileUrl && showNeed && <span className="placeholder">[CẦN LINK HỒ SƠ {partner.name.toUpperCase()}]</span>}
    </span>
  );
}
