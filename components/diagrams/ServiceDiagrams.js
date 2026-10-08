import {Figure, L, P, C, R, T, TL, Dot, Arrow} from './svg';

/* Mỗi dịch vụ một sơ đồ. viewBox rộng 480 để chữ vẫn đọc được trên mobile. */

// SEO tổng thể: cụm chủ đề quanh trang trụ cột
function SeoCluster({card}){
  const cx = 240, cy = 178;
  const nodes = [
    {x: 240, y: 52, label: 'Câu hỏi', ty: -16},
    {x: 405, y: 112, label: 'So sánh', ty: -16},
    {x: 405, y: 244, label: 'Chi phí', ty: 30},
    {x: 240, y: 304, label: 'Trang dịch vụ', ty: 30, acc: true},
    {x: 75, y: 244, label: 'Case study', ty: 30},
    {x: 75, y: 112, label: 'Quy trình', ty: -16}
  ];
  return (
    <Figure
      card={card}
      id="dg-seo"
      viewBox="0 0 480 350"
      title="Sơ đồ cụm chủ đề SEO"
      desc="Một trang trụ cột ở giữa, sáu nhóm bài vệ tinh xung quanh, tất cả dẫn về trang dịch vụ."
      caption="Mỗi cụm bài trả lời một câu hỏi của người mua, và cùng dẫn về trang dịch vụ."
    >
      <ellipse cx={cx} cy={cy} rx="185" ry="128" className="dash fd" style={{'--d': '200ms'}}/>
      {nodes.map((n, i) => (
        <L key={n.label} x1={cx} y1={cy} x2={n.x} y2={n.y} d={300 + i * 120} c={n.acc ? 'acc' : ''}/>
      ))}
      <R x={170} y={150} w={140} h={56} d={0}/>
      <T x={cx} y={184} c="mid b" d={500}>Trang trụ cột</T>
      {nodes.map((n, i) => (
        <g key={n.label}>
          <C cx={n.x} cy={n.y} r={n.acc ? 8 : 6} d={900 + i * 120} c={n.acc ? 'fillAcc acc' : 'fill'}/>
          <T x={n.x} y={n.y + n.ty} c={`mid ${n.acc ? 'acc' : ''}`} d={1100 + i * 120}>{n.label}</T>
        </g>
      ))}
    </Figure>
  );
}

// SEO & AI Overview: đồ thị thực thể
function AiEntity({card}){
  const left = ['Tác giả', 'Schema', 'FAQ', 'Báo chí nhắc tên'];
  return (
    <Figure
      card={card}
      id="dg-ai"
      viewBox="0 0 480 330"
      title="Sơ đồ thực thể thương hiệu cho AI Search"
      desc="Tác giả, schema, FAQ và báo chí cùng xác nhận thương hiệu, từ đó AI trích dẫn website trong câu trả lời."
      caption="AI tổng hợp tín hiệu từ nhiều nguồn trước khi chọn website để trích dẫn."
    >
      {left.map((label, i) => {
        const y = 30 + i * 72;
        return (
          <g key={label}>
            <R x={10} y={y} w={140} h={44} d={i * 120}/>
            <T x={80} y={y + 28} c="mid" d={300 + i * 120}>{label}</T>
            <P path={`M150 ${y + 22} C 185 ${y + 22}, 175 165, 196 165`} d={500 + i * 120} c="soft"/>
          </g>
        );
      })}
      <C cx={240} cy={165} r={44} d={700}/>
      <TL x={240} y={160} lines={['Thương', 'hiệu']} lh={19} c="mid b" d={1100}/>
      <Arrow x1={286} y1={165} x2={318} y2={165} d={1200} c="acc"/>
      <R x={322} y={92} w={150} h={146} d={1300}/>
      <T x={336} y={120} c="b" d={1700}>Câu trả lời AI</T>
      <L x1={336} y1={140} x2={456} y2={140} c="soft" d={1800}/>
      <L x1={336} y1={156} x2={440} y2={156} c="soft" d={1850}/>
      <L x1={336} y1={172} x2={450} y2={172} c="soft" d={1900}/>
      <R x={336} y={190} w={120} h={30} d={2000} c="fill acc"/>
      <T x={396} y={210} c="mid acc" d={2300}>Nguồn: bạn</T>
    </Figure>
  );
}

