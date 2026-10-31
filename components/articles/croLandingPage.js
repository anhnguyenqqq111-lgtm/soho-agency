export const croLandingPageArticle = {
  metaTitle: 'Tối ưu tỷ lệ chuyển đổi landing page | SOHO',
  metaDesc:
    'Tìm chỗ khách rời trang bằng GA4 và bản đồ nhiệt, sắp lại landing page, sửa form, tăng tốc trên điện thoại và chạy A/B test đủ mẫu, đủ thời gian.',
  readingTime: '9 phút đọc',
  updatedDate: '31/10/2026',
  authorKey: 'dev',
  cover: {
    src: '/media/articles/cro-landing-page/cro-landing-page-hero.webp',
    alt: 'Bàn tay phác khung bố cục trang web trên giấy, ảnh đầu bài tối ưu tỷ lệ chuyển đổi landing page',
    width: 1600,
    height: 900
  },
  credits: [
    {text: 'Designer sketching Wireframes (Unsplash), Green Chameleon craftedbygc, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Designer_sketching_Wireframes_(Unsplash).jpg'},
    {text: 'Mobile optimization (Unsplash), NeONBRAND neonbrand, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Mobile_optimization_(Unsplash).jpg'},
    {text: 'Behind Doors (Unsplash), Luis Alfonso Orellana biotipografo, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Behind_Doors_(Unsplash).jpg'}
  ],
  toc: [
    {id: 'khi-nao-nen-toi-uu', title: '1. Tối ưu chuyển đổi là gì, khi nào nên làm'},
    {id: 'tim-cho-khach-roi-di', title: '2. Tìm chỗ khách rời đi trước khi sửa'},
    {id: 'cau-truc-landing-page', title: '3. Cấu trúc một landing page dễ chuyển đổi'},
    {id: 'form-va-nut-goi', title: '4. Form, nút gọi và trang cảm ơn'},
    {id: 'toc-do-tren-dien-thoai', title: '5. Tốc độ trên điện thoại'},
    {id: 'ab-test-dung-cach', title: '6. A/B test đúng cách'},
    {id: 'cau-hoi-thuong-gap-cro', title: '7. Câu hỏi thường gặp về tối ưu chuyển đổi'}
  ],
  sections: [
    {
      id: 'khi-nao-nen-toi-uu',
      heading: '1. Tối ưu chuyển đổi là gì, khi nào nên làm',
      content: `
Tỉ lệ chuyển đổi là phần trăm người vào trang rồi làm điều bạn mong: gửi form, gọi điện, nhắn tin, đặt hàng. Tối ưu chuyển đổi (CRO) là tăng tỉ lệ đó mà không cần thêm lượt truy cập.

Một phép tính cho thấy vì sao việc này đáng làm. Ví dụ minh họa: mỗi tháng 2.000 lượt truy cập từ quảng cáo, tốn 20 triệu đồng, trang chuyển đổi 2%, tức 40 khách liên hệ. Chi phí mỗi khách là 500.000 đồng. Sửa trang để tỉ lệ lên 3%, cùng 20 triệu đồng ra 60 khách. Chi phí mỗi khách còn khoảng 333.000 đồng, không cần trả thêm đồng quảng cáo nào.

Nên làm khi:

- Đã có lượt truy cập đều từ Google, quảng cáo hoặc mạng xã hội.
- Đang trả tiền quảng cáo và thấy chi phí mỗi khách cao dần.
- Lượt truy cập không ít mà form, cuộc gọi về rất ít.

Chưa nên làm, hoặc làm việc khác trước, khi:

- Trang chỉ có vài chục lượt truy cập mỗi tháng. Số liệu quá ít để biết thay đổi nào có tác dụng. Lúc này cần thêm lượt truy cập trước, xem [trang Google Ads và Shopping](/google-ads-shopping/) hoặc trang [quảng cáo Facebook](/facebook-ads/) và [quảng cáo TikTok](/tiktok-ads/).
- Giá hoặc sản phẩm không cạnh tranh. Trang tốt không bù được ưu đãi kém.
- Cả website cũ, chậm, khó sửa. Khi đó nên làm lại website, xem [trang Thiết kế website](/thiet-ke-website/).
`
    },
    {
      id: 'tim-cho-khach-roi-di',
      heading: '2. Tìm chỗ khách rời đi trước khi sửa',
      content: `
Lỗi hay gặp nhất là sửa theo cảm giác: đổi màu nút, thay ảnh nền, rồi chờ. Muốn sửa đúng chỗ, cần biết khách rời đi ở đâu và vì sao. Có ba nguồn bổ sung cho nhau.

### Phễu trong GA4: rời đi ở bước nào

Báo cáo khám phá phễu của GA4 cho bạn đặt các bước khách cần đi qua, tối đa 10 bước, rồi xem bao nhiêu người rơi ra ở mỗi bước ([Analytics Help](https://support.google.com/analytics/answer/9327974?hl=en)). Ví dụ: vào trang, cuộn tới bảng giá, mở form, gửi form. Bạn có thể chia phễu theo thiết bị để so điện thoại với máy tính. Chênh lệch lớn giữa hai loại thiết bị thường là manh mối đầu tiên.

Phễu chỉ đọc được khi các hành động đã được đo. Cách cài sự kiện xem ở [trang Đo lường GA4 và Looker Studio](/ga4-looker-dashboard/).

![Bốn bước tìm chỗ khách rời landing page: phễu GA4, bản đồ nhiệt, ghi phiên, hỏi nhân viên](/media/articles/cro-landing-page/soho-cro-landing-page-steps-01.webp "1360x850")
*Phễu cho biết khách rời ở bước nào. Bản đồ nhiệt, ghi phiên và nhân viên bán hàng cho biết vì sao.*

### Bản đồ nhiệt và ghi phiên: vì sao rời đi

Bản đồ nhiệt cho thấy chỗ khách nhấp và họ cuộn tới đâu. Ghi phiên cho xem lại thao tác của từng người, đã che thông tin cá nhân. [Microsoft Clarity](https://learn.microsoft.com/en-us/clarity/setup-and-installation/about-clarity) là công cụ miễn phí có cả hai. Microsoft lưu ý không dùng Clarity cho website hay ứng dụng nhắm tới người dưới 18 tuổi.

Những điều hay phát hiện khi xem ghi phiên:

- Khách nhấp vào ảnh hoặc chữ tưởng là nút, nhưng không có gì xảy ra.
- Phần lớn khách không cuộn tới phần bằng chứng hay bảng giá.
- Khách mở form, điền nửa chừng rồi bỏ ở một ô cụ thể.

### Hỏi người đang nói chuyện với khách

Nhân viên bán hàng biết khách hỏi gì trước khi chốt, lo điều gì, so sánh với ai. Câu hỏi nào lặp lại nhiều mà trang chưa trả lời, đó là chỗ cần bổ sung. Đọc lại tin nhắn và ghi chú cuộc gọi cũ cũng cho kết quả tương tự.
`
    },
    {
      id: 'cau-truc-landing-page',
      heading: '3. Cấu trúc một landing page dễ chuyển đổi',
      content: `
Landing page là trang khách vào sau khi nhấp quảng cáo hay kết quả tìm kiếm. Nó có một việc duy nhất: giúp khách quyết định bước tiếp theo. Thứ tự dưới đây đi theo câu hỏi trong đầu khách.

![Danh sách sáu phần của một landing page theo thứ tự câu hỏi của khách](/media/articles/cro-landing-page/soho-cro-landing-page-checklist-01.webp "1360x1360")
*Mỗi phần trả lời một câu hỏi. Thiếu phần nào, khách dừng ở đó.*

1. **Phần đầu trang khớp với điều khách vừa tìm hay vừa xem.** Quảng cáo nói "chụp ảnh cưới trọn gói dưới 20 triệu" thì tiêu đề trang nói đúng điều đó, không mở bằng câu giới thiệu công ty. Nút liên hệ nằm ngay màn hình đầu.
2. **Vấn đề của khách.** Hai ba câu mô tả tình huống họ đang gặp, bằng lời của họ.
3. **Cách bạn giải quyết.** Gồm những gì, làm thế nào, mất bao lâu. Ngắn, cụ thể.
4. **Bằng chứng.** Ảnh dự án thật, đánh giá của khách có tên, con số có nguồn, logo đối tác nếu được phép.
5. **Giá hoặc cách tính giá.** Không công khai giá được thì nói giá phụ thuộc gì và bao lâu có báo giá.
6. **Câu hỏi thường gặp và lời mời cuối trang.** Trả lời nỗi lo còn lại, rồi đặt nút liên hệ lần nữa.

Mỗi trang chỉ nên có một việc chính cho khách làm. Trang vừa mời đặt lịch, vừa mời tải tài liệu, vừa mời theo dõi fanpage sẽ chia nhỏ sự chú ý. Nếu chạy quảng cáo cho nhiều nhóm khách khác nhau, làm nhiều trang, mỗi trang khớp với một nhóm, thay vì một trang chung cho tất cả.
`
    },
    {
      id: 'form-va-nut-goi',
      heading: '4. Form, nút gọi và trang cảm ơn',
      content: `
Khách đã muốn liên hệ mà vẫn bỏ đi thường vì bước cuối quá phiền.

### Form: chỉ hỏi điều cần để gọi lại

- Mỗi ô thêm vào là thêm một lý do để bỏ. Hỏi tên, số điện thoại và một câu về nhu cầu là đủ để bắt đầu. Ngân sách, địa chỉ, thời gian có thể hỏi khi gọi lại.
- Nói rõ vì sao xin số điện thoại và khi nào sẽ được gọi: "Chúng tôi gọi lại trong giờ làm việc, không gửi tin quảng cáo."
- Dùng đúng loại ô để điện thoại bật bàn phím số khi nhập số.
- Báo lỗi ngay tại ô sai, bằng lời dễ hiểu, không xóa những gì khách đã điền.

### Nút bấm: nói điều sẽ xảy ra

"Gửi" không cho khách biết gì. "Nhận báo giá trong 24 giờ" hay "Giữ lịch tư vấn" rõ hơn nhiều. Trên điện thoại, một thanh nút cố định ở cạnh dưới màn hình với Gọi ngay, Nhắn Zalo hay Messenger giúp khách liên hệ lúc nào cũng được, không phải cuộn ngược lên.

Có khách thích nhắn tin, có khách thích gọi, có khách chỉ muốn để lại số. Cho họ chọn kênh, đừng ép một kênh.

### Trang cảm ơn: đừng để khách rơi vào khoảng trống

Sau khi gửi form, đưa khách tới trang cảm ơn: nói rõ bước tiếp theo, bao lâu có người liên hệ, kèm vài bài hoặc dự án để xem trong lúc chờ. Trang cảm ơn riêng cũng giúp đo chuyển đổi chính xác hơn.
`
    },
    {
      id: 'toc-do-tren-dien-thoai',
      heading: '5. Tốc độ trên điện thoại',
      content: `
Khách từ quảng cáo Facebook, TikTok thường mở trang ngay trong ứng dụng trên điện thoại, nhiều khi bằng mạng di động. Trang trắng vài giây là họ quay lại lướt tiếp.

![Bàn tay cầm điện thoại đang mở một trang web, minh họa khách đọc landing page trên di động](/media/articles/cro-landing-page/cro-landing-page-anh-01.webp "1200x800")
*Khách từ quảng cáo mạng xã hội phần lớn mở trang trên điện thoại, nhiều khi bằng mạng di động.*

### Ba chỉ số Google dùng để đo trải nghiệm

Theo [web.dev](https://web.dev/articles/vitals), Core Web Vitals gồm ba chỉ số, kèm ngưỡng được xem là tốt:

| Chỉ số | Đo điều gì | Ngưỡng tốt |
|---|---|---|
| LCP | Thời gian hiện phần nội dung lớn nhất | Từ 2,5 giây trở xuống |
| INP | Độ nhanh khi khách chạm, nhấp | Từ 200 mili giây trở xuống |
| CLS | Mức nội dung bị xô lệch khi đang tải | Từ 0,1 trở xuống |

Ngưỡng được tính ở phân vị 75 của các lượt tải trang, tách riêng điện thoại và máy tính. Nghĩa là ít nhất ba phần tư lượt truy cập phải đạt. INP đã thay chỉ số FID cũ từ năm 2024. Bạn có thể kiểm tra trang của mình bằng [PageSpeed Insights](https://pagespeed.web.dev/).

### Những thứ hay làm landing page chậm

- Ảnh đầu trang dung lượng lớn, chưa nén, chưa đổi sang định dạng nhẹ như WebP.
- Video tự chạy ngay màn hình đầu.
- Quá nhiều mã theo dõi, khung chat, cửa sổ bật lên cùng tải một lúc.
- Phông chữ tải từ nhiều nguồn.

CLS cao thường thấy khi nút liên hệ bị đẩy xuống lúc ảnh hay quảng cáo tải xong. Khách định bấm nút thì bấm trúng thứ khác. Việc tối ưu tốc độ cho cả website, gồm hosting và nền tảng, thuộc [trang Thiết kế website](/thiet-ke-website/).
`
    },
    {
      id: 'ab-test-dung-cach',
      heading: '6. A/B test đúng cách',
      content: `
A/B test là chạy hai bản trang song song, chia ngẫu nhiên khách vào từng bản, rồi giữ bản tốt hơn. Nghe đơn giản, nhưng rất dễ ra kết luận sai.

![Hai cánh cửa cạnh nhau, một đỏ một xanh, gợi hai bản trang chạy song song trong A/B test](/media/articles/cro-landing-page/cro-landing-page-anh-02.webp "1200x800")
*Hai bản chỉ nên khác nhau ở một điểm, để biết chính điểm đó tạo ra kết quả.*

### Bắt đầu từ một giả thuyết

Giả thuyết tốt có dạng: "Khách trên điện thoại không cuộn tới bảng giá. Đưa khoảng giá lên đầu trang sẽ tăng số form gửi". Nó đến từ dữ liệu ở mục 2, không phải từ sở thích. Thử trước chỗ ảnh hưởng nhiều nhất: phần đầu trang, ưu đãi, form. Màu nút để sau.

### Đủ mẫu và đủ thời gian

Số người cần cho mỗi bản phụ thuộc ba thứ: tỉ lệ chuyển đổi hiện tại, mức chênh lệch nhỏ nhất bạn muốn phát hiện và độ tin cậy mong muốn. Chênh lệch càng nhỏ càng cần nhiều lượt truy cập ([Optimizely](https://support.optimizely.com/hc/en-us/articles/4410283969165-How-long-to-run-an-experiment)). Optimizely khuyên chạy tối thiểu một chu kỳ kinh doanh, tức 7 ngày, để có cả khách ngày thường và cuối tuần. Thời gian chạy nên làm tròn lên số tuần chẵn.

Đừng dừng ngay khi một bản vượt lên trong vài ngày đầu. Kết quả sớm hay đảo chiều khi có thêm dữ liệu.

### Lượng truy cập ít thì làm sao

Trang chỉ vài trăm lượt mỗi tháng khó phát hiện chênh lệch nhỏ. Khi đó nên thử thay đổi lớn như viết lại cả phần đầu trang hay đổi ưu đãi. Sau đó so trước sau trong khoảng thời gian dài hơn, có ghi chú mùa vụ và ngân sách quảng cáo.

### Công cụ và lưu ý SEO

Google Optimize đã ngừng từ 30/09/2023 ([Google](https://support.google.com/optimize/answer/12979939?hl=en)), nên cần công cụ khác hoặc tách trang thủ công. Nếu trang thử có lượt truy cập từ Google tự nhiên, [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/website-testing) khuyên: bản thử đặt thẻ canonical trỏ về bản gốc, chuyển hướng tạm thời 302 chứ không dùng 301, không cho Googlebot thấy nội dung khác người dùng. Có kết luận rồi thì gỡ bản thử ngay.
`
    },
    {
      id: 'cau-hoi-thuong-gap-cro',
      heading: '7. Câu hỏi thường gặp về tối ưu chuyển đổi',
      content: `
### Tỉ lệ chuyển đổi bao nhiêu là tốt?

Không có con số chung đáng tin. Tỉ lệ khác nhau rất xa giữa ngành, giá sản phẩm, nguồn truy cập và cách tính chuyển đổi. So với chính trang của bạn tháng trước, hoặc giữa các nguồn truy cập của bạn, hữu ích hơn so với con số trung bình trên mạng.

### Bao lâu thì thấy kết quả?

Những lỗi rõ như nút không bấm được, form hỏng trên điện thoại, trang tải chậm, sửa xong thường thấy khác biệt trong vài tuần. Một lần A/B test cần tối thiểu một tuần, thường lâu hơn tùy lượng truy cập. SOHO không hứa mức tăng cụ thể trước khi xem số liệu của trang.

### Có cần làm lại cả website không?

Thường là không. Phần lớn việc tối ưu nằm ở vài trang nhận nhiều lượt truy cập nhất. Chỉ khi nền tảng quá chậm hoặc không sửa được nội dung, việc làm lại mới đáng cân nhắc.

### Gắn công cụ ghi phiên có ảnh hưởng quyền riêng tư không?

Có, nên cần làm cẩn thận. Bật chế độ che thông tin nhập vào form, nói rõ trong chính sách quyền riêng tư. Website có khách ở nơi pháp luật yêu cầu thì cần xin đồng ý cookie.

### Làm landing page riêng hay dùng trang dịch vụ có sẵn?

Nếu trang dịch vụ đã khớp với điều khách tìm và chuyển đổi tốt, dùng luôn. Khi chạy quảng cáo cho một ưu đãi hay một nhóm khách riêng, trang riêng thường dễ khớp thông điệp hơn và dễ đo hơn.
`
    }
  ]
};
