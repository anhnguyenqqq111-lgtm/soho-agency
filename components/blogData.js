// Thứ tự danh mục trên trang /blog. Nhóm Framework là bài hướng dẫn từng bước.
export const categories = [
  'Framework Marketing',
  'Framework SEO',
  'Framework Ads',
  'SEO & AI Search',
  'Performance Ads',
  'Chiến lược Tăng trưởng',
  'Dữ liệu & CRO',
  'Content & Thương hiệu'
];

/*
  Quy tắc chung của blog (kiểm tra ở cuối file, vi phạm là build lỗi):
  - title: H1 duy nhất trên trang, tối đa 50 ký tự; cũng là chữ trên thumbnail.
  - metaTitle: thẻ <title>, tối đa 60 ký tự (đặt absolute, không thêm hậu tố site).
  - image (bắt buộc): {src, alt}. Một ảnh 1600×1000 dùng chung: thumbnail trên thẻ bài viết và banner dưới H1
    (cả hai hiển thị 16:10, không cắt). Chữ trái là H1, bên phải là cảnh dựng từ nội dung bài. Render bằng skill
    creating-images-soho (goha-seo-ws2), preset cover; file ra chép vào public/blog/<slug>.webp.
  Các trường khác: category, excerpt (mô tả meta), readTime, date (dd/mm/yyyy), author, authorRole, content (HTML trong chuỗi).
*/
export const articles = [
  {
    slug: 'seo-ky-nguyen-ai-search',
    title: 'SEO thời AI Search: doanh nghiệp cần đổi gì?',
    metaTitle: 'SEO thời AI Search: doanh nghiệp cần thay đổi gì? | SOHO',
    category: 'SEO & AI Search',
    excerpt: 'Cách xây dựng nội dung, tối ưu thực thể thương hiệu (Entity) và tín hiệu E-E-A-T khi hành vi tìm kiếm chuyển dịch mạnh mẽ sang các nền tảng AI như Google AI Overviews, Perplexity và ChatGPT.',
    readTime: '7 phút đọc',
    date: '02/10/2026',
    author: 'Nguyễn Tuấn Anh',
    authorRole: 'Head of Growth SEO @ SOHO',
    featured: true,
    image: {src: '/blog/seo-ky-nguyen-ai-search.webp', alt: 'Kính lúp và tia sáng, minh họa SEO thời AI Search'},
    content: `
      <h2>1. AI Search đang thay đổi hành vi tìm kiếm như thế nào?</h2>
      <p>Năm 2026 đánh dấu bước ngoặt lớn nhất trong lịch sử công cụ tìm kiếm kể từ khi Google ra đời. Sự phổ biến của <strong>Google AI Overviews</strong>, <strong>Perplexity</strong> và <strong>SearchGPT</strong> đã định hình lại thói quen của người dùng: từ "tìm danh sách liên kết xanh" sang "nhận câu trả lời tổng hợp tức thì".</p>
      <p>Điều này không có nghĩa là SEO đã chết, mà là SEO đang tiến hóa thành <strong>GEO (Generative Engine Optimization)</strong>: tối ưu hóa cho các công cụ tạo sinh.</p>
      
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
      <p>Đội ngũ SOHO Agency khuyến nghị các doanh nghiệp rà soát lại toàn bộ hệ thống bài viết cũ, cập nhật Schema Organization & Author chuyên sâu, đồng thời tái cấu trúc nội dung theo mô hình hỏi đáp thực chiến.</p>
    `
  },
  {
    slug: 'toi-uu-roas-performance-ads',
    title: 'Đo Performance Ads bằng doanh thu thực tế',
    metaTitle: 'Đo Performance Ads bằng doanh thu, không chỉ CPC và CTR',
    category: 'Performance Ads',
    excerpt: 'Phân tích vì sao giá click rẻ nhưng không ra doanh số. Hướng dẫn thiết lập phễu đo lường từ Impression, Click đến Qualified Lead, CAC và ROAS thực tế.',
    readTime: '5 phút đọc',
    date: '28/09/2026',
    author: 'Trần Minh Quân',
    authorRole: 'Performance Marketing Lead @ SOHO',
    featured: false,
    image: {src: '/blog/toi-uu-roas-performance-ads.webp', alt: 'Biểu đồ cột tăng dần, minh họa đo quảng cáo bằng doanh thu'},
    content: `
      <h2>1. Chi phí click rẻ (CPC) có thực sự là một chỉ số tốt?</h2>
      <p>Rất nhiều chiến dịch quảng cáo khoe CPC chỉ 500đ đến 1.000đ và CTR trên 15%, nhưng khi đối chiếu với số đơn chốt thực tế tại bộ phận Sale thì tỷ lệ hủy đơn hoặc lead rác lên tới 80%. Đây là cái bẫy tối ưu hóa số lượng thay vì chất lượng.</p>

      <h2>2. Mô hình đo lường 4 tầng của SOHO Agency</h2>
      <p>Thay vì dừng lại ở dashboard của Meta hay Google Ads, SOHO đồng bộ số liệu quảng cáo với hệ thống CRM của doanh nghiệp:</p>
      <ol>
        <li><strong>Tầng 1. Kênh hiển thị:</strong> CPC, CTR, CPM (Kiểm soát chi phí tiếp cận).</li>
        <li><strong>Tầng 2. Chuyển đổi trang:</strong> Conversion Rate, Cost Per Lead (CPL).</li>
        <li><strong>Tầng 3. Chất lượng cơ hội:</strong> MQL (Marketing Qualified Lead) và SQL (Sales Qualified Lead).</li>
        <li><strong>Tầng 4. Tài chính kinh doanh:</strong> Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS) và Lợi nhuận gộp.</li>
      </ol>

      <h2>3. Tối ưu theo tín hiệu giá trị cao</h2>
      <p>Bằng cách gửi ngược dữ liệu đơn hàng thành công qua Conversion API (CAPI) về cho thuật toán Smart Bidding của Google và Meta, thuật toán sẽ tự động tìm kiếm những khách hàng có hồ sơ tương tự người đã mua thật.</p>
    `
  },
  {
    slug: 'chien-luoc-seo-ads-song-hanh',
    title: 'Khi nào nên đầu tư SEO và Ads cùng lúc?',
    metaTitle: 'Khi nào nên đầu tư SEO và Ads cùng lúc? | SOHO Agency',
    category: 'Chiến lược Tăng trưởng',
    excerpt: 'Phân bổ ngân sách thông minh giữa ngắn hạn (Paid Ads) và dài hạn (Organic SEO) theo từng giai đoạn vòng đời doanh nghiệp và độ cạnh tranh của ngành.',
    readTime: '6 phút đọc',
    date: '24/09/2026',
    author: 'Lê Hoàng Yến',
    authorRole: 'Strategy Director @ SOHO',
    featured: false,
    image: {src: '/blog/chien-luoc-seo-ads-song-hanh.webp', alt: 'Bia ba vòng, minh họa chiến lược phân bổ SEO và Ads'},
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
    title: 'Tối ưu CRO cho landing page B2B',
    metaTitle: 'Tối ưu CRO landing page B2B: biến traffic thành lead',
    category: 'Dữ liệu & CRO',
    excerpt: '7 thử nghiệm A/B Testing cốt lõi đã giúp khách hàng của SOHO tăng tỷ lệ điền form từ 2.1% lên 6.8% mà không cần chi thêm ngân sách quảng cáo.',
    readTime: '8 phút đọc',
    date: '18/09/2026',
    author: 'Đỗ Gia Huy',
    authorRole: 'CRO & Data Analyst @ SOHO',
    featured: false,
    image: {src: '/blog/toi-uu-cro-landing-page.webp', alt: 'Nút bấm và con trỏ, minh họa tối ưu chuyển đổi landing page'},
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
    title: 'Topic Cluster: xây Content Hub dẫn đầu tìm kiếm',
    metaTitle: 'Chiến lược Topic Cluster: xây Content Hub thống trị SERP',
    category: 'Content & Thương hiệu',
    excerpt: 'Cách kết nối Pillar Page với các Sub-topics bài viết vệ tinh để truyền dẫn PageRank và xác lập uy tín chuyên gia trong ngành.',
    readTime: '6 phút đọc',
    date: '12/09/2026',
    author: 'Phạm Thùy Linh',
    authorRole: 'Content Strategist @ SOHO',
    featured: false,
    image: {src: '/blog/content-hub-topic-cluster.webp', alt: 'Tâm và năm vệ tinh nối nhau, minh họa mô hình Topic Cluster'},
    content: `
      <h2>1. Rời xa cách làm Content rải rác vô định</h2>
      <p>Viết 100 bài viết rời rạc không liên kết với nhau sẽ khó tạo ra tác động SEO lớn. Mô hình Topic Cluster gom nhóm nội dung xoay quanh một chủ đề cốt lõi (Pillar Page), giúp thuật toán Google nhận diện website của bạn là thẩm quyền chuyên môn cao nhất.</p>

      <h2>2. Cấu trúc liên kết nội bộ (Internal Linking) chuẩn</h2>
      <p>Tất cả bài viết vệ tinh đều trỏ liên kết ngữ cảnh về Pillar Page với anchor text chính xác, đồng thời liên kết chéo với nhau để giữ chân người đọc khám phá sâu hơn trong phễu nội dung.</p>
    `
  },
  {
    slug: 'tracking-ga4-capi-2026',
    title: 'Facebook CAPI và Server-side Tracking',
    metaTitle: 'Facebook CAPI và Server-side Tracking thời Cookie-less',
    category: 'Dữ liệu & CRO',
    excerpt: 'Tại sao Pixel truyền thống đang mất tới 35% dữ liệu chuyển đổi và cách thiết lập Server-side Tagging với Google Tag Manager để cứu ROAS.',
    readTime: '7 phút đọc',
    date: '05/09/2026',
    author: 'Nguyễn Tuấn Anh',
    authorRole: 'Technical Director @ SOHO',
    featured: false,
    image: {src: '/blog/tracking-ga4-capi-2026.webp', alt: 'Chữ f trong vòng tròn, minh họa Facebook Conversion API'},
    content: `
      <h2>1. Thất thoát dữ liệu, Kẻ thù giấu mặt của các chiến dịch Ads</h2>
      <p>Với các tính năng bảo mật trên iOS, Safari ITP và trình duyệt chặn quảng cáo, các thẻ script Pixel chạy trên trình duyệt (Client-side) đang bị chặn lên tới 30-40%. Thuật toán quảng cáo vì thế bị "mù", không nhận được tín hiệu ai vừa mua hàng để tối ưu tiếp.</p>

      <h2>2. Giải pháp Server-side Tracking toàn diện</h2>
      <p>Bằng cách thu thập dữ liệu trên máy chủ riêng (Cloud Server Tagging) và bắn trực tiếp sang API của Google và Meta, 100% dữ liệu chuyển đổi được ghi nhận đầy đủ, an toàn bảo mật và cải thiện tốc độ tải trang lên đáng kể.</p>
    `
  },
  {
    slug: 'framework-marketing-90-ngay',
    title: 'Framework marketing 90 ngày: 7 bước',
    metaTitle: 'Framework lập kế hoạch marketing 90 ngày trong 7 bước',
    category: 'Framework Marketing',
    excerpt: 'Quy trình 7 bước SOHO dùng khi nhận một kế hoạch marketing mới: chốt mục tiêu bằng số, vẽ hành trình 3 chặng, chọn kênh theo chặng, dựng thông điệp, chia ngân sách, cắm đo lường và xếp lịch 90 ngày.',
    readTime: '12 phút đọc',
    date: '08/10/2026',
    author: 'Lê Hoàng Yến',
    authorRole: 'Strategy Director @ SOHO',
    featured: false,
    image: {src: '/blog/framework-marketing-90-ngay.webp', alt: 'Ba ô đánh số xếp bậc, minh họa framework marketing 7 bước'},
    content: `
      <p>Đây là bộ khung SOHO dùng mỗi khi bắt đầu một kế hoạch marketing mới cho khách hàng, dù ngân sách lớn hay nhỏ. Kế hoạch gói trong 90 ngày vì đủ dài để một kênh cho kết quả thật và đủ ngắn để sửa kịp nếu sai. Mỗi bước dưới đây có ba phần: việc cần làm, đầu ra phải có, và lỗi hay gặp.</p>

      <h2>Bước 1. Chốt mục tiêu bằng số và tính ngược ra lead</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Hỏi chủ doanh nghiệp một con số duy nhất: doanh thu cần thêm trong 90 ngày là bao nhiêu.</li>
        <li>Lấy giá trị đơn trung bình và tỷ lệ chốt hiện tại của đội sale (nếu chưa có, lấy số của 3 tháng gần nhất).</li>
        <li>Tính ngược: doanh thu mục tiêu ÷ giá trị đơn = số đơn; số đơn ÷ tỷ lệ chốt = số lead đủ điều kiện; số lead ÷ tỷ lệ lead đủ điều kiện = tổng lead cần có.</li>
        <li>Chia tổng lead cho 13 tuần để ra chỉ tiêu tuần.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Một bảng 5 dòng: doanh thu mục tiêu, số đơn, số lead đủ điều kiện, tổng lead, lead mỗi tuần. Bảng này treo ở đầu mọi báo cáo sau đó.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Đặt mục tiêu theo "lượt tiếp cận" hoặc "người theo dõi". Những số này không tính ngược ra doanh thu được nên không dùng để chốt kế hoạch.</p>

      <h2>Bước 2. Vẽ hành trình khách hàng theo 3 chặng</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Phỏng vấn 3 đến 5 khách đã mua gần đây: họ biết đến thương hiệu ở đâu, so sánh với ai, điều gì khiến họ quyết định.</li>
        <li>Xếp câu trả lời vào 3 chặng: <strong>Nhận biết</strong> (chưa biết mình cần gì), <strong>Cân nhắc</strong> (đang so sánh), <strong>Quyết định</strong> (sẵn sàng mua, cần lý do cuối).</li>
        <li>Với mỗi chặng, ghi 3 câu hỏi khách hay hỏi và 1 nỗi lo lớn nhất.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Bảng 3 cột × 4 dòng: chặng, câu hỏi, nỗi lo, bằng chứng cần đưa ra. Đây là nguồn cho toàn bộ nội dung ở bước 4.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Tự viết chân dung khách hàng trong phòng họp thay vì gọi điện cho khách thật. Năm cuộc gọi 15 phút cho nhiều thông tin hơn một buổi brainstorm.</p>

      <h2>Bước 3. Chọn kênh theo chặng, không chọn theo thói quen</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Liệt kê các kênh có thể dùng: tìm kiếm Google, quảng cáo Google, Meta, TikTok, email, giới thiệu, sự kiện, đối tác.</li>
        <li>Với mỗi kênh, đánh dấu nó phục vụ chặng nào là chính. Ví dụ: quảng cáo Meta mạnh ở Nhận biết, tìm kiếm Google mạnh ở Cân nhắc và Quyết định, email mạnh ở Quyết định.</li>
        <li>Giữ tối đa 3 kênh cho 90 ngày đầu. Mỗi kênh cần có người chịu trách nhiệm và chỉ tiêu lead riêng.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Ma trận chặng × kênh, mỗi ô ghi rõ kênh đó làm gì ở chặng đó. Ô trống là bình thường; một kênh không cần phủ hết ba chặng.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Chạy 6 kênh cùng lúc với ngân sách nhỏ. Mỗi kênh không đủ dữ liệu để học, cuối quý không biết kênh nào thực sự hiệu quả.</p>

      <h2>Bước 4. Dựng thông điệp lõi và bộ nội dung tối thiểu</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Viết một câu định vị theo công thức: [Thương hiệu] giúp [ai] đạt [kết quả] bằng [cách khác biệt], không như [cách cũ].</li>
        <li>Từ bảng ở bước 2, viết mỗi chặng 1 thông điệp chính và 2 bằng chứng (số liệu, case, chứng nhận).</li>
        <li>Lập danh sách nội dung tối thiểu cho 90 ngày: 1 trang đích chính, 3 bài giải đáp câu hỏi ở chặng Cân nhắc, 1 case study, 1 bộ 5 mẫu quảng cáo.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Tài liệu thông điệp 1 trang và lịch sản xuất nội dung có ngày hoàn thành, người làm, người duyệt.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Mỗi kênh một thông điệp khác nhau. Khách thấy quảng cáo nói một đằng, vào website thấy một nẻo, tỷ lệ chuyển đổi tụt.</p>

      <h2>Bước 5. Chia ngân sách theo chặng và theo tuần</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Tách ngân sách thành 3 phần: chi phí kênh (tiền quảng cáo), chi phí sản xuất (nội dung, thiết kế, landing page), chi phí công cụ (tracking, CRM, email).</li>
        <li>Chia tiền quảng cáo theo chặng. Với doanh nghiệp cần doanh thu ngay, ưu tiên chặng Quyết định và Cân nhắc; chặng Nhận biết chỉ chiếm phần nhỏ trong 90 ngày đầu.</li>
        <li>Chia theo tuần với nguyên tắc 30/40/30: tuần 1 đến 4 chạy thử nhỏ, tuần 5 đến 9 tăng cho những gì đã chứng minh, tuần 10 đến 13 giữ ổn định và chuẩn bị quý sau.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Bảng ngân sách theo tuần, có cột "đã chi" cập nhật mỗi thứ Hai và cột "lead thu được" đối chiếu với chỉ tiêu ở bước 1.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Tiêu hết 50% ngân sách trong tháng đầu khi tracking chưa chạy đúng. Số liệu tháng đầu vì thế không dùng được để quyết định tháng sau.</p>

      <h2>Bước 6. Cắm đo lường trước khi tiêu đồng đầu tiên</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Định nghĩa "lead" bằng văn bản: form nào, trường nào bắt buộc, lead rác là gì.</li>
        <li>Cài GA4 và Google Tag Manager, tạo sự kiện chuyển đổi cho form, gọi điện, chat. Kiểm tra bằng chế độ Debug trước khi bật quảng cáo.</li>
        <li>Gắn UTM theo một quy ước duy nhất: nguồn, kênh, chiến dịch, nội dung. Viết quy ước ra 1 trang và gửi cho mọi người chạy kênh.</li>
        <li>Nối lead vào một nơi duy nhất (CRM hoặc tối thiểu là Google Sheet) có cột trạng thái do sale cập nhật.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Một dashboard 4 tầng: chi phí và lượt hiển thị, lượt chuyển đổi trên trang, lead đủ điều kiện, đơn và doanh thu. Mỗi tầng đối chiếu được với bảng ở bước 1.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Lead từ quảng cáo và lead từ SEO vào hai chỗ khác nhau, cuối quý không ghép được với doanh thu để biết kênh nào đáng tiền.</p>

      <h2>Bước 7. Xếp lịch 90 ngày và nhịp xem lại</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Tuần 1 đến 2: hoàn thành tracking, trang đích, bộ nội dung tối thiểu. Chưa chạy quảng cáo.</li>
        <li>Tuần 3 đến 4: bật kênh với ngân sách thử, mục tiêu là có dữ liệu sạch, chưa phải là lead rẻ.</li>
        <li>Tuần 5 đến 9: tăng ngân sách cho nhóm quảng cáo, từ khóa, nội dung đã ra lead đủ điều kiện; tắt những gì không ra lead sau 2 tuần.</li>
        <li>Tuần 10 đến 13: giữ ổn định, viết báo cáo quý, lập kế hoạch quý sau từ dữ liệu thật.</li>
        <li>Mỗi thứ Hai họp 30 phút theo đúng 4 tầng của dashboard; mỗi cuối tháng họp 60 phút quyết định tăng, giảm, dừng kênh.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Lịch 13 tuần trên một trang, mỗi tuần có việc chính, người làm và số lead mục tiêu.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Đổi kế hoạch mỗi tuần theo cảm giác. Một kênh cần tối thiểu 2 tuần dữ liệu trước khi kết luận.</p>

      <h2>Checklist trước khi bắt đầu</h2>
      <ul class="tasks">
        <li><span class="box"></span>Có bảng mục tiêu 5 dòng tính ngược từ doanh thu.</li>
        <li><span class="box"></span>Có bảng hành trình 3 chặng lấy từ phỏng vấn khách thật.</li>
        <li><span class="box"></span>Chọn tối đa 3 kênh, mỗi kênh có người phụ trách và chỉ tiêu lead.</li>
        <li><span class="box"></span>Có tài liệu thông điệp 1 trang và lịch sản xuất nội dung.</li>
        <li><span class="box"></span>Ngân sách chia theo tuần, có cột đối chiếu lead.</li>
        <li><span class="box"></span>Tracking đã kiểm tra bằng Debug, lead đổ về một nơi.</li>
        <li><span class="box"></span>Lịch 13 tuần và lịch họp cố định.</li>
      </ul>
      <p>Nếu thiếu một mục, chưa nên tiêu tiền quảng cáo. Bù mục đó trước, thường chỉ mất thêm vài ngày nhưng tiết kiệm cả tháng ngân sách.</p>
    `
  },
  {
    slug: 'framework-seo-8-buoc',
    title: 'Framework SEO 8 bước: từ audit đến lead',
    metaTitle: 'Framework SEO 8 bước: từ audit kỹ thuật đến đo bằng lead',
    category: 'Framework SEO',
    excerpt: 'Trình tự SOHO triển khai SEO cho một website: audit kỹ thuật, nghiên cứu từ khóa theo ý định, dựng cấu trúc theo cụm chủ đề, viết brief, tối ưu on-page và thực thể, nội dung sẵn sàng cho AI Search, liên kết, rồi đo bằng lead.',
    readTime: '14 phút đọc',
    date: '07/10/2026',
    author: 'Nguyễn Tuấn Anh',
    authorRole: 'Head of Growth SEO @ SOHO',
    featured: false,
    image: {src: '/blog/framework-seo-8-buoc.webp', alt: 'Kính lúp, minh họa framework SEO 8 bước'},
    content: `
      <p>SEO thất bại thường không phải vì thiếu kỹ thuật mà vì làm sai thứ tự: viết bài trước khi biết site có được index không, mua backlink trước khi có trang đáng để trỏ về. Framework này cố định thứ tự 8 bước. Bước trước chưa xong thì chưa sang bước sau.</p>

      <h2>Bước 1. Audit kỹ thuật: site có được Google đọc và hiểu không?</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Mở Google Search Console, vào mục Trang: đếm số trang đã index so với số trang thực có. Chênh lệch lớn là dấu hiệu đầu tiên cần xử lý.</li>
        <li>Crawl toàn site bằng Screaming Frog hoặc công cụ tương đương. Lọc: trang 404, chuỗi chuyển hướng, trang trùng tiêu đề, trang thiếu H1, canonical sai.</li>
        <li>Kiểm tra Core Web Vitals trên PageSpeed Insights cho 5 mẫu trang: trang chủ, trang danh mục, trang sản phẩm hoặc dịch vụ, bài blog, trang liên hệ.</li>
        <li>Kiểm tra robots.txt, sitemap.xml, phiên bản mobile, HTTPS và dữ liệu có cấu trúc hiện có.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Danh sách lỗi xếp theo 3 mức: chặn index (sửa ngay), ảnh hưởng xếp hạng (sửa trong 2 tuần), nên có (xếp lịch). Mỗi lỗi ghi rõ trang nào, cách sửa, ai sửa.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Gửi khách hàng một báo cáo 80 trang không ai đọc. Bản audit tốt là một bảng tính, lập trình viên mở ra là làm được.</p>

      <h2>Bước 2. Nghiên cứu từ khóa theo ý định tìm kiếm</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Thu thập từ khóa từ 4 nguồn: Search Console (từ khóa đã có hiển thị), công cụ từ khóa, trang của đối thủ, và câu hỏi khách hàng thật hỏi đội sale.</li>
        <li>Gắn mỗi từ khóa một ý định: <strong>Thông tin</strong> (muốn hiểu), <strong>So sánh</strong> (đang chọn), <strong>Giao dịch</strong> (muốn mua, muốn báo giá), <strong>Thương hiệu</strong> (tìm đúng tên).</li>
        <li>Với mỗi từ khóa Giao dịch và So sánh, tìm trên Google và ghi lại dạng trang đang xếp top: bài viết, trang dịch vụ, trang danh mục hay video. Đây là dạng trang phải làm.</li>
        <li>Ưu tiên theo công thức: giá trị kinh doanh × khả năng xếp hạng. Từ khóa ít lượt tìm nhưng ra lead xếp trên từ khóa nhiều lượt tìm nhưng toàn người tham khảo.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Bảng từ khóa có cột: từ khóa, ý định, dạng trang phải làm, lượt tìm, độ khó, mức ưu tiên. Thường 200 đến 500 dòng cho một site dịch vụ.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Chọn từ khóa theo lượt tìm kiếm. Từ khóa lớn nhất ngành thường là ý định Thông tin, xếp hạng được cũng rất ít lead.</p>

      <h2>Bước 3. Gom từ khóa thành cụm chủ đề và dựng cấu trúc site</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Gom các từ khóa cùng ý định và cùng dạng trang thành một nhóm. Mỗi nhóm là một trang, không phải mỗi từ khóa một trang.</li>
        <li>Chọn mỗi dịch vụ hoặc dòng sản phẩm một trang trụ (pillar). Các bài giải đáp câu hỏi xoay quanh dịch vụ đó là bài vệ tinh, trỏ về trang trụ.</li>
        <li>Vẽ sơ đồ site: trang chủ → trang trụ → bài vệ tinh. Mọi trang quan trọng cách trang chủ không quá 3 lần click.</li>
        <li>Đối chiếu với site hiện tại: trang nào giữ, trang nào gộp, trang nào chuyển hướng 301, trang nào tạo mới.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Sơ đồ site và bảng URL: URL cũ, URL mới, hành động (giữ, gộp, chuyển hướng, tạo mới), nhóm từ khóa gán cho URL đó.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Hai trang cùng nhắm một nhóm từ khóa, tự cạnh tranh nhau. Kiểm tra bằng cách tìm trong Search Console xem một từ khóa có đang hiển thị ở hai URL không.</p>

      <h2>Bước 4. Viết brief cho từng trang trước khi viết nội dung</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Mỗi trang một brief gồm: từ khóa chính, 3 đến 5 từ khóa phụ, ý định, dạng trang, độ dài tham khảo từ top 5 hiện tại.</li>
        <li>Lập dàn ý H2, H3 từ câu hỏi thật của khách và mục "Mọi người cũng hỏi" trên Google.</li>
        <li>Ghi rõ bằng chứng cần đưa vào: số liệu nội bộ, ảnh chụp quy trình, case, chứng nhận. Đây là phần đối thủ không sao chép được.</li>
        <li>Ghi liên kết nội bộ bắt buộc: trỏ về trang trụ nào, trỏ sang bài vệ tinh nào, dùng anchor text gì.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Brief 1 trang cho mỗi URL, người viết nhận brief là viết được mà không cần hỏi lại.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Giao cho người viết chỉ một từ khóa. Bài ra không đúng ý định, không có bằng chứng, phải viết lại.</p>

      <h2>Bước 5. Tối ưu on-page và thực thể thương hiệu</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Mỗi trang đúng một H1 chứa từ khóa chính, tiêu đề meta dưới 60 ký tự có lý do để click, mô tả meta nêu kết quả khách nhận được.</li>
        <li>Đoạn mở đầu trả lời thẳng câu hỏi chính trong 2 đến 3 câu trước khi đi vào chi tiết.</li>
        <li>Thêm dữ liệu có cấu trúc: Organization cho trang chủ, Service hoặc Product cho trang dịch vụ, Article kèm author cho bài viết, FAQ cho mục hỏi đáp.</li>
        <li>Thống nhất tên, địa chỉ, số điện thoại trên website, Google Business Profile và các trang mạng xã hội. Trang Giới thiệu và trang tác giả phải có thật và có chi tiết kiểm chứng được.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Checklist on-page tick đủ cho mọi URL trong bảng ở bước 3, kiểm tra dữ liệu có cấu trúc bằng công cụ Rich Results Test không báo lỗi.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Nhồi từ khóa vào tiêu đề và H1. Google hiểu ngữ nghĩa, người đọc thì bỏ đi.</p>

      <h2>Bước 6. Viết nội dung sẵn sàng cho AI Search</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Dưới mỗi H2, H3 viết câu trả lời trực tiếp trong 40 đến 60 từ, có con số hoặc điều kiện cụ thể, rồi mới giải thích.</li>
        <li>Dùng bảng cho so sánh, danh sách đánh số cho quy trình, định nghĩa ngắn cho thuật ngữ. Đây là những đoạn AI Overviews và các công cụ như Perplexity ưu tiên trích.</li>
        <li>Đưa trải nghiệm thực: ảnh chụp từ dự án, số liệu nội bộ, bài học sai. Ghi rõ tác giả là ai, làm gì, kinh nghiệm bao lâu.</li>
        <li>Cập nhật ngày sửa đổi thật và nội dung thật khi cập nhật, không đổi ngày để "làm mới".</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Mỗi trang có ít nhất 3 đoạn trả lời trực tiếp có thể trích nguyên văn, 1 bảng hoặc danh sách có cấu trúc, 1 bằng chứng từ trải nghiệm thật.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Mở bài dài 300 chữ nói về tầm quan trọng của chủ đề. Cả người đọc lẫn AI đều bỏ qua đoạn này.</p>

      <h2>Bước 7. Liên kết nội bộ trước, liên kết ngoài sau</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Chạy lại crawl, lọc các trang quan trọng có ít hơn 3 liên kết nội bộ trỏ tới. Bổ sung liên kết từ các bài liên quan với anchor text mô tả đúng trang đích.</li>
        <li>Đặt liên kết về trang trụ ngay trong nội dung, không chỉ ở menu hay footer.</li>
        <li>Với liên kết ngoài, ưu tiên 3 nguồn: báo và trang ngành có thật, đối tác và khách hàng, hồ sơ doanh nghiệp (hiệp hội, danh bạ ngành). Mỗi tháng một vài liên kết tốt hơn vài chục liên kết từ trang không ai đọc.</li>
        <li>Tạo nội dung đáng được trích: số liệu khảo sát riêng, công cụ tính, báo cáo ngành. Đây là cách có liên kết tự nhiên lâu dài.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Bảng liên kết nội bộ đã thêm (trang nguồn, trang đích, anchor) và danh sách nguồn liên kết ngoài đang theo đuổi, có trạng thái.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Mua gói backlink số lượng lớn. Rủi ro phạt cao và không phục hồi được niềm tin của Google trong ngắn hạn.</p>

      <h2>Bước 8. Đo lường bằng lead và lặp lại hàng tháng</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Trong GA4, tạo sự kiện chuyển đổi cho form, gọi điện, chat và tách riêng nguồn organic. Nối với CRM để biết lead organic nào thành đơn.</li>
        <li>Theo dõi 4 tầng mỗi tháng: trang được index và lỗi kỹ thuật; hiển thị và click theo nhóm từ khóa; lead từ organic; đơn và doanh thu từ organic.</li>
        <li>Mỗi tháng chọn 5 trang có hiển thị cao nhưng tỷ lệ click thấp để sửa tiêu đề và mô tả; chọn 5 trang xếp hạng 5 đến 15 để bổ sung nội dung và liên kết nội bộ.</li>
        <li>Mỗi quý quay lại bước 1 và bước 2: site có lỗi mới không, có nhóm từ khóa mới không.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Báo cáo tháng 1 trang theo 4 tầng, kèm 10 việc sẽ làm tháng sau. Không báo cáo thứ hạng của từng từ khóa riêng lẻ.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Báo cáo "tăng 300 từ khóa top 10" nhưng lead không tăng. Nếu từ khóa top 10 không ra lead, quay lại bước 2 xem có chọn sai ý định không.</p>

      <h2>Mốc thời gian tham khảo</h2>
      <ul>
        <li><strong>Tháng 1:</strong> bước 1 đến 3. Sửa lỗi chặn index, có bảng từ khóa và sơ đồ site.</li>
        <li><strong>Tháng 2 đến 3:</strong> bước 4 đến 6 cho nhóm trang ưu tiên cao nhất. Bắt đầu bước 7 với liên kết nội bộ.</li>
        <li><strong>Tháng 4 trở đi:</strong> bước 7 và 8 chạy đều, mở rộng sang nhóm từ khóa tiếp theo. Kết quả bằng lead thường rõ từ tháng 4 đến 6 với site đã có nền, lâu hơn với site mới.</li>
      </ul>
    `
  },
  {
    slug: 'framework-ads-6-buoc',
    title: 'Framework Google Ads và Meta Ads 6 bước',
    metaTitle: 'Framework chạy Google Ads và Meta Ads trong 6 bước | SOHO',
    category: 'Framework Ads',
    excerpt: 'Trình tự SOHO áp dụng cho mọi tài khoản quảng cáo mới: tính chi phí mỗi lead cho phép, cắm tracking trước khi tiêu tiền, dựng cấu trúc tài khoản, thử nghiệm sáng tạo và trang đích, tối ưu theo tuần, rồi mở rộng ngân sách theo doanh thu.',
    readTime: '13 phút đọc',
    date: '06/10/2026',
    author: 'Trần Minh Quân',
    authorRole: 'Performance Marketing Lead @ SOHO',
    featured: false,
    image: {src: '/blog/framework-ads-6-buoc.webp', alt: 'Vòng bốn màu Google, minh họa framework chạy quảng cáo'},
    content: `
      <p>Quảng cáo trả tiền cho kết quả nhanh nhưng cũng đốt tiền nhanh nếu bỏ qua phần chuẩn bị. Framework 6 bước này dùng chung cho Google Ads và Meta Ads; phần khác nhau giữa hai nền tảng được ghi riêng trong từng bước.</p>

      <h2>Bước 1. Tính chi phí mỗi lead cho phép trước khi mở tài khoản</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Lấy 3 số từ doanh nghiệp: giá trị đơn trung bình, biên lợi nhuận gộp, tỷ lệ chốt từ lead thành đơn.</li>
        <li>Tính chi phí thu hút khách hàng tối đa chấp nhận được (CAC cho phép) = giá trị đơn × biên lợi nhuận gộp × tỷ lệ phần lợi nhuận sẵn sàng chi cho marketing (thường 30 đến 50%).</li>
        <li>Tính chi phí mỗi lead cho phép (CPL cho phép) = CAC cho phép × tỷ lệ chốt.</li>
        <li>Đặt 2 ngưỡng: CPL mục tiêu (bằng 70% CPL cho phép) và CPL dừng (bằng 130% CPL cho phép, vượt 2 tuần liên tiếp thì dừng nhóm quảng cáo đó).</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Một dòng duy nhất mọi người trong dự án thuộc lòng: CPL mục tiêu, CPL dừng, số lead cần mỗi tuần.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Đánh giá chiến dịch bằng CPC và CTR. Click rẻ không có nghĩa là lead rẻ, và lead rẻ không có nghĩa là đơn rẻ.</p>

      <h2>Bước 2. Cắm tracking và kiểm tra trước khi tiêu đồng đầu tiên</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Cài Google Tag Manager, GA4, Google Ads tag và Meta Pixel qua GTM. Không cài tay nhiều đoạn mã rải trong site.</li>
        <li>Tạo sự kiện chuyển đổi cho từng hành động có giá trị: gửi form, gọi điện, nhắn Zalo hoặc Messenger, thêm vào giỏ, mua hàng. Mỗi sự kiện gán một giá trị tiền, dù là ước lượng.</li>
        <li>Thiết lập Conversion API cho Meta và Enhanced Conversions cho Google để bù dữ liệu mất do trình duyệt chặn. Với site có giỏ hàng, cân nhắc server-side tagging.</li>
        <li>Kiểm tra bằng Tag Assistant, Meta Events Manager và chế độ Debug của GA4: tự điền form thử, xem sự kiện có về đúng tên, đúng giá trị không.</li>
        <li>Nối lead vào CRM hoặc Google Sheet có cột trạng thái. Đội sale cập nhật trạng thái trong 24 giờ.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Bảng sự kiện: tên, điều kiện kích hoạt, giá trị, nền tảng nhận, trạng thái đã kiểm tra. Ảnh chụp màn hình Debug cho từng sự kiện.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Bật quảng cáo rồi mới cài tracking "sau". Hai tuần đầu, giai đoạn thuật toán học, chạy mù, phải học lại từ đầu khi tracking xong.</p>

      <h2>Bước 3. Dựng cấu trúc tài khoản theo ý định và theo chặng</h2>
      <h3>Việc cần làm</h3>
      <p><strong>Google Ads</strong></p>
      <ol>
        <li>Tách chiến dịch theo ý định: Thương hiệu (tên công ty, sản phẩm), Giao dịch (từ khóa có "giá", "báo giá", "mua", "dịch vụ" kèm địa điểm), Cân nhắc (so sánh, đánh giá). Mỗi chiến dịch một ngân sách riêng.</li>
        <li>Mỗi nhóm quảng cáo 5 đến 15 từ khóa cùng chủ đề, dùng đối sánh cụm từ, thêm danh sách từ khóa phủ định dùng chung ngay từ đầu (miễn phí, tuyển dụng, tự làm, tên đối thủ nếu không chạy).</li>
        <li>Chiến dịch Performance Max hoặc Shopping chỉ bật sau khi có ít nhất 30 chuyển đổi một tháng từ chiến dịch tìm kiếm để thuật toán có dữ liệu.</li>
      </ol>
      <p><strong>Meta Ads</strong></p>
      <ol>
        <li>Tách chiến dịch theo chặng: Tiếp cận mới (đối tượng rộng hoặc sở thích), Nhắc lại (người đã xem trang, xem video, tương tác), Chuyển đổi (người đã vào trang đích, thêm giỏ).</li>
        <li>Mỗi nhóm quảng cáo một đối tượng, loại trừ chéo để không tự cạnh tranh. Đặt tối ưu theo sự kiện chuyển đổi gần nhất với doanh thu mà vẫn đủ 50 sự kiện một tuần.</li>
        <li>Đặt tên theo quy ước: [Chặng]_[Đối tượng]_[Mẫu]_[Ngày]. Mọi báo cáo sau này lọc theo tên.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Sơ đồ tài khoản 1 trang: chiến dịch, nhóm, đối tượng hoặc từ khóa, ngân sách ngày, sự kiện tối ưu, trang đích.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Một chiến dịch gộp cả từ khóa thương hiệu lẫn từ khóa chung. Số liệu đẹp nhờ thương hiệu che mất phần chung đang lỗ.</p>

      <h2>Bước 4. Thử nghiệm sáng tạo và trang đích theo ma trận</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Chọn 3 góc thông điệp từ hành trình khách hàng: nỗi đau, kết quả, bằng chứng. Mỗi góc làm 2 định dạng (ảnh tĩnh và video ngắn với Meta; 2 bộ tiêu đề và mô tả với Google).</li>
        <li>Trang đích tương ứng với thông điệp quảng cáo: tiêu đề trang nhắc lại lời hứa trong quảng cáo, form không quá 3 trường, tải dưới 3 giây trên điện thoại, bằng chứng đặt ngay dưới nút đầu tiên.</li>
        <li>Mỗi lần thử chỉ đổi một biến: hoặc mẫu quảng cáo, hoặc trang đích, hoặc đối tượng. Chạy tối thiểu 7 ngày hoặc tới khi mỗi nhánh có 20 chuyển đổi.</li>
        <li>Ghi kết quả vào một bảng thử nghiệm: giả thuyết, biến thay đổi, ngày bắt đầu, kết quả, quyết định.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Bộ 6 mẫu quảng cáo đầu tiên, 1 đến 2 trang đích, bảng thử nghiệm có lịch 2 tuần một vòng.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Dẫn quảng cáo về trang chủ. Người dùng không tìm thấy điều quảng cáo hứa, thoát ngay, thuật toán học sai về đối tượng.</p>

      <h2>Bước 5. Tối ưu theo nhịp tuần với quy tắc viết sẵn</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Tuần 1 đến 2 (giai đoạn học): không đổi ngân sách quá 20% một lần, không tắt nhóm nào trước 7 ngày trừ khi tiêu gấp đôi CPL dừng mà chưa có lead.</li>
        <li>Từ tuần 3, mỗi thứ Hai xem đúng 4 tầng: chi phí và hiển thị; tỷ lệ chuyển đổi trang đích; lead đủ điều kiện theo CRM; đơn và doanh thu. So với CPL mục tiêu và CPL dừng.</li>
        <li>Áp quy tắc viết sẵn: nhóm có CPL dưới mục tiêu 2 tuần liên tiếp thì tăng ngân sách 20%; nhóm vượt CPL dừng 2 tuần thì tạm dừng và thay mẫu; từ khóa tiêu quá 3 lần CPL dừng mà không có lead thì thêm phủ định.</li>
        <li>Mỗi tuần thêm từ khóa phủ định từ báo cáo cụm từ tìm kiếm (Google) và loại trừ đối tượng đã chuyển đổi (Meta).</li>
        <li>Mỗi 2 tuần đưa mẫu mới từ bảng thử nghiệm ở bước 4 để chống mỏi quảng cáo.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Nhật ký tối ưu: ngày, thay đổi gì, lý do theo quy tắc nào, kết quả sau 1 tuần. Khách hàng đọc nhật ký là hiểu tiền đi đâu.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Sửa tài khoản mỗi ngày theo số liệu ngày hôm trước. Thuật toán không kịp học, hiệu suất dao động và không rút ra được kết luận.</p>

      <h2>Bước 6. Mở rộng ngân sách theo doanh thu, không theo lead</h2>
      <h3>Việc cần làm</h3>
      <ol>
        <li>Mỗi tháng đối chiếu lead từng chiến dịch với trạng thái trong CRM: tỷ lệ lead đủ điều kiện, tỷ lệ chốt, doanh thu. Tính CAC thật và ROAS thật cho từng chiến dịch, không dùng số của nền tảng.</li>
        <li>Gửi ngược dữ liệu lead đủ điều kiện và đơn thành công về nền tảng qua chuyển đổi offline (Google) hoặc Conversion API (Meta) để thuật toán tối ưu theo chất lượng, không chỉ số lượng.</li>
        <li>Mở rộng theo thứ tự: tăng ngân sách chiến dịch có CAC thật thấp nhất; thêm từ khóa và đối tượng tương tự chiến dịch đó; mở sang chiến dịch mới (Performance Max, đối tượng rộng) chỉ khi hai bước trên đã chạm trần.</li>
        <li>Mỗi lần tăng ngân sách tối đa 20 đến 30%, chờ 1 tuần, kiểm tra CPL và CAC trước khi tăng tiếp.</li>
      </ol>
      <h3>Đầu ra</h3>
      <p>Báo cáo tháng 1 trang theo 4 tầng, mỗi chiến dịch có CAC thật và ROAS thật, kèm kế hoạch ngân sách tháng sau có điều kiện tăng, giảm, dừng.</p>
      <h3>Lỗi thường gặp</h3>
      <p>Tăng gấp đôi ngân sách khi thấy lead rẻ mà chưa kiểm tra chất lượng lead. Lead rẻ thường là lead rác, đội sale mất niềm tin vào marketing.</p>

      <h2>Checklist trước khi bật quảng cáo</h2>
      <ul class="tasks">
        <li><span class="box"></span>Có CPL mục tiêu và CPL dừng tính từ biên lợi nhuận và tỷ lệ chốt.</li>
        <li><span class="box"></span>Mọi sự kiện chuyển đổi đã kiểm tra bằng Debug, có ảnh chụp.</li>
        <li><span class="box"></span>Conversion API hoặc Enhanced Conversions đã bật.</li>
        <li><span class="box"></span>Chiến dịch tách theo ý định (Google) hoặc theo chặng (Meta), có từ khóa phủ định và loại trừ đối tượng.</li>
        <li><span class="box"></span>Có 6 mẫu quảng cáo và trang đích khớp thông điệp, tải dưới 3 giây trên điện thoại.</li>
        <li><span class="box"></span>Lead đổ về CRM, sale cam kết cập nhật trạng thái trong 24 giờ.</li>
        <li><span class="box"></span>Quy tắc tối ưu tuần đã viết ra và được khách hàng duyệt.</li>
      </ul>
    `
  }
];

