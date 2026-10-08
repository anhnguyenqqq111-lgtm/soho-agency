import styles from './Header.module.css';
import NavMenu from './NavMenu';
import {sitePath} from './paths';
import {getServicesByGroup} from './servicePagesData';
import {getSolutionsByGroup} from './solutionPagesData';

function toMenu(groups, base){
  return groups.map(({group, items}) => ({
    group,
    items: items.map(item => ({
      title: item.menuTitle || item.title,
      desc: item.menuDesc,
      href: sitePath(`${base}/${item.slug}`)
    }))
  }));
}

export default function Header({activeNav}){
  const menus = {
    services: {
      label: 'Dịch vụ',
      allLabel: 'Tất cả dịch vụ',
      allHref: sitePath('/dich-vu'),
      groups: toMenu(getServicesByGroup(), '/dich-vu')
    },
    solutions: {
      label: 'Giải pháp',
      allLabel: 'Tất cả giải pháp',
      allHref: sitePath('/giai-phap'),
      groups: toMenu(getSolutionsByGroup(), '/giai-phap')
    }
  };

  const links = [
    {key: 'results', label: 'Kết quả', href: sitePath('/ket-qua')},
    {key: 'blog', label: 'Blog', href: sitePath('/blog')},
    {key: 'about', label: 'Về SOHO', href: sitePath('/ve-soho')}
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a className={styles.logo} href={sitePath('/')} aria-label="SOHO Agency, về trang chủ">
          <img src={sitePath('/brand/soho-logo-crop.svg')} alt="SOHO Agency" width="568" height="234"/>
        </a>
        <NavMenu
          activeNav={activeNav}
          menus={menus}
          links={links}
          contactHref={sitePath('/lien-he')}
        />
      </div>
    </header>
  );
}
