(async () => {
// ── 1. GUARDS ──
if (figma.root.name !== 'SOHO') throw new Error('WRONG FILE: ' + figma.root.name);
const RUN_ID = '261030-0002-variables';
const DATA = /*__DATA__*/;

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
