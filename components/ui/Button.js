import styles from './Button.module.css';
import {sitePath} from '../paths';

/*
  variant: primary (viên thuốc đỏ), secondary (viền), text (link có mũi tên)
  size: md | sm
  arrow: 'up' (↗ như GOHA) | 'right' (→) | false
*/
export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  arrow = variant === 'text' ? 'up' : 'right',
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