// Quy tắc blog: H1 ≤ 50, metaTitle ≤ 60, có image {src, alt}. Vi phạm là build dừng.
for (const a of articles){
  const where = `Bài blog "${a.slug}"`;
  if (!a.title || a.title.length > 50) throw new Error(`${where}: title (H1) phải có và tối đa 50 ký tự, hiện ${(a.title || '').length}.`);
  if (!a.metaTitle || a.metaTitle.length > 60) throw new Error(`${where}: metaTitle phải có và tối đa 60 ký tự, hiện ${(a.metaTitle || '').length}.`);
  if (!a.image || !a.image.src || !a.image.alt) throw new Error(`${where} thiếu image {src, alt}. Xem chú thích đầu components/blogData.js`);
}

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

// Bài viết gom theo danh mục, theo thứ tự `categories`; danh mục không có bài thì bỏ qua.
export function getArticlesByCategory(){
  const list = getLatestArticles();
  const known = categories.filter(c => list.some(a => a.category === c));
  const extra = [...new Set(list.map(a => a.category))].filter(c => !categories.includes(c));
  return [...known, ...extra].map(name => ({name, id: categorySlug(name), items: list.filter(a => a.category === name)}));
}

export function getLatestArticles(limit = articles.length){
  return [...articles]
    .sort((a, b) => toISODate(b.date).localeCompare(toISODate(a.date)))
    .slice(0, limit);
}
