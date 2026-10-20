import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/ui/Section';
import CtaBand from '../../components/ui/CtaBand';
import ProjectGrid from '../../components/proof/ProjectGrid';
import GrowthDiagnostic from '../../components/services/GrowthDiagnostic';
import CustomerJourneyCanvas from '../../components/services/CustomerJourneyCanvas';
import {HubHero, CoreCapabilities, SpecialistSolutions, ConnectedSolutions} from '../../components/services/HubBlocks';
import {servicePages, getCoreServices} from '../../components/servicePagesData';
import {cases} from '../../components/data/cases';

export const metadata = {
  alternates: {canonical: '/dich-vu/'},
  title: 'Dịch vụ',
  description:
    'Dịch vụ marketing SOHO Agency theo hành trình khách hàng: chọn theo vấn đề kinh doanh để biết nên bắt đầu từ SEO, Google Ads, website hay thương hiệu.'
};

/*
  Hub dịch vụ (docs/services/CUSTOMER_JOURNEY_ARCHITECTURE.md): bắt đầu từ vấn đề kinh doanh, không từ tên kênh.
  Thứ tự: hero có bản đồ hành trình → chẩn đoán theo vấn đề → bản đồ điểm chạm tương tác → 6 năng lực chính
  → 6 giải pháp chuyên biệt theo ngữ cảnh → kết hợp minh họa → dự án → liên hệ. Mỗi dịch vụ chỉ xuất hiện có lý do ở mỗi khối.
*/
export default function ServicesIndexPage() {
  const names = Object.fromEntries(servicePages.map(s => [s.slug, s.menuTitle]));
  const descs = Object.fromEntries(servicePages.map(s => [s.slug, s.menuDesc]));
  const caseInfo = Object.fromEntries(cases.map(c => [c.slug, {name: c.name, result: c.result}]));
  return (
    <>
      <Header activeNav="services" />
      <main id="main">
        <HubHero />
        <Section
          id="chan-doan"
          title={
            <>
              Chọn theo <span className="hl">vấn đề</span>, không theo tên kênh
            </>
          }
          intro="Mỗi vấn đề kinh doanh thường nghẽn ở một điểm chạm. Chọn vấn đề gần với bạn nhất để xem nên bắt đầu từ đâu."
        >
          <GrowthDiagnostic names={names} descs={descs} cases={caseInfo} />
        </Section>
        <Section
          id="hanh-trinh"
          tone="gray"
          title={
            <>
              Mỗi chặng, khách cần <span className="hl">một điều khác</span>
            </>
          }
          intro="Bốn chặng và một nền tảng chạy xuyên suốt. Khách có thể vào từ bất kỳ chặng nào và không đi theo thứ tự; không doanh nghiệp nào cần đủ mọi dịch vụ."
        >
          <CustomerJourneyCanvas names={names} />
        </Section>
        <Section
          id="nang-luc"
          title={
            <>
              6 năng lực <span className="hl">chính</span>
            </>
          }
          intro="Những việc SOHO làm nhiều nhất, mỗi việc gắn với một chặng trên hành trình."
        >
          <CoreCapabilities services={getCoreServices()} />
        </Section>
        <Section
          id="chuyen-biet"
          tone="gray"
          title={
            <>
              Giải pháp chuyên biệt, <span className="hl">khi cần đến</span>
            </>
          }
          intro="Không phải doanh nghiệp nào cũng cần. Mỗi giải pháp dưới đây dành cho một tình huống cụ thể."
        >
          <SpecialistSolutions names={names} />
        </Section>
        <Section
          id="ket-hop"
          title={
            <>
              Khi các dịch vụ <span className="hl">đi cùng nhau</span>
            </>
          }
          intro="Ví dụ về cách các điểm chạm bổ trợ nhau. Đây là quan hệ chiến lược để tham khảo, không phải gói bắt buộc hay kết quả được đảm bảo."
        >
          <ConnectedSolutions names={names} />
        </Section>
        <Section
          id="du-an"
          tone="gray"
          title={
            <>
              Dự án <span className="hl">đã làm</span>
            </>
          }
          intro="Con số chỉ ghi khi dự án đã công bố."
        >
          <ProjectGrid projects={cases} />
        </Section>
        <CtaBand
          title={
            <>
              Chưa biết điểm chạm nào <span className="hl">đang nghẽn?</span>
            </>
          }
          text="Gửi website và kênh đang chạy. SOHO chỉ ra điểm chạm nghẽn nhất và việc nên làm trước, không đề xuất làm mọi dịch vụ."
        />
      </main>
      <Footer />
    </>
  );
}
