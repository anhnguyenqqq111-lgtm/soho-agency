export const thietKeWebsiteArticle = {
  metaTitle: 'Thiết kế website doanh nghiệp để có khách liên hệ | SOHO',
  metaDesc:
    'Website doanh nghiệp cần gì để khách liên hệ: sơ đồ trang, tốc độ theo Core Web Vitals, chuẩn SEO khi dựng, chọn nền tảng, quyền sở hữu tên miền, chi phí.',
  readingTime: '11 phút đọc',
  updatedDate: '31/10/2026',
  author: {name: 'Nguyễn Thế Tuấn Anh', role: 'Phụ trách chiến lược tăng trưởng, SOHO Agency'},
  cover: {
    src: '/media/articles/thiet-ke-website/thiet-ke-website-hero.webp',
    alt: 'Laptop, điện thoại, sổ ghi chép có phác thảo và tách cà phê trên bàn gỗ, góc làm việc khi lên kế hoạch website',
    width: 1600,
    height: 900
  },
  credits: [
    {text: 'Iphone, macbook and smartphone on a table (Unsplash), Alejandro Escamilla alejandroescamilla, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Iphone,_macbook_and_smartphone_on_a_table_(Unsplash).jpg'},
    {text: 'White work table with notes, smartphone and laptop (Unsplash), JESHOOTS.COM jeshoots, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:White_work_table_with_notes,_smartphone_and_laptop_(Unsplash).jpg'},
    {text: 'Lauren Mancke 2016-05-27 (Unsplash), Lauren Mancke laurenmancke, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Lauren_Mancke_2016-05-27_(Unsplash).jpg'},
    {text: 'Colorful lines of code (Unsplash), Ilya Pavlov ilyapavlov, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Colorful_lines_of_code_(Unsplash).jpg'}
  ],
  toc: [
    {id: 'website-de-lam-gi', title: '1. Website doanh nghiệp để làm gì'},
    {id: 'noi-dung-truoc-giao-dien', title: '2. Sơ đồ trang và nội dung đi trước giao diện'},
    {id: 'toc-do-core-web-vitals', title: '3. Tốc độ trên điện thoại và Core Web Vitals'},
    {id: 'chuan-seo-khi-dung', title: '4. Chuẩn SEO ngay từ lúc dựng'},
    {id: 'chon-nen-tang', title: '5. Chọn nền tảng theo nhu cầu'},
    {id: 'ban-giao-quyen-so-huu', title: '6. Bàn giao: tên miền, hosting, tài khoản đứng tên bạn'},
    {id: 'chi-phi-website', title: '7. Chi phí thiết kế website phụ thuộc vào đâu'},
    {id: 'cau-hoi-thuong-gap', title: '8. Câu hỏi thường gặp về thiết kế website'}
  ],
  sections: [
    {
      id: 'website-de-lam-gi',
      heading: '1. Website doanh nghiệp để làm gì',
      content: `
Khách biết đến bạn qua quảng cáo Facebook, Google Maps hay lời giới thiệu của người quen. Trước khi gọi, nhiều người mở website để kiểm tra: công ty có thật không, làm được việc mình cần không, giá khoảng bao nhiêu, đã làm cho ai.

Website trả lời đủ những câu đó thì khách liên hệ. Thiếu một câu quan trọng, khách đóng trang và mở trang của đối thủ. Vì vậy thước đo của một website doanh nghiệp là số khách liên hệ qua nó, không phải số lời khen "web đẹp".

### Khi nào nên làm mới, khi nào chỉ cần sửa

Nên làm mới khi website cũ có từ hai dấu hiệu sau trở lên:

- Xem trên điện thoại thì chữ nhỏ, ảnh vỡ, nút khó bấm.
- Trang tải chậm, nhất là khi mở bằng 4G.
- Muốn sửa một dòng chữ cũng phải nhờ người khác.
- Không ai biết mật khẩu quản trị, tên miền đang đứng tên ai.

Nếu website vẫn nhanh, hiển thị tốt và có khách liên hệ đều, chỉ một vài trang có tỉ lệ chuyển đổi thấp, thì chưa cần làm lại cả web. Sửa và thử nghiệm từng trang sẽ rẻ hơn, xem [trang Tối ưu chuyển đổi](/dich-vu/cro-landing-page/).
`
    },
    {
      id: 'noi-dung-truoc-giao-dien',
      heading: '2. Sơ đồ trang và nội dung đi trước giao diện',
      content: `
Lỗi hay gặp nhất là chọn giao diện trước, rồi nhồi chữ vào cho vừa khung. Kết quả là trang đẹp nhưng không nói được điều khách cần biết. Làm ngược lại sẽ chắc hơn: biết khách hỏi gì, rồi mới quyết định trang có bao nhiêu khối và khối nào nằm trên.

![Bàn làm việc trắng với cuốn sổ mở trang trống, bút chì, điện thoại và laptop, chuẩn bị viết nội dung cho website](/media/articles/thiet-ke-website/thiet-ke-website-anh-01.webp "1200x800")
*Viết ra câu khách hay hỏi trên giấy trước, rồi mới mở phần mềm thiết kế.*

### Bắt đầu từ câu khách hay hỏi

Lấy câu hỏi từ nơi khách đang hỏi thật: tin nhắn fanpage, Zalo, cuộc gọi tới nhân viên bán hàng. Gom lại thường được mấy nhóm:

- Bạn làm gì, cho ai, ở khu vực nào.
- Sản phẩm, dịch vụ cụ thể và khoảng giá.
- Bằng chứng: dự án đã làm, ảnh thật, đánh giá của khách.
- Quy trình làm việc, thời gian, bảo hành.
- Cách liên hệ, địa chỉ, giờ làm việc.

### Từ câu hỏi ra sơ đồ trang

Mỗi nhóm câu hỏi thành một trang hoặc một khối trên trang. Một website doanh nghiệp nhỏ thường gồm trang chủ, trang cho từng nhóm dịch vụ chính, trang dự án, trang giới thiệu, trang liên hệ và mục bài viết. Mỗi trang có một việc chính muốn khách làm: gọi, nhắn Zalo, đặt lịch hay điền form. Nút đó phải luôn dễ thấy trên điện thoại.

Một ví dụ từ dự án tiêu biểu của SOHO: website của [King Decor Luxury](/du-an/king-decor-luxury/), đơn vị thiết kế, thi công quán cà phê sân vườn, studio và homestay, được sắp xếp lại theo từng nhóm dịch vụ chính. SOHO viết thêm bài trả lời đúng câu chủ đầu tư hay hỏi về mẫu, chi phí và kinh nghiệm thi công. Yêu cầu tư vấn của dự án này đến từ quảng cáo Facebook chạy song song. Phần website giúp chủ đầu tư có chỗ xem kỹ trước khi liên hệ.

### Viết nội dung trước khi thiết kế

Chữ và ảnh thật nên có trước bản thiết kế, ít nhất cho trang chủ và các trang dịch vụ: ảnh thật của sản phẩm, công trình, đội ngũ (ảnh mạng làm khách nghi ngờ), khoảng giá, quy trình và vài câu hỏi thường gặp.

![Quy trình 5 bước làm website: câu hỏi của khách, sơ đồ trang, nội dung, giao diện, lập trình và ra mắt](/media/articles/thiet-ke-website/soho-thiet-ke-website-steps-01.webp "1360x850")
*Nội dung đi trước giao diện, nên khi thiết kế xong không phải cắt chữ cho vừa khung.*
`
    },
    {
      id: 'toc-do-core-web-vitals',
      heading: '3. Tốc độ trên điện thoại và Core Web Vitals',
      content: `
Nhiều khách mở website bằng điện thoại. Theo [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing), Google cũng dùng phiên bản điện thoại của website để lập chỉ mục và xếp hạng.

![Máy tính bảng và điện thoại màu trắng đặt cạnh nhau trên mặt đá, hai màn hình khách thường dùng để xem website](/media/articles/thiet-ke-website/thiet-ke-website-anh-02.webp "1200x800")
*Duyệt giao diện trên điện thoại trước, vì Google cũng dùng bản điện thoại để lập chỉ mục và xếp hạng.*

### Ba chỉ số Core Web Vitals

Core Web Vitals là ba chỉ số Google dùng để đo trải nghiệm khi tải và dùng một trang. Ngưỡng "tốt" theo [web.dev](https://web.dev/articles/vitals):

| Chỉ số | Đo điều gì | Mức tốt |
|---|---|---|
| LCP (Largest Contentful Paint) | Thời gian phần nội dung lớn nhất hiện ra, thường là ảnh đầu trang hoặc tiêu đề | Từ 2,5 giây trở xuống |
| INP (Interaction to Next Paint) | Độ trễ từ lúc chạm, bấm tới lúc trang phản hồi | Từ 200 mili giây trở xuống |
| CLS (Cumulative Layout Shift) | Mức bố cục bị xô lệch khi trang đang tải | Từ 0,1 trở xuống |

Cũng theo [web.dev](https://web.dev/articles/vitals), một trang được tính là đạt khi 75% lượt tải đạt mức tốt, đo riêng cho điện thoại và máy tính.

### Tốc độ quan trọng tới đâu

Google nói rõ trong [phần hỏi đáp về trải nghiệm trang](https://developers.google.com/search/docs/appearance/page-experience) rằng Google luôn ưu tiên nội dung liên quan nhất, kể cả khi trải nghiệm trang chưa tốt. Khi nhiều trang cùng hữu ích, trải nghiệm tốt có thể tạo khác biệt. Nói gọn: web nhanh không thay được nội dung tốt. Nhưng web chậm làm khách thoát trước khi kịp đọc nội dung đó.

### Việc nên làm ngay khi dựng

- Nén ảnh sang WebP hoặc AVIF, xuất đúng kích thước hiển thị.
- Khai báo sẵn chiều rộng, chiều cao cho ảnh và khung quảng cáo để trang không bị xô.
- Bớt plugin, bớt mã nhúng (khung chat, pixel quảng cáo, bản đồ) không thật cần.
- Chỉ dùng một đến hai phông chữ, tải bản đã rút gọn.
- Chọn hosting có máy chủ gần khách ở Việt Nam hoặc có CDN (mạng phân phối nội dung).

Kiểm tra bằng PageSpeed Insights và [báo cáo Core Web Vitals trong Search Console](https://developers.google.com/search/docs/appearance/core-web-vitals). Web mới ít lượt truy cập có thể chưa có số đo từ người dùng thật, khi đó xem số đo thử nghiệm của PageSpeed Insights.
`
    },
    {
      id: 'chuan-seo-khi-dung',
      heading: '4. Chuẩn SEO ngay từ lúc dựng',
      content: `
Có những việc gần như không tốn thêm tiền nếu làm lúc dựng web, nhưng sửa sau thì phải sửa cả trăm trang. SEO dài hạn (nội dung theo từ khóa, liên kết, đo thứ hạng) là việc riêng, xem [trang SEO tổng thể](/dich-vu/seo-tong-the/).

![Mã HTML phần đầu trang trên màn hình, có thẻ title và thẻ meta, nơi khai báo tiêu đề và thông tin trang cho Google](/media/articles/thiet-ke-website/thiet-ke-website-anh-03.webp "1200x800")
*Tiêu đề trang, đường dẫn, alt ảnh và sitemap làm đúng một lần lúc dựng thì không phải sửa lại cả trăm trang.*

### Những việc làm một lần, dùng lâu

- **Đường dẫn dễ hiểu.** [Google khuyên](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) đưa vào đường dẫn những từ có ích cho người đọc, thay vì dãy số ngẫu nhiên. Ví dụ đường dẫn có chữ "thi công quán cafe" dễ hiểu hơn một dãy số.
- **Mỗi trang một tiêu đề riêng**, ngắn, mô tả đúng nội dung trang đó.
- **Một tiêu đề lớn (H1) mỗi trang**, các mục con xếp theo thứ tự.
- **Chữ thay thế (alt) cho ảnh**, mô tả ảnh liên quan gì tới nội dung.
- **Sơ đồ website (sitemap XML)** gửi qua Search Console để Google biết trang nào quan trọng.
- **Dữ liệu có cấu trúc** (schema, đoạn mã mô tả doanh nghiệp, địa chỉ, giờ mở cửa theo cách máy đọc được) cho trang chủ và trang liên hệ.
- **Nội dung trên điện thoại giống trên máy tính.** Có thể gói vào thẻ mở rộng, không cắt bớt.

### Làm lại web cũ mà không mất lượt truy cập

Nếu website cũ đã có trang được Google xếp hạng, đổi đường dẫn mà không chuyển hướng thì những trang đó có thể mất lượt truy cập. Cách làm đúng: lập bảng đối chiếu đường dẫn cũ với đường dẫn mới, rồi cài chuyển hướng vĩnh viễn (301). Theo [hướng dẫn chuyển website của Google](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), nên giữ chuyển hướng càng lâu càng tốt, thường ít nhất 1 năm. Với website nhỏ và vừa, Google thường cần vài tuần để chuyển phần lớn trang sang địa chỉ mới.

### Đừng chờ thứ hạng ngay sau ngày ra mắt

Theo [hướng dẫn SEO cơ bản của Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), có thay đổi có tác dụng sau vài giờ, có thay đổi phải vài tháng. Web mới cần thời gian để Google tìm thấy, lập chỉ mục và đánh giá. Trong lúc chờ, quảng cáo là cách có khách sớm hơn.
`
    },
    {
      id: 'chon-nen-tang',
      heading: '5. Chọn nền tảng theo nhu cầu',
      content: `
Không có nền tảng tốt nhất cho mọi doanh nghiệp. Câu hỏi đúng là: bạn cần website làm được việc gì, ai sẽ sửa nội dung hằng ngày. Và bạn muốn phụ thuộc vào ai.

| | WordPress | Nền tảng bán hàng dựng sẵn | Tự lập trình |
|---|---|---|---|
| Phù hợp với | Website giới thiệu, nhiều bài viết | Cửa hàng online cần quản lý đơn, kho | Tính năng riêng: đặt lịch, kết nối CRM, nhiều ngôn ngữ |
| Tự sửa nội dung | Dễ, nhiều người đã quen | Dễ, theo khung có sẵn | Cần làm thêm trang quản trị |
| Chi phí ban đầu | Thấp đến vừa | Thấp, trả phí theo tháng | Cao hơn hai cách kia |
| Điểm cần để ý | Cập nhật bảo mật đều; nhiều plugin làm web chậm | Giao diện, tốc độ phụ thuộc nền tảng; khó chuyển đi | Phụ thuộc đội lập trình; cần tài liệu bàn giao kỹ |

Nếu khách của bạn cần dùng lại nhiều lần mỗi tháng, như đặt lịch hay tích điểm, có thể bạn cần thêm app, xem [trang Thiết kế Mobile App](/dich-vu/thiet-ke-mobile-app/).
`
    },
    {
      id: 'ban-giao-quyen-so-huu',
      heading: '6. Bàn giao: tên miền, hosting, tài khoản đứng tên bạn',
      content: `
Chuyện không hiếm: doanh nghiệp thuê người làm web, tên miền đăng ký dưới tên người làm. Vài năm sau hai bên ngừng hợp tác, tên miền hết hạn hoặc không lấy lại được. Mọi trang đã có thứ hạng, mọi địa chỉ in trên danh thiếp đều mất theo.

Trước khi nghiệm thu, đòi đủ những thứ trong danh sách dưới đây. Đơn vị làm web vẫn có thể được cấp quyền quản trị để bảo trì. Nhưng chủ sở hữu phải là doanh nghiệp của bạn.

![Checklist 8 mục cần nhận khi bàn giao website](/media/articles/thiet-ke-website/soho-thiet-ke-website-checklist-01.webp "1360x1120")
*Agency có thể giữ quyền quản trị để bảo trì, nhưng chủ sở hữu luôn là doanh nghiệp.*

Vài lưu ý thêm:

- **Tên miền:** bật tự động gia hạn, ghi ngày hết hạn vào lịch. Nếu còn trống, giữ cả bản .vn và .com để người khác không đăng ký mất.
- **Đo lường:** website nên được cài sẵn đo cuộc gọi, nhắn Zalo, gửi form ngay từ ngày ra mắt. Có số này, bạn mới biết kênh nào mang khách về. Cách cài chi tiết xem [trang GA4 và báo cáo](/dich-vu/ga4-looker-dashboard/).
- **Bảo trì:** hỏi rõ ai cập nhật phiên bản, ai sao lưu, bao lâu một lần, lỗi thì ai sửa và trong bao lâu.
`
    },
    {
      id: 'chi-phi-website',
      heading: '7. Chi phí thiết kế website phụ thuộc vào đâu',
      content: `
Hai báo giá chênh nhau nhiều thường là vì hai bên báo cho hai phạm vi khác nhau. Trước khi so giá, hỏi rõ từng yếu tố:

- **Số trang và số mẫu trang.** Mười trang dịch vụ cùng một bố cục rẻ hơn nhiều so với mười trang mỗi trang một kiểu.
- **Ai làm nội dung.** Bạn tự gửi chữ và ảnh, hay cần người viết, chụp ảnh sản phẩm, công trình.
- **Tính năng.** Đặt lịch, thanh toán online, nhiều ngôn ngữ, tài khoản thành viên, kết nối phần mềm quản lý khách hàng. Mỗi tính năng là một phần việc riêng.
- **Nền tảng.** Dùng nền tảng có sẵn hay tự lập trình, như bảng ở mục 5.
- **Thiết kế riêng hay dựa trên mẫu.** Thiết kế riêng tốn thời gian hơn nhưng khớp với nhận diện thương hiệu và nội dung của bạn.
- **Làm lại web cũ.** Chuyển dữ liệu, ảnh, bài viết cũ sang và cài chuyển hướng cho từng đường dẫn.
- **Chi phí hằng năm.** Tên miền, hosting, giấy phép plugin hoặc phông chữ, phí bảo trì.

Ngoài giá làm, hãy hỏi chi phí năm thứ hai. Một website rẻ lúc đầu mà mỗi lần sửa đều tính tiền có thể tốn hơn một website báo giá cao nhưng bạn tự sửa được. Nếu chưa có logo, màu sắc và kiểu chữ thống nhất, nên làm phần đó trước để web không phải sửa lại, xem [trang Nhận diện thương hiệu](/dich-vu/nhan-dien-thuong-hieu/).
`
    },
    {
      id: 'cau-hoi-thuong-gap',
      heading: '8. Câu hỏi thường gặp về thiết kế website',
      content: `
### Làm một website doanh nghiệp mất bao lâu?

Tùy phạm vi. Website giới thiệu vài trang, nội dung có sẵn, thường tính bằng tuần. Website có đặt lịch, thanh toán hay kết nối phần mềm khác thường tính bằng tháng. Phần hay làm chậm nhất là chờ nội dung và ảnh từ phía doanh nghiệp.

### Website mới làm xong có lên top Google ngay không?

Không. Google cần thời gian để tìm thấy, lập chỉ mục và đánh giá trang mới. Website dựng đúng chuẩn giúp quá trình đó thuận lợi, nhưng thứ hạng còn phụ thuộc nội dung, đối thủ và uy tín của website. Đơn vị nào hứa lên top trong thời gian cố định, bạn nên hỏi kỹ họ làm cách nào.

### Tôi có tự sửa nội dung được không?

Nên được. Khi nghiệm thu, yêu cầu buổi hướng dẫn và tài liệu cho những việc hay làm: sửa chữ, thay ảnh, đăng bài, thêm dự án. Những thay đổi lớn về bố cục hay tính năng thì vẫn nên nhờ người làm web để tránh vỡ giao diện.

### Có nên dùng mẫu giao diện có sẵn cho rẻ?

Được, nếu nội dung khớp với bố cục của mẫu và mẫu đó nhẹ. Mẫu nhiều hiệu ứng thường làm web chậm, hoặc không có chỗ cho bằng chứng, buộc phải cắt nội dung cho vừa.

### Làm lại website có làm mất thứ hạng cũ không?

Có thể mất nếu đổi đường dẫn mà không chuyển hướng, hoặc bỏ đi những trang đang có lượt truy cập từ Google. Trước khi làm lại, xuất danh sách trang đang có lượt nhấp trong Search Console, giữ hoặc chuyển hướng 301 từng trang sang trang mới tương ứng, rồi theo dõi vài tuần sau ngày ra mắt.
`
    }
  ]
};
