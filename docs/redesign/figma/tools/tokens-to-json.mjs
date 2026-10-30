// node docs/redesign/figma/tools/tokens-to-json.mjs
// Đọc app/styles/tokens.css, chỉ lấy token vai trò + chữ + khoảng cách + bo góc (bỏ alias cũ), ghi tokens.json
// rồi dập vào mẫu scripts/02-variables.template.js thành scripts/02-variables.js (exec-js không đọc được file, nên dữ liệu phải nằm trong script).
import {readFileSync, writeFileSync} from 'node:fs';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../../../..');
const css = readFileSync(resolve(root, 'app/styles/tokens.css'), 'utf8');

const raw = {};
for (const m of css.matchAll(/--([a-z0-9-]+):\s*([^;]+);/g)) raw[m[1]] = m[2].trim().replace(/\s+/g, ' ');
const resolveVar = v => {
  let s = v,
    guard = 0;
  while (/var\(--/.test(s) && guard++ < 10) s = s.replace(/var\(--([a-z0-9-]+)\)/g, (_, n) => raw[n] ?? '');
  return s;
};
const hex = v => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v.trim());
const px = v => (/^-?\d+(\.\d+)?px$/.test(v.trim()) ? Number(v.trim().slice(0, -2)) : null);
const clampPair = v => {
  const m = v.match(/clamp\(\s*([\d.]+)px\s*,[^,]+,\s*([\d.]+)px\s*\)/);
  return m ? [Number(m[1]), Number(m[2])] : null;
};

const tokens = [];
const color = (figma, cssName, group) => {
  const v = resolveVar(raw[cssName] || '');
  if (hex(v)) tokens.push({name: figma, type: 'COLOR', value: v, css: `--${cssName}`, group});
};
// Màu gốc
for (const [k, n] of [
  ['c-orange', 'orange'], ['c-orange-deep', 'orange-deep'], ['c-violet', 'violet'], ['c-coral', 'coral'], ['c-ink', 'ink'],
  ['c-white', 'white'], ['c-canvas', 'canvas'], ['c-border', 'border'], ['c-muted', 'muted']
]) color(`color/base/${n}`, k, 'base');
// Màu theo vai trò
for (const k of Object.keys(raw).filter(k => k.startsWith('color-'))) color(`color/role/${k.slice(6)}`, k, 'role');
for (const k of ['success', 'warning', 'error']) color(`color/status/${k}`, k, 'status');
for (const [k, n] of [['on-dark-2', 'on-dark-2'], ['night-2', 'night-2'], ['warm-2', 'warm-2']]) color(`color/role/${n}`, k, 'role');
// Chữ
for (const [k, n] of [['fs-h1', 'h1'], ['fs-h2', 'h2'], ['fs-h3', 'h3'], ['fs-lead', 'lead'], ['fs-body', 'body']]) {
  const pair = clampPair(raw[k] || '');
  const single = px(raw[k] || '');
  if (pair) {
    tokens.push({name: `type/size/${n}-desktop`, type: 'FLOAT', value: pair[1], css: `--${k}`, group: 'type'});
    tokens.push({name: `type/size/${n}-mobile`, type: 'FLOAT', value: pair[0], css: `--${k}`, group: 'type'});
  } else if (single != null) tokens.push({name: `type/size/${n}`, type: 'FLOAT', value: single, css: `--${k}`, group: 'type'});
}
for (const [k, n] of [['fs-small', 'small'], ['fs-meta', 'meta']]) tokens.push({name: `type/size/${n}`, type: 'FLOAT', value: px(raw[k]), css: `--${k}`, group: 'type'});
for (const [k, n] of [['fw-display', 'display'], ['fw-display-strong', 'display-strong'], ['fw-title', 'title']])
  tokens.push({name: `type/weight/${n}`, type: 'FLOAT', value: Number(raw[k]), css: `--${k}`, group: 'type'});
