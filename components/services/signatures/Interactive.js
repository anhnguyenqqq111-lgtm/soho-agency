'use client';

import {useState} from 'react';
import styles from './signatures.module.css';
import {sitePath} from '../../paths';
import {track} from '../../analytics';

/*
  Phần riêng có tương tác của trang dịch vụ (Redesign V6.0). Không thay sơ đồ live, không tạo số kết quả.
  - ReadinessChecklist (Google Ads): 6 điều kiện trước khi tăng ngân sách.
  - CreativeExplorer (Meta, TikTok): ghép câu mở đầu × thông điệp × ưu đãi × định dạng thành một mẫu thử. Ví dụ khái niệm.
  - CroBeforeAfter (CRO): một trang đích khái niệm, trước và sau, theo 5 điểm.
  - AppSuitability (Mobile App): 4 câu hỏi để biết nên làm app hay website là đủ.
  - PriorityMatrix (Tư vấn lộ trình): xếp việc theo tác động, công sức, độ chắc của căn cứ. Ví dụ giả định.
*/

const READINESS = [
  {
    key: 'tracking',
    label: 'Đo chuyển đổi đúng',
    text: 'Form, cuộc gọi, đơn hàng được ghi đúng và không đếm trùng.',
    fix: 'Sửa đo lường trước: chiến lược giá thầu học từ chính con số này.',
    slug: 'ga4-looker-dashboard'
  },
  {
    key: 'landing',
    label: 'Trang đích khớp ý định',
    text: 'Mỗi nhóm từ khóa dẫn tới trang trả lời đúng điều người tìm cần.',
    fix: 'Sửa trang đích trước khi mua thêm lượt bấm.',
    slug: 'cro-landing-page'
  },
  {
    key: 'qualify',
    label: 'Phân loại khách',
    text: 'Đội sale đánh dấu khách đủ chuẩn và lý do loại khách.',
    fix: 'Thống nhất định nghĩa "khách đủ chuẩn" với đội sale.'
  },
  {
    key: 'margin',
    label: 'Biết biên lợi nhuận',
    text: 'Có biên lợi nhuận theo nhóm hàng hoặc dịch vụ để đặt mức hòa vốn.',
    fix: 'Tính biên lợi nhuận theo nhóm trước khi đặt mục tiêu ROAS.',
    slug: 'tu-van-chien-luoc-sprint'
  },
  {
    key: 'feedback',
    label: 'Phản hồi từ sale',
    text: 'Có lịch gửi phản hồi chất lượng khách cho người chạy quảng cáo.',
    fix: 'Đặt lịch phản hồi hằng tuần, dù chỉ vài dòng.'
  },
  {
    key: 'account',
    label: 'Dữ liệu tài khoản sạch',
    text: 'Không trộn nhiều mục tiêu, không có chuyển đổi trùng, có lịch sử đủ dài.',
    fix: 'Dọn mục tiêu chuyển đổi và cấu trúc tài khoản trước.'
  }
];

