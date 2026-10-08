/*
  Bộ chuyển markdown tối giản cho components/articles/*.js.
  Chỉ hỗ trợ đúng các cú pháp đang có trong dữ liệu:
    ### / ####            tiêu đề
    * / -  (lồng 2 cấp)   danh sách
    1.                    danh sách số, kèm đoạn thụt lề và danh sách con
    - [ ] / - [x]         checklist (chỉ hiển thị)
    | a | b |             bảng, bỏ qua dòng căn lề :---
    > text                trích dẫn
    **đậm**, *nghiêng*
*/

// Câu có số liệu khẳng định về SOHO, cần người kiểm chứng trước khi xuất bản.
const CLAIM = new RegExp([
  '(hơn|trên)\\s+[\\d.]+\\+?\\s+(doanh nghiệp|khách hàng|dự án|thương hiệu)',
  '[\\d.]+\\+?\\s+năm\\s+(tư vấn|kinh nghiệm|triển khai|hoạt động)',
  'gấp\\s+[\\d.,]+\\s+lần',
  'tiết kiệm\\s+[\\d.,]+\\s*%',
  '(SOHO|chúng tôi)[^.]{0,120}?[\\d.,]+\\s*%',
  '[\\d.,]+\\s*%[^.]{0,80}?(SOHO|chúng tôi)'
].join('|'), 'i');

export function isClaim(text){
  return CLAIM.test(text);
}

const indentOf = line => line.match(/^\s*/)[0].length;
const UL = /^\s*[*-]\s+(?!\[[ xX]\])/;
const OL = /^\s*\d+\.\s+/;
const TASK = /^\s*[-*]\s+\[([ xX])\]\s+/;
const TABLE_SEP = /^\|?\s*:?-{3,}/;

function splitRow(line){
  return line.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim());
}

/* Trả về danh sách block:
   {type:'h3'|'h4'|'p'|'quote', text}
   {type:'ul'|'ol', items:[{text, children:[block]}]}
   {type:'tasks', items:[{text, done}]}
   {type:'table', head:[...], rows:[[...]]}
*/
export function parseMarkdown(src){
  const lines = src.replace(/\r/g, '').split('\n');
  const blocks = [];
  let i = 0;

  const isBlank = l => !l || !l.trim();

  while (i < lines.length){
    const line = lines[i];
    if (isBlank(line)){ i++; continue; }
    const t = line.trim();

    if (t.startsWith('#### ')){ blocks.push({type: 'h4', text: t.slice(5)}); i++; continue; }
    if (t.startsWith('### ')){ blocks.push({type: 'h3', text: t.slice(4)}); i++; continue; }
    if (t.startsWith('## ')){ blocks.push({type: 'h3', text: t.slice(3)}); i++; continue; }

    if (t.startsWith('>')){
      const buf = [];
      while (i < lines.length && lines[i].trim().startsWith('>')){
        buf.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      blocks.push({type: 'quote', text: buf.join(' ')});
      continue;
    }

    if (t.startsWith('|')){
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')){
        if (!TABLE_SEP.test(lines[i].trim())) rows.push(splitRow(lines[i]));
        i++;
      }
      blocks.push({type: 'table', head: rows[0] || [], rows: rows.slice(1)});
      continue;
    }

    if (TASK.test(line)){
      const items = [];
      while (i < lines.length && TASK.test(lines[i])){
        const m = lines[i].match(TASK);
        items.push({done: m[1].toLowerCase() === 'x', text: lines[i].replace(TASK, '').trim()});
        i++;
      }
      blocks.push({type: 'tasks', items});
      continue;
    }

    if ((UL.test(line) || OL.test(line)) && indentOf(line) < 2){
      const ordered = OL.test(line);
      const marker = ordered ? OL : UL;
      const items = [];
      while (i < lines.length){
        const l = lines[i];
        if (isBlank(l)){
          // Danh sách tiếp tục nếu dòng kế tiếp vẫn là item cùng loại hoặc dòng thụt lề.
          let j = i + 1;
          while (j < lines.length && isBlank(lines[j])) j++;
          if (j < lines.length && ((marker.test(lines[j]) && indentOf(lines[j]) < 2) || (indentOf(lines[j]) >= 2 && items.length))){
            i = j; continue;
          }
          break;
        }
        if (marker.test(l) && indentOf(l) < 2){
          items.push({text: l.replace(marker, '').trim(), children: []});
          i++;
          continue;
        }
        if (indentOf(l) >= 2 && items.length){
          const last = items[items.length - 1];
          if (UL.test(l) || OL.test(l)){
            const childOrdered = OL.test(l) && !UL.test(l);
            const type = childOrdered ? 'ol' : 'ul';
            let child = last.children[last.children.length - 1];
            if (!child || child.type !== type){
              child = {type, items: []};
              last.children.push(child);
            }
            child.items.push({text: l.replace(childOrdered ? OL : UL, '').trim(), children: []});
          } else {
            const prev = last.children[last.children.length - 1];
            if (prev && prev.type === 'p' && !isBlank(lines[i - 1])) prev.text += ' ' + l.trim();
            else last.children.push({type: 'p', text: l.trim()});
          }
          i++;
          continue;
        }
        break;
      }
      blocks.push({type: ordered ? 'ol' : 'ul', items});
      continue;
    }

    // Đoạn văn
    const buf = [];
    while (
      i < lines.length &&
      !isBlank(lines[i]) &&
      !/^\s*(#{2,4} |>|\|)/.test(lines[i]) &&
      !TASK.test(lines[i]) &&
      !((UL.test(lines[i]) || OL.test(lines[i])) && indentOf(lines[i]) < 2)
    ){
      buf.push(lines[i].trim());
      i++;
    }
    blocks.push({type: 'p', text: buf.join(' ')});
  }

  return blocks;
}

// Văn bản thuần, dùng cho JSON-LD.
export function plainText(src){
  return src
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(\S[^*]*?)\*/g, '$1')
    .replace(/^\s*(#{1,6}|[-*]|\d+\.|>)\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}
