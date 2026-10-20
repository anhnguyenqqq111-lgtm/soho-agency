import styles from './SiteHeader.module.css';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import HeaderScroll from './HeaderScroll';
import {sitePath} from '../paths';
import {CTA, getServicesMenu, mainNav} from './navigation';

/*
  Header dính đầu trang, cao 76px (64px trên mobile).
  Server component: dựng dữ liệu menu một lần rồi truyền xuống hai phần client (desktop và drawer mobile),
  để bundle client không phải chứa toàn bộ dữ liệu dịch vụ.
  activeNav: khóa của mục đang xem ('home', 'about', 'services', 'solutions', 'results', 'blog', 'contact').
*/
export default function SiteHeader({activeNav}){
  const services = getServicesMenu();
  return (
    <header className={styles.header} data-site-header="">
      <div className={`container ${styles.bar}`}>
        <a className={styles.logo} href={sitePath('/')} aria-label="SOHO Agency, về trang chủ">
          <img src={sitePath('/assets/brand/approved/SOHO_01_Open_Corner_APPROVED.svg')} alt="SOHO Agency" width="400" height="400" fetchPriority="high"/>
        </a>
        <DesktopNavigation items={mainNav} activeNav={activeNav} services={services} cta={CTA}/>
        <MobileNavigation items={mainNav} activeNav={activeNav} services={services} cta={CTA}/>
      </div>
      <HeaderScroll/>
    </header>
  );
}
