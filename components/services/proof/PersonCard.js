import {sitePath} from '../../paths';
import styles from './Proof.module.css';

export default function PersonCard({person}) {
  if (!person) return null;
  return (
    <article className={styles.person}>
      <img src={sitePath(person.src)} alt={person.alt || `Ảnh ${person.name}`} width={person.width || 800} height={person.height || 1000} loading="lazy" />
      <div>
        <h3>{person.name}</h3>
        <p>{person.role}</p>
        <p className={styles.personMeta}>{person.years} · {person.focus}</p>
      </div>
    </article>
  );
}
