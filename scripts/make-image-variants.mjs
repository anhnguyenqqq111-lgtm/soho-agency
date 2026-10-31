// Tạo bản thu nhỏ cho ảnh lớn để trình duyệt chọn theo màn hình (srcset), bớt tải ảnh 1600px cho điện thoại.
// Quy ước: <tên>-480.webp, <tên>-640.webp, <tên>-960.webp đặt cạnh ảnh gốc; chỉ tạo khi ảnh gốc rộng hơn mốc đó.
// Mốc 640: điện thoại DPR 2 hiển thị ảnh ~300px CSS cần ~600px thật, mốc 480 không đủ nét, mốc 960 thừa.
// Hàm srcSet() trong components/paths.js dựng chuỗi srcset theo đúng quy ước này, nên thêm ảnh mới thì chạy lại:
//   node scripts/make-image-variants.mjs
// Kết quả được commit cùng ảnh gốc, build không cần sharp.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

export const VARIANT_WIDTHS = [480, 640, 960];
const QUALITY = 78;

const ROOT = path.resolve(new URL('..', import.meta.url).pathname);
const PUBLIC = path.join(ROOT, 'public');

// Thư mục và mẫu tên ảnh có dùng srcset trên web.
const TARGETS = [
  {dir: 'media/team', match: /^(chung-jean-cutout|chung-vest|hoang-van-phong)\.webp$/},
  {dir: 'projects', match: /\.webp$/},
  {dir: 'blog/generated/banners', match: /\.webp$/},
  {dir: 'blog/generated/thumbnails', match: /\.webp$/},
  {dir: 'media/articles', match: /-hero\.webp$/, recursive: true}
];

const isVariant = name => new RegExp(`-(${VARIANT_WIDTHS.join('|')})\\.webp$`).test(name);

function* walk(dir, recursive) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (recursive) yield* walk(full, recursive);
    } else yield full;
  }
}

let made = 0;
let kept = 0;
for (const t of TARGETS) {
  const base = path.join(PUBLIC, t.dir);
  if (!fs.existsSync(base)) continue;
  for (const file of walk(base, t.recursive)) {
    const name = path.basename(file);
    if (isVariant(name) || !t.match.test(name)) continue;
    const meta = await sharp(file).metadata();
    for (const w of VARIANT_WIDTHS) {
      if (meta.width <= w) continue;
      const out = file.replace(/\.webp$/, `-${w}.webp`);
      if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(file).mtimeMs) {
        kept++;
        continue;
      }
      await sharp(file).resize({width: w}).webp({quality: QUALITY, effort: 6}).toFile(out);
      made++;
      console.log(`${path.relative(PUBLIC, out)} ${Math.round(fs.statSync(out).size / 1024)} KB`);
    }
  }
}
console.log(`Tạo mới ${made}, giữ nguyên ${kept}.`);
