// Hàm dùng chung cho các component client của header. Tách khỏi navigation.js để bundle client không kéo theo dữ liệu dịch vụ.
// Breakpoint chuyển giữa menu desktop và drawer mobile. Trùng với media query trong SiteHeader.module.css.
export const DESKTOP_QUERY = '(min-width: 1000px)';

const trimSlash = path => (path || '/').replace(/\/+$/, '') || '/';
export const isCurrentPath = (pathname, href) => Boolean(href) && trimSlash(pathname) === trimSlash(href);
