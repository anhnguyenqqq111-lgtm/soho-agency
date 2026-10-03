// Dữ liệu bài viết chuyên sâu chuẩn SEO (~3000 từ/bài) cho 9 dịch vụ cốt lõi tại SOHO Agency
// Framework: PAS (Pain - Agitate - Solve) + B2B Commercial Intent + E-E-A-T

import { seoTongTheArticle } from './articles/seoTongThe';
import { seoAiOverviewArticle } from './articles/seoAiOverview';
import { localSeoGoogleMapsArticle } from './articles/localSeoGoogleMaps';
import { googleAdsShoppingArticle } from './articles/googleAdsShopping';
import { metaTiktokAdsArticle } from './articles/metaTiktokAds';
import { croLandingPageArticle } from './articles/croLandingPage';
import { contentMarketingPrArticle } from './articles/contentMarketingPr';
import { ga4LookerDashboardArticle } from './articles/ga4LookerDashboard';
import { growthStrategySprintArticle } from './articles/growthStrategySprint';

export const serviceArticles = {
  'seo-tong-the': seoTongTheArticle,
  'seo-ai-overview': seoAiOverviewArticle,
  'local-seo-google-maps': localSeoGoogleMapsArticle,
  'google-ads-shopping': googleAdsShoppingArticle,
  'meta-tiktok-ads': metaTiktokAdsArticle,
  'cro-landing-page': croLandingPageArticle,
  'content-marketing-pr': contentMarketingPrArticle,
  'ga4-looker-dashboard': ga4LookerDashboardArticle,
  'tu-van-chien-luoc-sprint': growthStrategySprintArticle,
};

export function getServiceArticle(slug) {
  return serviceArticles[slug] || null;
}
