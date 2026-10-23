import styles from './PilotParts.module.css';
import Section from '../../ui/Section';
import ArticleBody from '../../article/ArticleBody';
import Icon from '../../ui/Icon';

/*
  Phần dùng chung của các trang dịch vụ:
  thanh điều hướng trong trang và khối "phương pháp chi tiết" bọc bài viết sẵn có (mở ra khi cần đọc).
*/

// Bài viết chi tiết của dịch vụ (nếu có), đặt dưới dạng phần phương pháp để giữ nội dung cho Google đọc
export function MethodSection({article, name, tone = 'gray'}) {
  if (!article) return null;
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
