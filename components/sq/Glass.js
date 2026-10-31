import {sitePath} from '../paths';

/* Khối kính trang trí (chữ ký của web). Lớp .gl ở app/styles/sq.css. Luôn aria-hidden, nằm sau nội dung. */
const ICONS = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 6-6" />
    </>
  ),
  star: <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z" />,
  cursor: <path d="M4 4l7 17 2.5-7.5L21 11z" />,
  // Biểu tượng chung cho kênh, không dùng logo thương hiệu (Google, Meta cấm dựng logo bằng chất liệu khác)
  pin: (
    <>
      <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  chat: (
    <>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z" />
      <path d="M12 15.2s-3.2-1.9-3.2-4a1.7 1.7 0 0 1 3.2-.8 1.7 1.7 0 0 1 3.2.8c0 2.1-3.2 4-3.2 4z" />
    </>
  ),
  play: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="4" />
      <path d="M10 9.5v5l4.5-2.5z" />
    </>
  )
};

export default function Glass({tone = 'light', sm = false, icon, badge = false, style, className = ''}) {
  return (
    <span className={`gl gl-${tone}${sm ? ' sm' : ''} ${className}`} style={style} aria-hidden="true">
      {(icon || badge) && (
        <span className="gl-in">
          {badge ? <img src={sitePath('/partners/google-partner.svg')} alt="" width="152" height="146" /> : <svg viewBox="0 0 24 24">{ICONS[icon]}</svg>}
        </span>
      )}
    </span>
  );
}
