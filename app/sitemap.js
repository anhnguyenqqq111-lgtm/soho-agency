import {siteUrl} from '../components/paths';
import {servicePages} from '../components/servicePagesData';
import {solutionPages} from '../components/solutionPagesData';
import {cases} from '../components/data/cases';
import {articles, toISODate} from '../components/blogData';

export const dynamic = 'force-static';

// Sitemap tự sinh từ dữ liệu: thêm dịch vụ, dự án, bài viết là sitemap tự cập nhật.
export default function sitemap() {
  const url = path => `${siteUrl}${path}`;
  const now = new Date();
  const pages = ['/', '/ve-soho/', '/dich-vu/', '/giai-phap/', '/ket-qua/', '/blog/', '/lien-he/', '/chinh-sach-bao-mat/', '/dieu-khoan-su-dung/'].map(
    (p, i) => ({url: url(p), lastModified: now, changeFrequency: 'monthly', priority: i === 0 ? 1 : 0.7})
  );
  return [
    ...pages,
    ...servicePages.map(s => ({url: url(`/dich-vu/${s.slug}/`), lastModified: now, changeFrequency: 'monthly', priority: 0.8})),
    ...solutionPages.map(s => ({url: url(`/giai-phap/${s.slug}/`), lastModified: now, changeFrequency: 'yearly', priority: 0.5})),
    ...cases.map(c => ({url: url(`/du-an/${c.slug}/`), lastModified: now, changeFrequency: 'yearly', priority: 0.6})),
    ...articles.map(a => ({url: url(`/blog/${a.slug}/`), lastModified: new Date(toISODate(a.date)), changeFrequency: 'yearly', priority: 0.6}))
  ];
}
