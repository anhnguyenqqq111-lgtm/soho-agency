/*
  Tách tiêu đề thành từng từ để hiện dần (CSS .word trong base.css).
  segments: [{text, em?}] — em: true để in nghiêng (màu accent theo CSS của trang).
  Trình đọc màn hình đọc bản chữ ẩn, các từ tách rời được aria-hidden.
*/
export default function SplitWords({segments}){
  let i = 0;
  const label = segments.map(s => s.text).join('');
  return (
    <>
      <span className="visually-hidden">{label}</span>
      <span aria-hidden="true">
      {segments.map((seg, k) => {
        const words = seg.text.split(/(\s+)/);
        const nodes = words.map((w, j) => {
          if (!w) return null;
          if (/^\s+$/.test(w)) return ' ';
          const n = i++;
          return (
            <span className="word" key={j}>
              <span style={{'--i': n}}>{w}</span>
            </span>
          );
        });
        return seg.em ? <em key={k}>{nodes}</em> : <span key={k}>{nodes}</span>;
      })}
      </span>
    </>
  );
}
