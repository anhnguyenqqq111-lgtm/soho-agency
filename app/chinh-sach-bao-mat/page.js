import LegalPage from '../../components/LegalPage';
import {company} from '../../components/data/company';
import {sitePath} from '../../components/paths';

export const metadata = {
  alternates: {canonical: '/chinh-sach-bao-mat/'},
  title: 'Chính sách bảo mật',
  description: 'SOHO Agency thu thập dữ liệu cá nhân nào qua website, dùng vào việc gì, lưu bao lâu, chia sẻ với ai và bạn có quyền gì theo Luật Bảo vệ dữ liệu cá nhân 2025.'
};

/*
  Chính sách bảo vệ dữ liệu cá nhân cho website. Viết theo cách website đang vận hành thật (31/10/2026):
  - Form liên hệ: gửi tới máy chủ nhận form khi SOHO cấu hình NEXT_PUBLIC_FORM_ENDPOINT, còn lại mở ứng dụng email của người gửi.
  - Website tĩnh, không đặt cookie theo dõi, không Meta Pixel; hàm track() chỉ chạy khi SOHO cài Google Analytics.
  - Hosting: Vercel và GitHub Pages, máy chủ ngoài Việt Nam.
  Khi đổi cách vận hành (nối CRM, bật GA4, thêm Pixel) phải sửa mục 3, 4, 6 và ngày cập nhật.
*/
const UPDATED = '31/10/2026';
const LEGAL = company.legalName;

