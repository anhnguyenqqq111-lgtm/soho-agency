import styles from './HubBlocks.module.css';
import Icon from '../ui/Icon';
import {sitePath} from '../paths';
import {STAGES, FOUNDATION, ROLES, COMBOS, SPECIALIST_CONTEXT, stageOf} from '../data/touchpoints';

/*
  Các khối tĩnh của hub /dich-vu: hero có bản đồ hành trình, 6 năng lực chính (mỗi ô một cách trình bày),
  6 giải pháp chuyên biệt theo ngữ cảnh, và các kết hợp minh họa. Phần tương tác nằm ở GrowthDiagnostic, CustomerJourneyCanvas.
*/

// Hero: chữ bên trái, bản đồ 4 chặng + nền tảng bên phải; mỗi chặng là link tới bản đồ tương tác bên dưới
export function HubHero() {
  return (
    <section className={styles.hero} aria-labelledby="hub-title">
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <ol>
              <li>
                <a href={sitePath('/')}>Trang chủ</a>
              </li>
              <li>
                <span aria-current="page">Dịch vụ</span>
              </li>
            </ol>
          </nav>
          <h1 id="hub-title" className={styles.heroTitle}>
            <span className={styles.kicker}>Dịch vụ marketing SOHO Agency</span>
            <span className="visually-hidden">: </span>
            <span className={styles.line}>Không phải thêm kênh marketing.</span>{' '}
            <span className={styles.line}>
              Mà là <span className="hl">kết nối đúng những điểm chạm.</span>
            </span>
          </h1>
          <p className={styles.heroLead}>
            SEO, quảng cáo, website, thương hiệu và dữ liệu chỉ tạo ra giá trị bền vững khi phục vụ cùng một mục tiêu kinh doanh.
          </p>
          <a href="#chan-doan" className={styles.heroLink}>
            Bắt đầu từ vấn đề của bạn <Icon name="arrow-down" size={18} />
          </a>
        </div>
        <nav className={styles.heroMap} aria-label="Các chặng trên hành trình khách hàng">
          <ol>
            {STAGES.map(s => (
              <li key={s.key}>
                <a href={`#chang-${s.key}`}>
                  <span className={styles.mapNum}>{s.num}</span>
                  <span className={styles.mapName}>{s.name}</span>
                  <span className={styles.mapNeed}>{s.action}</span>
                </a>
              </li>
            ))}
          </ol>
          <a href={`#chang-${FOUNDATION.key}`} className={styles.mapBase}>
            <span className={styles.mapNum}>{FOUNDATION.num}</span>
            <span className={styles.mapName}>{FOUNDATION.name}</span>
          </a>
        </nav>
      </div>
    </section>
  );
}

// 6 năng lực chính dạng bento: mỗi ô một bố cục và một minh họa CSS riêng, không phải 6 thẻ giống nhau
const CORE = [
  {slug: 'seo-tong-the', cls: 'seo'},
  {slug: 'google-ads-shopping', cls: 'ads'},
  {slug: 'nhan-dien-thuong-hieu', cls: 'brand'},
  {slug: 'meta-tiktok-ads', cls: 'meta'},
  {slug: 'thiet-ke-website', cls: 'web'},
  {slug: 'thiet-ke-mobile-app', cls: 'app'}
];
const CORE_ART = {
  seo: (
    <span className={styles.artNodes}>
      <i />
      <i />
      <i />
      <i />
      <i />
    </span>
  ),
  ads: <span className={styles.artFormula}>doanh thu − chi phí quảng cáo − chi phí biến đổi</span>,
  brand: <span className={styles.artBrand} />,
  meta: (
    <span className={styles.artCreatives}>
      <i />
      <i />
      <i />
    </span>
  ),
  web: (
    <span className={styles.artBrowser}>
      <i />
      <i />
      <i />
    </span>
  ),
  app: (
    <span className={styles.artPhone}>
      <i />
      <i />
    </span>
  )
};
export function CoreCapabilities({services}) {
  const bySlug = Object.fromEntries(services.map(s => [s.slug, s]));
  return (
    <ul className={styles.bento}>
      {CORE.map(({slug, cls}) => {
        const s = bySlug[slug];
        return (
          <li key={slug} className={`${styles.cell} ${styles[cls]}`}>
            <a href={sitePath(`/dich-vu/${slug}`)} className={styles.cellLink}>
              <span className={styles.cellArt} aria-hidden="true">
                {CORE_ART[cls]}
              </span>
              <span className={styles.cellStage}>{stageOf(ROLES[slug].primary).name}</span>
              <span className={styles.cellName}>{s.coreTitle}</span>
              <span className={styles.cellDesc}>{s.coreDesc}</span>
              <span className={styles.cellMore}>
                Xem dịch vụ <Icon name="arrow-right" size={16} />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

// 6 giải pháp chuyên biệt: dạng "khi nào thì cần", không lặp lại danh sách dịch vụ
export function SpecialistSolutions({names}) {
  return (
    <ul className={styles.when}>
      {Object.entries(SPECIALIST_CONTEXT).map(([slug, when]) => (
        <li key={slug}>
          <a href={sitePath(`/dich-vu/${slug}`)} className={styles.whenLink}>
            <span className={styles.whenText}>{when}</span>
            <span className={styles.whenName}>
              {names[slug]}
              <Icon name="arrow-right" size={16} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

// Kết hợp minh họa: quan hệ chiến lược giữa các dịch vụ, không phải gói bắt buộc
export function ConnectedSolutions({names}) {
  return (
    <ul className={styles.combos}>
      {COMBOS.map(c => (
        <li key={c.key} className={styles.combo}>
          <p className={styles.comboTitle}>{c.title}</p>
          <ol className={styles.comboChain}>
            {c.slugs.map(slug => (
              <li key={slug}>
                <a href={sitePath(`/dich-vu/${slug}`)}>
                  <span className={styles.comboStage}>{stageOf(ROLES[slug].primary).name}</span>
                  {names[slug]}
                </a>
              </li>
            ))}
          </ol>
          <p className={styles.comboStory}>{c.story}</p>
        </li>
      ))}
    </ul>
  );
}
