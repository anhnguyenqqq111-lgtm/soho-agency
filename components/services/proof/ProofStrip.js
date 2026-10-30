import ProofFigure from './ProofFigure';
import styles from './Proof.module.css';

export default function ProofStrip({assets, ariaLabel = 'Tài sản bằng chứng'}) {
  const visible = (assets || []).filter(asset => asset?.src).slice(0, 4);
  if (!visible.length) return null;
  return (
    <div className={styles.strip} aria-label={ariaLabel}>
      {visible.map(asset => (
        <ProofFigure key={asset.id} asset={asset} className={styles.stripItem} />
      ))}
    </div>
  );
}
