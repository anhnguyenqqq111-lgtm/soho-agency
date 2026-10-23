import styles from './SeoService.module.css';
import ed from '../editorial/editorial.module.css';
import Icon from '../../ui/Icon';
import {sitePath} from '../../paths';
import SeoKnowledgeMap from './SeoKnowledgeMap';
import {MethodSection} from './PilotParts';
import {ProblemStatement, Responsibility, MeasurementLadder} from '../insight/Insight';
import {ServiceTouchpointContext, ContextualServiceCTA} from '../ServiceContext';
import {cases} from '../../data/cases';

/*
  Phần dưới sơ đồ của trang SEO tổng thể. Nội dung theo Redesign 3.1 (vấn đề → vì sao → SOHO làm gì → đo → nối vào
  kinh doanh), bố cục theo V4.0 "phân tích tìm kiếm": nền mở, chữ lớn, bảng và sơ đồ chính xác, ít trang trí.
  Mọi phần nhắc lại nút trên sơ đồ cụm chủ đề ở hero.
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

const SCALE = {Nhiều: 4, Vừa: 2, Ít: 1, Xa: 1, Gần: 3, 'Rất gần': 4};

// Thang 4 vạch cho giá trị định tính; chữ vẫn hiện để không phụ thuộc vào màu hay hình
function Meter({label, value}) {
  return (
    <span className={styles.meter}>
      <span className={styles.meterLabel}>{label}</span>
      <span className={styles.meterBars} aria-hidden="true">
        {[1, 2, 3, 4].map(n => (
          <i key={n} data-on={n <= SCALE[value] ? '' : undefined} />
        ))}
      </span>
      <span className={styles.meterValue}>{value}</span>
    </span>
  );
}

export default function SeoService({service, article, names}) {
  const project = cases.find(c => c.slug === 'king-decor-luxury');
  return (
    <>
      <section id="van-de" className={ed.band} aria-labelledby="van-de-title">
        <div className="container">
          <p className={ed.label}>
            <b>01</b> Vấn đề
          </p>
          <h2 id="van-de-title" className={`${ed.statement} ${styles.statement}`}>
            Có lượt truy cập, <span className="hl">chưa chắc có khách.</span>
          </h2>
          <ProblemStatement
            lead="Sơ đồ ở đầu trang có một điểm đến: trang dịch vụ. Nhiều website có đủ các nhóm bài xung quanh, nhưng mỗi bài đứng riêng, không đường nào dẫn người đọc về điểm đến đó."
            note="Ví dụ minh họa cho một doanh nghiệp thi công quán cà phê, không phải số liệu của khách hàng."
            cases={[
              {
                tag: 'Nút “Câu hỏi”',
                label: 'Bài kéo người chưa định mua',
                text: 'Bài “mẫu quán cà phê đẹp” có nhiều lượt xem từ người tìm ảnh tham khảo. Họ đọc xong rồi đi, vì bài không nói tới chi phí hay cách bắt đầu.'
              },
              {
                tag: 'Nút “Chi phí”',
                label: 'Người sắp mua không tìm thấy câu trả lời',
                text: 'Người gõ “chi phí làm quán cà phê sân vườn” đã gần quyết định. Website không có trang trả lời chi phí thì họ đọc trang của đối thủ.'
              },
              {
                tag: 'Nút “Trang dịch vụ”',
                label: 'Điểm đến là ngõ cụt',
                text: 'Khách tới được trang dịch vụ nhưng không thấy giá tham khảo, quy trình hay công trình đã làm, nên chưa đủ tin để để lại thông tin.'
              }
            ]}
          />
        </div>
      </section>

      <section id="nguyen-nhan" className={`${ed.band} ${ed.canvas}`} aria-labelledby="nguyen-nhan-title">
        <div className={`container ${ed.grid}`}>
          <div className={`${ed.side} ${ed.sticky}`}>
            <p className={ed.label}>
              <b>02</b> Vì sao xảy ra
            </p>
            <h2 id="nguyen-nhan-title" className={ed.h2}>
              Lượng tìm kiếm và ý định mua là hai trục khác nhau
            </h2>
            <p className={`${ed.body} ${styles.sideText}`}>
              Đọc lại từng nút trên sơ đồ: càng gần trang dịch vụ, người tìm càng gần quyết định nhưng càng ít người gõ. Website chỉ chạy theo lượt truy cập sẽ
              dồn sức vào nút đầu tiên.
            </p>
            <p className={`${ed.small} ${styles.sideNote}`}>
              Mức “số người gõ” và “gần quyết định” là xu hướng thường gặp để so sánh giữa các nhóm, không phải số đo. Số thật của từng ngành lấy từ công cụ
              nghiên cứu từ khóa và Search Console.
            </p>
          </div>
          <ol className={`${ed.main} ${ed.rows} ${styles.intents}`} aria-label="Sáu nút trên sơ đồ cụm chủ đề, từ xa tới gần quyết định">
            {INTENTS.map(r => (
              <li key={r.node} data-acc={r.acc ? '' : undefined}>
                <div className={styles.intentHead}>
                  <h3 className={styles.intentNode}>{r.node}</h3>
                  <p className={styles.intentState}>Người tìm {r.state.charAt(0).toLowerCase() + r.state.slice(1)}</p>
                </div>
                <p className={styles.intentQuery}>
                  <span className={ed.mono}>{r.query}</span>
                </p>
                <div className={styles.meters}>
                  <Meter label="Số người gõ" value={r.volume} />
                  <Meter label="Gần quyết định" value={r.near} />
                </div>
                <p className={styles.intentPage}>
                  <span>Trang cần có</span>
                  {r.page}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="ban-do" className={ed.band} aria-labelledby="ban-do-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>Ví dụ</p>
            <h2 id="ban-do-title" className={ed.h2}>
              Cùng cụm đó, vẽ thành các trang thật
            </h2>
          </div>
          <p className={`${ed.main} ${ed.lead} ${styles.mapIntro}`}>
            Chọn một trang để xem người tìm gõ gì, trang phải trả lời điều gì và dẫn sang đâu tiếp. Các trang được liên kết tới sáng lên trên bản đồ.
          </p>
          <div className={ed.full}>
            <SeoKnowledgeMap />
          </div>
        </div>
      </section>

      <section id="giai-phap" className={`${ed.band} ${ed.canvas}`} aria-labelledby="giai-phap-title">
        <div className={`container ${ed.grid}`}>
          <div className={`${ed.side} ${ed.sticky}`}>
            <p className={ed.label}>
              <b>03</b> SOHO làm gì
            </p>
            <h2 id="giai-phap-title" className={ed.h2}>
              Chẩn đoán từng nút, rồi mới viết thêm
            </h2>
            <p className={`${ed.body} ${styles.sideText}`}>
              Một nguyên nhân nằm dưới cả sơ đồ: Google không đọc hoặc không lập chỉ mục được trang. Cấu trúc tốt đến đâu cũng không có cơ hội hiện lên, vì vậy
              bước 1 là kiểm tra kỹ thuật.
            </p>
          </div>
          <ol className={`${ed.main} ${ed.rows} ${styles.fixes}`}>
            {FIXES.map((f, i) => (
              <li key={f.diagnose}>
                <span className={styles.fixNum}>{String(i + 1).padStart(2, '0')}</span>
                <p className={styles.fixCheck}>
                  <span>Kiểm tra</span>
                  {f.diagnose}
                </p>
                <p className={styles.fixChange}>
                  <span>Thay đổi</span>
                  {f.change}
                </p>
              </li>
            ))}
          </ol>
          <div className={ed.full}>
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
          </div>
          <h3 className={`${ed.side} ${ed.h3}`}>Hồ sơ bàn giao</h3>
          <ul className={`${ed.main} ${styles.files}`}>
            {service.deliverables.map(d => (
              <li key={d}>
                <Icon name="file-text" size={18} />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project && (
        <section id="du-an" className={ed.band} aria-labelledby="du-an-title">
          <div className={`container ${ed.grid}`}>
            <p className={`${ed.full} ${ed.label} ${styles.caseLabel}`}>Dự án thật</p>
            <a href={sitePath(`/du-an/${project.slug}`)} className={`${ed.full} ${styles.caseMedia}`} tabIndex={-1} aria-hidden="true">
              <img src={sitePath(project.image)} alt="" width={project.imageWidth} height={project.imageHeight} loading="lazy" />
            </a>
            <div className={ed.side}>
              <h2 id="du-an-title" className={ed.h3}>
                {project.name}
              </h2>
              <p className={`${ed.small} ${styles.caseMeta}`}>
                {project.field}
                <br />
                {project.scope} · {project.period}
              </p>
            </div>
            <div className={ed.main}>
              <p className={ed.lead}>{project.context}</p>
              <p className={`${ed.body} ${styles.caseWork}`}>{project.work.split('. ').slice(0, 2).join('. ')}.</p>
              <p className={`${ed.small} ${styles.caseNote}`}>Kết quả SOHO đã công bố của dự án này là về quảng cáo, chưa có số liệu riêng cho SEO.</p>
              <a href={sitePath(`/du-an/${project.slug}`)} className={ed.textLink}>
                Xem dự án {project.name} <Icon name="arrow-right" size={18} />
              </a>
            </div>
          </div>
        </section>
      )}

      <section id="do-luong" className={`${ed.band} ${ed.canvas}`} aria-labelledby="do-luong-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>
              <b>04</b> Đo thế nào
            </p>
            <h2 id="do-luong-title" className={ed.h2}>
              Thứ hạng là bậc đầu, không phải đích
            </h2>
          </div>
          <p className={`${ed.main} ${ed.lead} ${styles.mapIntro}`}>
            Bước 5 trên dải các bước là báo cáo bằng khách và doanh thu. Để tới được đó cần đo đủ bốn bậc, vì mỗi bậc trả lời một câu hỏi khác nhau.
          </p>
          <div className={ed.full}>
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
                'Khách thường quay lại bằng kênh khác trước khi mua, nên GA4 có thể ghi công cho kênh cuối. Bậc 4 chính xác nhất khi CRM hỏi khách “biết tới qua đâu”.'
              ]}
            />
          </div>
        </div>
      </section>

      <section id="diem-cham" className={ed.band} aria-labelledby="diem-cham-title">
        <div className="container">
          <p className={ed.label}>
            <b>05</b> Nối vào kinh doanh
          </p>
          <h2 id="diem-cham-title" className={`${ed.statement} ${styles.chain}`}>
            Nhu cầu tìm kiếm <span aria-hidden="true">→</span> trang dịch vụ <span aria-hidden="true">→</span> <span className="hl">khách đủ chuẩn</span>
          </h2>
          <p className={`${ed.lead} ${styles.chainLead}`}>
            SEO đưa người đang có nhu cầu tới website. Biến họ thành khách là việc của trang dịch vụ, đo lường và đội sale.
          </p>
          <ServiceTouchpointContext slug={service.slug} names={names} />
        </div>
      </section>

      <MethodSection article={article} name={service.menuTitle} editorial tone="gray" />

      <ContextualServiceCTA
        slug={service.slug}
        text="Gửi website và nhóm sản phẩm chính. SOHO xem các nút trên cụm chủ đề của bạn: nút nào thiếu trang, bài nào không dẫn về trang dịch vụ, và lỗi kỹ thuật nào đang chặn."
      />
    </>
  );
}
