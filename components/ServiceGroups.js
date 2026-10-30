'use client';
import {useState} from 'react';
import styles from './ServiceGroups.module.css';
import {sitePath} from './paths';

/*
  Danh sách dịch vụ theo nhóm (trang /dich-vu), mỗi nhóm ba dịch vụ dạng dòng có link.
  Bộ chọn "Bạn đang gặp vấn đề gì?": chọn một điểm nghẽn, dịch vụ phù hợp sáng lên, còn lại mờ đi.
  Đúng tinh thần "chọn theo điểm nghẽn, không theo gói". Sửa ánh xạ ở PROBLEMS.
*/
const PROBLEMS = [
  {
    key: 'found',
    label: 'Ít người tìm thấy',
    services: ['seo-tong-the', 'seo-ai-overview', 'local-seo-google-maps', 'content-marketing-pr'],
    hint: 'Bắt đầu từ SEO và content để khách tìm thấy bạn khi họ đang có nhu cầu.'
  },
  {
    key: 'lead',
    label: 'Có người xem nhưng ít người liên hệ',
    services: ['cro-landing-page', 'content-marketing-pr', 'ga4-looker-dashboard'],
    hint: 'Đã có người xem. Việc trước là sửa trang đích và đo đúng chỗ khách bỏ đi.'
  },
  {
    key: 'ads',
    label: 'Quảng cáo đắt, khó ra đơn',
    services: ['google-ads-shopping', 'meta-tiktok-ads', 'cro-landing-page'],
    hint: 'Tối ưu tài khoản quảng cáo theo lợi nhuận và sửa trang đích đi kèm.'
  },
  {
    key: 'web',
    label: 'Website cũ, hình ảnh chưa chuyên nghiệp',
    services: ['thiet-ke-website', 'nhan-dien-thuong-hieu', 'cro-landing-page'],
    hint: 'Làm lại website và nhận diện trước, để tiền quảng cáo và SEO đổ vào không bị phí.'
  },
  {
    key: 'measure',
    label: 'Không biết kênh nào hiệu quả',
    services: ['ga4-looker-dashboard', 'tu-van-chien-luoc-sprint'],
    hint: 'Đo lại cho đúng trước, rồi mới quyết định tăng hay cắt ngân sách kênh nào.'
  }
];

export default function ServiceGroups({groups}) {
  const [active, setActive] = useState(null);
  const problem = PROBLEMS.find(p => p.key === active);
  const match = slug => !problem || problem.services.includes(slug);

  return (
    <div className={styles.wrap}>
      <div className={styles.picker}>
        <p className={styles.ask}>Bạn đang gặp vấn đề gì?</p>
        <div className={styles.chips} role="group" aria-label="Chọn điểm nghẽn">
          {PROBLEMS.map(p => (
            <button
              key={p.key}
              type="button"
              aria-pressed={active === p.key}
              className={active === p.key ? styles.chipOn : styles.chip}
              onClick={() => setActive(active === p.key ? null : p.key)}
            >
              {p.label}
            </button>
          ))}
          {active && (
            <button type="button" className={styles.reset} onClick={() => setActive(null)}>
              Xem tất cả
            </button>
          )}
        </div>
        <p className={styles.hint} aria-live="polite">
          {problem ? (
            <>
              <strong>{problem.services.length} dịch vụ phù hợp.</strong> {problem.hint}
            </>
          ) : (
            'Chọn một điểm nghẽn, SOHO gợi ý dịch vụ nên làm trước.'
          )}
        </p>
      </div>

      <div className={`${styles.grid} ${problem ? styles.filtering : ''}`}>
        {groups.map(({group, items}, gi) => (
          <article key={group} className={styles.card} data-reveal="" style={{'--reveal-delay': `${gi * 100}ms`}}>
            <header className={styles.head}>
              <span className={styles.num}>{String(gi + 1).padStart(2, '0')}</span>
              <h3 className={styles.group}>{group}</h3>
            </header>
            <ul className={styles.list}>
              {items.map(s => (
                <li key={s.slug} className={match(s.slug) ? (problem ? styles.hit : '') : styles.miss}>
                  <a href={sitePath(`/dich-vu/${s.slug}`)} className={styles.row}>
                    <span className={styles.text}>
                      <strong>{s.menuTitle}</strong>
                      <span>{s.menuDesc}</span>
                    </span>
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
