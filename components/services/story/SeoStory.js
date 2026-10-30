import s from './story.module.css';
import Icon from '../../ui/Icon';
import {sitePath} from '../../paths';
import ServiceDiagram from '../../diagrams/ServiceDiagrams';
import Track from '../../diagrams/Track';
import BeforeAfter from '../../diagrams/BeforeAfter';
import {Figure, R, T, P, TL} from '../../diagrams/svg';
import {Responsibility, MeasurementLadder} from '../insight/Insight';
import {MethodSection, ServiceSubnav} from '../pilots/PilotParts';
import {ContextualServiceCTA} from '../ServiceContext';
import SearchTrend from '../proof/SearchTrend';
import {cases} from '../../data/cases';
import {TypingSearch, CountUp, ScrollSteps, ProgressLine, CompareSlider} from './Interactive';

/*
  Trang SEO tổng thể kể chuyện theo sáu chương, chương sau trả lời câu hỏi chương trước để lại:
  khách gõ gì → sáu câu hỏi là một cụm → cụm đứt ở đâu → SOHO nối lại thế nào → một dự án đã đi đúng đường
  → bạn nhận gì, cần gì → bước đầu tiên. Ba sơ đồ đang live (cụm chủ đề, dải bước, trước/sau) giữ nguyên,
  đặt đúng chương. Hình còn lại dựng bằng code; không dùng ảnh người.
*/

export const SEO_STORY_NAV = [
  ['khach-go', 'Khách gõ gì'],
  ['cum-chu-de', 'Cụm chủ đề'],
  ['cho-dut', 'Chỗ đứt'],
  ['soho-lam', 'SOHO làm'],
  ['du-an', 'Dự án'],
  ['ban-nhan', 'Bạn nhận gì'],
  ['phuong-phap', 'Đọc sâu'],
  ['lien-he', 'Liên hệ']
];

// Sáu nút trên sơ đồ cụm chủ đề, xếp từ xa tới gần quyết định. Ví dụ ngành thi công quán cà phê, không phải số liệu khách.
const INTENTS = [
  {node: 'Câu hỏi', state: 'tìm ý tưởng', query: 'mẫu quán cà phê sân vườn đẹp', volume: 'Nhiều', near: 'Xa', page: 'Bài hướng dẫn có ảnh, dẫn sang bài chi phí'},
  {node: 'So sánh', state: 'so lựa chọn', query: 'nên thuê công ty hay tự làm quán cà phê', volume: 'Vừa', near: 'Vừa', page: 'Bài so sánh có tiêu chí rõ'},
  {node: 'Chi phí', state: 'tính tiền', query: 'chi phí làm quán cà phê sân vườn', volume: 'Vừa', near: 'Gần', page: 'Bài phân tích chi phí, dẫn sang báo giá'},
  {node: 'Câu chuyện khách', state: 'tìm bằng chứng', query: 'công trình quán cà phê đã thi công', volume: 'Ít', near: 'Gần', page: 'Trang dự án có ảnh thật'},
  {node: 'Quy trình', state: 'hình dung cách làm việc', query: 'quy trình thi công quán cà phê', volume: 'Ít', near: 'Gần', page: 'Trang quy trình và bảo hành'},
  {node: 'Trang dịch vụ', state: 'sẵn sàng liên hệ', query: 'công ty thi công quán cà phê sân vườn', volume: 'Ít', near: 'Rất gần', page: 'Trang dịch vụ có giá tham khảo và form', acc: true}
];

const STEPS = [
  {title: 'Người mới tò mò', text: 'Gõ “mẫu quán cà phê sân vườn đẹp”. Họ chưa định mua, chỉ xem ảnh. Nhiều người nhất, nhưng xa quyết định nhất.'},
  {title: 'Người đang cân nhắc', text: 'Gõ “nên thuê công ty hay tự làm”. Họ bắt đầu so sánh. Bài trả lời câu này là chỗ thương hiệu được ghi nhớ.'},
  {title: 'Người đang tính tiền', text: 'Gõ “chi phí làm quán cà phê sân vườn”. Gần quyết định. Website không có trang chi phí thì họ đọc trang của đối thủ.'},
  {title: 'Người muốn thấy bằng chứng', text: 'Gõ “công trình đã thi công”. Họ cần ảnh thật, tên thật, không cần thêm lời hứa.'},
  {title: 'Người hình dung cách làm việc', text: 'Gõ “quy trình thi công”. Họ muốn biết bắt đầu thế nào, mất bao lâu, bảo hành ra sao.'},
  {title: 'Người sẵn sàng liên hệ', text: 'Gõ “công ty thi công quán cà phê sân vườn”. Ít người nhất, nhưng đây là nơi mọi bài phải dẫn về.'}
];

