import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHeader from '../../components/ui/PageHeader';
import Section from '../../components/ui/Section';
import ContactForm from '../../components/ContactForm';
import Fill from '../../components/ui/Fill';
import {company} from '../../components/data/company';

export const metadata = {
  title: 'Liên hệ',
  description: 'Gửi website và mục tiêu hiện tại cho SOHO Agency. SOHO xem các kênh bạn đang chạy và đề xuất việc nên làm trước.'
};

const steps = [
  'SOHO xem website và các kênh bạn đang chạy.',
  'Hẹn một buổi gọi 30 phút để hỏi thêm về mục tiêu và ngân sách.',
  'Gửi lại một trang ghi chú: điểm nghẽn chính và 3 việc nên làm trước.'
];

export default function ContactPage(){
  return (
    <>
      <Header activeNav="contact"/>
      <main>
        <PageHeader
          crumbs={[{label: 'Liên hệ'}]}
          title="Kể cho SOHO bài toán hiện tại"
          lead="Không cần chuẩn bị brief. Website và vài dòng về mục tiêu là đủ để bắt đầu."
          bullets={steps}
          aside={<div className={styles.formCard}><ContactForm/></div>}
        />
        <Section title={<>Thông tin <span className="hl">liên hệ</span></>} spacing="sm">
          <dl className={styles.info}>
            <div><dt>Email</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
            <div><dt>Điện thoại</dt><dd><Fill value={company.phone} need="CẦN SỐ ĐIỆN THOẠI"/></dd></div>
            <div><dt>Văn phòng</dt><dd><Fill value={company.address} need="CẦN ĐỊA CHỈ"/></dd></div>
            <div><dt>Khu vực</dt><dd>{company.regions}</dd></div>
            <div><dt>Giờ làm việc</dt><dd><Fill value={company.hours} need="CẦN GIỜ LÀM VIỆC"/></dd></div>
          </dl>
        </Section>
      </main>
      <Footer/>
    </>
  );
}