// Local SEO: bản đồ bán kính
function LocalMap({card}){
  const cx = 200, cy = 190;
  return (
    <Figure
      card={card}
      id="dg-local"
      viewBox="0 0 480 340"
      title="Sơ đồ bán kính tìm kiếm địa phương"
      desc="Cửa hàng ở trung tâm, vòng bán kính 3 km, đối thủ xung quanh và bảng xếp hạng Google Maps."
      caption="Mục tiêu: vào nhóm 3 kết quả đầu trên Google Maps trong bán kính phục vụ."
    >
      {[60, 120, 180, 240, 300].map((y, i) => <L key={`h${y}`} x1={10} y1={y} x2={330} y2={y} c="soft" d={i * 60}/>)}
      {[50, 120, 190, 260].map((x, i) => <L key={`v${x}`} x1={x} y1={30} x2={x} y2={330} c="soft" d={150 + i * 60}/>)}
      <L x1={10} y1={320} x2={330} y2={70} c="soft" d={400}/>
      <circle cx={cx} cy={cy} r="120" className="shade fd" style={{'--d': '600ms'}}/>
      <C cx={cx} cy={cy} r={120} d={600} c="acc"/>
      <T x={cx + 88} y={cy + 100} c="acc" d={1400}>3 km</T>
      {[[95, 95], [300, 260], [290, 105]].map(([x, y], i) => (
        <g key={i}>
          <C cx={x} cy={y} r={7} d={1000 + i * 100}/>
          <Dot cx={x} cy={y} r={2.5} d={1300 + i * 100}/>
        </g>
      ))}
      <P path={`M${cx} ${cy + 6} C ${cx - 22} ${cy - 18}, ${cx - 16} ${cy - 40}, ${cx} ${cy - 40} C ${cx + 16} ${cy - 40}, ${cx + 22} ${cy - 18}, ${cx} ${cy + 6} Z`} d={800} c="fillAcc acc"/>
      <circle cx={cx} cy={cy - 24} r="6" className="fd" style={{fill: 'var(--paper)', '--d': '1400ms'}}/>
      <R x={340} y={30} w={130} h={128} d={1200}/>
      <T x={352} y={54} c="b" d={1500}>Google Maps</T>
      <T x={352} y={84} c="acc" d={1650}>1. Bạn</T>
      <T x={352} y={110} d={1750}>2. Đối thủ A</T>
      <T x={352} y={136} d={1850}>3. Đối thủ B</T>
    </Figure>
  );
}

// Google Ads: phễu
function AdsFunnel({card}){
  const layers = [
    {w: 300, label: 'Truy vấn', note: 'Lọc từ khóa phủ định'},
    {w: 230, label: 'Click', note: 'Landing đúng ý định'},
    {w: 160, label: 'Lead đạt chuẩn', note: 'Đồng bộ dữ liệu CRM'},
    {w: 96, label: 'Đơn có lợi nhuận', note: 'Bid theo lợi nhuận', acc: true}
  ];
  const cx = 160, h = 58, gap = 12, top = 20;
  return (
    <Figure
      card={card}
      id="dg-ads"
      viewBox="0 0 480 300"
      title="Phễu Google Ads từ truy vấn đến đơn có lợi nhuận"
      desc="Bốn tầng: truy vấn, click, lead đạt chuẩn, đơn có lợi nhuận, mỗi tầng có một việc tối ưu."
      caption="Tối ưu ở từng tầng phễu, không chỉ ở giá click."
    >
      {layers.map((l, i) => {
        const y = top + i * (h + gap);
        const next = layers[i + 1] ? layers[i + 1].w : l.w - 50;
        const x1 = cx - l.w / 2, x2 = cx + l.w / 2;
        const bx1 = cx - next / 2 + 6, bx2 = cx + next / 2 - 6;
        return (
          <g key={l.label}>
            <P path={`M${x1} ${y} L${x2} ${y} L${bx2} ${y + h} L${bx1} ${y + h} Z`} d={i * 200} c={l.acc ? 'fillAcc acc' : 'fill'}/>
            <L x1={x2 + 8} y1={y + h / 2} x2={316} y2={y + h / 2} c="soft" d={600 + i * 200}/>
            <T x={324} y={y + h / 2 - 3} c={l.acc ? 'acc' : 'b'} d={800 + i * 200}>{l.label}</T>
            <T x={324} y={y + h / 2 + 17} d={900 + i * 200}>{l.note}</T>
          </g>
        );
      })}
    </Figure>
  );
}

