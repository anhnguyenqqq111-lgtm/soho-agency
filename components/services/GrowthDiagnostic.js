'use client';
import {useState} from 'react';
import styles from './GrowthDiagnostic.module.css';
import Icon from '../ui/Icon';
import {sitePath} from '../paths';
import {track} from '../analytics';
import {DIAGNOSES} from '../data/touchpoints';

/*
  Chẩn đoán theo vấn đề kinh doanh (hub /dich-vu): chọn một vấn đề, thấy điểm nghẽn có thể, dịch vụ nên làm trước,
  dịch vụ hỗ trợ, loại cải thiện kỳ vọng và dự án liên quan nếu có. Là gợi ý tham khảo, không phải chẩn đoán chính thức.
  names: slug → tên dịch vụ · descs: slug → mô tả ngắn · cases: slug → {name, result}
*/
export default function GrowthDiagnostic({names, descs, cases}) {
  const [key, setKey] = useState(DIAGNOSES[0].key);
  const d = DIAGNOSES.find(x => x.key === key);
  const proof = d.caseSlug ? cases[d.caseSlug] : null;

  const pick = k => {
    setKey(k);
    track('service_diagnostic_select', {problem: k});
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.problems} role="group" aria-label="Chọn vấn đề kinh doanh">
        <p className={styles.ask}>Doanh nghiệp bạn đang gặp chuyện gì?</p>
        {DIAGNOSES.map(p => (
          <button key={p.key} type="button" className={styles.problem} aria-pressed={p.key === key} onClick={() => pick(p.key)}>
            <span>{p.label}</span>
            <Icon name="arrow-right" size={18} />
          </button>
        ))}
      </div>

      <div className={styles.result} aria-live="polite">
        <p className={styles.label}>Điểm nghẽn có thể</p>
        <p className={styles.bottleneck}>{d.bottleneck}</p>

        <div className={styles.pairs}>
          <a href={sitePath(`/dich-vu/${d.first}`)} className={styles.first}>
            <span className={styles.label}>Nên xem trước</span>
            <strong>{names[d.first]}</strong>
            <span>{descs[d.first]}</span>
          </a>
          <a href={sitePath(`/dich-vu/${d.support}`)} className={styles.support}>
            <span className={styles.label}>Dịch vụ hỗ trợ</span>
            <strong>{names[d.support]}</strong>
            <span>{descs[d.support]}</span>
          </a>
        </div>

        <dl className={styles.meta}>
          <div>
            <dt>Loại cải thiện có thể kỳ vọng</dt>
            <dd>{d.improve}</dd>
          </div>
          <div>
            <dt>Dự án liên quan</dt>
            <dd>
              {proof ? (
                <a href={sitePath(`/du-an/${d.caseSlug}`)}>
                  {proof.name}: {proof.result}
                </a>
              ) : (
                'Chưa có dự án công bố cho vấn đề này.'
              )}
            </dd>
          </div>
        </dl>

        <p className={styles.note}>
          Gợi ý dựa trên vấn đề phổ biến, không thay cho việc xem số liệu thật của bạn. Muốn chắc, gửi website và kênh đang chạy để SOHO xem.
        </p>
      </div>
    </div>
  );
}
