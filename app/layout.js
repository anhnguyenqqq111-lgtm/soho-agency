import {Bricolage_Grotesque, Plus_Jakarta_Sans} from 'next/font/google';
import './styles/tokens.css';
import './styles/base.css';
import './styles/diagram.css';
import RevealObserver from '../components/RevealObserver';
import {siteUrl} from '../components/paths';

// Hai phông theo brief "SOHO Color & Typography" (DESIGN.md mục 2.3), cả hai có bộ chữ tiếng Việt riêng và đã qua bài thử ẾỨỠẶẰ.
// Bricolage Grotesque: tiêu đề H1 đến H3, số lớn (600 đến 800). Plus Jakarta Sans: nội dung và giao diện (400 đến 700).
// Nạp bản variable, chỉ trục độ đậm: mỗi phông 2 file (latin + vietnamese), thay cho một file mỗi độ đậm.
// Preload cả hai: phần tử LCP của trang chủ là H1 (Bricolage) hoặc đoạn mô tả hero (Jakarta) tùy khổ màn hình.
// Đo Sprint 1: preload thêm Jakarta giảm LCP mobile 3,3 → 3,2 giây; phông này trang nào cũng tải nên không tốn thêm.
const display = Bricolage_Grotesque({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-bricolage'
});

const text = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-jakarta'
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SOHO Agency | SEO, quảng cáo và website cho doanh nghiệp TP.HCM',
    template: '%s | SOHO Agency'
  },
  description:
    'SOHO Agency làm SEO, Google Ads, Facebook Ads, thiết kế website, nhận diện thương hiệu và mobile app cho doanh nghiệp vừa và nhỏ ở TP.HCM. Google Partner 2026. Báo cáo bằng khách hàng và doanh thu.',
  alternates: {canonical: '/'},
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'SOHO Agency',
    images: [{url: '/og/soho-og-v2.png', width: 1200, height: 630, alt: 'SOHO Agency: từ tìm kiếm đến doanh thu'}]
  },
  twitter: {card: 'summary_large_image'},
  icons: {
    icon: [
      {url: '/assets/brand/favicon.svg', type: 'image/svg+xml'},
      {url: '/assets/brand/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
      {url: '/assets/brand/favicon-16x16.png', sizes: '16x16', type: 'image/png'}
    ],
    apple: [{url: '/assets/brand/apple-touch-icon.png', sizes: '180x180', type: 'image/png'}]
  },
  robots: {index: true, follow: true},
  formatDetection: {telephone: false}
};

export const viewport = {themeColor: '#FFFFFF'};

export default function RootLayout({children}) {
  return (
    <html lang="vi" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: "document.documentElement.classList.add('js')"}} />
      </head>
      <body id="top">
        <a href="#main" className="skip-link">
          Bỏ qua, tới nội dung chính
        </a>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
