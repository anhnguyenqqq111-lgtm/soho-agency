import styles from './GoogleAdsService.module.css';
import ed from '../editorial/editorial.module.css';
import Icon from '../../ui/Icon';
import PartnerBadge from '../../proof/PartnerBadge';
import {sitePath} from '../../paths';
import AdsProfitSimulator from './AdsProfitSimulator';
import {MethodSection} from './PilotParts';
import {ProblemStatement, Responsibility, MeasurementLadder} from '../insight/Insight';
import {ServiceTouchpointContext, ContextualServiceCTA} from '../ServiceContext';
import {partners} from '../../data/proof';

/*
  Phần dưới sơ đồ của trang Google Ads & Shopping. Nội dung theo Redesign 3.1, bố cục theo V4.0 "kinh tế quảng cáo":
  câu khẳng định lớn → so sánh con số dễ nhìn và con số nên xem ở từng tầng phễu → một dải tối duy nhất cho phép tính
  (khối tối thứ hai là CTA cuối) → cấu trúc tài khoản → bàn giao và chứng nhận → thang đo → nối vào kinh doanh.
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
      <section id="van-de" className={ed.band} aria-labelledby="van-de-title">
        <div className="container">
          <p className={ed.label}>
            <b>01</b> Vấn đề
          </p>
          <h2 id="van-de-title" className={`${ed.statement} ${styles.statement}`}>
            Báo cáo đẹp <span className="hl">chưa chắc đã có lãi.</span>
          </h2>
          <ProblemStatement
            lead="Phễu ở đầu trang có bốn tầng. Nhiều tài khoản chỉ được nhìn ở tầng thứ hai, giá mỗi lượt bấm. Tiền có thể rò ở ba tầng còn lại trong khi báo cáo vẫn trông ổn."
            note="Các tình huống thường gặp khi kiểm tra tài khoản, dùng để minh họa, không phải số liệu của một khách hàng cụ thể."
            cases={[
              {
                tag: 'Rò ở tầng truy vấn',
                label: 'Giá bấm giảm, khách cũng giảm',
                text: 'Mở rộng từ khóa cho giá bấm rẻ hơn nhưng kéo thêm nhiều người chỉ tìm thông tin. Tầng lượt bấm vẫn trông tốt.'
              },
              {
                tag: 'Rò ở tầng khách đúng tệp',
                label: 'Nhiều form, sale nói khách không đúng',
                text: 'Chiến dịch được tối ưu theo số form nên học cách tìm người dễ điền form, không phải người sẽ mua.'
              },
              {
                tag: 'Rò ở tầng đơn có lãi',
                label: 'ROAS đẹp, lợi nhuận mỏng',
                text: 'Doanh thu dồn vào nhóm hàng bán chạy nhưng biên thấp. Sau giá vốn và vận chuyển, phần còn lại không đủ bù chi phí quảng cáo.'
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
              Mỗi tầng có một con số che chỗ rò
            </h2>
            <p className={`${ed.body} ${styles.sideText}`}>
              Con số dễ nhìn nhất ở mỗi tầng thường là con số Google Ads tự tối ưu. Nó tốt lên không có nghĩa tầng đó hết rò. Con số nên xem thường nằm ngoài
              tài khoản quảng cáo.
            </p>
          </div>
          <ol className={`${ed.main} ${ed.rows} ${styles.leaks}`} aria-label="Con số dễ nhìn và con số nên xem ở bốn tầng phễu">
            {LEAKS.map((r, i) => (
              <li key={r.tier} data-acc={r.acc ? '' : undefined}>
                <p className={styles.tier}>
                  <span>Tầng {i + 1}</span>
                  {r.tier}
                </p>
                <div className={styles.compare}>
                  <p className={styles.shown}>
                    <span>Con số dễ nhìn</span>
                    {r.shown}
                  </p>
                  <Icon name="arrow-right" size={22} />
                  <p className={styles.look}>
                    <span>Con số nên xem</span>
                    {r.look}
                  </p>
                </div>
                <p className={styles.hides}>
                  <strong>Có thể che: </strong>
                  {r.hides}
                </p>
                {r.dep && (
                  <a href={sitePath(`/dich-vu/${r.dep}`)} className={styles.dep}>
                    Phụ thuộc vào {names[r.dep]} <Icon name="arrow-right" size={16} />
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="mo-phong" className={`${ed.band} ${ed.ink} dark on-dark`} aria-labelledby="mo-phong-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>Phép tính</p>
            <h2 id="mo-phong-title" className={ed.h2}>
              Tính thử bằng số của bạn
            </h2>
          </div>
          <p className={`${ed.main} ${ed.lead} ${styles.simIntro}`}>
            Ngân sách đi qua cùng bốn tầng đó. Đổi tỉ lệ ở một tầng để thấy lợi nhuận cuối phễu thay đổi ra sao, và vì sao tăng ngân sách khi một tầng đang rò
            chỉ làm lỗ nhanh hơn.
          </p>
          <div className={ed.full}>
            <AdsProfitSimulator />
          </div>
        </div>
      </section>

      <section id="giai-phap" className={ed.band} aria-labelledby="giai-phap-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>
              <b>03</b> SOHO làm gì
            </p>
            <h2 id="giai-phap-title" className={ed.h2}>
              Chia tài khoản theo ý định và lợi nhuận
            </h2>
          </div>
          <p className={`${ed.main} ${ed.lead} ${styles.simIntro}`}>
            Tầng truy vấn và lượt bấm được sửa bằng cấu trúc tài khoản: mỗi nhánh một mục tiêu, từ khóa không ra khách và nhóm hàng không có lãi được tách ra.
            Tầng khách đúng tệp và đơn có lãi được sửa bằng dữ liệu đơn chốt đưa ngược về tài khoản.
          </p>
          <div className={`${ed.full} ${styles.tree}`}>
            <p className={styles.root}>Tài khoản Google Ads</p>
            <ul className={styles.branches}>
              {ARCHITECTURE.map(b => (
                <li key={b.name} className={styles.branch}>
                  <h3 className={styles.branchName}>{b.name}</h3>
                  <p className={styles.branchDesc}>{b.desc}</p>
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
          <div className={ed.full}>
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
          </div>
        </div>
      </section>

      <section id="ban-giao" className={`${ed.band} ${ed.canvas}`} aria-labelledby="ban-giao-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>Bằng chứng và bàn giao</p>
            <h2 id="ban-giao-title" className={ed.h2}>
              Được Google xác nhận, báo cáo bằng lợi nhuận
            </h2>
          </div>
          <div className={`${ed.main} ${styles.partner}`}>
            <PartnerBadge partner={google} size={112} tipId="tip-google-ads-page" />
            <div>
              <p className={styles.partnerHead}>SOHO là Google Partner. Google xác nhận trên hồ sơ đối tác:</p>
              <ul className={styles.criteria}>
                {google.criteria.map(c => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className={ed.small}>Bấm huy hiệu để xem hồ sơ. SOHO chưa công bố dự án Google Ads có số liệu.</p>
            </div>
          </div>
          <h3 className={`${ed.side} ${ed.h3}`}>Bàn giao</h3>
          <ol className={`${ed.main} ${styles.deliver}`}>
            {service.deliverables.map((d, i) => (
              <li key={d}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {d}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="do-luong" className={ed.band} aria-labelledby="do-luong-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>
              <b>04</b> Đo thế nào
            </p>
            <h2 id="do-luong-title" className={ed.h2}>
              Báo cáo đọc từ cuối phễu ngược lên
            </h2>
          </div>
          <p className={`${ed.main} ${ed.lead} ${styles.simIntro}`}>
            Bước 5 trên dải các bước là báo cáo chi phí mỗi đơn và lợi nhuận gộp. Bậc 4 cho biết có lãi không; ba bậc dưới cho biết rò ở đâu khi chưa lãi.
          </p>
          <div className={ed.full}>
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
          </div>
        </div>
      </section>

      <section id="diem-cham" className={`${ed.band} ${ed.canvas}`} aria-labelledby="diem-cham-title">
        <div className="container">
          <p className={ed.label}>
            <b>05</b> Nối vào kinh doanh
          </p>
          <h2 id="diem-cham-title" className={`${ed.statement} ${styles.chain}`}>
            Ý định mua <span aria-hidden="true">→</span> trang đích <span aria-hidden="true">→</span> <span className="hl">đơn có lãi</span>
          </h2>
          <p className={`${ed.lead} ${styles.chainLead}`}>
            Quảng cáo đưa người đang tìm tới ngay, trong lúc SEO còn cần thời gian. Phần còn lại của phễu nằm ở trang đích, đo lường và đội sale.
          </p>
          <ServiceTouchpointContext slug={service.slug} names={names} />
        </div>
      </section>

      <MethodSection article={article} name={service.menuTitle} editorial tone="white" />

      <ContextualServiceCTA
        slug={service.slug}
        text="Gửi tài khoản đang chạy hoặc kế hoạch ngân sách. SOHO đọc bốn tầng của phễu và chỉ ra tầng nào đang rò tiền nhiều nhất."
      />
    </>
  );
}
