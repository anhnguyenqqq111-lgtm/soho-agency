import styles from './GoogleAdsService.module.css';
import Section from '../../ui/Section';
import Icon from '../../ui/Icon';
import PartnerBadge from '../../proof/PartnerBadge';
import {sitePath} from '../../paths';
import AdsProfitSimulator from './AdsProfitSimulator';
import {MethodSection} from './PilotParts';
import {ServiceTouchpointContext, ContextualServiceCTA} from '../ServiceContext';
import {partners} from '../../data/proof';

/*
  Phần giải thích riêng của trang Google Ads & Shopping, đặt dưới các sơ đồ chung (ServiceOverview):
  bốn câu kiểm tra trước khi tăng ngân sách và mô phỏng lợi nhuận có công thức công khai (làm rõ bước 5 "báo cáo lợi nhuận")
  → cấu trúc tài khoản theo ý định và biên lợi nhuận (làm rõ bước 2) → ba thứ quảng cáo phụ thuộc vào, gắn với dấu hiệu ở trên
  → điểm chạm → bàn giao và chứng nhận Google Partner → phương pháp → liên hệ.
  Mô phỏng nằm trong một thẻ tối, không phải khối tối toàn trang: trang chỉ có hai khối tối (dải các bước và CTA cuối).
*/

const PREFLIGHT = [
  {q: 'Chuyển đổi đang đếm đúng hành động có giá trị?', why: 'Đếm sai thì thuật toán giá thầu học sai.'},
  {q: 'Dữ liệu đơn chốt có quay về tài khoản?', why: 'Không có thì chỉ tối ưu được theo form, không theo khách mua.'},
  {q: 'Trang đích khớp với ý định của từ khóa?', why: 'Lượt bấm đắt mà trang không trả lời đúng là mất tiền hai lần.'},
  {q: 'Biết biên lợi nhuận của từng nhóm hàng?', why: 'Không biết thì không đặt được mức ROAS hòa vốn.'}
];

const ARCHITECTURE = [
  {
    name: 'Tìm kiếm',
    desc: 'Người đang gõ đúng nhu cầu',
    items: [
      {name: 'Từ khóa thương hiệu', goal: 'Giữ khách đã biết bạn, chi phí thấp'},
      {name: 'Từ khóa có ý định mua', goal: 'Tối ưu theo chi phí có một khách mua'},
      {name: 'Từ khóa so sánh', goal: 'Chỉ chạy khi biên lợi nhuận cho phép'}
    ]
  },
  {
    name: 'Mua sắm và Performance Max',
    desc: 'Sản phẩm hiện kèm giá và ảnh',
    items: [
      {name: 'Nhóm hàng biên lợi nhuận cao', goal: 'Tối ưu theo lợi nhuận gộp'},
      {name: 'Nhóm hàng bán chạy, biên thấp', goal: 'Giữ ROAS trên mức hòa vốn'},
      {name: 'Hàng mới cần thử', goal: 'Ngân sách thử riêng, không lẫn vào nhóm chính'}
    ]
  },
  {
    name: 'Nhắc lại',
    desc: 'Người đã xem nhưng chưa mua',
    items: [
      {name: 'Đã xem trang dịch vụ hoặc giỏ hàng', goal: 'Tỉ lệ quay lại mua'},
      {name: 'Khách cũ có thể mua thêm', goal: 'Doanh thu trên mỗi khách'}
    ]
  }
];

const GUARDS = ['Danh sách từ khóa loại trừ dùng chung', 'Một chuyển đổi chính cho mỗi mục tiêu', 'Đơn chốt từ CRM nhập ngược về Google Ads'];

const DEPENDS = [
  {
    slug: 'cro-landing-page',
    title: 'Trang đích',
    text: 'Quảng cáo đưa khách tới, trang đích quyết định họ có để lại thông tin không. Tỉ lệ chuyển đổi trong mô phỏng phía trên phụ thuộc phần lớn vào trang này.'
  },
  {
    slug: 'ga4-looker-dashboard',
    title: 'Đo lường',
    text: 'GA4, Tag Manager và mục tiêu chuyển đổi phải đếm đúng trước khi bật chiến lược giá thầu tự động.'
  },
  {
    slug: 'tu-van-chien-luoc-sprint',
    title: 'Biên lợi nhuận và thứ tự ưu tiên',
    text: 'Nhóm hàng nào đáng đẩy, nhóm nào chỉ nên giữ. Câu trả lời đến từ số liệu kinh doanh, không từ tài khoản quảng cáo.'
  }
];