export function ReadinessChecklist({names}) {
  const [checked, setChecked] = useState({});
  const done = READINESS.filter(r => checked[r.key]).length;
  const missing = READINESS.filter(r => !checked[r.key]);
  const verdict =
    done === READINESS.length
      ? 'Đủ điều kiện để thử tăng ngân sách theo từng bước nhỏ và theo dõi lợi nhuận sau mỗi bước.'
      : done >= 4
        ? 'Có thể chạy, nhưng nên xử lý các mục còn thiếu trước khi tăng ngân sách.'
        : 'Nên sửa nền trước. Tăng ngân sách lúc này chủ yếu khuếch đại chỗ đang rò.';
  function toggle(key) {
    setChecked(prev => {
      const next = {...prev, [key]: !prev[key]};
      track('service_readiness_check', {service: 'google-ads-shopping', item: key, checked: next[key]});
      return next;
    });
  }
  return (
    <div className={styles.ready}>
      <fieldset className={styles.readyList}>
        <legend className={styles.readyLegend}>Tài khoản của bạn đã có những điều kiện nào?</legend>
        {READINESS.map((r, i) => (
          <label key={r.key} className={styles.readyItem} data-on={checked[r.key] ? '' : undefined}>
            <input type="checkbox" checked={!!checked[r.key]} onChange={() => toggle(r.key)} />
            <span className={styles.readyNum}>{String(i + 1).padStart(2, '0')}</span>
            <span>
              <strong>{r.label}</strong>
              <span className={styles.readyText}>{r.text}</span>
            </span>
          </label>
        ))}
      </fieldset>
      <div className={styles.readyResult} aria-live="polite">
        <p className={styles.readyScore}>
          <strong>{done}</strong>/{READINESS.length} điều kiện
        </p>
        <p className={styles.readyVerdict}>{verdict}</p>
        {missing.length > 0 && (
          <ul className={styles.readyFixes}>
            {missing.map(m => (
              <li key={m.key}>
                <strong>{m.label}:</strong> {m.fix} {m.slug && <a href={sitePath(`/dich-vu/${m.slug}`)}>Xem {names[m.slug]}</a>}
              </li>
            ))}
          </ul>
        )}
        <p className={styles.note}>Bảng kiểm để tự đánh giá, không phải chẩn đoán tài khoản. Không có điều kiện nào đảm bảo kết quả quảng cáo.</p>
      </div>
    </div>
  );
}

const CREATIVE = [
  {key: 'hook', label: 'Câu mở đầu', options: ['Nêu nỗi đau', 'Hỏi thẳng', 'Kết quả trước và sau', 'Lời khách hàng']},
  {key: 'message', label: 'Thông điệp', options: ['Khác biệt của sản phẩm', 'Bớt rủi ro khi mua', 'Nhiều người đã chọn']},
  {key: 'offer', label: 'Ưu đãi', options: ['Không ưu đãi', 'Quà tặng kèm', 'Giới hạn thời gian']},
  {key: 'format', label: 'Định dạng', options: ['Video dọc ngắn', 'Ảnh đơn', 'Băng chuyền nhiều ảnh']}
];
const TOTAL = CREATIVE.reduce((n, d) => n * d.options.length, 1);