const LEAKS = [
  {tag: 'Nút “Câu hỏi”', title: 'Bài kéo người chưa định mua', text: 'Bài “mẫu quán cà phê đẹp” có nhiều lượt xem từ người tìm ảnh tham khảo. Họ đọc xong rồi đi, vì bài không nói tới chi phí hay cách bắt đầu.'},
  {tag: 'Nút “Chi phí”', title: 'Người sắp mua không tìm thấy câu trả lời', text: 'Người gõ “chi phí làm quán cà phê sân vườn” đã gần quyết định. Website không có trang trả lời chi phí thì họ đọc trang của đối thủ.'},
  {tag: 'Nút “Trang dịch vụ”', title: 'Điểm đến là ngõ cụt', text: 'Khách tới được trang dịch vụ nhưng không thấy giá tham khảo, quy trình hay công trình đã làm, nên chưa đủ tin để để lại thông tin.'}
];

const FIXES = [
  {step: 'Kiểm tra kỹ thuật', check: 'Google có đọc và lập chỉ mục được các trang không', change: 'Sửa lỗi kỹ thuật trước khi viết thêm, vì trang không được lập chỉ mục thì không có cơ hội hiện lên.'},
  {step: 'Bản đồ từ khóa', check: 'Truy vấn nào đang mang người tới, trang nào đang nhận họ (Search Console)', change: 'Xếp từng truy vấn vào đúng nút trên cụm, theo bước mua của người tìm.'},
  {step: 'Dựng cụm', check: 'Bài nào trùng nhau, bài nào không có đường dẫn về trang dịch vụ', change: 'Gom bài theo cụm, mỗi nhóm truy vấn có đúng một trang trả lời; liên kết theo bước tiếp theo của người đọc.'},
  {step: 'Làm rõ thương hiệu', check: 'Trang dịch vụ thiếu gì so với câu hỏi của người sắp mua', change: 'Bổ sung giá tham khảo, quy trình, công trình thật, tác giả và dữ liệu cấu trúc để Google tin.'},
  {step: 'Báo cáo', check: 'Khách đến từ Google có đúng nhu cầu không', change: 'Báo cáo hằng tháng bằng độ phủ, số khách và doanh thu, không chỉ bằng thứ hạng.'}
];

const SCALE = {Nhiều: 4, Vừa: 2, Ít: 1, Xa: 1, Gần: 3, 'Rất gần': 4};

function Meter({label, value}) {
  return (
    <span className={s.meter}>
      <span>{label}</span>
      <span className={s.meterBars} aria-hidden="true">
        {[1, 2, 3, 4].map(n => (
          <i key={n} data-on={n <= SCALE[value] ? '' : undefined} />
        ))}
      </span>
      <span className="visually-hidden">{value}</span>
    </span>
  );
}

