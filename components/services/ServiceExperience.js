import ed from './editorial/editorial.module.css';
import {MethodSection} from './pilots/PilotParts';
import {ContextualServiceCTA} from './ServiceContext';
import {ServiceFit, ScopeSpec, CaseEvidence, NextSteps} from './modules/Modules';
import {EntityEvidence, LocalJourney, MeasurementContract, EditorialPortfolio, WebsiteShowcase} from './signatures/Signatures';
import {CreativeExplorer, CroBeforeAfter, AppSuitability, PriorityMatrix} from './signatures/Interactive';
import {EXPERIENCE} from '../data/serviceExperience';

/*
  Phần dưới sơ đồ cho Thiết kế website và 8 dịch vụ chưa có trang riêng (Redesign V6.0).
  Dùng chung module quyết định, nhưng mỗi trang có phần riêng (signature) và thứ tự riêng, nên không trang nào giống hệt nhau.
  Nền tự xen kẽ trắng / canvas; khối phạm vi nền tối khi dải các bước ở đầu trang dùng nền sáng (tối đa 2 khối tối kể cả CTA).
*/

// Lighthouse 12.2.1, chế độ điện thoại, trang chủ bản live, đo ngày 23/10/2026
const LIGHTHOUSE = {
  scores: [
    {label: 'Hiệu năng', value: 98},
    {label: 'Truy cập', value: 100},
    {label: 'Thực hành tốt', value: 100},
    {label: 'SEO', value: 100}
  ],
  source:
    'Lighthouse 12.2.1, chế độ điện thoại, trang chủ soho-agency.vercel.app, đo ngày 23/10/2026: LCP 2,2 giây, CLS 0, TBT 10 ms. Điểm thay đổi theo mạng và thiết bị mỗi lần đo.'
};

const SIG = {
  'thiet-ke-website': {
    order: ['fit', 'signature', 'proof', 'scope', 'next'],
    label: 'Sản phẩm thật',
    title: 'Một website SOHO tự làm, đo được',
    intro:
      'Chưa có dự án website của khách nào được phép công bố, nên đây là website của chính SOHO: cùng nội dung chạy trên máy tính và điện thoại như sơ đồ ở đầu trang, trang nào cũng dẫn tới nút liên hệ.',
    render: () => <WebsiteShowcase lighthouse={LIGHTHOUSE} />,
    proofTitle: 'Dự án có phần nội dung website'
  },
  'seo-ai-overview': {
    order: ['fit', 'signature', 'scope', 'next'],
    label: 'Nguồn tín hiệu',
    title: 'Thương hiệu → thông tin → nguồn chứng minh → lý do AI cần',
    intro: 'Bốn nguồn tín hiệu đúng như sơ đồ ở đầu trang. Mỗi nguồn cần một thông tin cụ thể và một nơi chứng minh được.',
    render: () => <EntityEvidence />
  },
  'local-seo-google-maps': {
    order: ['signature', 'fit', 'scope', 'next'],
    label: 'Hành trình tìm quanh đây',
    title: 'Từ lúc tìm quanh đây tới lúc gọi điện',
    intro: 'Sơ đồ ở đầu trang là vòng bán kính và gói 3 kết quả trên Maps. Đây là bốn bước khách đi qua sau khi thấy gói kết quả đó.',
    render: () => <LocalJourney />
  },
  'meta-tiktok-ads': {
    order: ['fit', 'signature', 'proof', 'scope', 'next'],
    label: 'Phòng thử mẫu quảng cáo',
    title: 'Câu mở đầu × thông điệp × ưu đãi × định dạng',
    intro:
      'Sơ đồ ở đầu trang là bảng 3 × 3. Thực tế còn thêm thông điệp và định dạng, nên số tổ hợp tăng rất nhanh. Chọn thử để thấy một mẫu thử được mô tả và đo thế nào.',
    render: () => <CreativeExplorer />,
    proofTitle: 'Dự án quảng cáo Meta đã công bố'
  },
  'cro-landing-page': {
    order: ['signature', 'fit', 'scope', 'next'],
    label: 'Trước và sau',
    title: 'Cùng một trang đích, trước và sau',
    intro: 'Bốn điểm đánh số trên sơ đồ ở đầu trang, thêm trải nghiệm trên điện thoại. Chọn một điểm để so hai phiên bản.',
    render: () => <CroBeforeAfter />
  },
  'thiet-ke-mobile-app': {
    order: ['fit', 'scope', 'next'],
    fitChild: names => (
      <div>
        <h3 className={ed.h3}>Trả lời 4 câu để xem nên làm app hay chưa</h3>
        <AppSuitability names={names} />
      </div>
    )
  },
  'content-marketing-pr': {
    order: ['signature', 'fit', 'scope', 'next'],
    label: 'Bài đã đăng',
    title: 'Câu hỏi của khách → bài viết → kênh → đội sale',
    intro: 'Ba giai đoạn trên sơ đồ ở đầu trang cần ba loại nội dung. Ví dụ dưới đây là bài SOHO đã đăng trên blog của chính mình.',
    render: () => <EditorialPortfolio />
  },
  'ga4-looker-dashboard': {
    order: ['fit', 'signature', 'scope', 'next'],
    label: 'Hợp đồng đo lường',
    title: 'Định nghĩa từng sự kiện trước khi cài',
    intro: 'Sơ đồ ở đầu trang đi từ nguồn dữ liệu tới quyết định ngân sách. Mỗi sự kiện cần định nghĩa, nguồn, cách kiểm tra và quyết định mà nó phục vụ.',
    render: () => <MeasurementContract />
  },
  'tu-van-chien-luoc-sprint': {
    order: ['fit', 'signature', 'scope', 'next'],
    label: 'Ma trận ưu tiên',
    title: 'Xếp việc theo tác động, công sức và độ chắc của căn cứ',
    intro: 'Sơ đồ ở đầu trang chia 90 ngày thành các vòng hai tuần. Đầu mỗi vòng, việc được chọn theo cách xếp dưới đây.',
    render: () => <PriorityMatrix />
  }
};

