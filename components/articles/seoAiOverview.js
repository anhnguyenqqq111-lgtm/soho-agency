export const seoAiOverviewArticle = {
  metaTitle: 'SEO AI Overview: để ChatGPT, Gemini nhắc tên bạn | SOHO',
  metaDesc:
    'AI Overview và ChatGPT chọn nguồn thế nào, khác gì SEO thường, cách viết để được trích dẫn, việc không cần làm và cách đo trong Search Console.',
  readingTime: '11 phút đọc',
  updatedDate: '31/10/2026',
  authorKey: 'seo',
  cover: {
    src: '/media/articles/seo-ai-overview/seo-ai-overview-hero.webp',
    alt: 'Tiêu đề SEO AI Overview: để ChatGPT, Gemini nhắc tên bạn bên cạnh một robot màu trắng',
    width: 1600,
    height: 900
  },
  credits: [
    {text: 'Alex Knight 2017-01-30 (Unsplash), Alex Knight agkdesign, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Alex_Knight_2017-01-30_(Unsplash).jpg'},
    {text: 'Light bulb on green grass (Unsplash), Ashes Sitoula awesome, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Light_bulb_on_green_grass_(Unsplash).jpg'},
    {text: 'CSS code on a screen (Unsplash), Sai Kiran Anagani _imkiran, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:CSS_code_on_a_screen_(Unsplash).jpg'},
    {text: 'Lake Louise Autumn (Unsplash), Shane Hauser shanehauser, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Lake_Louise_Autumn_(Unsplash).jpg'}
  ],
  toc: [
    {id: 'ai-overview-la-gi', title: '1. AI Overview, AI Mode và trợ lý AI là gì'},
    {id: 'ai-chon-nguon-the-nao', title: '2. AI chọn nguồn để trích dẫn thế nào'},
    {id: 'khac-gi-seo-truyen-thong', title: '3. Khác gì so với SEO quen thuộc'},
    {id: 'nhung-viec-khong-can-lam', title: '4. Những việc không cần làm'},
    {id: 'cach-viet-de-duoc-trich-dan', title: '5. Cách viết để dễ được trích dẫn'},
    {id: 'du-lieu-co-cau-truc', title: '6. Dữ liệu có cấu trúc: cần gì, không cần gì'},
    {id: 'do-luong-va-gioi-han', title: '7. Đo được gì và giới hạn của số liệu'},
    {id: 'cau-hoi-thuong-gap', title: '8. Câu hỏi thường gặp về SEO cho AI'}
  ],
  sections: [
    {
      id: 'ai-overview-la-gi',
      heading: '1. AI Overview, AI Mode và trợ lý AI là gì',
      content: `
Gõ một câu hỏi lên Google, nhiều khi bạn thấy một đoạn trả lời viết sẵn nằm trên cùng, kèm vài đường link nhỏ. Đó là **AI Overview** (phần tổng quan do AI tạo). **AI Mode** là chế độ hỏi đáp riêng của Google, cho phép hỏi tiếp nhiều lượt như trò chuyện. Ngoài Google còn có các trợ lý như ChatGPT, Gemini: khách hỏi, trợ lý tìm trên web rồi trả lời kèm nguồn.

Với chủ doanh nghiệp, câu hỏi thực tế là: khi khách hỏi "xưởng nào may đồng phục số lượng ít", "phòng khám nha khoa nào gần quận 7 làm niềng răng", thì câu trả lời có nhắc tới mình không, có link về website mình không, nói về mình có đúng không.

Không phải câu hỏi nào cũng có AI Overview. Theo [Google](https://developers.google.com/search/docs/appearance/ai-features), phần này chỉ hiện khi hệ thống đánh giá nó thật sự bổ sung cho kết quả tìm kiếm thường. AI Overview và AI Mode có thể dùng mô hình khác nhau, nên link được chọn cũng có thể khác nhau.
`
    },
    {
      id: 'ai-chon-nguon-the-nao',
      heading: '2. AI chọn nguồn để trích dẫn thế nào',
      content: `
Google đã công bố khá rõ cách các tính năng AI tìm nguồn, trong [hướng dẫn tối ưu cho tính năng AI tạo sinh](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) và trang [Tính năng AI và website của bạn](https://developers.google.com/search/docs/appearance/ai-features). Tóm lại thành bốn bước:

![Bốn bước AI của Google tìm nguồn: nhận câu hỏi, tách thành nhiều câu tìm phụ, lấy trang từ chỉ mục, viết câu trả lời kèm link](/media/articles/seo-ai-overview/soho-seo-ai-overview-steps-01.webp "1360x850")
*AI của Google không tự nghĩ ra câu trả lời. Nó tìm trang trong chỉ mục rồi tổng hợp, kèm link nguồn.*

1. **Nhận câu hỏi** của người dùng.
2. **Tách thành nhiều câu tìm phụ.** Google gọi là *query fan-out*: hệ thống tự chạy thêm nhiều lượt tìm về các khía cạnh liên quan. Câu "may đồng phục số lượng ít" có thể được tách thành câu về số lượng tối thiểu, giá, thời gian may, chất liệu.
3. **Lấy trang từ chỉ mục của Google Search.** Google gọi đây là *grounding*: câu trả lời được neo vào các trang web có thật, đang được lưu trong chỉ mục.
4. **Viết câu trả lời và gắn link** tới những trang đã dùng.

Điều quan trọng nhất rút ra: các tính năng này dựa trên chính hệ thống xếp hạng và chất lượng của Google Search. Muốn được chọn, trang phải được lưu vào chỉ mục và đủ điều kiện hiện đoạn trích (snippet) trong kết quả tìm kiếm. Theo [Google](https://developers.google.com/search/docs/appearance/ai-features), ngoài điều đó không có yêu cầu riêng nào khác. Google cũng nói rõ việc được lưu và được hiển thị không bao giờ được bảo đảm.

Còn một điều kiện mới: trong Search Console có mục [Search generative AI](https://support.google.com/webmasters/answer/16908024?hl=en) cho phép chủ website chọn cho hay không cho nội dung xuất hiện trong AI Overview và AI Mode. Mặc định là cho phép. Nếu ai đó lỡ chọn loại trừ, website sẽ không có mặt ở đây dù nội dung tốt đến đâu.

Với ChatGPT, cách tìm nguồn do OpenAI quyết định. Điều chắc chắn là theo [tài liệu của OpenAI](https://developers.openai.com/api/docs/bots), website cần cho phép bot tên OAI-SearchBot truy cập trong file robots.txt thì mới có thể hiện trong câu trả lời tìm kiếm của ChatGPT. Bot GPTBot là chuyện khác: nó thu thập dữ liệu để huấn luyện mô hình. Chặn GPTBot không làm bạn mất mặt trong kết quả tìm kiếm của ChatGPT.
`
    },
    {
      id: 'khac-gi-seo-truyen-thong',
      heading: '3. Khác gì so với SEO quen thuộc',
      content: `
Google xem việc tối ưu cho tìm kiếm bằng AI vẫn là SEO. Những cái tên như AEO hay GEO mà bạn có thể nghe, theo [Google](https://developers.google.com/search/docs/fundamentals/third-party-seo), chỉ là cách gọi khác của cùng một việc. Nền móng giữ nguyên: website đọc được, nội dung hữu ích, liên kết hợp lý. Phần nền đó được nói kỹ ở [trang SEO tổng thể](/seo-tong-the/).

Cái thay đổi là cách bạn nhìn kết quả và cách bạn chọn nội dung để viết.

![Bóng đèn tròn nằm trên cỏ xanh, nhãn: Nền SEO giữ nguyên, cách nghĩ về kết quả thay đổi](/media/articles/seo-ai-overview/seo-ai-overview-anh-01.webp "1200x800")
*Nền SEO giữ nguyên. Thay đổi nằm ở mục tiêu, đơn vị nội dung và cách đo.*

- **Mục tiêu.** Trước đây là một vị trí trong mười link. Giờ còn là việc được trích dẫn đúng trong một câu trả lời tổng hợp.
- **Đơn vị nội dung.** Một trang không chỉ phục vụ một từ khóa. Vì AI tách câu hỏi thành nhiều câu phụ, trang trả lời đủ các khía cạnh liên quan có nhiều cơ hội được chọn hơn.
- **Giá trị của thông tin riêng.** Bài viết lại những gì trên mạng đã có rất khó được chọn, vì AI đã có hàng chục nguồn giống thế. Google gọi đây là nội dung "hàng phổ thông" và khuyên tránh.
- **Cách đo.** Lượt nhấp từ một câu hỏi có thể giảm vì khách đọc câu trả lời ngay trên Google. Cần theo dõi thêm lượt hiển thị trong phần AI và chất lượng khách đến.
`
    },
    {
      id: 'nhung-viec-khong-can-lam',
      heading: '4. Những việc không cần làm',
      content: `
Từ khi AI Overview xuất hiện, thị trường có nhiều lời khuyên và dịch vụ mới. Một số không cần thiết. [Hướng dẫn của Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) liệt kê rõ:

- **File llms.txt hay file riêng cho AI.** Google nói không cần tạo file, đánh dấu hay bản Markdown riêng cho máy đọc. Có cũng không giúp, không hại thứ hạng trên Google Search.
- **Cắt bài thành mẩu nhỏ.** Không cần chia bài thành những đoạn thật ngắn để AI dễ hiểu. Google cũng nói không có độ dài bài lý tưởng.
- **Viết theo kiểu riêng cho AI.** Không cần. Hệ thống hiểu từ đồng nghĩa và ý chung của câu, nên cũng không cần săn từng biến thể từ khóa dài.
- **Đi "rải tên" khắp nơi.** Tạo hàng loạt lời nhắc giả về thương hiệu trên diễn đàn, mạng xã hội không có tác dụng như nhiều người tưởng. Hệ thống chống spam của Google được dựng để chặn việc thao túng này.
- **Đoạn mã schema đặc biệt cho AI.** Không có loại nào như vậy.

Cũng cẩn thận với công cụ hay dịch vụ nói đo được "điểm AI" hoặc biết cách AI của Google chấm điểm. Theo [Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), không công cụ bên thứ ba nào truy cập được hệ thống xếp hạng hay hệ thống AI nội bộ của Google.
`
    },
    {
      id: 'cach-viet-de-duoc-trich-dan',
      heading: '5. Cách viết để dễ được trích dẫn',
      content: `
Theo [Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), yếu tố có lẽ ảnh hưởng lớn nhất về lâu dài là nội dung độc đáo, đến từ kinh nghiệm và chuyên môn thật. Với doanh nghiệp nhỏ, đó lại là lợi thế: bạn biết những điều mà người viết thuê không biết.

![Checklist viết bài để dễ được AI trích dẫn: trả lời thẳng ở đầu mục, thông tin riêng, tác giả thật, bảng và các bước](/media/articles/seo-ai-overview/soho-seo-ai-overview-checklist-01.webp "1360x1360")
*Tám điểm kiểm tra trước khi đăng một bài muốn được AI trích dẫn.*

### Trả lời thẳng ngay đầu mục

Khách hỏi "may 50 áo thun đồng phục mất mấy ngày", câu đầu tiên nên là con số và điều kiện, không phải đoạn giới thiệu công ty. Phần giải thích để sau. Tiêu đề mục đặt theo đúng câu khách hỏi.

### Đưa thông tin chỉ bạn mới có

- Số liệu của chính doanh nghiệp: thời gian giao thực tế, mức giá theo số lượng, lỗi khách hay gặp.
- Quy trình thật, ảnh chụp tại xưởng, tại cửa hàng.
- Ví dụ cụ thể từ khách đã phục vụ, có xin phép.

Đây là thứ AI không tìm được ở nơi khác, nên có lý do để chọn trang của bạn.

### Cho biết ai viết và viết dựa trên đâu

[Tài liệu nội dung hữu ích](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) gợi ý ghi tên tác giả, dẫn tới trang giới thiệu người đó và nói rõ bài được làm thế nào. Trong các yếu tố về độ tin cậy, Google nói sự tin cậy là quan trọng nhất. Mỗi con số nên có nguồn ngay trong câu.

### Trình bày dễ đọc, dễ tách ý

Đoạn văn rõ ràng, mục có tiêu đề, bước làm đánh số, bảng so sánh khi có nhiều lựa chọn. Thông tin quan trọng phải ở dạng chữ, không chỉ nằm trong ảnh. Thêm ảnh, video thật khi chúng giúp người đọc hiểu hơn.

### Giữ thông tin luôn đúng

Giá, giờ mở cửa, chính sách đổi trả thay đổi thì sửa ngay trên website. Câu trả lời của AI dựa trên trang đang có trong chỉ mục, nên thông tin cũ trên website có thể bị nhắc lại cho khách. Lịch viết và cập nhật bài định kỳ xem [trang Content marketing](/content-marketing-pr/).
`
    },
    {
      id: 'du-lieu-co-cau-truc',
      heading: '6. Dữ liệu có cấu trúc: cần gì, không cần gì',
      content: `
Dữ liệu có cấu trúc (schema) là đoạn mã ẩn trên trang, giúp Google đọc đúng các thông tin như tên công ty, địa chỉ, tác giả, giá sản phẩm. Theo [Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), schema không bắt buộc để xuất hiện trong phần trả lời bằng AI, nhưng vẫn nên dùng trong chiến lược SEO chung.

![Màn hình hiện các dòng mã HTML với thẻ meta và link, nhãn: Schema, đoạn mã giúp Google đọc đúng thông tin](/media/articles/seo-ai-overview/seo-ai-overview-anh-02.webp "1200x800")
*Schema là đoạn mã khách không thấy, giúp Google đọc đúng tên công ty, địa chỉ, tác giả, giá sản phẩm.*

Những loại đáng làm với doanh nghiệp nhỏ:

| Loại | Đặt ở đâu | Giúp gì |
|---|---|---|
| Organization | Trang chủ hoặc trang giới thiệu | Cho Google biết tên, logo, địa chỉ, số điện thoại, các trang mạng xã hội chính thức. Giúp phân biệt bạn với công ty trùng tên |
| Article | Từng bài viết | Khai báo tác giả, ngày đăng, ngày cập nhật |
| Product | Trang sản phẩm | Giá, tình trạng còn hàng |

Theo [Google](https://developers.google.com/search/docs/appearance/structured-data/organization), schema Organization nên đặt ở trang chủ, không cần lặp lại ở mọi trang. Luật quan trọng nhất: thông tin trong schema phải khớp với chữ người đọc thấy trên trang.

Một thay đổi cần biết: phần hỏi đáp mở rộng (FAQ rich result) đã ngừng hiển thị trên Google Search từ tháng 5/2026, theo [nhật ký cập nhật của Google](https://developers.google.com/search/updates). Mục câu hỏi thường gặp vẫn có ích vì trả lời đúng câu khách hỏi, nhưng đừng trả tiền cho ai hứa "gắn schema FAQ để hiện thêm dòng trên Google".

Với cửa hàng có địa chỉ và shop bán online, Google còn dùng thông tin từ hồ sơ Google Business Profile và Merchant Center. Phần hồ sơ trên Google Maps xem [trang SEO Google Maps](/local-seo-google-maps/).
`
    },
    {
      id: 'do-luong-va-gioi-han',
      heading: '7. Đo được gì và giới hạn của số liệu',
      content: `
Từ 31/08/2026, Search Console có [báo cáo hiệu suất AI tạo sinh](https://support.google.com/webmasters/answer/16984139?hl=en) cho mọi website. Báo cáo này cho biết:

- **Lượt hiển thị** của link về website trong AI Overview và AI Mode.
- Chia theo **trang**, **quốc gia**, **thiết bị** và **ngày**.

![Ống nhòm ngắm cảnh hướng ra hồ và núi tuyết, nhãn: Đo lượt hiển thị trong AI bằng Search Console](/media/articles/seo-ai-overview/seo-ai-overview-anh-03.webp "1200x800")
*Báo cáo mới cho biết trang nào được AI dẫn link, nhưng chưa tách riêng được lượt nhấp và câu hỏi.*

Những giới hạn cần biết khi đọc số:

- Báo cáo chỉ có lượt hiển thị. Lượt nhấp từ phần AI vẫn nằm chung trong báo cáo Hiệu suất, loại tìm kiếm "Web", không tách riêng được.
- Trang trợ giúp không liệt kê chiều "truy vấn", nên bạn biết trang nào được trích dẫn nhưng khó biết từ câu hỏi nào.
- Hai link của cùng website trong một câu trả lời chỉ tính là một lượt hiển thị trên biểu đồ.
- Theo [Google](https://developers.google.com/search/docs/appearance/ai-features), mỗi AI Overview chiếm một vị trí trên trang kết quả, mọi link bên trong cùng nhận vị trí đó. Vị trí trung bình đẹp chưa chắc nghĩa là khách thấy tên bạn đầu tiên.

Với ChatGPT và các trợ lý khác, chưa có báo cáo chính thức tương tự. Cách làm thực tế là xem nguồn giới thiệu trong công cụ đo trên website. Định kỳ tự hỏi trợ lý những câu khách hay hỏi để xem họ nói gì về bạn. Cài đặt nguồn truy cập chi tiết xem [trang GA4 và Looker Studio](/ga4-looker-dashboard/).

Cuối cùng, con số quan trọng vẫn là khách liên hệ. Lượt hiển thị trong AI tăng mà cuộc gọi không đổi thì cần xem lại trang đang được trích dẫn có dẫn khách tới bước liên hệ không.
`
    },
    {
      id: 'cau-hoi-thuong-gap',
      heading: '8. Câu hỏi thường gặp về SEO cho AI',
      content: `
### AI Overview có làm website mất lượt nhấp không?

Có thể, tùy loại câu hỏi. Câu hỏi đơn giản như định nghĩa, khách đọc xong câu trả lời là đủ. Câu hỏi cần so sánh, cần báo giá, cần xem mẫu thì khách vẫn nhấp vào. Google không công bố con số chung cho từng ngành. Cách chắc nhất là so lượt hiển thị và lượt nhấp của chính website bạn trong Search Console theo từng nhóm trang.

### Có nên chặn AI đọc website của mình không?

Tùy mục đích. Có nhiều lựa chọn khác nhau. Mục Search generative AI trong Search Console chỉ ảnh hưởng việc xuất hiện trong AI Overview, AI Mode, không ảnh hưởng thứ hạng tìm kiếm thường. Muốn hạn chế dùng nội dung để huấn luyện mô hình thì dùng Google-Extended với Google, GPTBot với OpenAI. Với doanh nghiệp cần khách tìm thấy mình, chặn hết thường thiệt nhiều hơn lợi.

### Bao lâu thì bài viết được AI trích dẫn?

Không ai hứa được mốc thời gian. Trang phải được Google đọc và lưu vào chỉ mục trước. Theo [Google](https://developers.google.com/search/docs/appearance/ai-features), việc đọc lại trang có thể mất từ vài ngày tới vài tháng. Sau đó việc được chọn còn tùy câu hỏi, đối thủ và chất lượng trang.

### Làm sao biết AI đang nói gì về công ty mình?

Tự hỏi Google và các trợ lý AI những câu khách hay hỏi, kèm tên công ty và tên sản phẩm. Ghi lại câu trả lời mỗi tháng, đánh dấu chỗ sai. Thông tin sai thường bắt nguồn từ website cũ chưa sửa, hồ sơ trên các trang khác ghi lệch, hoặc thiếu một trang giải thích rõ ràng. Sửa từ gốc đó.

### Doanh nghiệp nhỏ có cần làm phần này không?

Nếu khách của bạn hay hỏi Google trước khi mua thì có. Phần lớn việc trùng với SEO bạn nên làm sẵn: website đọc được, bài viết trả lời thẳng, thông tin doanh nghiệp đúng và nhất quán. Không cần một gói dịch vụ riêng tốn kém chỉ để "tối ưu cho AI".
`
    }
  ]
};
