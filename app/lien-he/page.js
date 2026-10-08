import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import {sitePath} from '../../components/paths';
import Fill from '../../components/ui/Fill';
import {company} from '../../components/data/company';

export const metadata = {
  title: 'Liên hệ',
  description: 'Gửi website và mục tiêu hiện tại cho SOHO Agency. SOHO xem các kênh bạn đang chạy và đề xuất việc nên làm trước.'
};

const EMAIL = company.email;

const steps = [
  'SOHO xem website và các kênh bạn đang chạy.',
  'Hẹn một buổi gọi 30 phút để hỏi thêm về mục tiêu và ngân sách.',
  'Gửi lại một trang ghi chú: điểm nghẽn chính và 3 việc nên làm trước.'
];

export default function ContactPage(){
  return (
    <>
      <Header activeNav="contact"/>
      <main className={styles.page}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.intro}>
            <nav aria-label="Breadcrumb" className={styles.crumbs}>
              <a href={sitePath('/')}>Trang chủ</a> <span aria-hidden="true">/</span> <span aria-current="page">Liên hệ</span>
            </nav>
            <h1 className={styles.title}>Kể cho SOHO bài toán hiện tại</h1>
            <p className={styles.lead}>Không cần chuẩn bị brief. Website và vài dòng về mục tiêu là đủ để bắt đầu.</p>

            <h2 className={styles.subTitle}>Sau khi bạn gửi form</h2>
            <ol className={styles.steps}>
              {steps.map(step => <li key={step}>{step}</li>)}
            </ol>

            <dl className={styles.info}>
              <div><dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
              <div><dt>Điện thoại</dt><dd><Fill value={company.phone} need="CẦN SỐ ĐIỆN THOẠI"/></dd></div>
              <div><dt>Văn phòng</dt><dd><Fill value={company.address} need="CẦN ĐỊA CHỈ"/></dd></div>
              <div><dt>Khu vực</dt><dd>{company.regions}</dd></div>
              <div><dt>Giờ làm việc</dt><dd><Fill value={company.hours} need="CẦN GIỜ LÀM VIỆC"/></dd></div>
            </dl>
          </div>
          <div className={styles.form}>
            <ContactForm/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
