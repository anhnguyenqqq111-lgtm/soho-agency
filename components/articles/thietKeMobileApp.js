export const thietKeMobileAppArticle = {
  metaTitle: 'Thiết kế app mobile: có cần không, làm thế nào | SOHO',
  metaDesc:
    'Trước khi làm app: so với website và Zalo Mini App, bản đầu gọn, native hay Flutter, React Native, chính sách duyệt App Store, Google Play và chi phí.',
  readingTime: '10 phút đọc',
  updatedDate: '31/10/2026',
  authorKey: 'dev',
  cover: {
    src: '/media/articles/thiet-ke-mobile-app/thiet-ke-mobile-app-hero.webp',
    alt: 'Máy tính bảng và điện thoại đặt cạnh nhau trên tay ghế sofa, hai thiết bị khách dùng để mở app',
    width: 1600,
    height: 900
  },
  credits: [
    {text: 'Mobile technology on a sofa (Unsplash), Oliur Rahman ultralinx, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Mobile_technology_on_a_sofa_(Unsplash).jpg'},
    {text: 'Pencil shavings on a notebook (Unsplash), Angelina Litvin linalitvina, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Pencil_shavings_on_a_notebook_(Unsplash).jpg'},
    {text: 'Colorful code (Unsplash), Markus Spiske markusspiske, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Colorful_code_(Unsplash).jpg'},
    {text: 'Everything you need (Unsplash), Jo Szczepanska joszczepanska, Wikimedia Commons (CC0)', url: 'https://commons.wikimedia.org/wiki/File:Everything_you_need_(Unsplash).jpg'}
  ],
  toc: [
    {id: 'co-can-app-khong', title: '1. Có thật sự cần app không'},
    {id: 'app-web-zalo', title: '2. App, website hay Zalo Mini App'},
    {id: 'ban-dau-tien-gon', title: '3. Bắt đầu bằng bản đầu tiên thật gọn'},
    {id: 'native-hay-da-nen-tang', title: '4. Native hay đa nền tảng'},
    {id: 'quy-trinh-lam-app', title: '5. Quy trình làm một app'},
    {id: 'duyet-app-store-google-play', title: '6. Chính sách duyệt của App Store và Google Play'},
    {id: 'bao-tri-sau-ra-mat', title: '7. Sau ra mắt: bảo trì là việc hằng năm'},
    {id: 'chi-phi-app', title: '8. Chi phí làm app phụ thuộc vào đâu'},
    {id: 'cau-hoi-thuong-gap', title: '9. Câu hỏi thường gặp về thiết kế app mobile'}
  ],
  sections: [
    {
      id: 'co-can-app-khong',
      heading: '1. Có thật sự cần app không',
      content: `
Nhiều chủ doanh nghiệp muốn có app vì thấy đối thủ có, hoặc vì nghĩ app trông chuyên nghiệp hơn website. Nhưng để khách chịu tải một app về máy, giữ nó lại và mở ra nhiều lần là chuyện khó. App chỉ đáng tiền khi khách có lý do quay lại thường xuyên.

Câu hỏi đầu tiên luôn là: khách mở app để làm việc gì, bao lâu một lần? Nếu câu trả lời là "xem giới thiệu công ty" hay "xem bảng giá", website làm việc đó tốt hơn và rẻ hơn.

![Checklist 6 dấu hiệu cho thấy doanh nghiệp đáng làm app riêng](/media/articles/thiet-ke-mobile-app/soho-thiet-ke-mobile-app-checklist-01.webp "1360x850")
*Càng nhiều dấu hiệu khớp với doanh nghiệp của bạn, app càng đáng cân nhắc.*

Ngược lại, có những tình huống app giải quyết được việc website khó làm: khách đặt lịch, đặt hàng lặp lại hằng tuần; cần gửi thông báo nhắc lịch, báo đơn; cần dùng camera, vị trí, quét mã; hay nhân viên cần công cụ nội bộ chạy cả khi mạng yếu.
`
    },
    {
      id: 'app-web-zalo',
      heading: '2. App, website hay Zalo Mini App',
      content: `
Ở Việt Nam có thêm một lựa chọn thứ ba: Zalo Mini App, ứng dụng nhỏ chạy ngay bên trong Zalo. Theo [tài liệu của Zalo](https://miniapp.zaloplatforms.com/documents/intro/mini-app-navigation-mechanisms), khách mở Mini App bằng cách quét mã QR hoặc bấm một đường link, không phải vào kho ứng dụng tìm và tải. Mini App được dựng bằng công nghệ web, nên doanh nghiệp đã có web app có thể [chuyển sang Mini App](https://miniapp.zaloplatforms.com/documents/intro/convert-web-app-to-zalo-mini-app) mà không phải làm lại từ đầu. Mini App cũng phải qua [Zalo xét duyệt](https://miniapp.zaloplatforms.com/documents/intro/public-mini-app/) trước khi phát hành.

| | Website | Zalo Mini App | App cài đặt |
|---|---|---|---|
| Khách bắt đầu dùng | Mở link, tìm trên Google | Quét mã QR, bấm link trong Zalo | Tìm và tải từ kho ứng dụng |
| Được tìm thấy trên Google | Có | Không phải mục đích chính | Không, trừ trang giới thiệu app |
| Dùng tính năng của máy | Hạn chế | Theo những gì Zalo hỗ trợ | Đầy đủ nhất |
| Phù hợp với | Giới thiệu, bán hàng, nhận khách mới | Đặt lịch, tích điểm cho khách đã quen dùng Zalo | Khách dùng nhiều lần mỗi tuần, tính năng phức tạp |
| Phải qua duyệt | Không | Zalo duyệt | Apple và Google duyệt |

Có một điểm cần biết trước khi quyết định. [Hướng dẫn duyệt của Apple](https://developer.apple.com/app-store/review/guidelines/) (mục 4.2) yêu cầu app phải có tính năng, nội dung, giao diện vượt lên trên một website được đóng gói lại. App chỉ bọc website trong một khung app có thể bị từ chối. Nếu bạn chỉ định làm vậy, có lẽ website tốt trên điện thoại là đủ, xem [trang Thiết kế website](/thiet-ke-website/).
`
    },
    {
      id: 'ban-dau-tien-gon',
      heading: '3. Bắt đầu bằng bản đầu tiên thật gọn',
      content: `
MVP (Minimum Viable Product) là bản đầu tiên chỉ có những tính năng tối thiểu để khách làm được việc chính, đủ để biết khách có dùng thật hay không. Với doanh nghiệp nhỏ, đây là cách giảm rủi ro lớn nhất khi làm app.

![Cuốn sổ kẻ dòng mở trang trống, bút chì vừa gọt và vụn gỗ, nơi viết ra việc chính khách sẽ làm trên app](/media/articles/thiet-ke-mobile-app/thiet-ke-mobile-app-anh-01.webp "1200x800")
*Viết việc chính của app bằng một câu, rồi mới liệt kê màn hình.*

### Cách chọn tính năng cho bản đầu

1. Viết ra việc chính khách làm trên app bằng một câu. Ví dụ: "Khách đặt lịch cắt tóc với thợ mình chọn, ở chi nhánh gần nhất."
2. Liệt kê các màn hình tối thiểu để làm xong việc đó: chọn chi nhánh, chọn thợ, chọn giờ, xác nhận, nhận thông báo nhắc.
3. Mọi thứ khác (tích điểm, ví, đánh giá, chia sẻ, chat) đưa vào danh sách "làm sau".
4. Quyết định con số sẽ dùng để đánh giá sau ba tháng: số lượt đặt qua app, tỉ lệ khách đặt lần hai.

### Đừng quên phần phía sau

Khách thấy màn hình, nhưng doanh nghiệp vận hành bằng trang quản trị: nhân viên xem lịch, đổi giờ, hủy đơn, xem khách nào đặt nhiều. Trang quản trị và máy chủ thường chiếm phần đáng kể khối lượng công việc. Nếu bạn đang dùng phần mềm bán hàng hay phần mềm quản lý khách hàng (CRM), hỏi từ đầu app có kết nối được không, để nhân viên không phải nhập một thông tin hai lần.
`
    },
    {
      id: 'native-hay-da-nen-tang',
      heading: '4. Native hay đa nền tảng',
      content: `
Làm app native nghĩa là viết riêng một app cho iPhone (bằng Swift) và một app cho Android (bằng Kotlin). Làm đa nền tảng nghĩa là viết một bộ mã, chạy được trên cả hai. Hai công cụ đa nền tảng phổ biến nhất hiện nay là Flutter và React Native.

![Màn hình đầy mã lập trình nhiều màu chụp nghiêng, gợi việc viết một bộ mã chạy được trên cả iPhone và Android](/media/articles/thiet-ke-mobile-app/thiet-ke-mobile-app-anh-02.webp "1200x800")
*Viết một bộ mã cho cả hai hệ điều hành thì sửa một lỗi là sửa cho cả hai bản.*

- **[Flutter](https://flutter.dev/)** được Google hỗ trợ, cho phép dựng ứng dụng cho điện thoại, web và máy tính từ một bộ mã nguồn.
- **[React Native](https://reactnative.dev/)** do Meta phát hành năm 2015 và duy trì tới nay. App viết bằng JavaScript nhưng hiển thị bằng thành phần giao diện gốc của từng hệ điều hành.

### Khi nào nên chọn native

- App cần xử lý nặng: dựng hình 3D, xử lý video, thực tế tăng cường.
- App cần dùng sâu tính năng mới nhất của iPhone hoặc Android ngay khi ra mắt.
- Doanh nghiệp đã có hai đội lập trình riêng cho hai hệ điều hành.

Ngoài những trường hợp đó, đa nền tảng giúp tiết kiệm thời gian và chi phí bảo trì, vì sửa một lỗi là sửa cho cả hai bản. Điều quan trọng hơn chọn công cụ là đơn vị làm app có kinh nghiệm thật với công cụ đó và bàn giao mã nguồn đầy đủ.
`
    },
    {
      id: 'quy-trinh-lam-app',
      heading: '5. Quy trình làm một app',
      content: `
Một dự án app thường đi qua năm giai đoạn. Bỏ qua giai đoạn đầu để lập trình sớm là cách nhanh nhất để làm lại.

![Quy trình 5 giai đoạn làm app: làm rõ việc chính, phác màn hình, thiết kế, lập trình và kiểm tra, đưa lên kho ứng dụng](/media/articles/thiet-ke-mobile-app/soho-thiet-ke-mobile-app-steps-01.webp "1360x1120")
*Bản phác màn hình là chỗ sửa rẻ nhất. Sửa sau khi đã lập trình tốn hơn nhiều.*

- **Làm rõ việc chính.** Viết bản mô tả tính năng, ai dùng, dùng để làm gì, cái gì làm sau.
- **Phác màn hình.** Vẽ khung trắng đen từng màn hình và đường đi giữa chúng. Bấm thử trên điện thoại bằng bản mẫu tương tác trước khi tô màu.
- **Thiết kế giao diện.** Áp nhận diện thương hiệu, chọn cỡ chữ, cỡ nút đủ lớn để bấm bằng ngón cái. Nếu chưa có logo, màu sắc thống nhất, xem [trang Nhận diện thương hiệu](/nhan-dien-thuong-hieu/).
- **Lập trình và kiểm tra.** Làm app, trang quản trị, máy chủ. Kiểm tra trên nhiều đời máy, cả máy Android giá rẻ đang phổ biến.
- **Đưa lên kho ứng dụng.** Chuẩn bị ảnh màn hình, mô tả, chính sách quyền riêng tư, tài khoản dùng thử cho người duyệt.
`
    },
    {
      id: 'duyet-app-store-google-play',
      heading: '6. Chính sách duyệt của App Store và Google Play',
      content: `
App không tự lên kho ứng dụng sau khi làm xong. Apple và Google đều duyệt. Mỗi bên có yêu cầu riêng. Biết trước giúp tránh trễ ngày ra mắt.

### Tài khoản nhà phát triển

- **Apple:** [Apple Developer Program](https://developer.apple.com/programs/) có phí 99 USD mỗi năm. Muốn tên doanh nghiệp hiện là người bán trên App Store, phải đăng ký dưới dạng tổ chức có tư cách pháp nhân và có số D-U-N-S (mã định danh doanh nghiệp do Dun & Bradstreet cấp, miễn phí ở hầu hết nơi), theo [hướng dẫn đăng ký của Apple](https://developer.apple.com/help/account/membership/program-enrollment/).
- **Google:** [tài khoản Google Play Console](https://support.google.com/googleplay/android-developer/answer/6112435) có phí đăng ký 25 USD, trả một lần. Tài khoản tổ chức cũng cần số D-U-N-S. [Google lưu ý](https://support.google.com/googleplay/android-developer/answer/13628312) xin số mới có thể mất tới 30 ngày.

Tài khoản nhà phát triển nên đứng tên doanh nghiệp của bạn, không đứng tên đơn vị làm app. Đơn vị làm app được mời vào với quyền quản trị.

### Những yêu cầu hay làm app bị trả về

- **Tài khoản dùng thử.** Theo [hướng dẫn duyệt của Apple](https://developer.apple.com/app-store/review/guidelines/) (mục 2.1), app có đăng nhập phải gửi kèm tài khoản dùng thử và để máy chủ chạy sẵn.
- **Xóa tài khoản.** App cho tạo tài khoản thì phải cho xóa tài khoản ngay trong app, theo [Apple](https://developer.apple.com/app-store/review/guidelines/) (mục 5.1.1). [Google Play](https://support.google.com/googleplay/android-developer/answer/13327111) yêu cầu thêm một đường link web để người dùng yêu cầu xóa mà không cần cài lại app.
- **Thanh toán.** Theo [Apple](https://developer.apple.com/app-store/review/guidelines/) (mục 3.1.1 và 3.1.3), mở khóa nội dung số trong app phải dùng thanh toán trong ứng dụng của Apple. Hàng hóa, dịch vụ dùng ngoài app, như đặt bàn hay mua đồ, thì dùng cách thanh toán khác.
- **Kiểm thử trên Google Play.** Tài khoản cá nhân tạo sau ngày 13/11/2023 phải chạy thử kín với ít nhất 12 người trong ít nhất 14 ngày liên tục trước khi được phát hành, theo [Google Play](https://support.google.com/googleplay/android-developer/answer/14151465).
- **Phiên bản Android tối thiểu.** Từ 31/08/2026, app mới và bản cập nhật trên Google Play phải nhắm tới Android 16 (API 36) trở lên, theo [yêu cầu của Google Play](https://support.google.com/googleplay/android-developer/answer/11926878).

### Duyệt mất bao lâu

Theo [Apple](https://developer.apple.com/distribute/app-review/), thường ít nhất 50% bản gửi được duyệt trong dưới 24 giờ và 90% trong dưới 48 giờ. Đó là khi hồ sơ đủ. Bị trả về thì sửa và gửi lại, nên hãy để dư vài ngày trước ngày ra mắt đã hứa với khách.
`
    },
    {
      id: 'bao-tri-sau-ra-mat',
      heading: '7. Sau ra mắt: bảo trì là việc hằng năm',
      content: `
Website để vài năm không sửa vẫn chạy. App thì khác. Apple và Google ra phiên bản hệ điều hành mới mỗi năm. Như yêu cầu phiên bản Android ở mục 6, Google Play cũng nâng mức tối thiểu theo thời gian. App không cập nhật có thể không gửi được bản sửa lỗi, hoặc dần khó tìm thấy với người dùng máy đời mới.

![Dụng cụ sửa chữa trên bàn xanh: băng dính, kéo, dao cắt và giấy ghi chú, gợi việc bảo trì app đều đặn sau ra mắt](/media/articles/thiet-ke-mobile-app/thiet-ke-mobile-app-anh-03.webp "1200x800")
*App cần người lo sửa lỗi và cập nhật mỗi năm, không xong ở ngày ra mắt.*

Những việc cần có người lo sau ra mắt:

- Theo dõi lỗi văng app và sửa theo mức độ ảnh hưởng.
- Cập nhật theo phiên bản iOS, Android mới và yêu cầu mới của hai kho.
- Gia hạn tài khoản Apple Developer hằng năm, chứng chỉ, tên miền của máy chủ.
- Trả phí máy chủ, dịch vụ gửi thông báo, gửi tin nhắn xác thực.
- Đọc đánh giá trên kho ứng dụng, trả lời và đưa ý kiến hay vào danh sách cập nhật.
- Đo số người dùng hoạt động, tỉ lệ quay lại, rồi quyết định tính năng tiếp theo.

Khi ký hợp đồng, hỏi rõ gói bảo trì gồm gì, lỗi nghiêm trọng thì sửa trong bao lâu, mã nguồn và tài liệu được bàn giao ra sao. Có mã nguồn thì sau này bạn đổi đơn vị bảo trì được.
`
    },
    {
      id: 'chi-phi-app',
      heading: '8. Chi phí làm app phụ thuộc vào đâu',
      content: `
Chi phí app chênh nhau rất xa giữa các báo giá. Phần lớn chênh lệch nằm ở những yếu tố sau:

- **Số màn hình và độ phức tạp của từng màn hình.** Danh sách đơn giản khác xa màn hình bản đồ theo dõi đơn theo thời gian thực.
- **Trang quản trị và máy chủ.** Có cần làm mới, hay dùng lại hệ thống đang có.
- **Kết nối với hệ thống khác.** Phần mềm bán hàng, CRM, cổng thanh toán, đơn vị vận chuyển, gửi tin nhắn xác thực.
- **Native hay đa nền tảng.** Hai bộ mã riêng thường tốn hơn một bộ mã chung.
- **Thiết kế riêng hay dùng bộ giao diện có sẵn.**
- **Số đời máy cần kiểm tra** và yêu cầu chạy khi mạng yếu.
- **Chi phí hằng năm.** Tài khoản nhà phát triển, máy chủ, dịch vụ gửi thông báo, bảo trì.

Một cách giữ chi phí trong tầm kiểm soát là chia làm hai đợt: đợt một làm bản đầu gọn như mục 3, đo vài tháng, đợt hai mới làm tiếp những tính năng khách thật sự cần.
`
    },
    {
      id: 'cau-hoi-thuong-gap',
      heading: '9. Câu hỏi thường gặp về thiết kế app mobile',
      content: `
### Làm một app mất bao lâu?

Tùy số màn hình, số hệ thống cần kết nối và tốc độ chốt yêu cầu. App đặt lịch đơn giản nhanh hơn nhiều so với app bán hàng có ví, tích điểm và theo dõi đơn. Cộng thêm thời gian duyệt trên hai kho. Với tài khoản Google Play cá nhân mới, còn có ít nhất 14 ngày chạy thử kín.

### Tôi đã có website, có cần làm app nữa không?

Chỉ khi khách có việc phải làm lặp lại thường xuyên mà website làm không tiện, như đặt lịch hằng tuần hay nhận thông báo đơn hàng. Nếu khách chỉ vào xem thông tin rồi gọi điện, đầu tư làm website tốt trên điện thoại sẽ hiệu quả hơn.

### Zalo Mini App có thay được app cài đặt không?

Với nhiều việc đơn giản như đặt lịch, tích điểm, xem đơn, Mini App là lựa chọn đáng thử vì khách không phải tải gì thêm. Với tính năng cần dùng sâu phần cứng của máy hoặc cần chạy độc lập ngoài Zalo, app cài đặt vẫn phù hợp hơn.

### App làm xong thuộc về ai?

Nên thuộc về doanh nghiệp: tài khoản nhà phát triển đứng tên doanh nghiệp, mã nguồn và tài liệu được bàn giao, máy chủ đứng tên doanh nghiệp hoặc ghi rõ trong hợp đồng. Hỏi điều này trước khi ký, không phải lúc muốn đổi đơn vị.

### Làm sao để có người tải app sau khi ra mắt?

Bắt đầu từ khách đang có: mã QR tại cửa hàng, tin nhắn cho khách cũ, nút tải trên website, ưu đãi cho lần đặt đầu tiên qua app. Khi đã có người dùng đều, chạy quảng cáo cài app mới có số liệu để biết bỏ tiền vào đâu.
`
    }
  ]
};
