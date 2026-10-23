import styles from './PilotParts.module.css';
import Section from '../../ui/Section';
import ArticleBody from '../../article/ArticleBody';
import Icon from '../../ui/Icon';
import ed from '../editorial/editorial.module.css';

/*
  Phần dùng chung của các trang dịch vụ:
  thanh điều hướng trong trang và khối "phương pháp chi tiết" bọc bài viết sẵn có (mở ra khi cần đọc).
*/

// Bài viết chi tiết của dịch vụ (nếu có), đặt dưới dạng phần phương pháp để giữ nội dung cho Google đọc
// editorial: bố cục V4.0 (tiêu đề hẹp bên trái, bài viết thu gọn bên phải) cho trang thí điểm
export function MethodSection({article, name, tone = 'gray', editorial = false}) {
  if (!article) return null;
  if (editorial)
    return (
      <section id="phuong-phap" className={`${ed.band} ${tone === 'gray' ? ed.canvas : ''}`} aria-labelledby="phuong-phap-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>Đọc sâu</p>
            <h2 id="phuong-phap-title" className={ed.h2}>
              Phương pháp chi tiết
            </h2>
          </div>
          <div className={ed.main}>
            <p className={ed.lead}>Cách SOHO làm {name}, viết đầy đủ cho người muốn đọc kỹ trước khi trao đổi.</p>
            <details className={styles.method}>
              <summary>
                <span>Đọc phương pháp đầy đủ</span>
                <Icon name="arrow-down" size={18} />
              </summary>
              <div className={styles.articleCard}>
                <ArticleBody article={article} />
              </div>
            </details>
          </div>
        </div>
      </section>
    );
  return (
    <Section
      id="phuong-phap"
      tone={tone}
      surface="flat"
      spacing="lg"
      title={
        <>
          Phương pháp <span className="hl">chi tiết</span>
        </>
      }
      intro={`Cách SOHO làm ${name}, viết đầy đủ cho người muốn đọc kỹ trước khi trao đổi.`}
    >
      <details className={styles.method}>
        <summary>
          <span>Đọc phương pháp đầy đủ</span>
          <Icon name="arrow-down" size={18} />
        </summary>
        <div className={styles.articleCard}>
          <ArticleBody article={article} />
        </div>
      </details>
    </Section>
  );
}

// Thanh điều hướng trong trang, dính dưới header. items: [[id, nhãn], ...]
export function ServiceSubnav({items}) {
  return (
    <nav className={styles.subnav} aria-label="Nội dung trang dịch vụ">
      <div className={`container ${styles.subnavInner}`}>
        {items.map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
