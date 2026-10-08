import styles from './BlogCard.module.css';
import {sitePath} from './paths';

// Thẻ bài viết tối giản: không ảnh bìa, viền trên gradient, danh mục, tiêu đề, trích dẫn, tác giả.
export default function BlogCard({post, delay = 0}){
  return (
    <article className={styles.card} data-reveal="" style={{'--reveal-delay': `${delay}ms`}}>
      <p className={styles.meta}><span className={styles.cat}>{post.category}</span><span>{post.readTime}</span></p>
      <h3 className={styles.title}><a href={sitePath(`/blog/${post.slug}`)}>{post.title}</a></h3>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <p className={styles.by}><strong>{post.author}</strong> · {post.date}</p>
    </article>
  );
}
