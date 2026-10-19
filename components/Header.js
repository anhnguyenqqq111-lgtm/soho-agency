import styles from './Header.module.css';
import NavMenu from './NavMenu';
import {sitePath} from './paths';
import {getServicesByGroup} from './servicePagesData';
import {solutionPages} from './solutionPagesData';

export const CTA_LABEL = 'Nhận tư vấn';

export default function Header({activeNav}){
  const menu = {
    label: 'Dịch vụ',
    allLabel: 'Xem tất cả dịch vụ',
    allHref: sitePath('/dich-vu'),
    sideTitle: 'Theo mô hình kinh doanh',
    sideLinks: solutionPages.filter(s => s.group === 'Theo mô hình kinh doanh').map(s => ({label: s.title, href: sitePath(`/giai-phap/${s.slug}`)})),
    groups: getServicesByGroup().map(({group, items}) => ({
      group,
      items: items.map(item => ({title: item.menuTitle, href: sitePath(`/dich-vu/${item.slug}`)}))
    }))
  };
  const links = [
    {key: 'home', label: 'Trang chủ', href: sitePath('/'), beforeMenu: true},
    {key: 'about', label: 'Giới thiệu', href: sitePath('/ve-soho'), beforeMenu: true},
    {key: 'results', label: 'Dự án', href: sitePath('/ket-qua')},
    {key: 'blog', label: 'Blog', href: sitePath('/blog')},
    {key: 'contact', label: 'Liên hệ', href: sitePath('/lien-he')}
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a className={styles.logo} href={sitePath('/')} aria-label="SOHO Agency, về trang chủ">
          <img src={sitePath('/brand/soho-logo.webp')} alt="SOHO Agency" width="305" height="120" fetchPriority="high"/>
        </a>
        <NavMenu activeNav={activeNav} menu={menu} links={links} contactHref={sitePath('/lien-he')} ctaLabel={CTA_LABEL}/>
      </div>
    </header>
  );
}
