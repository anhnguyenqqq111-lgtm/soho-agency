import styles from './service.module.css';
import Section from '../ui/Section';
import Button from '../ui/Button';
import CtaBand from '../ui/CtaBand';
import LinkRows from '../ui/LinkRows';
import Glass from './Glass';
import Track from '../diagrams/Track';
import BeforeAfter from '../diagrams/BeforeAfter';
import ServiceDiagram from '../diagrams/ServiceDiagrams';
import ArticleBody from '../article/ArticleBody';
import {sitePath} from '../paths';
import {publishedCases} from '../data/cases';
import {getPerson, personAlt} from '../data/team';
import {serviceCta, NOT_YET} from '../data/contactVariants';

/*
  Mẫu chung 12 trang dịch vụ, bản 12 (canvas SqService). Giữ 3 sơ đồ live: ServiceDiagram, Track, BeforeAfter.
  Đường đọc: định vị (hợp với ai, chưa hợp nếu) → chuyện bạn đang gặp → SOHO làm theo các bước → bạn nhận gì và việc thật đã làm
  → người phụ trách → bài đọc kỹ → dịch vụ cùng nhóm → form live theo biến thể của dịch vụ (chọn sẵn dịch vụ).
*/
export default function ServiceTemplate({service, article, related}) {
  const cta = serviceCta(service.slug);
  const notYet = NOT_YET[service.slug];
  const proj = publishedCases.find(c => c.channel === service.slug) || publishedCases.find(c => c.services?.includes(service.slug));
  const people = [
    {p: getPerson('pm'), tag: 'Đầu mối làm việc với bạn'},
    {p: getPerson('mkt'), tag: 'Người lên kế hoạch và làm'},
    {p: getPerson('seo'), tag: 'Người trực tiếp làm SEO', only: true},
    {p: getPerson('content'), tag: 'Người làm nội dung và mạng xã hội', only: true},
    {p: getPerson('dev'), tag: 'Người lập trình website và app', only: true}
  ].filter(x => x.p && (!x.only || x.p.services?.includes(service.slug)));
  return (
    <>
      <section className={`${styles.hero} bg-denim dark on-dark`} aria-labelledby="h1">
        <Glass tone="white" style={{left: '-80px', bottom: '-40px', width: 180, height: 180, transform: 'rotate(10deg)'}} />
        <Glass tone="light" sm style={{right: '30%', bottom: '40px', width: 24, height: 24, transform: 'rotate(14deg)'}} />
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <nav aria-label="Đường dẫn" className={styles.crumbs}>
              <a href={sitePath('/')}>Trang chủ</a>
              <span aria-hidden="true">/</span>
              <a href={sitePath('/dich-vu/')}>Dịch vụ</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.menuTitle}</span>
            </nav>
            <p className="eyebrow">Dịch vụ {service.menuTitle}</p>
            <h1 id="h1" className={styles.title}>
              {service.title}
            </h1>
            <p className={styles.lead}>{service.intro}</p>
            <dl className={styles.fit}>
              <div>
                <dt>Phù hợp với</dt>
                <dd>{service.proof.replace(/^(Phù hợp với|Hợp với)\s*/i, '').replace(/^./, c => c.toUpperCase())}</dd>
              </div>
              {notYet && (
                <div>
                  <dt>Chưa phù hợp nếu</dt>
                  <dd>{notYet.replace(/^./, c => c.toUpperCase())}</dd>
                </div>
              )}
            </dl>
            <div className={styles.btns}>
              <Button href="#lien-he" arrow={false}>
                Nhận tư vấn
              </Button>
              {article && (
                <Button href="#doc-ky" variant="secondary" onDark arrow={false}>
                  Đọc hướng dẫn đầy đủ
                </Button>
              )}
            </div>
          </div>
          <div className={styles.diagramCard}>
            <ServiceDiagram slug={service.slug} card />
          </div>
        </div>
      </section>

      <div className={`container ${styles.statsWrap}`}>
        <div className={styles.stats}>
          <div className={styles.statDenim}>
            <b>{service.process.length} bước</b>
            <span>triển khai theo thứ tự, bước nào cũng báo lại cho bạn</span>
          </div>
          <div className={styles.statOrange}>
            <b>{service.deliverables.length} hạng mục bàn giao</b>
            <span>tài liệu và tài khoản đều thuộc về doanh nghiệp bạn</span>
          </div>
          <div className={styles.statWhite}>
            <b>2 tuần</b>
            <span>một lần cùng bạn xem số liệu và điều chỉnh</span>
          </div>
        </div>
      </div>

      <Section id="dau-hieu" kicker="Bạn có đang gặp tình trạng này?" title={service.insightTitle || 'Dấu hiệu thường gặp và mục tiêu SOHO hướng tới'} intro={service.insight}>
        <BeforeAfter before={service.pains} after={service.outcomes} beforeLabel="Dấu hiệu thường gặp" afterLabel="Mục tiêu sau khi làm" />
      </Section>

      <Section
        id="cach-lam"
        tone="soft"
        kicker="Cách làm"
        title={
          <>
            SOHO làm theo <span className="hl">{service.process.length} bước</span>
          </>
        }
        intro={service.promise}
      >
        <Track items={service.process.map(title => ({title}))} />
      </Section>

      <Section id="ban-giao" kicker="Bàn giao" title="Bạn nhận được gì" intro="Tài liệu viết dễ hiểu. Tài khoản và dữ liệu đều đứng tên doanh nghiệp bạn.">
        <div className={styles.deliver}>
          <ol className={styles.deliverList}>
            {service.deliverables.map((d, i) => (
              <li key={d} data-reveal="" style={{'--reveal-delay': `${i * 60}ms`}}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {d}
              </li>
            ))}
          </ol>
          <div className={styles.side}>
            {proj ? (
              <a href={sitePath(`/du-an/${proj.slug}/`)} className={styles.caseCard}>
                <p className={styles.caseTag}>Dự án thực tế</p>
                <p className={styles.caseName}>{proj.name}</p>
                <p>
                  <b>Bối cảnh:</b> {proj.problem}
                </p>
                <p>
                  <b>Kết quả:</b> {proj.result}
                </p>
                {proj.kpis?.[0] && (
                  <p className={styles.caseKpi}>
                    <strong>{proj.kpis[0].value}</strong> {proj.kpis[0].label}
                  </p>
                )}
                <span className={styles.caseMore}>Xem chi tiết dự án →</span>
              </a>
            ) : (
              <div className={styles.caseCard}>
                <p className={styles.caseTag}>Dự án thực tế</p>
                <p>SOHO đang cập nhật dự án tiêu biểu cho dịch vụ {service.menuTitle}. Trong lúc đó, bạn có thể xem kết quả ở các dịch vụ khác.</p>
                <a href={sitePath('/ket-qua/')} className={styles.caseMore}>
                  Xem các dự án tiêu biểu →
                </a>
              </div>
            )}
          </div>
        </div>
        {/* Người phụ trách xếp hàng ngang dưới danh sách: để trong cột phải thì cột phải cao gấp đôi cột trái, hở mảng trống. */}
        {people.length > 0 && (
          <div className={styles.team} data-count={people.length}>
            {people.map(({p, tag}) => (
              <div key={p.key} className={styles.person}>
                <div className={styles.personImg}>
                  <img src={sitePath(p.photo)} width={p.width} height={p.height} alt={personAlt(p)} loading="lazy" />
                </div>
                <div>
                  <p className={styles.caseTag}>{tag}</p>
                  <p className={styles.personRole}>{p.name || p.role}</p>
                  <p className={styles.personDoes}>
                    {p.title ? `${p.title}. ` : p.exp ? `${p.exp}. ` : ''}
                    {p.does}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

      {article && (
        <Section id="doc-ky" tone="soft" kicker="Tìm hiểu kỹ" title={`${service.menuTitle}: những điều cần biết`} spacing="lg">
          <div className={styles.articleCard}>
            <ArticleBody article={article} />
          </div>
        </Section>
      )}

      {related.length > 0 && (
        <Section kicker="Dịch vụ liên quan" title="Thường làm kèm" spacing="sm">
          <LinkRows items={related.map(s => ({title: s.menuTitle, desc: s.menuDesc, href: `/dich-vu/${s.slug}`}))} />
        </Section>
      )}

      {cta ? <CtaBand title={<span className="hl">{cta.title}</span>} text={cta.text} service={cta.service} /> : <CtaBand />}
    </>
  );
}
