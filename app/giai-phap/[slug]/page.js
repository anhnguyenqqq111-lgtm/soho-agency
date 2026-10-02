import {notFound} from 'next/navigation';
import {ArrowRight, CheckCircle2} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {getSolutionPage, solutionPages} from '../../../components/solutionPagesData';
import {sitePath} from '../../../components/paths';

export function generateStaticParams(){
  return solutionPages.map(solution => ({slug: solution.slug}));
}

export async function generateMetadata({params}){
  const {slug} = await params;
  const solution = getSolutionPage(slug);
  if(!solution){
    return {title: 'Giải pháp không tồn tại | SOHO Agency'};
  }
  return {
    title: `${solution.title} | SOHO Agency`,
    description: solution.desc
  };
}

export default async function SolutionDetailPage({params}){
  const {slug} = await params;
  const solution = getSolutionPage(slug);

  if(!solution){
    notFound();
  }

  return (
    <main>
      <Header activeNav="solutions" />
      <section className="solutionDetailHero">
        <div>
          <p className="eyebrow">{solution.eyebrow}</p>
          <h1>{solution.title}</h1>
          <p>{solution.desc}</p>
          <a className="btn primary btnGlow" href={sitePath('/lien-he')}>
            <span>Trao đổi giải pháp</span>
            <ArrowRight size={18}/>
            <span className="btnSweep"></span>
          </a>
        </div>
        <div className="solutionDetailVisual">
          <solution.icon size={68}/>
          <b>SOHO Growth System</b>
          <small>Insight • Sprint • Data • Revenue</small>
        </div>
      </section>
      <section className="section solutionOutcomeList">
        <div className="sectionHead left">
          <p className="eyebrow">TRỌNG TÂM TRIỂN KHAI</p>
          <h2>Những việc SOHO ưu tiên để tạo tác động rõ</h2>
        </div>
        <div className="serviceOutcomeGrid">
          {solution.outcomes.map(outcome => (
            <article key={outcome}>
              <CheckCircle2/>
              <h3>{outcome}</h3>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
