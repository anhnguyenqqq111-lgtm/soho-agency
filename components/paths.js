export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Địa chỉ gốc dùng cho canonical, sitemap, Open Graph. Đổi bằng biến môi trường khi chuyển sang tên miền chính.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://soho-agency.vercel.app').replace(/\/$/, '');

/*
  Mọi link nội bộ và đường dẫn tài nguyên đi qua đây:
  - thêm basePath khi build cho GitHub Pages;
  - thêm dấu "/" cuối cho trang (khớp trailingSlash: true), tránh một lần chuyển hướng 308 mỗi lần bấm.
  File có phần mở rộng (.svg, .webp...) giữ nguyên.
*/
// Chuỗi srcset cho ảnh có bản thu nhỏ do scripts/make-image-variants.mjs tạo (<tên>-480/-640/-960.webp).
// width là bề rộng ảnh gốc; chỉ liệt kê bản nhỏ hơn ảnh gốc, đúng quy tắc script đã tạo file.
export const VARIANT_WIDTHS = [480, 640, 960];
export function srcSet(src, width) {
  if (!src || !width || !src.endsWith('.webp')) return undefined;
  const base = src.slice(0, -5);
  const parts = VARIANT_WIDTHS.filter(w => w < width).map(w => `${sitePath(`${base}-${w}.webp`)} ${w}w`);
  if (!parts.length) return undefined;
  parts.push(`${sitePath(src)} ${width}w`);
  return parts.join(', ');
}

// Trang dịch vụ và bài blog nằm ngay dưới gốc (/seo-tong-the/, /framework-seo-8-buoc/), không có tiền tố /dich-vu/ hay /blog/.
// Trang danh sách vẫn là /dich-vu/ và /blog/. URL cũ có tiền tố được chuyển hướng 301 trong vercel.json.
export const servicePath = slug => `/${slug}`;
export const postPath = slug => `/${slug}`;

export function sitePath(path) {
  if (!path) return path;
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  if (!path.startsWith('/')) return path;
  const match = path.match(/^([^?#]*)(.*)$/);
  let pathname = match[1];
  const rest = match[2];
  const last = pathname.split('/').pop();
  if (!pathname.endsWith('/') && !last.includes('.')) pathname += '/';
  return `${basePath}${pathname}${rest}`;
}
