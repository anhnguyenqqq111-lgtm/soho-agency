import styles from './Proof.module.css';

export default function DeviceFrame({children, type = 'desktop', label}) {
  return (
    <div className={`${styles.device} ${type === 'phone' ? styles.phone : styles.desktop}`} aria-label={label}>
      <div className={styles.deviceScreen}>{children}</div>
    </div>
  );
}
