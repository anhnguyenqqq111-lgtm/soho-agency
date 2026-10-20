import styles from './ServiceContext.module.css';
import Icon from '../ui/Icon';
import CtaBand from '../ui/CtaBand';
import {sitePath} from '../paths';
import {STAGES, FOUNDATION, ROLES, stageOf} from '../data/touchpoints';

/*
  Hai khối dùng chung cho mọi trang dịch vụ, mỗi trang tự đặt chúng ở chỗ hợp với câu chuyện của nó:
  - ServiceTouchpointContext: dịch vụ tạo giá trị ở chặng nào, khách cần gì, làm gì, bước tiếp theo và lý do nối,
    dịch vụ hỗ trợ, khi nào chưa nên làm, con số để đánh giá.
  - ContextualServiceCTA: khối liên hệ cuối trang với nhãn và lời mời theo dịch vụ; form chọn sẵn dịch vụ đó.
*/

const ALL = [...STAGES, FOUNDATION];

export function ServiceTouchpointContext({slug, names, tone = 'light'}) {
  const r = ROLES[slug];
  return (
    <div className={`${styles.context} ${tone === 'dark' ? styles.dark : ''}`}>
      <ol className={styles.stages} aria-label="Chặng trên hành trình khách hàng">
        {ALL.map(s => {
          const role = s.key === r.primary ? 'chính' : r.supporting.includes(s.key) ? 'hỗ trợ' : null;
          return (
            <li key={s.key} className={styles.stage} data-role={role === 'chính' ? 'primary' : role ? 'support' : undefined}>
              <span className={styles.num}>{s.num}</span>
              <span className={styles.stageName}>{s.name}</span>
              <span className={styles.roleTag}>{role ? `Vai trò ${role}` : ' '}</span>
            </li>
          );
        })}
      </ol>

      <ol className={styles.chain} aria-label="Đường đi của khách qua điểm chạm này">
        {r.chain.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <dl className={styles.facts}>
        <div>
          <dt>Khách cần</dt>
          <dd>{r.need}</dd>
        </div>
        <div>
          <dt>Khách làm</dt>
          <dd>{r.interaction}</dd>
        </div>
        <div>
          <dt>Đánh giá bằng</dt>
          <dd>{r.metric}</dd>
        </div>
      </dl>

      <div className={styles.links}>
        <a href={sitePath(`/dich-vu/${r.next.slug}`)} className={styles.next}>
          <span className={styles.linkHead}>Bước tiếp theo</span>
          <strong>
            {names[r.next.slug]} <Icon name="arrow-right" size={16} />
          </strong>
          <span>{r.next.why}</span>
        </a>
        <div className={styles.pair}>
          <span className={styles.linkHead}>Hay đi cùng</span>
          <p>
            {r.pair.map((p, i) => (
              <span key={p}>
                {i > 0 && ', '}
                <a href={sitePath(`/dich-vu/${p}`)}>{names[p]}</a>
              </span>
            ))}
          </p>
        </div>
        <div className={styles.notYet}>
          <span className={styles.linkHead}>Khi nào chưa nên làm</span>
          <p>
            {r.notYet}
            {r.notYetSlug && (
              <>
                {' '}
                <a href={sitePath(`/dich-vu/${r.notYetSlug}`)}>Xem {names[r.notYetSlug]}</a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

// Giá trị phải trùng một lựa chọn trong ô "Dịch vụ quan tâm" của ContactForm
const FORM_SERVICE = {
  'seo-tong-the': 'SEO website',
  'seo-ai-overview': 'SEO website',
  'local-seo-google-maps': 'SEO website',
  'google-ads-shopping': 'Google Ads',
  'meta-tiktok-ads': 'Facebook Ads, TikTok Ads',
  'cro-landing-page': 'Nội dung, đo lường hoặc dịch vụ khác',
  'thiet-ke-website': 'Thiết kế website',
  'nhan-dien-thuong-hieu': 'Nhận diện thương hiệu',
  'thiet-ke-mobile-app': 'Thiết kế Mobile App',
  'content-marketing-pr': 'Nội dung, đo lường hoặc dịch vụ khác',
  'ga4-looker-dashboard': 'Nội dung, đo lường hoặc dịch vụ khác',
  'tu-van-chien-luoc-sprint': 'Chưa rõ, cần tư vấn nên làm gì trước'
};

export function ContextualServiceCTA({slug, text}) {
  const r = ROLES[slug];
  return (
    <CtaBand
      title={<span className="hl">{r.cta}</span>}
      text={text || `Gửi website và kênh đang chạy. SOHO xem điểm chạm "${stageOf(r.primary).name}" của bạn và gửi lại những việc nên làm trước.`}
      service={FORM_SERVICE[slug]}
    />
  );
}
