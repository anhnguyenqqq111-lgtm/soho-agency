import LegalPage from '../../components/LegalPage';
import {company} from '../../components/data/company';
import {sitePath} from '../../components/paths';

export const metadata = {
  alternates: {canonical: '/dieu-khoan-su-dung/'},
  title: 'Điều khoản sử dụng',
  description: 'Điều khoản áp dụng khi bạn truy cập và sử dụng website của SOHO Agency: nội dung, sở hữu trí tuệ, giới hạn trách nhiệm, luật áp dụng.'
};

/*
  Điều khoản sử dụng website. Chỉ điều chỉnh việc dùng website; dịch vụ marketing theo hợp đồng riêng.
  Các cam kết về số liệu dự án (mục 4) phải khớp cách components/data/cases.js ghi nguồn và giới hạn.
*/
const UPDATED = '31/10/2026';
const LEGAL = company.legalName;

const sections = [
  {
    id: 'chap-nhan',
    title: 'Phạm vi và chấp nhận điều khoản',
    body: (
      <>
        <p>
          Website này (gồm mọi trang dưới tên miền của SOHO Agency) do {LEGAL} (sau đây gọi là “SOHO”) sở hữu và vận hành. Khi truy cập hoặc sử dụng website,
          bạn xác nhận đã đọc, hiểu và đồng ý với điều khoản này cùng <a href={sitePath('/chinh-sach-bao-mat/')}>Chính sách bảo mật</a>. Nếu không đồng ý, vui
          lòng không sử dụng website.
        </p>
        <p>
          Điều khoản này chỉ điều chỉnh việc sử dụng website. Việc SOHO cung cấp dịch vụ SEO, quảng cáo, thiết kế website, nhận diện thương hiệu và các dịch
          vụ khác được điều chỉnh bằng hợp đồng dịch vụ ký riêng giữa SOHO và khách hàng. Khi có khác biệt, hợp đồng dịch vụ được ưu tiên áp dụng cho quan hệ
          dịch vụ đó.
        </p>
        <p>
          Điều khoản được lập theo pháp luật Việt Nam, trong đó có Bộ luật Dân sự số 91/2015/QH13, Luật Giao dịch điện tử số 20/2023/QH15, Luật Sở hữu trí tuệ
          số 50/2005/QH11 (đã sửa đổi, bổ sung), Luật An ninh mạng số 24/2018/QH12 và Luật Bảo vệ quyền lợi người tiêu dùng số 19/2023/QH15.
        </p>
      </>
    )
  },
  {
    id: 'thong-tin-soho',
    title: 'Thông tin về SOHO',
    body: (
      <p>
        {LEGAL}, địa chỉ {company.address}. Email <a href={`mailto:${company.email}`}>{company.email}</a>, điện thoại {company.phone}. SOHO là đối tác Google
        (Google Partner); tình trạng này được Google xác nhận qua hồ sơ đối tác công khai và có thể thay đổi theo tiêu chí của Google từng thời điểm.
      </p>
    )
  },
  {
    id: 'noi-dung',
    title: 'Tính chất của nội dung trên website',
    body: (
      <>
        <p>
          Bài viết, hướng dẫn, sơ đồ, bảng so sánh và câu trả lời trên website được SOHO biên soạn để cung cấp thông tin chung về marketing online. Nội dung
          mang tính tham khảo, <strong>không phải lời tư vấn cho tình huống cụ thể của bạn</strong> và không thay thế ý kiến của chuyên gia pháp lý, kế toán
          hay tư vấn chuyên môn khác.
        </p>
        <p>
          Thông tin về sản phẩm, chính sách và tính năng của Google, Meta, TikTok và các nền tảng khác được SOHO tổng hợp từ tài liệu công khai của nền tảng
          tại thời điểm viết, có ghi nguồn trong bài. Các nền tảng này thay đổi thường xuyên; SOHO cố gắng cập nhật nhưng không bảo đảm nội dung luôn phản ánh
          phiên bản mới nhất. Trước khi quyết định dựa trên một thông tin, bạn nên kiểm tra lại tại nguồn chính thức.
        </p>
        <p>
          Ngày cập nhật của từng bài được ghi trong bài. SOHO có thể sửa, bổ sung hoặc gỡ bất kỳ nội dung nào mà không cần báo trước.
        </p>
      </>
    )
  },
  {
    id: 'so-lieu',
    title: 'Số liệu dự án, khách hàng và nhận xét',
    body: (
      <>
        <p>
          Số liệu trong các trang dự án và kết quả là số liệu thật của khách hàng SOHO, lấy từ công cụ của nền tảng (ví dụ Google Search Console, Meta Ads
          Manager), được công bố <strong>với sự đồng ý của khách hàng</strong>, có ghi khoảng thời gian đo, nguồn và các giới hạn của số liệu ngay tại trang
          đó.
        </p>
        <p>
          Các số liệu này phản ánh kết quả của một dự án cụ thể trong điều kiện cụ thể. <strong>Chúng không phải cam kết hay bảo đảm</strong> rằng dự án của
          bạn sẽ đạt kết quả tương tự. Kết quả marketing phụ thuộc vào ngành, sản phẩm, ngân sách, nền tảng hiện có, cạnh tranh, thuật toán của nền tảng và
          nhiều yếu tố ngoài tầm kiểm soát của SOHO. SOHO không cam kết thứ hạng tìm kiếm, doanh thu hay số khách hàng trong bất kỳ nội dung nào trên website.
        </p>
        <p>
          Nhận xét của khách hàng là lời nguyên văn do khách hàng cung cấp. Logo và tên khách hàng được hiển thị với sự cho phép của khách hàng và thuộc quyền
          sở hữu của khách hàng đó. Khách hàng có thể yêu cầu SOHO gỡ logo, tên hoặc số liệu của mình bất cứ lúc nào.
        </p>
        <p>
          Ảnh thành viên SOHO là ảnh thật, được đăng với sự đồng ý của người trong ảnh. Ảnh minh họa trong bài viết lấy từ nguồn có giấy phép sử dụng tự do và
          được ghi nguồn ở cuối bài.
        </p>
      </>
    )
  },
  {
    id: 'so-huu-tri-tue',
    title: 'Sở hữu trí tuệ',
    body: (
      <>
        <p>
          Trừ khi được ghi khác, toàn bộ nội dung trên website (bài viết, hình ảnh, sơ đồ, mã nguồn giao diện, bố cục, tên “SOHO Agency”, logo và các yếu tố
          nhận diện) thuộc quyền sở hữu của SOHO hoặc được SOHO sử dụng theo giấy phép, và được bảo hộ theo Luật Sở hữu trí tuệ Việt Nam và các điều ước
          quốc tế mà Việt Nam là thành viên.
        </p>
        <p>
          <strong>Bạn được phép:</strong> xem, in và lưu nội dung cho mục đích tham khảo cá nhân hoặc nội bộ doanh nghiệp; trích dẫn một phần hợp lý của bài viết
          với điều kiện ghi rõ nguồn “SOHO Agency” và dẫn liên kết về bài gốc; chia sẻ liên kết tới các trang của website.
        </p>
        <p>
          <strong>Bạn không được phép</strong>, nếu chưa có văn bản đồng ý của SOHO: sao chép toàn bộ hoặc phần lớn một bài viết để đăng lại ở nơi khác; dùng nội
          dung, hình ảnh hoặc sơ đồ của SOHO cho mục đích thương mại; sửa đổi nội dung rồi gán cho SOHO; dùng tên, logo SOHO theo cách gây hiểu nhầm rằng SOHO
          bảo trợ hoặc liên kết với bạn; thu thập nội dung tự động (scraping) ở quy mô lớn để huấn luyện mô hình hoặc xây dựng sản phẩm cạnh tranh.
        </p>
        <p>
          Nhãn hiệu, logo và tên của Google, Meta, TikTok, các nền tảng và khách hàng xuất hiện trên website thuộc chủ sở hữu tương ứng, chỉ được dùng để nhận
          biết sản phẩm, dịch vụ hoặc quan hệ hợp tác, không hàm ý chủ sở hữu đó bảo trợ cho SOHO.
        </p>
        <p>
          Nếu bạn cho rằng nội dung trên website xâm phạm quyền sở hữu trí tuệ của mình, hãy gửi thông báo tới <a href={`mailto:${company.email}`}>{company.email}</a>{' '}
          kèm nội dung bị cho là xâm phạm, căn cứ quyền của bạn và thông tin liên hệ. SOHO xem xét và phản hồi trong 7 ngày làm việc.
        </p>
      </>
    )
  },
  {
    id: 'su-dung-hop-le',
    title: 'Sử dụng website đúng cách',
    body: (
      <>
        <p>Khi sử dụng website, bạn cam kết không:</p>
        <ul>
          <li>Gửi thông tin sai sự thật, mạo danh người khác hoặc doanh nghiệp khác qua form liên hệ.</li>
          <li>Gửi thư rác, nội dung quảng cáo, nội dung vi phạm pháp luật hoặc chứa mã độc.</li>
          <li>Can thiệp vào hoạt động của website: dò quét lỗ hổng, tấn công từ chối dịch vụ, vượt qua biện pháp bảo mật, truy cập trái phép hệ thống.</li>
          <li>Dùng công cụ tự động để gửi form hàng loạt hoặc tải nội dung với tần suất gây ảnh hưởng tới website.</li>
          <li>Sử dụng website cho mục đích trái pháp luật Việt Nam hoặc pháp luật nơi bạn cư trú.</li>
        </ul>
        <p>
          SOHO có quyền chặn truy cập, từ chối xử lý yêu cầu và thực hiện các biện pháp pháp lý cần thiết đối với hành vi vi phạm.
        </p>
      </>
    )
  },
  {
    id: 'form-lien-he',
    title: 'Form liên hệ và yêu cầu tư vấn',
    body: (
      <>
        <p>
          Gửi form liên hệ là đề nghị trao đổi, <strong>không tạo ra hợp đồng</strong> giữa bạn và SOHO. SOHO cố gắng phản hồi trong thời gian làm việc ({company.hours})
          nhưng không cam kết thời hạn phản hồi và có quyền từ chối yêu cầu không phù hợp với phạm vi dịch vụ.
        </p>
        <p>
          Đề xuất, báo giá hoặc bản ghi chú SOHO gửi sau buổi trao đổi là tài liệu để bạn cân nhắc, chỉ có giá trị trong thời hạn ghi trên tài liệu và chỉ ràng
          buộc hai bên khi được đưa vào hợp đồng dịch vụ ký kết. Việc xử lý dữ liệu cá nhân bạn gửi qua form theo{' '}
          <a href={sitePath('/chinh-sach-bao-mat/')}>Chính sách bảo mật</a>.
        </p>
      </>
    )
  },
  {
    id: 'lien-ket',
    title: 'Liên kết tới website của bên thứ ba',
    body: (
      <p>
        Website có liên kết tới website của khách hàng, nền tảng, cơ quan nhà nước và nguồn tham khảo. Các liên kết này được cung cấp để tiện tra cứu. SOHO
        không kiểm soát và không chịu trách nhiệm về nội dung, tính chính xác, chính sách bảo mật hay hoạt động của các website đó. Việc có liên kết không
        hàm ý SOHO xác nhận nội dung của website được liên kết.
      </p>
    )
  },
  {
    id: 'mien-tru',
    title: 'Miễn trừ và giới hạn trách nhiệm',
    body: (
      <>
        <p>
          Website được cung cấp theo hiện trạng. SOHO cố gắng duy trì website hoạt động ổn định và nội dung chính xác, nhưng không bảo đảm website không có
          lỗi, không bị gián đoạn, hoặc nội dung luôn đầy đủ, cập nhật và phù hợp với mục đích của bạn.
        </p>
        <p>
          Trong phạm vi pháp luật cho phép, SOHO không chịu trách nhiệm đối với thiệt hại gián tiếp, thiệt hại do mất lợi nhuận, mất dữ liệu hoặc gián đoạn kinh
          doanh phát sinh từ việc bạn sử dụng hoặc không thể sử dụng website, hoặc từ việc bạn dựa vào nội dung trên website để ra quyết định.
        </p>
        <p>
          Điều khoản này không loại trừ hay hạn chế trách nhiệm mà pháp luật Việt Nam không cho phép loại trừ, bao gồm trách nhiệm đối với thiệt hại do lỗi cố
          ý của SOHO và các quyền của người tiêu dùng theo Luật Bảo vệ quyền lợi người tiêu dùng. Trách nhiệm của SOHO trong việc cung cấp dịch vụ được quy
          định riêng trong hợp đồng dịch vụ.
        </p>
      </>
    )
  },
  {
    id: 'thay-doi',
    title: 'Thay đổi điều khoản và website',
    body: (
      <p>
        SOHO có thể sửa điều khoản này bất cứ lúc nào. Bản sửa có hiệu lực kể từ ngày ghi ở đầu trang và được đăng tại{' '}
        <a href={sitePath('/dieu-khoan-su-dung/')}>sohoagency.vn/dieu-khoan-su-dung</a>. Việc bạn tiếp tục sử dụng website sau ngày đó là chấp nhận bản sửa.
        SOHO cũng có thể thay đổi, tạm ngừng hoặc chấm dứt một phần hay toàn bộ website mà không cần báo trước.
      </p>
    )
  },
  {
    id: 'luat-ap-dung',
    title: 'Luật áp dụng và giải quyết tranh chấp',
    body: (
      <>
        <p>Điều khoản này được điều chỉnh và giải thích theo pháp luật nước Cộng hòa xã hội chủ nghĩa Việt Nam.</p>
        <p>
          Mọi tranh chấp phát sinh từ hoặc liên quan tới việc sử dụng website trước hết được giải quyết bằng thương lượng. Bạn gửi khiếu nại tới{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a>; SOHO phản hồi trong 7 ngày làm việc. Nếu không thương lượng được trong 30 ngày kể từ ngày
          một bên gửi thông báo tranh chấp bằng văn bản, tranh chấp được đưa ra Tòa án có thẩm quyền tại Thành phố Hồ Chí Minh, trừ trường hợp pháp luật về
          bảo vệ quyền lợi người tiêu dùng cho phép bạn chọn nơi giải quyết khác.
        </p>
        <p>
          Nếu một điều khoản bị cơ quan có thẩm quyền tuyên vô hiệu, các điều khoản còn lại vẫn giữ nguyên hiệu lực. Việc SOHO không thực hiện một quyền trong
          điều khoản này không có nghĩa là SOHO từ bỏ quyền đó.
        </p>
      </>
    )
  },
  {
    id: 'lien-he',
    title: 'Liên hệ',
    body: (
      <p>
        {LEGAL}
        <br />
        Địa chỉ: {company.address}
        <br />
        Email: <a href={`mailto:${company.email}`}>{company.email}</a>
        <br />
        Điện thoại: {company.phone}, {company.hours.toLowerCase()}
      </p>
    )
  }
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Điều khoản sử dụng"
      lead="Các điều khoản áp dụng khi bạn truy cập và sử dụng website của SOHO Agency: nội dung tham khảo, số liệu dự án, sở hữu trí tuệ, giới hạn trách nhiệm và luật áp dụng."
      updated={UPDATED}
      sections={sections}
    />
  );
}
