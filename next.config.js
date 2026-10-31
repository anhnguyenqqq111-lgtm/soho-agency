const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Đã thử experimental.inlineCss (31/10/2026): HTML trang chủ 236 → 540 KB vì CSS bị nhúng cả vào payload RSC,
  // Lighthouse mobile không đổi (A/B cùng server gzip). Giữ CSS tách file để cache được giữa các trang.
  basePath: isGithubPages ? '/soho-agency' : '',
  assetPrefix: isGithubPages ? '/soho-agency/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/soho-agency' : ''
  }
};

module.exports = nextConfig;