// Meta & TikTok: ma trận creative
function CreativeMatrix({card}){
  const x0 = 100, y0 = 52, cw = 88, ch = 66;
  const hooks = ['Hook A', 'Hook B', 'Hook C'];
  const offers = ['Offer 1', 'Offer 2', 'Offer 3'];
  const bars = [[40, 22, 30], [28, 18, 66], [16, 34, 26]];
  return (
    <Figure
      card={card}
      id="dg-creative"
      viewBox="0 0 480 300"
      title="Ma trận test creative"
      desc="Ba hook nhân ba offer thành chín mẫu quảng cáo, mẫu thắng được mở rộng ngân sách."
      caption="Test theo ma trận để biết thứ gì làm quảng cáo thắng, rồi mới tăng ngân sách."
    >
      {offers.map((o, j) => <T key={o} x={x0 + j * cw + cw / 2} y={38} c="mid b" d={j * 100}>{o}</T>)}
      {hooks.map((hk, i) => <T key={hk} x={x0 - 12} y={y0 + i * ch + ch / 2 + 5} c="end b" d={200 + i * 100}>{hk}</T>)}
      {hooks.map((hk, i) => offers.map((o, j) => {
        const win = i === 1 && j === 2;
        const x = x0 + j * cw, y = y0 + i * ch;
        return (
          <g key={hk + o}>
            <R x={x} y={y} w={cw} h={ch} d={300 + (i * 3 + j) * 70} c={win ? 'fill acc' : 'fill'}/>
            <L x1={x + 12} y1={y + ch - 18} x2={x + 12 + bars[i][j]} y2={y + ch - 18} c={win ? 'acc' : 'soft'} d={1000 + (i * 3 + j) * 70}/>
          </g>
        );
      }))}
      <Arrow x1={x0 + 3 * cw + 4} y1={y0 + ch + ch / 2} x2={x0 + 3 * cw + 24} y2={y0 + ch + ch / 2} d={1800} c="acc"/>
      <TL x={x0 + 3 * cw + 30} y={y0 + ch + ch / 2 - 4} lines={['Mở rộng', 'ngân sách']} c="acc" d={2200}/>
      <T x={x0 + 2 * cw + 12} y={y0 + ch + 26} c="acc" d={1900}>Thắng</T>
    </Figure>
  );
}

