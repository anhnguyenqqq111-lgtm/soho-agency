// Câu chữ theo DESIGN.md mục 2.4: tiếng Việt, thuật ngữ tiếng Anh chỉ khi cần và có giải thích. Giữ nguyên slug (URL).
export const solutionPages = [
  {
    slug: 'b2b-dich-vu-chuyen-nghiep',
    group: 'Theo mô hình kinh doanh',
    menuDesc: 'Khách doanh nghiệp, hợp đồng lớn, bán hàng nhiều tháng',
    relatedServices: ['seo-tong-the', 'google-ads-shopping', 'content-marketing-pr', 'ga4-looker-dashboard'],
    title: 'Bán cho doanh nghiệp và dịch vụ chuyên môn',
    eyebrow: 'Bán cho doanh nghiệp',
    desc: 'Cho doanh nghiệp bán hợp đồng giá trị lớn, mất nhiều tháng mới chốt và cần khách tin trước khi gọi. SOHO giúp có đều khách tiềm năng đúng tệp, đo bằng số hợp đồng, không bằng số form.',
    outcomes: ['Xác định đúng công ty và người ra quyết định cần tiếp cận', 'Làm trang đích và bài viết trả lời đúng điều khách lo trước khi mua', 'Nối SEO, quảng cáo và sổ bán hàng để biết khách nào thành hợp đồng']
  },
  {
    slug: 'ecommerce-ban-le',
    group: 'Theo mô hình kinh doanh',
    menuDesc: 'Doanh thu, lợi nhuận mỗi đơn và khách mua lại',
    relatedServices: ['google-ads-shopping', 'meta-tiktok-ads', 'cro-landing-page', 'seo-tong-the'],
    title: 'Bán hàng online và bán lẻ',
    eyebrow: 'Bán lẻ',
    desc: 'Cho cửa hàng online và chuỗi bán lẻ cần thêm đơn có lãi. SOHO kết hợp SEO trang sản phẩm, quảng cáo mua sắm, nhắc lại người đã xem và tối ưu trang thanh toán.',
    outcomes: ['Dồn sức vào nhóm hàng vừa có lãi vừa có nhu cầu', 'Tối ưu danh mục sản phẩm, trang đích và cách đo đơn hàng', 'Theo dõi doanh thu trên chi phí, giá trị mỗi đơn và chi phí có một khách mới theo từng danh mục']
  },
  {
    slug: 'sme-tang-toc',
    group: 'Theo mô hình kinh doanh',
    menuDesc: 'Đội nhỏ, ngân sách vừa: chọn ít kênh, làm kỹ',
    relatedServices: ['tu-van-chien-luoc-sprint', 'local-seo-google-maps', 'cro-landing-page'],
    title: 'Doanh nghiệp nhỏ cần tăng tốc',
    eyebrow: 'Doanh nghiệp nhỏ',
    desc: 'Cho đội nhỏ chưa có nhiều số liệu. SOHO giúp chọn đúng việc làm trước, không rải ngân sách ra quá nhiều kênh.',
    outcomes: ['Chọn kênh cho tín hiệu nhanh nhất trong 30 ngày', 'Thử thông điệp, ưu đãi và trang đích theo vòng 2 tuần', 'Chỉ tăng ngân sách khi số đơn đủ rõ']
  },
  {
    slug: 'quy-trinh-sprint-5-buoc',
    group: 'Cách SOHO làm việc',
    menuDesc: 'Từ xem số liệu đến thử nghiệm và làm rộng ra',
    relatedServices: ['tu-van-chien-luoc-sprint', 'ga4-looker-dashboard'],
    title: 'Quy trình 5 bước, vòng 2 tuần',
    eyebrow: 'Cách làm',
    desc: 'Từ xem số liệu đến thử nghiệm rồi làm rộng ra. Mỗi vòng 2 tuần có một giả thuyết, danh sách việc và con số cần theo dõi.',
    outcomes: ['Hiểu bài toán kinh doanh trước khi chọn kênh', 'Xếp danh sách việc theo tác động và độ khó', 'Báo cáo mỗi tuần để quyết định giữ, sửa hay dừng']
  },
  {
    slug: 'marketing-ket-noi-doanh-thu',
    group: 'Cách SOHO làm việc',
    menuDesc: 'Báo cáo bằng khách, hợp đồng và doanh thu',
    relatedServices: ['ga4-looker-dashboard', 'cro-landing-page'],
    title: 'Marketing nối với doanh thu',
    eyebrow: 'Số liệu doanh thu',
    desc: 'Bỏ những con số chỉ để báo cáo cho đẹp. SOHO nối lượt truy cập, khách tiềm năng, đơn đang chốt và doanh thu thật về một chỗ.',
    outcomes: ['Marketing và sale dùng chung một bộ con số', 'Biết chi phí để có một khách tiềm năng và một khách mua', 'Chia ngân sách theo kênh thật sự góp vào doanh thu']
  },
  {
    slug: 'dong-hanh-minh-bach',
    group: 'Cách SOHO làm việc',
    menuDesc: 'Cách SOHO báo cáo và phối hợp với đội của bạn',
    relatedServices: ['tu-van-chien-luoc-sprint', 'ga4-looker-dashboard'],
    title: 'Làm cùng và minh bạch',
    eyebrow: 'Cách phối hợp',
    desc: 'SOHO làm như một phần của đội bạn: việc đang làm, con số đang đo và lý do làm việc này trước đều công khai.',
    outcomes: ['Lộ trình rõ theo từng vòng 2 tuần và mục tiêu kinh doanh', 'Báo cáo dễ hiểu cho cả chủ doanh nghiệp và người vận hành', 'Trao đổi đều đặn để chỉnh theo tín hiệu thị trường']
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
