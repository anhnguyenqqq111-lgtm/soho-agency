// Gửi sự kiện tới GA4 nếu site đã cài gtag.js hoặc Google Tag Manager. Chưa cài thì không làm gì, không tải thêm thư viện.
export function track(event, params = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') window.gtag('event', event, params);
  else if (Array.isArray(window.dataLayer)) window.dataLayer.push({event, ...params});
}
