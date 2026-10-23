import styles from './SeoService.module.css';
import Section from '../../ui/Section';
import Icon from '../../ui/Icon';
import {sitePath} from '../../paths';
import SeoKnowledgeMap from './SeoKnowledgeMap';
import {MethodSection} from './PilotParts';
import {ProblemStatement, Responsibility, MeasurementLadder} from '../insight/Insight';
import {ServiceTouchpointContext, ContextualServiceCTA} from '../ServiceContext';
import {cases} from '../../data/cases';

/*
  Phần dưới sơ đồ của trang SEO tổng thể (Redesign 3.1, phong cách "phân tích tìm kiếm"). Sơ đồ mở đầu là cụm chủ đề:
  sáu nhóm bài cùng dẫn về trang dịch vụ. Phần dưới phát triển đúng ý đó:
  vấn đề (có truy cập mà không có khách) → vì sao (lượng tìm và ý định mua là hai trục khác nhau, đọc theo từng nút
  của sơ đồ, kèm bản đồ ví dụ) → SOHO chẩn đoán và đổi gì, hai bên làm gì → đo ở 4 tầng và giới hạn → nối vào hành trình.
*/

// Mỗi dòng là một nút trên sơ đồ cụm chủ đề ở hero, theo thứ tự gần quyết định dần
const INTENTS = [
  {
    node: 'Câu hỏi',
    state: 'Đang tìm ý tưởng',
    query: 'mẫu quán cà phê sân vườn đẹp',
    volume: 'Nhiều',
    near: 'Xa',
    page: 'Bài hướng dẫn có ảnh, dẫn sang bài chi phí'
  },
  {
    node: 'So sánh',
    state: 'Đang so lựa chọn',
    query: 'nên thuê công ty hay tự làm quán cà phê',
    volume: 'Vừa',
    near: 'Vừa',
    page: 'Bài so sánh có tiêu chí rõ'
  },
  {
    node: 'Chi phí',
    state: 'Đang tính tiền',
    query: 'chi phí làm quán cà phê sân vườn',
    volume: 'Vừa',
    near: 'Gần',
    page: 'Bài phân tích chi phí, dẫn sang báo giá'
  },
  {
    node: 'Câu chuyện khách',
    state: 'Đang tìm bằng chứng',
    query: 'công trình quán cà phê đã thi công',
    volume: 'Ít',
    near: 'Gần',
    page: 'Trang dự án có ảnh thật'
  },
  {
    node: 'Quy trình',
    state: 'Đang hình dung làm việc',
    query: 'quy trình thi công quán cà phê',
    volume: 'Ít',
    near: 'Gần',
    page: 'Trang quy trình và bảo hành'
  },
  {
    node: 'Trang dịch vụ',
    state: 'Sẵn sàng liên hệ',
    query: 'công ty thi công quán cà phê sân vườn',
    volume: 'Ít',
    near: 'Rất gần',
    page: 'Trang dịch vụ có giá tham khảo và form',
    acc: true
  }
];

// Chẩn đoán → thay đổi, mỗi cặp ứng với một nguyên nhân ở phần trên
const FIXES = [
  {
    diagnose: 'Truy vấn nào đang mang người tới, và trang nào đang nhận họ (Search Console)',
    change: 'Gom bài theo cụm, mỗi nhóm truy vấn có đúng một trang trả lời, bỏ hoặc gộp bài trùng'
  },
  {diagnose: 'Bài nào không có đường dẫn về trang dịch vụ', change: 'Liên kết nội bộ theo bước tiếp theo của người đọc, không chèn link cho đủ số'},
  {
    diagnose: 'Trang dịch vụ thiếu gì so với câu hỏi của người sắp mua',
    change: 'Bổ sung giá tham khảo, quy trình, công trình thật; phối hợp CRO nếu trang cần đổi bố cục'
  },
  {
    diagnose: 'Google có đọc và lập chỉ mục được các trang không',
    change: 'Sửa lỗi kỹ thuật trước khi viết thêm, vì trang không được lập chỉ mục thì không có cơ hội hiện lên'
  }
];

