import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/hero/Hero';
import {AboutVisual} from '../../components/hero/Visuals';
import PageHeader from '../../components/ui/PageHeader';
import Section from '../../components/ui/Section';
import NumberedList from '../../components/ui/NumberedList';
import ImageSlot from '../../components/ui/ImageSlot';
import CtaBand from '../../components/ui/CtaBand';
import Fill from '../../components/ui/Fill';
import {company} from '../../components/data/company';

export const metadata = {
  title: 'Giới thiệu',
  description: 'SOHO Agency là đội tư vấn và triển khai digital marketing tại Hà Nội và TP. Hồ Chí Minh, làm SEO, quảng cáo, content và đo lường theo lead và doanh thu.'
};

const principles = [
  {title: 'Chủ động triển khai, không chỉ gửi khuyến nghị', text: 'SOHO nhận cả phần thực thi: sửa kỹ thuật, dựng chiến dịch, viết nội dung, cài tracking.'},
  {title: 'Minh bạch dữ liệu, ngân sách và lý do ưu tiên', text: 'Bạn biết tiền đang chi vào đâu, việc nào đang làm và vì sao.'},
  {title: 'SEO, quảng cáo, content và đo lường trong một hệ thống', text: 'Từ khóa tốt trên Ads thành chủ đề SEO, câu hỏi của khách thành nội dung.'},
  {title: 'Làm theo sprint để thử, học và mở rộng đúng lúc', text: 'Mỗi 2 tuần nhìn lại số liệu và quyết định giữ, sửa hay dừng.'}
];
const team = [
  {name: 'Nguyễn Thế Tuấn Anh', role: 'Head of Growth Strategy', verify: true},
  {name: 'Lê Hoàng Yến', role: 'Strategy Director'},
  {name: 'Trần Minh Quân', role: 'Performance Marketing Lead'},
  {name: 'Đỗ Gia Huy', role: 'CRO & Data Analyst'},
  {name: 'Phạm Thùy Linh', role: 'Content Strategist'}
];

export default function AboutPage(){
  return (
    <>
      <Header activeNav="about"/>
      <main>
        <Hero tone="about" crumbs={[{label: 'Giới thiệu'}]} eyebrow="Về SOHO" title="Đội marketing nói bằng số" tagline="Hà Nội và TP. Hồ Chí Minh." visual={<AboutVisual/>}/>
        <PageHeader title="Marketing đo được, từ chiến lược đến triển khai" lead="SOHO đồng hành từ chiến lược đến triển khai, ưu tiên những việc tạo tác động rõ tới lead, doanh thu và lợi nhuận."/>
        <Section title={<>SOHO là <span className="hl">ai</span></>}>
          <div className={styles.split}>
            <div className="prose" data-reveal="">
              <p>SOHO Agency được thành lập năm <Fill value={company.foundedYear} need="CẦN NĂM THÀNH LẬP"/>, làm việc tại {company.regions} với đội ngũ <Fill value={company.teamSize} need="CẦN QUY MÔ ĐỘI NGŨ"/> người.</p>
              <p>Khách hàng của SOHO thường là doanh nghiệp đã có sản phẩm và doanh thu, đã thử SEO hoặc quảng cáo nhưng chưa thấy rõ kênh nào đang mang lại khách hàng. Việc đầu tiên SOHO làm luôn là đo cho đúng, sau đó mới tăng ngân sách.</p>
              <p>Văn phòng: <Fill value={company.address} need="CẦN ĐỊA CHỈ"/></p>
            </div>
            <div data-reveal="" style={{'--reveal-delay': '150ms'}}><ImageSlot src={null} need="Ảnh văn phòng hoặc đội ngũ SOHO" size="1200×900" ratio="4/3"/></div>
          </div>
        </Section>
        <Section tone="gray" title={<>Bốn nguyên tắc <span className="hl">làm việc</span></>}>
          <NumberedList items={principles}/>
        </Section>
        <Section title={<>Những người bạn sẽ <span className="hl">làm việc cùng</span></>}>
          <ul className={styles.team}>
            {team.map((p, i) => (
              <li key={p.name} data-reveal="" style={{'--reveal-delay': `${i * 80}ms`}}>
                <ImageSlot src={null} need={`Ảnh ${p.name}`} size="800×800" ratio="1/1"/>
                <p className={styles.name}>{p.name}</p>
                <p className={styles.role}>{p.role}{p.verify && <> <span className="placeholder">[CẦN XÁC NHẬN chức danh]</span></>}</p>
              </li>
            ))}
          </ul>
        </Section>
        <CtaBand title={<>Bắt đầu bằng <span className="hl">một cuộc trao đổi</span></>} text="Cho SOHO biết website, thị trường và điều bạn muốn cải thiện trong quý tới."/>
      </main>
      <Footer/>
    </>
  );
}
