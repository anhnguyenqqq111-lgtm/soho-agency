import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import LinkRows from '../components/ui/LinkRows';

export const metadata = {title: 'Không tìm thấy trang', robots: {index: false}};

// Trang 404: nói rõ chuyện gì xảy ra và đưa ra lối đi tiếp, không để người xem kẹt lại.
export default function NotFound(){
  return (
    <>
      <Header/>
      <main id="main">
        <Section spacing="lg">
          <h1 style={{maxWidth: '18ch'}}>Không tìm thấy trang này</h1>
          <p style={{marginTop: 16, fontSize: 18, color: 'var(--ink-2)', maxWidth: '52ch'}}>Đường dẫn có thể đã đổi khi SOHO làm lại website. Bạn thử một trong các trang dưới đây, hoặc liên hệ trực tiếp.</p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, margin: '28px 0 40px'}}>
            <Button href="/">Về trang chủ</Button>
            <Button href="/lien-he" variant="secondary" arrow="right">Nhận tư vấn</Button>
          </div>
          <LinkRows items={[
            {title: 'Dịch vụ', desc: 'SEO, quảng cáo, website, nhận diện thương hiệu, mobile app', href: '/dich-vu'},
            {title: 'Dự án', desc: 'Le Viva Resort, King Decor Luxury, Kronos, Helen Bridal', href: '/ket-qua'},
            {title: 'Blog', desc: 'Hướng dẫn từng bước về SEO, quảng cáo, đo lường', href: '/blog'}
          ]}/>
        </Section>
      </main>
      <Footer/>
    </>
  );
}
