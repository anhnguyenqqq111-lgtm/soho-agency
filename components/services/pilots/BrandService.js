import styles from './BrandService.module.css';
import ed from '../editorial/editorial.module.css';
import BrandIdentityGallery from './BrandIdentityGallery';
import {MethodSection} from './PilotParts';
import {ContextualServiceCTA} from '../ServiceContext';
import {ServiceFit, ScopeSpec, NextSteps} from '../modules/Modules';
import {EXPERIENCE} from '../../data/serviceExperience';
import {testimonials} from '../../data/proof';

/*
  Phần dưới sơ đồ của trang Nhận diện thương hiệu (V6.0, bố cục "triển lãm" của V4.0).
  Có hợp với bạn? → hệ nhận diện lệch ở bốn điểm chạm của sơ đồ hero → phòng trưng bày ứng dụng → lời khách đã đăng
  công khai → phạm vi kèm các mốc bạn duyệt → bước tiếp theo.
  Chưa có dự án nhận diện nào được phép công bố, nên phần trưng bày dùng chính hệ nhận diện SOHO và ghi rõ như vậy.
*/

// Bốn điểm chạm đúng như trên sơ đồ ở hero
const DRIFT = [
  {
    point: 'Website',
    why: 'Máy không có phông chính thức nên tự thay phông khác; màu nút và màu chữ trên nền được chọn tùy trang.',
    rule: 'Phông dùng cho web, mã màu cho màn hình, quy định màu nút và độ tương phản chữ.'
  },
  {
    point: 'Mạng xã hội',
    why: 'Mỗi người làm một bài, mỗi bài một phông; logo đặt lên ảnh nhiều chi tiết nên mất nét.',
    rule: 'Mẫu bài đăng, vị trí và vùng an toàn của logo, cách dùng ảnh.'
  },
  {
    point: 'Bao bì',
    why: 'Màu in khác màu trên màn hình; logo in quá nhỏ hoặc in một màu thì nhòe.',
    rule: 'Mã màu cho in, bản logo một màu, cỡ nhỏ nhất được phép in.'
  },
  {
    point: 'Cửa hàng',
    why: 'Biển hiệu làm lại từ ảnh chụp hoặc file nén, sai tỉ lệ và màu.',
    rule: 'File gốc dạng vector, tỉ lệ và khoảng trống quanh logo, chất liệu gợi ý.'
  }
];

// Việc khách duyệt ở mỗi bước, theo đúng thứ tự service.process (dải các bước ở đầu trang)
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
  const x = EXPERIENCE[service.slug];
  return (
    <>
      <ServiceFit fit={x.fit} slug={service.slug} names={names} num="01" tone="canvas" />

      <section id="nguyen-nhan" className={ed.band} aria-labelledby="nguyen-nhan-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>
              <b>02</b> Vì sao hình ảnh bị lệch
            </p>
            <h2 id="nguyen-nhan-title" className={ed.h2}>
              Khách không nhớ logo. Khách nhớ những lần gặp giống nhau.
            </h2>
          </div>
          <div className={ed.main}>
            <p className={styles.rootText}>
              Khi định vị chưa rõ (bạn bán cho ai, khác đối thủ ở điểm nào), không ai có tiêu chí để chọn màu, chữ hay hình. Thiết kế khi đó đi theo sở thích
              của người duyệt, và mỗi người duyệt thích một kiểu.
            </p>
            <p className={`${ed.body} ${styles.rootNote}`}>
              Bốn điểm chạm dưới đây đúng như trên sơ đồ ở đầu trang. Mỗi điểm có một chỗ hay lệch và một quy định cần có.
            </p>
          </div>
          <ol className={`${ed.full} ${styles.drift}`} aria-label="Chỗ hay lệch ở bốn điểm chạm trên sơ đồ">
            {DRIFT.map((d, i) => (
              <li key={d.point}>
                <span className={styles.driftNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.driftPoint}>{d.point}</h3>
                <p className={styles.driftWhy}>
                  <span>Hay lệch vì</span>
                  {d.why}
                </p>
                <p className={styles.driftRule}>
                  <span>Quy định cần có</span>
                  {d.rule}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="trung-bay" className={`${ed.band} ${ed.canvas}`} aria-labelledby="trung-bay-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>
              <b>03</b> Triển lãm ứng dụng
            </p>
            <h2 id="trung-bay-title" className={ed.h2}>
              Một hệ quy định một lần, dùng được ở mọi nơi
            </h2>
          </div>
          <p className={`${ed.main} ${ed.lead} ${styles.galleryIntro}`}>
            Năm phần của một bộ nhận diện hoàn chỉnh, mỗi phần trả lời một chỗ hay lệch ở trên. Ví dụ là chính bộ nhận diện của SOHO, vì chưa có dự án nhận diện
            nào của khách được phép công bố.
          </p>
          <div className={ed.full}>
            <BrandIdentityGallery />
          </div>
        </div>
      </section>

      {BRAND_QUOTES.length > 0 && (
        <section id="khach-noi" className={ed.band} aria-labelledby="khach-noi-title">
          <div className={`container ${ed.grid}`}>
            <p className={`${ed.full} ${ed.label}`}>
              <b>04</b> Khách hàng nói
            </p>
            <h2 id="khach-noi-title" className="visually-hidden">
              Nhận xét của khách hàng về nhận diện
            </h2>
            {BRAND_QUOTES.map(q => (
              <figure key={q.name} className={`${ed.half} ${styles.quote}`}>
                <blockquote>
                  <p>“{q.quote}”</p>
                </blockquote>
                <figcaption>
                  <strong>{q.name}</strong>
                  {q.role}
                </figcaption>
              </figure>
            ))}
            <p className={`${ed.full} ${ed.small}`}>Nhận xét lấy nguyên văn từ trang chủ sohoagency.vn, nơi SOHO đã đăng công khai.</p>
          </div>
        </section>
      )}

      <ScopeSpec
        scope={x.scope}
        deliverables={service.deliverables}
        slug={service.slug}
        names={names}
        num="05"
        dark={false}
        aside={
          <div className={styles.milestones}>
            <h3 className={styles.milestonesHead}>Các mốc bạn duyệt, theo dải các bước</h3>
            <ol>
              {REVIEWS.map((r, i) => (
                <li key={r}>
                  <span>Bước {i + 1}</span>
                  {r}
                </li>
              ))}
            </ol>
          </div>
        }
      />

      <NextSteps slug={service.slug} names={names} num="06" tone="white" />

      <MethodSection article={article} name={service.menuTitle} tone="gray" />

      <ContextualServiceCTA
        slug={service.slug}
        text="Kể SOHO bạn đang ở đâu: mới ra mắt, đổi định vị hay hình ảnh đang mỗi nơi một kiểu. SOHO đề xuất phạm vi vừa đủ, không bắt làm trọn bộ."
      />
    </>
  );
}
