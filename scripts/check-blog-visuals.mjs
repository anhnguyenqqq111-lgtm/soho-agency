// Kiểm tra components/blogVisuals.json trước khi build: slug có thật, file ảnh tồn tại, đúng kích thước, H2 còn khớp.
// Chạy: npm run visuals:check (tự chạy ở prebuild). Lỗi ở đây là build dừng, website giữ nguyên bản đang chạy.
import {readFileSync, existsSync} from 'node:fs';
import {resolve, dirname} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const visuals = JSON.parse(readFileSync(resolve(root, 'components/blogVisuals.json'), 'utf8'));
const {articles} = await import(pathToFileURL(resolve(root, 'components/blogData.js')).href);
const SIZES = {thumbnail: [1200, 675], hero: [1600, 900], inArticle: [1200, 800]};
const normalize = t =>
  String(t || '')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .normalize('NFC')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
const errors = [];

async function checkRef(where, ref, [w, h]) {
  if (!ref?.src || !ref.alt) return errors.push(`${where}: thiếu src hoặc alt`);
  if (!ref.src.startsWith('/blog/generated/')) return errors.push(`${where}: src phải nằm trong /blog/generated/`);
  const file = resolve(root, 'public', ref.src.slice(1));
  if (!existsSync(file)) return errors.push(`${where}: không có file ${ref.src}`);
  const meta = await sharp(file).metadata();
  if (meta.format !== 'webp' || meta.width !== w || meta.height !== h)
    errors.push(`${where}: ${ref.src} là ${meta.format} ${meta.width}×${meta.height}, cần webp ${w}×${h}`);
  if (ref.width !== w || ref.height !== h) errors.push(`${where}: width/height trong JSON phải là ${w}×${h}`);
}

for (const [slug, entry] of Object.entries(visuals)) {
  const article = articles.find(a => a.slug === slug);
  if (!article) {
    errors.push(`${slug}: không có bài này trong blogData.js`);
    continue;
  }
  if (entry.thumbnail) await checkRef(`${slug}.thumbnail`, entry.thumbnail, SIZES.thumbnail);
  if (entry.hero) await checkRef(`${slug}.hero`, entry.hero, SIZES.hero);
  const h2s = [...article.content.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map(m => normalize(m[1]));
  for (const item of entry.inArticle || []) {
    await checkRef(`${slug}.inArticle[h2 #${item.h2Index + 1}]`, item, SIZES.inArticle);
    if (h2s[item.h2Index] !== normalize(item.h2))
      console.warn(`Cảnh báo ${slug}: H2 #${item.h2Index + 1} đã đổi, ảnh trong bài sẽ bị ẩn cho tới khi đưa ảnh mới.`);
  }
  if (!entry.license) errors.push(`${slug}: thiếu license của ảnh nguồn`);
}

if (errors.length) {
  console.error('blogVisuals.json không hợp lệ:\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log(`blogVisuals.json hợp lệ: ${Object.keys(visuals).length} bài có ảnh từ Image Studio.`);
