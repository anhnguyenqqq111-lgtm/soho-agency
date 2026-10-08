export const categories = [
  'Tất cả',
  'SEO & AI Search',
  'Performance Ads',
  'Chiến lược Tăng trưởng',
  'Dữ liệu & CRO',
  'Content & Thương hiệu'
];

export const articles = [
  {
    slug: 'seo-ky-nguyen-ai-search',
    title: 'SEO trong kỷ nguyên AI Search: Doanh nghiệp cần thay đổi điều gì khi Google AI Overviews bùng nổ?',
    category: 'SEO & AI Search',
    excerpt: 'Cách xây dựng nội dung, tối ưu thực thể thương hiệu (Entity) và tín hiệu E-E-A-T khi hành vi tìm kiếm chuyển dịch mạnh mẽ sang các nền tảng AI như Google AI Overviews, Perplexity và ChatGPT.',
    readTime: '7 phút đọc',
    date: '02/10/2026',
    author: 'Nguyễn Tuấn Anh',
    authorRole: 'Head of Growth SEO @ SOHO',
    featured: true,
    content: `
      <h2>1. AI Search đang thay đổi hành vi tìm kiếm như thế nào?</h2>
      <p>Năm 2026 đánh dấu bước ngoặt lớn nhất trong lịch sử công cụ tìm kiếm kể từ khi Google ra đời. Sự phổ biến của <strong>Google AI Overviews</strong>, <strong>Perplexity</strong> và <strong>SearchGPT</strong> đã định hình lại thói quen của người dùng: từ "tìm danh sách liên kết xanh" sang "nhận câu trả lời tổng hợp tức thì".</p>
      <p>Điều này không có nghĩa là SEO đã chết, mà là SEO đang tiến hóa thành <strong>GEO (Generative Engine Optimization)</strong> – Tối ưu hóa cho các công cụ tạo sinh.</p>
      
      <blockquote>
        "Doanh nghiệp không còn cạnh tranh chỉ để nằm ở vị trí #1 của trang tìm kiếm, mà cạnh tranh để trở thành Nguồn Trích Dẫn Đáng Tin Cậy Nhất trong câu trả lời tổng hợp của AI."
      </blockquote>

      <h2>2. Ba trụ cột cốt lõi để chiếm lĩnh AI Overviews</h2>
      <p>Để nội dung của bạn được các mô hình ngôn ngữ lớn (LLMs) ưu tiên trích dẫn, website cần đáp ứng 3 tiêu chuẩn khắt khe:</p>
      <ul>
        <li><strong>Độ uy tín thực thể (Entity Authority):</strong> AI hiểu thương hiệu của bạn là ai, hoạt động trong lĩnh vực nào và có những chuyên gia nào đứng sau bảo chứng thông tin.</li>
        <li><strong>Cấu trúc dữ liệu trực tiếp (Direct Answer Structure):</strong> Viết câu trả lời súc tích, định lượng và rõ ràng ngay trong 100 từ đầu tiên của mỗi tiêu đề H2/H3.</li>
        <li><strong>Trải nghiệm thực tế (First-hand Experience):</strong> Bổ sung số liệu nội bộ, ảnh chụp quy trình thực, bài học thất bại và các biểu đồ độc quyền mà AI không thể tự suy diễn.</li>
      </ul>

      <h2>3. Lời khuyên hành động cho quý tới</h2>
      <p>Đội ngũ SOHO Agency khuyến nghị các doanh nghiệp rà soát lại toàn bộ hệ thống bài viết cũ, cập nhật Schema Organization & Author chuyên sâu, đồng thời tái cấu trúc nội dung theo mô hình hỏi - đáp thực chiến.</p>
    `
  },
  {
    slug: 'toi-uu-roas-performance-ads',
    title: 'Đừng chỉ nhìn CPC & CTR: Framework đo lường Performance Ads gắn liền với Doanh thu thực tế',
    category: 'Performance Ads',
    excerpt: 'Phân tích vì sao giá click rẻ nhưng không ra doanh số. Hướng dẫn thiết lập phễu đo lường từ Impression, Click đến Qualified Lead, CAC và ROAS thực tế.',
    readTime: '5 phút đọc',
    date: '28/09/2026',
    author: 'Trần Minh Quân',
    authorRole: 'Performance Marketing Lead @ SOHO',
    featured: false,
    content: `
      <h2>1. Chi phí click rẻ (CPC) có thực sự là một chỉ số tốt?</h2>
      <p>Rất nhiều chiến dịch quảng cáo khoe CPC chỉ 500đ - 1.000đ và CTR trên 15%, nhưng khi đối chiếu với số đơn chốt thực tế tại bộ phận Sale thì tỷ lệ hủy đơn hoặc lead rác lên tới 80%. Đây là cái bẫy tối ưu hóa số lượng thay vì chất lượng.</p>

      <h2>2. Mô hình đo lường 4 tầng của SOHO Agency</h2>
      <p>Thay vì dừng lại ở dashboard của Meta hay Google Ads, SOHO đồng bộ số liệu quảng cáo với hệ thống CRM của doanh nghiệp:</p>
      <ol>
        <li><strong>Tầng 1 - Kênh hiển thị:</strong> CPC, CTR, CPM (Kiểm soát chi phí tiếp cận).</li>
        <li><strong>Tầng 2 - Chuyển đổi trang:</strong> Conversion Rate, Cost Per Lead (CPL).</li>
        <li><strong>Tầng 3 - Chất lượng cơ hội:</strong> MQL (Marketing Qualified Lead) và SQL (Sales Qualified Lead).</li>
        <li><strong>Tầng 4 - Tài chính kinh doanh:</strong> Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS) và Lợi nhuận gộp.</li>
      </ol>

      <h2>3. Tối ưu theo tín hiệu giá trị cao</h2>
      <p>Bằng cách gửi ngược dữ liệu đơn hàng thành công qua Conversion API (CAPI) về cho thuật toán Smart Bidding của Google và Meta, thuật toán sẽ tự động tìm kiếm những khách hàng có hồ sơ tương tự người đã mua thật.</p>
    `
  },
  {
    slug: 'chien-luoc-seo-ads-song-hanh',
    title: 'Khi nào doanh nghiệp nên đầu tư SEO và Ads cùng lúc để tối đa hóa hiệu quả ngân sách?',
    category: 'Chiến lược Tăng trưởng',
    excerpt: 'Phân bổ ngân sách thông minh giữa ngắn hạn (Paid Ads) và dài hạn (Organic SEO) theo từng giai đoạn vòng đời doanh nghiệp và độ cạnh tranh của ngành.',
    readTime: '6 phút đọc',
    date: '24/09/2026',
    author: 'Lê Hoàng Yến',
    authorRole: 'Strategy Director @ SOHO',
    featured: false,
    content: `
      <h2>1. Cuộc chiến muôn thuở: SEO hay Quảng cáo trả tiền?</h2>
      <p>Một quan niệm sai lầm phổ biến là xem SEO và Ads là hai kênh đối đầu nhau. Trên thực tế, các thương hiệu tăng trưởng nhanh nhất thị trường luôn sử dụng Ads để thử nghiệm thị trường và dùng SEO để chiếm lĩnh lợi nhuận dài hạn.</p>

      <h2>2. Ma trận phân vai kênh theo giai đoạn</h2>
      <p>Trong 3 tháng đầu, Ads đóng vai trò tạo dòng tiền ngay và thu thập danh sách từ khóa có tỷ lệ chuyển đổi cao nhất. Từ dữ liệu đó, đội ngũ SEO sẽ tập trung nguồn lực đẩy top đúng các cụm từ khóa đã được chứng minh sinh lời.</p>

      <h2>3. Hiệu ứng cộng hưởng SERP Domination</h2>
      <p>Khi người dùng tìm kiếm từ khóa ngành và nhìn thấy thương hiệu của bạn xuất hiện ở cả vị trí Top 1 Quảng cáo lẫn Top 1 Kết quả Tự nhiên, tỷ lệ click vào website tăng thêm tới 42% so với khi chỉ xuất hiện đơn lẻ một kênh.</p>
    `
  },
  {
    slug: 'toi-uu-cro-landing-page',
    title: 'Tối ưu tỷ lệ chuyển đổi (CRO) cho Landing Page B2B: Biến traffic thành khách hàng tiềm năng',
    category: 'Dữ liệu & CRO',
    excerpt: '7 thử nghiệm A/B Testing cốt lõi đã giúp khách hàng của SOHO tăng tỷ lệ điền form từ 2.1% lên 6.8% mà không cần chi thêm ngân sách quảng cáo.',
    readTime: '8 phút đọc',
    date: '18/09/2026',
    author: 'Đỗ Gia Huy',
    authorRole: 'CRO & Data Analyst @ SOHO',
    featured: false,
    content: `
      <h2>1. Vì sao đổ nhiều traffic nhưng khách hàng không để lại thông tin?</h2>
      <p>Phần lớn landing page thất bại không phải vì sản phẩm tệ, mà vì trang quá tham lam thông tin, tải chậm trên điện thoại và thiếu lý do thuyết phục để khách hàng hành động ngay lập tức.</p>

      <h2>2. Ba thay đổi nhỏ tạo đột phá chuyển đổi</h2>
      <p>Qua hơn 100 thử nghiệm thực tế tại SOHO Agency, đây là 3 yếu tố mang lại mức tăng trưởng mạnh nhất:</p>
      <ul>
        <li><strong>Rút gọn form đăng ký:</strong> Giảm từ 6 trường xuống 3 trường (Tên, Số điện thoại, Nhu cầu chính) giúp tăng 38% số lượt nộp form.</li>
        <li><strong>Bằng chứng xã hội thực tế (Social Proof):</strong> Thay thế testimonial chung chung bằng ảnh chụp case study kèm số liệu % tăng trưởng rõ ràng.</li>
        <li><strong>Micro-copy trên nút CTA:</strong> Đổi từ "Gửi thông tin" thành "Nhận đề xuất miễn phí trong 24h".</li>
      </ul>
    `
  },
  {
    slug: 'content-hub-topic-cluster',
    title: 'Chiến lược Topic Cluster: Xây dựng Content Hub thống trị bảng xếp hạng tìm kiếm',
    category: 'Content & Thương hiệu',
    excerpt: 'Cách kết nối Pillar Page với các Sub-topics bài viết vệ tinh để truyền dẫn PageRank và xác lập uy tín chuyên gia trong ngành.',
    readTime: '6 phút đọc',
    date: '12/09/2026',
    author: 'Phạm Thùy Linh',
    authorRole: 'Content Strategist @ SOHO',
    featured: false,
    content: `
      <h2>1. Rời xa cách làm Content rải rác vô định</h2>
      <p>Viết 100 bài viết rời rạc không liên kết với nhau sẽ khó tạo ra tác động SEO lớn. Mô hình Topic Cluster gom nhóm nội dung xoay quanh một chủ đề cốt lõi (Pillar Page), giúp thuật toán Google nhận diện website của bạn là thẩm quyền chuyên môn cao nhất.</p>

      <h2>2. Cấu trúc liên kết nội bộ (Internal Linking) chuẩn</h2>
      <p>Tất cả bài viết vệ tinh đều trỏ liên kết ngữ cảnh về Pillar Page với anchor text chính xác, đồng thời liên kết chéo với nhau để giữ chân người đọc khám phá sâu hơn trong phễu nội dung.</p>
    `
  },
  {
    slug: 'tracking-ga4-capi-2026',
    title: 'Bảo vệ dữ liệu quảng cáo thời kỳ Cookie-less: Giải pháp Facebook CAPI & Server-side Tracking',
    category: 'Dữ liệu & CRO',
    excerpt: 'Tại sao Pixel truyền thống đang mất tới 35% dữ liệu chuyển đổi và cách thiết lập Server-side Tagging với Google Tag Manager để cứu ROAS.',
    readTime: '7 phút đọc',
    date: '05/09/2026',
    author: 'Nguyễn Tuấn Anh',
    authorRole: 'Technical Director @ SOHO',
    featured: false,
    content: `
      <h2>1. Thất thoát dữ liệu - Kẻ thù giấu mặt của các chiến dịch Ads</h2>
      <p>Với các tính năng bảo mật trên iOS, Safari ITP và trình duyệt chặn quảng cáo, các thẻ script Pixel chạy trên trình duyệt (Client-side) đang bị chặn lên tới 30-40%. Thuật toán quảng cáo vì thế bị "mù", không nhận được tín hiệu ai vừa mua hàng để tối ưu tiếp.</p>

      <h2>2. Giải pháp Server-side Tracking toàn diện</h2>
      <p>Bằng cách thu thập dữ liệu trên máy chủ riêng (Cloud Server Tagging) và bắn trực tiếp sang API của Google và Meta, 100% dữ liệu chuyển đổi được ghi nhận đầy đủ, an toàn bảo mật và cải thiện tốc độ tải trang lên đáng kể.</p>
    `
  }
];

export function categorySlug(category){
  return category
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// date dạng dd/mm/yyyy
export function toISODate(date){
  const [d, m, y] = date.split('/');
  return `${y}-${m}-${d}`;
}

export function getLatestArticles(limit = articles.length){
  return [...articles]
    .sort((a, b) => toISODate(b.date).localeCompare(toISODate(a.date)))
    .slice(0, limit);
}
