(async () => {
// ── 1. GUARDS ──
if (figma.root.name !== 'SOHO') throw new Error('WRONG FILE: ' + figma.root.name);
const RUN_ID = '261030-0001b-pages';
// Figma Starter chỉ cho 3 trang mỗi file. Chia: tokens + thiết bị | thiết kế (hero, chuyện, trang, dùng Section) | lưu trữ site hiện tại
const WANT = ['00 Tokens & Devices', '01 Design', '99 Archive-of-live'];
const RENAME = {'00 Tokens': '00 Tokens & Devices', 'Page 1': '01 Design', Cover: '99 Archive-of-live'};

// ── 4. MUTATIONS ──
const renamed = [];
for (const p of figma.root.children) {
  if (RENAME[p.name] && !figma.root.children.find(c => c.name === RENAME[p.name])) { renamed.push(p.name + ' → ' + RENAME[p.name]); p.name = RENAME[p.name]; }
}
const created = [];
for (const name of WANT) {
  if (!figma.root.children.find(c => c.name === name)) {
    if (figma.root.children.length >= 3) break;
    const p = figma.createPage(); p.name = name; created.push(name);
  }
}
WANT.forEach((name, i) => {
  const p = figma.root.children.find(c => c.name === name);
  if (p) figma.root.insertChild(i, p);
});

// ── 5. ASSERTS ──
const names = figma.root.children.map(c => c.name);
const errors = WANT.filter(n => !names.includes(n)).map(n => 'missing page ' + n);

// ── 6. RETURN ──
return {runId: RUN_ID, renamed, created, pages: names, errors};
})()
