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
  cursor: <path d="M4 4l7 17 2.5-7.5L21 11z" />
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
