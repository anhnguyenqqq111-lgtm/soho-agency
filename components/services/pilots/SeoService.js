import styles from './SeoService.module.css';
import ed from '../editorial/editorial.module.css';
import SeoKnowledgeMap from './SeoKnowledgeMap';
import {MethodSection} from './PilotParts';
import {MeasurementLadder} from '../insight/Insight';
import {ContextualServiceCTA} from '../ServiceContext';
import {ServiceFit, ScopeSpec, CaseEvidence, NextSteps} from '../modules/Modules';
import {EXPERIENCE} from '../../data/serviceExperience';

/*
  Phần dưới sơ đồ của trang SEO tổng thể (V6.0, bố cục "phân tích tìm kiếm" của V4.0).
  Có hợp với bạn? → bảng ý định tìm kiếm (câu hỏi → ý định → loại trang → bước tiếp theo), mỗi dòng là một nút của
  sơ đồ cụm chủ đề ở hero, kèm bản đồ ví dụ → SOHO thay đổi gì → dự án thật → phạm vi → đo → bước tiếp theo.
*/

// Mỗi dòng là một nút trên sơ đồ cụm chủ đề ở hero, theo thứ tự gần quyết định dần
const INTENTS = [
  {
    node: 'Câu hỏi',
    state: 'Đang tìm ý tưởng',
    query: 'mẫu quán cà phê sân vườn đẹp',
    volume: 'Nhiều',
    near: 'Xa',
    page: 'Bài hướng dẫn có ảnh công trình',
    next: 'Dẫn sang bài chi phí'
  },
  {
    node: 'So sánh',
    state: 'Đang so lựa chọn',
    query: 'nên thuê công ty hay tự làm quán cà phê',
    volume: 'Vừa',
    near: 'Vừa',
    page: 'Bài so sánh có tiêu chí rõ',
    next: 'Dẫn sang trang quy trình'
  },
  {
    node: 'Chi phí',
    state: 'Đang tính tiền',
    query: 'chi phí làm quán cà phê sân vườn',
    volume: 'Vừa',
    near: 'Gần',
    page: 'Bài phân tích chi phí',
    next: 'Dẫn sang trang báo giá'
  },
  {
    node: 'Câu chuyện khách',
    state: 'Đang tìm bằng chứng',
    query: 'công trình quán cà phê đã thi công',
    volume: 'Ít',
    near: 'Gần',
    page: 'Trang dự án có ảnh thật',
    next: 'Mời gửi yêu cầu báo giá'
  },
  {
    node: 'Quy trình',
    state: 'Đang hình dung làm việc',
    query: 'quy trình thi công quán cà phê',
    volume: 'Ít',
    near: 'Gần',
    page: 'Trang quy trình và bảo hành',
    next: 'Mời gửi yêu cầu báo giá'
  },
  {
    node: 'Trang dịch vụ',
    state: 'Sẵn sàng liên hệ',
    query: 'công ty thi công quán cà phê sân vườn',
    volume: 'Ít',
    near: 'Rất gần',
    page: 'Trang dịch vụ có giá tham khảo',
    next: 'Form, nút gọi',
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
  const x = EXPERIENCE[service.slug];
  return (
    <>
      <ServiceFit fit={x.fit} slug={service.slug} names={names} num="01" tone="white" />

      <section id="y-dinh" className={`${ed.band} ${ed.canvas}`} aria-labelledby="y-dinh-title">
        <div className={`container ${ed.grid}`}>
          <div className={`${ed.side} ${ed.sticky}`}>
            <p className={ed.label}>
              <b>02</b> Bảng ý định tìm kiếm
            </p>
            <h2 id="y-dinh-title" className={ed.h2}>
              Từ câu hỏi của khách tới hành động
            </h2>
            <p className={`${ed.body} ${styles.sideText}`}>
              Mỗi dòng là một nút trên sơ đồ ở đầu trang. Càng gần trang dịch vụ, người tìm càng gần quyết định nhưng càng ít người gõ. Website chỉ chạy theo
              lượt truy cập sẽ dồn sức vào dòng đầu tiên.
            </p>
            <p className={`${ed.small} ${styles.sideNote}`}>
              Mức “số người gõ” và “gần quyết định” là xu hướng thường gặp để so sánh giữa các nhóm, không phải số đo. Ví dụ minh họa cho một doanh nghiệp thi
              công quán cà phê.
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
                  <span>Loại trang → bước tiếp theo</span>
                  {r.page} → {r.next}
                </p>
              </li>
            ))}
          </ol>
          <div className={`${ed.full} ${styles.mapBlock}`}>
            <h3 className={ed.h3}>Cùng cụm đó, vẽ thành các trang thật</h3>
            <p className={`${ed.body} ${styles.mapIntro}`}>Chọn một trang để xem người tìm gõ gì, trang phải trả lời điều gì và dẫn sang đâu tiếp.</p>
            <SeoKnowledgeMap />
          </div>
        </div>
      </section>

      <section id="thay-doi" className={ed.band} aria-labelledby="thay-doi-title">
        <div className={`container ${ed.grid}`}>
          <div className={`${ed.side} ${ed.sticky}`}>
            <p className={ed.label}>
              <b>03</b> SOHO thay đổi gì
            </p>
            <h2 id="thay-doi-title" className={ed.h2}>
              Chẩn đoán từng nút, rồi mới viết thêm
            </h2>
            <p className={`${ed.body} ${styles.sideText}`}>
              Một nguyên nhân nằm dưới cả sơ đồ: Google không đọc hoặc không lập chỉ mục được trang. Vì vậy bước 1 trên dải các bước là kiểm tra kỹ thuật.
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
        </div>
      </section>

      <CaseEvidence proof={x.proof} num="04" tone="canvas" title="Dự án có SEO website" />

      <ScopeSpec scope={x.scope} deliverables={service.deliverables} slug={service.slug} names={names} num="05" dark />

      <section id="do-luong" className={ed.band} aria-labelledby="do-luong-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>
              <b>06</b> Đo thế nào
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

      <NextSteps slug={service.slug} names={names} num="07" tone="canvas" />

      <MethodSection article={article} name={service.menuTitle} tone="white" />

      <ContextualServiceCTA
        slug={service.slug}
        text="Gửi website và nhóm sản phẩm chính. SOHO xem các nút trên cụm chủ đề của bạn: nút nào thiếu trang, bài nào không dẫn về trang dịch vụ, và lỗi kỹ thuật nào đang chặn."
      />
    </>
  );
}
