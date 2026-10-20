'use client';
import {useEffect, useState} from 'react';
import styles from './CustomerJourneyCanvas.module.css';
import Icon from '../ui/Icon';
import {sitePath} from '../paths';
import {STAGES, FOUNDATION, servicesInStage} from '../data/touchpoints';

/*
  Bản đồ hành trình tương tác (hub /dich-vu): chọn một chặng, thấy khách cần gì, làm gì, đo bằng gì,
  và dịch vụ nào giữ vai trò chính, dịch vụ nào hỗ trợ. Hash #chang-<key> (từ hero) chọn sẵn chặng.
  Là khung khái niệm: khách có thể vào từ bất kỳ chặng nào và đi không theo thứ tự.
*/
const ALL = [...STAGES, FOUNDATION];

export default function CustomerJourneyCanvas({names}) {
  const [key, setKey] = useState(STAGES[1].key);

  useEffect(() => {
    const fromHash = () => {
      const m = window.location.hash.match(/^#chang-(.+)$/);
      if (m && ALL.some(s => s.key === m[1])) setKey(m[1]);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const stage = ALL.find(s => s.key === key);
  const {primary, supporting} = servicesInStage(key);

  return (
    <div className={styles.canvas}>
      {ALL.map(s => (
        <span key={s.key} id={`chang-${s.key}`} className={styles.anchor} aria-hidden="true" />
      ))}
      <div className={styles.rail} role="group" aria-label="Chọn chặng trên hành trình khách hàng">
        {ALL.map(s => (
          <button
            key={s.key}
            type="button"
            className={styles.stop}
            data-base={s.key === FOUNDATION.key || undefined}
            aria-pressed={s.key === key}
            onClick={() => setKey(s.key)}
          >
            <span className={styles.num}>{s.num}</span>
            <span className={styles.stopName}>{s.name}</span>
          </button>
        ))}
      </div>

      <div className={styles.panel} aria-live="polite">
        <dl className={styles.facts}>
          <div>
            <dt>Khách cần</dt>
            <dd>{stage.need}</dd>
          </div>
          <div>
            <dt>Khách làm</dt>
            <dd>{stage.action}</dd>
          </div>
          <div>
            <dt>Đo bằng</dt>
            <dd>{stage.metric}</dd>
          </div>
        </dl>
        <div className={styles.roles}>
          <div>
            <p className={styles.roleHead}>Vai trò chính</p>
            <ul className={styles.primary}>
              {primary.map(slug => (
                <li key={slug}>
                  <a href={sitePath(`/dich-vu/${slug}`)}>
                    {names[slug]}
                    <Icon name="arrow-right" size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {supporting.length > 0 && (
            <div>
              <p className={styles.roleHead}>Vai trò hỗ trợ</p>
              <ul className={styles.supporting}>
                {supporting.map(slug => (
                  <li key={slug}>
                    <a href={sitePath(`/dich-vu/${slug}`)}>{names[slug]}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
