import styles from './Button.module.css';
import {sitePath} from '../paths';

/*
  variant: primary (viên thuốc cam, chữ Midnight), secondary (viền xám, hover nền trắng), text (link có mũi tên cam)
  size: md | sm
  arrow: 'up' (↗ như GOHA) | 'right' (→) | false
*/
export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  arrow = 'up',
  onDark = false,
  className = '',
  ...rest
}){
  const cls = [styles.btn, styles[variant], styles[size], onDark ? styles.onDark : '', className].join(' ');
  const content = (
    <>
      <span>{children}</span>
      {arrow && <span className={styles.arrow} aria-hidden="true">{arrow === 'up' ? '↗' : '→'}</span>}
    </>
  );
  if (href) return <a href={sitePath(href)} className={cls} {...rest}>{content}</a>;
  return <button type="button" className={cls} {...rest}>{content}</button>;
}
