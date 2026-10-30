(async () => {
if (figma.root.name !== 'SOHO') throw new Error('WRONG FILE');
// Thư viện dựng khung Figma từ spec JSON (dập vào đầu mỗi script exec-js bởi build-page.mjs).
// Mọi màu, cỡ, bo góc tham chiếu TÊN biến trong collection SOHO; chữ dùng text style. Không hex rời.
/* eslint-disable */
const NS = 'soho';
const _vars = new Map();
const _texts = new Map();
const _paints = new Map();
const _comps = new Map();
async function prime(page) {
  for (const v of await figma.variables.getLocalVariablesAsync()) _vars.set(v.name, v);
  for (const t of await figma.getLocalTextStylesAsync()) { _texts.set(t.name, t); await figma.loadFontAsync(t.fontName); }
  for (const p of await figma.getLocalPaintStylesAsync()) _paints.set(p.name, p);
  for (const p of figma.root.children) {
    await p.loadAsync();
    for (const c of p.findAllWithCriteria({types: ['COMPONENT', 'COMPONENT_SET']})) _comps.set(c.name, c);
  }
}
const mustVar = name => { const v = _vars.get(name); if (!v) throw new Error('no variable ' + name); return v; };
const mustText = name => { const t = _texts.get(name); if (!t) throw new Error('no text style ' + name); return t; };
const tag = (node, key) => node.setSharedPluginData(NS, 'key', key);
const solid = name => figma.variables.setBoundVariableForPaint({type: 'SOLID', color: {r: 0, g: 0, b: 0}}, 'color', mustVar(name));
const paintOf = ref => (ref.startsWith('gradient/') ? _paints.get(ref).paints : [solid(ref)]);
const num = ref => (typeof ref === 'number' ? ref : mustVar(ref).valuesByMode[Object.keys(mustVar(ref).valuesByMode)[0]]);
const bindNum = (node, field, ref) => { if (typeof ref === 'string') node.setBoundVariable(field, mustVar(ref)); else node[field] = ref; };

async function frame(spec, parent) {
  const f = figma.createFrame();
  f.name = spec.name || 'frame';
  parent.appendChild(f);
  f.fills = spec.bg ? paintOf(spec.bg) : [];
  if (spec.stroke) { f.strokes = [solid(spec.stroke)]; f.strokeWeight = spec.strokeW || 1; }
  if (spec.radius != null) bindNum(f, 'topLeftRadius', spec.radius), bindNum(f, 'topRightRadius', spec.radius), bindNum(f, 'bottomLeftRadius', spec.radius), bindNum(f, 'bottomRightRadius', spec.radius);
  if (spec.layout) {
    f.layoutMode = spec.layout === 'row' ? 'HORIZONTAL' : 'VERTICAL';
    f.itemSpacing = spec.gap != null ? num(spec.gap) : 0;
    const pad = spec.pad == null ? [0] : Array.isArray(spec.pad) ? spec.pad : [spec.pad];
    const [pt, pr = pt, pb = pt, pl = pr] = pad.map(num);
    f.paddingTop = pt; f.paddingRight = pr; f.paddingBottom = pb; f.paddingLeft = pl;
    f.primaryAxisAlignItems = {start: 'MIN', center: 'CENTER', end: 'MAX', between: 'SPACE_BETWEEN'}[spec.justify || 'start'];
    f.counterAxisAlignItems = {start: 'MIN', center: 'CENTER', end: 'MAX', baseline: 'BASELINE'}[spec.align || 'start'];
    if (spec.wrap) { f.layoutWrap = 'WRAP'; f.counterAxisSpacing = spec.rowGap != null ? num(spec.rowGap) : f.itemSpacing; }
  }
  if (spec.rotate) f.rotation = spec.rotate;
  for (const c of spec.children || []) await build(c, f);
  // kích thước đặt SAU khi có con (luật thứ tự: append → resize → layoutSizing)
  if (spec.w != null && spec.h != null) f.resize(num(spec.w), num(spec.h));
  else if (spec.w != null) f.resize(num(spec.w), Math.max(f.height, 1));
  if (spec.layout) {
    f.primaryAxisSizingMode = spec.layout === 'row' ? (spec.w != null ? 'FIXED' : 'AUTO') : (spec.h != null ? 'FIXED' : 'AUTO');
    f.counterAxisSizingMode = spec.layout === 'row' ? (spec.h != null ? 'FIXED' : 'AUTO') : (spec.w != null ? 'FIXED' : 'AUTO');
  }
  if (parent.layoutMode && parent.layoutMode !== 'NONE') {
    if (spec.fill) f.layoutSizingHorizontal = 'FILL';
    if (spec.fillV) f.layoutSizingVertical = 'FILL';
    if (spec.grow) f.layoutGrow = 1;
  }
  if (spec.x != null) f.x = spec.x;
  if (spec.y != null) f.y = spec.y;
  if (spec.clip != null) f.clipsContent = spec.clip;
  if (spec.key) tag(f, spec.key);
  return f;
}
async function text(spec, parent) {
  const t = figma.createText();
  parent.appendChild(t);
  const st = mustText(spec.style || 'Text/Body');
  t.fontName = st.fontName;
  t.characters = spec.chars || '';
  await t.setTextStyleIdAsync(st.id);
  t.fills = paintOf(spec.fill || 'color/role/text');
  if (spec.maxW) { t.textAutoResize = 'HEIGHT'; t.resize(num(spec.maxW), t.height); } else t.textAutoResize = 'WIDTH_AND_HEIGHT';
  if (spec.alignX) t.textAlignHorizontal = spec.alignX.toUpperCase();
  for (const r of spec.ranges || []) {
    const i = t.characters.indexOf(r.text);
    if (i < 0) continue;
    if (r.fill) t.setRangeFills(i, i + r.text.length, paintOf(r.fill));
    if (r.style) { const rs = mustText(r.style); await t.setRangeTextStyleIdAsync(i, i + r.text.length, rs.id); }
  }
  if (parent.layoutMode && parent.layoutMode !== 'NONE' && spec.fill_) t.layoutSizingHorizontal = 'FILL';
  if (spec.key) tag(t, spec.key);
  return t;
}
function rect(spec, parent) {
  const r = figma.createRectangle();
  r.name = spec.name || 'rect';
  parent.appendChild(r);
  r.resize(num(spec.w), num(spec.h));
  r.fills = spec.bg ? paintOf(spec.bg) : [];
  if (spec.stroke) { r.strokes = [solid(spec.stroke)]; r.strokeWeight = spec.strokeW || 1; }
  if (spec.radius != null) r.cornerRadius = num(spec.radius);
  if (spec.rotate) r.rotation = spec.rotate;
  if (spec.x != null) r.x = spec.x;
  if (spec.y != null) r.y = spec.y;
  if (parent.layoutMode && parent.layoutMode !== 'NONE' && spec.fill_) r.layoutSizingHorizontal = 'FILL';
  if (spec.key) tag(r, spec.key);
  return r;
}
function line(spec, parent) {
  // Đường kẻ tay: vector hơi võng nếu spec.bend, nếu không là rect mỏng
  const h = num(spec.h || 'device/rule');
  const v = figma.createVector();
  parent.appendChild(v);
  const w = num(spec.w);
  const k = spec.bend || 0;
  v.vectorPaths = [{windingRule: 'NONE', data: `M 0 ${h} Q ${w / 2} ${h + k} ${w} ${h}`}];
  v.strokes = [solid(spec.color || 'color/role/text')];
  v.strokeWeight = h;
  v.strokeCap = 'ROUND';
  v.fills = [];
  v.resize(w, Math.max(h, Math.abs(k) + h));
  if (spec.x != null) v.x = spec.x;
  if (spec.y != null) v.y = spec.y;
  if (spec.key) tag(v, spec.key);
  return v;
}
function ellipse(spec, parent) {
  const e = figma.createEllipse();
  e.name = spec.name || 'ellipse';
  parent.appendChild(e);
  e.resize(num(spec.w), num(spec.h || spec.w));
  e.fills = spec.bg ? paintOf(spec.bg) : [];
  if (spec.stroke) { e.strokes = [solid(spec.stroke)]; e.strokeWeight = spec.strokeW || 1.5; }
  if (spec.rotate) e.rotation = spec.rotate;
  if (spec.x != null) e.x = spec.x;
  if (spec.y != null) e.y = spec.y;
  if (spec.key) tag(e, spec.key);
  return e;
}
async function instance(spec, parent) {
  const c = _comps.get(spec.component);
  if (!c) throw new Error('no component ' + spec.component);
  const comp = c.type === 'COMPONENT_SET' ? c.defaultVariant : c;
  const i = comp.createInstance();
  parent.appendChild(i);
  if (spec.props) i.setProperties(spec.props);
  if (spec.texts) {
    for (const [name, chars] of Object.entries(spec.texts)) {
      const t = i.findOne(n => n.type === 'TEXT' && n.name === name);
      if (t) { await figma.loadFontAsync(t.fontName); t.characters = chars; }
    }
  }
  if (parent.layoutMode && parent.layoutMode !== 'NONE' && spec.fill) i.layoutSizingHorizontal = 'FILL';
  if (spec.w != null && spec.h != null) i.resize(num(spec.w), num(spec.h));
  if (spec.x != null) i.x = spec.x;
  if (spec.y != null) i.y = spec.y;
  if (spec.key) tag(i, spec.key);
  return i;
}
async function slot(spec, parent) {
  // Chỗ dành cho sơ đồ live (code giữ nguyên): khung viền đứt + nhãn
  const f = await frame({...spec, type: 'frame', bg: 'color/role/bg', children: []}, parent);
  f.strokes = [solid('color/role/border-strong')];
  f.strokeWeight = 1;
  f.dashPattern = [6, 6];
  const t = await text({type: 'text', style: 'Text/Meta', fill: 'color/role/text-muted', chars: 'Sơ đồ live: ' + (spec.ref || '')}, f);
  t.x = 16; t.y = 16;
  return f;
}
async function build(spec, parent) {
  const fn = {frame, text, rect, line, ellipse, instance, slot}[spec.type || 'frame'];
  if (!fn) throw new Error('unknown type ' + spec.type);
  return await fn(spec, parent);
}
function findKey(root, key) { return root.findOne(n => n.getSharedPluginData(NS, 'key') === key); }
async function section(page, name) {
  let s = page.findOne(n => n.type === 'SECTION' && n.name === name);
  if (!s) { s = figma.createSection(); s.name = name; page.appendChild(s); }
  return s;
}

const page = figma.root.children.find(p => p.name === "01 Design");
if (!page) throw new Error('no page ' + "01 Design");
await page.loadAsync();
await figma.setCurrentPageAsync(page);
await prime(page);
const errors = [];

const root = findKey(page, "home-hero-1440");
if (!root) throw new Error('run 00-root first');
const KEY = "home-hero-1440:hero";
const old = findKey(root, KEY);
const index = old ? root.children.indexOf(old) : 1;
if (old) old.remove(); // dựng lại section này (idempotent theo key)
const node = await build({"key":"home-hero-1440:hero","name":"hero — bàn làm việc","layout":"row","gap":40,"align":"center","pad":[96,140,88,140],"children":[{"type":"frame","name":"copy","layout":"col","gap":24,"w":600,"children":[{"type":"text","style":"Text/Note","fill":"color/role/text-muted","chars":"Trang chủ"},{"type":"text","style":"Display/H1","maxW":600,"chars":"SOHO Agency, SEO, quảng cáo và website.\nTừ tìm kiếm đến doanh thu.","ranges":[{"text":"doanh thu","fill":"gradient/signature-text"}]},{"type":"text","style":"Text/Lead","fill":"color/role/text-2","maxW":520,"chars":"Từ chiến lược đến tự tay triển khai: SEO, Google Ads, Facebook Ads, website và nhận diện thương hiệu. Báo cáo bằng khách hàng và doanh thu, không bằng lượt xem."},{"type":"frame","layout":"row","gap":24,"align":"center","children":[{"type":"frame","layout":"row","pad":[16,24],"radius":"radius/md","bg":"color/role/primary","children":[{"type":"text","style":"Text/Button","fill":"color/role/text","chars":"Nhận tư vấn  →"}]},{"type":"text","style":"Text/Body-Strong","fill":"color/role/primary-text","chars":"Xem SOHO đã làm gì"}]},{"type":"text","style":"Text/Small","fill":"color/role/text-muted","chars":"Hoặc gọi 033 678 2222 · Thứ 2 đến thứ 6, 8:00 đến 17:00"}]},{"type":"frame","name":"paper — sơ đồ hành trình","layout":"col","gap":28,"pad":32,"w":520,"radius":"radius/card","bg":"color/role/bg-soft","stroke":"color/role/border","children":[{"type":"text","style":"Text/Note","fill":"color/role/text-muted","chars":"Ba chặng khách đi qua, SOHO đo ở mỗi chặng một con số"},{"type":"frame","name":"journey","layout":"row","gap":0,"align":"start","children":[{"type":"frame","layout":"col","gap":10,"w":136,"children":[{"type":"ellipse","w":"device/stamp","stroke":"color/role/primary-text","strokeW":1.5,"rotate":-6},{"type":"text","style":"Display/H3","chars":"Được tìm thấy","maxW":136},{"type":"text","style":"Text/Small","fill":"color/role/text-2","maxW":128,"chars":"Độ phủ nhóm từ khóa người muốn mua"}]},{"type":"line","w":24,"h":"device/rule-ink","bend":2,"y":22},{"type":"frame","layout":"col","gap":10,"w":136,"children":[{"type":"ellipse","w":"device/stamp","stroke":"color/role/primary-text","strokeW":1.5,"rotate":-6},{"type":"text","style":"Display/H3","chars":"Được chọn","maxW":136},{"type":"text","style":"Text/Small","fill":"color/role/text-2","maxW":128,"chars":"Khách để lại thông tin từ Google"}]},{"type":"line","w":24,"h":"device/rule-ink","bend":-2,"y":22},{"type":"frame","layout":"col","gap":10,"w":136,"children":[{"type":"ellipse","w":"device/stamp","bg":"color/role/primary","stroke":"color/role/primary-text","strokeW":1.5,"rotate":-6},{"type":"text","style":"Display/H3","chars":"Được tin, mua","maxW":136},{"type":"text","style":"Text/Small","fill":"color/role/text-2","maxW":128,"chars":"Chi phí mỗi đơn, lợi nhuận gộp"}]}]},{"type":"line","w":456,"h":"device/rule","color":"color/role/border"},{"type":"frame","layout":"row","justify":"between","align":"end","children":[{"type":"frame","name":"sticky-note","layout":"col","pad":[16,18],"radius":"radius/sm","bg":"color/role/primary","stroke":"color/role/border","w":240,"rotate":-1.2,"children":[{"type":"text","style":"Text/Meta","fill":"color/role/text","chars":"SOHO BÁO CÁO BẰNG"},{"type":"text","style":"Text/Body-Strong","fill":"color/role/text","maxW":204,"chars":"Số đơn và doanh thu, không bằng lượt xem."}]},{"type":"rect","name":"decor flag (ảnh 3D, đặt tĩnh)","w":140,"h":140,"bg":"color/role/surface","radius":"radius/md"}]}]}],"type":"frame","fill":true}, root);
root.insertChild(Math.min(index, root.children.length - 1), node);
node.layoutSizingHorizontal = 'FILL';
if (node.height < 40) errors.push('section collapsed ' + KEY + ' ' + node.height);
return {id: node.id, key: KEY, h: node.height, errors};
})()