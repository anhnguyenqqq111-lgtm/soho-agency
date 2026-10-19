import styles from './Button.module.css';
import {sitePath} from '../paths';
import Icon from './Icon';

/*
  variant: primary (nền cam, chữ Midnight: chỉ dùng cho hành động chính "Đặt lịch tư vấn"),
           secondary (viền xám), text (link có mũi tên)
  size: md | sm. Vùng bấm tối thiểu 44px (luật giao diện Apple).
  arrow: 'up' (↗, mặc định) | 'right' (→) | false. Icon từ bộ Lucide.
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
      {arrow && <Icon name={arrow === 'right' ? 'arrow-right' : 'arrow-up-right'} size={size === 'sm' ? 16 : 18} className={styles.arrow}/>}
    </>
  );
  if (href) return <a href={sitePath(href)} className={cls} {...rest}>{content}</a>;
  return <button type="button" className={cls} {...rest}>{content}</button>;
}
