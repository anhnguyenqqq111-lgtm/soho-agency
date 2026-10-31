export const googleAdsShoppingArticle = {
  metaTitle: 'Quảng cáo Google Ads và Google Shopping | SOHO',
  metaDesc:
    'Khi nào chạy Search, Shopping hay Performance Max, cách chia tài khoản, lọc từ khóa phủ định, chọn giá thầu và đọc báo cáo theo lãi thật.',
  readingTime: '11 phút đọc',
  updatedDate: '31/10/2026',
  authorKey: 'mkt',
  cover: {
    src: '/media/articles/google-ads-shopping/google-ads-shopping-hero.webp',
    alt: 'Giỏ hàng siêu thị xếp thành hàng, ảnh đầu bài quảng cáo Google Ads và Google Shopping',
    width: 1600,
    height: 900
  },
  credits: [
    {text: 'Alexandru Tugui 2017 (Unsplash), Alexandru Tugui alexandru_tugui, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Alexandru_Tugui_2017_(Unsplash).jpg'},
    {text: 'Vinyl collection at a record store (Unsplash), Mr Cup / Fabien Barral iammrcup, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Vinyl_collection_at_a_record_store_(Unsplash).jpg'},
    {text: 'Keyboard (Unsplash), Anas Alshanti otenteko, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Keyboard_(Unsplash).jpg'},
    {text: 'Prayer Flags (Unsplash), Igor Ovsyannykov igorovsyannykov, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Prayer_Flags_(Unsplash).jpg'}
  ],
  toc: [
    {id: 'google-ads-hop-voi-ai', title: '1. Google Ads hợp với ai, khi nào chưa nên chạy'},
    {id: 'search-shopping-performance-max', title: '2. Search, Shopping và Performance Max khác nhau thế nào'},
    {id: 'cau-truc-tai-khoan', title: '3. Chia tài khoản theo mức độ sẵn sàng mua'},
    {id: 'tu-khoa-va-tu-khoa-phu-dinh', title: '4. Từ khóa và từ khóa phủ định'},
    {id: 'chien-luoc-gia-thau', title: '5. Chọn chiến lược giá thầu'},
    {id: 'ngan-sach-thu-nghiem', title: '6. Ngân sách cho giai đoạn chạy thử'},
    {id: 'doc-bao-cao-theo-lai', title: '7. Đọc báo cáo theo doanh thu và lãi'},
    {id: 'cau-hoi-thuong-gap-google-ads', title: '8. Câu hỏi thường gặp về Google Ads'}
  ],
  sections: [
    {
      id: 'google-ads-hop-voi-ai',
      heading: '1. Google Ads hợp với ai, khi nào chưa nên chạy',
      content: `
Người thấy quảng cáo Google đang chủ động tìm thứ bạn bán. Họ gõ "máy lọc nước văn phòng" hay "in hộp giấy số lượng ít" vì đang cần. Quảng cáo chỉ cần có mặt đúng lúc đó và dẫn họ tới trang trả lời đúng câu hỏi.

Google Ads hợp với:

- Shop online có sản phẩm khách hay tìm theo tên hoặc theo loại.
- Doanh nghiệp B2B, nơi một hợp đồng đủ lớn để trả cho nhiều lượt nhấp.
- Dịch vụ giá cao mà khách tìm hiểu kỹ trước khi gọi.

Nên dừng lại trước khi bỏ tiền nếu:

1. **Chưa đo được đơn hàng hay cuộc gọi.** Khi đó Google chỉ còn tối ưu theo lượt nhấp. Cách cài đo xem ở [trang Đo lường GA4 và Looker Studio](/ga4-looker-dashboard/).
2. **Trang đích chưa sẵn sàng.** Khách nhấp vào mà không biết bấm đâu thì tiền trôi đi. Xem [trang Tối ưu chuyển đổi](/cro-landing-page/).
3. **Biên lợi nhuận quá mỏng.** Tính ROAS hòa vốn ở mục 7 trước khi chạy.

Sản phẩm mới hoàn toàn, chưa ai tìm, thường hợp với quảng cáo tạo nhu cầu hơn. Xem trang [quảng cáo Facebook](/facebook-ads/) và [quảng cáo TikTok](/tiktok-ads/).
`
    },
    {
      id: 'search-shopping-performance-max',
      heading: '2. Search, Shopping và Performance Max khác nhau thế nào',
      content: `
Ba loại chiến dịch này lấy tín hiệu khác nhau.

![Kệ đĩa than xếp từng ngăn có nhãn, gợi cách Shopping đọc dữ liệu của từng mã hàng](/media/articles/google-ads-shopping/google-ads-shopping-anh-01.webp "1200x800")
*Shopping không dùng từ khóa: Google đọc tên, giá, ảnh của từng mã hàng trong Merchant Center.*

| Loại chiến dịch | Dựa vào gì để hiển thị | Hợp khi |
|---|---|---|
| Search (tìm kiếm) | Từ khóa bạn chọn | Dịch vụ, B2B, cần kiểm soát từng cụm từ |
| Shopping (mua sắm) | Dữ liệu sản phẩm trong Merchant Center | Shop nhiều mã hàng, giá rõ |
| Performance Max | Mục tiêu chuyển đổi, nội dung và dữ liệu bạn đưa vào | Đã có dữ liệu chuyển đổi tốt, muốn mở rộng |

**Search:** bạn chọn từ khóa, viết quảng cáo chữ, trả tiền khi có lượt nhấp. Mỗi quảng cáo cho nhập tối đa 15 tiêu đề và 4 dòng mô tả, Google tự ghép thành nhiều tổ hợp ([Google Ads Help](https://support.google.com/google-ads/answer/7684791?hl=en)).

**Shopping:** không dùng từ khóa. Theo [Google Ads Help](https://support.google.com/google-ads/answer/2454022?hl=en), quảng cáo mua sắm dùng dữ liệu sản phẩm trong Merchant Center để quyết định hiển thị ở đâu. Quảng cáo có ảnh, tên, giá, nên người nhấp đã biết giá trước. Cùng nguồn dữ liệu đó, sản phẩm còn có thể [hiển thị miễn phí](https://support.google.com/merchants/answer/9199328?hl=en) trên Google Tìm kiếm, Maps, YouTube và Google Hình ảnh, dù Google không bảo đảm sẽ hiện.

**Performance Max:** theo [Google Ads Help](https://support.google.com/google-ads/answer/10724817?hl=en), một chiến dịch có thể xuất hiện trên YouTube, mạng hiển thị, tìm kiếm, Discover, Gmail và Maps. Bạn đưa vào mục tiêu, chữ, ảnh, video, nguồn sản phẩm. Google tự chọn nơi hiển thị.

Chạy chung một tài khoản được, nhưng cần biết luật ưu tiên:

- Cụm từ khách tìm khớp chính xác một từ khóa trong chiến dịch Search thì Search được ưu tiên hơn Performance Max ([Google Ads Help](https://support.google.com/google-ads/answer/10724817?hl=en)).
- Performance Max và Shopping cùng nhắm một sản phẩm thì chiến dịch có Thứ hạng quảng cáo cao hơn sẽ hiển thị, Google không còn tự ưu tiên Performance Max ([Google Ads Help](https://support.google.com/google-ads/answer/13975266?hl=en-GB)).

SOHO thường bắt đầu bằng Search và Shopping. Performance Max vào sau, khi đã có đủ đơn hàng thật để Google học theo.
`
    },
    {
      id: 'cau-truc-tai-khoan',
      heading: '3. Chia tài khoản theo mức độ sẵn sàng mua',
      content: `
Một chiến dịch ôm hết thì ngân sách tự chảy về chỗ rẻ nhất. Hàng chục chiến dịch nhỏ thì Google không đủ dữ liệu để học. Cách chia dễ quản lý hơn dựa vào hai câu hỏi: khách sẵn sàng mua tới đâu và nhóm hàng đó lãi bao nhiêu.

![Năm bước dựng tài khoản Google Ads theo mức độ sẵn sàng mua và biên lợi nhuận](/media/articles/google-ads-shopping/soho-google-ads-shopping-steps-01.webp "1360x850")
*Thứ tự dựng tài khoản: đo trước, chia nhóm, rồi mới chọn giá thầu.*

**Tách từ khóa thương hiệu.** Người gõ tên cửa hàng bạn phần lớn đã định mua, chi phí mỗi đơn rất thấp. Gộp chung thì báo cáo đẹp nhưng không biết quảng cáo có mang về khách mới không. Với Performance Max, dùng loại trừ thương hiệu ở cấp chiến dịch ([Google Ads Help](https://support.google.com/google-ads/answer/10724817?hl=en)).

**Tách theo ý định tìm kiếm.** Nhóm sắp mua có chữ "giá", "mua", "báo giá", "gần đây" hay tên mã hàng. Nhóm so sánh có "loại nào tốt", "review". Nhóm sắp mua nhận phần lớn ngân sách. Câu hỏi kiểu "là gì", "cách chọn" thường hợp với bài viết SEO hơn.

**Tách nhóm hàng theo lãi.** Hai sản phẩm cùng giá bán có thể lãi rất khác nhau. Gom hàng có biên lợi nhuận gần nhau vào một chiến dịch để mỗi nhóm có mục tiêu riêng.

**Làm sạch nguồn sản phẩm cho Shopping.** Theo [quy cách dữ liệu sản phẩm của Merchant Center](https://support.google.com/merchants/answer/7052112?hl=en):

- Tên sản phẩm mô tả đúng, khớp tên trên trang sản phẩm. Không chèn chữ khuyến mãi như "miễn phí vận chuyển", không viết hoa toàn bộ.
- Sản phẩm có biến thể ghi rõ màu, kích cỡ trong tên. Có mã GTIN (mã vạch) thì nên khai.
- Từ 31/01/2027, ảnh sản phẩm chính phải tối thiểu 500 x 500 điểm ảnh.

Tên nên dùng chữ khách thật sự gõ: "Áo thun cotton nam màu đen size L", không phải "Mẫu AT-2026".
`
    },
    {
      id: 'tu-khoa-va-tu-khoa-phu-dinh',
      heading: '4. Từ khóa và từ khóa phủ định',
      content: `
Chọn từ khóa là chọn người sẽ thấy quảng cáo. Từ khóa phủ định là cách chặn những người không bao giờ mua.

![Bàn phím phát sáng trong phòng tối, gợi những cụm từ khách gõ khi tìm trên Google](/media/articles/google-ads-shopping/google-ads-shopping-anh-02.webp "1200x800")
*Mỗi cụm từ khách gõ là một tín hiệu: từ khóa đón người cần, từ phủ định chặn người không mua.*

### Bắt đầu từ lời khách

Hỏi nhân viên bán hàng: khách hay hỏi gì đầu tiên, gọi sản phẩm bằng tên gì. Sau đó mới dùng công cụ lập kế hoạch từ khóa để mở rộng.

### Từ khóa phủ định

Đây là cụm từ bạn khai báo để quảng cáo không hiện khi khách tìm. Một xưởng in bao bì không muốn trả tiền cho người tìm "việc làm in bao bì" hay "cách tự in hộp giấy". Theo [Google Ads Help](https://support.google.com/google-ads/answer/2453972?hl=en), có ba kiểu khớp:

- **Khớp rộng (mặc định):** chặn khi cụm tìm kiếm chứa đủ mọi chữ của từ phủ định, theo thứ tự bất kỳ.
- **Khớp cụm từ:** chặn khi các chữ đứng liền nhau, đúng thứ tự.
- **Khớp chính xác:** chỉ chặn khi cụm tìm kiếm đúng y từ phủ định.

Điều hay bị bỏ sót: từ khóa phủ định không tự khớp biến thể gần. Google ghi rõ phải tự thêm từ đồng nghĩa, số ít, số nhiều. Với tiếng Việt, an toàn nhất là thêm cả bản có dấu và không dấu. Google cũng lưu ý dùng quá nhiều từ phủ định có thể làm quảng cáo tới được ít khách hơn.

### Rà báo cáo cụm từ tìm kiếm mỗi tuần

Báo cáo này cho biết khách đã gõ gì trước khi quảng cáo hiện, là nơi tìm từ phủ định và từ khóa mới. Performance Max cũng có [báo cáo cụm từ tìm kiếm](https://support.google.com/google-ads/answer/16327396?hl=en) riêng. Từ phủ định thêm vào Performance Max chỉ tác động lên Tìm kiếm và Mua sắm ([Google Ads Help](https://support.google.com/google-ads/answer/15726455?hl=en)).

Nếu bật [AI Max](https://support.google.com/google-ads/answer/15910366?hl=en) cho chiến dịch Search, Google sẽ mở rộng cụm từ khớp và tự chỉnh tiêu đề, trang đích. Quảng cáo có thể hiện với cụm từ bạn chưa từng chọn, nên càng phải rà báo cáo đều tay.
`
    },
    {
      id: 'chien-luoc-gia-thau',
      heading: '5. Chọn chiến lược giá thầu',
      content: `
Nhiều tài khoản cũ vẫn ghi "CPC nâng cao" (Enhanced CPC). Theo [Google Ads Help](https://support.google.com/google-ads/answer/2979071?hl=en), từ tuần 31/03/2025 chiến lược này không còn dùng được cho chiến dịch Search và hiển thị. Chiến dịch chưa chuyển thì đang chạy như CPC thủ công.

Các chiến lược đặt giá thầu thông minh hiện có ([Google Ads Help](https://support.google.com/google-ads/answer/2979071?hl=en)):

| Chiến lược | Google cố gắng làm gì | Khi nào dùng |
|---|---|---|
| Tối đa hóa lượt chuyển đổi | Nhiều chuyển đổi nhất trong ngân sách | Mới bắt đầu, các chuyển đổi giá trị gần nhau |
| CPA mục tiêu | Chuyển đổi ở mức chi phí bạn đặt | Đã biết trả tối đa bao nhiêu cho một khách |
| Tối đa hóa giá trị chuyển đổi | Tổng giá trị đơn cao nhất | Shop có giá trị đơn chênh nhau |
| ROAS mục tiêu | Doanh thu trên chi phí theo tỉ lệ bạn đặt | Đã có lịch sử doanh thu ổn định |

ROAS là doanh thu quảng cáo mang về chia cho tiền quảng cáo. CPA là chi phí cho mỗi chuyển đổi.

**Cho hệ thống thời gian học.** Sau khi đổi chiến lược hay mục tiêu, trạng thái có thể hiện "Đang học". Google cho biết trạng thái này không quá 7 ngày, hiệu quả thường ổn định sau 1 đến 2 chu kỳ chuyển đổi ([Google Ads Help](https://support.google.com/google-ads/answer/13020501?hl=en)). Chu kỳ chuyển đổi là thời gian từ lúc nhấp tới lúc mua, có thể vài giờ hoặc vài tuần. Đừng đổi mục tiêu liên tục trong khoảng đó.

**Giá thầu chỉ tốt bằng dữ liệu đưa vào.** Nếu chuyển đổi chính là "xem trang liên hệ", Google sẽ tìm thêm người xem trang liên hệ, không phải người mua. Hãy chọn chuyển đổi gần tiền nhất: đơn hàng có giá trị, cuộc gọi đủ dài, form đã được xác nhận là khách thật. Việc gửi đơn đã chốt ngược về Google Ads thuộc [trang Đo lường GA4 và Looker Studio](/ga4-looker-dashboard/).
`
    },
    {
      id: 'ngan-sach-thu-nghiem',
      heading: '6. Ngân sách cho giai đoạn chạy thử',
      content: `
Không có con số ngân sách chung cho mọi ngành, nhưng có cách tự tính.

![Xấp tiền giấy nhàu trong hộp tối, minh họa ngân sách cho giai đoạn chạy thử quảng cáo](/media/articles/google-ads-shopping/google-ads-shopping-anh-03.webp "1200x800")
*Ngân sách thử nên tính ngược từ số khách liên hệ cần có, không chọn theo cảm giác.*

**Hiểu cách Google tiêu ngân sách ngày.** Theo [Google Ads Help](https://support.google.com/google-ads/answer/2375423?hl=en), có ngày chiến dịch tiêu tới gấp đôi ngân sách trung bình, nhưng cả tháng không vượt 30,4 lần ngân sách ngày. Đặt 500.000 đồng mỗi ngày thì tháng đó tốn tối đa khoảng 15,2 triệu đồng. Một ngày tiêu 900.000 đồng không phải lỗi.

**Tính ngân sách thử từ số chuyển đổi cần có.** Giai đoạn thử cần đủ chuyển đổi để biết từ khóa, nhóm hàng nào ra khách:

1. Ước giá mỗi lượt nhấp của nhóm từ khóa chính.
2. Ước tỉ lệ chuyển đổi của trang đích từ số liệu website.
3. Chọn số chuyển đổi muốn có, đủ để thấy xu hướng.
4. Ngân sách thử = số chuyển đổi ÷ tỉ lệ chuyển đổi × giá mỗi lượt nhấp.

Ví dụ minh họa: lượt nhấp khoảng 8.000 đồng, trang đích chuyển đổi 3%, muốn 30 khách liên hệ. Cần khoảng 1.000 lượt nhấp, tức khoảng 8 triệu đồng. Vượt khả năng chi thì thu hẹp: ít từ khóa hơn, một khu vực, một nhóm hàng. Đừng rải mỏng ra nhiều chiến dịch.

**Mỗi lần chỉ đổi một thứ lớn:** giá thầu, mẫu quảng cáo hoặc trang đích. Đổi cả ba cùng tuần thì không biết cái nào tạo ra kết quả.
`
    },
    {
      id: 'doc-bao-cao-theo-lai',
      heading: '7. Đọc báo cáo theo doanh thu và lãi',
      content: `
Lượt nhấp và số chuyển đổi cần cho người chạy quảng cáo. Chủ doanh nghiệp cần biết thêm: tiền bỏ ra có lời không.

![So sánh đọc báo cáo Google Ads theo lượt nhấp và theo đơn hàng có lãi](/media/articles/google-ads-shopping/soho-google-ads-shopping-compare-01.webp "1360x850")
*Cùng một tài khoản, đọc theo lãi cho ra quyết định khác hẳn đọc theo lượt nhấp.*

### Tính ROAS hòa vốn trước

ROAS 3 tốt hay không tùy biên lợi nhuận. Công thức: ROAS hòa vốn = 1 ÷ biên lợi nhuận gộp.

- Biên lợi nhuận gộp 50%: hòa vốn ở ROAS 2. Đạt 3 là có lời.
- Biên lợi nhuận gộp 25%: hòa vốn ở ROAS 4. Đạt 3 là lỗ trên từng đơn.

Biên lợi nhuận gộp tính sau giá vốn, phí vận chuyển, phí thanh toán. Mỗi nhóm hàng có ROAS hòa vốn riêng.

### Bốn câu hỏi mỗi tháng

1. **Nhóm hàng hay nhóm từ khóa nào lãi sau giá vốn?** Không chỉ nhìn ROAS chung cả tài khoản.
2. **Bao nhiêu doanh thu đến từ từ khóa thương hiệu?** Phần còn lại mới cho thấy quảng cáo mang về khách mới.
3. **Khách hàng tiềm năng có thành khách thật không?** Với B2B, đối chiếu danh sách form với sổ bán hàng.
4. **Tiền đang bị giới hạn ở đâu?** Chiến dịch có lãi mà thiếu ngân sách thì nên nhận thêm.

Báo cáo tốt gói trong một trang: chi phí, số đơn, chi phí mỗi đơn, doanh thu, ROAS, lãi sau giá vốn theo nhóm hàng, kèm ghi chú tháng này đã đổi gì. Báo cáo tự cập nhật bằng Looker Studio là việc của [trang Đo lường GA4 và Looker Studio](/ga4-looker-dashboard/).
`
    },
    {
      id: 'cau-hoi-thuong-gap-google-ads',
      heading: '8. Câu hỏi thường gặp về Google Ads',
      content: `
### Shop nhỏ vài chục sản phẩm có nên chạy Google Shopping không?

Có thể, nếu sản phẩm có người tìm và giá cạnh tranh. Việc đầu tiên là đưa sản phẩm lên Merchant Center với tên, ảnh, giá đúng. Công sức này không phí, vì sản phẩm còn có cơ hội hiện miễn phí trên Google.

### Có nên để Performance Max tự chạy hết không?

Không nên giao toàn bộ ngay từ đầu. Performance Max học từ dữ liệu chuyển đổi, nên chạy tốt khi đã có đơn hàng thật được đo đúng. Giữ Search cho từ khóa quan trọng, thêm từ phủ định và loại trừ thương hiệu, đọc báo cáo cụm từ tìm kiếm hằng tuần.

### Bao lâu thì biết quảng cáo Google có hiệu quả?

Tùy chu kỳ mua của ngành. Hàng giá thấp có thể thấy xu hướng sau vài tuần, dịch vụ B2B cần qua một hai chu kỳ chốt hợp đồng. SOHO không hứa doanh thu hay thời gian khi chưa xem tài khoản và cách đo hiện tại.

### Tài khoản Google Ads nên đứng tên ai?

Đứng tên doanh nghiệp, agency chỉ được cấp quyền quản lý. Ngừng hợp tác, bạn vẫn giữ toàn bộ lịch sử.

### Đối thủ nhấp phá quảng cáo thì sao?

Theo [Google Ads Help](https://support.google.com/google-ads/answer/42995?hl=en), bạn không bị tính tiền cho lượt nhấp không hợp lệ mà hệ thống phát hiện. Những lượt này cũng bị loại khỏi số liệu. Bạn vẫn nên để ý khu vực hay khung giờ có lượt nhấp tăng bất thường mà không có chuyển đổi để loại trừ.
`
    }
  ]
};
