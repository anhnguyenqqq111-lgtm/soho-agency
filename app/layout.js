import localFont from 'next/font/local';
import './styles/tokens.css';
import './styles/base.css';
import './styles/diagram.css';
import './styles/sq.css';
import RevealObserver from '../components/RevealObserver';
import {siteUrl} from '../components/paths';

// Hai phông theo brief "SOHO Color & Typography" (DESIGN.md mục 2.3), cả hai có bộ chữ tiếng Việt riêng và đã qua bài thử ẾỨỠẶẰ.
// Bricolage Grotesque: tiêu đề H1 đến H3, số lớn (600 đến 800). Plus Jakarta Sans: nội dung và giao diện (400 đến 700).
// Tự host một file mỗi phông (app/fonts, bản variable chỉ trục độ đậm, gộp bảng chữ latin + tiếng Việt, giấy phép OFL kèm theo).
// Lý do bỏ next/font/google (31/10/2026): Google chia phông thành subset latin / latin-ext / vietnamese, chữ tiếng Việt khớp cả
// latin-ext nên mỗi trang tải 6 file phông (124 KB), 2 file trong đó không được preload và về muộn. Gộp lại còn 2 file, 59 KB.
// Tạo lại file: fonttools subset từ bản variable trên github.com/google/fonts, unicode theo subset latin + vietnamese của Google,
// Bricolage ghim opsz 14 và wdth 100, giữ wght 400–800; Jakarta giữ wght 400–700.
const display = localFont({
  src: './fonts/bricolage-grotesque-latin-vi.woff2',
  weight: '400 800',
  display: 'swap',
  variable: '--font-bricolage'
});

const text = localFont({
  src: './fonts/plus-jakarta-sans-latin-vi.woff2',
  weight: '400 700',
  display: 'swap',
  variable: '--font-jakarta'
});

// Favicon và icon theo quy ước file của Next: app/icon.svg, icon.png, apple-icon.png, favicon.ico (logo Open Corner trên nền Midnight)
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SOHO Agency | SEO, quảng cáo và website cho doanh nghiệp TP.HCM',
    template: '%s | SOHO Agency'
  },
  description:
    'SOHO Agency làm SEO, Google Ads, Facebook Ads, website, thương hiệu và mobile app cho doanh nghiệp ở TP.HCM. Google Partner 2026. Báo cáo bằng doanh thu.',
  alternates: {canonical: '/'},
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'SOHO Agency',
    images: [{url: '/og/soho-og-v2.png', width: 1200, height: 630, alt: 'SOHO Agency: từ tìm kiếm đến doanh thu'}]
  },
  twitter: {card: 'summary_large_image'},
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
