import styles from './CtaBand.module.css';
import Button from './Button';
import ContactForm from '../ContactForm';
import Glass from '../sq/Glass';
import {sitePath} from '../paths';

/*
  Khối liên hệ cuối trang. Nền denim đậm có vân kẻ (.bg-deep, cùng nền với khối "Báo cáo"), mép trên gợn sóng có đường sáng.
  Trái: tiêu đề, mô tả và form (thẻ trắng). Phải: khối kính 3D "cuộc trao đổi thành 3 việc" (Codex vẽ 31/10/2026, ảnh minh họa
  loại C, prompt ở docs/private/raw/cta/PROMPT.md) và 5 ô kính biểu tượng kênh khách tìm đến. Mobile: khối 3D nằm dưới form.
  Biểu tượng kênh là hình chung (kính lúp, ghim bản đồ, tin nhắn, nút phát, con trỏ), không dùng logo Google, Meta:
  hướng dẫn thương hiệu của hai bên cấm dựng logo bằng chất liệu khác.
  withForm=false: chỉ tiêu đề + nút.
*/

// Mép trên gợn sóng: cùng đường với mask trong CtaBand.module.css (khung 1440×80), dịch xuống 1.5 để nét nằm trọn trong khối.
const WAVE_LINE = 'M0 41.5 C120 9.5 240 9.5 360 31.5 S600 71.5 720 45.5 S960 1.5 1080 23.5 S1320 65.5 1440 31.5';

// Các kênh khách tìm đến: tìm trên Google, Google Maps, mạng xã hội, video, quảng cáo.
const CHANNELS = [
  {icon: 'search', tone: 'white', style: {left: '4%', top: '14%', width: 92, height: 92, transform: 'rotate(-10deg)'}},
  {icon: 'pin', tone: 'white', style: {right: '2%', top: '6%', width: 76, height: 76, transform: 'rotate(8deg)'}},
  {icon: 'chat', tone: 'orange', style: {right: '-2%', top: '52%', width: 96, height: 96, transform: 'rotate(10deg)'}},
  {icon: 'play', tone: 'white', style: {left: '0%', bottom: '18%', width: 80, height: 80, transform: 'rotate(-6deg)'}},
  {icon: 'cursor', tone: 'white', style: {left: '38%', bottom: '2%', width: 64, height: 64, transform: 'rotate(14deg)'}}
];

export default function CtaBand({
  id = 'lien-he',
  title = (
    <>
      Kể cho SOHO <span className="hl">bài toán hiện tại</span>
    </>
  ),
  text = 'Gửi website và mục tiêu quý tới. SOHO xem các kênh bạn đang chạy và gửi lại 3 việc nên làm trước.',
  withForm = true,
  href = '/lien-he',
  label = 'Nhận tư vấn',
  service = ''
}) {
  return (
    <section id={id} className={`${styles.band} bg-deep dark on-dark`}>
      <svg className={styles.wave} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="cta-wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#8fb8f0" stopOpacity="0.2" />
            <stop offset="0.5" stopColor="#f26522" />
            <stop offset="1" stopColor="#8fb8f0" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path d={WAVE_LINE} fill="none" stroke="url(#cta-wave)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      </svg>
      <Glass tone="orange" style={{right: '-60px', top: '60px', width: 220, height: 120, transform: 'rotate(7deg)'}} />
      <Glass tone="light" sm style={{left: '46%', bottom: '40px', width: 26, height: 26, transform: 'rotate(12deg)'}} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.main}>
          <div className={styles.copy} data-reveal="">
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            {!withForm && (
              <div className={styles.btn}>
                <Button href={href}>{label}</Button>
              </div>
            )}
          </div>
          {withForm && (
            <div className={styles.card} data-reveal="" style={{'--reveal-delay': '150ms'}}>
              <ContactForm defaultService={service} />
            </div>
          )}
        </div>
        <div className={styles.block} aria-hidden="true">
          <img src={sitePath('/media/cta/cta-block.webp')} width="900" height="1125" alt="" loading="lazy" />
          {CHANNELS.map(c => (
            <Glass key={c.icon} tone={c.tone} icon={c.icon} className="keep-sm" style={c.style} />
          ))}
        </div>
      </div>
    </section>
  );
}
