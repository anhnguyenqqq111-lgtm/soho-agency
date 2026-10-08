import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/ui/Section';
import Track from '../components/diagrams/Track';
import Button from '../components/ui/Button';
import ContactForm from '../components/ContactForm';
import Fill from '../components/ui/Fill';
import Photo from '../components/ui/Photo';
import SplitWords from '../components/ui/SplitWords';
import LogoMarquee from '../components/proof/LogoMarquee';
import {images} from '../components/data/images';
import ProjectGrid from '../components/proof/ProjectGrid';
import PartnerStrip from '../components/proof/PartnerStrip';
import Testimonials from '../components/proof/Testimonials';
import {clients} from '../components/data/clients';
import {company} from '../components/data/company';
import {getServicesByGroup} from '../components/servicePagesData';
import {getLatestArticles} from '../components/blogData';
import {sitePath} from '../components/paths';

const focusAreas = [
  {label: 'SEO và AI Search', href: '/dich-vu/seo-tong-the'},
  {label: 'Quảng cáo Google, Meta, TikTok', href: '/dich-vu/google-ads-shopping'},
  {label: 'Đo lường và tối ưu chuyển đổi', href: '/dich-vu/ga4-looker-dashboard'}
];

const principles = [
  {
    title: 'Doanh nghiệp sở hữu tài khoản và dữ liệu',
    text: 'Tài khoản quảng cáo, GA4 và dashboard đứng tên bạn. Dừng hợp tác, dữ liệu vẫn ở lại.'
  },
  {
    title: 'Người lập chiến lược là người trực tiếp làm',
    text: 'Người đề xuất ở buổi đầu cũng là người vận hành tài khoản và trình bày báo cáo.'
  },
  {
    title: 'Làm theo sprint 2 tuần',
    text: 'Hai tuần một lần xem số liệu. Việc không tạo tín hiệu thì dừng.'
  },
  {
    title: 'Báo cáo theo lead và doanh thu',
    text: 'Traffic và CTR vẫn được theo dõi, nhưng mỗi kênh có một nhóm chỉ số chính:'
  }
];

const weeklyMetrics = [
  ['SEO', 'Visibility của nhóm từ khóa có ý định mua, số lead từ trang organic'],
  ['Quảng cáo', 'CPA, ROAS, tỷ lệ lead đạt chuẩn, truy vấn lãng phí'],
  ['CRO', 'Tỷ lệ điền form, gọi, đặt lịch, đặc biệt trên mobile']
];

const steps = [
  {title: 'Hiểu bài toán kinh doanh', text: 'Mục tiêu, khách hàng, biên lợi nhuận.'},
  {title: 'Audit kênh hiện có', text: 'Website, tracking, quảng cáo, đối thủ.'},
  {title: 'Chọn việc làm trước', text: 'Xếp theo tác động và độ khó.'},
  {title: 'Triển khai theo sprint', text: '2 tuần một vòng, có giả thuyết và chỉ số.'},
  {title: 'Giữ, sửa hoặc dừng', text: 'Nhân rộng việc hiệu quả, dừng việc không.'}
];

const afterSubmit = [
  'SOHO xem website và các kênh bạn đang chạy.',
  'Hẹn một buổi gọi 30 phút để hỏi thêm về mục tiêu và ngân sách.',
  'Gửi lại một trang ghi chú: điểm nghẽn chính và 3 việc nên làm trước.'
];