const NAV_LABEL = {
  fit: ['phu-hop', 'Có hợp không'],
  signature: ['trai-nghiem', null],
  proof: ['du-an', 'Dự án'],
  scope: ['pham-vi', 'Phạm vi'],
  next: ['tiep-theo', 'Bước tiếp theo']
};

// Mục cho thanh điều hướng trong trang
export function experienceNav(slug, hasArticle) {
  const sig = SIG[slug];
  if (!sig) return null;
  return [
    ['cach-lam', 'Cách làm'],
    ...sig.order.map(k => (k === 'signature' ? ['trai-nghiem', sig.label] : NAV_LABEL[k])),
    ...(hasArticle ? [['phuong-phap', 'Đọc sâu']] : []),
    ['lien-he', 'Liên hệ']
  ];
}

export default function ServiceExperience({service, article, names, trackDark}) {
  const sig = SIG[service.slug];
  const x = EXPERIENCE[service.slug];
  // Section "Vì sao cần" ngay trên dùng nền canvas khi dải các bước sáng, nền trắng khi dải các bước tối
  let prev = trackDark ? 'white' : 'canvas';
  const nextTone = () => (prev = prev === 'canvas' ? 'white' : 'canvas');
  const blocks = sig.order.map((key, i) => {
    const num = String(i + 1).padStart(2, '0');
    if (key === 'fit')
      return (
        <ServiceFit key={key} fit={x.fit} slug={service.slug} names={names} num={num} tone={nextTone()}>
          {sig.fitChild?.(names)}
        </ServiceFit>
      );
    if (key === 'signature') {
      const tone = nextTone();
      return (
        <section key={key} id="trai-nghiem" className={`${ed.band} ${tone === 'canvas' ? ed.canvas : ''}`} aria-labelledby="trai-nghiem-title">
          <div className={`container ${ed.grid}`}>
            <div className={ed.side}>
              <p className={ed.label}>
                <b>{num}</b> {sig.label}
              </p>
              <h2 id="trai-nghiem-title" className={ed.h2}>
                {sig.title}
              </h2>
            </div>
            <p className={`${ed.main} ${ed.lead}`} style={{alignSelf: 'end'}}>
              {sig.intro}
            </p>
            <div className={ed.full}>{sig.render()}</div>
          </div>
        </section>
      );
    }
    if (key === 'proof') return x.proof ? <CaseEvidence key={key} proof={x.proof} num={num} tone={nextTone()} title={sig.proofTitle} /> : null;
    if (key === 'scope') {
      const dark = !trackDark;
      const tone = dark ? (prev = 'ink') : nextTone();
      return <ScopeSpec key={key} scope={x.scope} deliverables={service.deliverables} slug={service.slug} names={names} num={num} dark={dark} tone={tone} />;
    }
    if (key === 'next') {
      if (prev === 'ink') prev = 'canvas';
      return <NextSteps key={key} slug={service.slug} names={names} num={num} tone={nextTone()} />;
    }
    return null;
  });
  const methodTone = prev === 'canvas' ? 'white' : 'gray';
  return (
    <>
      {blocks}
      <MethodSection article={article} name={service.menuTitle} tone={methodTone} />
      <ContextualServiceCTA slug={service.slug} />
    </>
  );
}
