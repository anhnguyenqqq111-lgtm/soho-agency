import styles from './Photo.module.css';
import {sitePath} from '../paths';

/*
  Ảnh có hiệu ứng hé lộ khi cuộn tới và phóng nhẹ khi hover.
  image: một mục trong components/data/images.js
  ratio: tỉ lệ khung, ví dụ '21/9'
  eager: true cho ảnh nằm trong màn hình đầu tiên
*/
export default function Photo({image, ratio, eager = false, caption, className = ''}){
  return (
    <figure className={`${styles.figure} ${className}`} data-reveal="image">
      <div className={`${styles.frame} reveal-frame`} style={ratio ? {aspectRatio: ratio} : undefined}>
        <img
          src={sitePath(image.src)}
          alt={image.alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding="async"
          className={styles.img}
        />
      </div>
      {(caption || image.temporary) && (
        <figcaption className={styles.caption}>
          {caption && <span>{caption}</span>}
          {image.temporary && (
            <span className={styles.credit}>
              <span className="placeholder">[ẢNH TẠM]</span> Ảnh: <a href={image.source} target="_blank" rel="noopener noreferrer">{image.author}</a>, Unsplash
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
