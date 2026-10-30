import {notFound} from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ServiceTemplate from '../../../components/sq/ServiceTemplate';
import {getServicePage, servicePages} from '../../../components/servicePagesData';
import {getServiceArticle} from '../../../components/serviceArticlesData';
import ReadingProgress from '../../../components/article/ReadingProgress';
import {siteUrl} from '../../../components/paths';

export function generateStaticParams() {
  return servicePages.map(service => ({slug: service.slug}));
}

export async function generateMetadata({params}) {
  const {slug} = await params;
  const service = getServicePage(slug);
  if (!service) return {title: 'Không tìm thấy dịch vụ'};
  const article = getServiceArticle(slug);
  return {
    title: article?.metaTitle ? {absolute: article.metaTitle} : service.menuTitle,
    description: article?.metaDesc || service.intro,
    alternates: {canonical: `/dich-vu/${service.slug}/`}
  };
}

export default async function ServicePage({params}) {
  const {slug} = await params;
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
