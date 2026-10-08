import {notFound} from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageHeader from '../../../components/ui/PageHeader';
import Section from '../../../components/ui/Section';
import NumberedList from '../../../components/ui/NumberedList';
import LinkRows from '../../../components/ui/LinkRows';
import Button from '../../../components/ui/Button';
import CtaBand from '../../../components/ui/CtaBand';
import {getSolutionPage, solutionPages} from '../../../components/solutionPagesData';
import {getServicePage} from '../../../components/servicePagesData';

export function generateStaticParams(){
  return solutionPages.map(solution => ({slug: solution.slug}));
}

export async function generateMetadata({params}){
  const {slug} = await params;
  const solution = getSolutionPage(slug);
  if (!solution) return {title: 'Không tìm thấy giải pháp'};
  return {title: solution.title, description: solution.desc};
}

export default async function SolutionDetailPage({params}){
  const {slug} = await params;
  const solution = getSolutionPage(slug);
  if (!solution) notFound();

  const services = (solution.relatedServices || []).map(getServicePage).filter(Boolean);

  return (
    <>
      <Header activeNav="solutions"/>
      <main>
        <PageHeader
          crumbs={[{label: 'Giải pháp', href: '/giai-phap'}, {label: solution.group}]}
          title={solution.title}
          lead={solution.desc}
        >
          <Button href="/lien-he">Trao đổi về giải pháp này</Button>
        </PageHeader>

        <Section index="01" label="Trọng tâm" title="SOHO ưu tiên làm gì">
          <NumberedList items={solution.outcomes.map(text => ({title: text}))}/>
        </Section>

        {services.length > 0 && (
          <Section index="02" label="Dịch vụ" tone="paper2" title="Dịch vụ thường dùng trong giải pháp này">
            <LinkRows items={services.map(s => ({title: s.menuTitle, desc: s.menuDesc, href: `/dich-vu/${s.slug}`}))}/>
          </Section>
        )}

        <CtaBand/>
      </main>
      <Footer/>
    </>
  );
}