const sections = [
  {
    id: 'pham-vi',
    title: 'Phạm vi và căn cứ',
    body: (
      <>
        <p>
          Chính sách này do {LEGAL} (sau đây gọi là “SOHO”) ban hành, áp dụng cho dữ liệu cá nhân SOHO thu thập và xử lý khi bạn truy cập website này, gửi
          form liên hệ, gửi email hoặc gọi điện tới SOHO qua thông tin trên website.
        </p>
        <p>
          Chính sách không áp dụng cho dữ liệu SOHO xử lý thay mặt khách hàng trong quá trình thực hiện dịch vụ (ví dụ dữ liệu trong tài khoản quảng cáo,
          Google Analytics hay website của khách). Việc xử lý đó được quy định trong hợp đồng dịch vụ và thỏa thuận xử lý dữ liệu ký riêng với từng khách hàng,
          trong đó SOHO là bên xử lý dữ liệu theo chỉ dẫn của khách hàng.
        </p>
        <p>
          Chính sách được xây dựng theo Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 (có hiệu lực từ ngày 01/01/2026) và các văn bản hướng dẫn thi hành, Luật
          An ninh mạng số 24/2018/QH12, Luật Giao dịch điện tử số 20/2023/QH15 và Bộ luật Dân sự số 91/2015/QH13. Trong chính sách này, “dữ liệu cá nhân”,
          “chủ thể dữ liệu”, “xử lý dữ liệu” được hiểu theo định nghĩa của Luật Bảo vệ dữ liệu cá nhân.
        </p>
      </>
    )
  },
  {
    id: 'ben-kiem-soat',
    title: 'Bên kiểm soát và xử lý dữ liệu',
    body: (
      <p>
        Đối với dữ liệu thu thập qua website này, SOHO là bên kiểm soát và xử lý dữ liệu cá nhân. Thông tin liên hệ: {LEGAL}, địa chỉ {company.address}, email{' '}
        <a href={`mailto:${company.email}`}>{company.email}</a>, điện thoại {company.phone}. Mọi yêu cầu liên quan đến dữ liệu cá nhân gửi về email này với
        tiêu đề “Dữ liệu cá nhân”.
      </p>
    )
  },
  {
    id: 'du-lieu-thu-thap',
    title: 'Dữ liệu cá nhân SOHO thu thập',
    body: (
      <>
        <p>
          <strong>Dữ liệu bạn chủ động cung cấp</strong> khi gửi form liên hệ hoặc email:
        </p>
        <ul>
          <li>Họ và tên.</li>
          <li>Email hoặc số điện thoại để liên hệ lại.</li>
          <li>Dịch vụ bạn quan tâm và nội dung bạn mô tả về nhu cầu, website, kênh đang chạy, ngân sách dự kiến (nếu bạn ghi).</li>
          <li>Trang bạn đang xem khi gửi form và thời điểm gửi, để SOHO biết bạn quan tâm dịch vụ nào.</li>
        </ul>
        <p>
          Form không yêu cầu và SOHO đề nghị bạn không gửi dữ liệu cá nhân nhạy cảm (ví dụ thông tin sức khỏe, tài chính cá nhân, số giấy tờ tùy thân) qua
          website. Nếu bạn vẫn gửi, SOHO sẽ xóa phần dữ liệu đó khi tiếp nhận.
        </p>
        <p>
          <strong>Dữ liệu kỹ thuật phát sinh khi truy cập:</strong> địa chỉ IP, loại trình duyệt và thiết bị, trang được truy cập, thời điểm truy cập. Dữ liệu
          này nằm trong nhật ký máy chủ của nhà cung cấp hạ tầng (mục 6), được dùng để vận hành, bảo mật và chống tấn công, không dùng để nhận diện cá nhân bạn.
        </p>
        <p>
          <strong>Website không thu thập dữ liệu từ nguồn khác</strong> và không mua dữ liệu từ bên thứ ba.
        </p>
      </>
    )
  },
  {
    id: 'cookie',
    title: 'Cookie và công cụ đo lường',
    body: (
      <>
        <p>
          Website này là website tĩnh. Tại thời điểm cập nhật chính sách, website <strong>không đặt cookie theo dõi</strong>, không dùng Meta Pixel, TikTok
          Pixel hay công cụ quảng cáo bám đuổi, và không lưu dữ liệu trên trình duyệt của bạn ngoài những gì trình duyệt tự lưu để hiển thị trang.
        </p>
        <p>
          Nếu SOHO bật công cụ đo lường truy cập (ví dụ Google Analytics 4), SOHO sẽ cập nhật mục này với tên công cụ, loại dữ liệu thu thập, thời gian lưu
          và cách bạn từ chối, trước khi công cụ bắt đầu chạy. Bạn luôn có thể chặn cookie trong cài đặt trình duyệt; website vẫn hoạt động bình thường.
        </p>
      </>
    )
  },
  {
    id: 'muc-dich-can-cu',
    title: 'Mục đích và căn cứ xử lý',
    body: (
      <>
        <p>SOHO chỉ xử lý dữ liệu cá nhân cho các mục đích sau, và không dùng vào mục đích khác nếu chưa thông báo và được bạn đồng ý:</p>
        <div className="tableWrap" tabIndex={0} role="region" aria-label="Bảng mục đích và căn cứ xử lý">
        <table>
          <thead>
            <tr>
              <th>Mục đích</th>
              <th>Dữ liệu dùng</th>
              <th>Căn cứ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Liên hệ lại, tư vấn và gửi đề xuất dịch vụ theo yêu cầu bạn gửi</td>
              <td>Họ tên, email hoặc số điện thoại, nội dung yêu cầu</td>
              <td>Sự đồng ý của bạn khi gửi form (ô xác nhận trên form) hoặc khi bạn chủ động gửi email, gọi điện</td>
            </tr>
            <tr>
              <td>Soạn và thực hiện hợp đồng dịch vụ nếu hai bên hợp tác</td>
              <td>Thông tin liên hệ, thông tin doanh nghiệp bạn cung cấp</td>
              <td>Cần thiết để giao kết và thực hiện hợp đồng</td>
            </tr>
            <tr>
              <td>Vận hành, bảo mật website, chống tấn công và lạm dụng</td>
              <td>Dữ liệu kỹ thuật trong nhật ký máy chủ</td>
              <td>Lợi ích hợp pháp của SOHO trong việc bảo đảm an toàn hệ thống</td>
            </tr>
            <tr>
              <td>Tuân thủ nghĩa vụ pháp lý, giải quyết tranh chấp, khiếu nại</td>
              <td>Dữ liệu liên quan đến yêu cầu hoặc tranh chấp</td>
              <td>Nghĩa vụ theo pháp luật</td>
            </tr>
          </tbody>
        </table>
        </div>
        <p>
          SOHO <strong>không gửi email hay tin nhắn quảng cáo</strong> cho bạn nếu bạn chưa đồng ý riêng cho việc đó. Khi SOHO có gửi thông tin định kỳ, mỗi email
          đều có cách hủy nhận ngay trong email.
        </p>
      </>
    )
  },
  {
    id: 'chia-se',
    title: 'Chia sẻ dữ liệu và bên xử lý thay mặt SOHO',
    body: (
      <>
        <p>SOHO không bán, cho thuê hay trao đổi dữ liệu cá nhân của bạn. Dữ liệu chỉ được chia sẻ trong các trường hợp sau:</p>
        <ul>
          <li>
            <strong>Nhà cung cấp hạ tầng website:</strong> website được lưu trữ và phân phối qua Vercel và GitHub Pages. Các nhà cung cấp này xử lý nhật ký
            truy cập kỹ thuật trên máy chủ đặt ngoài Việt Nam, theo điều khoản bảo mật của họ.
          </li>
          <li>
            <strong>Dịch vụ thư điện tử:</strong> nội dung form liên hệ được chuyển tới hộp thư điện tử công ty của SOHO. Nếu bạn gửi bằng ứng dụng email của
            mình, nội dung đi qua nhà cung cấp email của bạn và của SOHO.
          </li>
          <li>
            <strong>Máy chủ nhận form:</strong> khi SOHO sử dụng dịch vụ nhận form, dữ liệu form được lưu tạm trên dịch vụ đó trước khi chuyển về SOHO. SOHO chỉ
            chọn dịch vụ có cam kết bảo mật bằng văn bản và sẽ ghi tên dịch vụ tại mục này.
          </li>
          <li>
            <strong>Cơ quan nhà nước có thẩm quyền:</strong> khi có yêu cầu hợp pháp bằng văn bản theo quy định của pháp luật Việt Nam.
          </li>
          <li>
            <strong>Tư vấn pháp lý, kế toán, kiểm toán của SOHO:</strong> trong phạm vi cần thiết để thực hiện nghĩa vụ pháp lý hoặc bảo vệ quyền lợi hợp pháp của
            SOHO, với nghĩa vụ bảo mật tương đương.
          </li>
        </ul>
        <p>
          <strong>Chuyển dữ liệu ra nước ngoài:</strong> do hạ tầng website và một số dịch vụ nêu trên đặt máy chủ ngoài Việt Nam, dữ liệu kỹ thuật và nội dung
          form có thể được lưu trữ hoặc xử lý ngoài lãnh thổ Việt Nam. SOHO thực hiện các nghĩa vụ về chuyển dữ liệu cá nhân ra nước ngoài theo Luật Bảo vệ
          dữ liệu cá nhân và văn bản hướng dẫn, chỉ dùng nhà cung cấp có cam kết bảo mật, và không chuyển dữ liệu cho mục đích nào khác ngoài mục 5.
        </p>
      </>
    )
  },
  {
    id: 'luu-tru',
    title: 'Thời gian lưu trữ',
    body: (
      <ul>
        <li>
          <strong>Yêu cầu liên hệ chưa dẫn tới hợp đồng:</strong> lưu tối đa 24 tháng kể từ lần trao đổi cuối cùng, sau đó xóa hoặc ẩn danh hóa. Bạn có thể yêu
          cầu xóa sớm hơn bất cứ lúc nào.
        </li>
        <li>
          <strong>Dữ liệu gắn với hợp đồng dịch vụ:</strong> lưu trong thời gian hợp đồng còn hiệu lực và thời hạn lưu trữ chứng từ theo pháp luật về kế toán,
          thuế và dân sự.
        </li>
        <li>
          <strong>Nhật ký máy chủ:</strong> theo chu kỳ của nhà cung cấp hạ tầng, thường không quá 90 ngày.
        </li>
        <li>
          <strong>Dữ liệu liên quan đến tranh chấp:</strong> lưu cho tới khi tranh chấp được giải quyết xong và hết thời hiệu khởi kiện.
        </li>
      </ul>
    )
  },
  {
    id: 'bao-ve',
    title: 'Biện pháp bảo vệ',
    body: (
      <>
        <p>SOHO áp dụng các biện pháp sau để bảo vệ dữ liệu cá nhân:</p>
        <ul>
          <li>Website chỉ phục vụ qua kết nối mã hóa HTTPS.</li>
          <li>Tài khoản email và tài khoản quản trị liên quan bật xác thực hai lớp; chỉ nhân sự được phân công mới có quyền đọc yêu cầu liên hệ.</li>
          <li>Không lưu dữ liệu form trong mã nguồn hoặc kho mã công khai của website.</li>
          <li>Nhân sự SOHO có nghĩa vụ bảo mật theo hợp đồng lao động và quy định nội bộ; nhân sự nghỉ việc bị thu hồi quyền truy cập ngay.</li>
          <li>Dữ liệu được xóa khỏi hộp thư và các nơi lưu tạm khi hết thời hạn ở mục 7.</li>
        </ul>
        <p>
          <strong>Khi xảy ra sự cố lộ, mất dữ liệu cá nhân</strong>, SOHO thông báo cho cơ quan quản lý nhà nước có thẩm quyền trong thời hạn luật định và thông
          báo cho bạn nếu sự cố có thể ảnh hưởng tới quyền lợi của bạn, kèm các việc SOHO đã làm để khắc phục.
        </p>
      </>
    )
  },
  {
    id: 'quyen',
    title: 'Quyền của bạn',
    body: (
      <>
        <p>Theo Luật Bảo vệ dữ liệu cá nhân, bạn có các quyền sau đối với dữ liệu cá nhân của mình:</p>
        <ul>
          <li>
            <strong>Được biết</strong> SOHO thu thập dữ liệu gì, dùng vào việc gì, chia sẻ với ai: chính sách này là thông báo đó.
          </li>
          <li>
            <strong>Đồng ý và rút lại sự đồng ý</strong> bất cứ lúc nào. Việc rút lại không ảnh hưởng tới việc xử lý đã thực hiện hợp pháp trước đó.
          </li>
          <li>
            <strong>Truy cập, xem và nhận bản sao</strong> dữ liệu SOHO đang lưu về bạn.
          </li>
          <li>
            <strong>Chỉnh sửa</strong> dữ liệu chưa chính xác hoặc tự chỉnh sửa khi gửi lại thông tin.
          </li>
          <li>
            <strong>Xóa</strong> dữ liệu, trừ phần SOHO buộc phải lưu theo pháp luật hoặc để giải quyết tranh chấp đang có.
          </li>
          <li>
            <strong>Hạn chế hoặc phản đối</strong> việc xử lý, kể cả yêu cầu SOHO ngừng liên hệ.
          </li>
          <li>
            <strong>Khiếu nại, tố cáo, khởi kiện</strong> theo quy định pháp luật và <strong>yêu cầu bồi thường</strong> thiệt hại nếu SOHO vi phạm.
          </li>
        </ul>
        <p>
          <strong>Cách thực hiện:</strong> gửi email tới <a href={`mailto:${company.email}`}>{company.email}</a> từ chính địa chỉ email hoặc số điện thoại bạn đã
          dùng khi liên hệ, ghi rõ yêu cầu. SOHO có thể hỏi thêm để xác minh bạn là chủ thể dữ liệu. SOHO phản hồi chậm nhất 72 giờ kể từ khi nhận yêu cầu hợp
          lệ và không thu phí cho việc này.
        </p>
      </>
    )
  },
  {
    id: 'tre-em',
    title: 'Dữ liệu của người dưới 16 tuổi',
    body: (
      <p>
        Website và dịch vụ của SOHO dành cho doanh nghiệp và người đại diện doanh nghiệp, không hướng tới người dưới 16 tuổi. SOHO không cố ý thu thập dữ liệu
        của trẻ em. Nếu bạn cho rằng một người dưới 16 tuổi đã gửi dữ liệu cho SOHO, hãy báo qua email ở mục 2 để SOHO xóa.
      </p>
    )
  },
  {
    id: 'lien-ket-ngoai',
    title: 'Liên kết tới website khác',
    body: (
      <p>
        Website có liên kết tới website của khách hàng, nền tảng (Google, Meta, TikTok) và nguồn tham khảo. Khi bạn bấm sang các website đó, việc thu thập dữ
        liệu do chính sách của website đó điều chỉnh. SOHO không kiểm soát và không chịu trách nhiệm về cách họ xử lý dữ liệu.
      </p>
    )
  },
  {
    id: 'thay-doi',
    title: 'Thay đổi chính sách',
    body: (
      <p>
        SOHO có thể sửa chính sách này khi thay đổi cách vận hành website hoặc khi pháp luật thay đổi. Bản mới có hiệu lực kể từ ngày ghi ở đầu trang. Với thay
        đổi làm tăng phạm vi hoặc mục đích xử lý dữ liệu, SOHO xin lại sự đồng ý của bạn trước khi áp dụng. Bản đang có hiệu lực luôn đặt tại{' '}
        <a href={sitePath('/chinh-sach-bao-mat/')}>sohoagency.vn/chinh-sach-bao-mat</a>.
      </p>
    )
  },
  {
    id: 'lien-he',
    title: 'Liên hệ về dữ liệu cá nhân',
    body: (
      <p>
        {LEGAL}
        <br />
        Địa chỉ: {company.address}
        <br />
        Email: <a href={`mailto:${company.email}`}>{company.email}</a>
        <br />
        Điện thoại: {company.phone}, {company.hours.toLowerCase()}
        <br />
        Nếu không hài lòng với cách SOHO giải quyết, bạn có quyền khiếu nại tới cơ quan quản lý nhà nước về bảo vệ dữ liệu cá nhân theo quy định của pháp luật.
      </p>
    )
  }
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Chính sách bảo mật"
      lead="SOHO thu thập dữ liệu cá nhân nào khi bạn dùng website này, dùng vào việc gì, lưu bao lâu, chia sẻ với ai và bạn có quyền gì với dữ liệu đó."
      updated={UPDATED}
      sections={sections}
    />
  );
}
