import styles from './SeoService.module.css';
import Section from '../../ui/Section';
import Icon from '../../ui/Icon';
import {sitePath} from '../../paths';
import SeoKnowledgeMap from './SeoKnowledgeMap';
import {Crumbs, MethodSection} from './PilotParts';
import {ServiceTouchpointContext, ContextualServiceCTA} from '../ServiceContext';
import {cases} from '../../data/cases';

/*
  Trang SEO tổng thể, kiến trúc "Hệ sinh thái tìm kiếm":
  hero dạng thang truy vấn (người tìm đi từ tìm hiểu tới liên hệ) → bản đồ cụm chủ đề tương tác → ba lớp nền SEO
  (kỹ thuật, nội dung, uy tín) xếp như mặt cắt → điểm chạm trên hành trình → hồ sơ bàn giao → dự án → phương pháp → liên hệ.
*/

const LADDER = [
  {q: 'mẫu quán cà phê sân vườn đẹp', intent: 'Tìm hiểu'},
  {q: 'chi phí làm quán cà phê sân vườn', intent: 'So sánh'},
  {q: 'báo giá thi công quán cà phê 200m2', intent: 'Quyết định'},
  {q: 'công trình quán cà phê đã thi công', intent: 'Tin tưởng'}
];

// Ba lớp, đọc từ trên xuống; lớp dưới cùng là nền móng
const LAYERS = [
  {
    key: 'uy-tin',
    name: 'Uy tín',
    question: 'Google và khách có tin trang này không?',
    checks: ['Thông tin thương hiệu và tác giả rõ ràng', 'Dự án, ảnh, quy trình thật', 'Dữ liệu cấu trúc cho tổ chức, dịch vụ, bài viết'],
    sign: 'Có lượt truy cập nhưng ít người điền form, gọi điện hay đặt mua'
  },
  {
    key: 'noi-dung',
    name: 'Nội dung',
    question: 'Trang có trả lời đúng điều người tìm cần?',
    checks: ['Bản đồ từ khóa theo từng bước mua', 'Trang chủ đề và bài vệ tinh', 'Liên kết nội bộ có chủ đích'],
    sign: 'Viết rất nhiều bài nhưng từ khóa không lên trang đầu'
  },
  {
    key: 'ky-thuat',
    name: 'Kỹ thuật',
    question: 'Google có đọc và lập chỉ mục được trang không?',
    checks: ['Tốc độ và trải nghiệm trên điện thoại', 'Lập chỉ mục, trang trùng, chuyển hướng', 'Cấu trúc đường dẫn và sơ đồ trang'],
    sign: 'Website có lỗi kỹ thuật khiến Google đọc và xếp hạng kém'
  }
];

