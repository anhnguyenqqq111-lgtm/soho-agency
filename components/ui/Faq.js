import styles from './Faq.module.css';

// FAQ dạng details, thẻ xám bo tròn như GOHA. items: [{q, a}] (a là chuỗi hoặc ReactNode)
export default function Faq({items}){
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(it => ({'@type': 'Question', name: it.q, acceptedAnswer: {'@type': 'Answer', text: typeof it.a === 'string' ? it.a : ''}}))
  };
  return (
    <>
      <div className={styles.list}>
        {items.map((it, i) => (
          <details key={it.q} className={styles.item} data-reveal="" style={{'--reveal-delay': `${i * 80}ms`}}>
            <summary>{it.q}</summary>
            <div className={styles.body}>{typeof it.a === 'string' ? <p>{it.a}</p> : it.a}</div>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
    </>
  );
}
