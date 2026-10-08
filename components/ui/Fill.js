// Hiện giá trị nếu có, nếu không thì hiện placeholder đỏ để dễ tìm và điền sau.
export default function Fill({value, need}){
  if (value !== null && value !== undefined && value !== '') return <>{value}</>;
  return <span className="placeholder">[{need}]</span>;
}
