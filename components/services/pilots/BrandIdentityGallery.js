'use client';

import {useRef, useState} from 'react';
import styles from './BrandIdentityGallery.module.css';
import SohoMark from './SohoMark';
import {track} from '../../analytics';

/*
  Phòng trưng bày bộ nhận diện: 5 thẻ theo đúng thứ tự một bộ brand guideline (logo, màu, chữ, ứng dụng, quy tắc).
  Ví dụ là hệ nhận diện của chính SOHO (Open Corner, bảng màu và phông trong app/styles/tokens.css), không phải dự án khách hàng.
  Thẻ theo mẫu ARIA tabs: mũi tên trái phải chuyển thẻ, Home và End về đầu cuối.
*/

const TABS = [
  {key: 'logo', name: 'Logo'},
  {key: 'mau', name: 'Màu sắc'},
  {key: 'chu', name: 'Kiểu chữ'},
  {key: 'ung-dung', name: 'Ứng dụng'},
  {key: 'quy-tac', name: 'Quy tắc dùng'}
];

// Màu và tỉ lệ tương phản lấy từ ghi chú trong tokens.css
const COLORS = [
  {name: 'Brand Orange', hex: '#F26522', role: 'Nền nút và ô nhấn. Chữ trên nền này luôn là Midnight.', contrast: 'Midnight trên cam: 5,9:1', dark: false},
  {name: 'Deep Orange', hex: '#C2410C', role: 'Chữ cam và link trên nền sáng.', contrast: 'Trên trắng: 5,18:1', dark: true},
  {name: 'Violet', hex: '#6D28D9', role: 'Màu phụ, cuối dải gradient.', contrast: 'Trên trắng: 7,1:1', dark: true},
  {name: 'Coral', hex: '#EC4899', role: 'Chỉ trong gradient và hình, không làm chữ nhỏ.', contrast: 'Trên trắng: 3,5:1', dark: false},
  {name: 'Midnight', hex: '#141218', role: 'Chữ chính và nền tối.', contrast: 'Trên trắng: hơn 18:1', dark: true},
  {name: 'Soft Canvas', hex: '#FAF9FD', role: 'Nền khối nhạt, luôn có viền mảnh đi kèm.', contrast: 'Muted Text trên nền này: 5,81:1', dark: false}
];

const RULES = [
  {ok: true, title: 'Giữ nguyên tỉ lệ và màu', text: 'Logo trên nền trắng hoặc Midnight, đủ khoảng trống quanh khung bốn góc.', variant: 'ok'},
  {ok: false, title: 'Không kéo giãn', text: 'Kéo ngang hay dọc làm méo chữ S và hai chữ O.', variant: 'stretch'},
  {ok: false, title: 'Không đổi màu nhấn', text: 'Hai chữ O luôn là Brand Orange, hoặc cùng màu nét khi in một màu.', variant: 'recolor'},
  {ok: false, title: 'Không đặt lên nền rối', text: 'Nền nhiều họa tiết làm mất khung bốn góc và nét mảnh.', variant: 'busy'}
];

