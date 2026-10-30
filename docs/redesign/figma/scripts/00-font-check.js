(async () => {
// ── 1. GUARDS ──
if (figma.root.name !== 'SOHO') throw new Error('WRONG FILE: ' + figma.root.name);
const RUN_ID = '261030-0001-font-check';
const NS = 'soho';
let page = figma.root.children.find(p => p.name === '00 Tokens');
if (!page) { page = figma.createPage(); page.name = '00 Tokens'; }
await page.loadAsync();
await figma.setCurrentPageAsync(page);
const already = page.findOne(n => n.getSharedPluginData(NS, 'key') === 'font-check');
if (already) already.remove(); // bảng kiểm font luôn dựng lại từ đầu (chỉ là bảng thử)

// ── 2. SETUP ──
const WANT = [
  ['Bricolage Grotesque', ['SemiBold', 'Bold', 'ExtraBold']],
  ['Plus Jakarta Sans', ['Regular', 'Medium', 'SemiBold', 'Bold', 'ExtraBold']]
];
const all = await figma.listAvailableFontsAsync();
const have = new Set(all.map(f => f.fontName.family + '/' + f.fontName.style));
const missing = [];
const loaded = [];
for (const [family, styles] of WANT) {
  for (const style of styles) {
    if (!have.has(family + '/' + style)) { missing.push(family + '/' + style); continue; }
    await figma.loadFontAsync({family, style});
    loaded.push(family + '/' + style);
  }
}
if (!loaded.length) throw new Error('No wanted fonts available: ' + missing.join(', '));

// ── 3. SPEC ──
const SAMPLES = [
  ['Bricolage Grotesque', 'ExtraBold', 76, 'Ế Ứ Ỡ Ặ Ằ ưởng ễ Đ'],
  ['Bricolage Grotesque', 'Bold', 48, 'Từ tìm kiếm đến doanh thu'],
  ['Plus Jakarta Sans', 'Regular', 17, 'Dành cho doanh nghiệp đã có website và sản phẩm rõ ràng, nhưng lượt truy cập từ Google chưa thành khách.'],
  ['Plus Jakarta Sans', 'SemiBold', 15, 'Giới hạn của số liệu: tháng đầu, kế hoạch 6 tháng.']
];

// ── 4. MUTATIONS ──
const errors = [];
const frame = figma.createFrame();
frame.name = 'font-check';
frame.setSharedPluginData(NS, 'key', 'font-check');
frame.x = 0; frame.y = 0;
frame.layoutMode = 'VERTICAL';
frame.itemSpacing = 24;
frame.paddingTop = frame.paddingBottom = frame.paddingLeft = frame.paddingRight = 48;
frame.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}];
frame.primaryAxisSizingMode = 'AUTO';
frame.counterAxisSizingMode = 'AUTO';
page.appendChild(frame);
const texts = [];
for (const [family, style, size, chars] of SAMPLES) {
  if (!have.has(family + '/' + style)) { errors.push('missing ' + family + '/' + style); continue; }
  const t = figma.createText();
  frame.appendChild(t);
  t.fontName = {family, style};
  t.fontSize = size;
  t.lineHeight = {value: size >= 48 ? 106 : 165, unit: 'PERCENT'};
  t.characters = chars;
  t.fills = [{type: 'SOLID', color: {r: 0.078, g: 0.071, b: 0.094}}];
  t.textAutoResize = 'WIDTH_AND_HEIGHT';
  texts.push({id: t.id, w: t.width, h: t.height, family, style});
}

// ── 5. ASSERTS ──
if (texts.length !== SAMPLES.length) errors.push('texts ' + texts.length + '/' + SAMPLES.length);
if (frame.width < 200) errors.push('frame collapsed ' + frame.width);

// ── 6. RETURN ──
return {runId: RUN_ID, frameId: frame.id, loaded, missing, texts, errors};
})()
