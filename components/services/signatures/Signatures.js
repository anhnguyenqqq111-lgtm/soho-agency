import styles from './signatures.module.css';
import {sitePath} from '../../paths';
import Icon from '../../ui/Icon';

/*
  Phần riêng không cần tương tác của trang dịch vụ (Redesign V6.0). Mỗi phần đọc lại sơ đồ live ở hero của trang đó.
  - EntityEvidence (SEO cho AI), LocalJourney (Local SEO), MeasurementContract (GA4), EditorialPortfolio (Nội dung & PR),
    WebsiteShowcase (Thiết kế website: chính website SOHO, ảnh chụp và số Lighthouse đo thật).
*/

// Bốn nguồn tín hiệu đúng như sơ đồ AiEntity ở hero
const ENTITY = [
  {
    source: 'Tác giả',
    info: 'Chuyên gia là ai, có kinh nghiệm gì',
    where: 'Trang tác giả, hồ sơ chuyên môn công khai',
    why: 'Câu trả lời cần nguồn có chuyên môn rõ'
  },
  {source: 'Schema', info: 'Doanh nghiệp, dịch vụ, tác giả, hỏi đáp', where: 'Dữ liệu cấu trúc trên website', why: 'Giúp máy đọc đúng ai cung cấp gì'},
  {source: 'FAQ', info: 'Câu hỏi thật và câu trả lời thẳng', where: 'Trang hỏi đáp, đoạn trả lời ngắn ở đầu bài', why: 'Đoạn trả lời ngắn, rõ dễ được trích'},
  {source: 'Báo chí nhắc tên', info: 'Nơi khác nói gì về bạn', where: 'Bài báo, danh bạ ngành, hồ sơ đối tác', why: 'Xác nhận từ bên thứ ba'}
];

export function EntityEvidence() {
  return (
    <div>
      <ol className={styles.flowRows}>
        {ENTITY.map(e => (
          <li key={e.source}>
            <h3 className={styles.flowHead}>{e.source}</h3>
            <p>
              <span>Thông tin về thương hiệu</span>
              {e.info}
            </p>
            <p>
              <span>Nguồn chứng minh</span>
              {e.where}
            </p>
            <p className={styles.strong}>
              <span>Vì sao AI cần</span>
              {e.why}
            </p>
          </li>
        ))}
      </ol>
      <p className={styles.note}>
        Không ai đảm bảo được việc AI có trích dẫn một website hay không. SOHO theo dõi định kỳ các câu tìm kiếm có câu trả lời AI để biết tín hiệu nào đang
        thiếu.
      </p>
    </div>
  );
}

const LOCAL = [
  {
    step: 'Tìm quanh đây',
    sees: 'Gói 3 kết quả trên Google Maps',
    decides: 'Mức liên quan, khoảng cách, mức độ nổi bật',
    soho: 'Danh mục, dịch vụ, từ khóa khu vực trong hồ sơ'
  },
  {
    step: 'Xem hồ sơ',
    sees: 'Ảnh, giờ mở cửa, dịch vụ, bài đăng',
    decides: 'Thông tin đầy đủ và khớp với website',
    soho: 'Ảnh thật, giờ mở cửa, tên, địa chỉ, số điện thoại thống nhất'
  },
  {
    step: 'Đánh giá',
    sees: 'Số sao, nội dung đánh giá, phản hồi của chủ',
    decides: 'Đánh giá gần đây, cách doanh nghiệp trả lời',
    soho: 'Quy trình xin đánh giá đúng lúc, mẫu phản hồi'
  },
  {
    step: 'Gọi hoặc chỉ đường',
    sees: 'Nút gọi, chỉ đường, vào website',
    decides: 'Bước tiếp theo rõ ràng',
    soho: 'Trang khu vực trên website, đo cuộc gọi và chỉ đường'
  }
];

