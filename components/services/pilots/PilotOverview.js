import styles from './PilotOverview.module.css';
import ed from '../editorial/editorial.module.css';
import Icon from '../../ui/Icon';
import Track from '../../diagrams/Track';
import BeforeAfter from '../../diagrams/BeforeAfter';
import ServiceDiagram from '../../diagrams/ServiceDiagrams';
import {ServiceSubnav} from './PilotParts';
import {sitePath} from '../../paths';
import {ROLES} from '../../data/touchpoints';

/*
  Phần đầu của trang thí điểm (Redesign V4.0). Giữ nguyên ba sơ đồ đang live (ServiceDiagram ở hero, Track, BeforeAfter),
  chỉ đổi bố cục quanh chúng. Mỗi trang một kiểu hero:
  - analysis (SEO): chữ trái, sơ đồ lớn bên phải, nền trắng.
  - performance (Google Ads): sơ đồ chiếm phần lớn bên trái, chữ gọn bên phải; dải các bước nền sáng
    vì khối tối của trang dành cho phần mô phỏng.
  - exhibition (Nhận diện): H1 cỡ lớn trải ngang, sơ đồ đặt như tác phẩm trên tường; dải các bước nền tối.
  Lời hứa (service.promise) gộp vào hero thay cho section "Mục tiêu hướng tới" riêng.
*/
export default function PilotOverview({service, nav, variant}) {
  const cta = ROLES[service.slug]?.cta || 'Nhận tư vấn';
  const trackDark = variant === 'exhibition';
  return (
    <>
      <section className={`${styles.hero} ${styles[variant]}`}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav aria-label="Breadcrumb" className={styles.crumbs}>
              <ol>
                <li>
                  <a href={sitePath('/')}>Trang chủ</a>
                </li>
                <li>
                  <a href={sitePath('/dich-vu')}>Dịch vụ</a>
                </li>
                <li>
                  <span aria-current="page">{service.menuTitle}</span>
                </li>
              </ol>
            </nav>
            <h1 className={styles.title}>{service.title}</h1>
            <div className={styles.heroText}>
              <p className={styles.intro}>{service.intro}</p>
              <p className={styles.promise}>{service.promise}</p>
              <div className={styles.actions}>
                <a href="#lien-he" className={styles.primary}>
                  {cta} <Icon name="arrow-right" size={18} />
                </a>
                <a href="#van-de" className={ed.textLink}>
                  Đọc phân tích
                </a>
              </div>
            </div>
          </div>
          <div className={styles.chart}>
            <ServiceDiagram slug={service.slug} card />
          </div>
        </div>
      </section>

      <ServiceSubnav items={nav} />

      <section id="cach-lam" className={`${ed.band} ${trackDark ? `${ed.ink} dark on-dark` : ''}`} aria-labelledby="cach-lam-title">
        <div className={`container ${ed.grid}`}>
          <div className={ed.side}>
            <p className={ed.label}>Cách làm</p>
            <h2 id="cach-lam-title" className={ed.h2}>
              SOHO làm theo {service.process.length} bước
            </h2>
          </div>
          <p className={`${ed.main} ${ed.lead} ${styles.trackIntro}`}>Mỗi bước có việc cụ thể và con số để bạn kiểm tra.</p>
          <div className={ed.full}>
            <Track items={service.process.map(title => ({title}))} />
          </div>
        </div>
      </section>

      <section id="vi-sao" className={`${ed.band} ${trackDark ? '' : ed.canvas}`} aria-labelledby="vi-sao-title">
        <div className={`container ${ed.grid}`}>
          <div className={`${ed.side} ${ed.sticky}`}>
            <p className={ed.label}>Vì sao cần</p>
            <h2 id="vi-sao-title" className={ed.h2}>
              Vì sao doanh nghiệp cần {service.menuTitle}?
            </h2>
            <p className={`${ed.body} ${styles.insight}`}>{service.insight}</p>
          </div>
          <div className={ed.main}>
            <BeforeAfter before={service.pains} after={service.outcomes} beforeLabel="Dấu hiệu bạn đang gặp" afterLabel="Mục tiêu hướng tới" />
            <p className={`${ed.small} ${styles.fit}`}>{service.proof}</p>
          </div>
        </div>
      </section>
    </>
  );
}
