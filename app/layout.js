import {Fraunces, Be_Vietnam_Pro} from 'next/font/google';
import './styles/tokens.css';
import './styles/base.css';
import './styles/diagram.css';
import RevealObserver from '../components/RevealObserver';

// Hai phông theo DESIGN.md mục 2.3, cả hai đã qua bài thử ẾỨỠẶẰ (không mượn nét phông khác).
// Fraunces: tiêu đề H1/H2 và chữ nhấn nghiêng. Be Vietnam Pro: nội dung, giao diện, H3 trở xuống.
const display = Fraunces({
  subsets: ['latin', 'vietnamese'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  display: 'swap',
  variable: '--font-fraunces'
});

const text = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-bvp'
});

export const metadata = {
  title: {
    default: 'SOHO Agency | SEO và quảng cáo cho doanh nghiệp TP.HCM, đo bằng doanh thu',
    template: '%s | SOHO Agency'
  },
  description: 'SOHO Agency làm SEO, quảng cáo Google, Meta, TikTok, nội dung và đo lường cho doanh nghiệp vừa và nhỏ ở TP.HCM. Google Partner 2026. Báo cáo bằng số đơn và doanh thu.'
};

export default function RootLayout({children}){
  return (
    <html lang="vi" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: "document.documentElement.classList.add('js')"}}/>
      </head>
      <body id="top">
        {children}
        <RevealObserver/>
      </body>
    </html>
  );
}
