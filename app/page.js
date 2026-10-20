import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/ui/Section';
import HomeHero from '../components/hero/HomeHero';
import Button from '../components/ui/Button';
import Faq from '../components/ui/Faq';
import CtaBand from '../components/ui/CtaBand';
import JourneyMatrix from '../components/diagrams/JourneyMatrix';
import BlogCard from '../components/BlogCard';
import LogoMarquee from '../components/proof/LogoMarquee';
import Testimonials from '../components/proof/Testimonials';
import ServicesGrid from '../components/home/ServicesGrid';
import Differentiators from '../components/home/Differentiators';
import ProjectShowcase from '../components/home/ProjectShowcase';
import ProcessAccordion from '../components/home/ProcessAccordion';
import {clients} from '../components/data/clients';
import {cases} from '../components/data/cases';
import {partners} from '../components/data/proof';
import {getCoreServices} from '../components/servicePagesData';
import {getLatestArticles} from '../components/blogData';
import {company} from '../components/data/company';
import {siteUrl} from '../components/paths';

/*
  Thứ tự theo hành trình nhận thức (brief Phase 3), mỗi khối trả lời một câu hỏi:
  Hero (SOHO là ai) → Trust (vì sao tin) → Dịch vụ (giải quyết gì) → Khác biệt (khác agency khác ở đâu)
  → Dự án (bằng chứng) → Quy trình (hợp tác thế nào) → Nhận xét → Bài viết (có chuyên môn không) → FAQ → Liên hệ.
  Câu chữ theo DESIGN.md mục 2.4.
*/
const process = [
  {title: 'Tiếp nhận và phân tích nhu cầu', text: 'Bạn gửi website và mục tiêu. SOHO xem các kênh bạn đang chạy, số liệu, đối thủ, rồi hẹn một buổi gọi 30 phút.', points: ['Xem website, quảng cáo, cách đo đang có', 'Gửi lại một trang ghi chú: chỗ nghẽn chính và 3 việc nên làm trước']},
  {title: 'Xây dựng chiến lược, đề xuất giải pháp', text: 'Xếp việc theo tác động và độ khó. Ít kênh, làm kỹ. Mỗi việc có con số cần đạt và cách đo.', points: ['Lộ trình 30 đến 90 ngày', 'Báo giá theo phạm vi việc, không bán gói cứng']},
  {title: 'Triển khai và quản lý dự án', text: 'Người lập kế hoạch cũng là người làm. Việc chia theo vòng 2 tuần, mỗi vòng có giả thuyết, danh sách việc và con số theo dõi.', points: ['Tài khoản quảng cáo, GA4 và báo cáo đứng tên bạn', 'Báo cáo tiến độ mỗi vòng']},
  {title: 'Đo lường, tối ưu và đồng hành', text: 'Mỗi 2 tuần nhìn lại số liệu: việc ra kết quả thì làm rộng ra, việc không ra thì dừng. Sau khi bàn giao, SOHO vẫn hỗ trợ khi bạn cần.', points: ['Báo cáo bằng khách hàng và doanh thu', 'Giữ, sửa hoặc dừng dựa trên số liệu']}
];
const faqs = [
  {q: 'SOHO cung cấp những dịch vụ gì?', a: 'Sáu dịch vụ chính: SEO website, Google Ads, Facebook và TikTok Ads, thiết kế website, nhận diện thương hiệu, thiết kế Mobile App. Ngoài ra có SEO cho AI tìm kiếm, SEO địa phương và Google Maps, tối ưu trang đích, nội dung và PR, đo lường GA4, tư vấn lộ trình 90 ngày. Bạn có thể làm một dịch vụ hoặc gộp theo mục tiêu.'},
  {q: 'Chi phí phụ thuộc vào yếu tố nào?', a: 'Vào phạm vi việc (số kênh, số trang, số mẫu thiết kế), mức độ cạnh tranh của ngành, ngân sách quảng cáo bạn định chi và thời gian triển khai. Ngân sách quảng cáo trả thẳng cho Google, Meta hay TikTok, tách riêng với phí dịch vụ. SOHO gửi báo giá cụ thể sau buổi trao đổi đầu tiên.'},
  {q: 'Quy trình hợp tác diễn ra thế nào?', a: 'Bạn gửi website và mục tiêu. SOHO xem các kênh đang chạy, hẹn một buổi gọi 30 phút, rồi gửi lại một trang ghi chú: chỗ nghẽn chính và 3 việc nên làm trước. Nếu làm tiếp, hai bên thống nhất phạm vi, ký hợp đồng và làm theo vòng 2 tuần.'},
  {q: 'Dự án mất bao lâu?', a: 'Tùy loại việc. Quảng cáo thường có tín hiệu sau vài tuần, SEO thường cần vài tháng. Website và nhận diện thương hiệu có mốc thời gian cố định ghi trong hợp đồng, tùy số trang và số hạng mục. SOHO chỉ đưa mốc cụ thể sau khi xem số liệu, không hứa trước.'},
  {q: 'SOHO có hỗ trợ sau triển khai không?', a: 'Có. Website có hướng dẫn quản trị và bảo trì, cập nhật khi cần. Bộ nhận diện có hướng dẫn thương hiệu để đội của bạn tự dùng đúng. Với SEO và quảng cáo, SOHO đồng hành theo từng vòng 2 tuần cho tới khi bạn đủ số liệu để tự quyết.'},
  {q: 'Tài khoản quảng cáo và số liệu thuộc về ai?', a: 'Thuộc về doanh nghiệp của bạn. Google Ads, Meta, GA4 và báo cáo đều đứng tên bạn, SOHO chỉ được cấp quyền. Dừng hợp tác thì bạn giữ nguyên toàn bộ.'}
];

