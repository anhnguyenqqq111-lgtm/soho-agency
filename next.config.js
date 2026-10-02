const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubPages ? '/soho-agency' : '',
  assetPrefix: isGithubPages ? '/soho-agency/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/soho-agency' : ''
  }
};

module.exports = nextConfig;
