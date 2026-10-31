import styles from './dashboards.module.css';
import {sitePath} from '../paths';

/*
  Báo cáo tự cập nhật (Looker Studio) SOHO dựng cho khách. Ảnh chụp báo cáo thật của một khách bán hàng online,
  số và thông tin nhận diện khách đã làm mờ (bản gốc ở docs/private/raw/reports, không commit).
  Bốn trang chọn bằng radio + CSS, không cần JS.
*/
const PAGES = [
  {
    key: 'don-hang',
    tab: 'Đơn hàng theo tuần',
    asks: 'Tuần này bao nhiêu đơn? Khách mới hay khách cũ đặt lại?',
    shows: 'Số đơn mỗi tuần, chia theo khách mới, khách cũ và khách đặt lại. Đơn đến từ nhân viên chăm sóc khách hay từ website. Chi phí quảng cáo Facebook và Google từng tuần đặt cạnh số đơn.',
    h: 826
  },
  {
    key: 'google-ads',
    tab: 'Quảng cáo Google',
    asks: 'Hôm qua chi bao nhiêu tiền quảng cáo, ra mấy đơn?',
    shows: 'Chi phí, số đơn và chi phí cho mỗi đơn, theo từng ngày và từng chiến dịch. Có thể lọc riêng theo khoảng ngày, chiến dịch hoặc nhóm từ khóa.',
    h: 826
  },
  {
    key: 'google-analytics',
    tab: 'Lượt truy cập website',
    asks: 'Khách đến từ đâu, rời đi ở bước nào?',
    shows: 'Khách đến từ Google, Facebook hay gõ thẳng địa chỉ website. Bao nhiêu người xem sản phẩm, bắt đầu thanh toán và đặt hàng xong. Bao nhiêu người nhấn nút nhắn Messenger, Zalo hoặc gọi hotline.',
    h: 826
  },
  {
    key: 'seo',
    tab: 'SEO',
    asks: 'Google mang về bao nhiêu lượt truy cập, vào trang nào?',
    shows: 'Lượt truy cập từ Google theo tuần và những trang được xem nhiều nhất. Kèm số liệu Search Console: lượt hiển thị, lượt nhấp, vị trí trung bình.',
    h: 860
  }
];

export default function ReportDashboards({idPrefix = 'rp'}) {
  const id = i => `${idPrefix}${i}`;
  return (
    <div className={styles.rp}>
      {PAGES.map((p, i) => (
        <input key={p.key} type="radio" name={idPrefix} id={id(i)} className={styles.radio} defaultChecked={i === 0} aria-label={p.tab} />
      ))}
      <div className={styles.tabs}>
        {PAGES.map((p, i) => (
          <label key={p.key} htmlFor={id(i)} className={styles.tab} data-i={i}>
            <b>{p.tab}</b>
            <small>{p.asks}</small>
          </label>
        ))}
      </div>
      <div className={styles.panels}>
        {PAGES.map((p, i) => (
          <figure key={p.key} className={styles.panel} data-i={i}>
            <div className={styles.frame}>
              <img src={sitePath(`/media/report/${p.key}.webp`)} width="1600" height={p.h} alt={`Trang “${p.tab}” trong báo cáo SOHO làm cho khách, số liệu đã làm mờ`} loading="lazy" />
            </div>
            <figcaption>
              <b>Trang này trả lời:</b> {p.asks} {p.shows}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
