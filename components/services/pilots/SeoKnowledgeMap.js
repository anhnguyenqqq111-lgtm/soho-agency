'use client';

import {useState} from 'react';
import styles from './SeoKnowledgeMap.module.css';
import {track} from '../../analytics';

/*
  Bản đồ cụm chủ đề (topic cluster) tương tác cho trang SEO tổng thể.
  Một trang trụ cột ở trên, các trang vệ tinh xếp theo ý định tìm kiếm. Chọn một trang để xem: người tìm gõ gì,
  trang đó là loại trang nào, phải trả lời điều gì, liên kết sang đâu tiếp. Các trang được liên kết sáng lên trên bản đồ.
  Dữ liệu là ví dụ minh họa cho một doanh nghiệp thi công quán cà phê, không phải số liệu hay từ khóa của khách hàng thật.
*/

const HUB = {
  id: 'hub',
  title: 'Thi công quán cà phê sân vườn',
  query: 'thi công quán cà phê sân vườn',
  type: 'Trang dịch vụ chính (trang trụ cột)',
  answer: 'Làm những loại quán nào, quy trình ra sao, khoảng giá, công trình đã làm và cách liên hệ.',
  stage: 'Chuyển đổi',
  links: ['y-tuong', 'chi-phi', 'bao-gia', 'cong-trinh']
};

const LANES = [
  {
    key: 'tim-hieu',
    name: 'Tìm hiểu',
    stage: 'Tìm kiếm và cân nhắc',
    nodes: [
      {
        id: 'y-tuong',
        title: 'Phong cách quán sân vườn',
        query: 'mẫu quán cà phê sân vườn đẹp',
        type: 'Bài hướng dẫn có ảnh công trình',
        answer: 'Các phong cách phổ biến, mỗi phong cách hợp với diện tích và ngân sách nào.',
        links: ['dien-tich', 'chi-phi']
      },
      {
        id: 'dien-tich',
        title: 'Cần bao nhiêu diện tích',
        query: 'mở quán cà phê sân vườn cần bao nhiêu m2',
        type: 'Bài hỏi đáp',
        answer: 'Diện tích theo số chỗ ngồi, cách bố trí khu bếp, lối đi, cây xanh.',
        links: ['chi-phi']
      }
    ]
  },
  {
    key: 'so-sanh',
    name: 'So sánh',
    stage: 'Tìm kiếm và cân nhắc',
    nodes: [
      {
        id: 'chi-phi',
        title: 'Chi phí thi công',
        query: 'chi phí làm quán cà phê sân vườn',
        type: 'Bài phân tích chi phí',
        answer: 'Chi phí gồm những hạng mục nào, điều gì làm giá thay đổi, cách tự ước tính.',
        links: ['bao-gia', 'tu-lam']
      },
      {
        id: 'tu-lam',
        title: 'Tự làm hay thuê đơn vị',
        query: 'có nên thuê công ty thi công quán cà phê',
        type: 'Bài so sánh',
        answer: 'Ưu, nhược điểm của từng cách, rủi ro hay gặp và khi nào nên thuê.',
        links: ['quy-trinh']
      }
    ]
  },
  {
    key: 'quyet-dinh',
    name: 'Quyết định',
    stage: 'Chuyển đổi',
    nodes: [
      {
        id: 'bao-gia',
        title: 'Báo giá theo diện tích',
        query: 'báo giá thi công quán cà phê 200m2',
        type: 'Trang báo giá có form',
        answer: 'Khoảng giá theo gói, những gì đã gồm trong giá, nút gửi yêu cầu báo giá.',
        links: ['cong-trinh']
      },
      {
        id: 'khu-vuc',
        title: 'Thi công tại TP.HCM',
        query: 'thi công quán cà phê sân vườn TP.HCM',
        type: 'Trang theo khu vực',
        answer: 'Khu vực phục vụ, công trình gần đó, thời gian khảo sát và thi công.',
        links: ['bao-gia', 'cong-trinh']
      }
    ]
  },
  {
    key: 'tin-tuong',
    name: 'Tin tưởng',
    stage: 'Chuyển đổi',
    nodes: [
      {
        id: 'cong-trinh',
        title: 'Công trình đã làm',
        query: 'công trình quán cà phê sân vườn đã thi công',
        type: 'Trang dự án có ảnh thật',
        answer: 'Ảnh trước và sau, diện tích, thời gian, phạm vi việc đã làm.',
        links: ['bao-gia']
      },
      {
        id: 'quy-trinh',
        title: 'Quy trình và bảo hành',
        query: 'quy trình thi công quán cà phê',
        type: 'Trang quy trình',
        answer: 'Các bước, mốc thời gian, ai chịu trách nhiệm phần nào, chính sách bảo hành.',
        links: ['bao-gia']
      }
    ]
  }
];

