import {Fraunces, Be_Vietnam_Pro} from 'next/font/google';
import './styles/tokens.css';
import './styles/base.css';
import './styles/diagram.css';
import RevealObserver from '../components/RevealObserver';
import {siteUrl} from '../components/paths';

// Hai phông theo DESIGN.md mục 2.3, cả hai đã qua bài thử ẾỨỠẶẰ (không mượn nét phông khác).
// Fraunces: tiêu đề H1/H2 và chữ nhấn nghiêng. Be Vietnam Pro: nội dung, giao diện, H3 trở xuống.
// Chỉ nạp đúng các kiểu đang dùng: Fraunces 500 (thường + nghiêng cho .hl), Be Vietnam Pro 400/500/600.
// Bản trước nạp cả trục opsz và mọi kiểu nghiêng: 27 file, ~500 KB, kéo LCP lên 5,8 giây.
const display = Fraunces({
  subsets: ['latin', 'vietnamese'],
  weight: ['500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-fraunces'
});

const text = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'],
  display: 'swap',
  preload: false,
  variable: '--font-bvp'
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SOHO Agency | SEO, quảng cáo và website cho doanh nghiệp TP.HCM',
    template: '%s | SOHO Agency'
  },
  description: 'SOHO Agency làm SEO, Google Ads, Facebook Ads, thiết kế website, nhận diện thương hiệu và mobile app cho doanh nghiệp vừa và nhỏ ở TP.HCM. Google Partner 2026. Báo cáo bằng khách hàng và doanh thu.',
  alternates: {canonical: '/'},
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'SOHO Agency',
    images: [{url: '/og/soho-og.png', width: 1200, height: 630, alt: 'SOHO Agency: SEO, quảng cáo và website cho doanh nghiệp TP.HCM'}]
  },
  twitter: {card: 'summary_large_image'},
  robots: {index: true, follow: true},
  formatDetection: {telephone: false}
};

export const viewport = {themeColor: '#FFFFFF'};

export default function RootLayout({children}){
  return (
    <html lang="vi" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: "document.documentElement.classList.add('js')"}}/>
      </head>
      <body id="top">
        <a href="#main" className="skip-link">Bỏ qua, tới nội dung chính</a>
        {children}
        <RevealObserver/>
      </body>
    </html>
  );
}
