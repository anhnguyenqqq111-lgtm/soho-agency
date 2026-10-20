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

export const metadata = {
  alternates: {canonical: '/ve-soho/'},
  title: 'Giới thiệu',
  description:
    'SOHO Agency (Công ty TNHH SOHO Agency) là đội SEO, quảng cáo, nội dung và đo lường tại TP.HCM, Google Partner 2026. Lập kế hoạch và tự triển khai, báo cáo bằng doanh thu.'
};

const principles = [
  {title: 'Tự tay làm, không chỉ gửi khuyến nghị', text: 'SOHO nhận cả phần làm: sửa lỗi kỹ thuật, dựng chiến dịch, viết nội dung, cài đặt cách đo.'},
  {title: 'Công khai số liệu, ngân sách và lý do làm trước', text: 'Bạn biết tiền đang chi vào đâu, việc nào đang làm và vì sao.'},
  {title: 'SEO, quảng cáo, nội dung và đo lường cùng một đội', text: 'Từ khóa ra đơn trên quảng cáo thành chủ đề SEO, câu hỏi của khách thành bài viết.'},
  {title: 'Làm theo vòng 2 tuần để thử, học và làm rộng ra đúng lúc', text: 'Mỗi 2 tuần nhìn lại số liệu và quyết định giữ, sửa hay dừng.'}
];
const team = [
  {name: 'Nguyễn Thế Tuấn Anh', role: 'Phụ trách chiến lược tăng trưởng', verify: true},
  {name: 'Lê Hoàng Yến', role: 'Giám đốc chiến lược'},
  {name: 'Trần Minh Quân', role: 'Trưởng nhóm quảng cáo'},
  {name: 'Đỗ Gia Huy', role: 'Phân tích số liệu và tối ưu trang đích'},
  {name: 'Phạm Thùy Linh', role: 'Chiến lược nội dung'}
];

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
              SOHO Agency, <span className="hl">đội marketing ở TP.HCM</span>
            </>
          }
          tagline="Lập kế hoạch và tự tay triển khai SEO, quảng cáo, nội dung, đo lường. Báo cáo bằng doanh thu."
          visual={<AboutVisual />}
        />
        <PageHeader
          title="Một đội vừa lập kế hoạch, vừa tự làm"
          lead="Người lên kế hoạch cũng là người làm. Không chuyển việc cho đội khác sau khi ký hợp đồng, nên điều đã hứa trong buổi đầu là điều được làm."
        />
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
                SOHO đã làm cho một khu nghỉ dưỡng ở Mũi Né, một đơn vị thiết kế thi công, một nhà phân phối đồng hồ cao cấp và một studio ảnh cưới.{' '}
                <a href={sitePath('/ket-qua')}>Xem SOHO đã làm gì</a>.
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
              Những người bạn sẽ <span className="hl">làm việc cùng</span>
            </>
          }
        >
          <ul className={styles.team}>
            {team.map((p, i) => (
              <li key={p.name} data-reveal="" style={{'--reveal-delay': `${i * 80}ms`}}>
                {p.photo ? (
                  <img src={sitePath(p.photo)} alt={p.name} className={styles.photo} loading="lazy" width="800" height="800" />
                ) : (
                  <span className={styles.mono} aria-hidden="true">
                    {p.name.split(' ').slice(-1)[0][0]}
                  </span>
                )}
                <p className={styles.name}>{p.name}</p>
                <p className={styles.role}>{p.role}</p>
              </li>
            ))}
          </ul>
        </Section>
        <CtaBand
          title={
            <>
              Bắt đầu bằng <span className="hl">một cuộc trao đổi</span>
            </>
          }
          text="Cho SOHO biết website, thị trường và điều bạn muốn cải thiện trong quý tới."
        />
      </main>
      <Footer />
    </>
  );
}
