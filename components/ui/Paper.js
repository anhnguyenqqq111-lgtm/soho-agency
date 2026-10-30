import Icon from './Icon';

/*
  Thiết bị thị giác bản 12 (xem app/styles/paper.css): dấu số, ghi chú lề, giấy nhớ, bảng kẻ sổ, câu dẫn.
  Mỗi thứ là một phần tử HTML thường với class toàn cục, để dùng được ở cả server component và CSS module.
*/

// D6. Dấu số bên trái tiêu đề. n: '01'
export function Stamp({n, small = false, className = ''}) {
  return (
    <span className={`stamp ${small ? 'stamp-sm' : ''} ${className}`} aria-hidden="true">
      <span>{n}</span>
    </span>
  );
}

// Tiêu đề có dấu số: <H2 n="01">Khách gõ gì</H2>
export function StampHeading({as: Tag = 'h2', n, id, className = '', children}) {
  return (
    <Tag id={id} className={`h-stamp ${className}`}>
      {n && <Stamp n={n} />}
      <span>{children}</span>
    </Tag>
  );
}

// D3. Ghi chú lề: một câu ngắn của người làm nghề, đứng cạnh hoặc dưới tiêu đề
export function Note({children, className = ''}) {
  return <p className={`note ${className}`}>{children}</p>;
}

// D4. Giấy nhớ: head là nhãn nhỏ ("Giới hạn của số liệu"), tilt 'a' | 'b'
export function StickyNote({head, tilt = 'a', children, className = ''}) {
  return (
    <aside className={`sticky-note ${className}`} data-tilt={tilt}>
      {head && <span className="sticky-head">{head}</span>}
      {children}
    </aside>
  );
}

// D7. Bảng kẻ sổ. cols: chuỗi grid-template-columns cho desktop. rows: mảng React node (mỗi node là một hàng)
export function Ledger({cols = 'minmax(0, 1fr)', head, children, className = '', ariaLabel}) {
  return (
    <ul className={`ledger ${className}`} style={{'--ledger-cols': cols}} aria-label={ariaLabel}>
      {head && (
        <li className="ledger-head" aria-hidden="true">
          {head}
        </li>
      )}
      {children}
    </ul>
  );
}

// D10. Câu dẫn sang chương sau. href chỉ nhảy trong trang
export function Bridge({children, href, label, className = ''}) {
  return (
    <p className={`bridge ${className}`} data-reveal="">
      {children}
      {href && (
        <a href={href}>
          {label} <Icon name="arrow-down" size={16} />
        </a>
      )}
    </p>
  );
}
