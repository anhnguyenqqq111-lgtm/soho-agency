import styles from './Section.module.css';

/*
  Section chuẩn, bản 12: nhãn nhỏ (kicker), H2 (có thể chứa .hl nền cam), intro, rồi nội dung.
  tone: white | paper -> nền trắng có nét mảnh; gray | fade | panel | soft -> nền xanh rất nhạt #EEF3FA có nét mảnh;
        dark -> khối denim #1E4E8C; deep -> khối denim đậm #0F2340. Hai tone tối gắn class toàn cục .dark .on-dark.
  decor: bật cụm khối kính trang trí (chữ ký của web). Giá trị chuỗi chọn vị trí và biểu tượng, giữ API cũ (tên hình 3D).
  align: left | center. aside: nút hoặc link đặt bên phải tiêu đề.
*/
const SOFT = new Set(['gray', 'soft', 'fade', 'panel']);
const ICONS = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  chart: <><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 6-6" /></>,
  star: <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z" />,
  cursor: <path d="M4 4l7 17 2.5-7.5L21 11z" />
};
const PICK = ['search', 'chart', 'star', 'cursor'];

function Glass({seed = '', dark}) {
  let h = 0;
  for (const ch of String(seed)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const icon = PICK[h % PICK.length];
  const right = h % 2 === 0;
  const tone = dark ? 'gl-white' : 'gl-light';
  const side = right ? {right: '-70px'} : {left: '-90px'};
  return (
    <span className={styles.glass} aria-hidden="true">
      <span className={`gl ${tone}`} style={{...side, top: '56px', width: 168, height: 168, transform: `rotate(${right ? -8 : 8}deg)`}}>
        <span className="gl-in">
          <svg viewBox="0 0 24 24">{ICONS[icon]}</svg>
        </span>
      </span>
      <span className={`gl ${tone}`} style={{...(right ? {right: '10px'} : {left: '0px'}), top: '190px', width: 120, height: 64, transform: `rotate(${right ? 5 : -5}deg)`}} />
      <span className="gl sm gl-orange" style={{...(right ? {right: '150px'} : {left: '110px'}), top: '40px', width: 26, height: 26, transform: 'rotate(14deg)'}} />
    </span>
  );
}

export default function Section({id, kicker, title, intro, aside, children, tone = 'white', align = 'left', spacing = 'md', decor, className = ''}) {
  const dark = tone === 'dark' || tone === 'deep';
  const bg = tone === 'dark' ? 'bg-denim' : tone === 'deep' ? 'bg-deep' : SOFT.has(tone) ? 'bg-tint' : 'bg-white';
  return (
    <section
      id={id}
      className={[styles.section, bg, dark ? `${styles.ink} dark on-dark` : '', styles[`space_${spacing}`], className].join(' ')}
    >
      {decor && <Glass seed={`${decor}${id || ''}`} dark={dark} />}
      <div className={`container ${styles.inner}`}>
        {(title || kicker) && (
          <div className={`${styles.head} ${styles[align]}`} data-reveal="">
            <div>
              {kicker && <p className="kicker">{kicker}</p>}
              {title && <h2 className={styles.title}>{title}</h2>}
              {intro && <div className={styles.intro}>{intro}</div>}
            </div>
            {aside && <div className={styles.aside}>{aside}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
