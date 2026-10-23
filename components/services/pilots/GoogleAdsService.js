import styles from './GoogleAdsService.module.css';
import Section from '../../ui/Section';
import Icon from '../../ui/Icon';
import PartnerBadge from '../../proof/PartnerBadge';
import {sitePath} from '../../paths';
import AdsProfitSimulator from './AdsProfitSimulator';
import {MethodSection} from './PilotParts';
import {ProblemStatement, Responsibility, MeasurementLadder} from '../insight/Insight';
import {ServiceTouchpointContext, ContextualServiceCTA} from '../ServiceContext';
import {partners} from '../../data/proof';

/*
  Phần dưới sơ đồ của trang Google Ads & Shopping (Redesign 3.1, phong cách "kinh tế quảng cáo"). Sơ đồ mở đầu là phễu
  4 tầng: truy vấn → lượt bấm → khách đúng tệp → đơn có lãi, mỗi tầng một việc tối ưu. Phần dưới phát triển đúng ý đó:
  vấn đề (chi phí tăng mà lợi nhuận không tăng) → vì sao (mỗi tầng có một con số dễ nhìn che chỗ rò, kèm phép tính với số
  của bạn) → SOHO đổi gì ở từng tầng, hai bên làm gì, bàn giao và chứng nhận → đo 4 bậc và giới hạn → nối vào hành trình.
  Mô phỏng nằm trong một thẻ tối, không phải khối tối toàn trang: trang chỉ có hai khối tối (dải các bước và CTA cuối).
*/