export default function Home(){
  const latest = getLatestArticles(3);
  const google = partners.find(p => p.verified);
  // Dữ liệu doanh nghiệp: chỉ thông tin đã xác minh (xem components/data/company.js). Không thêm đánh giá sao hay số liệu chưa kiểm chứng.
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: `${siteUrl}/`,
    logo: `${siteUrl}/assets/brand/soho-logo-transparent.png`,
    image: `${siteUrl}/og/soho-og-v2.png`,
    telephone: company.phone ? `+84${company.phone.replace(/\s/g, '').replace(/^0/, '')}` : undefined,
    email: company.email,
    address: {'@type': 'PostalAddress', streetAddress: '19 Tạ Hiện, phường Cát Lái', addressLocality: 'TP. Hồ Chí Minh', addressCountry: 'VN'},
    areaServed: 'TP. Hồ Chí Minh',
    openingHoursSpecification: [{'@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00'}],
    sameAs: [...company.socials.filter(x => x.url).map(x => x.url), ...(google?.profileUrl ? [google.profileUrl] : [])]
  };

  return (
    <>
      <Header activeNav="home"/>
      <main id="main">
        <HomeHero/>

        <LogoMarquee clients={clients} label="Doanh nghiệp đang làm cùng SOHO"/>

        <Section id="dich-vu" title={<>Sáu việc SOHO làm <span className="hl">giỏi nhất</span></>} intro="Mỗi dịch vụ giải một chỗ nghẽn cụ thể trên đường khách tới đơn hàng." aside={<Button href="/dich-vu" variant="text" arrow="right">Xem đủ 12 dịch vụ</Button>}>
          <ServicesGrid services={getCoreServices()} partnerLabel={google ? `${google.name} ${google.year}` : null}/>
        </Section>

        <Section
          tone="soft"
          decor="target"
          title={<>Khác ở chỗ: <span className="hl">đo bằng doanh thu</span></>}
          intro="Khách đi qua ba chặng: tìm thấy bạn, cân nhắc, rồi mua. Ở mỗi chặng, mỗi kênh có một con số riêng, và tất cả gộp về doanh thu."
          spacing="lg"
        >
          <Differentiators/>
          <JourneyMatrix/>
        </Section>

        <Section id="du-an" tone="dark" title={<>Dự án nổi bật, <span className="hl">kể bằng kết quả</span></>} intro="Con số chỉ ghi khi dự án đã công bố." aside={<Button href="/ket-qua" variant="text" arrow="right">Xem tất cả dự án</Button>}>
          <ProjectShowcase items={cases}/>
        </Section>

        <Section id="quy-trinh" tone="gray" decor="flag" title={<>Hợp tác với SOHO <span className="hl">diễn ra thế nào</span></>} intro="Bốn bước, áp dụng cho mọi dự án.">
          <ProcessAccordion items={process}/>
        </Section>

        <Section title={<>Khách hàng <span className="hl">nói gì</span></>}>
          <Testimonials/>
        </Section>

        <Section tone="gray" title={<>Ghi chép <span className="hl">mới nhất</span></>} intro="Hướng dẫn từng bước về SEO, quảng cáo và đo lường, viết để đội marketing của bạn làm theo được." aside={<Button href="/blog" variant="text" arrow="right">Đọc tất cả bài viết</Button>}>
          <div className={styles.blogGrid}>{latest.map((post, i) => <BlogCard key={post.slug} post={post} delay={i * 100}/>)}</div>
        </Section>

        <Section decor="chat-bubble" title={<>Câu hỏi <span className="hl">trước khi liên hệ</span></>} spacing="lg">
          <div className={styles.faqWrap}><Faq items={faqs}/></div>
        </Section>

        <CtaBand/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(orgLd)}}/>
      </main>
      <Footer/>
    </>
  );
}
