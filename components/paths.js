export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Địa chỉ gốc dùng cho canonical, sitemap, Open Graph. Đổi bằng biến môi trường khi chuyển sang tên miền chính.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://soho-agency.vercel.app').replace(/\/$/, '');

/*
  Mọi link nội bộ và đường dẫn tài nguyên đi qua đây:
  - thêm basePath khi build cho GitHub Pages;
  - thêm dấu "/" cuối cho trang (khớp trailingSlash: true), tránh một lần chuyển hướng 308 mỗi lần bấm.
  File có phần mở rộng (.svg, .webp...) giữ nguyên.
*/
export function sitePath(path){
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
