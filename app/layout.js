import {Bricolage_Grotesque, Plus_Jakarta_Sans} from 'next/font/google';
import './styles/tokens.css';
import './styles/base.css';
import './styles/diagram.css';
import RevealObserver from '../components/RevealObserver';
import {siteUrl} from '../components/paths';

// Hai phông theo brief "SOHO Color & Typography" (DESIGN.md mục 2.3), cả hai có bộ chữ tiếng Việt riêng và đã qua bài thử ẾỨỠẶẰ.
// Bricolage Grotesque: tiêu đề H1 đến H3, số lớn (600 đến 800). Plus Jakarta Sans: nội dung và giao diện (400 đến 700).
// Nạp bản variable, chỉ trục độ đậm: mỗi phông 2 file (latin + vietnamese), thay cho một file mỗi độ đậm.
// Chỉ preload phông tiêu đề vì H1 là phần tử LCP; phông nội dung hiện bằng phông dự phòng đã chỉnh số đo rồi đổi (display: swap).
const display = Bricolage_Grotesque({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-bricolage'
});

const text = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  preload: false,
  variable: '--font-jakarta'
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