// CRO: wireframe landing page có đánh dấu
function CroWireframe({card}){
  const marks = [
    {y: 92, label: 'Thông điệp rõ'},
    {y: 150, label: 'CTA nổi bật'},
    {y: 206, label: 'Bằng chứng'},
    {y: 272, label: 'Form ngắn'}
  ];
  return (
    <Figure
      card={card}
      id="dg-cro"
      viewBox="0 0 480 340"
      title="Landing page với bốn điểm cần tối ưu"
      desc="Khung landing page: thông điệp, nút kêu gọi, bằng chứng, form, mỗi phần được đánh số."
      caption="Bốn chỗ khách hay rời trang, sắp theo thứ tự cần sửa."
    >
      <R x={20} y={20} w={260} h={300} d={0}/>
      <L x1={20} y1={44} x2={280} y2={44} d={200}/>
      {[34, 46, 58].map((x, i) => <Dot key={x} cx={x} cy={32} r={3} d={400 + i * 80}/>)}
      <L x1={44} y1={80} x2={230} y2={80} d={500}/>
      <L x1={44} y1={98} x2={196} y2={98} d={560}/>
      <L x1={44} y1={118} x2={210} y2={118} c="soft" d={620}/>
      <R x={44} y={136} w={96} h={28} d={700} c="fill acc"/>
      {[44, 116, 188].map((x, i) => <R key={x} x={x} y={188} w={64} h={36} d={800 + i * 80} c="fill2 soft"/>)}
      {[248, 268].map((y, i) => <L key={y} x1={44} y1={y} x2={256} y2={y} c="soft" d={1000 + i * 80}/>)}
      <R x={44} y={284} w={80} h={22} d={1150}/>
      {marks.map((m, i) => (
        <g key={m.label}>
          <L x1={262} y1={m.y} x2={318} y2={m.y} c="soft" d={1300 + i * 150}/>
          <C cx={330} cy={m.y} r={12} d={1400 + i * 150} c="fill acc"/>
          <T x={330} y={m.y + 5} c="mid acc" d={1600 + i * 150}>{i + 1}</T>
          <T x={352} y={m.y + 5} c="b" d={1700 + i * 150}>{m.label}</T>
        </g>
      ))}
    </Figure>
  );
}

// Content: hành trình nội dung
function ContentJourney({card}){
  const stages = [
    {x: 85, name: 'Nhận biết', cards: ['Bài hướng dẫn', 'Bài chuyên gia']},
    {x: 240, name: 'Cân nhắc', cards: ['So sánh', 'Hỏi đáp']},
    {x: 395, name: 'Quyết định', cards: ['Case study', 'Tài liệu cho sales'], acc: true}
  ];
  return (
    <Figure
      card={card}
      id="dg-content"
      viewBox="0 0 480 300"
      title="Nội dung theo hành trình mua"
      desc="Ba giai đoạn nhận biết, cân nhắc, quyết định, mỗi giai đoạn có loại nội dung riêng."
      caption="Mỗi giai đoạn cần một loại nội dung khác nhau, không chỉ đăng bài đều."
    >
      <Arrow x1={14} y1={56} x2={468} y2={56} d={0}/>
      {stages.map((s, i) => (
        <g key={s.name}>
          <C cx={s.x} cy={56} r={7} d={400 + i * 200} c={s.acc ? 'fillAcc acc' : 'fill'}/>
          <T x={s.x} y={34} c={`mid ${s.acc ? 'acc' : 'b'}`} d={600 + i * 200}>{s.name}</T>
          <L x1={s.x} y1={63} x2={s.x} y2={96} c="soft" d={700 + i * 200}/>
          {s.cards.map((card, j) => (
            <g key={card}>
              <R x={s.x - 72} y={96 + j * 62} w={144} h={46} d={900 + i * 200 + j * 120} c={s.acc ? 'fill acc' : 'fill'}/>
              <T x={s.x} y={96 + j * 62 + 29} c="mid" d={1200 + i * 200 + j * 120}>{card}</T>
            </g>
          ))}
        </g>
      ))}
      <L x1={20} y1={250} x2={460} y2={250} c="soft" d={1800}/>
      <T x={240} y={280} c="mid" d={2000}>Cùng dẫn về trang dịch vụ và form liên hệ</T>
    </Figure>
  );
}

