import styles from './BlogCard.module.css';
import {sitePath} from './paths';
import {thumbnailOf} from './blogVisuals';

/*
  Thẻ bài viết: thumbnail (nếu bài có image, cắt 16:10), viền trên gradient, danh mục, tiêu đề, trích dẫn, tác giả.
  headingLevel: thẻ tiêu đề, h3 mặc định; h4 khi thẻ nằm dưới một tiêu đề h3 (nhóm danh mục ở /blog).
*/
export default function BlogCard({post, delay = 0, headingLevel = 'h3'}) {
  const Heading = headingLevel;
  const href = sitePath(`/blog/${post.slug}`);
  // Thumbnail: ảnh 1200×675 từ Image Studio nếu bài đã có, không thì ảnh gốc 1600×1000; tỉ lệ khung theo đúng ảnh.
  const thumb = post.image ? thumbnailOf(post) : null;
  return (
    <article className={`${styles.card} ${post.image ? styles.withThumb : ''}`} data-reveal="" style={{'--reveal-delay': `${delay}ms`}}>
      {post.image && (
        <a href={href} className={styles.thumb} tabIndex={-1} aria-hidden="true">
          <img
            src={sitePath(thumb.src)}
            alt=""
            loading="lazy"
            width={thumb.width}
            height={thumb.height}
            style={{aspectRatio: `${thumb.width} / ${thumb.height}`}}
          />
        </a>
      )}
      <div className={styles.body}>
        <p className={styles.meta}>
          <span className={styles.cat}>{post.category}</span>
          <span>{post.readTime}</span>
        </p>
        <Heading className={styles.title}>
          <a href={href}>{post.title}</a>
        </Heading>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <p className={styles.by}>
          <strong>{post.author}</strong> · {post.date}
        </p>
      </div>
    </article>
  );
}
