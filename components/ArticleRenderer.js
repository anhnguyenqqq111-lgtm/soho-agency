'use client';
import { useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Zap,
  HelpCircle,
  FileCheck2,
  TableProperties,
  ArrowRight
} from 'lucide-react';
import { sitePath } from './paths';

// Format text with bold, italic, code
function renderInlineFormatting(text) {
  if (!text) return '';
  // Replace **bold**
  const boldParts = text.split(/(\*\*.*?\*\*)/g);
  return boldParts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    // Replace *italic*
    const italicParts = part.split(/(\*.*?\*)/g);
    return italicParts.map((sub, j) => {
      if (sub.startsWith('*') && sub.endsWith('*')) {
        return <em key={`${i}-${j}`}>{sub.slice(1, -1)}</em>;
      }
      return sub;
    });
  });
}

function TableBlock({ rows }) {
  if (!rows || rows.length < 2) return null;
  const header = rows[0];
  const body = rows.slice(1);

  return (
    <div className="articleTableWrap">
      <div className="tableNotice">
        <TableProperties size={14} /> Cuộn ngang để xem đầy đủ bảng so sánh
      </div>
      <table className="articleTable">
        <thead>
          <tr>
            {header.map((col, idx) => (
              <th key={idx} className={idx === header.length - 1 ? 'highlightCol' : ''}>
                {renderInlineFormatting(col)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className={cIdx === row.length - 1 ? 'highlightCell' : ''}>
                  {renderInlineFormatting(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FaqAccordion({ items }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <div className="faqAccordionList">
      {items.map((item, idx) => (
        <div key={idx} className={`faqItem ${openIdx === idx ? 'open' : ''}`}>
          <button type="button" className="faqQuestion" onClick={() => toggle(idx)}>
            <HelpCircle size={18} className="faqIcon" />
            <span>{item.question}</span>
            <ChevronDown size={18} className={`faqChevron ${openIdx === idx ? 'rotated' : ''}`} />
          </button>
          {openIdx === idx && (
            <div className="faqAnswer">
              <div className="faqAnswerInner">
                {renderInlineFormatting(item.answer)}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ArticleRenderer({ section }) {
  if (!section || !section.content) return null;

  // Split lines
  const lines = section.content.trim().split('\n');
  const elements = [];
  let bufferList = [];
  let bufferTable = [];
  let bufferChecklist = [];
  let isCollectingFaq = false;
  let faqItems = [];
  let currentFaqQuestion = '';
  let currentFaqAnswer = '';

  const flushList = () => {
    if (bufferList.length > 0) {
      elements.push(
        <ul className="articleBulletList" key={`list-${elements.length}`}>
          {bufferList.map((item, i) => (
            <li key={i}>{renderInlineFormatting(item)}</li>
          ))}
        </ul>
      );
      bufferList = [];
    }
  };

  const flushTable = () => {
    if (bufferTable.length > 0) {
      elements.push(<TableBlock rows={[...bufferTable]} key={`table-${elements.length}`} />);
      bufferTable = [];
    }
  };

  const flushChecklist = () => {
    if (bufferChecklist.length > 0) {
      elements.push(
        <div className="articleChecklistGrid" key={`check-${elements.length}`}>
          {bufferChecklist.map((item, i) => (
            <div className="checklistItem" key={i}>
              <div className="checkIconWrap">
                <CheckCircle2 size={16} className="textEmerald" />
              </div>
              <p>{renderInlineFormatting(item)}</p>
            </div>
          ))}
        </div>
      );
      bufferChecklist = [];
    }
  };

  const flushFaq = () => {
    if (currentFaqQuestion) {
      faqItems.push({ question: currentFaqQuestion, answer: currentFaqAnswer.trim() });
      currentFaqQuestion = '';
      currentFaqAnswer = '';
    }
    if (faqItems.length > 0) {
      elements.push(<FaqAccordion items={[...faqItems]} key={`faq-${elements.length}`} />);
      faqItems = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) continue;

    // Check if table row
    if (line.startsWith('|') && line.endsWith('|')) {
      flushList();
      flushChecklist();
      if (!line.includes('---')) {
        const cells = line.split('|').slice(1, -1).map((c) => c.trim());
        bufferTable.push(cells);
      }
      continue;
    } else {
      flushTable();
    }

    // Check if FAQ item
    if (line.startsWith('### Câu hỏi') || line.startsWith('### Câu ')) {
      flushList();
      flushChecklist();
      if (currentFaqQuestion) {
        faqItems.push({ question: currentFaqQuestion, answer: currentFaqAnswer.trim() });
      }
      currentFaqQuestion = line.replace(/^###\s*/, '');
      currentFaqAnswer = '';
      isCollectingFaq = true;
      continue;
    }

    if (isCollectingFaq) {
      if (line.startsWith('**Trả lời:**') || line.startsWith('Trả lời:')) {
        currentFaqAnswer += ' ' + line.replace(/^\*\*Trả lời:\*\*\s*/, '').replace(/^Trả lời:\s*/, '');
        continue;
      } else if (!line.startsWith('### ') && !line.startsWith('## ')) {
        currentFaqAnswer += '\n\n' + line;
        continue;
      } else {
        flushFaq();
        isCollectingFaq = false;
      }
    }

    // Check if checklist item
    if (line.startsWith('- [ ]')) {
      flushList();
      const itemText = line.replace(/^- \[[ x]\]\s*/, '');
      bufferChecklist.push(itemText);
      continue;
    } else {
      flushChecklist();
    }

    // Check if bullet point
    if (line.startsWith('* ') || line.startsWith('- ')) {
      const itemText = line.replace(/^[*|-]\s*/, '');
      bufferList.push(itemText);
      continue;
    } else {
      flushList();
    }

    // Check for Headings
    if (line.startsWith('### ')) {
      elements.push(
        <h3 className="articleH3" key={`h3-${elements.length}`}>
          {renderInlineFormatting(line.replace(/^###\s*/, ''))}
        </h3>
      );
      continue;
    }

    if (line.startsWith('#### ')) {
      elements.push(
        <h4 className="articleH4" key={`h4-${elements.length}`}>
          <FileCheck2 size={16} className="h4Icon" />
          {renderInlineFormatting(line.replace(/^####\s*/, ''))}
        </h4>
      );
      continue;
    }

    // Check for callouts / blockquotes
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote className="articleQuote" key={`q-${elements.length}`}>
          <Sparkles size={16} className="quoteIcon" />
          <p>{renderInlineFormatting(line.replace(/^>\s*/, ''))}</p>
        </blockquote>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p className="articleP" key={`p-${elements.length}`}>
        {renderInlineFormatting(line)}
      </p>
    );
  }

  flushList();
  flushTable();
  flushChecklist();
  flushFaq();

  return <div className="articleSectionBody">{elements}</div>;
}
