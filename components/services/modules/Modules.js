import styles from './Modules.module.css';
import ed from '../editorial/editorial.module.css';
import Icon from '../../ui/Icon';
import {sitePath} from '../../paths';
import {ROLES, stageOf} from '../../data/touchpoints';
import {cases} from '../../data/cases';

/*
  Module quyết định dùng chung cho trang dịch vụ (Redesign V6.0). Mỗi trang tự chọn module và thứ tự.
  - ServiceFit: dịch vụ có hợp với tình huống của bạn không; children để chèn công cụ riêng (ví dụ bảng kiểm Google Ads).
  - ScopeSpec: phạm vi, phần thuộc dịch vụ khác, phụ thuộc, yếu tố chi phí và thời gian, bàn giao, cách đánh giá.
  - CaseEvidence: dự án thật đã công bố, chỉ ghi kết quả khi đúng kênh của trang.
  - NextSteps: vai trò trên hành trình, bước tiếp theo và điều gì xảy ra sau khi gửi yêu cầu.
  Dữ liệu: components/data/serviceExperience.js.
*/

export function ServiceFit({fit, slug, names, num = '01', tone, children}) {
  const role = ROLES[slug];
  const groups = [
    {key: 'when', label: 'Nên cân nhắc khi', items: fit.when},
    {key: 'notYet', label: 'Chưa nên ưu tiên khi', items: fit.notYet, alt: role?.notYetSlug},
    {key: 'prepare', label: 'Cần chuẩn bị', items: fit.prepare}
  ];
  return (
    <section id="phu-hop" className={`${ed.band} ${tone === 'canvas' ? ed.canvas : ''}`} aria-labelledby="phu-hop-title">
      <div className={`container ${ed.grid}`}>
        <div className={`${ed.side} ${styles.fitSide}`}>
          <p className={ed.label}>
            <b>{num}</b> Có hợp với bạn?
          </p>
          <h2 id="phu-hop-title" className={ed.h2}>
            {fit.title}
          </h2>
          <p className={`${ed.body} ${styles.fitLead}`}>{fit.lead}</p>
        </div>
        <div className={ed.main}>
          {groups.map(g => (
            <div key={g.key} className={styles.fitGroup} data-group={g.key}>
              <h3 className={styles.fitLabel}>{g.label}</h3>
              <ul>
                {g.items.map(it => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              {g.alt && (
                <a href={sitePath(`/dich-vu/${g.alt}`)} className={styles.fitAlt}>
                  Nên xem trước: {names[g.alt]} <Icon name="arrow-right" size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
        {children && <div className={ed.full}>{children}</div>}
      </div>
    </section>
  );
}

export function ScopeSpec({scope, deliverables, slug, names, num = '04', dark = true, tone = 'canvas', aside}) {
  const role = ROLES[slug];
  const rows = [
    {
      title: 'Trong phạm vi',
      body: (
        <>
          <p>{scope.included}</p>
          {deliverables?.length > 0 && (
            <ul className={styles.deliver}>
              {deliverables.map(d => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
        </>
      )
    },
    {
      title: 'Không thuộc dịch vụ này',
      body: (
        <p>
          {scope.excluded.text}
          {scope.excluded.slug && (
            <>
              {' '}
              <a href={sitePath(`/dich-vu/${scope.excluded.slug}`)}>là việc của {names[scope.excluded.slug]}</a>
            </>
          )}
          .
        </p>
      )
    },
    {title: 'Phụ thuộc vào', body: <p>{scope.dependencies}</p>},
    {title: 'Ảnh hưởng tới chi phí', body: <p>{scope.cost}</p>},
    {title: 'Ảnh hưởng tới thời gian', body: <p>{scope.time}</p>},
    {title: 'Đánh giá bằng', body: <p>{role?.metric}</p>}
  ];
  return (
    <section id="pham-vi" className={`${ed.band} ${dark ? `${ed.ink} dark on-dark` : tone === 'white' ? '' : ed.canvas}`} aria-labelledby="pham-vi-title">
      <div className={`container ${ed.grid}`}>
        <div className={ed.side}>
          <p className={ed.label}>
            <b>{num}</b> Phạm vi
          </p>
          <h2 id="pham-vi-title" className={ed.h2}>
            Bạn nhận được gì, cần gì, và điều gì ảnh hưởng tới đề xuất
          </h2>
          <p className={`${ed.small} ${styles.scopeNote}`}>Phạm vi, chi phí và thời gian cụ thể được chốt trong đề xuất cho từng doanh nghiệp.</p>
          {aside}
        </div>
        <ol className={`${ed.main} ${styles.scope}`}>
          {rows.map((r, i) => (
            <li key={r.title}>
              <span className={styles.scopeNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.scopeTitle}>{r.title}</h3>
              <div className={styles.scopeBody}>{r.body}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const firstSentences = (text, n) => {
  const parts = text.split('. ');
  return parts.slice(0, n).join('. ') + (parts.length > n || !text.endsWith('.') ? '.' : '');
};

export function CaseEvidence({proof, num = '03', title = 'Dự án thật, đúng kênh', tone}) {
  const project = cases.find(c => c.slug === proof.slug);
  if (!project) return null;
  const more = (proof.more || []).map(s => cases.find(c => c.slug === s)).filter(Boolean);
  return (
    <section id="du-an" className={`${ed.band} ${tone === 'canvas' ? ed.canvas : ''}`} aria-labelledby="du-an-title">
      <div className={`container ${ed.grid}`}>
        <div className={ed.side}>
          <p className={ed.label}>
            <b>{num}</b> Bằng chứng
          </p>
          <h2 id="du-an-title" className={ed.h2}>
            {title}
          </h2>
        </div>
        <p className={`${ed.main} ${ed.lead} ${styles.caseIntro}`}>
          Chỉ dùng dự án SOHO đã công bố, và chỉ ghi kết quả khi kết quả đó thuộc đúng dịch vụ đang nói.
        </p>
        <a href={sitePath(`/du-an/${project.slug}`)} className={`${ed.full} ${styles.caseMedia}`} tabIndex={-1} aria-hidden="true">
          <img src={sitePath(project.image)} alt="" width={project.imageWidth} height={project.imageHeight} loading="lazy" />
        </a>
        <div className={ed.side}>
          <h3 className={ed.h3}>{project.name}</h3>
          <p className={`${ed.small} ${styles.caseMeta}`}>
            {project.field}
            <br />
            {project.scope} · {project.period}
          </p>
        </div>
        <div className={ed.main}>
          <dl className={styles.caseFacts}>
            <div>
              <dt>Vấn đề</dt>
              <dd>{project.problem}</dd>
            </div>
            <div>
              <dt>SOHO đã làm</dt>
              <dd>{firstSentences(project.work, 2)}</dd>
            </div>
            <div>
              <dt>Kết quả</dt>
              <dd>
                {proof.resultApplies ? project.result : proof.note}
                {proof.resultApplies && project.kpis?.length > 0 && (
                  <span className={styles.kpis}>
                    {project.kpis.map(k => (
                      <span key={k.label}>
                        <strong>{k.value}</strong> {k.label}
                      </span>
                    ))}
                  </span>
                )}
              </dd>
            </div>
          </dl>
          <p className={`${ed.small} ${styles.source}`}>
            Nguồn: trang dự án do SOHO công bố.{' '}
            <a href={sitePath(`/du-an/${project.slug}`)} className={styles.caseLink}>
              Xem dự án {project.name} <Icon name="arrow-right" size={16} />
            </a>
          </p>
        </div>
        {more.length > 0 && (
          <ul className={`${ed.full} ${styles.more}`} aria-label="Dự án cùng kênh khác">
            {more.map(m => (
              <li key={m.slug}>
                <a href={sitePath(`/du-an/${m.slug}`)}>
                  <img src={sitePath(m.image)} alt="" width={m.imageWidth} height={m.imageHeight} loading="lazy" />
                  <span className={styles.moreName}>{m.name}</span>
                  <span className={styles.moreText}>{m.result}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

const STEPS = [
  {title: 'Bạn gửi bối cảnh', text: 'Website hiện tại, kênh đang chạy, mục tiêu và cách liên hệ. Form chỉ có vài ô, dịch vụ đã được chọn sẵn.'},
  {title: 'SOHO xem thông tin', text: 'SOHO đọc những gì bạn gửi, xác định phần còn thiếu và phạm vi tư vấn phù hợp với tình huống của bạn.'},
  {title: 'Hai bên thống nhất hướng làm', text: 'Trao đổi cách tiếp cận, đầu việc, điều kiện cần có và đề xuất trước khi triển khai bất cứ việc gì.'}
];

export function NextSteps({slug, names, num = '05', tone}) {
  const role = ROLES[slug];
  const primary = stageOf(role.primary);
  const supporting = role.supporting.map(k => stageOf(k).name);
  return (
    <section id="tiep-theo" className={`${ed.band} ${tone === 'canvas' ? ed.canvas : ''}`} aria-labelledby="tiep-theo-title">
      <div className={`container ${ed.grid}`}>
        <div className={ed.half}>
          <p className={ed.label}>
            <b>{num}</b> Bước tiếp theo
          </p>
          <h2 id="tiep-theo-title" className={ed.h2}>
            Gửi yêu cầu. Rồi điều gì xảy ra?
          </h2>
          <div className={styles.journey}>
            <p className={styles.journeyRole}>
              <span>Trên hành trình khách hàng</span>
              Vai trò chính: <strong>{primary.name}</strong>
              {supporting.length > 0 && <> · hỗ trợ: {supporting.join(', ')}</>}
            </p>
            <ol className={styles.chain} aria-label="Đường đi của khách qua dịch vụ này">
              {role.chain.map(c => (
                <li key={c}>{c}</li>
              ))}
            </ol>
            <a href={sitePath(`/dich-vu/${role.next.slug}`)} className={styles.nextLink}>
              <span>Thường đi tiếp sang</span>
              <strong>
                {names[role.next.slug]} <Icon name="arrow-right" size={18} />
              </strong>
              <em>{role.next.why}</em>
            </a>
          </div>
        </div>
        <ol className={`${ed.half} ${styles.steps}`} aria-label="Sau khi bạn gửi yêu cầu">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
          <li className={styles.stepCta}>
            <a href="#lien-he" className={styles.cta}>
              {role.cta} <Icon name="arrow-down" size={18} />
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}
