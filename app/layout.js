import {Be_Vietnam_Pro} from 'next/font/google';
import './styles/tokens.css';
import './styles/base.css';
import './styles/diagram.css';
import RevealObserver from '../components/RevealObserver';

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-be-vietnam'
});

export const metadata = {
  title: {
    default: 'SOHO Agency | Performance marketing đo bằng lead và doanh thu',
    template: '%s | SOHO Agency'
  },
  description: 'SOHO Agency lập kế hoạch và triển khai SEO, AI Search, Google Ads, Meta Ads, content và đo lường GA4, báo cáo theo lead và doanh thu.'
};

export default function RootLayout({children}){
  return (
    <html lang="vi" className={beVietnam.variable} suppressHydrationWarning>
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