export function LocalJourney() {
  return (
    <div>
      <ol className={styles.journey4}>
        {LOCAL.map((l, i) => (
          <li key={l.step}>
            <span className={styles.journeyNum}>{String(i + 1).padStart(2, '0')}</span>
            <h3 className={styles.flowHead}>{l.step}</h3>
            <p>
              <span>Khách thấy</span>
              {l.sees}
            </p>
            <p>
              <span>Điều quyết định</span>
              {l.decides}
            </p>
            <p className={styles.strong}>
              <span>SOHO làm</span>
              {l.soho}
            </p>
          </li>
        ))}
      </ol>
      <p className={styles.note}>
        Theo trang trợ giúp Google Business Profile, kết quả địa phương được xếp theo mức liên quan, khoảng cách và mức độ nổi bật. Khoảng cách không đổi được;
        hai yếu tố còn lại thì làm được. Hành trình trên là ví dụ khái niệm.
      </p>
    </div>
  );
}

// Tên sự kiện theo danh sách sự kiện khuyến nghị của GA4 (generate_lead, purchase); các tên khác do doanh nghiệp tự đặt
const CONTRACT = [
  {
    event: 'generate_lead',
    def: 'Form gửi thành công (máy chủ trả về thành công)',
    source: 'Website qua Google Tag Manager',
    check: 'Đối chiếu số form trong GA4 với hộp thư hoặc CRM mỗi tuần',
    decision: 'Kênh nào mang khách để lại thông tin'
  },
  {
    event: 'click_call',
    def: 'Bấm số điện thoại trên điện thoại',
    source: 'Website qua Google Tag Manager',
    check: 'So với nhật ký cuộc gọi; đây chỉ là ý định gọi',
    decision: 'Trang nào tạo ra cuộc gọi'
  },
  {
    event: 'qualified_lead',
    def: 'Đội sale đánh dấu khách đủ chuẩn',
    source: 'CRM, nhập về GA4 hoặc Google Ads',
    check: 'Tỉ lệ đánh dấu theo tuần, mẫu kiểm tra ngẫu nhiên',
    decision: 'Tối ưu quảng cáo theo khách thật, không theo form'
  },
  {
    event: 'purchase',
    def: 'Đơn có trạng thái thành công',
    source: 'CRM hoặc hệ thống bán hàng',
    check: 'So khớp mã đơn giữa hai hệ thống',
    decision: 'Chi phí có một khách mua theo kênh'
  }
];

