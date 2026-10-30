import {sitePath} from '../../paths';
import styles from './Proof.module.css';

export default function ProofFigure({asset, highlight, priority = false, className = ''}) {
  if (!asset?.src) return null;
  const box = highlight || asset.highlight;
  return (
    <figure className={`${styles.figure} ${className}`}>
      <div className={styles.media}>
        <img
          src={sitePath(asset.src)}
          srcSet={asset.src800 ? `${sitePath(asset.src800)} 800w, ${sitePath(asset.src)} ${asset.width}w` : undefined}
          sizes="(max-width: 700px) 100vw, 1200px"
          alt={asset.alt || ''}
          width={asset.width}
          height={asset.height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
        />
        {box && (
          <svg className={styles.highlight} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <rect x={box.x} y={box.y} width={box.w} height={box.h} />
          </svg>
        )}
      </div>
      {(asset.caption || asset.source) && (
        <figcaption>
          {asset.caption && <span>{asset.caption}</span>}
          {asset.source && <small>{asset.source}</small>}
        </figcaption>
      )}
    </figure>
  );
}
