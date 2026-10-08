import styles from './Footer.module.css';
import {sitePath} from './paths';
import {servicePages} from './servicePagesData';
import {solutionPages} from './solutionPagesData';

const EMAIL = 'hello@sohoagency.vn';

export default function Footer(){
  const year = new Date().getFullYear();

  const columns = [
    {
      title: 'Dịch vụ',
      links: servicePages.map(s => ({label: s.menuTitle, href: `/dich-vu/${s.slug}`}))
    },
    {
      title: 'Giải pháp',
      links: solutionPages.map(s => ({label: s.title, href: `/giai-phap/${s.slug}`}))
    },
    {
      title: 'Công ty',
      links: [
        {label: 'Kết quả', href: '/ket-qua'},
        {label: 'Blog', href: '/blog'},
        {label: 'Về SOHO', href: '/ve-soho'},
        {label: 'Liên hệ', href: '/lien-he'}
      ]
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <a href={sitePath('/')} className={styles.logo} aria-label="SOHO Agency, về trang chủ">
            <img src={sitePath('/brand/soho-logo-white-crop.svg')} alt="SOHO Agency" width="568" height="234"/>
          </a>
          <p className={styles.about}>
            SOHO lập kế hoạch và trực tiếp triển khai SEO, quảng cáo, content và đo lường cho doanh nghiệp Việt Nam. Mỗi việc đều gắn với một chỉ số lead hoặc doanh thu.
          </p>
        </div>

        <div className={styles.grid}>
          {columns.map(col => (
            <div key={col.title}>
              <h2 className={styles.colTitle}>{col.title}</h2>
              <ul className={styles.list}>
                {col.links.map(link => (
                  <li key={link.href}><a href={sitePath(link.href)}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className={styles.colTitle}>Liên hệ</h2>
            <ul className={styles.list}>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li className={styles.plain}>Hà Nội và TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} SOHO Agency</p>
          <a href="#top">Lên đầu trang ↑</a>
        </div>
      </div>
    </footer>
  );
}
