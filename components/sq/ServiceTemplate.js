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
import {getPerson} from '../data/team';
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
  const pm = getPerson('pm');
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
                <dt>Hợp với bạn nếu</dt>
                <dd>{service.proof.replace(/^Hợp với\s*/i, '').replace(/^./, c => c.toUpperCase())}</dd>
              </div>
              {notYet && (
                <div>
                  <dt>Chưa hợp nếu</dt>
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
            <span>làm theo thứ tự, bước nào bạn cũng thấy SOHO đã làm gì</span>
          </div>
          <div className={styles.statOrange}>
            <b>{service.deliverables.length} thứ bàn giao</b>
            <span>tài liệu và tài khoản đều đứng tên doanh nghiệp bạn</span>
          </div>
          <div className={styles.statWhite}>
            <b>2 tuần</b>
            <span>một lần cùng bạn xem số, quyết định làm tiếp hay sửa</span>
          </div>
        </div>
      </div>

      <Section id="dau-hieu" kicker="Bạn có đang gặp chuyện này?" title={service.insightTitle || 'Dấu hiệu bạn đang gặp, và điều SOHO hướng tới'} intro={service.insight}>
        <BeforeAfter before={service.pains} after={service.outcomes} beforeLabel="Dấu hiệu bạn đang gặp" afterLabel="Làm xong, bạn hướng tới" />
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

      <Section id="ban-giao" kicker="Bàn giao" title="Bạn nhận được gì" intro="Tài liệu nào cũng viết để bạn đọc hiểu. Tài khoản và dữ liệu đứng tên doanh nghiệp bạn.">
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
                <p className={styles.caseTag}>Việc thật đã làm</p>
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
                <span className={styles.caseMore}>Xem cả dự án →</span>
              </a>
            ) : (
              <div className={styles.caseCard}>
                <p className={styles.caseTag}>Việc thật đã làm</p>
                <p>Chưa có dự án {service.menuTitle} được khách cho phép công bố số. SOHO không đăng số khi khách chưa đồng ý.</p>
                <a href={sitePath('/ket-qua/')} className={styles.caseMore}>
                  Xem các dự án đã công bố →
                </a>
              </div>
            )}
            {pm && (
              <div className={styles.person}>
                <div className={styles.personImg}>
                  <img src={sitePath(pm.photo)} width={pm.width} height={pm.height} alt={`${pm.name ? pm.name + ', ' : ''}${pm.role.toLowerCase()} của SOHO`} loading="lazy" />
                </div>
                <div>
                  <p className={styles.caseTag}>Người làm việc với bạn</p>
                  <p className={styles.personRole}>{pm.name || pm.role}</p>
                  <p className={styles.personDoes}>{pm.does}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {article && (
        <Section id="doc-ky" tone="soft" kicker="Đọc kỹ trước khi làm" title={`${service.menuTitle}: giải thích đầy đủ`} spacing="lg">
          <div className={styles.articleCard}>
            <ArticleBody article={article} />
          </div>
        </Section>
      )}

      {related.length > 0 && (
        <Section kicker="Dịch vụ cùng nhóm" title="Thường làm cùng" spacing="sm">
          <LinkRows items={related.map(s => ({title: s.menuTitle, desc: s.menuDesc, href: `/dich-vu/${s.slug}`}))} />
        </Section>
      )}

      {cta ? <CtaBand title={<span className="hl">{cta.title}</span>} text={cta.text} service={cta.service} /> : <CtaBand />}
    </>
  );
}
