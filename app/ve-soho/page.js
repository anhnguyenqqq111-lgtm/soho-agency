import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHeader from '../../components/ui/PageHeader';
import {images} from '../../components/data/images';
import Section from '../../components/ui/Section';
import NumberedList from '../../components/ui/NumberedList';
import CtaBand from '../../components/ui/CtaBand';
import Fill from '../../components/ui/Fill';
import {company} from '../../components/data/company';

export const metadata = {
  title: 'Về SOHO',
  description: 'SOHO Agency là đội tư vấn và triển khai digital marketing tại Hà Nội và TP. Hồ Chí Minh, làm SEO, quảng cáo, content và đo lường theo lead và doanh thu.'
};

const principles = [
  {
    title: 'Chủ động triển khai, không chỉ gửi khuyến nghị',
    text: 'Một bản audit dài không thay đổi được gì nếu không ai làm. SOHO nhận cả phần thực thi: sửa kỹ thuật, dựng chiến dịch, viết nội dung, cài tracking.'
  },
  {
    title: 'Minh bạch dữ liệu, ngân sách và lý do ưu tiên',
    text: 'Bạn biết tiền đang chi vào đâu, việc nào đang làm và vì sao việc đó được làm trước việc khác.'
  },
  {
    title: 'SEO, quảng cáo, content và đo lường trong một hệ thống',
    text: 'Các kênh chia sẻ chung dữ liệu và mục tiêu. Từ khóa tốt trên Ads trở thành chủ đề SEO, câu hỏi của khách trở thành nội dung.'
  },
  {
    title: 'Làm theo sprint để thử, học và mở rộng đúng lúc',
    text: 'Thay vì kế hoạch cứng 12 tháng, mỗi 2 tuần nhìn lại số liệu và quyết định giữ, sửa hay dừng.'
  }
];

// Lấy từ tác giả đang xuất hiện trong blog và bài viết dịch vụ.
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
        <PageHeader
          image={images.pageAbout}
          crumbs={[{label: 'Về SOHO'}]}
          title="Marketing đo được, từ chiến lược đến triển khai"
          lead="SOHO đồng hành từ chiến lược đến triển khai, ưu tiên những việc tạo tác động rõ tới lead, doanh thu và lợi nhuận."
        />

        <Section index="01" label="Giới thiệu" spacing="sm">
          <div className="prose">
            <p>
              SOHO Agency được thành lập năm <Fill value={company.foundedYear} need="CẦN NĂM THÀNH LẬP"/>, hiện làm việc tại {company.regions} với đội ngũ <Fill value={company.teamSize} need="CẦN QUY MÔ ĐỘI NGŨ"/> người.
            </p>
            <p>
              Khách hàng của SOHO thường là doanh nghiệp đã có sản phẩm và doanh thu, đã thử SEO hoặc quảng cáo nhưng chưa thấy rõ kênh nào đang mang lại khách hàng. Việc đầu tiên SOHO làm luôn là đo cho đúng, sau đó mới tăng ngân sách.
            </p>
            <p>
              Văn phòng: <Fill value={company.address} need="CẦN ĐỊA CHỈ"/>
            </p>
          </div>
        </Section>

        <Section index="02" label="Nguyên tắc" title="Bốn nguyên tắc làm việc">
          <NumberedList items={principles}/>
        </Section>

        <Section index="03" label="Đội ngũ" tone="paper2" variant="wide" title="Những người bạn sẽ làm việc cùng">
          <ul className={styles.team}>
            {team.map(person => (
              <li key={person.name}>
                <p className={styles.name}>{person.name}</p>
                <p className={styles.role}>
                  {person.role}
                  {person.verify && <> <span className="placeholder">[CẦN XÁC NHẬN chức danh]</span></>}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <CtaBand
          title="Bắt đầu bằng một cuộc trao đổi"
          text="Cho SOHO biết website, thị trường và điều bạn muốn cải thiện trong quý tới."
          label="Liên hệ SOHO"
        />
      </main>
      <Footer/>
    </>
  );
}