export function CreativeExplorer() {
  const [pick, setPick] = useState({hook: 0, message: 0, offer: 0, format: 0});
  const [changed, setChanged] = useState('hook');
  const value = key => CREATIVE.find(d => d.key === key).options[pick[key]];
  function choose(key, i) {
    setPick(p => ({...p, [key]: i}));
    setChanged(key);
    track('service_creative_explore', {service: 'meta-tiktok-ads', dimension: key});
  }
  return (
    <div className={styles.creative}>
      <div className={styles.dims}>
        {CREATIVE.map(d => (
          <fieldset key={d.key} className={styles.dim}>
            <legend>{d.label}</legend>
            <div className={styles.chips}>
              {d.options.map((o, i) => (
                <button key={o} type="button" aria-pressed={pick[d.key] === i} onClick={() => choose(d.key, i)}>
                  {o}
                </button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      <div className={styles.brief} aria-live="polite">
        <p className={styles.briefLabel}>Mẫu thử</p>
        <p className={styles.briefTitle}>
          {value('format')}, mở bằng “{value('hook').toLowerCase()}”, nói về {value('message').toLowerCase()}, {value('offer').toLowerCase()}.
        </p>
        <dl className={styles.briefFacts}>
          <div>
            <dt>Vòng này đang thử</dt>
            <dd>{CREATIVE.find(d => d.key === changed).label}: chỉ đổi yếu tố này, giữ nguyên ba yếu tố còn lại</dd>
          </div>
          <div>
            <dt>Đo bằng</dt>
            <dd>Chi phí mỗi khách đạt chuẩn và tỉ lệ chốt từ tin nhắn, không chỉ lượt xem</dd>
          </div>
          <div>
            <dt>Số tổ hợp có thể có</dt>
            <dd>{TOTAL} mẫu. Vì vậy cần thử có kế hoạch, không thử ngẫu nhiên</dd>
          </div>
        </dl>
        <p className={styles.noteDark}>Ví dụ khái niệm để minh họa cách thử, không phải quảng cáo của khách hàng nào.</p>
      </div>
    </div>
  );
}

const CRO = [
  {
    key: 'heading',
    label: 'Tiêu đề',
    before: 'Nói về doanh nghiệp: “Chào mừng đến với công ty chúng tôi”.',
    after: 'Nói điều khách nhận được, kèm cho ai và trong bao lâu.'
  },
  {key: 'trust', label: 'Bằng chứng', before: 'Logo khách hàng nằm cuối trang, không có nguồn.', after: 'Một dự án thật hoặc lời khách đặt ngay cạnh lời hứa.'},
  {
    key: 'cta',
    label: 'Nút bấm',
    before: 'Ba nút cùng màu: “Tìm hiểu thêm”, “Liên hệ”, “Xem thêm”.',
    after: 'Một hành động chính, nói rõ điều xảy ra sau khi bấm.'
  },
  {key: 'form', label: 'Form', before: '9 ô bắt buộc, hỏi cả ngân sách và địa chỉ ngay từ đầu.', after: '3 ô cần thiết; phần còn lại hỏi sau khi đã trao đổi.'},
  {key: 'mobile', label: 'Điện thoại', before: 'Nút bấm nằm dưới ba màn cuộn, chữ nhỏ, ảnh nặng.', after: 'Nút gọi và form ngắn nằm trong màn đầu; ảnh nhẹ.'}
];

export function CroBeforeAfter() {
  const [active, setActive] = useState('heading');
  const item = CRO.find(c => c.key === active);
  return (
    <div className={styles.cro}>
      <div className={styles.croTabs} role="group" aria-label="Chọn điểm cần so sánh">
        {CRO.map((c, i) => (
          <button key={c.key} type="button" aria-pressed={active === c.key} onClick={() => setActive(c.key)}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            {c.label}
          </button>
        ))}
      </div>
      <div className={styles.croFrames}>
        {['before', 'after'].map(side => (
          <figure key={side} className={styles.croFrame} data-side={side} data-focus={active}>
            <div className={styles.wire} aria-hidden="true">
              <i data-part="heading" />
              <i data-part="sub" />
              <i data-part="trust" />
              <i data-part="cta" />
              <i data-part="form" />
            </div>
            <figcaption>
              <span>{side === 'before' ? 'Trước' : 'Sau'}</span>
              {item[side]}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className={styles.note}>Trang đích khái niệm để minh họa cách SOHO đọc một trang, không phải trang của khách hàng nào.</p>
    </div>
  );
}

const APPQ = [
  {key: 'repeat', q: 'Khách dùng dịch vụ của bạn nhiều lần trong tháng?'},
  {key: 'push', q: 'Cần thông báo để nhắc lịch, báo trạng thái đơn?'},
  {key: 'device', q: 'Cần camera, vị trí, hoặc dùng khi không có mạng?'},
  {key: 'owner', q: 'Có người phụ trách cập nhật app sau khi ra mắt?'}
];

export function AppSuitability({names}) {
  const [ans, setAns] = useState({});
  const answered = APPQ.every(q => ans[q.key] !== undefined);
  let verdict = 'Trả lời đủ 4 câu để xem gợi ý.';
  let link = null;
  if (answered) {
    if (!ans.repeat && !ans.push) {
      verdict = 'Website tốt trên điện thoại có thể đủ. App ít khi đáng đầu tư khi khách không quay lại thường xuyên.';
      link = 'thiet-ke-website';
    } else if (!ans.owner) verdict = 'Cần có người phụ trách trước. App không được cập nhật sẽ nhanh lỗi thời và bị gỡ.';
    else verdict = 'App đáng cân nhắc. Bước đầu là chọn một việc chính khách sẽ làm trên app, rồi mới vẽ màn hình.';
  }
  return (
    <div className={styles.app}>
      <ol className={styles.appQs}>
        {APPQ.map(q => (
          <li key={q.key}>
            <fieldset>
              <legend>{q.q}</legend>
              <div className={styles.yesNo}>
                {[true, false].map(v => (
                  <button key={String(v)} type="button" aria-pressed={ans[q.key] === v} onClick={() => setAns(a => ({...a, [q.key]: v}))}>
                    {v ? 'Có' : 'Không'}
                  </button>
                ))}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>
      <div className={styles.appResult} aria-live="polite">
        <p className={styles.briefLabel}>Gợi ý</p>
        <p className={styles.appVerdict}>{verdict}</p>
        {link && (
          <a href={sitePath(`/dich-vu/${link}`)} className={styles.appLink}>
            Xem {names[link]}
          </a>
        )}
        <p className={styles.noteDark}>Gợi ý ban đầu, không thay cho buổi trao đổi về nhu cầu thật.</p>
      </div>
    </div>
  );
}

// Thang 1 đến 3. Điểm ưu tiên = tác động × độ chắc ÷ công sức. Ví dụ giả định cho mục tiêu "thêm khách đủ chuẩn"
const PRIORITIES = [
  {task: 'Sửa đo lường form và cuộc gọi', impact: 3, effort: 1, confidence: 3},
  {task: 'Viết lại trang đích chính', impact: 3, effort: 2, confidence: 2},
  {task: 'Dựng cụm chủ đề SEO cho nhóm dịch vụ bán chạy', impact: 3, effort: 3, confidence: 2},
  {task: 'Thử Meta Ads cho sản phẩm mới', impact: 2, effort: 2, confidence: 1},
  {task: 'Làm app đặt lịch', impact: 1, effort: 3, confidence: 1}
];
const LEVEL = ['', 'Thấp', 'Vừa', 'Cao'];
const score = p => (p.impact * p.confidence) / p.effort;

export function PriorityMatrix() {
  const [sort, setSort] = useState('score');
  const rows = [...PRIORITIES].sort((a, b) => (sort === 'score' ? score(b) - score(a) : b.impact - a.impact || score(b) - score(a)));
  return (
    <div className={styles.matrix}>
      <div className={styles.sortBar} role="group" aria-label="Sắp xếp">
        <button type="button" aria-pressed={sort === 'score'} onClick={() => setSort('score')}>
          Xếp theo thứ tự nên làm
        </button>
        <button type="button" aria-pressed={sort === 'impact'} onClick={() => setSort('impact')}>
          Xếp theo tác động
        </button>
      </div>
      <div className={styles.tableWrap} role="region" aria-label="Ma trận ưu tiên, cuộn ngang trên màn hình nhỏ" tabIndex={0}>
        <table className={styles.table}>
          <caption className="visually-hidden">Ví dụ giả định: xếp việc theo tác động, công sức và độ chắc của căn cứ</caption>
          <thead>
            <tr>
              <th scope="col">Việc</th>
              <th scope="col">Tác động</th>
              <th scope="col">Công sức</th>
              <th scope="col">Độ chắc của căn cứ</th>
              <th scope="col">Điểm ưu tiên</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(p => (
              <tr key={p.task}>
                <th scope="row">{p.task}</th>
                <td>{LEVEL[p.impact]}</td>
                <td>{LEVEL[p.effort]}</td>
                <td>{LEVEL[p.confidence]}</td>
                <td className={styles.score}>{score(p).toLocaleString('vi-VN', {maximumFractionDigits: 1})}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.note}>
        Ví dụ giả định cho mục tiêu “thêm khách đủ chuẩn”, không phải lộ trình của khách hàng nào. Điểm ưu tiên = tác động × độ chắc ÷ công sức, mỗi yếu tố chấm
        1 đến 3.
      </p>
    </div>
  );
}