// Sơ đồ cụm bị đứt: ba trang, hai chỗ hở. Cùng ngôn ngữ nét với sơ đồ live.
function LeakFigure() {
  return (
    <Figure
      id="dg-leak"
      viewBox="0 0 480 150"
      title="Sơ đồ cụm chủ đề bị đứt"
      desc="Bài hướng dẫn không dẫn đi đâu, trang chi phí chưa có, trang dịch vụ không có gì để tin."
      caption="Ba chỗ đứt thường gặp trên một cụm chủ đề: bài không dẫn đi, trang còn thiếu, điểm đến trống."
    >
      <R x={10} y={40} w={130} h={56} d={0} />
      <TL x={75} y={64} lines={['Bài hướng dẫn', 'nhiều lượt xem']} lh={18} c="mid b" d={300} />
      <P path="M140 68 H175" d={500} />
      <T x={200} y={72} c="mid acc" d={700}>
        ?
      </T>
      <R x={175} y={40} w={130} h={56} d={600} c="dash" />
      <TL x={240} y={64} lines={['Trang chi phí', 'chưa có']} lh={18} c="mid" d={900} />
      <P path="M305 68 H340" d={1000} />
      <T x={365} y={72} c="mid acc" d={1100}>
        ?
      </T>
      <R x={340} y={40} w={130} h={56} d={1200} c="fill2" />
      <TL x={405} y={64} lines={['Trang dịch vụ', 'không có giá, ảnh']} lh={18} c="mid b" d={1400} />
      <T x={75} y={126} c="mid" d={1600}>
        Người đọc rời đi
      </T>
      <T x={405} y={126} c="mid" d={1700}>
        Khách không liên hệ
      </T>
    </Figure>
  );
}

function WireBefore() {
  return (
    <div className={s.wire} aria-hidden="true">
      <span className={s.wireHead} />
      <span className={`${s.wireBar} ${s.w90}`} />
      <span className={`${s.wireBar} ${s.w70}`} />
      <span className={`${s.wireBar} ${s.w90}`} />
      <span className={`${s.wireBar} ${s.w40}`} />
      <span className={`${s.wireBar} ${s.w90}`} />
      <span className={`${s.wireBar} ${s.w70}`} />
      <span className={`${s.wireBar} ${s.w90}`} />
    </div>
  );
}

function WireAfter() {
  return (
    <div className={s.wire} aria-hidden="true">
      <span className={s.wireHead} />
      <span className={s.wireLabel}>Giá tham khảo</span>
      <span className={s.wireBlock}>
        <span />
        <span className={s.wireAcc} />
        <span />
      </span>
      <span className={s.wireLabel}>Quy trình · Công trình thật</span>
      <span className={s.wireBlock}>
        <span />
        <span />
        <span />
      </span>
      <span className={s.wireBtn} />
    </div>
  );
}

