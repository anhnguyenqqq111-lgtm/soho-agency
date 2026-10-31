import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/hero/Hero';
import {AboutVisual} from '../../components/hero/Visuals';
import PageHeader from '../../components/ui/PageHeader';
import Section from '../../components/ui/Section';
import NumberedList from '../../components/ui/NumberedList';
import PartnerBadge from '../../components/proof/PartnerBadge';
import {partners} from '../../components/data/proof';
import {sitePath} from '../../components/paths';
import CtaBand from '../../components/ui/CtaBand';
import {company} from '../../components/data/company';
import {PersonFeature, AccountOwnership} from '../../components/sq/Blocks';
import {team} from '../../components/data/team';
import {PAGE_CTA} from '../../components/data/contactVariants';

export const metadata = {
  alternates: {canonical: '/ve-soho/'},
  title: 'Giới thiệu',
  description:
    'SOHO Agency (Công ty TNHH SOHO Agency) là đội SEO, quảng cáo, nội dung và đo lường tại TP.HCM, Google Partner 2026. Lên kế hoạch, trực tiếp triển khai và báo cáo bằng doanh thu.'
};

const principles = [
  {title: 'Tự tay làm, không chỉ gửi đề xuất', text: 'SOHO nhận cả phần triển khai: sửa lỗi kỹ thuật, dựng chiến dịch, viết nội dung, cài đặt đo lường.'},
  {title: 'Minh bạch số liệu, ngân sách và lý do ưu tiên', text: 'Bạn biết tiền đang chi vào đâu, việc nào đang làm và vì sao làm việc đó trước.'},
  {title: 'SEO, quảng cáo, nội dung và đo lường trong cùng một đội', text: 'Từ khóa ra đơn trên quảng cáo trở thành chủ đề SEO, câu hỏi của khách trở thành bài viết.'},
  {title: 'Làm theo chu kỳ 2 tuần: thử, đo rồi mở rộng đúng lúc', text: 'Cứ 2 tuần, SOHO cùng bạn xem lại số liệu và quyết định giữ, sửa hay dừng.'}
];
// Đội trên web: đúng những người trong components/data/team.js (SOHO chốt 31/10/2026).
const teamList = team.map(p => ({name: p.name, title: p.title, role: p.role, photo: p.photo, width: p.width, height: p.height}));

export default function AboutPage() {
  const google = partners.find(p => p.verified && p.logo);
  return (
    <>
      <Header activeNav="about" />
      <main id="main">
        <Hero
          tone="about"
          crumbs={[{label: 'Giới thiệu'}]}
          title={
            <>
              SOHO Agency: đội marketing online cho <span className="hl">doanh nghiệp vừa và nhỏ</span> tại TP.HCM
            </>
          }
          tagline="SOHO lên kế hoạch và trực tiếp triển khai SEO, quảng cáo, website và nội dung cho doanh nghiệp đã có sản phẩm, đã có khách hàng. Mỗi tháng bạn nhận báo cáo ngắn gọn, dễ hiểu về số khách liên hệ và hiệu quả từng kênh."
          visual={<AboutVisual />}
        />
        <PageHeader
          title="SOHO là lựa chọn của chủ doanh nghiệp muốn biết rõ tiền marketing đi đâu"
          lead="Người lên kế hoạch cũng là người làm. Sau khi ký hợp đồng, SOHO không chuyển việc cho đội khác, nên những gì đã thống nhất ở buổi đầu sẽ được làm đúng như vậy."
        />
        <PersonFeature person="pm" />
        <PersonFeature person="mkt" tone="white" reverse />
        <Section
          title={
            <>
              SOHO là <span className="hl">ai</span>
            </>
          }
        >
          <div className={styles.split}>
            <div className="prose" data-reveal="">
              <p>SOHO Agency (Công ty TNHH SOHO Agency) làm việc tại TP.HCM, văn phòng ở {company.address}.</p>
              <p>
                Khách của SOHO thường là doanh nghiệp đã có sản phẩm và doanh thu, đã thử SEO hoặc quảng cáo nhưng chưa thấy rõ kênh nào đang mang khách về.
                Việc đầu tiên SOHO làm luôn là đo cho đúng, rồi mới tăng ngân sách.
              </p>
              <p>
                SOHO đã làm cho một khu nghỉ dưỡng ở Mũi Né, một đơn vị thiết kế thi công, một nhà phân phối đồng hồ cao cấp, hai studio ảnh, một công ty logistics và một xưởng may.{' '}
                <a href={sitePath('/ket-qua')}>Xem các dự án tiêu biểu</a>.
              </p>
            </div>
            <aside className={styles.facts} data-reveal="" style={{'--reveal-delay': '150ms'}}>
              {google && (
                <div className={styles.factBadge}>
                  <PartnerBadge partner={google} size={64} showNeed={false} tipId="tip-partner-about" />
                  <p>
                    <strong>
                      {google.name} {google.year}
                    </strong>
                    Google xác nhận qua hồ sơ đối tác công khai.
                  </p>
                </div>
              )}
              <dl>
                <div>
                  <dt>Điện thoại</dt>
                  <dd>
                    <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Giờ làm việc</dt>
                  <dd>{company.hours}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </Section>
        <Section
          tone="gray"
          decor="megaphone"
          title={
            <>
              Bốn nguyên tắc <span className="hl">làm việc</span>
            </>
          }
        >
          <NumberedList items={principles} />
        </Section>
        <Section
          title={
            <>
              Đội ngũ <span className="hl">SOHO</span>
            </>
          }
        >
          <ul className={styles.team}>
            {teamList.map((p, i) => (
              <li key={p.name} data-reveal="" style={{'--reveal-delay': `${i * 80}ms`}}>
                <img src={sitePath(p.photo)} alt={p.name} className={styles.photo} loading="lazy" width={p.width} height={p.height} />
                <p className={styles.name}>{p.name}</p>
                <p className={styles.title}>{p.title}</p>
                <p className={styles.role}>{p.role}</p>
              </li>
            ))}
          </ul>
        </Section>
        <AccountOwnership tone="tint" />
        <CtaBand
          title={
            <>
              {PAGE_CTA.about.lead} <span className="hl">{PAGE_CTA.about.hl}</span>
            </>
          }
          text={PAGE_CTA.about.text}
        />
      </main>
      <Footer />
    </>
  );
}
