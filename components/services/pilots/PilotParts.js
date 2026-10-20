import styles from './PilotParts.module.css';
import Section from '../../ui/Section';
import ArticleBody from '../../article/ArticleBody';
import {sitePath} from '../../paths';

/*
  Phần dùng chung của ba trang dịch vụ thử nghiệm (SEO, Google Ads, Nhận diện):
  breadcrumb trong hero riêng và khối "phương pháp chi tiết" bọc bài viết sẵn có.
*/

export function Crumbs({name, onDark = false}) {
  return (
    <nav aria-label="Breadcrumb" className={`${styles.crumbs} ${onDark ? styles.crumbsDark : ''}`}>
      <ol>
        <li>
          <a href={sitePath('/')}>Trang chủ</a>
        </li>
        <li>
          <a href={sitePath('/dich-vu')}>Dịch vụ</a>
        </li>
        <li>
          <span aria-current="page">{name}</span>
        </li>
      </ol>
    </nav>
  );
}

// Bài viết chi tiết của dịch vụ (nếu có), đặt dưới dạng phần phương pháp để giữ nội dung cho Google đọc
export function MethodSection({article, name}) {
  if (!article) return null;
  return (
    <Section
      id="phuong-phap"
      tone="gray"
      spacing="lg"
      title={
        <>
          Phương pháp <span className="hl">chi tiết</span>
        </>
      }
      intro={`Cách SOHO làm ${name}, viết đầy đủ cho người muốn đọc kỹ trước khi trao đổi.`}
    >
      <div className={styles.articleCard}>
        <ArticleBody article={article} />
      </div>
    </Section>
  );
}
