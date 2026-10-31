export const ga4LookerDashboardArticle = {
  metaTitle: 'GA4, đo lường chuyển đổi và báo cáo Looker Studio | SOHO',
  metaDesc:
    'Cài sự kiện và sự kiện chính trong GA4, đặt UTM, chế độ đồng ý, gắn thẻ phía máy chủ, Meta CAPI và dựng báo cáo Looker Studio tự cập nhật.',
  readingTime: '11 phút đọc',
  updatedDate: '31/10/2026',
  authorKey: 'dev',
  cover: {
    src: '/media/articles/ga4-looker-dashboard/ga4-looker-dashboard-hero.webp',
    alt: 'Máy tính xách tay mở trang báo cáo có biểu đồ và số liệu, cạnh tiêu đề GA4, đo lường chuyển đổi và báo cáo Looker Studio',
    width: 1600,
    height: 900
  },
  credits: [
    {text: 'Statistics on a laptop (Unsplash), Carlos Muza kmuza, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Statistics_on_a_laptop_(Unsplash).jpg'},
    {text: 'Vintage car dashboard (Unsplash), Benjamin Child bchild311, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Vintage_car_dashboard_(Unsplash).jpg'},
    {text: 'Bellingham Farmers Market 1 (Unsplash), Amelia Bartlett ameliabartlett, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Bellingham_Farmers_Market_1_(Unsplash).jpg'}
  ],
  toc: [
    {id: 'vi-sao-moi-noi-mot-so', title: '1. Vì sao mỗi nơi báo một con số'},
    {id: 'su-kien-va-su-kien-chinh', title: '2. Sự kiện và sự kiện chính trong GA4'},
    {id: 'utm-dat-ten-thong-nhat', title: '3. UTM: gắn nhãn cho mọi đường link'},
    {id: 'che-do-dong-y', title: '4. Chế độ đồng ý (consent mode)'},
    {id: 'cookie-may-chu-capi', title: '5. Cookie, gắn thẻ phía máy chủ và Meta CAPI'},
    {id: 'bao-cao-looker-studio', title: '6. Báo cáo Looker Studio tự cập nhật'},
    {id: 'cau-hoi-thuong-gap', title: '7. Câu hỏi thường gặp'}
  ],
  sections: [
    {
      id: 'vi-sao-moi-noi-mot-so',
      heading: '1. Vì sao mỗi nơi báo một con số',
      content: `
Cuối tháng, chủ doanh nghiệp mở ba nơi. Tài khoản quảng cáo Facebook báo 80 đơn. Google Ads báo 60 đơn. Sổ bán hàng chỉ có 100 đơn cho cả tháng, gồm cả khách quen. Cộng hai kênh quảng cáo đã vượt tổng đơn thật. (Số trong ví dụ là giả định.)

![Bảng đồng hồ xe hơi cũ với đồng hồ tốc độ, nhiệt độ, dầu và xăng, mỗi chiếc chỉ một con số](/media/articles/ga4-looker-dashboard/ga4-looker-dashboard-anh-01.webp "1200x800")
*Mỗi nền tảng là một đồng hồ riêng, đo theo cách riêng, nên số không khớp nhau.*

Chuyện này rất hay gặp. Thường không phải do ai làm sai. Có ba lý do chính:

- **Mỗi nền tảng tự nhận công.** Khách thấy quảng cáo Facebook, hôm sau tìm trên Google rồi mua. Cả hai bên đều tính đơn đó là của mình.
- **Mỗi nơi đếm theo cách riêng.** Thời gian tính công khác nhau, cách tính một lượt chuyển đổi khác nhau, múi giờ cũng có thể khác.
- **Một phần dữ liệu bị mất trên đường đi.** Trình duyệt chặn, khách từ chối cookie, mã theo dõi cài thiếu, khách gọi điện thay vì đặt trên web.

Không có công cụ nào cho con số khớp hoàn toàn. Mục tiêu thực tế là: mỗi hành động quan trọng được đo một cách thống nhất, biết rõ phần nào đo được, phần nào không. Mọi người cùng nhìn một bộ số.

Bài này nói về cách cài đặt đo và dựng báo cáo. Cách chạy quảng cáo xem ở [trang quảng cáo Google](/google-ads-shopping/) và trang [quảng cáo Facebook](/facebook-ads/), [quảng cáo TikTok](/tiktok-ads/).
`
    },
    {
      id: 'su-kien-va-su-kien-chinh',
      heading: '2. Sự kiện và sự kiện chính trong GA4',
      content: `
GA4 (Google Analytics 4) ghi lại mọi thứ dưới dạng **sự kiện**: một lượt xem trang, một lần cuộn, một lần gửi form đều là sự kiện. Trong số đó, những hành động có giá trị với doanh nghiệp được đánh dấu là **sự kiện chính** (key event). Đây là tên mới của thứ trước đây GA4 gọi là "lượt chuyển đổi".

### Bốn loại sự kiện

Theo [Analytics Help](https://support.google.com/analytics/answer/9322688), GA4 có bốn loại:

- **Tự động thu thập**: có ngay khi cài GA4, ví dụ bắt đầu phiên, xem trang.
- **Đo lường nâng cao**: bật trong cài đặt, gồm cuộn trang, nhấp ra ngoài, tải file, xem video YouTube, tương tác với form ([danh sách đầy đủ](https://support.google.com/analytics/answer/9216061)).
- **Đề xuất**: bạn tự cài nhưng dùng tên Google đặt sẵn, ví dụ generate_lead cho khách để lại thông tin, purchase cho đơn hàng.
- **Tùy chỉnh**: tự đặt tên, chỉ dùng khi không loại nào ở trên phù hợp.

Đo lường nâng cao tiện nhưng không nên tin hoàn toàn. Form trong cửa sổ bật lên, form gửi bằng công cụ bên ngoài hay nút chuyển sang Zalo thường cần cài riêng và thử lại bằng tay.

### Chọn sự kiện chính

Theo [Analytics Help](https://support.google.com/analytics/answer/13128484), tài khoản GA4 thường có tối đa 30 sự kiện chính. Doanh nghiệp vừa và nhỏ hiếm khi cần quá năm. Hay dùng nhất:

- Gửi form liên hệ hoặc form báo giá.
- Bấm nút gọi điện, bấm nút Zalo, Messenger.
- Đặt hàng thành công (kèm giá trị đơn).
- Đặt lịch hẹn.

Bấm nút gọi chưa chắc là đã gọi. Khách có thể bấm rồi tắt. Nên gọi đúng tên là "bấm gọi". Nếu cần biết số cuộc gọi thật thì đối chiếu với tổng đài hoặc sổ của nhân viên.

Sự kiện chính có thể dùng để tạo lượt chuyển đổi trong Google Ads, giúp chiến lược giá thầu học từ hành động thật. Analytics Help cũng lưu ý lượt chuyển đổi của Google Ads không hiện trong báo cáo GA4 tiêu chuẩn, nên hai nơi vẫn có thể lệch nhau.

![Năm bước lập kế hoạch đo lường: kiểm tra hiện trạng, chọn hành động, đặt tên, cài đặt, soát số](/media/articles/ga4-looker-dashboard/soho-ga4-looker-dashboard-steps-01.webp "1360x850")
*Kế hoạch đo lường đi trước việc cài mã theo dõi.*

### Viết kế hoạch đo lường trước khi cài

Một bảng tính đơn giản là đủ. Mỗi dòng là một hành động: tên sự kiện, xảy ra ở trang nào, cách nhận biết (nút nào, form nào), có phải sự kiện chính không, giá trị là bao nhiêu. Thiếu bảng này, sau vài lần đổi người làm, tài khoản sẽ có những sự kiện trùng nhau như form_lienhe, contact_form, gui_form mà không ai biết cái nào đúng.
`
    },
    {
      id: 'utm-dat-ten-thong-nhat',
      heading: '3. UTM: gắn nhãn cho mọi đường link',
      content: `
UTM là đoạn gắn vào cuối đường link để GA4 biết khách đến từ đâu. Theo [Analytics Help](https://support.google.com/analytics/answer/10917952), nên luôn có ba tham số:

| Tham số | Nghĩa | Ví dụ |
|---|---|---|
| utm_source | Nguồn cụ thể | facebook, zalo, newsletter |
| utm_medium | Loại kênh | cpc, email, social |
| utm_campaign | Tên chiến dịch | tet-2027, khai-truong-q7 |

Google Ads có tính năng tự gắn thẻ khi liên kết với GA4, nên link quảng cáo Google thường không cần UTM thủ công. Các kênh khác như Facebook, Zalo, email, bài PR, mã QR trên tờ rơi thì cần.

![Những hũ mật ong dán nhãn giống nhau, ghi rõ loại và dung tích](/media/articles/ga4-looker-dashboard/ga4-looker-dashboard-anh-02.webp "1200x800")
*UTM giống nhãn dán trên hàng: đặt tên thống nhất thì báo cáo mới gom đúng nguồn.*

### Ba lỗi hay gặp

- **Viết hoa lẫn viết thường.** Analytics Help nói rõ giá trị UTM phân biệt hoa thường: "Facebook" và "facebook" bị tính là hai nguồn. Quy ước chung là viết thường hết.
- **Mỗi người đặt một kiểu.** Người này ghi "fb", người kia ghi "facebook". Báo cáo bị chia vụn. Nên có một bảng quy ước đặt tên dùng chung.
- **Gắn UTM vào link nội bộ.** Link từ trang này sang trang khác trên chính website không cần UTM. Gắn vào sẽ làm mất nguồn gốc thật của phiên truy cập.

Với kênh không có link như cuộc gọi từ biển hiệu hay khách giới thiệu, UTM không giúp được. Phần đó phải hỏi trực tiếp khi khách liên hệ.
`
    },
    {
      id: 'che-do-dong-y',
      heading: '4. Chế độ đồng ý (consent mode)',
      content: `
Chế độ đồng ý là cách để mã theo dõi của Google hoạt động theo lựa chọn của khách trên hộp thông báo cookie. Theo [tài liệu của Google](https://developers.google.com/tag-platform/security/concepts/consent-mode), có hai mức:

- **Cơ bản**: mã Google không chạy cho tới khi khách bấm chọn trên hộp thông báo. Khách từ chối thì không có dữ liệu nào gửi đi.
- **Nâng cao**: mã chạy ngay, mặc định ở trạng thái chưa đồng ý. Khi khách từ chối, mã không ghi cookie nhưng vẫn gửi tín hiệu không chứa cookie, để Google ước tính phần lượt chuyển đổi bị thiếu.

Chế độ đồng ý có bốn loại quyền: lưu trữ cho quảng cáo, lưu trữ cho phân tích, gửi dữ liệu người dùng cho quảng cáo và cá nhân hóa quảng cáo. Mỗi loại bật tắt riêng.

### Doanh nghiệp ở Việt Nam có cần không?

Với người dùng ở châu Âu, Anh và Thụy Sĩ, [chính sách của Google](https://www.google.com/about/company/user-consent-policy/) yêu cầu website xin sự đồng ý hợp lệ trước khi dùng cookie và dữ liệu cá nhân cho quảng cáo. Ở Việt Nam, [Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15](https://hatinh.gov.vn/vi/bai-viet/luat-bao-ve-du-lieu-ca-nhan-chinh-thuc-co-hieu-luc-thi-hanh-tu-ngay-112026) có hiệu lực từ 01/01/2026. Website có cần hộp thông báo cookie hay không và viết thế nào là câu hỏi pháp lý, nên hỏi luật sư.

Về kỹ thuật, nếu website đã có hộp thông báo thì nên nối nó với chế độ đồng ý. Như vậy mã theo dõi tôn trọng lựa chọn của khách. Báo cáo cũng biết phần nào thiếu vì khách từ chối.
`
    },
    {
      id: 'cookie-may-chu-capi',
      heading: '5. Cookie, gắn thẻ phía máy chủ và Meta CAPI',
      content: `
### Tình trạng cookie bên thứ ba hiện nay

Nhiều bài viết cũ nói "Chrome đã bỏ cookie bên thứ ba". Điều đó không đúng. Ngày 17/10/2025, Google [thông báo](https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies) Chrome giữ cách làm hiện tại: người dùng tự chọn có cho phép cookie bên thứ ba hay không. Google cũng ngừng phần lớn công nghệ Privacy Sandbox do ít được dùng, như Topics và Protected Audience.

Safari thì khác. Theo [WebKit](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/), từ tháng 3/2020 Safari chặn cookie bên thứ ba theo mặc định. Safari cũng giới hạn 7 ngày với cookie do mã chạy trên trình duyệt tạo ra. Thêm trình chặn quảng cáo và việc khách từ chối cookie, một phần dữ liệu đo trên trình duyệt vẫn bị mất.

### Gắn thẻ phía máy chủ là gì

Bình thường, mã theo dõi chạy trong trình duyệt của khách và gửi dữ liệu thẳng tới Google, Meta. Với **gắn thẻ phía máy chủ** (server-side tagging), dữ liệu đi qua một máy chủ của doanh nghiệp trước. Theo [tài liệu Google Tag Manager](https://developers.google.com/tag-platform/tag-manager/server-side/intro), cách này cho bạn kiểm soát dữ liệu nào được gửi đi, gửi cho ai.

![So sánh gắn thẻ trên trình duyệt và gắn thẻ phía máy chủ theo chi phí, độ phức tạp, quyền kiểm soát dữ liệu](/media/articles/ga4-looker-dashboard/soho-ga4-looker-dashboard-compare-01.webp "1360x850")
*Gắn thẻ phía máy chủ kiểm soát dữ liệu tốt hơn nhưng có chi phí máy chủ và cần người bảo trì.*

Cách này **có phí duy trì**. Cần một máy chủ chạy liên tục. [Hướng dẫn cài trên Cloud Run](https://developers.google.com/tag-platform/tag-manager/server-side/cloud-run-setup-guide) ước tính khoảng 45 USD mỗi tháng cho một máy chủ và khuyên chạy tối thiểu 2 máy chủ để giảm rủi ro mất dữ liệu. Chi phí thật tùy lưu lượng truy cập. Ngoài ra cần người theo dõi khi có lỗi hay khi nền tảng đổi cách nhận dữ liệu.

### Meta Conversions API (CAPI)

CAPI là cách gửi sự kiện từ máy chủ của bạn sang Meta, song song với Pixel trên trình duyệt. [Meta khuyên](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events) dùng CAPI cùng với Pixel để quảng cáo chạy tốt hơn. Khi một sự kiện được gửi từ cả hai đường, Meta dùng mã sự kiện (event_id) và tên sự kiện để bỏ bản trùng, nếu hai bản đến trong vòng 48 giờ. Cài thiếu mã sự kiện thì một đơn có thể bị đếm hai lần.

### Khi nào nên làm

Gắn thẻ phía máy chủ và CAPI hợp với doanh nghiệp chi quảng cáo đều đặn, có đơn hàng hoặc khách hàng tiềm năng đo được trên web. Nếu website còn chưa đo đúng form và nút gọi, hãy làm phần cơ bản ở mục 2 trước. Máy chủ không sửa được một kế hoạch đo lường sai.
`
    },
    {
      id: 'bao-cao-looker-studio',
      heading: '6. Báo cáo Looker Studio tự cập nhật',
      content: `
Looker Studio là công cụ làm báo cáo miễn phí của Google. Nó lấy số trực tiếp từ GA4, Google Ads, Search Console, Google Sheets và nhiều nguồn khác, nên không phải chép tay mỗi tuần. Dữ liệu Facebook Ads cần một connector của bên thứ ba hoặc đi qua Google Sheets.

### Một báo cáo nên trả lời câu hỏi, không chỉ có biểu đồ

SOHO dựng báo cáo Looker Studio cho khách bán hàng online, nối số từ Google Ads, Facebook Ads, GA4 và Search Console. Mỗi trang báo cáo trả lời một câu hỏi cụ thể:

- Tuần này bao nhiêu đơn, khách mới hay khách cũ đặt lại?
- Hôm qua chi bao nhiêu tiền quảng cáo, ra mấy đơn?
- Khách đến từ đâu, rời đi ở bước nào?
- Google mang về bao nhiêu lượt truy cập, vào trang nào?

Chủ doanh nghiệp thường chỉ cần trang đầu. Người chạy quảng cáo cần trang thứ hai, chia theo từng chiến dịch. Làm riêng theo người xem giúp báo cáo được mở thật sự.

### Độ trễ dữ liệu: vì sao số hôm nay chưa đủ

Báo cáo tự cập nhật không có nghĩa là cập nhật từng phút. Có hai lớp trễ:

- **GA4 xử lý dữ liệu.** Theo [Analytics Help](https://support.google.com/analytics/answer/11198161), số trong ngày của tài khoản tiêu chuẩn thường có sau 2–6 giờ, số theo ngày sau khoảng 12 giờ. Việc xử lý có thể mất 24–48 giờ, trong thời gian đó số còn thay đổi.
- **Looker Studio làm mới dữ liệu.** Theo [tài liệu Looker Studio](https://docs.cloud.google.com/looker/docs/studio/manage-data-freshness), nguồn GA4 mặc định làm mới 12 giờ một lần. Google Ads và Search Console làm mới 12 giờ một lần và không đổi được. Google Sheets mặc định 15 phút.

Vì vậy, đừng chốt số của ngày hôm qua vào sáng sớm hôm nay. Nên chốt số tuần vào giữa tuần sau, khi dữ liệu đã ổn định.

### Đối chiếu với sổ bán hàng

GA4 cho biết khách đến từ đâu. Sổ bán hàng cho biết đơn nào thật sự thu được tiền. Mỗi tháng nên đặt hai bộ số cạnh nhau. Chênh lệch nhỏ là bình thường. Chênh lệch lớn hoặc đột ngột thường là dấu hiệu mã theo dõi hỏng sau một lần sửa website.

Có số đúng rồi, bước tiếp theo là sửa chỗ khách rời đi trên website, xem [trang tối ưu chuyển đổi](/cro-landing-page/).
`
    },
    {
      id: 'cau-hoi-thuong-gap',
      heading: '7. Câu hỏi thường gặp',
      content: `
### Website nhỏ có cần cài Google Tag Manager không?

Không bắt buộc, nhưng nên có. Google Tag Manager là nơi quản lý mọi mã theo dõi ở một chỗ. Muốn thêm sự kiện mới hay mã của Meta thì sửa trong đó, không phải nhờ lập trình viên sửa code website mỗi lần.

### Vì sao GA4 báo ít đơn hơn sổ bán hàng?

Thường vì khách đặt qua điện thoại, Zalo, cửa hàng; khách chặn mã theo dõi hoặc từ chối cookie; hoặc sự kiện đặt hàng cài chưa đúng. GA4 nên dùng để so sánh các kênh với nhau, còn tổng doanh thu lấy theo sổ bán hàng.

### Có cần gắn thẻ phía máy chủ ngay từ đầu không?

Thường là chưa. Nên đo đúng các hành động chính trên trình duyệt trước. Khi chi quảng cáo đã đều và lớn hơn, khoản chi máy chủ hằng tháng mới đáng so với phần dữ liệu lấy lại được.

### Looker Studio có mất phí không?

Bản Looker Studio thường dùng miễn phí. Chi phí phát sinh nếu cần connector của bên thứ ba, ví dụ để lấy số Facebook Ads tự động, hoặc nếu dùng bản Looker Studio Pro.

### Bao lâu nên kiểm tra lại cài đặt đo lường?

Mỗi lần sửa website, đổi form hay đổi nút liên hệ đều nên thử lại các sự kiện chính. Ngoài ra, mỗi quý rà một lần: sự kiện nào không còn dùng, UTM nào đặt sai, báo cáo nào không ai mở.
`
    }
  ]
};
