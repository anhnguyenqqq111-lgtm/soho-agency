import styles from './SeoService.module.css';
import Section from '../../ui/Section';
import Icon from '../../ui/Icon';
import {sitePath} from '../../paths';
import SeoKnowledgeMap from './SeoKnowledgeMap';
import {MethodSection} from './PilotParts';
import {ServiceTouchpointContext, ContextualServiceCTA} from '../ServiceContext';
import {cases} from '../../data/cases';

/*
  Phần giải thích riêng của trang SEO tổng thể, đặt dưới các sơ đồ chung (ServiceOverview):
  bản đồ cụm chủ đề tương tác (nhìn gần sơ đồ trang trụ cột ở hero) → ba lớp nền SEO, mỗi lớp gắn với các bước và
  dấu hiệu ở trên → điểm chạm → hồ sơ bàn giao và dự án → phương pháp → liên hệ.
*/

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
      <Section
        id="ban-do"
        tone="gray"
        surface="flat"
        className={styles.signature}
        title={
          <>
            Mỗi câu hỏi của khách, <span className="hl">một trang trả lời</span>
          </>
        }
        intro="Sơ đồ ở đầu trang là một cụm chủ đề: trang trụ cột ở giữa, xung quanh là các trang trả lời từng câu hỏi của khách. Dưới đây là cùng cụm đó với một ví dụ cụ thể. Chọn một trang để xem nó trả lời gì và dẫn khách đi đâu tiếp."
      >
        <SeoKnowledgeMap />
      </Section>

      <Section
        id="ba-lop"
        title={
          <>
            Ba lớp nền, <span className="hl">sửa từ dưới lên</span>
          </>
        }
        intro="Năm bước ở trên gom lại thành ba lớp: bước 1 sửa kỹ thuật, bước 2 và 3 dựng nội dung, bước 4 làm rõ uy tín. Mỗi dấu hiệu bạn đang gặp thường nằm ở một lớp. Nội dung tốt không lên được nếu Google không đọc được trang, nên SOHO sửa từ dưới lên."
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
        <p className={`${styles.measure} ${styles.measureHead}`}>
          <Icon name="chart-line" size={18} />
          Bước 5 là thước đo: số khách liên hệ và doanh thu đến từ Google, báo cáo mỗi tháng. Thứ hạng chỉ là chỉ số phụ.
        </p>
      </Section>

      <Section
        id="diem-cham"
        tone="gray"
        surface="flat"
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
