import styles from './BrandService.module.css';
import Section from '../../ui/Section';
import Icon from '../../ui/Icon';
import BrandIdentityGallery from './BrandIdentityGallery';
import {MethodSection} from './PilotParts';
import {ServiceTouchpointContext, ContextualServiceCTA} from '../ServiceContext';
import {testimonials} from '../../data/proof';

/*
  Phần giải thích riêng của trang Nhận diện thương hiệu, đặt dưới các sơ đồ chung (ServiceOverview):
  phòng trưng bày 5 thẻ (làm rõ sơ đồ hệ nhận diện ở hero) → mỗi bước trong 6 bước bạn duyệt gì → điểm chạm
  → hộp bàn giao và nhận xét khách đã đăng công khai → liên hệ.
  Chưa có dự án nhận diện nào được công bố, nên phần trưng bày dùng chính hệ nhận diện SOHO và ghi rõ như vậy.
*/

// Việc khách duyệt ở mỗi bước, theo đúng thứ tự service.process
const REVIEWS = [
  'Phạm vi, mốc thời gian và báo giá',
  'Bản tóm tắt giá trị cốt lõi và tính cách thương hiệu',
  'Chân dung khách hàng và bảng so sánh đối thủ',
  'Các hướng màu, chữ, phong cách để chọn một',
  'Logo đặt trên ứng dụng thật: danh thiếp, bao bì, bài đăng',
  'File gốc, file in và bộ hướng dẫn trước khi nhận'
];

// Hai nhận xét khách nói về nhận diện, lấy nguyên văn từ components/data/proof.js
const BRAND_QUOTES = testimonials.filter(t => /nhận diện/i.test(t.quote));

export default function BrandService({service, article, names}) {
  return (
    <>
      <Section
        id="trung-bay"
        tone="gray"
        surface="flat"
        title={
          <>
            Một bộ nhận diện <span className="hl">gồm những gì</span>
          </>
        }
        intro="Sơ đồ ở đầu trang là một hệ nhận diện dùng chung cho website, mạng xã hội, bao bì và cửa hàng. Dưới đây là năm phần làm nên hệ đó, trình bày bằng chính bộ nhận diện của SOHO."
      >
        <BrandIdentityGallery />
      </Section>

      <Section
        id="duyet"
        title={
          <>
            Sáu bước ở trên, <span className="hl">mỗi bước bạn duyệt gì</span>
          </>
        }
        intro="Bạn duyệt xong một bước rồi mới sang bước sau, nên ít phải sửa lại từ đầu."
      >
        <ol className={styles.rooms}>
          {service.process.map((step, i) => (
            <li key={step} className={styles.room}>
              <span className={styles.roomNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.roomTitle}>{step}</h3>
              <p className={styles.roomReview}>
                <span>Bạn duyệt</span>
                {REVIEWS[i]}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="diem-cham"
        tone="gray"
        surface="flat"
        title={
          <>
            Nhận diện đứng ở đâu trên <span className="hl">hành trình khách hàng</span>
          </>
        }
        intro="Lần đầu khách gặp bạn, trước khi đọc một chữ nào. Nhận diện quyết định họ có nhớ bạn ở lần gặp tiếp theo không."
      >
        <ServiceTouchpointContext slug={service.slug} names={names} />
      </Section>

      <Section
        id="ban-giao"
        title={
          <>
            Hộp <span className="hl">bàn giao</span>
          </>
        }
        intro="Các file dùng được ngay cho web, in ấn và mạng xã hội."
      >
        <div className={styles.handover}>
          <div className={styles.box}>
            <ul>
              {service.deliverables.map(d => (
                <li key={d}>
                  <Icon name="check" size={18} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          {BRAND_QUOTES.length > 0 && (
            <ul className={styles.quotes}>
              {BRAND_QUOTES.map(q => (
                <li key={q.name}>
                  <blockquote>
                    <p>“{q.quote}”</p>
                  </blockquote>
                  <p className={styles.quoteBy}>
                    <strong>{q.name}</strong>
                    {q.role}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <MethodSection article={article} name={service.menuTitle} />

      <ContextualServiceCTA
        slug={service.slug}
        text="Kể SOHO bạn đang ở đâu: mới ra mắt, đổi định vị hay hình ảnh đang mỗi nơi một kiểu. SOHO đề xuất phạm vi vừa đủ, không bắt làm trọn bộ."
      />
    </>
  );
}
