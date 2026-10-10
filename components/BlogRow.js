import styles from './BlogRow.module.css';
import {sitePath} from './paths';

/*
  Dòng bài viết gọn: thumbnail nhỏ bên trái, danh mục, tiêu đề, trích dẫn 2 dòng, tác giả và ngày.
  Dùng trong danh sách theo chủ đề ở /blog. headingLevel: h3 mặc định, h4 khi nằm dưới tiêu đề nhóm h3.
*/
export default function BlogRow({post, delay = 0, headingLevel = 'h3', showCategory = true}){
  const Heading = headingLevel;
  const href = sitePath(`/blog/${post.slug}`);
  return (
    <article className={styles.row} data-reveal="" style={{'--reveal-delay': `${delay}ms`}}>
      <a href={href} className={styles.thumb} tabIndex={-1} aria-hidden="true">
        <img src={sitePath(post.image.src)} alt="" loading="lazy" width="1600" height="1000"/>
      </a>
      <div className={styles.body}>
        <p className={styles.meta}>{showCategory && <span className={styles.cat}>{post.category}</span>}<span>{post.date}</span><span>{post.readTime}</span></p>
        <Heading className={styles.title}><a href={href}>{post.title}</a></Heading>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </div>
    </article>
  );
}
