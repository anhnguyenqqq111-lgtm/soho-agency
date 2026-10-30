import styles from './sq.module.css';
import Glass from './Glass';
import Button from '../ui/Button';
import {sitePath} from '../paths';
import {getCase, publishedCases} from '../data/cases';
import {testimonials, partners} from '../data/proof';
import {company} from '../data/company';
import {getPerson, team} from '../data/team';
import {thumbnailOf} from '../blogVisuals';

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
          <p className="eyebrow">Agency marketing cho doanh nghiệp nhỏ và vừa · TP.HCM</p>
          <h1 id="h1" className={styles.heroTitle}>
            Thêm khách <span className="hl">hỏi mua</span> từ Google, Facebook và website của bạn
          </h1>
          <p className={styles.heroLead}>
            SOHO làm marketing online cho doanh nghiệp đã có sản phẩm, có khách mua, và muốn có thêm khách đều đặn. Bạn lo bán hàng. SOHO lo đưa khách tới: hiện lên khi
            khách tìm trên Google, đưa quảng cáo Facebook, TikTok tới đúng người, làm website dễ gọi, dễ đặt. Mỗi tháng bạn nhận báo cáo bằng số người liên hệ, viết
            bằng lời thường.
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
                <span>tỉ lệ khách nhắn tin hỏi đặt phòng so với trước, Le Viva Resort</span>
              </div>
              <div className={`${styles.stat} glassy`}>
                <b>+135%</b>
                <span>{k['+135%'] ? 'lượt thích, bình luận tự nhiên trên fanpage Le Viva sau 2 tháng' : ''}</span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.heroArt}>
          <div className={styles.heroPanel} aria-hidden="true" />
          <Glass tone="light" icon="chart" style={{right: '8px', top: '58%', width: 150, height: 96, zIndex: 3, transform: 'rotate(5deg)'}} />
          {pm && (
            <img
              className={styles.heroPerson}
              src={sitePath(pm.photo)}
              width={pm.width}
              height={pm.height}
              alt={`${pm.name ? pm.name + ', ' : ''}${pm.role.toLowerCase()} của SOHO`}
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
              {pm.name ? `${pm.name}, ` : ''}
              {pm.role.charAt(0).toLowerCase() + pm.role.slice(1)} của SOHO.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Cân nhắc: một người phụ trách ---------- */
const STEPS4 = ['Tư vấn', 'Lên kế hoạch', 'Làm', 'Báo cáo'];
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
          <h2 id="h-pt">Một người phụ trách, từ buổi đầu tới báo cáo</h2>
          <Pain>Ký hợp đồng xong, người tư vấn không còn liên lạc. Người làm là một bạn mới, bạn phải kể lại từ đầu.</Pain>
          <p className={styles.desc}>
            Ở SOHO, người gặp bạn buổi đầu cũng là người lên kế hoạch, trực tiếp làm và báo cáo. Bạn chỉ cần nhớ một đầu mối, và người đó hiểu chuyện của bạn từ ngày
            đầu.
          </p>
        </div>
        <div className={styles.personCard}>
          {pm && (
            <div className={styles.personPhoto}>
              <img src={sitePath(pm.photo)} width={pm.width} height={pm.height} alt={`${pm.name ? pm.name + ', ' : ''}${pm.role.toLowerCase()} của SOHO`} loading="lazy" />
            </div>
          )}
          <div className={styles.personBody}>
            {pm && (
              <>
                <p className={styles.personRole}>{pm.name || pm.short}</p>
                <p className={styles.personDoes}>
                  {pm.role}. {pm.does}
                </p>
              </>
            )}
            <div className={styles.tl} role="img" aria-label="Cách thường gặp: mỗi bước một người. Ở SOHO: cùng một người từ tư vấn tới báo cáo.">
              <p className={styles.tlLabel}>Cách thường gặp: mỗi bước một người</p>
              <div className={styles.tlRow}>
                {STEPS4.map((s, i) => (
                  <div key={s} className={styles.tlStep}>
                    <i style={{background: ['#9aa9c0', '#7f90ab', '#b4c0d3', '#6c7d99'][i]}}>{'ABCD'[i]}</i>
                    {s}
                  </div>
                ))}
              </div>
              <p className={`${styles.tlLabel} ${styles.soho}`} style={{marginTop: 8}}>
                Ở SOHO: cùng một người
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
  ['Nghe bạn kể', 'Một buổi gọi hoặc gặp 30 phút. SOHO xem trước website, fanpage, quảng cáo bạn đang có.'],
  ['Chọn việc làm trước', 'Không làm mọi thứ cùng lúc. SOHO chỉ ra chỗ đang mất khách nhiều nhất và con số cần đạt.'],
  ['Bắt tay vào làm', 'Người lên kế hoạch trực tiếp làm. Bạn duyệt nội dung, hình ảnh trước khi đăng.'],
  ['Xem kết quả, sửa tiếp', 'Hai tuần một lần cùng xem số: việc nào hiệu quả thì làm tiếp, việc nào không thì sửa hoặc dừng.']
];
export function ProcessSteps() {
  return (
    <SectionShell id="quy-trinh" tone="white" labelledBy="h-qt">
      <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 56}}>
        <p className="eyebrow">Quy trình</p>
        <h2 id="h-qt">Làm việc với SOHO diễn ra thế nào?</h2>
        <p className={styles.desc} style={{maxWidth: '58ch'}}>
          Người phụ trách đi cùng bạn qua bốn bước. Bạn không cần chuẩn bị tài liệu hay biết thuật ngữ. Chỉ cần website hoặc fanpage, và vài dòng về điều bạn muốn cải
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

/* ---------- Cân nhắc: báo cáo bằng lời thường (số thật của case ẩn tên) ---------- */
export function ReportExplainer() {
  const c = getCase('seo-studio-chup-anh-tphcm');
  if (!c) return null;
  const [clicks, impr, pos] = c.kpis;
  const ratio = Math.round(Number(impr.value.replace('.', '')) / Number(clicks.value));
  return (
    <SectionShell
      id="bao-cao"
      tone="denim"
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
          <p className="eyebrow">Mỗi tháng bạn nhận gì</p>
          <h2 id="h-rp">Báo cáo bằng lời thường, đọc 2 phút là hiểu</h2>
          <Pain>Mỗi tháng nhận một bảng số toàn chữ tiếng Anh: impression, CTR, reach… mà không biết có thêm khách hay không.</Pain>
          <p className={styles.desc}>
            Báo cáo của SOHO trả lời ba câu: bao nhiêu người tìm thấy bạn, bao nhiêu người bấm vào hay liên hệ, họ đến từ đâu. Con số nào cũng kèm một câu “nghĩa là
            gì”, và nói thẳng chỗ chưa tốt.
          </p>
        </div>
        <div className={styles.doc}>
          <div className={styles.docHead}>
            <div>
              <p className={styles.docTag}>Trích báo cáo thật</p>
              <p className={styles.docTitle}>6 bài mới cho một studio chụp ảnh ở TP.HCM</p>
            </div>
            <p className={styles.docDate}>22/09–22/10/2026</p>
          </div>
          <div className={styles.docRow}>
            <div className={styles.docNum}>
              {impr.value}
              <small>lần hiện ra</small>
            </div>
            <div>
              <p>Các bài mới của bạn hiện ra trên Google</p>
              <p className={styles.mean}>
                <b>Nghĩa là:</b> đã có người tìm đúng chủ đề này, và Google bắt đầu đưa bạn ra.
              </p>
            </div>
          </div>
          <div className={styles.docRow}>
            <div className={styles.docNum}>
              {clicks.value}
              <small>lần bấm vào</small>
            </div>
            <div>
              <p>Số lần khách bấm vào xem</p>
              <p className={styles.mean}>
                <b>Nghĩa là:</b> cứ khoảng {ratio} lần hiện ra thì có 1 lần khách bấm vào.
              </p>
            </div>
          </div>
          <div className={styles.docRow}>
            <div className={styles.docNum}>
              thứ 4–5
              <small>vị trí thường gặp</small>
            </div>
            <div>
              <p>Khi khách tìm “studio chụp ảnh”, bạn thường đứng (trung bình {pos.value})</p>
              <p className={styles.mean}>
                <b>Nghĩa là:</b> đã ở trang đầu Google, chưa vào nhóm 3 vị trí đầu.
              </p>
            </div>
          </div>
          <div className={`${styles.docRow} ${styles.docWarn}`}>
            <div className={styles.docNum}>Chưa tốt</div>
            <div>
              <p>Tổng lượt khách vào cả website chưa thay đổi rõ.</p>
              <p className={styles.mean}>Đây mới là tháng đầu của 6 bài mới. Cần thêm thời gian trước khi kết luận.</p>
            </div>
          </div>
          <p className={styles.docFoot}>Khách đồng ý công bố số, xin giữ kín tên. Nguồn: Google Search Console của website khách.</p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- Củng cố niềm tin: kết quả, ba thẻ nghiêng (chỉ chỗ này được nghiêng) ---------- */
export function ResultsScatter({id = 'ket-qua', title = 'Kết quả thật từ khách của SOHO'}) {
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
          <p className="eyebrow">Kết quả đã công bố</p>
          <h2 id="h-kq">{title}</h2>
          <p className={styles.desc} style={{fontSize: 15}}>
            Mỗi con số ghi rõ của ai, trong bao lâu. Khách chưa đồng ý thì SOHO không đăng.
          </p>
          <div style={{marginTop: 24}}>
            <Button href="/ket-qua" variant="secondary" arrow="right">
              Xem tất cả kết quả
            </Button>
          </div>
        </div>
        <div className={`${styles.scatter} tilt`}>
          {lv && (
            <a href={sitePath('/du-an/le-viva-resort/')} className={`${styles.sc} ${styles.scWhite}`}>
              <p className={styles.scLab}>Khách nhắn tin hỏi đặt phòng</p>
              <div>
                <div className={styles.scNum}>×2,3</div>
                <p className={styles.scSrc}>gấp 2,3 lần giai đoạn trước, Le Viva Resort</p>
              </div>
            </a>
          )}
          {lv && (
            <a href={sitePath('/du-an/le-viva-resort/')} className={`${styles.sc} ${styles.scOrange}`}>
              <p className={styles.scLab}>Tiền quảng cáo cho mỗi 1.000 lần hiện ra</p>
              <div>
                <div className={styles.scNum}>−35%</div>
                <p className={styles.scSrc}>cùng số tiền, quảng cáo tới được nhiều người hơn. Le Viva Resort</p>
              </div>
            </a>
          )}
          {st && (
            <a href={sitePath(`/du-an/${st.slug}/`)} className={`${styles.sc} ${styles.scGlass}`}>
              <p className={styles.scLab}>Lượt khách bấm vào từ Google</p>
              <div>
                <div className={styles.scNum}>{st.kpis[0].value}</div>
                <p className={styles.scSrc}>tháng đầu của 6 bài mới, một studio chụp ảnh ở TP.HCM (giữ kín tên), 22/09–22/10/2026</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- Củng cố niềm tin: dự án, bài toán → kết quả ---------- */
export function CaseCards({items}) {
  const list = items || publishedCases.filter(c => !c.anonymous);
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
export function ProjectsSection() {
  return (
    <SectionShell id="du-an" tone="white" labelledBy="h-da">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 24, flexWrap: 'wrap', marginBottom: 44}}>
        <div>
          <p className="eyebrow">Dự án</p>
          <h2 id="h-da">Bài toán của khách, và SOHO đã giải thế nào</h2>
        </div>
        <Button href="/ket-qua" variant="secondary" arrow="right">
          Xem tất cả dự án
        </Button>
      </div>
      <CaseCards />
    </SectionShell>
  );
}

/* ---------- Củng cố niềm tin: lời khách, nguyên văn ---------- */
export function QuotesSection() {
  const [first, ...rest] = testimonials;
  if (!first) return null;
  return (
    <SectionShell id="khach-hang-noi" tone="tint" labelledBy="h-kn">
      <div className={styles.quotes}>
        <div>
          <p className="eyebrow">Khách hàng nói</p>
          <h2 id="h-kn">Lời từ người đã làm cùng SOHO</h2>
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
          <p className={styles.quoteSrc}>Nhận xét đã đăng trên sohoagency.vn, giữ nguyên văn.</p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------- Củng cố niềm tin: tài khoản đứng tên bạn ---------- */
const ACCOUNTS = ['Quảng cáo Google', 'Fanpage, quảng cáo Facebook', 'Google Analytics, Search Console', 'Tên miền, hosting website'];
export function AccountOwnership() {
  return (
    <SectionShell id="tai-khoan" tone="white" labelledBy="h-tk">
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
          <Pain>Nghỉ thuê agency thì mất luôn tài khoản quảng cáo, fanpage, có khi cả tên miền website.</Pain>
          <p className={styles.desc}>
            SOHO tạo mới hoặc chuyển tài khoản về tên bạn ngay từ đầu, rồi xin bạn cấp quyền để làm. Dừng hợp tác thì bạn gỡ quyền, mọi thứ còn nguyên: quảng cáo,
            fanpage, dữ liệu khách, website.
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
      {team.map(p => (
        <figure key={p.key} className={styles.teamCard}>
          <img src={sitePath(p.photo)} width={p.width} height={p.height} alt={`${p.name ? p.name + ', ' : ''}${p.role.toLowerCase()} của SOHO`} loading="lazy" />
          <figcaption>{p.name ? `${p.name} · ${p.role}` : p.role}</figcaption>
        </figure>
      ))}
    </div>
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
            <span>dự án khách cho phép công bố</span>
          </div>
        </div>
        <div>
          <p className="eyebrow">Về SOHO</p>
          <h2 id="h-gt">SOHO là lựa chọn của chủ doanh nghiệp muốn biết rõ tiền marketing đi đâu</h2>
          <p className={styles.desc}>
            Một đội nhỏ, làm việc thẳng với chủ doanh nghiệp. SOHO đã làm cho resort, đơn vị thi công quán cà phê và homestay, nhà phân phối đồng hồ, studio ảnh cưới,
            xưởng may. Bạn nói chuyện trực tiếp với người làm, không qua nhiều lớp trung gian, và luôn biết việc đang tới đâu.
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
  'seo-ky-nguyen-ai-search': 'Khách bắt đầu hỏi Google AI, ChatGPT thay vì tự bấm từng trang. Website cần làm gì để vẫn được nhắc tên.',
  'toi-uu-roas-performance-ads': 'Vì sao giá mỗi lượt bấm rẻ mà vẫn không ra đơn, và cách biết quảng cáo mang về bao nhiêu khách thật.',
  'chien-luoc-seo-ads-song-hanh': 'Ngân sách có hạn: lúc nào nên chạy quảng cáo để có khách ngay, lúc nào nên làm SEO cho lâu dài.',
  'toi-uu-cro-landing-page': 'Có người vào trang mà ít ai để lại số: những chỗ nên sửa trước trên trang bán hàng.',
  'content-hub-topic-cluster': 'Cách sắp xếp bài viết thành một cụm, để Google hiểu bạn giỏi chủ đề nào và khách đi tới trang dịch vụ.',
  'tracking-ga4-capi-2026': 'Vì sao số đơn trên Facebook và số đơn thật lệch nhau, và cách đếm lại cho đúng.',
  'framework-marketing-90-ngay': '7 bước SOHO làm khi nhận một khách mới: chọn kênh, chia tiền, đặt con số, xem lại sau 90 ngày.',
  'framework-seo-8-buoc': '8 bước SOHO làm SEO cho một website, từ khám lỗi tới khi có khách liên hệ.',
  'framework-ads-6-buoc': '6 bước SOHO nhận một tài khoản quảng cáo: tính tiền cho mỗi khách, đếm đúng, thử mẫu, rồi mới tăng tiền.'
};
export function BlogSection({posts}) {
  if (!posts?.length) return null;
  return (
    <SectionShell id="bai-viet" tone="white" labelledBy="h-bv">
      <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 48}}>
        <p className="eyebrow">Bài viết</p>
        <h2 id="h-bv">Đọc trước khi bỏ tiền làm marketing</h2>
        <p className={styles.desc}>Mỗi bài trả lời một câu chủ doanh nghiệp hay hỏi SOHO.</p>
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

export {SectionShell, Pain};
