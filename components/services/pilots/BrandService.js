import styles from './BrandService.module.css';
import Section from '../../ui/Section';
import Icon from '../../ui/Icon';
import SohoMark from './SohoMark';
import BrandIdentityGallery from './BrandIdentityGallery';
import {Crumbs, MethodSection} from './PilotParts';
import {ServiceTouchpointContext, ContextualServiceCTA} from '../ServiceContext';
import {testimonials} from '../../data/proof';

/*
  Trang Nhận diện thương hiệu, kiến trúc "Triển lãm nhận diện":
  hero như một bức tường trưng bày (logo đóng khung, nhãn tác phẩm) → phòng trưng bày tương tác 5 thẻ
  → lộ trình 6 buổi, mỗi buổi ghi rõ bạn duyệt gì → điểm chạm → hộp bàn giao + nhận xét khách đã đăng công khai → liên hệ.
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
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <Crumbs name={service.menuTitle} />
            <p className={styles.eyebrow}>Triển lãm nhận diện</p>
            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.lead}>{service.intro}</p>
            <p className={styles.promise}>{service.promise}</p>
            <div className={styles.actions}>
              <a href="#trung-bay" className={styles.primary}>
                Xem một bộ nhận diện <Icon name="arrow-down" size={18} />
              </a>
              <a href="#lien-he" className={styles.secondary}>
                Trao đổi về nhận diện thương hiệu <Icon name="arrow-right" size={18} />
              </a>
            </div>
          </div>
          <figure className={styles.exhibit}>
            <div className={styles.frame}>
              <SohoMark className={styles.frameMark} title="Logo SOHO Agency, phiên bản Open Corner" />
            </div>
            <figcaption className={styles.placard}>
              <strong>Open Corner</strong>
              <span>Logo SOHO Agency: khung bốn góc mở, chữ S và H cùng màu nét, hai chữ O màu Brand Orange.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <Section
        id="trung-bay"
        tone="gray"
        title={
          <>
            Một bộ nhận diện <span className="hl">gồm những gì</span>
          </>
        }
        intro={`${service.insight} Đây là năm phần của một bộ hoàn chỉnh, trình bày bằng chính bộ nhận diện của SOHO.`}
      >
        <BrandIdentityGallery />
      </Section>

      <Section
        id="lo-trinh"
        title={
          <>
            Sáu buổi, <span className="hl">mỗi buổi bạn duyệt một thứ</span>
          </>
        }
        intro={service.proof}
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
        <div className={styles.signs}>
          <p className={styles.signsHead}>Nên làm lại nhận diện khi</p>
          <ul>
            {service.pains.map(p => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="diem-cham"
        tone="gray"
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
            <p className={styles.outcomesHead}>Mục tiêu hướng tới</p>
            <ul className={styles.outcomes}>
              {service.outcomes.map(o => (
                <li key={o}>{o}</li>
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