// GA4: luồng dữ liệu
function DataFlow({card}){
  const sources = ['Website', 'Quảng cáo', 'CRM'];
  return (
    <Figure
      card={card}
      id="dg-data"
      viewBox="0 0 480 330"
      title="Luồng dữ liệu từ nguồn đến quyết định"
      desc="Website, quảng cáo và CRM đổ dữ liệu vào GA4 và GTM, lên dashboard, rồi thành quyết định ngân sách."
      caption="Một nguồn số liệu chung cho marketing và sales."
    >
      {sources.map((s, i) => {
        const y = 24 + i * 78;
        return (
          <g key={s}>
            <R x={10} y={y} w={120} h={46} d={i * 120}/>
            <T x={70} y={y + 29} c="mid" d={300 + i * 120}>{s}</T>
            <P path={`M130 ${y + 23} C 160 ${y + 23}, 150 125, 182 125`} d={500 + i * 120} c="soft"/>
          </g>
        );
      })}
      <R x={182} y={86} w={104} h={78} d={800}/>
      <TL x={234} y={120} lines={['GA4', '+ GTM']} lh={20} c="mid b" d={1100}/>
      <Arrow x1={286} y1={125} x2={326} y2={125} d={1200}/>
      <R x={330} y={60} w={140} h={130} d={1300}/>
      <T x={344} y={84} c="b" d={1600}>Dashboard</T>
      {[[350, 40], [376, 64], [402, 52], [428, 82]].map(([x, hgt], i) => (
        <L key={x} x1={x} y1={176} x2={x} y2={176 - hgt} c={i === 3 ? 'acc' : ''} d={1700 + i * 100}/>
      ))}
      <Arrow x1={400} y1={190} x2={400} y2={244} d={2100} c="acc"/>
      <R x={182} y={248} w={288} h={52} d={2300} c="fill acc"/>
      <T x={326} y={280} c="mid acc" d={2600}>Quyết định ngân sách</T>
    </Figure>
  );
}

// Sprint: dòng thời gian 90 ngày
function SprintTimeline({card}){
  const x0 = 30, x1 = 450, span = x1 - x0;
  const dx = day => x0 + (span * day) / 90;
  const sprints = [14, 28, 42, 56, 70];
  return (
    <Figure
      card={card}
      id="dg-sprint"
      viewBox="0 0 480 270"
      title="Dòng thời gian sprint 90 ngày"
      desc="Hai tuần đầu chẩn đoán, sau đó năm sprint hai tuần, kết thúc bằng đánh giá ngày 90."
      caption="Hai tuần chẩn đoán, sau đó cứ hai tuần một lần xem số liệu và quyết định."
    >
      <Arrow x1={x0} y1={200} x2={x1 + 14} y2={200} d={0}/>
      {[0, 30, 60, 90].map((day, i) => (
        <g key={day}>
          <L x1={dx(day)} y1={194} x2={dx(day)} y2={206} d={300 + i * 100}/>
          <T x={dx(day)} y={232} c={day === 0 ? '' : day === 90 ? 'end' : 'mid'} d={500 + i * 100}>{`Ngày ${day}`}</T>
        </g>
      ))}
      <R x={dx(0)} y={130} w={dx(14) - dx(0) - 4} h={50} d={700} c="fill acc"/>
      <TL x={(dx(0) + dx(14)) / 2 - 2} y={152} lines={['Chẩn', 'đoán']} lh={17} c="mid acc" d={1000}/>
      {sprints.map((start, i) => (
        <g key={start}>
          <R x={dx(start)} y={130} w={dx(start + 14) - dx(start) - 4} h={50} d={900 + i * 150}/>
          <T x={(dx(start) + dx(start + 14)) / 2 - 2} y={161} c="mid b" d={1200 + i * 150}>S{i + 1}</T>
        </g>
      ))}
      <P path={`M${dx(7)} 118 L${dx(7)} 74`} d={1800} c="soft"/>
      <T x={dx(7) - 8} y={64} d={2000}>Roadmap</T>
      <P path={`M${dx(84)} 118 L${dx(84)} 74`} d={1900} c="soft"/>
      <T x={dx(84) + 8} y={64} c="end" d={2100}>Đánh giá 90 ngày</T>
    </Figure>
  );
}

const MAP = {
  'seo-tong-the': SeoCluster,
  'seo-ai-overview': AiEntity,
  'local-seo-google-maps': LocalMap,
  'google-ads-shopping': AdsFunnel,
  'meta-tiktok-ads': CreativeMatrix,
  'cro-landing-page': CroWireframe,
  'content-marketing-pr': ContentJourney,
  'ga4-looker-dashboard': DataFlow,
  'tu-van-chien-luoc-sprint': SprintTimeline
};

export default function ServiceDiagram({slug, card = false}){
  const Comp = MAP[slug];
  return Comp ? <Comp card={card}/> : null;
}