export default function SeoService({service, article, names}) {
  const project = cases.find(c => c.slug === 'king-decor-luxury');
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <Crumbs name={service.menuTitle} />
            <p className={styles.eyebrow}>Hệ sinh thái tìm kiếm</p>
            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.lead}>{service.intro}</p>
            <p className={styles.promise}>{service.promise}</p>
            <div className={styles.actions}>
              <a href="#lien-he" className={styles.primary}>
                Nhận đánh giá hệ thống SEO <Icon name="arrow-right" size={18} />
              </a>
              <a href="#ban-do" className={styles.secondary}>
                Xem bản đồ chủ đề <Icon name="arrow-down" size={18} />
              </a>
            </div>
          </div>
          <figure className={styles.ladder}>
            <ol>
              {LADDER.map((s, i) => (
                <li key={s.q} style={{'--i': i}}>
                  <span className={styles.ladderIntent}>{s.intent}</span>
                  <span className={styles.ladderQuery}>{s.q}</span>
                </li>
              ))}
            </ol>
            <figcaption>Một người tìm, bốn lần gõ khác nhau trước khi liên hệ. SEO tổng thể có một trang trả lời cho mỗi lần gõ. Ví dụ minh họa.</figcaption>
          </figure>
        </div>
      </section>

      <Section
        id="ban-do"
        title={
          <>
            Mỗi câu hỏi của khách, <span className="hl">một trang trả lời</span>
          </>
        }
        intro={`${service.insight} Chọn một trang trên bản đồ để xem nó trả lời gì và dẫn khách đi đâu tiếp.`}
      >
        <SeoKnowledgeMap />
      </Section>

      <Section
        id="ba-lop"
        tone="gray"
        title={
          <>
            Ba lớp nền, <span className="hl">sửa từ dưới lên</span>
          </>
        }
        intro="Nội dung tốt không lên được nếu Google không đọc được trang. Uy tín không giữ được khách nếu trang không trả lời đúng câu hỏi. SOHO kiểm tra cả ba lớp trước khi viết bài mới."
      >
        <ol className={styles.layers}>
          {LAYERS.map((l, i) => (
            <li key={l.key} className={styles.layer} data-layer={l.key}>
              <div className={styles.layerHead}>
                <span className={styles.layerNum}>{LAYERS.length - i}</span>
                <h3 className={styles.layerName}>{l.name}</h3>
                <p className={styles.layerQ}>{l.question}</p>
              </div>
              <ul className={styles.layerChecks}>
                {l.checks.map(c => (
                  <li key={c}>
                    <Icon name="check" size={16} />
                    {c}
                  </li>
                ))}
              </ul>
              <p className={styles.layerSign}>
                <span>Dấu hiệu lớp này đang hỏng</span>
                {l.sign}
              </p>
            </li>
          ))}
        </ol>
        <div className={styles.measure}>
          <p className={styles.measureHead}>
            <Icon name="chart-line" size={18} />
            Mục tiêu hướng tới, đo bằng khách và doanh thu từ Google mỗi tháng
          </p>
          <ul>
            {service.outcomes.map(o => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="diem-cham"
        title={
          <>
            SEO đứng ở đâu trên <span className="hl">hành trình khách hàng</span>
          </>
        }
        intro="Khách đã có nhu cầu và đang tìm. SEO giúp bạn có mặt ở lúc đó, rồi trang đích quyết định họ có liên hệ không."
      >
        <ServiceTouchpointContext slug={service.slug} names={names} />
      </Section>

      <Section
        id="ban-giao"
        tone="gray"
        title={
          <>
            Hồ sơ <span className="hl">bàn giao</span>
          </>
        }
        intro="Tài liệu SOHO lập trong quá trình làm, để đội nhà đọc được và dùng tiếp."
      >
        <div className={styles.handover}>
          <ul className={styles.files}>
            {service.deliverables.map(d => (
              <li key={d}>
                <Icon name="file-text" size={20} />
                {d}
              </li>
            ))}
          </ul>
          {project && (
            <a href={sitePath(`/du-an/${project.slug}`)} className={styles.case}>
              <img src={sitePath(project.image)} alt={`Dự án ${project.name}`} width={project.imageWidth} height={project.imageHeight} loading="lazy" />
              <span className={styles.caseBody}>
                <span className={styles.caseTag}>Dự án có SEO website</span>
                <strong>{project.name}</strong>
                <span>{project.problem}</span>
                <span className={styles.caseResult}>{project.result}</span>
                <span className={styles.caseMore}>
                  Xem dự án <Icon name="arrow-right" size={16} />
                </span>
              </span>
            </a>
          )}
        </div>
        <p className={styles.fit}>{service.proof}</p>
      </Section>

      <MethodSection article={article} name={service.menuTitle} />

      <ContextualServiceCTA
        slug={service.slug}
        text="Gửi website và nhóm sản phẩm chính. SOHO xem ba lớp kỹ thuật, nội dung, uy tín và chỉ ra lớp nào đang chặn khách tìm thấy bạn."
      />
    </>
  );
}
