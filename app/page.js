import styles from './page.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/ui/Section';
import Faq from '../components/ui/Faq';
import CtaBand from '../components/ui/CtaBand';
import JourneyMatrix from '../components/diagrams/JourneyMatrix';
import LogoMarquee from '../components/proof/LogoMarquee';
import ProblemPicker from '../components/sq/ProblemPicker';
import Button from '../components/ui/Button';
import {
  HomeHeroSq,
  PersonInCharge,
  ProcessSteps,
  ReportExplainer,
  BlogSection,
  ResultsScatter,
  ProjectsSection,
  QuotesSection,
  AccountOwnership,
  AboutSoho
} from '../components/sq/Blocks';
import {clients} from '../components/data/clients';
import {partners} from '../components/data/proof';
import {getLatestArticles} from '../components/blogData';
import {company} from '../components/data/company';
import {PAGE_CTA} from '../components/data/contactVariants';
import {siteUrl} from '../components/paths';

/*
  Trang chủ bản 12 (canvas "Bản vuông, gọn", 31/10/2026). Đường đọc:
  Nhận biết vấn đề: hero định vị (người thật) → logo khách → "Bạn đang gặp chuyện nào?" → ba chặng "đo bằng doanh thu"
  Cân nhắc: một người phụ trách → quy trình 4 bước → báo cáo bằng lời thường → bài viết
  Củng cố niềm tin: kết quả thật (thẻ nghiêng) → dự án → lời khách → tài khoản đứng tên bạn → về SOHO → câu hỏi thường gặp
  Để lại liên hệ: form live.
  Chữ viết theo docs/redesign/WRITING_GUIDE.md.
*/
const faqs = [
  {
    q: 'SOHO cung cấp những dịch vụ gì?',
    a: 'Sáu dịch vụ chính: SEO website, Google Ads, Facebook và TikTok Ads, thiết kế website, nhận diện thương hiệu, thiết kế Mobile App. Ngoài ra có SEO cho AI tìm kiếm, SEO địa phương và Google Maps, tối ưu trang đích, nội dung và PR, đo lường GA4, tư vấn lộ trình 90 ngày. Bạn có thể làm một dịch vụ hoặc gộp theo mục tiêu.'
  },
  {
    q: 'Chi phí phụ thuộc vào yếu tố nào?',
    a: 'Vào phạm vi việc (số kênh, số trang, số mẫu thiết kế), mức độ cạnh tranh của ngành, ngân sách quảng cáo bạn định chi và thời gian triển khai. Ngân sách quảng cáo trả thẳng cho Google, Meta hay TikTok, tách riêng với phí dịch vụ. SOHO gửi báo giá cụ thể sau buổi trao đổi đầu tiên.'
  },
  {
    q: 'Quy trình hợp tác diễn ra thế nào?',
    a: 'Bạn gửi website và mục tiêu. SOHO xem các kênh đang chạy, hẹn một buổi gọi 30 phút, rồi gửi lại một trang ghi chú: chỗ nghẽn chính và 3 việc nên làm trước. Nếu làm tiếp, hai bên thống nhất phạm vi, ký hợp đồng và làm theo vòng 2 tuần.'
  },
  {
    q: 'Dự án mất bao lâu?',
    a: 'Tùy loại việc. Quảng cáo thường có tín hiệu sau vài tuần, SEO thường cần vài tháng. Website và nhận diện thương hiệu có mốc thời gian cố định ghi trong hợp đồng, tùy số trang và số hạng mục. SOHO chỉ đưa mốc cụ thể sau khi xem số liệu, không hứa trước.'
  },
  {
    q: 'SOHO có hỗ trợ sau triển khai không?',
    a: 'Có. Website có hướng dẫn quản trị và bảo trì, cập nhật khi cần. Bộ nhận diện có hướng dẫn thương hiệu để đội của bạn tự dùng đúng. Với SEO và quảng cáo, SOHO đồng hành theo từng vòng 2 tuần cho tới khi bạn đủ số liệu để tự quyết.'
  },
  {
    q: 'Tài khoản quảng cáo và số liệu thuộc về ai?',
    a: 'Thuộc về doanh nghiệp của bạn. Google Ads, Meta, GA4 và báo cáo đều đứng tên bạn, SOHO chỉ được cấp quyền. Dừng hợp tác thì bạn giữ nguyên toàn bộ.'
  }
];

export default function Home() {
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
    logo: `${siteUrl}/assets/brand/approved/soho-logo-open-corner.png`,
    image: `${siteUrl}/og/soho-og-v2.png`,
    telephone: company.phone ? `+84${company.phone.replace(/\s/g, '').replace(/^0/, '')}` : undefined,
    email: company.email,
    address: {'@type': 'PostalAddress', streetAddress: '19 Tạ Hiện, phường Cát Lái', addressLocality: 'TP. Hồ Chí Minh', addressCountry: 'VN'},
    areaServed: 'TP. Hồ Chí Minh',
    openingHoursSpecification: [
      {'@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00'}
    ],
    sameAs: [...company.socials.filter(x => x.url).map(x => x.url), ...(google?.profileUrl ? [google.profileUrl] : [])]
  };

  return (
    <>
      <Header activeNav="home" />
      <main id="main">
        {/* Nhận biết vấn đề */}
        <HomeHeroSq />
        <LogoMarquee clients={clients} label="Doanh nghiệp đang làm cùng SOHO" />

        <Section
          id="dich-vu"
          tone="soft"
          kicker="Dịch vụ"
          title="Bạn đang gặp chuyện nào?"
          intro="Chọn tình huống giống bạn nhất. SOHO nói rõ vì sao chuyện đó hay xảy ra, nên làm gì trước, và khi nào chưa nên bỏ tiền."
          aside={
            <Button href="/dich-vu" variant="secondary" arrow="right">
              Xem đủ 12 dịch vụ
            </Button>
          }
        >
          <ProblemPicker idPrefix="home-pk" />
        </Section>

        <Section
          id="do-bang-doanh-thu"
          kicker="Cách SOHO đo"
          title={
            <>
              Khác ở chỗ: <span className="hl">đo bằng doanh thu</span>
            </>
          }
          intro="Khách đi qua ba chặng: tìm thấy bạn, cân nhắc, rồi mua. Ở mỗi chặng, mỗi kênh có một con số riêng, và tất cả gộp về doanh thu."
        >
          <JourneyMatrix />
        </Section>

        {/* Cân nhắc */}
        <PersonInCharge />
        <ProcessSteps />
        <ReportExplainer />
        <BlogSection posts={latest} />

        {/* Củng cố niềm tin */}
        <ResultsScatter />
        <ProjectsSection />
        <QuotesSection />
        <AccountOwnership />
        <AboutSoho />

        <Section id="hoi-dap" kicker="Hỏi đáp" title="Câu hỏi trước khi liên hệ" spacing="md">
          <div className={styles.faqWrap}>
            <Faq items={faqs} />
          </div>
        </Section>

        {/* Để lại liên hệ: form live */}
        <CtaBand
          title={
            <>
              {PAGE_CTA.home.lead} <span className="hl">{PAGE_CTA.home.hl}</span>
            </>
          }
          text={PAGE_CTA.home.text}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(orgLd)}} />
      </main>
      <Footer />
    </>
  );
}
