import {
  BarChart3,
  Layers3,
  ShieldCheck,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';

export const solutionPages = [
  {
    slug: 'b2b-dich-vu-chuyen-nghiep',
    group: 'Theo mô hình kinh doanh',
    menuDesc: 'Lead B2B cho chu kỳ bán hàng dài',
    relatedServices: ['seo-tong-the', 'google-ads-shopping', 'content-marketing-pr', 'ga4-looker-dashboard'],
    title: 'B2B & Dịch vụ Chuyên nghiệp',
    eyebrow: 'GIẢI PHÁP B2B',
    desc: 'Tạo dòng lead chất lượng cao cho doanh nghiệp có chu kỳ bán hàng dài, giá trị hợp đồng lớn và cần xây dựng niềm tin trước khi chốt.',
    icon: Target,
    outcomes: ['Xác định nhóm tài khoản và người ra quyết định cần tiếp cận', 'Xây landing page và content trả lời đúng nỗi đau mua hàng', 'Kết nối SEO, Ads và CRM để đo lead theo chất lượng']
  },
  {
    slug: 'ecommerce-ban-le',
    group: 'Theo mô hình kinh doanh',
    menuDesc: 'Doanh thu, ROAS và giá trị vòng đời khách hàng',
    relatedServices: ['google-ads-shopping', 'meta-tiktok-ads', 'cro-landing-page', 'seo-tong-the'],
    title: 'E-Commerce & Bán lẻ',
    eyebrow: 'GIẢI PHÁP BÁN LẺ',
    desc: 'Tăng doanh thu đơn hàng bằng hệ thống SEO sản phẩm, Shopping, remarketing và tối ưu tỷ lệ chuyển đổi trên website.',
    icon: TrendingUp,
    outcomes: ['Ưu tiên nhóm sản phẩm có biên lợi nhuận và nhu cầu cao', 'Tối ưu feed, landing page và tracking ecommerce', 'Theo dõi ROAS, AOV, CAC và doanh thu theo danh mục']
  },
  {
    slug: 'sme-tang-toc',
    group: 'Theo mô hình kinh doanh',
    menuDesc: 'Chọn kênh ra tín hiệu nhanh, không dàn trải',
    relatedServices: ['tu-van-chien-luoc-sprint', 'local-seo-google-maps', 'cro-landing-page'],
    title: 'Khởi nghiệp & SME Tăng tốc',
    eyebrow: 'GIẢI PHÁP SME',
    desc: 'Giúp đội ngũ nhỏ chọn đúng việc cần làm trước, không dàn trải ngân sách vào quá nhiều kênh khi dữ liệu còn mỏng.',
    icon: Zap,
    outcomes: ['Chọn kênh tạo tín hiệu nhanh nhất trong 30 ngày', 'Xây sprint test thông điệp, offer và landing page', 'Mở rộng ngân sách khi có dữ liệu chuyển đổi đủ tốt']
  },
  {
    slug: 'quy-trinh-sprint-5-buoc',
    group: 'Cách SOHO làm việc',
    menuDesc: 'Từ chẩn đoán đến thử nghiệm và nhân rộng',
    relatedServices: ['tu-van-chien-luoc-sprint', 'ga4-looker-dashboard'],
    title: 'Quy trình Sprint 5 Bước',
    eyebrow: 'PHƯƠNG PHÁP LUẬN',
    desc: 'Từ chẩn đoán dữ liệu đến thử nghiệm và nhân rộng kết quả, mỗi sprint đều có giả thuyết, việc cần làm và chỉ số đo rõ ràng.',
    icon: Layers3,
    outcomes: ['Hiểu bài toán kinh doanh trước khi chọn kênh', 'Lập backlog ưu tiên theo tác động và độ khó', 'Báo cáo kết quả theo tuần để quyết định giữ, sửa hoặc dừng']
  },
  {
    slug: 'marketing-ket-noi-doanh-thu',
    group: 'Cách SOHO làm việc',
    menuDesc: 'Báo cáo theo lead, pipeline và doanh thu',
    relatedServices: ['ga4-looker-dashboard', 'cro-landing-page'],
    title: 'Marketing Kết nối Doanh thu',
    eyebrow: 'DỮ LIỆU DOANH THU',
    desc: 'Đưa marketing ra khỏi báo cáo vanity metric bằng cách nối dữ liệu traffic, lead, sales pipeline và doanh thu thực tế.',
    icon: BarChart3,
    outcomes: ['Thiết lập bộ KPI chung giữa marketing và sales', 'Nhìn được chi phí tạo cơ hội và chi phí tạo khách hàng', 'Ra quyết định ngân sách theo kênh có đóng góp thực']
  },
  {
    slug: 'dong-hanh-minh-bach',
    group: 'Cách SOHO làm việc',
    menuDesc: 'Cách SOHO báo cáo và phối hợp với đội của bạn',
    relatedServices: ['tu-van-chien-luoc-sprint', 'ga4-looker-dashboard'],
    title: 'Cam kết Đồng hành & Minh bạch',
    eyebrow: 'CÁCH LÀM VIỆC',
    desc: 'SOHO vận hành như một đội tăng trưởng mở rộng, minh bạch việc đang làm, dữ liệu đang đo và lý do ưu tiên từng hạng mục.',
    icon: ShieldCheck,
    outcomes: ['Roadmap rõ theo sprint và mục tiêu kinh doanh', 'Báo cáo minh bạch, dễ hiểu cho cả founder và team vận hành', 'Trao đổi thường xuyên để điều chỉnh theo tín hiệu thị trường']
  }
];

export const solutionGroups = ['Theo mô hình kinh doanh', 'Cách SOHO làm việc'];

export function getSolutionsByGroup(){
  return solutionGroups.map(group => ({
    group,
    items: solutionPages.filter(solution => solution.group === group)
  }));
}

export function getSolutionPage(slug){
  return solutionPages.find(solution => solution.slug === slug);
}