// Mỗi dòng là một tầng của phễu ở hero
const LEAKS = [
  {
    tier: 'Truy vấn',
    shown: 'Số lần hiển thị, tỉ lệ bấm (CTR)',
    hides: 'Quảng cáo hiện cho cả người chỉ tìm thông tin, tìm việc, tìm hàng miễn phí',
    look: 'Báo cáo cụm từ tìm kiếm: bao nhiêu phần đúng ý định mua',
    dep: null
  },
  {
    tier: 'Lượt bấm',
    shown: 'Chi phí mỗi lượt bấm (CPC)',
    hides: 'Bấm rẻ nhưng trang đích không trả lời điều người tìm cần, nên họ rời đi',
    look: 'Tỉ lệ chuyển đổi của từng trang đích',
    dep: 'cro-landing-page'
  },
  {
    tier: 'Khách đúng tệp',
    shown: 'Chi phí mỗi khách để lại thông tin (CPL)',
    hides: 'Form rác, số sai, người hỏi giá cho biết. Chiến dịch học cách tìm thêm những người như vậy',
    look: 'Tỉ lệ khách đủ chuẩn theo đánh giá của đội sale',
    dep: 'ga4-looker-dashboard'
  },
  {
    tier: 'Đơn có lãi',
    shown: 'Doanh thu trên chi phí quảng cáo (ROAS)',
    hides: 'Doanh thu dồn vào nhóm hàng biên thấp; ROAS cao nhưng trừ giá vốn và vận chuyển thì gần như không còn lãi',
    look: 'Lợi nhuận gộp sau quảng cáo, theo nhóm hàng hoặc dịch vụ',
    dep: 'tu-van-chien-luoc-sprint',
    acc: true
  }
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

export default function GoogleAdsService({service, article, names}) {
  const google = partners.find(p => p.name === 'Google Partner');
  return (
    <>
      <Section
        id="van-de"
        tone="gray"
        surface="flat"
        kicker="Vấn đề"
        title={
          <>
            Vì sao chi phí quảng cáo tăng <span className="hl">mà lợi nhuận không tăng theo?</span>
          </>
        }
      >
        <ProblemStatement
          lead="Phễu ở đầu trang có bốn tầng. Nhiều tài khoản chỉ được nhìn ở tầng thứ hai: giá mỗi lượt bấm. Tiền có thể rò ở ba tầng còn lại trong khi báo cáo vẫn trông ổn."
          cases={[
            {
              label: 'Giá bấm giảm, khách cũng giảm',
              text: 'Mở rộng từ khóa cho giá bấm rẻ hơn, nhưng kéo thêm nhiều người chỉ tìm thông tin. Tầng truy vấn rò, còn tầng lượt bấm vẫn trông tốt.'
            },
            {
              label: 'Nhiều form, sale nói khách không đúng',
              text: 'Chiến dịch được tối ưu theo số form nên học cách tìm người dễ điền form, không phải người sẽ mua. Tầng khách đúng tệp rò.'
            },
            {
              label: 'ROAS đẹp, lợi nhuận mỏng',
              text: 'Doanh thu dồn vào nhóm hàng bán chạy nhưng biên thấp. Sau giá vốn và vận chuyển, phần còn lại không đủ bù chi phí quảng cáo. Tầng đơn có lãi rò.'
            }
          ]}
          note="Các tình huống thường gặp khi kiểm tra tài khoản, dùng để minh họa, không phải số liệu của một khách hàng cụ thể."
        />
      </Section>

      <Section
        id="nguyen-nhan"
        kicker="Vì sao xảy ra"
        title={
          <>
            Mỗi tầng có một con số <span className="hl">che chỗ rò</span>
          </>
        }
        intro="Con số dễ nhìn nhất ở mỗi tầng thường là con số Google Ads tự tối ưu. Nó tốt lên không có nghĩa tầng đó hết rò. Con số nên xem thường nằm ngoài tài khoản quảng cáo."
      >
        <div className={styles.tableWrap} role="region" aria-label="Bảng các tầng phễu, cuộn ngang trên màn hình nhỏ" tabIndex={0}>
          <table className={styles.leaks}>
            <caption className="visually-hidden">Con số dễ nhìn và con số nên xem ở từng tầng của phễu Google Ads</caption>
            <thead>
              <tr>
                <th scope="col">Tầng phễu</th>
                <th scope="col">Con số dễ nhìn</th>
                <th scope="col">Có thể che điều gì</th>
                <th scope="col">Con số nên xem</th>
                <th scope="col">Phụ thuộc vào</th>
              </tr>
            </thead>
            <tbody>
              {LEAKS.map(r => (
                <tr key={r.tier} data-acc={r.acc ? '' : undefined}>
                  <th scope="row">{r.tier}</th>
                  <td>{r.shown}</td>
                  <td>{r.hides}</td>
                  <td className={styles.look}>{r.look}</td>
                  <td>{r.dep ? <a href={sitePath(`/dich-vu/${r.dep}`)}>{names[r.dep]}</a> : 'Cấu trúc tài khoản'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className={styles.subhead}>Tính thử bằng số của bạn</h3>
        <p className={styles.subintro}>
          Ngân sách đi qua cùng bốn tầng đó. Đổi tỉ lệ ở một tầng để thấy lợi nhuận cuối phễu thay đổi ra sao, và vì sao tăng ngân sách khi một tầng đang rò chỉ
          làm lỗ nhanh hơn.
        </p>
        <div className={`${styles.simPanel} dark on-dark`}>
          <AdsProfitSimulator />
        </div>
      </Section>

      <Section
        id="giai-phap"
        tone="gray"
        surface="flat"
        kicker="SOHO làm gì"
        title={
          <>
            Chia tài khoản theo <span className="hl">ý định và lợi nhuận</span>
          </>
        }
        intro="Tầng truy vấn và lượt bấm được sửa bằng cấu trúc tài khoản: mỗi nhánh một mục tiêu riêng, từ khóa không ra khách và nhóm hàng không có lãi được tách ra. Tầng khách đúng tệp và đơn có lãi được sửa bằng dữ liệu đơn chốt đưa ngược về tài khoản."
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

        <Responsibility
          ours={[
            'Kiểm tra cách đo, mục tiêu chuyển đổi và cấu trúc tài khoản trước khi đổi gì',
            'Dựng lại chiến dịch theo ý định, danh sách từ khóa loại trừ, bộ mẫu quảng cáo',
            'Thiết lập nhập đơn chốt từ CRM hoặc sổ bán hàng về Google Ads',
            'Báo cáo chi phí mỗi đơn, doanh thu trên chi phí và lợi nhuận gộp'
          ]}
          yours={[
            'Quyền truy cập tài khoản Google Ads, GA4 và Google Merchant Center (nếu bán hàng online)',
            'Biên lợi nhuận theo nhóm hàng hoặc dịch vụ, để đặt mức hòa vốn',
            'Dữ liệu đơn chốt từ CRM hoặc sổ bán hàng, cập nhật định kỳ',
            'Phản hồi của đội sale về chất lượng khách từ quảng cáo'
          ]}
        />

        <div className={styles.handover}>
          <div>
            <h3 className={styles.subhead}>Bàn giao</h3>
            <ul className={styles.deliver}>
              {service.deliverables.map((d, i) => (
                <li key={d}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.partner}>
            <PartnerBadge partner={google} size={96} tipId="tip-google-ads-page" />
            <div>
              <p className={styles.partnerHead}>SOHO là Google Partner</p>
              <ul>
                {google.criteria.map(c => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className={styles.partnerNote}>
                Tiêu chí do Google xác nhận trên hồ sơ đối tác. Bấm huy hiệu để xem hồ sơ. SOHO chưa công bố dự án Google Ads có số liệu.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="do-luong"
        kicker="Đo thế nào"
        title={
          <>
            Báo cáo đọc từ <span className="hl">cuối phễu ngược lên</span>
          </>
        }
        intro="Bước 5 trên dải các bước là báo cáo chi phí mỗi đơn và lợi nhuận gộp. Bậc 4 cho biết có lãi không; ba bậc dưới cho biết rò ở đâu khi chưa lãi."
      >
        <MeasurementLadder
          metrics={{
            activity: ['Từ khóa loại trừ đã thêm', 'Số mẫu quảng cáo đang được thử'],
            interim: ['Tỉ lệ hiển thị ở từ khóa có ý định mua', 'Chi phí mỗi lượt bấm, tỉ lệ bấm'],
            behavior: ['Tỉ lệ chuyển đổi của trang đích', 'Tỉ lệ khách đủ chuẩn theo sale'],
            business: ['Chi phí có một khách mua so với mức hòa vốn', 'Lợi nhuận gộp sau quảng cáo']
          }}
          limits={[
            'Khách thường mua sau nhiều ngày. Số của tuần này chưa đủ để kết luận về một chiến dịch.',
            'Google Ads, GA4 và CRM ghi công theo cách khác nhau, nên số đơn của mỗi bên thường lệch. Lấy CRM làm số gốc cho bậc 4.',
            'Performance Max cho xem ít dữ liệu về từ khóa hơn chiến dịch tìm kiếm.',
            'Chưa có dữ liệu đơn chốt thì chỉ tối ưu được tới bậc 3.'
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
            Ý định mua → trang đích → <span className="hl">đơn có lãi</span>
          </>
        }
        intro="Quảng cáo đưa người đang tìm tới ngay, trong lúc SEO còn cần thời gian. Phần còn lại của phễu nằm ở trang đích, đo lường và đội sale."
      >
        <ServiceTouchpointContext slug={service.slug} names={names} />
      </Section>

      <MethodSection article={article} name={service.menuTitle} tone="white" />

      <ContextualServiceCTA
        slug={service.slug}
        text="Gửi tài khoản đang chạy hoặc kế hoạch ngân sách. SOHO đọc bốn tầng của phễu và chỉ ra tầng nào đang rò tiền nhiều nhất."
      />
    </>
  );
}
