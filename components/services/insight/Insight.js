import styles from './Insight.module.css';

/*
  Khối nội dung dùng chung cho phần dưới sơ đồ của trang dịch vụ (Redesign 3.1). Không phải khuôn bắt buộc:
  mỗi trang tự chọn khối và thứ tự, phần "vì sao" luôn do từng trang tự dựng.
  - ProblemStatement: một đoạn dẫn nối với sơ đồ ở đầu trang, rồi 2 đến 3 biểu hiện cụ thể.
  - Responsibility: SOHO chịu trách nhiệm gì, bạn cần cung cấp gì.
  - MeasurementLadder: 4 tầng đo (hoạt động → trung gian → hành vi khách → kinh doanh) và giới hạn của phép đo.
*/

export function ProblemStatement({lead, cases, note}) {
  return (
    <div className={styles.problem}>
      <p className={styles.lead}>{lead}</p>
      <ol className={styles.cases}>
        {cases.map((c, i) => (
          <li key={c.label}>
            <span className={styles.caseNum}>{String(i + 1).padStart(2, '0')}</span>
            <h3 className={styles.caseLabel}>{c.label}</h3>
            <p>{c.text}</p>
          </li>
        ))}
      </ol>
      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
}

export function Responsibility({ours, yours, oursTitle = 'SOHO chịu trách nhiệm', yoursTitle = 'Bạn cần cung cấp'}) {
  return (
    <div className={styles.split}>
      <div>
        <h3 className={styles.splitHead}>{oursTitle}</h3>
        <ul className={styles.splitList}>
          {ours.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.yours}>
        <h3 className={styles.splitHead}>{yoursTitle}</h3>
        <ul className={styles.splitList}>
          {yours.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const LEVELS = [
  {key: 'activity', name: 'Hoạt động', hint: 'Việc đã làm'},
  {key: 'interim', name: 'Kết quả trung gian', hint: 'Kênh phản hồi ra sao'},
  {key: 'behavior', name: 'Hành vi khách', hint: 'Khách làm gì tiếp'},
  {key: 'business', name: 'Kết quả kinh doanh', hint: 'Doanh nghiệp nhận được gì'}
];

// metrics: {activity: [...], interim: [...], behavior: [...], business: [...]}; limits: các giới hạn của phép đo
export function MeasurementLadder({metrics, limits}) {
  return (
    <div className={styles.measure}>
      <ol className={styles.ladder}>
        {LEVELS.map((l, i) => (
          <li key={l.key} data-level={l.key}>
            <span className={styles.levelNum}>{i + 1}</span>
            <h3 className={styles.levelName}>{l.name}</h3>
            <p className={styles.levelHint}>{l.hint}</p>
            <ul>
              {metrics[l.key].map(m => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      {limits?.length > 0 && (
        <div className={styles.limits}>
          <h3 className={styles.limitsHead}>Giới hạn của phép đo</h3>
          <ul>
            {limits.map(l => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
