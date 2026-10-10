import styles from './BlogCard.module.css';
import {sitePath} from './paths';

/*
  Thẻ bài viết: thumbnail (nếu bài có image, cắt 16:10), viền trên gradient, danh mục, tiêu đề, trích dẫn, tác giả.
  headingLevel: thẻ tiêu đề, h3 mặc định; h4 khi thẻ nằm dưới một tiêu đề h3 (nhóm danh mục ở /blog).
*/
export default function BlogCard({post, delay = 0, headingLevel = 'h3'}){
  const Heading = headingLevel;
  const href = sitePath(`/blog/${post.slug}`);
  return (
    <article className={`${styles.card} ${post.image ? styles.withThumb : ''}`} data-reveal="" style={{'--reveal-delay': `${delay}ms`}}>
      {post.image && (
        <a href={href} className={styles.thumb} tabIndex={-1} aria-hidden="true">
          <img src={sitePath(post.image.src)} alt="" loading="lazy" width="1600" height="1000"/>
        </a>
      )}
      <div className={styles.body}>
        <p className={styles.meta}><span className={styles.cat}>{post.category}</span><span>{post.readTime}</span></p>
        <Heading className={styles.title}><a href={href}>{post.title}</a></Heading>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <p className={styles.by}><strong>{post.author}</strong> · {post.date}</p>
      </div>
    </article>
  );
}
