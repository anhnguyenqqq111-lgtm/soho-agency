import LegalPage from '../../components/LegalPage';
import Fill from '../../components/ui/Fill';
import {company} from '../../components/data/company';
import {sitePath} from '../../components/paths';

export const metadata = {
  title: 'Điều khoản sử dụng',
  description: 'Điều khoản sử dụng website của SOHO Agency.'
};

const sections = [
  {
    id: 'chap-nhan',
    title: 'Chấp nhận điều khoản',
    body: (
      <p>
        Website này do <Fill value={company.legalName} need="CẦN TÊN PHÁP NHÂN"/> (SOHO) vận hành. Khi truy cập website, bạn đồng ý với các điều khoản dưới đây. Điều khoản này chỉ áp dụng cho việc sử dụng website; việc cung cấp dịch vụ được quy định trong hợp đồng riêng giữa SOHO và khách hàng.
      </p>
    )
  },
  {
    id: 'noi-dung',
    title: 'Nội dung trên website',
    body: (
      <p>
        Bài viết, hướng dẫn và số liệu trên website mang tính tham khảo, không phải cam kết kết quả cho một dự án cụ thể. Kết quả thực tế phụ thuộc vào ngành, ngân sách, nền tảng hiện tại và thời gian triển khai.
      </p>
    )
  },
  {
    id: 'so-huu-tri-tue',
    title: 'Sở hữu trí tuệ',
    body: (
      <p>
        Nội dung, hình ảnh và nhận diện thương hiệu SOHO trên website thuộc quyền sở hữu của SOHO hoặc được sử dụng với sự cho phép của chủ sở hữu. Logo và tên khách hàng thuộc về doanh nghiệp tương ứng. Bạn có thể trích dẫn nội dung với điều kiện ghi rõ nguồn và dẫn link về bài gốc.
      </p>
    )
  },
  {
    id: 'thong-tin-ca-nhan',
    title: 'Thông tin cá nhân',
    body: (
      <p>
        Việc thu thập và xử lý thông tin bạn gửi qua website được mô tả trong <a href={sitePath('/chinh-sach-bao-mat')}>Chính sách bảo mật</a>.
      </p>
    )
  },
  {
    id: 'lien-ket',
    title: 'Liên kết đến website khác',
    body: (
      <p>
        Website có liên kết tới website của khách hàng và bên thứ ba. SOHO không chịu trách nhiệm về nội dung và chính sách của các website đó.
      </p>
    )
  },
  {
    id: 'thay-doi',
    title: 'Thay đổi điều khoản',
    body: (
      <p>
        SOHO có thể cập nhật điều khoản này. Ngày cập nhật mới nhất được ghi ở đầu trang.
      </p>
    )
  },
  {
    id: 'luat-ap-dung',
    title: 'Luật áp dụng',
    body: (
      <p>
        Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. <Fill value={null} need="CẦN PHÁP CHẾ XÁC NHẬN cơ quan giải quyết tranh chấp"/>
      </p>
    )
  }
];

export default function TermsPage(){
  return (
    <LegalPage
      title="Điều khoản sử dụng"
      lead="Các điều khoản áp dụng khi bạn truy cập và sử dụng website SOHO Agency."
      updated={null}
      sections={sections}
    />
  );
}
