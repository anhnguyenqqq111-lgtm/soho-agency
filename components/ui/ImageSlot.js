import styles from './ImageSlot.module.css';
import {sitePath} from '../paths';

/*
  Ảnh thật nếu có src. Nếu chưa có, hiện khung chờ ghi rõ cần ảnh gì và kích thước gợi ý.
  ratio: tỉ lệ khung, ví dụ '16/10'
*/
export default function ImageSlot({src, alt = '', need, size, ratio = '16/10', className = ''}){
  if (src){
    return (
      <img
        src={sitePath(src)}
        alt={alt}
        loading="lazy"
        className={`${styles.img} ${className}`}
        style={{aspectRatio: ratio}}
      />
    );
  }
  return (
    <div className={`${styles.slot} ${className}`} style={{aspectRatio: ratio}} role="img" aria-label={`Chưa có ảnh: ${need}`}>
      <span className="placeholder">[CẦN ẢNH THẬT]</span>
      <span className={styles.need}>{need}</span>
      {size && <span className={styles.size}>{size}</span>}
    </div>
  );
}
