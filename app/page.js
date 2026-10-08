import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/ui/Section';
import NumberedList from '../components/ui/NumberedList';
import Button from '../components/ui/Button';
import ContactForm from '../components/ContactForm';
import {clients} from '../components/data/clients';
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
    text: 'Tài khoản quảng cáo, GA4, GTM, Search Console và dashboard đứng tên doanh nghiệp. SOHO được cấp quyền để làm việc, không giữ tài khoản. Dừng hợp tác thì toàn bộ dữ liệu vẫn ở lại với bạn.'
  },
  {
    title: 'Người lập chiến lược là người trực tiếp làm',
    text: 'Người phân tích và đề xuất ở buổi đầu cũng là người vận hành tài khoản, viết brief và trình bày báo cáo. Không có bước chuyển giao xuống một đội khác sau khi ký hợp đồng.'
  },
  {
    title: 'Làm theo sprint 2 tuần',
    text: 'Mỗi sprint bắt đầu bằng giả thuyết và danh sách việc, kết thúc bằng một buổi xem số liệu. Việc nào không tạo tín hiệu thì dừng, ngân sách chuyển sang việc đang hiệu quả.'
  },
  {
    title: 'Báo cáo theo lead và doanh thu',
    text: 'Traffic, lượt hiển thị và CTR vẫn được theo dõi, nhưng không dùng làm KPI chính. Mỗi kênh có một nhóm chỉ số xem hằng tuần:'
  }
];

const weeklyMetrics = [
  ['SEO', 'Visibility của nhóm từ khóa có ý định mua, số lead từ trang organic'],
  ['Quảng cáo', 'CPA, ROAS, tỷ lệ lead đạt chuẩn, truy vấn lãng phí'],
  ['CRO', 'Tỷ lệ điền form, gọi, đặt lịch, đặc biệt trên mobile']
];

const steps = [
  {title: 'Hiểu bài toán kinh doanh', text: 'Làm rõ mục tiêu, khách hàng, biên lợi nhuận và cách doanh nghiệp đang tạo ra doanh thu.'},
  {title: 'Audit dữ liệu và kênh hiện có', text: 'Xem website, tracking, tài khoản quảng cáo, đối thủ và hành trình tìm kiếm để biết đang mất cơ hội ở đâu.'},
  {title: 'Chọn việc làm trước', text: 'Xếp hạng việc theo tác động và độ khó. Chọn ít kênh, làm kỹ, thay vì dàn trải ngân sách.'},
  {title: 'Triển khai theo sprint', text: 'SEO, quảng cáo và nội dung chạy theo sprint 2 tuần, mỗi sprint có giả thuyết và chỉ số theo dõi.'},
  {title: 'Đo, giữ, sửa hoặc dừng', text: 'Nhân rộng việc tạo kết quả, sửa việc có tín hiệu, dừng việc không hiệu quả. Lặp lại.'}
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
            <p className={`meta ${styles.heroMeta}`}>SOHO Agency, Hà Nội và TP. Hồ Chí Minh</p>
            <h1 className={styles.heroTitle}>
              Marketing được đo bằng <em>lead và doanh thu</em>, không bằng lượt click.
            </h1>
            <div className={styles.heroLead}>
              <p>
                SOHO lập kế hoạch và trực tiếp triển khai SEO, quảng cáo, content và tracking cho doanh nghiệp Việt Nam. Mỗi sprint 2 tuần đều có giả thuyết, việc cần làm và chỉ số nghiệm thu.
              </p>
              <div className={styles.heroActions}>
                <Button href="#lien-he">Đặt lịch trao đổi</Button>
                <Button href="#cach-lam-viec" variant="text">Xem cách SOHO làm việc</Button>
              </div>
            </div>
            <nav className={styles.heroFocus} aria-label="Lĩnh vực chính">
              <p className={styles.heroFocusLabel}>SOHO làm gì</p>
              <ul>
                {focusAreas.map(area => (
                  <li key={area.href}><a href={sitePath(area.href)}>{area.label}</a></li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* Khách hàng */}
        <Section index="01" label="Khách hàng" variant="wide" spacing="sm" title="Một số doanh nghiệp SOHO đang làm cùng">
          <ul className={styles.clients}>
            {clients.map(client => (
              <li key={client.name} className={styles.client}>
                <span className={styles.clientLogo}>
                  <img src={sitePath(client.logo)} alt="" loading="lazy"/>
                </span>
                <a href={client.url} target="_blank" rel="noopener noreferrer" className={styles.clientName}>
                  {client.name}
                  <span className="visually-hidden"> (mở tab mới)</span>
                </a>
                <span className={styles.clientField}>{client.field}</span>
                <span className={styles.clientScope}>{client.scope}</span>
              </li>
            ))}
          </ul>
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
          title="Từ buổi gọi đầu tiên đến sprint thứ ba"
          intro={<p>Sprint đầu tiên thường bắt đầu sau 2 tuần audit <span className="placeholder">[CẦN XÁC NHẬN]</span>.</p>}
        >
          <NumberedList items={steps}/>
        </Section>

        {/* Bài viết */}
        <Section index="05" label="Bài viết" variant="wide" spacing="md" title="Ghi chép từ đội SOHO">
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
          index="06"
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
