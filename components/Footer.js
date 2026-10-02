'use client';

export default function Footer(){
  return (
    <footer>
      <div className="footerTop">
        <a className="logo lightLogo logoBrand" href="/">
          <img src="/brand/soho-logo-white.png" alt="SOHO Agency" className="logoImg footerLogoImg" />
        </a>
        <p>SOHO Agency - Đơn vị tư vấn và thực thi Digital Marketing tăng trưởng dựa trên dữ liệu & doanh thu thực tế.</p>
      </div>
      <div className="footerGrid">
        <div>
          <h4>Dịch vụ SOHO</h4>
          <a href="/dich-vu/seo-tong-the">SEO tổng thể</a>
          <a href="/dich-vu/seo-ai-overview">SEO & AI Search</a>
          <a href="/dich-vu/google-ads-shopping">Google Ads (Search & PMax)</a>
          <a href="/dich-vu/meta-tiktok-ads">Social Performance Ads</a>
          <a href="/dich-vu/content-marketing-pr">Content Marketing & PR</a>
        </div>
        <div>
          <h4>Khám phá & Kiến thức</h4>
          <a href="/giai-phap/quy-trinh-sprint-5-buoc">Cách chúng tôi làm</a>
          <a href="/ket-qua">Hiệu quả thực tế</a>
          <a href="/blog">Blog Marketing SOHO</a>
          <a href="/ve-soho">Về SOHO Agency</a>
        </div>
        <div>
          <h4>Liên hệ</h4>
          <a>hello@sohoagency.vn</a>
          <a>Hà Nội & TP. Hồ Chí Minh, Việt Nam</a>
        </div>
      </div>
      <div className="copyright">© 2026 SOHO Agency. Tất cả các quyền được bảo lưu.</div>
    </footer>
  );
}
