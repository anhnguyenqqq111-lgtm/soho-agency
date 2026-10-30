// node docs/redesign/figma/tools/make-archive.mjs
// Mỗi ảnh ghép trong baseline/stitched/<route>-<width>.jpg → một script exec-js tạo khung ảnh (image fill) ở trang "99 Archive-of-live".
// Một script = một route + bề rộng (ảnh base64 nằm trong script vì exec-js không đọc được file).
import {readFileSync, writeFileSync, readdirSync} from 'node:fs';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const dir = resolve(here, '../baseline/stitched');
const out = resolve(here, '../scripts');
const files = readdirSync(dir).filter(f => f.endsWith('.jpg')).sort();
let col = 0;
const made = [];
for (const f of files) {
  const key = f.replace('.jpg', '');
  const [route, width] = [key.slice(0, key.lastIndexOf('-')), Number(key.slice(key.lastIndexOf('-') + 1))];
  const b64 = readFileSync(resolve(dir, f)).toString('base64');
  const x = width === 1440 ? col * 1600 : col * 1600 + 1460; // desktop và mobile cùng route đứng cạnh nhau
  if (width === 390) col++;
  const script = `(async () => {
if (figma.root.name !== 'SOHO') throw new Error('WRONG FILE');
const NS = 'soho', KEY = 'archive:${key}';
const page = figma.root.children.find(p => p.name === '99 Archive-of-live');
if (!page) throw new Error('no archive page');
await page.loadAsync();
await figma.setCurrentPageAsync(page);
const already = page.findOne(n => n.getSharedPluginData(NS, 'key') === KEY);
if (already) return {skipped: true, existing: already.id};
const bytes = figma.base64Decode('${b64}');
const img = figma.createImage(bytes);
const size = await img.getSizeAsync();
const frame = figma.createFrame();
frame.name = 'archive / ${route} / ${width}';
frame.setSharedPluginData(NS, 'key', KEY);
frame.x = ${x}; frame.y = 0;
frame.resize(size.width, size.height);
frame.fills = [{type: 'IMAGE', imageHash: img.hash, scaleMode: 'FILL'}];
frame.locked = true;
page.appendChild(frame);
const errors = [];
if (frame.width !== size.width) errors.push('width');
return {id: frame.id, w: size.width, h: size.height, errors};
})()`;
  const name = `04-archive-${key}.js`;
  writeFileSync(resolve(out, name), script);
  made.push(name);
}
console.log(made.join('\n'));
