import {notFound} from 'next/navigation';
import ServicePage, {serviceMetadata} from '../../components/pages/ServicePage';
import BlogPostPage, {postMetadata} from '../../components/pages/BlogPostPage';
import {servicePages, getServicePage} from '../../components/servicePagesData';
import {articles} from '../../components/blogData';

/*
  Trang dịch vụ và bài blog dùng chung một route ở gốc: /seo-tong-the/, /framework-seo-8-buoc/ (bỏ tiền tố /dich-vu/, /blog/).
  Slug dịch vụ và slug bài viết không được trùng nhau, cũng không trùng thư mục trang cố định trong app/ (ve-soho, lien-he...):
  build sẽ dừng nếu trùng. URL cũ /dich-vu/<slug>/ và /blog/<slug>/ chuyển hướng 301 trong vercel.json.
*/
export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = [...servicePages.map(s => s.slug), ...articles.map(a => a.slug)];
  const dup = slugs.filter((s, i) => slugs.indexOf(s) !== i);
  if (dup.length) throw new Error(`Slug dịch vụ và bài viết bị trùng: ${dup.join(', ')}`);
  return slugs.map(slug => ({slug}));
}

export async function generateMetadata({params}) {
  const {slug} = await params;
  return getServicePage(slug) ? serviceMetadata(slug) : postMetadata(slug);
}

export default async function Page({params}) {
  const {slug} = await params;
  if (getServicePage(slug)) return <ServicePage slug={slug} />;
  if (articles.some(a => a.slug === slug)) return <BlogPostPage slug={slug} />;
  notFound();
}
