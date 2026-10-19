import styles from './Footer.module.css';
import {sitePath} from './paths';
import {getCoreServices} from './servicePagesData';
import {company} from './data/company';
import {partners} from './data/proof';
import Fill from './ui/Fill';
import PartnerBadge from './proof/PartnerBadge';
import StickyCta from './StickyCta';
import Icon from './ui/Icon';

export default function Footer(){
  const year = new Date().getFullYear();
  const columns = [
    {title: 'Dịch vụ', links: [...getCoreServices().map(s => ({label: s.coreTitle, href: `/dich-vu/${s.slug}`})), {label: 'Tất cả dịch vụ', href: '/dich-vu'}]},
    {title: 'Công ty', links: [
      {label: 'Giới thiệu', href: '/ve-soho'},
      {label: 'Giải pháp', href: '/giai-phap'},
      {label: 'Dự án', href: '/ket-qua'},
      {label: 'Tin tức', href: '/blog'},
      {label: 'Liên hệ', href: '/lien-he'}
    ]}
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <a href={sitePath('/')} className={styles.logo} aria-label="SOHO Agency, về trang chủ">
            <img src={sitePath('/brand/soho-logo-white.webp')} alt="SOHO Agency" width="305" height="120" loading="lazy"/>
          </a>
          <h2 className={styles.company}><Fill value={company.legalName} need="CẦN TÊN PHÁP NHÂN"/></h2>
          <ul className={styles.info}>
            <li><Icon name="map-pin" size={18} className={styles.ic}/><span><Fill value={company.address} need="CẦN ĐỊA CHỈ VĂN PHÒNG"/></span></li>
            <li><Icon name="phone" size={18} className={styles.ic}/>{company.phone ? <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a> : <Fill value={null} need="CẦN SỐ ĐIỆN THOẠI"/>}</li>
            <li><Icon name="mail" size={18} className={styles.ic}/><a href={`mailto:${company.email}`}>{company.email}</a></li>
            {company.hours && <li><Icon name="clock" size={18} className={styles.ic}/><span>{company.hours}</span></li>}
          </ul>
        </div>

        {columns.map(col => (
          <div key={col.title} className={styles.col}>
            <h2 className={styles.colTitle}>{col.title}</h2>
            <ul className={styles.list}>
              {col.links.map(link => <li key={link.href}><a href={sitePath(link.href)}>{link.label}</a></li>)}
            </ul>
          </div>
        ))}

        <div className={styles.col}>
          <h2 className={styles.colTitle}>Theo dõi</h2>
          <ul className={styles.list}>
            {company.socials.filter(s => s.url).map(s => (
              <li key={s.label}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
            ))}
          </ul>
          <h2 className={`${styles.colTitle} ${styles.gap}`}>Chứng nhận</h2>
          <ul className={styles.badges}>
            {partners.map(p => p.verified && p.logo ? (
              <li key={p.name} className={styles.badgeImg}><PartnerBadge partner={p} size={84} tipId="tip-partner-footer" align="end"/></li>
            ) : (
              <li key={p.name} className={styles.badge}>
                <span>{p.name}</span>
                <Fill value={null} need="CẦN XÁC NHẬN"/>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className={styles.bottom}>
          <p>© {year} SOHO Agency.</p>
          <nav aria-label="Pháp lý" className={styles.legal}>
            <a href={sitePath('/chinh-sach-bao-mat')}>Chính sách bảo mật</a>
            <a href={sitePath('/dieu-khoan-su-dung')}>Điều khoản sử dụng</a>
            <a href="#top">Lên đầu trang</a>
          </nav>
        </div>
      </div>
      <StickyCta phone={company.phone} contactHref={sitePath('/lien-he')}/>
    </footer>
  );
}
