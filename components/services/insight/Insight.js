import styles from './Insight.module.css';

/*
  Khối nội dung dùng chung cho phần dưới sơ đồ của trang dịch vụ (Redesign 3.1, trình bày theo V4.0: chữ và đường kẻ,
  không thẻ). Không phải khuôn bắt buộc; mỗi trang tự chọn khối và thứ tự.
  - ProblemStatement: đoạn dẫn bên trái, 2 đến 3 biểu hiện cụ thể xếp hàng bên phải.
  - Responsibility: SOHO chịu trách nhiệm gì, bạn cung cấp gì, hai cột chữ.
  - MeasurementLadder: 4 bậc đo dựng thành bậc thang bằng đường kẻ, kèm giới hạn của phép đo.
*/

export function ProblemStatement({lead, cases, note}) {
  return (
    <div className={styles.problem}>
      <div className={styles.problemLead}>
        <p className={styles.lead}>{lead}</p>
        {note && <p className={styles.note}>{note}</p>}
      </div>
      <ol className={styles.cases}>
        {cases.map((c, i) => (
          <li key={c.label}>
            <span className={styles.caseNum}>{String(i + 1).padStart(2, '0')}</span>
            <div>
              {c.tag && <p className={styles.caseTag}>{c.tag}</p>}
              <h3 className={styles.caseLabel}>{c.label}</h3>
              <p className={styles.caseText}>{c.text}</p>
            </div>
          </li>
        ))}
      </ol>
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
      <div>
        <h3 className={styles.splitHead}>{yoursTitle}</h3>
        <ul className={`${styles.splitList} ${styles.yours}`}>
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
          <li key={l.key} data-level={l.key} style={{'--step': 3 - i}}>
            <span className={styles.levelNum}>Bậc {i + 1}</span>
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
          <ol>
            {limits.map(l => (
              <li key={l}>{l}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
