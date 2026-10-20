import styles from './ProjectShowcase.module.css';
import Icon from '../ui/Icon';
import {sitePath} from '../paths';

/*
  Dự án nổi bật, dàn kiểu tạp chí (học Creative Agency Style): một dự án lớn (ảnh trái, chữ và chỉ số phải),
  ba dự án nhỏ bên dưới. Thông tin luôn hiện, không phụ thuộc hover; hover chỉ phóng ảnh nhẹ và đẩy mũi tên.
  Chỉ dùng dữ liệu đã công bố (components/data/cases.js).
*/
function Meta({c}){
  return <p className={styles.meta}><span>{c.scope}</span><span>{c.period}</span></p>;
}

export default function ProjectShowcase({items}){
  const [lead, ...rest] = items;
  return (
    <div className={styles.wrap}>
      <article className={styles.lead} data-reveal="">
        <a href={sitePath(`/du-an/${lead.slug}`)} className={styles.leadLink}>
          <div className={styles.leadMedia}><img src={sitePath(lead.image)} alt={`Dự án ${lead.name}`} width={lead.imageWidth} height={lead.imageHeight} style={{objectPosition: lead.imagePosition}} loading="lazy"/></div>
          <div className={styles.leadBody}>
            <Meta c={lead}/>
            <h3 className={styles.leadName}>{lead.name}</h3>
            <dl className={styles.ps}>
              <div><dt>Vấn đề</dt><dd>{lead.problem}</dd></div>
              <div><dt>SOHO làm</dt><dd>{lead.solution}</dd></div>
            </dl>
            {lead.kpis && (
              <ul className={styles.kpis}>
                {lead.kpis.map(k => <li key={k.label}><b>{k.value}</b><span>{k.label}</span></li>)}
              </ul>
            )}
            <span className={styles.more}>Xem chi tiết <Icon name="arrow-right" size={16}/></span>
          </div>
        </a>
      </article>
      <ul className={styles.grid}>
        {rest.map((c, i) => (
          <li key={c.slug} data-reveal="" style={{'--reveal-delay': `${i * 90}ms`}}>
            <a href={sitePath(`/du-an/${c.slug}`)} className={styles.card}>
              <div className={styles.media}><img src={sitePath(c.image)} alt={`Dự án ${c.name}`} width={c.imageWidth} height={c.imageHeight} style={{objectPosition: c.imagePosition}} loading="lazy"/></div>
              <div className={styles.body}>
                <Meta c={c}/>
                <h3 className={styles.name}>{c.name}</h3>
                <p className={styles.problem}>{c.problem}</p>
                <p className={styles.result}>{c.result}</p>
                <span className={styles.more}>Xem chi tiết <Icon name="arrow-right" size={16}/></span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