export function MeasurementContract() {
  return (
    <div>
      <div className={styles.tableWrap} role="region" aria-label="Hợp đồng đo lường, cuộn ngang trên màn hình nhỏ" tabIndex={0}>
        <table className={styles.table}>
          <caption className="visually-hidden">Ví dụ hợp đồng đo lường: sự kiện, định nghĩa, nguồn, cách kiểm tra, quyết định</caption>
          <thead>
            <tr>
              <th scope="col">Sự kiện</th>
              <th scope="col">Định nghĩa</th>
              <th scope="col">Nguồn dữ liệu</th>
              <th scope="col">Cách kiểm tra</th>
              <th scope="col">Quyết định được</th>
            </tr>
          </thead>
          <tbody>
            {CONTRACT.map(c => (
              <tr key={c.event}>
                <th scope="row" className={styles.mono}>
                  {c.event}
                </th>
                <td>{c.def}</td>
                <td>{c.source}</td>
                <td>{c.check}</td>
                <td className={styles.strong}>{c.decision}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.note}>
        Ví dụ khung. Bộ sự kiện thật lập theo doanh nghiệp. Số của GA4, nền tảng quảng cáo và CRM luôn có chênh lệch; hợp đồng đo lường ghi rõ con số nào là gốc
        cho quyết định nào.
      </p>
    </div>
  );
}

// Bài viết SOHO đã đăng trên blog của chính mình: nội dung thật, dùng làm ví dụ cho cách nối câu hỏi → bài → kênh → sale
const PORTFOLIO = [
  {
    q: 'Có nên chạy SEO và quảng cáo cùng lúc?',
    slug: 'chien-luoc-seo-ads-song-hanh',
    title: 'Khi nào nên đầu tư SEO và Ads cùng lúc?',
    channel: 'Google, gửi kèm báo giá',
    sale: 'Trả lời câu hỏi “làm cái nào trước” trong buổi tư vấn'
  },
  {
    q: 'Làm sao biết quảng cáo có ra doanh thu?',
    slug: 'toi-uu-roas-performance-ads',
    title: 'Đo Performance Ads bằng doanh thu thực tế',
    channel: 'Google, email cho khách đang chạy quảng cáo',
    sale: 'Mở đầu cuộc trao đổi về đo lường'
  },
  {
    q: 'Landing page B2B nên có gì?',
    slug: 'toi-uu-cro-landing-page',
    title: 'Tối ưu CRO cho landing page B2B',
    channel: 'Google, LinkedIn',
    sale: 'Tài liệu gửi sau khi khách hỏi về trang đích'
  },
  {
    q: 'Xây nội dung theo chủ đề thế nào?',
    slug: 'content-hub-topic-cluster',
    title: 'Topic Cluster: xây Content Hub dẫn đầu tìm kiếm',
    channel: 'Google',
    sale: 'Giải thích phạm vi SEO trước khi báo giá'
  }
];

export function EditorialPortfolio() {
  return (
    <div>
      <ol className={styles.portfolio}>
        {PORTFOLIO.map(p => (
          <li key={p.slug}>
            <p className={styles.portQ}>
              <span>Câu hỏi của khách</span>“{p.q}”
            </p>
            <a href={sitePath(`/blog/${p.slug}`)} className={styles.portAsset}>
              <span>Bài đã đăng</span>
              <strong>
                {p.title} <Icon name="arrow-up-right" size={16} />
              </strong>
            </a>
            <p>
              <span>Kênh phân phối</span>
              {p.channel}
            </p>
            <p>
              <span>Đội sale dùng để</span>
              {p.sale}
            </p>
          </li>
        ))}
      </ol>
      <p className={styles.note}>
        Các bài trên là bài SOHO đã đăng trên blog của chính mình. Kênh và cách dùng cho sale là cách SOHO đề xuất áp dụng, không phải số liệu đo được.
      </p>
    </div>
  );
}

const DECISIONS = [
  {title: 'Một hành động chính mỗi màn', text: 'Nút cam chỉ dùng cho “Nhận tư vấn”; các liên kết khác là chữ hoặc nút viền.'},
  {title: 'Chữ tiếng Việt được thử trước', text: 'Bricolage Grotesque và Plus Jakarta Sans được thử với dấu chồng (Ế, Ứ, Ỡ, Ặ, Ằ) trước khi chọn.'},
  {title: 'Tương phản đo bằng số', text: 'Chữ cam nhỏ dùng Deep Orange #C2410C (5,18:1 trên nền trắng); cam #F26522 chỉ làm nền nút.'},
  {title: 'Form nói thật', text: 'Khi chưa nối máy chủ nhận form, nút gửi mở ứng dụng email và không báo “đã gửi”.'}
];

export function WebsiteShowcase({lighthouse}) {
  return (
    <div className={styles.show}>
      <figure className={styles.showMedia}>
        <img
          className={styles.showDesktop}
          src={sitePath('/showcase/soho-home-desktop.webp')}
          alt="Trang chủ website SOHO trên máy tính, khung 1440 × 900"
          width="1440"
          height="900"
          loading="lazy"
        />
        <img
          className={styles.showMobile}
          src={sitePath('/showcase/soho-home-mobile.webp')}
          alt="Trang chủ website SOHO trên điện thoại, khung 390 × 844"
          width="390"
          height="844"
          loading="lazy"
        />
        <figcaption>Website SOHO, chụp từ bản đang chạy ngày 23/10/2026. Đây là sản phẩm SOHO tự làm cho mình, không phải dự án khách hàng.</figcaption>
      </figure>
      <div className={styles.showFacts}>
        <h3 className={styles.flowHead}>Bốn quyết định thiết kế</h3>
        <ol className={styles.decisions}>
          {DECISIONS.map((d, i) => (
            <li key={d.title}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <strong>{d.title}</strong>
                <p>{d.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <h3 className={styles.flowHead}>Đo trên điện thoại</h3>
        <dl className={styles.lh}>
          {lighthouse.scores.map(s => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className={styles.note}>{lighthouse.source}</p>
      </div>
    </div>
  );
}
