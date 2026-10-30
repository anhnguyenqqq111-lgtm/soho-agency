// node docs/redesign/figma/tools/build-page.mjs specs/<name>.json
// Spec: {page, section?, frame, key, width, bg, x, y, sections: [{key, ...nodeSpec}]}
// Mỗi section của spec → một script exec-js riêng (scripts/1x-build-<frame-key>-<section-key>.js), đúng luật "một script = một ý định".
// Script đầu (00) tạo khung trang; các script sau nối vào khung đó theo key.
import {readFileSync, writeFileSync} from 'node:fs';
import {resolve, dirname, basename} from 'node:path';
import {fileURLToPath} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const specPath = resolve(process.cwd(), process.argv[2]);
const spec = JSON.parse(readFileSync(specPath, 'utf8'));
const lib = readFileSync(resolve(here, 'figlib.js'), 'utf8');
const slug = basename(specPath, '.json');
const out = [];

const head = `(async () => {
if (figma.root.name !== 'SOHO') throw new Error('WRONG FILE');
${lib}
const page = figma.root.children.find(p => p.name === ${JSON.stringify(spec.page)});
if (!page) throw new Error('no page ' + ${JSON.stringify(spec.page)});
await page.loadAsync();
await figma.setCurrentPageAsync(page);
await prime(page);
const errors = [];
`;

// 00: khung trang
const rootScript = `${head}
const host = ${spec.section ? `await section(page, ${JSON.stringify(spec.section)})` : 'page'};
let root = findKey(page, ${JSON.stringify(spec.key)});
if (!root) {
  root = await frame(${JSON.stringify({type: 'frame', name: spec.frame, key: spec.key, w: spec.width, h: 100, bg: spec.bg || 'color/role/bg', layout: 'col', gap: 0, clip: false})}, host);
  root.x = ${spec.x || 0}; root.y = ${spec.y || 0};
  root.primaryAxisSizingMode = 'AUTO';
  root.counterAxisSizingMode = 'FIXED';
}
return {rootId: root.id, name: root.name, errors};
})()`;
out.push([`1x-build-${slug}-00-root.js`, rootScript]);

spec.sections.forEach((sec, i) => {
  const n = String(i + 1).padStart(2, '0');
  const s = `${head}
const root = findKey(page, ${JSON.stringify(spec.key)});
if (!root) throw new Error('run 00-root first');
const KEY = ${JSON.stringify(spec.key + ':' + sec.key)};
const old = findKey(root, KEY);
const index = old ? root.children.indexOf(old) : ${i};
if (old) old.remove(); // dựng lại section này (idempotent theo key)
const node = await build(${JSON.stringify({...sec, type: sec.type || 'frame', key: spec.key + ':' + sec.key, fill: true})}, root);
root.insertChild(Math.min(index, root.children.length - 1), node);
node.layoutSizingHorizontal = 'FILL';
if (node.height < 40) errors.push('section collapsed ' + KEY + ' ' + node.height);
return {id: node.id, key: KEY, h: node.height, errors};
})()`;
  out.push([`1x-build-${slug}-${n}-${sec.key}.js`, s]);
});

for (const [name, body] of out) writeFileSync(resolve(here, '../scripts', name), body);
console.log(out.map(o => o[0]).join('\n'));
