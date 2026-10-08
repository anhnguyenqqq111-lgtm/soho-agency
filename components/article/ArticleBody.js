import styles from './ArticleBody.module.css';
import Toc from './Toc';
import {Block, Inline} from './Markdown';
import {parseMarkdown, plainText} from './parseMarkdown';

const isFaq = heading => /FAQ|Câu hỏi thường gặp/i.test(heading);

// "3. Giải pháp: ..." -> "Giải pháp: ..."
export const stripNumber = text => text.replace(/^\s*\d+\.\s+/, '');

function groupFaq(blocks){
  const items = [];
  for (const block of blocks){
    if (block.type === 'h3'){
      items.push({question: block.text.replace(/^Câu hỏi\s*\d+\s*:\s*/i, ''), answer: []});
    } else if (items.length){
      const answer = items[items.length - 1].answer;
      if (!answer.length && block.type === 'p'){
        answer.push({...block, text: block.text.replace(/^\*\*Trả lời:\*\*\s*/, '')});
      } else {
        answer.push(block);
      }
    }
  }
  return items;
}

function blocksToText(blocks){
  return blocks.map(b => {
    if (b.text) return plainText(b.text);
    if (b.items) return b.items.map(it => plainText(it.text) + ' ' + blocksToText(it.children || [])).join(' ');
    if (b.rows) return [b.head, ...b.rows].map(r => r.join(', ')).join('. ');
    return '';
  }).join(' ').replace(/\s+/g, ' ').trim();
}

export default function ArticleBody({article}){
  const sections = article.sections.map((section, i) => {
    const blocks = parseMarkdown(section.content);
    const faq = isFaq(section.heading) ? groupFaq(blocks) : null;
    return {
      ...section,
      index: String(i + 1).padStart(2, '0'),
      title: stripNumber(section.heading),
      blocks,
      faq
    };
  });

  const faqItems = sections.flatMap(s => s.faq || []);
  const faqJsonLd = faqItems.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: plainText(item.question),
      acceptedAnswer: {'@type': 'Answer', text: blocksToText(item.answer)}
    }))
  } : null;

  return (
    <div className={styles.layout}>
      <aside className={styles.toc}>
        <Toc items={sections.map(s => ({id: s.id, title: s.title, index: s.index}))}/>
      </aside>

      <div className={styles.body}>
        {sections.map(section => (
          <section key={section.id} id={section.id} className={styles.section}>
            <p className={styles.index}>{section.index}</p>
            <h2 className={styles.heading}><Inline text={section.title}/></h2>
            {section.faq ? (
              <div className={styles.faq}>
                {section.faq.map(item => (
                  <details key={item.question} className={styles.faqItem}>
                    <summary><Inline text={item.question}/></summary>
                    <div className="prose">
                      {item.answer.map((block, k) => <Block key={k} block={block}/>)}
                    </div>
                  </details>
                ))}
              </div>
            ) : (
              <div className="prose">
                {section.blocks.map((block, k) => <Block key={k} block={block}/>)}
              </div>
            )}
          </section>
        ))}
      </div>

      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd)}}
        />
      )}
    </div>
  );
}
