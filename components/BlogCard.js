import styles from './BlogCard.module.css';
import {sitePath} from './paths';

/*
  Thẻ bài viết theo GOHA: ảnh bìa có tag + tiêu đề, phần dưới là tiêu đề, tác giả, ngày.
  Chưa có ảnh bìa nên bìa là nền tối gradient với tiêu đề và logo SOHO.
*/
export default function BlogCard({post, delay = 0}){
  return (
    <article className={styles.card} data-reveal="" style={{'--reveal-delay': `${delay}ms`}}>
      <a href={sitePath(`/blog/${post.slug}`)} className={styles.cover}>
        <span className={styles.tags}>
          {post.featured && <span>Nổi bật</span>}
          <span>{post.category}</span>
        </span>
        <img src={sitePath('/brand/soho-logo-white-crop.svg')} alt="" className={styles.logo}/>
        <span className={styles.coverCat}>{post.category}</span>
        <span className={styles.coverRead}>{post.readTime}</span>
      </a>
      <div className={styles.body}>
        <h3 className={styles.title}><a href={sitePath(`/blog/${post.slug}`)}>{post.title}</a></h3>
        <div className={styles.meta}>
          <strong>{post.author}</strong>
          <span>Cập nhật {post.date}</span>
        </div>
      </div>
    </article>
  );
}