export default function GoogleAdsService({service, article, names}) {
  const google = partners.find(p => p.name === 'Google Partner');
  return (
    <>
      <Section
        id="mo-phong"
        tone="gray"
        surface="flat"
        title={
          <>
            Ngân sách này <span className="hl">có lãi không?</span>
          </>
        }
        intro="Bước 5 ở trên đo bằng chi phí mỗi đơn và lợi nhuận gộp, không bằng lượt bấm. Nhập số của bạn để xem một đồng quảng cáo đi qua phễu và còn lại bao nhiêu sau chi phí."
      >
        <ol className={styles.checks} aria-label="Bốn câu cần trả lời trước khi tăng ngân sách">
          {PREFLIGHT.map((p, i) => (
            <li key={p.q}>
              <span className={styles.checkNum}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.checkQ}>{p.q}</span>
              <span className={styles.checkWhy}>{p.why}</span>
            </li>
          ))}
        </ol>
        <div className={`${styles.simPanel} dark on-dark`}>
          <AdsProfitSimulator />
        </div>
      </Section>

      <Section
        id="cau-truc"
        title={
          <>
            Tài khoản chia theo <span className="hl">ý định và lợi nhuận</span>
          </>
        }
        intro="Bước 2 ở trên, vẽ ra: mỗi nhánh có một mục tiêu tối ưu riêng. Từ khóa không ra khách và nhóm hàng không có lãi được tách ra, thay vì dùng chung một ngân sách."
      >
        <div className={styles.tree}>
          <p className={styles.root}>Tài khoản Google Ads</p>
          <ul className={styles.branches}>
            {ARCHITECTURE.map(b => (
              <li key={b.name} className={styles.branch}>
                <p className={styles.branchHead}>
                  <strong>{b.name}</strong>
                  <span>{b.desc}</span>
                </p>
                <ul className={styles.leaves}>
                  {b.items.map(it => (
                    <li key={it.name}>
                      <span className={styles.leafName}>{it.name}</span>
                      <span className={styles.leafGoal}>{it.goal}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <ul className={styles.guards} aria-label="Rào chắn dùng chung cho mọi nhánh">
            {GUARDS.map(g => (
              <li key={g}>
                <Icon name="check" size={16} />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="phu-thuoc"
        tone="gray"
        surface="flat"
        title={
          <>
            Quảng cáo chỉ tốt bằng <span className="hl">những gì phía sau nó</span>
          </>
        }
        intro="Ba dấu hiệu ở phần trên hiếm khi do riêng tài khoản quảng cáo. Ba thứ nằm ngoài tài khoản quyết định chi phí có một khách mua."
      >
        <ol className={styles.depends}>
          {DEPENDS.map((d, i) => (
            <li key={d.slug}>
              <span className={styles.depNum}>{i + 1}</span>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
              <a href={sitePath(`/dich-vu/${d.slug}`)}>
                {names[d.slug]} <Icon name="arrow-right" size={16} />
              </a>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="diem-cham"
        title={
          <>
            Google Ads đứng ở đâu trên <span className="hl">hành trình khách hàng</span>
          </>
        }
        intro="Khách đang tìm và so sánh. Quảng cáo đưa bạn vào danh sách ngay, trong lúc SEO còn cần thời gian."
      >
        <ServiceTouchpointContext slug={service.slug} names={names} />
      </Section>

      <Section
        id="ban-giao"
        tone="gray"
        surface="flat"
        title={
          <>
            Bàn giao và <span className="hl">báo cáo</span>
          </>
        }
        intro="Báo cáo đọc theo chi phí mỗi đơn và lợi nhuận, không chỉ theo lượt bấm."
      >
        <div className={styles.handover}>
          <ul className={styles.deliver}>
            {service.deliverables.map((d, i) => (
              <li key={d}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {d}
              </li>
            ))}
          </ul>
          <div className={styles.partner}>
            <PartnerBadge partner={google} size={96} tipId="tip-google-ads-page" />
            <div>
              <p className={styles.partnerHead}>SOHO là Google Partner</p>
              <ul>
                {google.criteria.map(c => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className={styles.partnerNote}>Tiêu chí do Google xác nhận trên hồ sơ đối tác. Bấm huy hiệu để xem hồ sơ.</p>
            </div>
          </div>
        </div>
        <p className={styles.fit}>{service.proof}</p>
      </Section>

      <MethodSection article={article} name={service.menuTitle} tone="white" />

      <ContextualServiceCTA
        slug={service.slug}
        text="Gửi tài khoản đang chạy hoặc kế hoạch ngân sách. SOHO xem cách đo, cấu trúc chiến dịch và trang đích, rồi chỉ ra chỗ đang tốn tiền mà không ra khách."
      />
    </>
  );
}
