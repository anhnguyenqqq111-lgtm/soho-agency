/*
  Dữ liệu cho các module quyết định của trang dịch vụ (Redesign V6.0):
  - fit: dịch vụ có hợp với tình huống của khách không (nên cân nhắc / chưa nên ưu tiên / cần chuẩn bị).
  - scope: phạm vi, phần thuộc dịch vụ khác, điều kiện, phụ thuộc, yếu tố chi phí và thời gian. Không ghi giá, không ghi thời hạn cố định.
  - proof: dự án thật đã công bố trong components/data/cases.js, chỉ khi đúng kênh. resultApplies=false khi kết quả công bố thuộc kênh khác.
  - hero: kiểu hero trong PilotOverview (analysis | performance | exhibition).
  Nội dung SEO, Google Ads, Nhận diện, Website dựa trên prototype soho_service_experience_prototype.html (10/2026);
  8 dịch vụ còn lại viết từ servicePagesData.js và touchpoints.js. Phạm vi thật chốt trong đề xuất cho từng khách.
*/

export const EXPERIENCE = {
  'seo-tong-the': {
    hero: 'analysis',
    fit: {
      title: 'Khi nào SEO là đúng lựa chọn?',
      lead: 'SEO phù hợp khi khách chủ động tìm hiểu trước khi quyết định, và doanh nghiệp có kiến thức chuyên môn để viết nội dung thật sự có ích.',
      when: ['Khách đã có nhu cầu và đang tìm trên Google', 'Sản phẩm, dịch vụ có trang đích đủ thuyết phục để nhận khách'],
      notYet: [
        'Website chưa nhận được khách: chưa có form, số điện thoại hay quy trình tiếp nhận',
        'Cần doanh số trong vài tuần tới: SEO thường cần vài tháng'
      ],
      prepare: [
        'Quyền xem Search Console, GA4 và quản trị website',
        'Thông tin thật về sản phẩm, giá tham khảo, dự án',
        'Người phía bạn duyệt nội dung chuyên môn'
      ]
    },
    scope: {
      included: 'Kiểm tra kỹ thuật, bản đồ từ khóa theo bước mua, cấu trúc cụm chủ đề, dàn ý từng trang và kế hoạch liên kết nội bộ, theo phạm vi thỏa thuận.',
      excluded: {text: 'Thiết kế lại giao diện hay làm website mới', slug: 'thiet-ke-website'},
      dependencies: 'Khả năng sửa website, người duyệt chuyên môn, dữ liệu sản phẩm và phản hồi của đội sale về khách đến từ Google.',
      cost: 'Quy mô website, số nhóm sản phẩm hoặc dịch vụ, mức độ lỗi kỹ thuật, số trang cần viết hoặc sửa.',
      time: 'Tốc độ sửa lỗi phía website, tốc độ duyệt nội dung, mức cạnh tranh của nhóm từ khóa.'
    },
    proof: {
      slug: 'king-decor-luxury',
      resultApplies: false,
      note: 'Kết quả SOHO đã công bố của dự án này là về quảng cáo Facebook, chưa có số liệu riêng cho SEO.'
    }
  },
  'seo-ai-overview': {
    hero: 'analysis',
    fit: {
      title: 'Khi nào nên làm SEO cho AI?',
      lead: 'AI tổng hợp tín hiệu từ nhiều nguồn trước khi chọn trang để trích dẫn. Việc này đáng làm khi website đã có nền SEO và ngành của bạn cần niềm tin cao.',
      when: [
        'Bài đã lên trang đầu nhưng lượt bấm giảm vì AI trả lời ngay trên Google',
        'Ngành cần chuyên môn rõ: tài chính, giáo dục, y tế, B2B, pháp lý, công nghệ'
      ],
      notYet: ['Website chưa có nền SEO cơ bản: làm SEO tổng thể trước'],
      prepare: ['Thông tin tác giả, chuyên gia có thể công khai', 'Số liệu, quy trình, ví dụ thật để đưa vào bài', 'Quyền sửa dữ liệu cấu trúc trên website']
    },
    scope: {
      included:
        'Kiểm tra cách Google hiểu thương hiệu và tác giả, danh sách câu hỏi theo chủ đề, dữ liệu cấu trúc, mẫu trang trả lời thẳng câu hỏi, theo dõi câu tìm kiếm có câu trả lời AI.',
      excluded: {text: 'Nền SEO kỹ thuật và cấu trúc toàn site', slug: 'seo-tong-the'},
      dependencies: 'Mức độ công khai được của chuyên gia và số liệu nội bộ; nơi khác có nhắc tới thương hiệu hay không.',
      cost: 'Số chủ đề, số trang cần viết lại, mức độ dữ liệu cấu trúc cần bổ sung.',
      time: 'Tốc độ có thông tin chuyên gia và số liệu thật; tần suất Google cập nhật câu trả lời AI.'
    },
    proof: null
  },
  'local-seo-google-maps': {
    hero: 'performance',
    fit: {
      title: 'Khi nào nên đầu tư SEO địa phương?',
      lead: 'Người tìm quanh đây thường đã muốn mua và quyết định nhanh. Hồ sơ Google, đánh giá và thông tin khớp nhau quyết định họ gọi bạn hay đối thủ gần đó.',
      when: ['Có cửa hàng, phòng khám, showroom hoặc phục vụ theo khu vực', 'Hồ sơ Maps có lượt xem nhưng ít cuộc gọi, ít chỉ đường'],
      notYet: ['Không có địa điểm khách tới tận nơi: ưu tiên SEO tổng thể'],
      prepare: ['Quyền quản lý hồ sơ Google Business Profile', 'Danh sách chi nhánh với tên, địa chỉ, số điện thoại chuẩn', 'Ảnh thật của địa điểm và dịch vụ']
    },
    scope: {
      included:
        'Kiểm tra hồ sơ Google, thống nhất tên, địa chỉ, số điện thoại, trang riêng cho từng khu vực, quy trình xin đánh giá, báo cáo cuộc gọi và chỉ đường.',
      excluded: {text: 'Quảng cáo trả tiền trên Google Maps', slug: 'google-ads-shopping'},
      dependencies: 'Quyền sở hữu hồ sơ, đội ngũ tại điểm bán xin đánh giá, thông tin thống nhất giữa các chi nhánh.',
      cost: 'Số chi nhánh, số khu vực cần trang riêng, tình trạng hồ sơ hiện tại.',
      time: 'Thời gian Google xác minh thay đổi hồ sơ, tốc độ có thêm đánh giá thật.'
    },
    proof: null
  },
  'google-ads-shopping': {
    hero: 'performance',
    fit: {
      title: 'Quảng cáo đang tiêu tiền đúng chỗ?',
      lead: 'Trước khi tăng ngân sách, cần biết chuyển đổi có được ghi đúng không, khách có chất lượng không, và thông tin đơn chốt có quay về được không.',
      when: ['Có nhu cầu tìm kiếm hiện hữu, ưu đãi rõ, trang đích phù hợp', 'Cần khách ngay trong lúc SEO còn cần thời gian'],
      notYet: ['Chưa đo được form, cuộc gọi, đơn hàng: sửa đo lường trước khi tăng ngân sách', 'Không có phản hồi từ sale về chất lượng khách'],
      prepare: [
        'Ngân sách quảng cáo và biên lợi nhuận theo nhóm hàng',
        'Quyền tài khoản Google Ads, GA4, Merchant Center',
        'Dữ liệu đơn chốt từ CRM hoặc sổ bán hàng'
      ]
    },
    scope: {
      included:
        'Kiểm tra tài khoản và cách đo, cấu trúc chiến dịch theo ý định mua, bộ mẫu quảng cáo, từ khóa loại trừ, danh mục sản phẩm, báo cáo theo chi phí mỗi đơn và lợi nhuận gộp.',
      excluded: {text: 'Làm lại trang đích khi trang không chuyển đổi', slug: 'cro-landing-page'},
      dependencies: 'Chất lượng trang đích, ngân sách, phản hồi của sale, dữ liệu đơn hàng thật.',
      cost: 'Số thị trường, loại chiến dịch, số sản phẩm, độ phức tạp của phần đo lường.',
      time: 'Thời gian thu đủ dữ liệu chuyển đổi để chiến lược giá thầu học; độ trễ giữa lượt bấm và đơn chốt.'
    },
    proof: null
  },
  'meta-tiktok-ads': {
    hero: 'performance',
    fit: {
      title: 'Khi nào Meta và TikTok Ads hợp với bạn?',
      lead: 'Hai nền tảng này tạo nhu cầu cho người chưa tìm bạn. Thứ quyết định là góc kể của mẫu quảng cáo, ưu đãi, nơi khách đến sau khi bấm và phản hồi từ đội sale.',
      when: ['Sản phẩm cần hình ảnh, video và lời chứng thực trước khi khách quyết định', 'Có người trả lời tin nhắn nhanh và ghi lại kết quả chốt'],
      notYet: ['Chưa có nội dung, hình ảnh để chạy thử nhiều mẫu: chuẩn bị nội dung trước'],
      prepare: ['Quyền quản trị fanpage, tài khoản quảng cáo, pixel', 'Ảnh, video thật của sản phẩm hoặc khách hàng', 'Cách đội sale ghi lại khách nào đã chốt']
    },
    scope: {
      included:
        'Chân dung khách và lý do ngần ngại, bảng ý tưởng mẫu quảng cáo, kế hoạch thử nghiệm, cài đo lường Meta, báo cáo theo từng mẫu và chất lượng khách.',
      excluded: {text: 'Sản xuất nội dung dài hạn cho fanpage và báo chí', slug: 'content-marketing-pr'},
      dependencies: 'Tốc độ có hình ảnh, video mới; tốc độ trả lời tin nhắn; dữ liệu chốt đơn.',
      cost: 'Số mẫu quảng cáo cần làm mỗi vòng, số nền tảng, số nhóm sản phẩm.',
      time: 'Độ dài mỗi vòng thử nghiệm, tốc độ duyệt mẫu quảng cáo phía bạn.'
    },
    proof: {slug: 'le-viva-resort', resultApplies: true, more: ['kronos-luxury-timepieces', 'helen-bridal']}
  },
  'cro-landing-page': {
    hero: 'performance',
    fit: {
      title: 'Khi nào nên tối ưu chuyển đổi?',
      lead: 'Trang đích thường không thiếu thông tin mà thiếu thứ tự. CRO đáng làm khi đã có người vào trang mà ít người hành động.',
      when: ['Đang trả tiền cho lượt truy cập, hoặc đã có khách từ Google', 'Khách rời trang nhiều trên điện thoại'],
      notYet: ['Lượt truy cập còn quá ít để so sánh hai phiên bản: tăng lưu lượng trước'],
      prepare: ['Quyền xem GA4 và công cụ bản đồ nhiệt (nếu có)', 'Quyền sửa trang hoặc người sửa được trang', 'Phản hồi của sale về câu hỏi khách hay hỏi']
    },
    scope: {
      included:
        'Kiểm tra các bước khách đi qua, danh sách chỗ khách vướng trên từng màn hình, bản viết lại phần đầu trang, nút bấm, bằng chứng, kế hoạch và báo cáo thử nghiệm.',
      excluded: {text: 'Thiết kế lại toàn bộ website', slug: 'thiet-ke-website'},
      dependencies: 'Lượng truy cập đủ để so sánh, đo lường đúng từng lượt để lại thông tin, tốc độ sửa trang.',
      cost: 'Số trang đích, số thử nghiệm, có cần thiết kế lại phần nào không.',
      time: 'Lượng truy cập mỗi tuần quyết định mỗi thử nghiệm cần chạy bao lâu.'
    },
    proof: null
  },
  'thiet-ke-website': {
    hero: 'exhibition',
    fit: {
      title: 'Khi nào cần làm lại website?',
      lead: 'Hãy đánh giá bằng hành vi của khách và khả năng bán hàng của website, không chỉ bằng việc giao diện trông đã cũ.',
      when: ['Website chậm, vỡ bố cục trên điện thoại, khó tự sửa nội dung', 'Có người vào web nhưng không dẫn tới gọi, nhắn tin, đặt lịch hay mua'],
      notYet: ['Chỉ vài trang yếu: tối ưu trang đích có thể đủ, chưa cần làm lại toàn bộ'],
      prepare: ['Nội dung, cấu trúc sản phẩm hoặc dịch vụ', 'Tài sản thương hiệu: logo, màu, chữ', 'Quyền tên miền, hosting và các hệ thống cần nối']
    },
    scope: {
      included:
        'Sơ đồ thông tin và đường đi người dùng, thiết kế giao diện máy tính và điện thoại, lập trình và kiểm thử, cài đo lường khách liên hệ, hướng dẫn tự quản trị.',
      excluded: {text: 'Bộ nhận diện thương hiệu khi chưa có', slug: 'nhan-dien-thuong-hieu'},
      dependencies: 'Nội dung sẵn sàng, tích hợp với hệ thống đang có, quyền truy cập kỹ thuật, quy trình duyệt.',
      cost: 'Số loại trang, mức độ riêng của giao diện, hệ quản trị nội dung, các tích hợp (đặt lịch, thanh toán, CRM, đa ngôn ngữ).',
      time: 'Tốc độ có nội dung, số vòng duyệt thiết kế, số tích hợp.'
    },
    proof: {
      slug: 'king-decor-luxury',
      resultApplies: false,
      note: 'Phạm vi dự án là SEO website và quảng cáo Facebook: SOHO tái cấu trúc nội dung website theo nhóm dịch vụ, không thiết kế lại giao diện. Chưa có số liệu riêng cho phần website.'
    }
  },
  'nhan-dien-thuong-hieu': {
    hero: 'exhibition',
    fit: {
      title: 'Thời điểm nào cần đầu tư nhận diện?',
      lead: 'Một hệ nhận diện rõ giúp thương hiệu được nhận ra và dùng nhất quán. Hiệu quả còn phụ thuộc định vị và cách hệ đó được áp dụng thật.',
      when: ['Mới ra mắt, đổi định vị, hoặc hình ảnh đang mỗi nơi một kiểu', 'Thiết kế đẹp trên màn hình nhưng khó dùng khi in hay làm quảng cáo'],
      notYet: ['Chưa rõ bán cho ai và khác đối thủ ở đâu: làm rõ định vị trước, nhận diện sau'],
      prepare: ['Thông tin thương hiệu, khách hàng, đối thủ bạn quan tâm', 'Danh sách điểm chạm cần áp dụng', 'Một người quyết định duyệt ở mỗi mốc']
    },
    scope: {
      included: 'Nghiên cứu, đề xuất hướng, logo và các phiên bản, bảng màu và kiểu chữ, bộ ứng dụng, bộ hướng dẫn thương hiệu, file thiết kế và file in.',
      excluded: {text: 'Website dùng bộ nhận diện mới', slug: 'thiet-ke-website'},
      dependencies: 'Quyết định định vị, tốc độ phản hồi, quyền sử dụng hình ảnh và nhãn hiệu liên quan.',
      cost: 'Mức độ nghiên cứu chiến lược, số phương án, số kênh và vật phẩm cần ứng dụng.',
      time: 'Số vòng chỉnh, tốc độ duyệt ở mỗi mốc.'
    },
    proof: null
  },
  'thiet-ke-mobile-app': {
    hero: 'exhibition',
    fit: {
      title: 'Doanh nghiệp của bạn có cần app không?',
      lead: 'App đáng làm khi khách quay lại thường xuyên. Nếu khách chỉ ghé một lần hoặc rất thưa, một website tốt trên điện thoại thường đủ và rẻ hơn để duy trì.',
      when: ['Khách đặt lịch, đặt hàng, tích điểm nhiều lần', 'Cần thông báo, dữ liệu khách tập trung, hoặc dùng nội bộ'],
      notYet: ['Khách chỉ mua một lần hoặc rất thưa: website tốt là đủ, chưa cần app'],
      prepare: ['Việc chính khách sẽ làm trên app', 'Hệ thống đang dùng cần nối: website, quản trị, thanh toán', 'Người phụ trách sau khi ra mắt']
    },
    scope: {
      included: 'Bản mô tả tính năng, khung màn hình và luồng sử dụng, thiết kế giao diện, app Android và iOS đã kiểm thử, kế hoạch bảo trì và cập nhật.',
      excluded: {text: 'Website bán hàng hoặc giới thiệu', slug: 'thiet-ke-website'},
      dependencies: 'Hệ thống phía sau app, quy định của kho ứng dụng, nội dung và dữ liệu ban đầu.',
      cost: 'Số tính năng, số vai trò người dùng, các tích hợp, nền tảng (Android, iOS).',
      time: 'Phạm vi tính năng, thời gian kho ứng dụng duyệt, số vòng kiểm thử.'
    },
    proof: null
  },
  'content-marketing-pr': {
    hero: 'exhibition',
    fit: {
      title: 'Khi nào nội dung tạo ra khách?',
      lead: 'Khách đọc nội dung để bớt rủi ro trước khi mua. Nội dung đáng đầu tư khi trả lời đúng câu hỏi khách có, và đội sale dùng được nó.',
      when: ['Khách cân nhắc lâu, so sánh nhiều trước khi mua', 'Đội sale cần tài liệu, câu chuyện khách hàng để thuyết phục'],
      notYet: ['Chưa có người phía bạn duyệt nội dung chuyên môn: thống nhất người duyệt trước'],
      prepare: ['Người duyệt chuyên môn', 'Câu hỏi khách hay hỏi, ghi từ đội sale', 'Số liệu nội bộ, câu chuyện khách được phép công bố']
    },
    scope: {
      included:
        'Bản đồ chủ đề và câu hỏi, lịch nội dung, bài chủ đề và bài vệ tinh, câu chuyện khách hàng, tài liệu cho sale, báo cáo khách đã đọc bài trước khi mua.',
      excluded: {text: 'Sửa kỹ thuật SEO của website', slug: 'seo-tong-the'},
      dependencies: 'Thông tin chuyên môn, quyền công bố câu chuyện khách hàng, tốc độ duyệt bài.',
      cost: 'Số bài mỗi tháng, độ sâu chuyên môn, có cần phỏng vấn chuyên gia hay khách hàng.',
      time: 'Tốc độ duyệt bài và có thông tin từ chuyên gia.'
    },
    proof: null
  },
  'ga4-looker-dashboard': {
    hero: 'analysis',
    fit: {
      title: 'Khi nào cần sửa đo lường?',
      lead: 'Báo cáo tốt không phải là nhiều biểu đồ. Nó trả lời được kênh nào đang mang khách, tiền nào đang phí và việc gì cần làm tiếp.',
      when: ['Số quảng cáo, sổ bán hàng và website không khớp', 'Chủ doanh nghiệp mất nhiều thời gian gom số từ nhiều nơi'],
      notYet: ['Chưa có nơi ghi đơn hàng, khách hàng (CRM, sổ bán hàng): dựng nơi ghi trước'],
      prepare: [
        'Quyền quản trị GA4, Google Tag Manager, tài khoản quảng cáo',
        'Danh sách hành động có giá trị: form, cuộc gọi, đơn',
        'Người trong đội cần đọc báo cáo'
      ]
    },
    scope: {
      included:
        'Kế hoạch đo lường, quy tắc đặt tên hành động, cài GA4, Google Tag Manager và đo lường Meta, báo cáo Looker theo từng người xem, hướng dẫn đọc báo cáo.',
      excluded: {text: 'Chạy và tối ưu quảng cáo', slug: 'google-ads-shopping'},
      dependencies: 'Quyền truy cập hệ thống, khả năng xuất dữ liệu từ CRM, quy định về dữ liệu cá nhân.',
      cost: 'Số website và kênh cần đo, số hành động, số nguồn dữ liệu, số báo cáo.',
      time: 'Thời gian có quyền truy cập và kiểm tra số liệu chạy đúng sau khi cài.'
    },
    proof: null
  },
  'tu-van-chien-luoc-sprint': {
    hero: 'analysis',
    fit: {
      title: 'Khi nào nên bắt đầu bằng tư vấn lộ trình?',
      lead: 'Doanh nghiệp ít khi thiếu ý tưởng marketing. Cái thiếu là thứ tự ưu tiên dựa trên biên lợi nhuận, hành vi khách, năng lực đội nhà và số liệu đang có.',
      when: ['Không biết nên làm SEO, quảng cáo hay nội dung trước', 'Đổi agency nhiều lần mà vẫn không có hệ thống'],
      notYet: ['Đã biết rõ kênh cần làm và có số đo: làm thẳng dịch vụ đó'],
      prepare: ['Mục tiêu doanh thu và biên lợi nhuận', 'Quyền xem website, quảng cáo, số liệu bán hàng', 'Người ra quyết định tham gia các buổi trao đổi']
    },
    scope: {
      included: 'Biên bản trao đổi, báo cáo kiểm tra các kênh, phân tích đối thủ, lộ trình 30 đến 90 ngày, danh sách việc và con số cần đạt.',
      excluded: {text: 'Triển khai từng kênh sau lộ trình (là dịch vụ riêng)', slug: null},
      dependencies: 'Mức độ đầy đủ của số liệu hiện có, sự tham gia của người ra quyết định.',
      cost: 'Số kênh cần kiểm tra, số thị trường, độ sâu phân tích đối thủ.',
      time: 'Tốc độ có quyền truy cập và lịch các buổi trao đổi.'
    },
    proof: null
  }
};