// Bố cục, khoảng cách, bo góc, thiết bị bản 12
tokens.push({name: 'layout/container', type: 'FLOAT', value: px(raw.container), css: '--container', group: 'layout'});
tokens.push({name: 'layout/gutter-desktop', type: 'FLOAT', value: 24, css: '--gutter', group: 'layout'});
tokens.push({name: 'layout/gutter-mobile', type: 'FLOAT', value: 16, css: '--gutter', group: 'layout'});
tokens.push({name: 'layout/header-desktop', type: 'FLOAT', value: 76, css: '--header-h', group: 'layout'});
tokens.push({name: 'layout/header-mobile', type: 'FLOAT', value: 64, css: '--header-h', group: 'layout'});
for (const k of ['space-sm', 'space-md', 'space-lg']) {
  const pair = clampPair(raw[k]);
  tokens.push({name: `space/section-${k.slice(6)}-desktop`, type: 'FLOAT', value: pair[1], css: `--${k}`, group: 'space'});
  tokens.push({name: `space/section-${k.slice(6)}-mobile`, type: 'FLOAT', value: pair[0], css: `--${k}`, group: 'space'});
}
for (const k of ['r-pill', 'r-xl', 'r-card', 'r-md', 'r-sm']) tokens.push({name: `radius/${k.slice(2)}`, type: 'FLOAT', value: px(raw[k]), css: `--${k}`, group: 'radius'});
for (const k of ['rule', 'rule-ink', 'rule-w-1', 'rule-w-2', 'rule-w-3', 'stamp', 'stamp-sm']) tokens.push({name: `device/${k}`, type: 'FLOAT', value: px(raw[k]), css: `--${k}`, group: 'device'});
for (const k of ['stroke-ink', 'stroke-acc']) tokens.push({name: `device/${k}`, type: 'FLOAT', value: Number(raw[k]), css: `--${k}`, group: 'device'});
tokens.push({name: 'device/grain-opacity', type: 'FLOAT', value: Number(raw['paper-grain-opacity']), css: '--paper-grain-opacity', group: 'device'});
tokens.push({name: 'device/grain-opacity-dark', type: 'FLOAT', value: Number(raw['paper-grain-opacity-dark']), css: '--paper-grain-opacity-dark', group: 'device'});

// Gradient → paint style (không phải variable)
const gradients = [];
for (const k of ['gradient-signature', 'gradient-signature-text', 'gradient-signature-on-dark', 'gradient-ink']) {
  const v = resolveVar(raw[k]);
  const stops = [...v.matchAll(/(#[0-9a-f]{6})\s+(\d+)%/gi)].map(m => ({color: m[1], pos: Number(m[2]) / 100}));
  const angle = Number((v.match(/(\d+)deg/) || [0, 90])[1]);
  gradients.push({name: `gradient/${k.replace('gradient-', '')}`, angle, stops, css: `--${k}`});
}

// Text style
const textStyles = [
  {name: 'Display/H1', family: 'Bricolage Grotesque', style: 'Bold', size: 76, lh: 106, ls: -2.5},
  {name: 'Display/H2', family: 'Bricolage Grotesque', style: 'Bold', size: 48, lh: 108, ls: -2},
  {name: 'Display/H3', family: 'Bricolage Grotesque', style: 'SemiBold', size: 23, lh: 120, ls: -1},
  {name: 'Display/Number', family: 'Bricolage Grotesque', style: 'ExtraBold', size: 48, lh: 100, ls: -1},
  {name: 'Text/Lead', family: 'Plus Jakarta Sans', style: 'Regular', size: 20, lh: 160, ls: 0},
  {name: 'Text/Body', family: 'Plus Jakarta Sans', style: 'Regular', size: 17, lh: 165, ls: 0},
  {name: 'Text/Body-Strong', family: 'Plus Jakarta Sans', style: 'SemiBold', size: 17, lh: 165, ls: 0},
  {name: 'Text/Small', family: 'Plus Jakarta Sans', style: 'Regular', size: 15, lh: 150, ls: 0},
  {name: 'Text/Note', family: 'Plus Jakarta Sans', style: 'Medium', size: 15, lh: 150, ls: 0},
  {name: 'Text/Meta', family: 'Plus Jakarta Sans', style: 'Medium', size: 13, lh: 150, ls: 0},
  {name: 'Text/Button', family: 'Plus Jakarta Sans', style: 'Bold', size: 16, lh: 100, ls: 0}
];

const out = {generated: new Date().toISOString().slice(0, 10), tokens, gradients, textStyles};
writeFileSync(resolve(here, '../tokens.json'), JSON.stringify(out, null, 2));
const tpl = readFileSync(resolve(here, '../scripts/02-variables.template.js'), 'utf8');
writeFileSync(resolve(here, '../scripts/02-variables.js'), tpl.replace('/*__DATA__*/', JSON.stringify(out)));
console.log('tokens', tokens.length, 'gradients', gradients.length, 'textStyles', textStyles.length);
