import styles from './Insight.module.css';

/*
  Thang đo 4 bậc dùng ở trang dịch vụ (hoạt động → trung gian → hành vi khách → kinh doanh), dựng bằng đường kẻ,
  kèm các giới hạn của phép đo. Không dùng số lớn khi chưa có số thật.
*/

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
