import styles from './ServiceOverview.module.css';
import Hero from '../hero/Hero';
import PageHeader from '../ui/PageHeader';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Track from '../diagrams/Track';
import BeforeAfter from '../diagrams/BeforeAfter';
import ServiceDiagram from '../diagrams/ServiceDiagrams';
import {ServiceSubnav} from './pilots/PilotParts';

/*
  Phần đầu chung của mọi trang dịch vụ, giữ đúng như bản đang live: hero có sơ đồ riêng của dịch vụ, mục tiêu hướng tới,
  dải "SOHO làm theo N bước", sơ đồ "Dấu hiệu → Mục tiêu". Phần bên dưới (riêng từng trang) giải thích rõ các sơ đồ này.
  nav: các mục của thanh điều hướng trong trang, dạng [id, nhãn].
*/
export default function ServiceOverview({service, nav}) {
  return (
    <>
      <Hero
        tone="services"
        crumbs={[{label: 'Dịch vụ', href: '/dich-vu'}, {label: service.menuTitle}]}
        title={service.title}
        long
        tagline={service.intro}
        visual={
          <div className={styles.heroDiagram}>
            <ServiceDiagram slug={service.slug} card />
          </div>
        }
      />
      <ServiceSubnav items={nav} />
      <PageHeader title="Mục tiêu hướng tới" lead={service.promise} bullets={service.outcomes}>
        <Button href="#lien-he">Nhận tư vấn</Button>
      </PageHeader>

      <Section
        id="cach-lam"
        tone="dark"
        decor="calender"
        title={
          <>
            SOHO làm theo <span className="hl">{service.process.length} bước</span>
          </>
        }
        intro="Mỗi bước có việc cụ thể và con số để bạn kiểm tra."
      >
        <Track items={service.process.map(title => ({title}))} />
      </Section>

      <Section
        id="vi-sao"
        title={
          <>
            Vì sao doanh nghiệp cần <span className="hl">{service.menuTitle}</span>?
          </>
        }
        intro={service.insight}
      >
        <BeforeAfter before={service.pains} after={service.outcomes} beforeLabel="Dấu hiệu bạn đang gặp" afterLabel="Mục tiêu hướng tới" />
        <p className={styles.proof}>{service.proof}</p>
      </Section>
    </>
  );
}