const ALL = [HUB, ...LANES.flatMap(l => l.nodes.map(n => ({...n, lane: l.name, stage: l.stage})))];
const byId = Object.fromEntries(ALL.map(n => [n.id, n]));
// Mọi trang vệ tinh đều liên kết ngược về trang trụ cột
const linksOf = n => (n.id === 'hub' ? n.links : ['hub', ...n.links]);

export default function SeoKnowledgeMap() {
  const [active, setActive] = useState('chi-phi');
  const node = byId[active];
  const linked = new Set(linksOf(node));

  function choose(id) {
    setActive(id);
    track('service_map_select', {service: 'seo-tong-the', node: id});
  }

  const nodeButton = (n, extra = '') => (
    <button
      type="button"
      className={`${styles.node} ${extra}`}
      aria-pressed={active === n.id}
      data-linked={linked.has(n.id) && active !== n.id ? '' : undefined}
      onClick={() => choose(n.id)}
    >
      <span className={styles.nodeTitle}>{n.title}</span>
      <span className={styles.nodeType}>{n.type}</span>
    </button>
  );

  return (
    <div className={styles.wrap}>
      <div className={styles.map}>
        <div className={styles.hubRow}>{nodeButton(HUB, styles.hub)}</div>
        <ol className={styles.lanes} aria-label="Trang vệ tinh theo ý định tìm kiếm">
          {LANES.map(l => (
            <li key={l.key} className={styles.lane}>
              <p className={styles.laneHead}>
                <span className={styles.laneName}>{l.name}</span>
                <span className={styles.laneStage}>{l.stage}</span>
              </p>
              <ul className={styles.laneNodes}>
                {l.nodes.map(n => (
                  <li key={n.id}>{nodeButton(n)}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className={styles.legend}>
          <span className={styles.legendActive}>Trang đang xem</span>
          <span className={styles.legendLinked}>Trang được liên kết tới</span>
        </p>
      </div>

      <div className={styles.panel} aria-live="polite">
        <p className={styles.searchBox}>
          <span className={styles.searchLabel}>Người tìm gõ</span>
          <span className={styles.searchQuery}>{node.query}</span>
        </p>
        <dl className={styles.facts}>
          <div>
            <dt>Trang</dt>
            <dd>{node.title}</dd>
          </div>
          <div>
            <dt>Loại trang</dt>
            <dd>{node.type}</dd>
          </div>
          <div>
            <dt>Chặng hành trình</dt>
            <dd>{node.stage}</dd>
          </div>
          <div className={styles.wide}>
            <dt>Trang phải trả lời</dt>
            <dd>{node.answer}</dd>
          </div>
          <div className={styles.wide}>
            <dt>Liên kết nội bộ tới</dt>
            <dd>
              <ul className={styles.linkList}>
                {linksOf(node).map(id => (
                  <li key={id}>
                    <button type="button" className={styles.linkBtn} onClick={() => choose(id)}>
                      {byId[id].title}
                    </button>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
        <p className={styles.note}>
          Ví dụ minh họa cho một doanh nghiệp thi công quán cà phê. Bản đồ thật được lập từ dữ liệu tìm kiếm và Search Console của bạn.
        </p>
      </div>
    </div>
  );
}
