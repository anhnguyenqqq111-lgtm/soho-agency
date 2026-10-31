// Bài đọc kỹ cho 12 trang dịch vụ (viết lại 31/10/2026, 1.800–2.400 từ/bài, có nguồn và ảnh mẫu SOHO).
// Kế hoạch chia chủ đề để không trùng nội dung: docs/articles/PLAN.md

import {seoTongTheArticle} from './articles/seoTongThe';
import {seoAiOverviewArticle} from './articles/seoAiOverview';
import {localSeoGoogleMapsArticle} from './articles/localSeoGoogleMaps';
import {googleAdsShoppingArticle} from './articles/googleAdsShopping';
import {metaTiktokAdsArticle} from './articles/metaTiktokAds';
import {croLandingPageArticle} from './articles/croLandingPage';
import {contentMarketingPrArticle} from './articles/contentMarketingPr';
import {ga4LookerDashboardArticle} from './articles/ga4LookerDashboard';
import {growthStrategySprintArticle} from './articles/growthStrategySprint';
import {thietKeWebsiteArticle} from './articles/thietKeWebsite';
import {nhanDienThuongHieuArticle} from './articles/nhanDienThuongHieu';
import {thietKeMobileAppArticle} from './articles/thietKeMobileApp';

export const serviceArticles = {
  'seo-tong-the': seoTongTheArticle,
  'seo-ai-overview': seoAiOverviewArticle,
  'local-seo-google-maps': localSeoGoogleMapsArticle,
  'google-ads-shopping': googleAdsShoppingArticle,
  'meta-tiktok-ads': metaTiktokAdsArticle,
  'cro-landing-page': croLandingPageArticle,
  'thiet-ke-website': thietKeWebsiteArticle,
  'nhan-dien-thuong-hieu': nhanDienThuongHieuArticle,
  'thiet-ke-mobile-app': thietKeMobileAppArticle,
  'content-marketing-pr': contentMarketingPrArticle,
  'ga4-looker-dashboard': ga4LookerDashboardArticle,
  'tu-van-chien-luoc-sprint': growthStrategySprintArticle
};

export function getServiceArticle(slug) {
  return serviceArticles[slug] || null;
}
