(async () => {
// ── 1. GUARDS ──
if (figma.root.name !== 'SOHO') throw new Error('WRONG FILE');
const RUN_ID = '261030-0003-token-sheet';
const NS = 'soho';
const page = figma.root.children.find(p => p.name === '00 Tokens & Devices');
if (!page) throw new Error('no tokens page');
await page.loadAsync();
await figma.setCurrentPageAsync(page);
const old = page.findOne(n => n.getSharedPluginData(NS, 'key') === 'token-sheet');
if (old) old.remove(); // bảng tham chiếu, dựng lại từ biến mỗi lần chạy

// ── 2. SETUP ──
const FONTS = [{family: 'Bricolage Grotesque', style: 'Bold'}, {family: 'Plus Jakarta Sans', style: 'Regular'}, {family: 'Plus Jakarta Sans', style: 'Medium'}];
for (const f of FONTS) await figma.loadFontAsync(f);
const vars = (await figma.variables.getLocalVariablesAsync()).filter(v => v.name.startsWith('color/'));
const texts = await figma.getLocalTextStylesAsync();
for (const t of texts) await figma.loadFontAsync(t.fontName);
const ink = {r: 0.078, g: 0.071, b: 0.094};
const label = (chars, size = 13, style = 'Medium', family = 'Plus Jakarta Sans') => {
  const t = figma.createText();
  t.fontName = {family, style};
  t.fontSize = size;
  t.characters = chars;
  t.fills = [{type: 'SOLID', color: ink}];
  return t;
};

// ── 4. MUTATIONS ──
const sheet = figma.createFrame();
sheet.name = 'token-sheet';
sheet.setSharedPluginData(NS, 'key', 'token-sheet');
sheet.x = 0; sheet.y = 400;
sheet.layoutMode = 'VERTICAL';
sheet.itemSpacing = 40;
sheet.paddingTop = sheet.paddingBottom = sheet.paddingLeft = sheet.paddingRight = 48;
sheet.primaryAxisSizingMode = 'AUTO';
sheet.counterAxisSizingMode = 'AUTO';
sheet.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}];
page.appendChild(sheet);
sheet.appendChild(label('SOHO tokens (từ app/styles/tokens.css)', 28, 'Bold', 'Bricolage Grotesque'));

// Màu: ô 120×80 bind biến, tên dưới ô
const groups = {};
for (const v of vars) { const g = v.name.split('/')[1]; (groups[g] = groups[g] || []).push(v); }
for (const [g, list] of Object.entries(groups)) {
  const row = figma.createFrame();
  row.name = 'color/' + g;
  row.layoutMode = 'HORIZONTAL';
  row.layoutWrap = 'WRAP';
  row.itemSpacing = 16;
  row.counterAxisSpacing = 16;
  row.primaryAxisSizingMode = 'FIXED';
  row.counterAxisSizingMode = 'AUTO';
  row.resize(1240, 100);
  row.fills = [];
  sheet.appendChild(row);
  row.layoutSizingHorizontal = 'FIXED';
  row.layoutSizingVertical = 'HUG';
  for (const v of list.sort((a, b) => a.name.localeCompare(b.name))) {
    const cell = figma.createFrame();
    cell.name = v.name;
    cell.layoutMode = 'VERTICAL';
    cell.itemSpacing = 6;
    cell.primaryAxisSizingMode = 'AUTO';
    cell.counterAxisSizingMode = 'AUTO';
    cell.fills = [];
    row.appendChild(cell);
    const sw = figma.createRectangle();
    sw.resize(132, 72);
    sw.cornerRadius = 12;
    sw.strokes = [{type: 'SOLID', color: {r: 0.914, g: 0.898, b: 0.937}}];
    sw.strokeWeight = 1;
    sw.fills = [figma.variables.setBoundVariableForPaint({type: 'SOLID', color: ink}, 'color', v)];
    cell.appendChild(sw);
    cell.appendChild(label(v.name.replace('color/', ''), 12));
    cell.layoutSizingVertical = 'HUG';
  }
}

// Kiểu chữ: mỗi text style một dòng mẫu có dấu tiếng Việt
const tcol = figma.createFrame();
tcol.name = 'text styles';
tcol.layoutMode = 'VERTICAL';
tcol.itemSpacing = 18;
tcol.primaryAxisSizingMode = 'AUTO';
tcol.counterAxisSizingMode = 'AUTO';
tcol.fills = [];
sheet.appendChild(tcol);
for (const ts of texts.sort((a, b) => a.name.localeCompare(b.name))) {
  const t = figma.createText();
  t.fontName = ts.fontName;
  t.characters = ts.name + ' · Được tìm thấy, được chọn, được tin. Ế Ứ Ỡ Ặ Ằ';
  await t.setTextStyleIdAsync(ts.id);
  t.fills = [{type: 'SOLID', color: ink}];
  t.textAutoResize = 'WIDTH_AND_HEIGHT';
  tcol.appendChild(t);
}

// ── 5. ASSERTS ──
const errors = [];
if (vars.length === 0) errors.push('no color variables');
if (sheet.height < 300) errors.push('sheet collapsed');

// ── 6. RETURN ──
return {runId: RUN_ID, sheetId: sheet.id, colors: vars.length, textStyles: texts.length, errors};
})()
