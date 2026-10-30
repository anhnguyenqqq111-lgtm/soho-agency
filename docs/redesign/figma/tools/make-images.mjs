// node docs/redesign/figma/tools/make-images.mjs <imgDir> <rootKey> <outScriptName>
// Thay ô đặt chỗ trong khung Figma bằng ảnh thật: node có tên bắt đầu "ảnh ghim: <tên>", "decor <tên>", "banner C", "slot: <tên>".
// Ảnh lấy từ <imgDir>/<file>.png theo bảng MAP bên dưới. Một script cho cả khung (chỉ đổi fill, không tạo node mới).
import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const [imgDir, rootKey, outName] = process.argv.slice(2);
const MAP = [
  {match: 'ảnh ghim: Le Viva Resort', file: 'le-viva-resort.png'},
  {match: 'ảnh ghim: King Decor Luxury', file: 'king-decor-luxury.png'},
  {match: 'ảnh ghim: Kronos Luxury Timepieces', file: 'kronos-luxury-timepieces.png'},
  {match: 'ảnh ghim: Helen Bridal', file: 'helen-bridal.png'},
  {match: 'decor flag', file: 'flag.png', fit: 'FIT'},
  {match: 'banner C', file: 'banner-c.png'},
  {match: 'slot: JourneyMatrix', file: 'journey.png', slot: true},
  {match: 'slot: Track 4 bước', file: 'process.png', slot: true}
];
const items = MAP.filter(m => existsSync(resolve(imgDir, m.file))).map(m => ({...m, b64: readFileSync(resolve(imgDir, m.file)).toString('base64')}));
const script = `(async () => {
if (figma.root.name !== 'SOHO') throw new Error('WRONG FILE');
const NS = 'soho';
const page = figma.root.children.find(p => p.name === '01 Design');
await page.loadAsync();
await figma.setCurrentPageAsync(page);
const root = page.findOne(n => n.getSharedPluginData(NS, 'key') === ${JSON.stringify(rootKey)});
if (!root) throw new Error('no root');
const ITEMS = ${JSON.stringify(items.map(({b64, ...m}) => m))};
const B64 = ${JSON.stringify(Object.fromEntries(items.map(m => [m.file, m.b64])))};
const done = [], errors = [];
for (const it of ITEMS) {
  const node = root.findOne(n => n.name.startsWith(it.match) && (n.type === 'RECTANGLE' || n.type === 'FRAME'));
  if (!node) { errors.push('not found ' + it.match); continue; }
  const img = figma.createImage(figma.base64Decode(B64[it.file]));
  const size = await img.getSizeAsync();
  if (it.slot) {
    for (const c of [...node.children]) c.remove();
    node.strokes = [];
    node.dashPattern = [];
    const w = node.width;
    node.resize(w, Math.round((size.height / size.width) * w));
    node.layoutSizingVertical = 'FIXED';
  }
  node.fills = [{type: 'IMAGE', imageHash: img.hash, scaleMode: it.fit || 'FILL'}];
  done.push(it.match);
}
return {done, errors};
})()`;
writeFileSync(resolve(here, '../scripts', outName), script);
console.log(outName, items.length, 'images');
