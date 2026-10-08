import {Newsreader, Be_Vietnam_Pro} from 'next/font/google';
import './globals.css';
import './styles/tokens.css';
import './styles/base.css';

const newsreader = Newsreader({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-newsreader'
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-be-vietnam'
});

export const metadata = {
  title: {
    default: 'SOHO Agency | SEO, quảng cáo và đo lường cho doanh nghiệp',
    template: '%s | SOHO Agency'
  },
  description: 'SOHO Agency lập kế hoạch và triển khai SEO, AI Search, Google Ads, Meta Ads, content và đo lường GA4, báo cáo theo lead và doanh thu.'
};

export default function RootLayout({children}){
  return (
    <html lang="vi" className={`${newsreader.variable} ${beVietnam.variable}`}>
      <body>{children}</body>
    </html>
  );
}
