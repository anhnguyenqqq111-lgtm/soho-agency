// Câu chữ theo DESIGN.md mục 2.4: tiếng Việt, thuật ngữ tiếng Anh chỉ khi cần và có giải thích. Giữ nguyên slug (URL).
export const solutionPages = [
  {
    slug: 'b2b-dich-vu-chuyen-nghiep',
    group: 'Theo mô hình kinh doanh',
    menuDesc: 'Khách là doanh nghiệp, hợp đồng lớn, chốt đơn mất nhiều tháng',
    relatedServices: ['seo-tong-the', 'google-ads-shopping', 'content-marketing-pr', 'ga4-looker-dashboard'],
    title: 'Bán cho doanh nghiệp và dịch vụ chuyên môn',
    eyebrow: 'Bán cho doanh nghiệp',
    desc: 'Dành cho doanh nghiệp bán hợp đồng giá trị lớn, mất nhiều tháng mới chốt và khách cần tin rồi mới liên hệ. SOHO giúp bạn có khách hàng tiềm năng đều đặn, đúng tệp. Kết quả đo bằng số hợp đồng chứ không bằng số form.',
    outcomes: [
      'Xác định đúng công ty và người ra quyết định cần tiếp cận',
      'Làm landing page và bài viết trả lời đúng điều khách lo trước khi mua',
      'Nối số liệu SEO, quảng cáo với sổ bán hàng để biết khách nào thành hợp đồng'
    ]
  },
  {
    slug: 'ecommerce-ban-le',
    group: 'Theo mô hình kinh doanh',
    menuDesc: 'Doanh thu, lợi nhuận mỗi đơn và khách mua lại',
    relatedServices: ['google-ads-shopping', 'meta-tiktok-ads', 'cro-landing-page', 'seo-tong-the'],
    title: 'Bán hàng online và bán lẻ',
    eyebrow: 'Bán lẻ',
    desc: 'Dành cho shop online và chuỗi bán lẻ cần thêm đơn hàng có lãi. SOHO kết hợp SEO trang sản phẩm, quảng cáo Google Shopping, quảng cáo bám đuổi người đã xem hàng và tối ưu trang thanh toán.',
    outcomes: [
      'Tập trung vào nhóm hàng vừa có lãi vừa có nhiều người mua',
      'Tối ưu danh mục sản phẩm, landing page và cách đo đơn hàng',
      'Theo dõi ROAS (doanh thu trên mỗi đồng quảng cáo), giá trị mỗi đơn và chi phí có một khách mới theo từng danh mục'
    ]
  },
  {
    slug: 'sme-tang-toc',
    group: 'Theo mô hình kinh doanh',
    menuDesc: 'Đội nhỏ, ngân sách vừa phải: chọn ít kênh, làm cho kỹ',
    relatedServices: ['tu-van-chien-luoc-sprint', 'local-seo-google-maps', 'cro-landing-page'],
    title: 'Doanh nghiệp nhỏ cần tăng tốc',
    eyebrow: 'Doanh nghiệp nhỏ',
    desc: 'Dành cho đội nhỏ, chưa có nhiều số liệu. SOHO giúp bạn chọn đúng việc làm trước, không dàn trải ngân sách ra quá nhiều kênh.',
    outcomes: [
      'Chọn kênh cho số liệu để đánh giá sớm nhất, trong 30 ngày',
      'Thử thông điệp, ưu đãi và landing page theo từng vòng 2 tuần',
      'Chỉ tăng ngân sách khi số đơn đã đủ rõ'
    ]
  },
  {
    slug: 'quy-trinh-sprint-5-buoc',
    group: 'Cách SOHO làm việc',
    menuDesc: 'Từ xem số liệu tới chạy thử, rồi mới mở rộng',
    relatedServices: ['tu-van-chien-luoc-sprint', 'ga4-looker-dashboard'],
    title: 'Quy trình 5 bước, mỗi vòng 2 tuần',
    eyebrow: 'Cách làm',
    desc: 'Từ xem số liệu tới chạy thử, rồi mới mở rộng. Mỗi vòng 2 tuần có một điều cần kiểm chứng, một danh sách việc và con số cần theo dõi.',
    outcomes: ['Hiểu bài toán kinh doanh trước khi chọn kênh', 'Xếp việc theo mức hiệu quả và độ khó', 'Báo cáo hằng tuần để quyết định giữ, sửa hay dừng']
  },
  {
    slug: 'marketing-ket-noi-doanh-thu',
    group: 'Cách SOHO làm việc',
    menuDesc: 'Báo cáo bằng số khách hàng, hợp đồng và doanh thu',
    relatedServices: ['ga4-looker-dashboard', 'cro-landing-page'],
    title: 'Marketing nối với doanh thu',
    eyebrow: 'Số liệu doanh thu',
    desc: 'Bỏ những con số chỉ để báo cáo cho đẹp. SOHO nối lượt truy cập, khách tiềm năng, đơn đang chốt và doanh thu thật về một chỗ.',
    outcomes: [
      'Bộ phận marketing và bán hàng dùng chung một bộ số',
      'Biết chi phí để có một khách tiềm năng và một khách mua',
      'Phân bổ ngân sách theo kênh thật sự mang về doanh thu'
    ]
  },
  {
    slug: 'dong-hanh-minh-bach',
    group: 'Cách SOHO làm việc',
    menuDesc: 'Cách SOHO báo cáo và phối hợp với đội của bạn',
    relatedServices: ['tu-van-chien-luoc-sprint', 'ga4-looker-dashboard'],
    title: 'Làm cùng và minh bạch',
    eyebrow: 'Cách phối hợp',
    desc: 'SOHO làm việc như một phần đội ngũ của bạn. Việc đang làm, con số đang đo và lý do làm việc này trước đều được công khai.',
    outcomes: [
      'Lộ trình rõ ràng theo từng vòng 2 tuần, bám mục tiêu kinh doanh',
      'Báo cáo dễ hiểu cho cả chủ doanh nghiệp và người vận hành',
      'Trao đổi đều đặn để điều chỉnh theo thị trường'
    ]
  }
];

export const solutionGroups = ['Theo mô hình kinh doanh', 'Cách SOHO làm việc'];

export function getSolutionsByGroup() {
  return solutionGroups.map(group => ({
    group,
    items: solutionPages.filter(solution => solution.group === group)
  }));
}

export function getSolutionPage(slug) {
  return solutionPages.find(solution => solution.slug === slug);
}