function Panel({tab}) {
  if (tab === 'logo')
    return (
      <div className={styles.logoGrid}>
        <figure className={`${styles.plate} ${styles.plateLight}`}>
          <SohoMark className={styles.mark} />
          <figcaption>Bản chính trên nền sáng</figcaption>
        </figure>
        <figure className={`${styles.plate} ${styles.plateDark}`}>
          <SohoMark className={styles.mark} />
          <figcaption>Bản đảo trên Midnight</figcaption>
        </figure>
        <figure className={`${styles.plate} ${styles.plateLight}`}>
          <SohoMark className={styles.mark} accent="currentColor" />
          <figcaption>Bản một màu, dùng khi in khắc, đóng dấu</figcaption>
        </figure>
        <figure className={`${styles.plate} ${styles.plateSizes}`}>
          <span className={styles.sizes}>
            <SohoMark className={styles.s64} />
            <SohoMark className={styles.s40} />
            <SohoMark className={styles.s24} />
          </span>
          <figcaption>Thử ở cỡ biểu tượng trang và ảnh đại diện</figcaption>
        </figure>
      </div>
    );
  if (tab === 'mau')
    return (
      <div className={styles.colorWrap}>
        <ul className={styles.swatches}>
          {COLORS.map(c => (
            <li key={c.hex}>
              <span className={styles.chip} style={{background: c.hex, color: c.dark ? '#fff' : '#141218'}}>
                <span>{c.hex}</span>
              </span>
              <strong>{c.name}</strong>
              <span>{c.role}</span>
              <span className={styles.contrast}>{c.contrast}</span>
            </li>
          ))}
        </ul>
        <div className={styles.ratio}>
          <p className={styles.ratioHead}>Tỉ lệ trên một màn hình</p>
          <div className={styles.ratioBar} aria-hidden="true">
            <span style={{flex: 70}} />
            <span style={{flex: 20}} />
            <span style={{flex: 10}} />
          </div>
          <p className={styles.ratioText}>Khoảng 70% trắng hoặc nền nhạt với chữ tối, 20% cam, 10% tím, san hô và gradient. Gradient chỉ dùng ở điểm nhấn.</p>
        </div>
      </div>
    );
  if (tab === 'chu')
    return (
      <div className={styles.typeGrid}>
        <figure className={styles.specimen}>
          <p className={styles.specDisplay}>Aa</p>
          <p className={styles.specLine} style={{fontFamily: 'var(--font-display)', fontWeight: 800}}>
            ẾỨỠẶẰ Điểm chạm
          </p>
          <figcaption>
            <strong>Bricolage Grotesque</strong>
            Tiêu đề, số lớn. Độ đậm 600 đến 800.
          </figcaption>
        </figure>
        <figure className={styles.specimen}>
          <p className={styles.specDisplay} style={{fontFamily: 'var(--font-text)', fontWeight: 500}}>
            Aa
          </p>
          <p className={styles.specLine} style={{fontFamily: 'var(--font-text)', fontWeight: 500}}>
            ẾỨỠẶẰ Khách cần gì ở bước này?
          </p>
          <figcaption>
            <strong>Plus Jakarta Sans</strong>
            Nội dung, nút, biểu mẫu. Độ đậm 400 đến 700.
          </figcaption>
        </figure>
        <p className={styles.typeNote}>
          Hai phông đều được thử với dấu tiếng Việt chồng nhau (Ế, Ứ, Ỡ, Ặ, Ằ) trước khi chọn. Một bộ nhận diện cho thị trường Việt Nam cần bước thử này.
        </p>
      </div>
    );
  if (tab === 'ung-dung')
    return (
      <div className={styles.apps}>
        <figure className={styles.app}>
          <div className={styles.card}>
            <div className={styles.cardFront}>
              <SohoMark className={styles.cardMark} />
            </div>
            <div className={styles.cardBack}>
              <span className={styles.cardName}>Họ và tên</span>
              <span className={styles.cardRole}>Chức danh</span>
              <span className={styles.cardLine} />
              <span className={styles.cardMeta}>sohoagency.vn</span>
            </div>
          </div>
          <figcaption>Danh thiếp hai mặt</figcaption>
        </figure>
        <figure className={styles.app}>
          <div className={styles.post}>
            <SohoMark className={styles.postMark} />
            <span className={styles.postText}>Không thêm kênh. Kết nối đúng điểm chạm.</span>
          </div>
          <figcaption>Bài đăng mạng xã hội</figcaption>
        </figure>
        <figure className={`${styles.app} ${styles.appWide}`}>
          <div className={styles.web}>
            <span className={styles.webBar}>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.webNav}>
              <SohoMark className={styles.webMark} />
              <span className={styles.webLinks}>
                <i />
                <i />
                <i />
              </span>
              <span className={styles.webBtn} />
            </span>
            <span className={styles.webHero}>
              <span className={styles.webH} />
              <span className={styles.webH2} />
              <span className={styles.webP} />
            </span>
          </div>
          <figcaption>Đầu trang website</figcaption>
        </figure>
      </div>
    );
  return (
    <ul className={styles.rules}>
      {RULES.map(r => (
        <li key={r.variant} className={styles.rule} data-ok={r.ok ? '' : undefined}>
          <span className={`${styles.ruleArt} ${styles[r.variant]}`}>
            <SohoMark className={styles.ruleMark} accent={r.variant === 'recolor' ? '#2BB673' : '#F26522'} />
          </span>
          <span className={styles.ruleVerdict}>{r.ok ? 'Nên' : 'Không nên'}</span>
          <strong>{r.title}</strong>
          <span>{r.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BrandIdentityGallery() {
  const [active, setActive] = useState('logo');
  const refs = useRef({});

  function select(key, focus = false) {
    setActive(key);
    track('service_gallery_tab', {service: 'nhan-dien-thuong-hieu', tab: key});
    if (focus) refs.current[key]?.focus();
  }
  function onKey(e) {
    const i = TABS.findIndex(t => t.key === active);
    const next = {ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: TABS.length - 1}[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(TABS[(next + TABS.length) % TABS.length].key, true);
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.tabs} role="tablist" aria-label="Các phần của bộ nhận diện" onKeyDown={onKey}>
        {TABS.map((t, i) => (
          <button
            key={t.key}
            ref={el => (refs.current[t.key] = el)}
            type="button"
            role="tab"
            id={`brand-tab-${t.key}`}
            aria-selected={active === t.key}
            aria-controls={`brand-panel-${t.key}`}
            tabIndex={active === t.key ? 0 : -1}
            className={styles.tab}
            onClick={() => select(t.key)}
          >
            <span className={styles.tabNum}>{String(i + 1).padStart(2, '0')}</span>
            {t.name}
          </button>
        ))}
      </div>
      {TABS.map(t => (
        <div
          key={t.key}
          role="tabpanel"
          id={`brand-panel-${t.key}`}
          aria-labelledby={`brand-tab-${t.key}`}
          hidden={active !== t.key}
          tabIndex={0}
          className={styles.panel}
        >
          <Panel tab={t.key} />
        </div>
      ))}
      <p className={styles.note}>Ví dụ: hệ nhận diện của chính SOHO Agency. Bộ nhận diện của bạn được xây từ định vị và khách hàng của riêng bạn.</p>
    </div>
  );
}