export default function SeoService({service, article, names}) {
  const project = cases.find(c => c.slug === 'king-decor-luxury');
  return (
    <>
      <Section
        id="van-de"
        tone="gray"
        surface="flat"
        kicker="Vấn đề"
        title={
          <>
            Vì sao có lượt truy cập <span className="hl">mà không có khách?</span>
          </>
        }
      >
        <ProblemStatement
          lead="Sơ đồ ở đầu trang có một điểm đến: trang dịch vụ. Nhiều website có đủ các nhóm bài xung quanh, nhưng mỗi bài đứng riêng, không đường nào dẫn người đọc về điểm đến đó."
          cases={[
            {
              label: 'Bài kéo người chưa định mua',
              text: 'Bài "mẫu quán cà phê đẹp" có nhiều lượt xem từ người tìm ảnh tham khảo. Họ đọc xong rồi đi, vì bài không nói tới chi phí hay cách bắt đầu.'
            },
            {
              label: 'Người sắp mua không tìm thấy câu trả lời',
              text: 'Người gõ "chi phí làm quán cà phê sân vườn" đã gần quyết định. Website không có trang trả lời chi phí thì họ đọc trang của đối thủ.'
            },
            {
              label: 'Trang dịch vụ là ngõ cụt',
              text: 'Khách tới được trang dịch vụ nhưng không thấy giá tham khảo, quy trình hay công trình đã làm, nên chưa đủ tin để để lại thông tin.'
            }
          ]}
          note="Ví dụ minh họa cho một doanh nghiệp thi công quán cà phê, không phải số liệu của khách hàng."
        />
      </Section>

      <Section
        id="nguyen-nhan"
        kicker="Vì sao xảy ra"
        title={
          <>
            Lượng tìm kiếm và ý định mua <span className="hl">là hai trục khác nhau</span>
          </>
        }
        intro="Đọc lại từng nút trên sơ đồ: càng gần trang dịch vụ, người tìm càng gần quyết định nhưng càng ít người gõ. Website chỉ chạy theo lượt truy cập sẽ dồn sức vào nút đầu tiên."
      >
        <div className={styles.tableWrap} role="region" aria-label="Bảng các nhóm truy vấn, cuộn ngang trên màn hình nhỏ" tabIndex={0}>
          <table className={styles.intents}>
            <caption className="visually-hidden">Các nhóm truy vấn theo nút trên sơ đồ cụm chủ đề</caption>
            <thead>
              <tr>
                <th scope="col">Nút trên sơ đồ</th>
                <th scope="col">Người tìm đang</th>
                <th scope="col">Ví dụ truy vấn</th>
                <th scope="col">Số người gõ</th>
                <th scope="col">Gần quyết định</th>
                <th scope="col">Trang cần có</th>
              </tr>
            </thead>
            <tbody>
              {INTENTS.map(r => (
                <tr key={r.node} data-acc={r.acc ? '' : undefined}>
                  <th scope="row">{r.node}</th>
                  <td>{r.state}</td>
                  <td className={styles.query}>{r.query}</td>
                  <td>{r.volume}</td>
                  <td>{r.near}</td>
                  <td>{r.page}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.tableNote}>
          “Số người gõ” và “gần quyết định” là xu hướng thường gặp, dùng để so sánh tương đối giữa các nhóm, không phải số đo. Số thật của từng ngành lấy từ
          công cụ nghiên cứu từ khóa và Search Console.
        </p>

        <h3 className={styles.subhead}>Cùng cụm đó, vẽ thành các trang thật</h3>
        <p className={styles.subintro}>Chọn một trang để xem người tìm gõ gì, trang phải trả lời điều gì và dẫn sang đâu tiếp.</p>
        <SeoKnowledgeMap />

        <p className={styles.callout}>
          <strong>Một nguyên nhân nằm dưới cả sơ đồ.</strong> Nếu Google không đọc hoặc không lập chỉ mục được trang vì lỗi kỹ thuật, cấu trúc nội dung tốt đến
          đâu cũng không có cơ hội hiện lên. Vì vậy bước 1 ở trên là kiểm tra kỹ thuật.
        </p>
      </Section>

      <Section
        id="giai-phap"
        tone="gray"
        surface="flat"
        kicker="SOHO làm gì"
        title={
          <>
            Chẩn đoán từng nút, <span className="hl">rồi mới viết thêm</span>
          </>
        }
      >
        <ol className={styles.fixes}>
          {FIXES.map(f => (
            <li key={f.diagnose}>
              <p>
                <span className={styles.fixLabel}>Kiểm tra</span>
                {f.diagnose}
              </p>
              <Icon name="arrow-right" size={20} />
              <p>
                <span className={styles.fixLabel}>Thay đổi</span>
                {f.change}
              </p>
            </li>
          ))}
        </ol>

        <Responsibility
          ours={[
            'Bản đồ từ khóa theo bước mua và cấu trúc cụm chủ đề',
            'Dàn ý cho từng trang, từng bài, và kế hoạch liên kết nội bộ',
            'Danh sách lỗi kỹ thuật kèm cách sửa; sửa trực tiếp hoặc hướng dẫn đội web',
            'Báo cáo hằng tháng bằng số khách và doanh thu từ Google'
          ]}
          yours={[
            'Quyền xem Search Console, GA4 và quyền quản trị website',
            'Thông tin thật để viết đúng: khoảng giá, quy trình, công trình, chính sách',
            'Một người duyệt nội dung chuyên môn trước khi đăng',
            'Phản hồi từ đội sale về khách đến từ Google: có đúng nhu cầu không'
          ]}
        />

        <div className={styles.handover}>
          <div>
            <h3 className={styles.subhead}>Hồ sơ bàn giao</h3>
            <ul className={styles.files}>
              {service.deliverables.map(d => (
                <li key={d}>
                  <Icon name="file-text" size={18} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          {project && (
            <a href={sitePath(`/du-an/${project.slug}`)} className={styles.case}>
              <img src={sitePath(project.image)} alt={`Dự án ${project.name}`} width={project.imageWidth} height={project.imageHeight} loading="lazy" />
              <span className={styles.caseBody}>
                <span className={styles.caseTag}>Dự án thật: {project.scope}</span>
                <strong>{project.name}</strong>
                <span>{project.context}</span>
                <span>{project.work.split('. ').slice(0, 2).join('. ')}.</span>
                <span className={styles.caseNote}>Kết quả SOHO đã công bố của dự án này là về quảng cáo, chưa có số liệu riêng cho SEO.</span>
                <span className={styles.caseMore}>
                  Xem dự án <Icon name="arrow-right" size={16} />
                </span>
              </span>
            </a>
          )}
        </div>
      </Section>

      <Section
        id="do-luong"
        kicker="Đo thế nào"
        title={
          <>
            Thứ hạng là bậc đầu, <span className="hl">không phải đích</span>
          </>
        }
        intro="Bước 5 trên dải các bước là báo cáo bằng khách và doanh thu. Để tới được đó cần đo đủ bốn bậc, vì mỗi bậc trả lời một câu hỏi khác nhau."
      >
        <MeasurementLadder
          metrics={{
            activity: ['Số trang trong cụm đã dựng hoặc sửa', 'Số lỗi kỹ thuật đã xử lý'],
            interim: ['Số lần hiển thị và lượt bấm ở nhóm truy vấn có ý định mua (Search Console)', 'Số trang được lập chỉ mục'],
            behavior: ['Lượt đi từ bài vệ tinh sang trang dịch vụ', 'Form, cuộc gọi, tin nhắn từ khách đến qua Google (GA4)'],
            business: ['Số khách đủ chuẩn đến từ Google', 'Doanh thu từ những khách đó (cần CRM hoặc sổ bán hàng ghi nguồn)']
          }}
          limits={[
            'SEO thường cần vài tháng mới thấy thay đổi ở bậc 3 và 4. Cần khách sớm thì chạy quảng cáo song song.',
            'Search Console ẩn bớt các truy vấn hiếm để bảo vệ quyền riêng tư, nên tổng theo truy vấn luôn thấp hơn tổng thật. Dùng để xem xu hướng.',
            'Câu trả lời AI trên Google có thể làm giảm lượt bấm dù thứ hạng giữ nguyên.',
            'Khách thường quay lại bằng kênh khác trước khi mua, nên GA4 có thể ghi công cho kênh cuối. Bậc 4 chính xác nhất khi CRM hỏi khách "biết tới qua đâu".'
          ]}
        />
      </Section>

      <Section
        id="diem-cham"
        tone="gray"
        surface="flat"
        kicker="Nối vào kinh doanh"
        title={
          <>
            Nhu cầu tìm kiếm → trang dịch vụ → <span className="hl">khách đủ chuẩn</span>
          </>
        }
        intro="SEO đưa người đang có nhu cầu tới website. Biến họ thành khách là việc của trang dịch vụ, đo lường và đội sale."
      >
        <ServiceTouchpointContext slug={service.slug} names={names} />
      </Section>

      <MethodSection article={article} name={service.menuTitle} tone="white" />

      <ContextualServiceCTA
        slug={service.slug}
        text="Gửi website và nhóm sản phẩm chính. SOHO xem các nút trên cụm chủ đề của bạn: nút nào thiếu trang, bài nào không dẫn về trang dịch vụ, và lỗi kỹ thuật nào đang chặn."
      />
    </>
  );
}
