import LegalPage from '../../components/LegalPage';
import Fill from '../../components/ui/Fill';
import {company} from '../../components/data/company';

export const metadata = {
  title: 'Chính sách bảo mật',
  description: 'Cách SOHO Agency thu thập, sử dụng và bảo vệ thông tin cá nhân bạn gửi qua website.'
};

const Legal = () => <Fill value={company.legalName} need="CẦN TÊN PHÁP NHÂN"/>;

const sections = [
  {
    id: 'pham-vi',
    title: 'Phạm vi áp dụng',
    body: (
      <p>
        Chính sách này áp dụng cho thông tin cá nhân mà <Legal/> (sau đây gọi là SOHO) thu thập qua website này, bao gồm form liên hệ và email gửi trực tiếp cho SOHO. Chính sách không áp dụng cho dữ liệu SOHO xử lý thay mặt khách hàng trong quá trình triển khai dịch vụ; phần đó được quy định trong hợp đồng dịch vụ.
      </p>
    )
  },
  {
    id: 'thong-tin-thu-thap',
    title: 'Thông tin SOHO thu thập',
    body: (
      <>
        <p>Khi bạn gửi form liên hệ, SOHO nhận các thông tin sau:</p>
        <ul>
          <li>Website doanh nghiệp</li>
          <li>Họ và tên</li>
          <li>Email công việc</li>
          <li>Số điện thoại, nếu bạn cung cấp</li>
          <li>Mục tiêu bạn chọn và ghi chú bạn viết thêm</li>
        </ul>
        <p>
          Website có thể sử dụng cookie và công cụ đo lường truy cập <Fill value={null} need="CẦN LIỆT KÊ CÔNG CỤ THỰC TẾ, ví dụ Google Analytics 4, Meta Pixel, hoặc ghi rõ là không dùng"/>.
        </p>
      </>
    )
  },
  {
    id: 'muc-dich',
    title: 'Mục đích sử dụng',
    body: (
      <ul>
        <li>Liên hệ lại để trao đổi về nhu cầu bạn gửi.</li>
        <li>Chuẩn bị đề xuất dịch vụ phù hợp với website và mục tiêu của bạn.</li>
        <li>Gửi thông tin liên quan đến yêu cầu của bạn. SOHO không gửi email marketing nếu bạn không đồng ý.</li>
      </ul>
    )
  },
  {
    id: 'luu-tru',
    title: 'Lưu trữ và thời gian lưu',
    body: (
      <p>
        Thông tin được lưu tại <Fill value={null} need="CẦN NƠI LƯU TRỮ, ví dụ CRM, Google Workspace"/> và giữ trong <Fill value={null} need="CẦN THỜI HẠN LƯU"/>. Hết thời hạn này, hoặc khi bạn yêu cầu, SOHO xóa thông tin của bạn.
      </p>
    )
  },
  {
    id: 'chia-se',
    title: 'Chia sẻ thông tin',
    body: (
      <p>
        SOHO không bán hoặc cho thuê thông tin cá nhân. Thông tin chỉ được chia sẻ với nhà cung cấp dịch vụ kỹ thuật cần thiết để vận hành website và lưu trữ dữ liệu <Fill value={null} need="CẦN LIỆT KÊ"/>, hoặc khi cơ quan nhà nước có thẩm quyền yêu cầu theo quy định pháp luật.
      </p>
    )
  },
  {
    id: 'quyen',
    title: 'Quyền của bạn',
    body: (
      <>
        <p>Bạn có quyền yêu cầu SOHO:</p>
        <ul>
          <li>Cho biết SOHO đang lưu thông tin gì về bạn.</li>
          <li>Sửa thông tin không chính xác.</li>
          <li>Xóa thông tin hoặc ngừng liên hệ với bạn.</li>
          <li>Rút lại sự đồng ý đã đưa ra khi gửi form.</li>
        </ul>
        <p>
          Gửi yêu cầu tới <a href={`mailto:${company.email}`}>{company.email}</a>. SOHO phản hồi trong <Fill value={null} need="CẦN THỜI HẠN PHẢN HỒI"/>.
        </p>
      </>
    )
  },
  {
    id: 'bao-mat',
    title: 'Bảo mật thông tin',
    body: (
      <p>
        <Fill value={null} need="CẦN MÔ TẢ BIỆN PHÁP THỰC TẾ, ví dụ phân quyền truy cập, mật khẩu hai lớp cho tài khoản lưu dữ liệu"/>
      </p>
    )
  },
  {
    id: 'lien-he',
    title: 'Liên hệ',
    body: (
      <p>
        <Legal/><br/>
        Địa chỉ: <Fill value={company.address} need="CẦN ĐỊA CHỈ"/><br/>
        Mã số thuế: <Fill value={company.taxId} need="CẦN MÃ SỐ THUẾ"/><br/>
        Email: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>
    )
  }
];

export default function PrivacyPage(){
  return (
    <LegalPage
      title="Chính sách bảo mật"
      lead="SOHO thu thập thông tin gì khi bạn liên hệ qua website, dùng vào việc gì và bạn có quyền gì với thông tin đó."
      updated={null}
      sections={sections}
    />
  );
}