export default function SeoStory({service, article, names}) {
  const project = cases.find(c => c.slug === 'seo-studio-chup-anh-tphcm');
  const queries = INTENTS.map(i => ({q: i.query, note: i.state}));
  return (
    <div className={s.page}>
      {/* Mở đầu */}
      <section className={`${s.hero} dark on-dark`} aria-labelledby="h1">
        <div className={`container ${s.heroGrid}`}>
          <div>
            <nav aria-label="Breadcrumb" className={s.crumbs}>
              <ol>
                <li>
                  <a href={sitePath('/')}>Trang chủ</a>
                </li>
                <li>
                  <a href={sitePath('/dich-vu')}>Dịch vụ</a>
                </li>
                <li>
                  <span aria-current="page">{service.menuTitle}</span>
                </li>
              </ol>
            </nav>
            <h1 id="h1" className={s.h1}>
              Khách đang gõ tìm bạn. <span className="hl">Website có ở đó không?</span>
            </h1>
            <p className={s.heroText}>{service.intro}</p>
            <div className={s.heroActions}>
              <a href="#lien-he" className={s.primary}>
                Nhận tư vấn SEO <Icon name="arrow-right" size={18} />
              </a>
              <a href="#khach-go" className={s.ghost}>
                Đọc câu chuyện, 6 chương
              </a>
            </div>
          </div>
          <div className={s.serp} aria-label="Mô phỏng trang kết quả tìm kiếm">
            <TypingSearch queries={queries} />
            <div className={s.serpRow} style={{'--i': 0}}>
              <i />
              <i />
              <i />
            </div>
            <div className={s.serpRow} style={{'--i': 1}}>
              <i />
              <i />
              <i />
            </div>
            <div className={`${s.serpRow} ${s.serpYou}`} style={{'--i': 2}}>
              <strong>Trang của bạn?</strong>
              Chưa có trang nào trả lời đúng câu này, hoặc có mà Google chưa đọc được.
            </div>
          </div>
        </div>
      </section>

      <ServiceSubnav items={SEO_STORY_NAV} />

      {/* Chương 1 */}
      <section id="khach-go" className={s.chapter} aria-labelledby="c1">
        <div className="container">
          <div className={s.head}>
            <p className={s.kicker}>
              <b>01</b> Khách gõ gì
            </p>
            <h2 id="c1" className={s.h2}>
              Sáu kiểu gõ, sáu người khác nhau
            </h2>
          </div>
          <div className={s.grid}>
            <div className={s.sticky}>
              <p className={s.lead}>
                Cùng một nhu cầu, người ta gõ rất khác nhau tùy họ đang ở đâu trên đường đi tới quyết định. Ví dụ bên phải là một doanh nghiệp thi công quán cà phê
                sân vườn, để thấy mức “số người gõ” và “gần quyết định” đi ngược chiều nhau.
              </p>
              <p className={`${s.small} ${s.block}`}>
                Mức “số người gõ” và “gần quyết định” là xu hướng thường gặp để so sánh giữa các nhóm, không phải số đo. Số thật của từng ngành lấy từ công cụ
                nghiên cứu từ khóa và Search Console.
              </p>
            </div>
            <ol className={s.intents} aria-label="Sáu nhóm truy vấn, từ xa tới gần quyết định">
              {INTENTS.map((r, i) => (
                <li key={r.node} data-acc={r.acc ? '' : undefined}>
                  <span className={s.intentNum}>{String(i + 1).padStart(2, '0')}</span>
                  <p className={s.intentState}>
                    <strong>{r.node}</strong>
                    Người tìm đang {r.state}
                  </p>
                  <span className={s.intentQuery}>{r.query}</span>
                  <span className={s.meters}>
                    <Meter label="Số người gõ" value={r.volume} />
                    <Meter label="Gần quyết định" value={r.near} />
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <p className={s.bridge} data-reveal="">
            Sáu kiểu gõ này không rời nhau. Chúng là một cụm, và cụm đó có một điểm đến.
            <a href="#cum-chu-de">Chương 2 ↓</a>
          </p>
        </div>
      </section>

      {/* Chương 2 */}
      <section id="cum-chu-de" className={`${s.chapter} ${s.canvas}`} aria-labelledby="c2">
        <div className="container">
          <div className={s.head}>
            <p className={s.kicker}>
              <b>02</b> Cụm chủ đề
            </p>
            <h2 id="c2" className={s.h2}>
              Sáu câu hỏi, một cụm, một điểm đến
            </h2>
          </div>
          <ScrollSteps className={`${s.grid} ${s.stepsWrap}`}>
            <div className={s.steps}>
              <p className={s.lead}>Cuộn chậm. Mỗi đoạn dưới đây là một nút trên sơ đồ; nút đó sáng lên khi bạn đọc tới.</p>
              {STEPS.map((st, i) => (
                <div key={st.title} className={s.step} data-step={i + 1}>
                  <h3>
                    <span>Nút {i + 1} · {INTENTS[i].node}</span>
                    {st.title}
                  </h3>
                  <p>{st.text}</p>
                  <p>
                    <em>Trang cần có:</em> {INTENTS[i].page}
                  </p>
                </div>
              ))}
            </div>
            <div className={s.cluster} data-active="0">
              <ServiceDiagram slug={service.slug} card />
            </div>
          </ScrollSteps>
          <p className={s.bridge} data-reveal="">
            Cụm đẹp trên giấy. Trên website thật, nó thường đứt ở ba chỗ.
            <a href="#cho-dut">Chương 3 ↓</a>
          </p>
        </div>
      </section>

      {/* Chương 3 */}
      <section id="cho-dut" className={s.chapter} aria-labelledby="c3">
        <div className="container">
          <div className={s.head}>
            <p className={s.kicker}>
              <b>03</b> Chỗ đứt
            </p>
            <h2 id="c3" className={s.h2}>
              Có lượt truy cập, chưa chắc có khách
            </h2>
            <p className={s.lead}>Nhiều website có đủ các nhóm bài xung quanh, nhưng mỗi bài đứng riêng, không đường nào dẫn người đọc về điểm đến.</p>
          </div>
          <div className={s.leakFigure}>
            <LeakFigure />
          </div>
          <ol className={s.leaks}>
            {LEAKS.map(l => (
              <li key={l.title}>
                <span className={s.leakTag}>{l.tag}</span>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </li>
            ))}
          </ol>
          <div className={s.block}>
            <h3>Dấu hiệu bạn đang gặp, và điều cần thay đổi</h3>
            <BeforeAfter before={service.pains} after={service.outcomes} beforeLabel="Dấu hiệu bạn đang gặp" afterLabel="Mục tiêu hướng tới" />
            <p className={`${s.small} ${s.compareNote}`}>{service.proof}</p>
          </div>
          <p className={s.bridge} data-reveal="">
            Chỗ đứt nào cũng sửa được, nếu sửa đúng thứ tự.
            <a href="#soho-lam">Chương 4 ↓</a>
          </p>
        </div>
      </section>

      {/* Chương 4 */}
      <section id="soho-lam" className={`${s.chapter} ${s.canvas}`} aria-labelledby="c4">
        <div className="container">
          <div className={s.head}>
            <p className={s.kicker}>
              <b>04</b> SOHO làm
            </p>
            <h2 id="c4" className={s.h2}>
              Nối lại cụm theo {service.process.length} bước
            </h2>
            <p className={s.lead}>Một nguyên nhân nằm dưới cả sơ đồ: Google không đọc được trang. Vì vậy bước đầu tiên luôn là kỹ thuật, viết thêm để sau.</p>
          </div>
          <div className={s.trackWrap}>
            <Track items={service.process.map(title => ({title}))} />
          </div>
          <div className={s.grid}>
            <div className={s.sticky}>
              <h3 className={s.h2} style={{fontSize: 'clamp(24px, 2vw, 32px)'}}>
                Mỗi bước: kiểm tra gì, đổi gì
              </h3>
              <p className={`${s.lead} ${s.block}`} style={{marginTop: 16}}>
                Đường kẻ bên phải tô dần khi bạn cuộn. Không bước nào nhảy qua bước trước.
              </p>
            </div>
            <ol className={s.timeline}>
              <ProgressLine className={s.progress} />
              {FIXES.map((f, i) => (
                <li key={f.step}>
                  <span className={s.tlNum}>{String(i + 1).padStart(2, '0')}</span>
                  <p className={s.tlCol}>
                    <span>Kiểm tra</span>
                    {f.check}
                  </p>
                  <p className={`${s.tlCol} ${s.tlChange}`}>
                    <span>Thay đổi</span>
                    {f.change}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className={s.block}>
            <h3>Trang dịch vụ, trước và sau bước 4</h3>
            <CompareSlider
              before={<WireBefore />}
              after={<WireAfter />}
              beforeLabel="Trước"
              afterLabel="Sau"
            />
            <p className={`${s.small} ${s.compareNote}`}>Trước: trang toàn chữ. Sau: có giá tham khảo, quy trình, công trình thật và form. Khung minh họa dựng bằng code, không phải ảnh chụp trang của khách hàng.</p>
          </div>
          <p className={s.bridge} data-reveal="">
            Một studio ảnh ở TP.HCM đã đi đúng năm bước này từ tháng 8/2026.
            <a href="#du-an">Chương 5 ↓</a>
          </p>
        </div>
      </section>

      {/* Chương 5 */}
      {project && (
        <section id="du-an" className={s.chapter} aria-labelledby="c5">
          <div className="container">
            <div className={s.head}>
              <p className={s.kicker}>
                <b>05</b> Dự án thật
              </p>
              <h2 id="c5" className={s.h2}>
                {project.name}
              </h2>
              <p className={s.small}>{project.field}</p>
            </div>
            <div className={s.caseGrid}>
              <div>
                <a href={sitePath(`/du-an/${project.slug}`)} className={s.caseCover} tabIndex={-1} aria-hidden="true">
                  <img src={sitePath(project.image)} alt="" width={project.imageWidth} height={project.imageHeight} loading="lazy" />
                </a>
                <ul className={s.kpis} aria-label="Số liệu đã công bố">
                  <li>
                    <strong>
                      <CountUp value={102} />
                    </strong>
                    lượt nhấp từ Google vào 6 trang mới, 22/09–22/10/2026
                  </li>
                  <li>
                    <strong>
                      <CountUp value={4771} />
                    </strong>
                    lượt hiển thị của 6 trang đó trong cùng kỳ
                  </li>
                  <li>
                    <strong>
                      <CountUp value={4.7} decimals={1} />
                    </strong>
                    vị trí trung bình của trang trụ cột cho truy vấn “studio chụp ảnh”
                  </li>
                </ul>
                <div className={s.trendWrap}>
                  <SearchTrend series={project.series} source={project.source} />
                </div>
              </div>
              <dl className={s.caseFacts}>
                <div>
                  <dt>Vấn đề</dt>
                  <dd>{project.context}</dd>
                </div>
                <div>
                  <dt>SOHO đã làm</dt>
                  <dd>{project.work}</dd>
                </div>
                <div>
                  <dt>Giới hạn của số liệu</dt>
                  <dd>
                    <ul className={s.limits}>
                      {project.limits.map(l => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dd>
                    <a href={sitePath(`/du-an/${project.slug}`)} className={s.caseLink}>
                      Xem dự án <Icon name="arrow-right" size={16} />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <p className={s.bridge} data-reveal="">
              Để làm được như vậy, hai bên cần góp gì?
              <a href="#ban-nhan">Chương 6 ↓</a>
            </p>
          </div>
        </section>
      )}

      {/* Chương 6 */}
      <section id="ban-nhan" className={`${s.chapter} ${s.canvas}`} aria-labelledby="c6">
        <div className="container">
          <div className={s.head}>
            <p className={s.kicker}>
              <b>06</b> Bạn nhận gì, cần gì
            </p>
            <h2 id="c6" className={s.h2}>
              Hồ sơ bàn giao, trách nhiệm, và cách đo
            </h2>
          </div>
          <ul className={s.files} aria-label="Hồ sơ bàn giao">
            {service.deliverables.map(d => (
              <li key={d}>
                <Icon name="file-text" size={18} />
                {d}
              </li>
            ))}
          </ul>
          <div className={s.block}>
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
          <div className={s.block}>
            <h3>Thứ hạng là bậc đầu, không phải đích</h3>
            <MeasurementLadder
              metrics={{
                activity: ['Số trang trong cụm đã dựng hoặc sửa', 'Số lỗi kỹ thuật đã xử lý'],
                interim: ['Hiển thị và lượt bấm ở nhóm truy vấn có ý định mua (Search Console)', 'Số trang được lập chỉ mục'],
                behavior: ['Lượt đi từ bài vệ tinh sang trang dịch vụ', 'Form, cuộc gọi, tin nhắn từ khách đến qua Google (GA4)'],
                business: ['Số khách đủ chuẩn đến từ Google', 'Doanh thu từ những khách đó (cần CRM hoặc sổ bán hàng ghi nguồn)']
              }}
              limits={[
                'SEO thường cần vài tháng mới thấy thay đổi ở bậc 3 và 4. Cần khách sớm thì chạy quảng cáo song song.',
                'Search Console ẩn bớt các truy vấn hiếm, nên tổng theo truy vấn luôn thấp hơn tổng thật. Dùng để xem xu hướng.',
                'Câu trả lời AI trên Google có thể làm giảm lượt bấm dù thứ hạng giữ nguyên.'
              ]}
            />
          </div>
          <p className={s.bridge} data-reveal="">
            Bước đầu tiên không tốn gì: gửi website và nhóm sản phẩm chính.
            <a href="#lien-he">Liên hệ ↓</a>
          </p>
        </div>
      </section>

      <MethodSection article={article} name={service.menuTitle} editorial tone="white" />

      <ContextualServiceCTA
        slug={service.slug}
        text="Gửi website và nhóm sản phẩm chính. SOHO xem các nút trên cụm chủ đề của bạn: nút nào thiếu trang, bài nào không dẫn về trang dịch vụ, và lỗi kỹ thuật nào đang chặn."
      />
    </div>
  );
}
