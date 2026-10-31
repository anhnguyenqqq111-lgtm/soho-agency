import {notFound} from 'next/navigation';
import Header from '../Header';
import Footer from '../Footer';
import ServiceTemplate from '../sq/ServiceTemplate';
import {getServicePage, servicePages} from '../servicePagesData';
import {getServiceArticle} from '../serviceArticlesData';
import ReadingProgress from '../article/ReadingProgress';
import {siteUrl, servicePath} from '../paths';

// Trang chi tiết dịch vụ. Route là app/[slug]/page.js (URL /<slug>/, không có tiền tố /dich-vu/), dùng chung với bài blog.
export function serviceMetadata(slug) {
  const service = getServicePage(slug);
  if (!service) return {title: 'Không tìm thấy dịch vụ'};
  const article = getServiceArticle(slug);
  return {
    title: article?.metaTitle ? {absolute: article.metaTitle} : service.menuTitle,
    description: article?.metaDesc || service.intro,
    alternates: {canonical: `${servicePath(service.slug)}/`}
  };
}

export default function ServicePage({slug}) {
  const service = getServicePage(slug);
  if (!service) notFound();
  const article = getServiceArticle(slug);
  const related = servicePages.filter(s => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.menuTitle,
    description: service.intro,
    serviceType: service.category,
    areaServed: 'VN',
    provider: {'@type': 'Organization', name: 'SOHO Agency', url: siteUrl}
  };

  return (
    <>
      <Header activeNav="services" />
      <ReadingProgress />
      <main id="main">
        <ServiceTemplate service={service} article={article} related={related} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceJsonLd)}} />
      </main>
      <Footer />
    </>
  );
}
