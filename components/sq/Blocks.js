import styles from './sq.module.css';
import Glass from './Glass';
import Button from '../ui/Button';
import {sitePath} from '../paths';
import {getCase, publishedCases} from '../data/cases';
import {testimonials, partners} from '../data/proof';
import {company} from '../data/company';
import {getPerson, team, personAlt, personTitle} from '../data/team';
import {thumbnailOf} from '../blogVisuals';
import svc from './service.module.css';
import ReportDashboards from './ReportDashboards';

/*
  Khối nội dung bản 12 (canvas "Bản vuông, gọn"). Mỗi khối là một section riêng, xếp theo đường đọc:
  nhận biết vấn đề → cân nhắc → củng cố niềm tin → để lại liên hệ. Chữ viết theo docs/redesign/WRITING_GUIDE.md.
  Số chỉ lấy từ components/data/cases.js, luôn kèm của ai, khoảng thời gian, nguồn.
*/
const google = partners.find(p => p.verified);

function SectionShell({id, tone = 'white', labelledBy, children, glass, style}) {
  const bg = {white: 'bg-white', tint: 'bg-tint', denim: 'bg-denim', deep: 'bg-deep'}[tone];
  const dark = tone === 'denim' || tone === 'deep';
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${bg} ${dark ? 'dark on-dark' : ''}`} style={{position: 'relative', overflow: 'hidden', isolation: 'isolate', paddingBlock: 'var(--space-md)', ...style}}>
      {glass}
      <div className="container" style={{position: 'relative', zIndex: 1}}>
        {children}
      </div>
    </section>
  );
}

function Pain({children}) {
  return (
    <div className={styles.pain}>
      <p className="pain-k">Bạn từng gặp?</p>
      <p className="pain-bub">{children}</p>
    </div>
  );
}

/* ---------- Hero trang chủ: câu định vị + người thật ---------- */
export function HomeHeroSq() {
  const pm = getPerson('pm');
  const leviva = getCase('le-viva-resort');
  const k = Object.fromEntries((leviva?.kpis || []).map(x => [x.value, x.label]));
  return (
    <section className={`${styles.hero} bg-tint`} aria-labelledby="h1">
      <Glass tone="denim" badge style={{left: '44%', top: '-60px', width: 160, height: 160, transform: 'rotate(-8deg)'}} />
      <Glass tone="orange" icon="search" style={{right: '-80px', bottom: '-50px', width: 230, height: 120, transform: 'rotate(6deg)'}} />
      <Glass tone="orange" sm style={{left: '32px', bottom: '56px', width: 26, height: 26, transform: 'rotate(14deg)'}} />
      <div className={`container ${styles.heroGrid}`}>
        <div>
          <p className="eyebrow">Agency marketing online cho doanh nghiệp vừa và nhỏ · TP.HCM</p>
          <h1 id="h1" className={styles.heroTitle}>
            Có thêm <span className="hl">khách hàng mới</span> đều đặn từ Google, Facebook và website
          </h1>
          <p className={styles.heroLead}>
            SOHO làm SEO, chạy quảng cáo Facebook, TikTok, Google và thiết kế website cho doanh nghiệp đã có sản phẩm, đã có khách và muốn bán được nhiều hơn. Bạn
            tập trung bán hàng, việc tìm khách để SOHO lo. Cuối mỗi tháng bạn nhận báo cáo ngắn gọn, dễ hiểu: bao nhiêu khách đã liên hệ, đến từ kênh nào, tiền quảng
            cáo đã chi vào đâu.
          </p>
          <div className={styles.heroBtns}>
            <Button href="#lien-he" variant="denim" arrow={false}>
              Nhận tư vấn
            </Button>
            {company.phone && (
              <Button href={`tel:${company.phone.replace(/\s/g, '')}`} variant="secondary" arrow={false}>
                Gọi {company.phone}
              </Button>
            )}
          </div>
          {leviva && (
            <div className={styles.heroStats}>
              <div className={`${styles.stat} glassy`}>
                <b>×2,3</b>
                <span>tỉ lệ khách nhắn tin hỏi đặt phòng so với giai đoạn trước · Le Viva Resort</span>
              </div>
              <div className={`${styles.stat} glassy`}>
                <b>+135%</b>
                <span>{k['+135%'] ? 'lượt tương tác tự nhiên trên fanpage sau 2 tháng · Le Viva Resort' : ''}</span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.heroArt}>
          <div className={styles.heroPanel} aria-hidden="true" />
          <Glass tone="light" icon="chart" className="keep-sm" style={{right: '8px', top: '58%', width: 150, height: 96, zIndex: 3, transform: 'rotate(5deg)'}} />
          {pm && (
            <img
              className={styles.heroPerson}
              src={sitePath(pm.photos.cutout.src)}
              width={pm.photos.cutout.width}
              height={pm.photos.cutout.height}
              alt={personAlt(pm)}
              fetchPriority="high"
            />
          )}
          {google?.profileUrl && (
            <a className={`${styles.partnerPill} glassy`} href={google.profileUrl} target="_blank" rel="noopener">
              <img src={sitePath(google.logo)} alt="" width={google.width} height={google.height} />
              {google.name} {google.year}
            </a>
          )}
          {pm && (
            <p className={`${styles.heroCap} glassy`}>
              <b>Người làm việc với bạn</b>
              {pm.name}, {pm.title.charAt(0).toLowerCase() + pm.title.slice(1)}. Trực tiếp phụ trách dự án của bạn từ buổi tư vấn đầu tiên đến khi báo cáo.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Cân nhắc: một người phụ trách ---------- */
const STEPS4 = ['Tư vấn', 'Lên kế hoạch', 'Triển khai', 'Báo cáo'];
const PERSON_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);
export function PersonInCharge() {
  const pm = getPerson('pm');
  return (
    <SectionShell id="nguoi-phu-trach" tone="tint" labelledBy="h-pt">
      <div className={styles.split}>
        <div>
          <p className="eyebrow">Ai làm việc với bạn</p>
          <h2 id="h-pt">Một đầu mối duy nhất, từ buổi tư vấn đến báo cáo</h2>
          <Pain>Ký hợp đồng xong, người tư vấn không còn liên lạc. Người làm là một bạn mới, bạn lại phải kể từ đầu.</Pain>
          <p className={styles.desc}>
            Ở SOHO, người tư vấn cho bạn từ buổi đầu cũng là người theo dự án đến khi báo cáo. Người lên kế hoạch là người trực tiếp làm. Bạn chỉ làm việc với một đầu
            mối, không phải kể lại chuyện của mình nhiều lần.
          </p>
        </div>
        <div className={styles.personCard}>
          {pm && (
            <div className={styles.personPhoto}>
              <img src={sitePath(pm.photos.vest.src)} width={pm.photos.vest.width} height={pm.photos.vest.height} alt={personAlt(pm)} loading="lazy" />
            </div>
          )}
          <div className={styles.personBody}>
            {pm && (
              <>
                <p className={styles.personRole}>{pm.name || pm.short}</p>
                <p className={styles.personDoes}>
                  {personTitle(pm)}. {pm.does}
                </p>
              </>
            )}
            <div className={styles.tl} role="img" aria-label="Nhiều nơi: mỗi bước một người. Ở SOHO: một đầu mối suốt dự án, từ tư vấn đến báo cáo.">
              <p className={styles.tlLabel}>Nhiều nơi: mỗi bước một người</p>
              <div className={styles.tlRow}>
                {STEPS4.map((s, i) => (
                  <div key={s} className={styles.tlStep}>
                    <i style={{background: ['#9aa9c0', '#7f90ab', '#b4c0d3', '#6c7d99'][i]}}>{'ABCD'[i]}</i>
                    {s}
                  </div>
                ))}
              </div>
              <p className={`${styles.tlLabel} ${styles.soho}`} style={{marginTop: 8}}>
                Ở SOHO: một đầu mối suốt dự án
              </p>
              <div className={`${styles.tlRow} ${styles.soho}`}>
                {STEPS4.map(s => (
                  <div key={s} className={styles.tlStep}>
                    <i style={{background: 'var(--denim)'}}>{PERSON_ICON}</i>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- Cân nhắc: quy trình 4 bước ---------- */
const PROCESS = [
  ['Trao đổi ban đầu', 'Một buổi gọi hoặc gặp 30 phút. Trước buổi đó, SOHO xem website, fanpage và quảng cáo bạn đang chạy.'],
  ['Chọn việc cần làm trước', 'Không làm mọi thứ cùng lúc. SOHO chỉ ra chỗ đang mất khách nhiều nhất và chỉ số cần đạt.'],
  ['Triển khai', 'Người lên kế hoạch trực tiếp làm. Bạn duyệt nội dung và hình ảnh trước khi đăng.'],
  ['Đo kết quả, điều chỉnh', 'Hai tuần một lần cùng bạn xem số liệu: việc nào hiệu quả thì làm tiếp, việc nào chưa thì sửa hoặc dừng.']
];
export function ProcessSteps() {
  return (
    <SectionShell id="quy-trinh" tone="white" labelledBy="h-qt">
      <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 56}}>
        <p className="eyebrow">Quy trình</p>
        <h2 id="h-qt">Làm việc với SOHO diễn ra thế nào?</h2>
        <p className={styles.desc} style={{maxWidth: '58ch'}}>
          Người phụ trách đi cùng bạn qua bốn bước. Bạn không cần chuẩn bị tài liệu hay biết thuật ngữ, chỉ cần website hoặc fanpage và vài dòng về điều bạn muốn cải
          thiện.
        </p>
      </div>
      <ol className={styles.steps} style={{listStyle: 'none', margin: 0, padding: 0}}>
        {PROCESS.map(([t, d], i) => (
          <li key={t} className={styles.step} data-reveal="" style={{'--reveal-delay': `${i * 80}ms`}}>
            <div className={styles.stepNum}>
              {String(i + 1).padStart(2, '0')}
              <i>.</i>
            </div>
            <h3>{t}</h3>
            <p>{d}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}

/* ---------- Cân nhắc: báo cáo ngắn gọn, dễ hiểu (số thật của Studio 1 Nhà) ---------- */
export function ReportExplainer({tone = 'denim'}) {
  const c = getCase('seo-studio-chup-anh-tphcm');
  if (!c) return null;
  const [clicks, impr, pos] = c.kpis;
  const ratio = Math.round(Number(impr.value.replace('.', '')) / Number(clicks.value));
  return (
    <SectionShell
      id="bao-cao"
      tone={tone}
      labelledBy="h-rp"
      glass={
        <>
          <Glass tone="white" icon="star" style={{left: '-90px', top: '-60px', width: 220, height: 220, transform: 'rotate(10deg)'}} />
          <Glass tone="white" icon="cursor" style={{right: '7%', top: '40px', width: 140, height: 74, transform: 'rotate(-12deg)'}} />
        </>
      }
    >
      <div className={styles.split}>
        <div>
          <p className="eyebrow">Báo cáo hằng tháng</p>
          <h2 id="h-rp">Báo cáo ngắn gọn, đọc 2 phút là hiểu</h2>
          <Pain>Mỗi tháng nhận một bảng số toàn tiếng Anh như impression, CTR, reach… mà không biết có thêm khách hay không.</Pain>
          <p className={styles.desc}>
            Báo cáo của SOHO trả lời ba câu hỏi: bao nhiêu người thấy bạn trên Google, bao nhiêu người vào website hoặc liên hệ, họ đến từ đâu. Mỗi con số đều có giải
            thích ngắn. Chỗ nào chưa tốt, báo cáo nói thẳng.
          </p>
        </div>
        <div className={styles.doc}>
          <div className={styles.docHead}>
            <div>
              <p className={styles.docTag}>Trích từ báo cáo thật</p>
              <p className={styles.docTitle}>6 bài mới cho Studio 1 Nhà</p>
            </div>
            <p className={styles.docDate}>22/09–22/10/2026</p>
          </div>
          <div className={styles.docRow}>
            <div className={styles.docNum}>
              {impr.value}
              <small>lượt hiển thị</small>
            </div>
            <div>
              <p>Lượt hiển thị của 6 bài mới trên Google</p>
              <p className={styles.mean}>
                <b>Nghĩa là:</b> đã có người tìm đúng chủ đề này và Google bắt đầu đưa bài của bạn lên kết quả tìm kiếm.
              </p>
            </div>
          </div>
          <div className={styles.docRow}>
            <div className={styles.docNum}>
              {clicks.value}
              <small>lượt nhấp</small>
            </div>
            <div>
              <p>Lượt nhấp từ Google vào 6 bài này</p>
              <p className={styles.mean}>
                <b>Nghĩa là:</b> cứ khoảng {ratio} lượt hiển thị thì có 1 lượt nhấp.
              </p>
            </div>
          </div>
          <div className={styles.docRow}>
            <div className={styles.docNum}>
              Top 5
              <small>trên Google</small>
            </div>
            <div>
              <p>Vị trí khi khách tìm “studio chụp ảnh” (trung bình {pos.value})</p>
              <p className={styles.mean}>
                <b>Nghĩa là:</b> đã lên trang đầu Google, chưa vào top 3.
              </p>
            </div>
          </div>
          <div className={`${styles.docRow} ${styles.docWarn}`}>
            <div className={styles.docNum}>Chưa tốt</div>
            <div>
              <p>Tổng lượt truy cập của cả website chưa tăng rõ.</p>
              <p className={styles.mean}>Đây mới là tháng đầu của 6 bài mới, cần thêm thời gian để đánh giá.</p>
            </div>
          </div>
          <p className={styles.docFoot}>Nguồn: Google Search Console của studio1nha.vn.</p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- Cân nhắc: báo cáo tự cập nhật (ảnh báo cáo thật, số đã làm mờ) ---------- */
export function ReportLive({tone = 'white', idPrefix = 'rp'}) {
  return (
    <SectionShell id="bao-cao-tu-cap-nhat" tone={tone} labelledBy={`h-${idPrefix}`}>
      <div style={{maxWidth: '68ch', marginBottom: 36}}>
        <p className="eyebrow">Báo cáo tự cập nhật</p>
        <h2 id={`h-${idPrefix}`}>
          Theo dõi số liệu <span className="hl">bất cứ lúc nào</span>, không phải chờ cuối tháng
        </h2>
        <p className={styles.desc}>
          Ngoài báo cáo hằng tháng, SOHO dựng cho bạn một trang báo cáo kết nối trực tiếp với Google Ads, Facebook Ads, Google Analytics và Search Console. Số liệu
          tự cập nhật, bạn xem được trên điện thoại hay máy tính mà không cần đăng nhập từng nền tảng.
        </p>
        <p className={styles.desc} style={{fontSize: 14}}>
          Hình dưới là báo cáo thật SOHO đang làm cho một khách bán hàng online. Số liệu và tên khách đã được làm mờ.
        </p>
      </div>
      <ReportDashboards idPrefix={idPrefix} />
    </SectionShell>
  );
}

/* ---------- Củng cố niềm tin: kết quả, ba thẻ nghiêng (chỉ chỗ này được nghiêng) ---------- */
export function ResultsScatter({id = 'ket-qua', title = 'Kết quả thật từ khách hàng của SOHO', showLink = true}) {
  const lv = getCase('le-viva-resort');
  const st = getCase('seo-studio-chup-anh-tphcm');
  return (
    <SectionShell
      id={id}
      tone="denim"
      labelledBy="h-kq"
      glass={<Glass tone="white" style={{left: '-110px', bottom: '-150px', width: 234, height: 234, transform: 'rotate(-8deg)'}} />}
    >
      <div className={styles.kqGrid}>
        <div>
          <p className="eyebrow">Kết quả nổi bật</p>
          <h2 id="h-kq">{title}</h2>
          <p className={styles.desc} style={{fontSize: 15}}>
            Mỗi con số đều ghi rõ của khách nào, trong khoảng thời gian nào.
          </p>
          {showLink && (
            <div style={{marginTop: 24}}>
              <Button href="/ket-qua" variant="secondary" arrow="right">
                Xem tất cả kết quả
              </Button>
            </div>
          )}
        </div>
        <div className={`${styles.scatter} tilt`}>
          {lv && (
            <a href={sitePath('/du-an/le-viva-resort/')} className={`${styles.sc} ${styles.scWhite}`}>
              <p className={styles.scLab}>Khách nhắn tin hỏi đặt phòng</p>
              <div>
                <div className={styles.scNum}>×2,3</div>
                <p className={styles.scSrc}>gấp 2,3 lần giai đoạn trước · Le Viva Resort</p>
              </div>
            </a>
          )}
          {lv && (
            <a href={sitePath('/du-an/le-viva-resort/')} className={`${styles.sc} ${styles.scOrange}`}>
              <p className={styles.scLab}>Chi phí cho 1.000 lượt hiển thị quảng cáo</p>
              <div>
                <div className={styles.scNum}>−35%</div>
                <p className={styles.scSrc}>cùng ngân sách, quảng cáo đến được nhiều người hơn · Le Viva Resort</p>
              </div>
            </a>
          )}
          {st && (
            <a href={sitePath(`/du-an/${st.slug}/`)} className={`${styles.sc} ${styles.scGlass}`}>
              <p className={styles.scLab}>Lượt nhấp từ Google</p>
              <div>
                <div className={styles.scNum}>{st.kpis[0].value}</div>
                <p className={styles.scSrc}>tháng đầu của 6 bài viết mới · Studio 1 Nhà, 22/09–22/10/2026</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- Củng cố niềm tin: dự án, bài toán → kết quả ---------- */
// Trang chủ: 4 dự án, đủ hai kênh quảng cáo và SEO. Trang Kết quả hiện tất cả.
const HOME_CASES = ['le-viva-resort', 'seo-studio-chup-anh-tphcm', 'everest-logistics', 'king-decor-luxury'];
export function CaseCards({items}) {
  const list = items || HOME_CASES.map(getCase).filter(Boolean);
  return (
    <div className={styles.cases}>
      {list.map(c => (
        <a key={c.slug} href={sitePath(`/du-an/${c.slug}/`)} className={styles.caseCard} data-reveal="">
          {c.image && <img className={styles.caseImg} src={sitePath(c.image)} alt={c.imageAlt || ''} loading="lazy" style={{objectPosition: c.imagePosition || 'center'}} />}
          <span className={styles.caseTag}>{c.scope}</span>
          <h3>{c.name}</h3>
          <p className={styles.caseField}>{c.field}</p>
          <p className={styles.caseLine}>
            <b>Bài toán:</b> {c.problem}
          </p>
          <p className={styles.caseLine}>
            <b>Kết quả:</b> {c.result}
          </p>
        </a>
      ))}
    </div>
  );
}
export function ProjectsSection({all = false, showLink = true, tone = 'white'}) {
  return (
    <SectionShell id="du-an" tone={tone} labelledBy="h-da">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 24, flexWrap: 'wrap', marginBottom: 44}}>
        <div>
          <p className="eyebrow">Dự án tiêu biểu</p>
          <h2 id="h-da">Bài toán của khách và cách SOHO giải quyết</h2>
        </div>
        {showLink && (
          <Button href="/ket-qua" variant="secondary" arrow="right">
            Xem tất cả dự án
          </Button>
        )}
      </div>
      <CaseCards items={all ? publishedCases : undefined} />
    </SectionShell>
  );
}

/* ---------- Củng cố niềm tin: lời khách, nguyên văn ---------- */
export function QuotesSection({tone = 'tint'}) {
  const [first, ...rest] = testimonials;
  if (!first) return null;
  return (
    <SectionShell id="khach-hang-noi" tone={tone} labelledBy="h-kn">
      <div className={styles.quotes}>
        <div>
          <p className="eyebrow">Khách hàng nói</p>
          <h2 id="h-kn">Khách hàng nói gì về SOHO</h2>
          <blockquote className={styles.bigQuote} style={{marginTop: 40}}>
            <p>“{first.quote}”</p>
            <footer>
              {first.name}
              <span>{first.role}</span>
            </footer>
          </blockquote>
        </div>
        <div className={styles.smallQuotes}>
          {rest.map(t => (
            <blockquote key={t.name}>
              <p>“{t.quote}”</p>
              <footer>
                {t.name} · {t.role}
              </footer>
            </blockquote>
          ))}
          <p className={styles.quoteSrc}>Trích nguyên văn nhận xét của khách hàng.</p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- Củng cố niềm tin: tài khoản đứng tên bạn ---------- */
const ACCOUNTS = ['Quảng cáo Google', 'Fanpage, quảng cáo Facebook', 'Google Analytics, Search Console', 'Tên miền, hosting website'];
export function AccountOwnership({tone = 'white'}) {
  return (
    <SectionShell id="tai-khoan" tone={tone} labelledBy="h-tk">
      <div className={styles.split}>
        <div>
          <table className={styles.acc}>
            <thead>
              <tr>
                <th scope="col">Tài khoản</th>
                <th scope="col">Đứng tên</th>
                <th scope="col">SOHO</th>
              </tr>
            </thead>
            <tbody>
              {ACCOUNTS.map(a => (
                <tr key={a}>
                  <td>{a}</td>
                  <td>
                    <span className={`${styles.chip} ${styles.chipOwn}`}>Bạn</span>
                  </td>
                  <td>
                    <span className={`${styles.chip} ${styles.chipAcc}`}>Được cấp quyền</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.stopLabel}>Khi dừng hợp tác</p>
          <div className={styles.stop}>
            <div>
              <b>1</b>Bạn báo dừng hợp tác.
            </div>
            <div>
              <b>2</b>Bạn gỡ quyền của SOHO trong từng tài khoản.
            </div>
            <div>
              <b>3</b>SOHO bàn giao tài liệu để đội bạn làm tiếp.
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow">Tài khoản và dữ liệu</p>
          <h2 id="h-tk">Mọi tài khoản đứng tên doanh nghiệp bạn</h2>
          <Pain>Ngừng thuê agency là mất luôn tài khoản quảng cáo, fanpage, có khi cả tên miền website.</Pain>
          <p className={styles.desc}>
            Ngay từ đầu, SOHO tạo mới hoặc chuyển các tài khoản về tên doanh nghiệp bạn, sau đó xin bạn cấp quyền quản lý. Khi dừng hợp tác, bạn chỉ cần gỡ quyền.
            Quảng cáo, fanpage, dữ liệu khách hàng và website vẫn còn nguyên.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- Củng cố niềm tin: về SOHO, có ảnh người thật ---------- */
export function TeamArt() {
  return (
    <div className={styles.teamArt}>
      {team.filter(p => p.photos).map(p => {
        const real = p.photos?.smile;
        return (
          <figure key={p.key} className={`${styles.teamCard} ${real ? styles.teamCardReal : ''}`}>
            <img src={sitePath(real ? real.src : p.photo)} width={real ? real.width : p.width} height={real ? real.height : p.height} alt={personAlt(p)} loading="lazy" />
            <figcaption>{p.name ? `${p.name} · ${p.title || p.role}` : p.role}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}

/* ---------- Về SOHO: hai người bạn làm việc cùng, mỗi người một ảnh thật ---------- */
const FEATURE = {
  pm: {
    id: 'nguoi-sang-lap',
    eyebrow: 'Người sáng lập, đầu mối của bạn',
    title: (
      <>
        Người lập ra SOHO cũng là <span className="hl">người làm việc với bạn</span>
      </>
    ),
    intro: 'Ở nhiều nơi, người ký hợp đồng với bạn và người trực tiếp làm là hai người khác nhau. Ở SOHO, người sáng lập nhận dự án và là đầu mối của bạn từ đầu đến cuối:',
    does: [
      'Gặp bạn buổi đầu, tìm hiểu khách hàng và cách bạn đang bán',
      'Báo giá rõ từng hạng mục trước khi bắt đầu',
      'Theo sát dự án, là người bạn liên hệ khi cần',
      'Hai tuần một lần cùng bạn xem số liệu, quyết định làm tiếp hay điều chỉnh'
    ],
    pic: p => p.photos.vest
  },
  mkt: {
    id: 'nguoi-len-ke-hoach',
    eyebrow: 'Người lên kế hoạch và làm',
    title: (
      <>
        Kế hoạch do <span className="hl">người trực tiếp làm</span> viết ra
      </>
    ),
    intro: 'Người viết kế hoạch cho dự án của bạn cũng là người trực tiếp triển khai, nên kế hoạch không chỉ nằm trên giấy:',
    does: [
      'Chọn kênh làm trước và phân bổ ngân sách theo chỉ số cần đạt',
      'Trực tiếp làm SEO, chạy quảng cáo, tối ưu website theo kế hoạch đã thống nhất',
      'Đo kết quả và điều chỉnh sau mỗi 2 tuần'
    ],
    pic: p => p.photos.main
  }
};
export function PersonFeature({person = 'pm', tone = 'tint', reverse = false}) {
  const p = getPerson(person);
  const f = FEATURE[person];
  if (!p?.photos || !f) return null;
  const main = f.pic(p);
  const hid = `h-${f.id}`;
  return (
    <SectionShell id={f.id} tone={tone} labelledBy={hid}>
      <div className={`${styles.founder} ${reverse ? styles.founderRev : ''}`}>
        <div className={styles.founderPic}>
          <img src={sitePath(main.src)} width={main.width} height={main.height} alt={personAlt(p)} loading="lazy" />
        </div>
        <div>
          <p className="eyebrow">{f.eyebrow}</p>
          <h2 id={hid}>{f.title}</h2>
          <p className={styles.founderName}>
            <b>{p.name}</b>
            {personTitle(p)}
          </p>
          {p.bio && <p className={styles.founderBio}>{p.bio}</p>}
          <p className={styles.desc}>{f.intro}</p>
          <ul className={`${styles.checks} ${styles.checks1}`}>
            {f.does.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

export function AboutSoho() {
  const count = publishedCases.length;
  return (
    <SectionShell id="ve-soho" tone="tint" labelledBy="h-gt">
      <div className={styles.split}>
        <div style={{position: 'relative'}}>
          <TeamArt />
          <div className={styles.count}>
            <b>{count}</b>
            <span>dự án tiêu biểu</span>
          </div>
        </div>
        <div>
          <p className="eyebrow">Về SOHO</p>
          <h2 id="h-gt">SOHO là lựa chọn của chủ doanh nghiệp muốn biết rõ tiền marketing đi đâu</h2>
          <p className={styles.desc}>
            Một đội nhỏ, làm việc trực tiếp với chủ doanh nghiệp. SOHO đã làm cho resort, đơn vị thi công quán cà phê và homestay, nhà phân phối đồng hồ, studio ảnh
            cưới, công ty logistics và xưởng may. Bạn trao đổi thẳng với người làm, không qua nhiều lớp trung gian, và luôn biết dự án đang tới đâu.
          </p>
          <ul className={styles.checks}>
            <li>
              {google ? `Đối tác Google ${google.year} (Google Partner)` : 'Đối tác Google'}
            </li>
            <li>Cùng bạn xem kết quả mỗi 2 tuần</li>
            <li>Không hứa “lên top 1 Google”</li>
            <li>Báo giá rõ theo từng việc</li>
          </ul>
          <div style={{marginTop: 32}}>
            <Button href="/ve-soho" variant="denim" arrow="right">
              Tìm hiểu SOHO
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- Cân nhắc: bài viết ---------- */
const PLAIN = {
  'seo-ky-nguyen-ai-search': 'Khách hàng bắt đầu hỏi AI của Google và ChatGPT thay vì tự mở từng trang. Website cần làm gì để vẫn được nhắc tên.',
  'toi-uu-roas-performance-ads': 'Vì sao giá mỗi lượt nhấp rẻ mà vẫn không ra đơn, và cách biết quảng cáo thật sự mang về bao nhiêu khách.',
  'chien-luoc-seo-ads-song-hanh': 'Ngân sách có hạn: lúc nào nên chạy quảng cáo để có khách ngay, lúc nào nên làm SEO cho lâu dài.',
  'toi-uu-cro-landing-page': 'Nhiều người vào trang nhưng ít ai để lại thông tin: những chỗ nên sửa trước trên landing page.',
  'content-hub-topic-cluster': 'Cách sắp xếp bài viết theo cụm chủ đề để Google hiểu bạn mạnh về lĩnh vực nào và dẫn khách đến trang dịch vụ.',
  'tracking-ga4-capi-2026': 'Vì sao số đơn Facebook báo và số đơn thực tế lệch nhau, và cách đo lại cho đúng.',
  'framework-marketing-90-ngay': '7 bước SOHO làm khi nhận khách mới: chọn kênh, phân bổ ngân sách, đặt mục tiêu, đánh giá lại sau 90 ngày.',
  'framework-seo-8-buoc': '8 bước SOHO làm SEO cho một website, từ kiểm tra lỗi đến khi có khách liên hệ.',
  'framework-ads-6-buoc': '6 bước khi SOHO nhận một tài khoản quảng cáo: tính chi phí cho mỗi khách, đo cho đúng, thử mẫu quảng cáo rồi mới tăng ngân sách.'
};
export function BlogSection({posts}) {
  if (!posts?.length) return null;
  return (
    <SectionShell id="bai-viet" tone="white" labelledBy="h-bv">
      <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 48}}>
        <p className="eyebrow">Bài viết</p>
        <h2 id="h-bv">Đọc trước khi bỏ tiền làm marketing</h2>
        <p className={styles.desc}>Mỗi bài trả lời một câu hỏi chủ doanh nghiệp hay đặt ra cho SOHO.</p>
      </div>
      <div className={styles.posts}>
        {posts.map(p => (
          <a key={p.slug} href={sitePath(`/blog/${p.slug}/`)} className={styles.post}>
            {p.image && (() => {
              const t = thumbnailOf(p);
              return <img src={sitePath(t.src)} alt="" loading="lazy" width={t.width} height={t.height} />;
            })()}
            <div className={styles.postBody}>
              <span className={styles.postMeta}>
                {p.category} · {p.date}
              </span>
              <h3>{p.title}</h3>
              <p>{PLAIN[p.slug] || p.excerpt}</p>
              <span className={styles.more}>Đọc bài →</span>
            </div>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}

/* Thẻ người thật nhỏ: dùng ở trang Liên hệ ("Người sẽ gọi lại cho bạn") */
export function PersonMini({label = 'Người sẽ gọi lại cho bạn'}) {
  const pm = getPerson('pm');
  if (!pm) return null;
  return (
    <div className={svc.person} style={{marginTop: 24, maxWidth: 520}}>
      <div className={svc.personImg}>
        <img src={sitePath(pm.photo)} width={pm.width} height={pm.height} alt={personAlt(pm)} loading="lazy" />
      </div>
      <div>
        <p className={svc.caseTag}>{label}</p>
        <p className={svc.personRole}>{pm.name || pm.role}</p>
        <p className={svc.personDoes}>
          {pm.title ? `${pm.title}. ` : ''}
          {pm.does}
        </p>
      </div>
    </div>
  );
}

export {SectionShell, Pain};