export default function Home(){
  const serviceGroups = getServicesByGroup();
  const latest = getLatestArticles(3);

  return (
    <>
      <Header activeNav="home"/>
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <h1 className={styles.heroTitle}>
              <SplitWords segments={[
                {text: 'Marketing được đo bằng '},
                {text: 'lead và doanh thu', em: true},
                {text: ', không bằng lượt click.'}
              ]}/>
            </h1>
            <div className={styles.heroLead} data-reveal="" style={{'--reveal-delay': '500ms'}}>
              <p>
                SOHO lập kế hoạch và trực tiếp triển khai SEO, quảng cáo, content và tracking cho doanh nghiệp Việt Nam. Mỗi sprint 2 tuần đều có giả thuyết, việc cần làm và chỉ số nghiệm thu.
              </p>
              <div className={styles.heroActions}>
                <Button href="#lien-he">Đặt lịch trao đổi</Button>
                <Button href="#cach-lam-viec" variant="text">Xem cách SOHO làm việc</Button>
              </div>
            </div>
            <nav className={styles.heroFocus} aria-label="Lĩnh vực chính" data-reveal="" style={{'--reveal-delay': '650ms'}}>
              <p className={styles.heroFocusLabel}>SOHO làm gì</p>
              <ul>
                {focusAreas.map(area => (
                  <li key={area.href}><a href={sitePath(area.href)}>{area.label}</a></li>
                ))}
              </ul>
            </nav>
            <div className={styles.heroImage} style={{'--reveal-delay': '300ms'}}>
              <Photo image={images.homeHero} ratio="12/5" eager/>
            </div>
            <dl className={styles.heroProof} data-reveal="">
              <div><dt>Thành lập</dt><dd><Fill value={company.foundedYear} need="CẦN NĂM"/></dd></div>
              <div><dt>Khách hàng đã làm</dt><dd><Fill value={company.clientCount} need="CẦN SỐ THẬT"/></dd></div>
              <div><dt>Văn phòng</dt><dd>{company.regions}</dd></div>
            </dl>
            <div className={styles.heroMarquee}>
              <LogoMarquee clients={clients}/>
            </div>
          </div>
        </section>

        {/* Dự án */}
        <Section
          id="du-an"
          index="01"
          label="Dự án"
          variant="wide"
          spacing="md"
          title="Một số doanh nghiệp SOHO đang làm cùng"
        >
          <ProjectGrid projects={clients} linkBase="/ket-qua"/>
          <div className={styles.partners}><PartnerStrip/></div>
          <p className={styles.more}><Button href="/ket-qua" variant="text">Xem chi tiết từng dự án</Button></p>
        </Section>

        {/* Dịch vụ */}
        <Section
          id="dich-vu"
          index="02"
          label="Dịch vụ"
          variant="wide"
          spacing="lg"
          title="Chín dịch vụ, chọn theo điểm nghẽn bạn đang gặp"
        >
          <div className={styles.serviceGroups}>
            {serviceGroups.map(({group, items}) => (
              <div className={styles.serviceGroup} key={group}>
                <h3 className={styles.serviceGroupName}>{group}</h3>
                <ul className={styles.serviceList}>
                  {items.map(service => (
                    <li key={service.slug}>
                      <a href={sitePath(`/dich-vu/${service.slug}`)} className={styles.serviceRow}>
                        <span className={styles.serviceName}>{service.menuTitle}</span>
                        <span className={styles.serviceDesc}>{service.menuDesc}</span>
                        <span className={styles.serviceArrow} aria-hidden="true">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className={styles.more}><Button href="/dich-vu" variant="text">Tất cả dịch vụ</Button></p>
        </Section>

        {/* Cách làm việc */}
        <Section
          id="cach-lam-viec"
          index="03"
          label="Cách làm việc"
          variant="split"
          title="Bốn điều SOHO giữ trong mọi hợp đồng"
          asideMedia={<Photo image={images.homeMeeting} ratio="4/3"/>}
          intro="Không có công thức chung cho mọi doanh nghiệp, nhưng cách làm việc thì giống nhau ở mọi dự án."
        >
          <ol className={styles.principles}>
            {principles.map((p, i) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {i === principles.length - 1 && (
                  <table className={styles.metricTable}>
                    <caption className="visually-hidden">Chỉ số theo dõi hằng tuần theo kênh</caption>
                    <thead>
                      <tr><th scope="col">Kênh</th><th scope="col">Theo dõi hằng tuần</th></tr>
                    </thead>
                    <tbody>
                      {weeklyMetrics.map(([channel, metric]) => (
                        <tr key={channel}><th scope="row">{channel}</th><td>{metric}</td></tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </li>
            ))}
          </ol>
        </Section>

        {/* Quy trình */}
        <Section
          index="04"
          label="Quy trình"
          tone="paper2"
          variant="wide"
          title="Từ buổi gọi đầu tiên đến sprint thứ ba"
          intro={<p>Sprint đầu tiên thường bắt đầu sau 2 tuần audit <span className="placeholder">[CẦN XÁC NHẬN]</span>.</p>}
        >
          <Track items={steps}/>
        </Section>

        {/* Nhận xét */}
        <Section index="05" label="Khách hàng nói gì" variant="wide" title="Nhận xét từ khách hàng">
          <Testimonials/>
        </Section>

        {/* Bài viết */}
        <Section index="06" label="Bài viết" variant="wide" spacing="md" title="Ghi chép từ đội SOHO">
          <ul className={styles.posts}>
            {latest.map(post => (
              <li key={post.slug}>
                <a href={sitePath(`/blog/${post.slug}`)} className={styles.postRow}>
                  <span className={`num ${styles.postDate}`}>{post.date}</span>
                  <span className={styles.postCat}>{post.category}</span>
                  <span className={styles.postTitle}>{post.title}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.more}><Button href="/blog" variant="text">Tất cả bài viết</Button></p>
        </Section>

        {/* Liên hệ */}
        <Section
          id="lien-he"
          index="07"
          label="Liên hệ"
          variant="split"
          spacing="lg"
          title="Kể cho SOHO bài toán hiện tại"
          intro={
            <>
              <p>Sau khi bạn gửi form:</p>
              <ol className={styles.afterSubmit}>
                {afterSubmit.map(item => <li key={item}>{item}</li>)}
              </ol>
              <p className={styles.directMail}>
                Hoặc gửi email trực tiếp tới <a href="mailto:hello@sohoagency.vn">hello@sohoagency.vn</a>
              </p>
            </>
          }
        >
          <ContactForm/>
        </Section>
      </main>
      <Footer/>
    </>
  );
}
