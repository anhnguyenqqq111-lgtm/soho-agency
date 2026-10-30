(async () => {
// ── 1. GUARDS ──
if (figma.root.name !== 'SOHO') throw new Error('WRONG FILE: ' + figma.root.name);
const RUN_ID = '261030-0002-variables';
const DATA = {"generated":"2026-10-30","tokens":[{"name":"color/base/orange","type":"COLOR","value":"#f26522","css":"--c-orange","group":"base"},{"name":"color/base/orange-deep","type":"COLOR","value":"#c2410c","css":"--c-orange-deep","group":"base"},{"name":"color/base/violet","type":"COLOR","value":"#6d28d9","css":"--c-violet","group":"base"},{"name":"color/base/coral","type":"COLOR","value":"#ec4899","css":"--c-coral","group":"base"},{"name":"color/base/ink","type":"COLOR","value":"#141218","css":"--c-ink","group":"base"},{"name":"color/base/white","type":"COLOR","value":"#ffffff","css":"--c-white","group":"base"},{"name":"color/base/canvas","type":"COLOR","value":"#faf9fd","css":"--c-canvas","group":"base"},{"name":"color/base/border","type":"COLOR","value":"#e9e5ef","css":"--c-border","group":"base"},{"name":"color/base/muted","type":"COLOR","value":"#62616c","css":"--c-muted","group":"base"},{"name":"color/role/bg","type":"COLOR","value":"#ffffff","css":"--color-bg","group":"role"},{"name":"color/role/bg-soft","type":"COLOR","value":"#faf9fd","css":"--color-bg-soft","group":"role"},{"name":"color/role/surface","type":"COLOR","value":"#f3f1f8","css":"--color-surface","group":"role"},{"name":"color/role/bg-inverse","type":"COLOR","value":"#141218","css":"--color-bg-inverse","group":"role"},{"name":"color/role/text","type":"COLOR","value":"#141218","css":"--color-text","group":"role"},{"name":"color/role/text-2","type":"COLOR","value":"#3a3843","css":"--color-text-2","group":"role"},{"name":"color/role/text-muted","type":"COLOR","value":"#62616c","css":"--color-text-muted","group":"role"},{"name":"color/role/text-inverse","type":"COLOR","value":"#ffffff","css":"--color-text-inverse","group":"role"},{"name":"color/role/text-inverse-muted","type":"COLOR","value":"#b8b5c2","css":"--color-text-inverse-muted","group":"role"},{"name":"color/role/border","type":"COLOR","value":"#e9e5ef","css":"--color-border","group":"role"},{"name":"color/role/border-strong","type":"COLOR","value":"#8e8a99","css":"--color-border-strong","group":"role"},{"name":"color/role/primary","type":"COLOR","value":"#f26522","css":"--color-primary","group":"role"},{"name":"color/role/primary-hover","type":"COLOR","value":"#e0581c","css":"--color-primary-hover","group":"role"},{"name":"color/role/primary-text","type":"COLOR","value":"#c2410c","css":"--color-primary-text","group":"role"},{"name":"color/role/primary-tint","type":"COLOR","value":"#fde5d8","css":"--color-primary-tint","group":"role"},{"name":"color/role/secondary","type":"COLOR","value":"#6d28d9","css":"--color-secondary","group":"role"},{"name":"color/role/accent","type":"COLOR","value":"#ec4899","css":"--color-accent","group":"role"},{"name":"color/role/focus","type":"COLOR","value":"#c2410c","css":"--color-focus","group":"role"},{"name":"color/status/success","type":"COLOR","value":"#117a5b","css":"--success","group":"status"},{"name":"color/status/warning","type":"COLOR","value":"#a35a00","css":"--warning","group":"status"},{"name":"color/status/error","type":"COLOR","value":"#c62d44","css":"--error","group":"status"},{"name":"color/role/on-dark-2","type":"COLOR","value":"#d9d6e0","css":"--on-dark-2","group":"role"},{"name":"color/role/night-2","type":"COLOR","value":"#1e1b25","css":"--night-2","group":"role"},{"name":"color/role/warm-2","type":"COLOR","value":"#f58a4e","css":"--warm-2","group":"role"},{"name":"type/size/h1-desktop","type":"FLOAT","value":76,"css":"--fs-h1","group":"type"},{"name":"type/size/h1-mobile","type":"FLOAT","value":40,"css":"--fs-h1","group":"type"},{"name":"type/size/h2-desktop","type":"FLOAT","value":48,"css":"--fs-h2","group":"type"},{"name":"type/size/h2-mobile","type":"FLOAT","value":30,"css":"--fs-h2","group":"type"},{"name":"type/size/h3-desktop","type":"FLOAT","value":23,"css":"--fs-h3","group":"type"},{"name":"type/size/h3-mobile","type":"FLOAT","value":20,"css":"--fs-h3","group":"type"},{"name":"type/size/lead-desktop","type":"FLOAT","value":20,"css":"--fs-lead","group":"type"},{"name":"type/size/lead-mobile","type":"FLOAT","value":18,"css":"--fs-lead","group":"type"},{"name":"type/size/body-desktop","type":"FLOAT","value":17,"css":"--fs-body","group":"type"},{"name":"type/size/body-mobile","type":"FLOAT","value":16,"css":"--fs-body","group":"type"},{"name":"type/size/small","type":"FLOAT","value":15,"css":"--fs-small","group":"type"},{"name":"type/size/meta","type":"FLOAT","value":13,"css":"--fs-meta","group":"type"},{"name":"type/weight/display","type":"FLOAT","value":700,"css":"--fw-display","group":"type"},{"name":"type/weight/display-strong","type":"FLOAT","value":800,"css":"--fw-display-strong","group":"type"},{"name":"type/weight/title","type":"FLOAT","value":600,"css":"--fw-title","group":"type"},{"name":"layout/container","type":"FLOAT","value":1160,"css":"--container","group":"layout"},{"name":"layout/gutter-desktop","type":"FLOAT","value":24,"css":"--gutter","group":"layout"},{"name":"layout/gutter-mobile","type":"FLOAT","value":16,"css":"--gutter","group":"layout"},{"name":"layout/header-desktop","type":"FLOAT","value":76,"css":"--header-h","group":"layout"},{"name":"layout/header-mobile","type":"FLOAT","value":64,"css":"--header-h","group":"layout"},{"name":"space/section-sm-desktop","type":"FLOAT","value":64,"css":"--space-sm","group":"space"},{"name":"space/section-sm-mobile","type":"FLOAT","value":48,"css":"--space-sm","group":"space"},{"name":"space/section-md-desktop","type":"FLOAT","value":112,"css":"--space-md","group":"space"},{"name":"space/section-md-mobile","type":"FLOAT","value":72,"css":"--space-md","group":"space"},{"name":"space/section-lg-desktop","type":"FLOAT","value":136,"css":"--space-lg","group":"space"},{"name":"space/section-lg-mobile","type":"FLOAT","value":88,"css":"--space-lg","group":"space"},{"name":"radius/pill","type":"FLOAT","value":999,"css":"--r-pill","group":"radius"},{"name":"radius/xl","type":"FLOAT","value":20,"css":"--r-xl","group":"radius"},{"name":"radius/card","type":"FLOAT","value":16,"css":"--r-card","group":"radius"},{"name":"radius/md","type":"FLOAT","value":12,"css":"--r-md","group":"radius"},{"name":"radius/sm","type":"FLOAT","value":6,"css":"--r-sm","group":"radius"},{"name":"device/rule","type":"FLOAT","value":1,"css":"--rule","group":"device"},{"name":"device/rule-ink","type":"FLOAT","value":1.5,"css":"--rule-ink","group":"device"},{"name":"device/rule-w-1","type":"FLOAT","value":56,"css":"--rule-w-1","group":"device"},{"name":"device/rule-w-2","type":"FLOAT","value":72,"css":"--rule-w-2","group":"device"},{"name":"device/rule-w-3","type":"FLOAT","value":88,"css":"--rule-w-3","group":"device"},{"name":"device/stamp","type":"FLOAT","value":44,"css":"--stamp","group":"device"},{"name":"device/stamp-sm","type":"FLOAT","value":32,"css":"--stamp-sm","group":"device"},{"name":"device/stroke-ink","type":"FLOAT","value":1.5,"css":"--stroke-ink","group":"device"},{"name":"device/stroke-acc","type":"FLOAT","value":2.25,"css":"--stroke-acc","group":"device"},{"name":"device/grain-opacity","type":"FLOAT","value":0.055,"css":"--paper-grain-opacity","group":"device"},{"name":"device/grain-opacity-dark","type":"FLOAT","value":0.04,"css":"--paper-grain-opacity-dark","group":"device"}],"gradients":[{"name":"gradient/signature","angle":115,"stops":[{"color":"#f26522","pos":0},{"color":"#ec4899","pos":0.48},{"color":"#6d28d9","pos":1}],"css":"--gradient-signature"},{"name":"gradient/signature-text","angle":115,"stops":[{"color":"#c2410c","pos":0},{"color":"#db2777","pos":0.48},{"color":"#6d28d9","pos":1}],"css":"--gradient-signature-text"},{"name":"gradient/signature-on-dark","angle":115,"stops":[{"color":"#f58a4e","pos":0},{"color":"#f472b6","pos":0.48},{"color":"#a78bfa","pos":1}],"css":"--gradient-signature-on-dark"},{"name":"gradient/ink","angle":120,"stops":[{"color":"#141218","pos":0.1},{"color":"#2b1a4a","pos":0.57},{"color":"#5a1f4d","pos":1}],"css":"--gradient-ink"}],"textStyles":[{"name":"Display/H1","family":"Bricolage Grotesque","style":"Bold","size":76,"lh":106,"ls":-2.5},{"name":"Display/H2","family":"Bricolage Grotesque","style":"Bold","size":48,"lh":108,"ls":-2},{"name":"Display/H3","family":"Bricolage Grotesque","style":"SemiBold","size":23,"lh":120,"ls":-1},{"name":"Display/Number","family":"Bricolage Grotesque","style":"ExtraBold","size":48,"lh":100,"ls":-1},{"name":"Text/Lead","family":"Plus Jakarta Sans","style":"Regular","size":20,"lh":160,"ls":0},{"name":"Text/Body","family":"Plus Jakarta Sans","style":"Regular","size":17,"lh":165,"ls":0},{"name":"Text/Body-Strong","family":"Plus Jakarta Sans","style":"SemiBold","size":17,"lh":165,"ls":0},{"name":"Text/Small","family":"Plus Jakarta Sans","style":"Regular","size":15,"lh":150,"ls":0},{"name":"Text/Note","family":"Plus Jakarta Sans","style":"Medium","size":15,"lh":150,"ls":0},{"name":"Text/Meta","family":"Plus Jakarta Sans","style":"Medium","size":13,"lh":150,"ls":0},{"name":"Text/Button","family":"Plus Jakarta Sans","style":"Bold","size":16,"lh":100,"ls":0}]};

// ── 2. SETUP ──
const hexToRgb = h => {
  const n = h.length === 4 ? h.slice(1).split('').map(c => c + c).join('') : h.slice(1);
  return {r: parseInt(n.slice(0, 2), 16) / 255, g: parseInt(n.slice(2, 4), 16) / 255, b: parseInt(n.slice(4, 6), 16) / 255};
};
const collections = await figma.variables.getLocalVariableCollectionsAsync();
let col = collections.find(c => c.name === 'SOHO');
if (!col) col = figma.variables.createVariableCollection('SOHO');
const mode = col.modes[0].modeId;
if (col.modes[0].name !== 'Default') col.renameMode(mode, 'Default');
const existing = await figma.variables.getLocalVariablesAsync();
const byName = new Map(existing.filter(v => v.variableCollectionId === col.id).map(v => [v.name, v]));

// ── 3/4. MUTATIONS: variables (find-or-create by name) ──
const errors = [];
let created = 0,
  updated = 0;
for (const t of DATA.tokens) {
  if (t.value == null || Number.isNaN(t.value)) { errors.push('no value ' + t.name); continue; }
  let v = byName.get(t.name);
  if (v && v.resolvedType !== t.type) { errors.push('type mismatch ' + t.name); continue; }
  if (!v) { v = figma.variables.createVariable(t.name, col, t.type); created++; } else updated++;
  v.description = t.css + (t.group ? ' · ' + t.group : '');
  v.setValueForMode(mode, t.type === 'COLOR' ? hexToRgb(t.value) : t.value);
  byName.set(t.name, v);
}

// Paint styles cho gradient (variable không chứa gradient)
const paints = await figma.getLocalPaintStylesAsync();
for (const g of DATA.gradients) {
  let st = paints.find(p => p.name === g.name);
  if (!st) { st = figma.createPaintStyle(); st.name = g.name; created++; } else updated++;
  const a = ((g.angle - 90) * Math.PI) / 180;
  const cx = 0.5, cy = 0.5;
  const dx = Math.cos(a) / 2, dy = Math.sin(a) / 2;
  st.description = g.css;
  st.paints = [{
    type: 'GRADIENT_LINEAR',
    gradientTransform: [[Math.cos(a), Math.sin(a), cx - dx * 1 - (cy - dy) * 0 - (cx - dx) + (cx - dx)], [-Math.sin(a), Math.cos(a), 0]],
    gradientStops: g.stops.map(s => ({position: s.pos, color: {...hexToRgb(s.color), a: 1}}))
  }];
}

// Text styles
const texts = await figma.getLocalTextStylesAsync();
for (const ts of DATA.textStyles) {
  await figma.loadFontAsync({family: ts.family, style: ts.style});
  let st = texts.find(p => p.name === ts.name);
  if (!st) { st = figma.createTextStyle(); st.name = ts.name; created++; } else updated++;
  st.fontName = {family: ts.family, style: ts.style};
  st.fontSize = ts.size;
  st.lineHeight = {value: ts.lh, unit: 'PERCENT'};
  st.letterSpacing = {value: ts.ls, unit: 'PERCENT'};
}

// Effect style cho bóng menu
const effects = await figma.getLocalEffectStylesAsync();
let shadow = effects.find(e => e.name === 'shadow/menu');
if (!shadow) { shadow = figma.createEffectStyle(); shadow.name = 'shadow/menu'; created++; }
shadow.effects = [{type: 'DROP_SHADOW', color: {r: 0.078, g: 0.071, b: 0.094, a: 0.12}, offset: {x: 0, y: 20}, radius: 50, spread: 0, visible: true, blendMode: 'NORMAL'}];

// ── 5. ASSERTS ──
const after = (await figma.variables.getLocalVariablesAsync()).filter(v => v.variableCollectionId === col.id);
if (after.length < DATA.tokens.length - errors.length) errors.push('variable count ' + after.length + ' < ' + DATA.tokens.length);

// ── 6. RETURN ──
return {runId: RUN_ID, collectionId: col.id, created, updated, variables: after.length, errors};
})()
