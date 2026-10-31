// Bài đọc kỹ cho 13 trang dịch vụ (viết lại 31/10/2026, 1.800–2.400 từ/bài, có nguồn và ảnh mẫu SOHO).
// Kế hoạch chia chủ đề để không trùng nội dung: docs/articles/PLAN.md

import {seoTongTheArticle} from './articles/seoTongThe';
import {seoAiOverviewArticle} from './articles/seoAiOverview';
import {localSeoGoogleMapsArticle} from './articles/localSeoGoogleMaps';
import {googleAdsShoppingArticle} from './articles/googleAdsShopping';
import {facebookAdsArticle} from './articles/facebookAds';
import {tiktokAdsArticle} from './articles/tiktokAds';
import {croLandingPageArticle} from './articles/croLandingPage';
import {contentMarketingPrArticle} from './articles/contentMarketingPr';
import {ga4LookerDashboardArticle} from './articles/ga4LookerDashboard';
import {growthStrategySprintArticle} from './articles/growthStrategySprint';
import {thietKeWebsiteArticle} from './articles/thietKeWebsite';
import {nhanDienThuongHieuArticle} from './articles/nhanDienThuongHieu';
import {thietKeMobileAppArticle} from './articles/thietKeMobileApp';

import {getPerson} from './data/team';

// Tác giả: authorKey trong từng bài trỏ tới người thật trong components/data/team.js (theo chủ đề, SOHO chốt 31/10/2026).
const withAuthor = article => {
  const p = getPerson(article.authorKey);
  if (!p) throw new Error(`Bài đọc kỹ "${article.metaTitle}": authorKey "${article.authorKey}" không có trong team.js`);
  return {...article, author: {name: p.name, role: `${p.title}, SOHO Agency`}};
};

const articlesBySlug = {
  'seo-tong-the': seoTongTheArticle,
  'seo-ai-overview': seoAiOverviewArticle,
  'local-seo-google-maps': localSeoGoogleMapsArticle,
  'google-ads-shopping': googleAdsShoppingArticle,
  'facebook-ads': facebookAdsArticle,
  'tiktok-ads': tiktokAdsArticle,
  'cro-landing-page': croLandingPageArticle,
  'thiet-ke-website': thietKeWebsiteArticle,
  'nhan-dien-thuong-hieu': nhanDienThuongHieuArticle,
  'thiet-ke-mobile-app': thietKeMobileAppArticle,
  'content-marketing-pr': contentMarketingPrArticle,
  'ga4-looker-dashboard': ga4LookerDashboardArticle,
  'tu-van-chien-luoc-sprint': growthStrategySprintArticle
};

export const serviceArticles = Object.fromEntries(Object.entries(articlesBySlug).map(([slug, a]) => [slug, withAuthor(a)]));

export function getServiceArticle(slug) {
  return serviceArticles[slug] || null;
}
