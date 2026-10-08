import {Fragment} from 'react';
import {parseMarkdown, isClaim} from './parseMarkdown';

// **đậm** và *nghiêng*
export function Inline({text}){
  const parts = text.split(/(\*\*[^*]+?\*\*)/g);
  return parts.map((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) return <strong key={i}>{part.slice(2, -2)}</strong>;
    const sub = part.split(/(\*\S[^*]*?\*)/g);
    return (
      <Fragment key={i}>
        {sub.map((s, j) => (/^\*\S[^*]*\*$/.test(s) ? <em key={j}>{s.slice(1, -1)}</em> : s))}
      </Fragment>
    );
  });
}

function Text({text}){
  const inner = <Inline text={text}/>;
  return isClaim(text) ? <mark data-verify="">{inner}</mark> : inner;
}

function ListItems({items}){
  return items.map((item, i) => (
    <li key={i}>
      <Text text={item.text}/>
      {item.children.map((child, k) => <Block key={k} block={child}/>)}
    </li>
  ));
}

export function Block({block}){
  switch (block.type){
    case 'h3': return <h3><Inline text={block.text}/></h3>;
    case 'h4': return <h4><Inline text={block.text}/></h4>;
    case 'quote': return <blockquote><Text text={block.text}/></blockquote>;
    case 'p': return <p><Text text={block.text}/></p>;
    case 'ul': return <ul><ListItems items={block.items}/></ul>;
    case 'ol': return <ol><ListItems items={block.items}/></ol>;
    case 'tasks':
      return (
        <ul className="tasks">
          {block.items.map((item, i) => (
            <li key={i} data-done={item.done || undefined}>
              <span className="box" aria-hidden="true"/>
              <span><Text text={item.text}/></span>
            </li>
          ))}
        </ul>
      );
    case 'table':
      return (
        <div className="tableWrap">
          <table>
            <thead>
              <tr>{block.head.map((cell, i) => <th key={i} scope="col"><Inline text={cell}/></th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>{row.map((cell, c) => <td key={c}><Inline text={cell}/></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default: return null;
  }
}

export default function Markdown({source}){
  return parseMarkdown(source).map((block, i) => <Block key={i} block={block}/>);
}
