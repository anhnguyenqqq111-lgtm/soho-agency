import styles from './page.module.css';
import {sitePath} from '../../components/paths';

export const metadata = {
  title: {absolute: 'SOHO Brand Preview'},
  robots: {index: false, follow: false}
};

const A = '/assets/brand/';
const concepts = [
  {name: 'A — Geometric S', file: 'concepts/concept-a-geometric-s.svg', score: 93, note: 'Recommended: strongest small-size recognition and system versatility.'},
  {name: 'B — Custom wordmark', file: 'concepts/concept-b-custom-wordmark.svg', score: 87, note: 'Excellent typography; less distinctive without a compact symbol.'},
  {name: 'C — Dynamic S', file: 'concepts/concept-c-dynamic-s.svg', score: 83, note: 'Expressive motion, but more complex at favicon scale.'}
];

export default function BrandPreview(){
  return (
    <main id="main" className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.kicker}>SOHO Agency · Internal brand review</p>
        <h1>Identity built for <span>creative growth.</span></h1>
        <p>Modern geometric clarity, an ownable S and a custom SOHO wordmark. This page is noindex and excluded from the sitemap.</p>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionHead}><p>01</p><h2>Three original directions</h2></div>
        <div className={styles.concepts}>{concepts.map((c, index) => <article key={c.name} className={styles.concept}><img src={sitePath(A + c.file)} alt={c.name} width={index === 1 ? 420 : 320} height={index === 1 ? 160 : 220}/><div><h3>{c.name}</h3><b>{c.score}/100</b><p>{c.note}</p></div></article>)}</div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.sectionHead}><p>02</p><h2>Final recommended system</h2></div>
        <div className={styles.finalGrid}>
          <figure className={styles.lightTile}><img src={sitePath(A + 'soho-logo-primary.svg')} alt="SOHO Agency primary logo" width="400" height="80"/><figcaption>Primary</figcaption></figure>
          <figure className={styles.darkTile}><img src={sitePath(A + 'soho-logo-white.svg')} alt="SOHO Agency reverse logo" width="400" height="80"/><figcaption>Reverse</figcaption></figure>
          <figure className={styles.lightTile}><img src={sitePath(A + 'soho-logo-stacked.svg')} alt="SOHO Agency stacked logo" width="320" height="158"/><figcaption>Stacked</figcaption></figure>
          <figure className={styles.symbolTile}><img src={sitePath(A + 'soho-logo-symbol.svg')} alt="SOHO S symbol" width="68" height="68"/><figcaption>Symbol</figcaption></figure>
          <figure className={styles.lightTile}><img src={sitePath(A + 'soho-logo-wordmark.svg')} alt="SOHO custom wordmark" width="300" height="64"/><figcaption>Wordmark</figcaption></figure>
          <figure className={styles.gradientTile}><img src={sitePath(A + 'soho-logo-gradient.svg')} alt="SOHO gradient logo" width="400" height="80"/><figcaption>Gradient</figcaption></figure>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}><p>03</p><h2>Construction and clear space</h2></div>
        <div className={styles.two}><img src={sitePath(A + 'soho-logo-construction.svg')} alt="SOHO symbol construction grid" width="520" height="360"/><img src={sitePath(A + 'soho-logo-clearspace.svg')} alt="SOHO logo clear space" width="560" height="220"/></div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}><p>04</p><h2>Colour and typography</h2></div>
        <div className={styles.palette}>
          <div style={{'--swatch':'#F26522'}}><span/>Orange<br/><code>#F26522</code></div><div style={{'--swatch':'#141218'}}><span/>Midnight<br/><code>#141218</code></div><div style={{'--swatch':'#6D28D9'}}><span/>Violet<br/><code>#6D28D9</code></div><div style={{'--swatch':'#EC4899'}}><span/>Coral<br/><code>#EC4899</code></div>
        </div>
        <div className={styles.type}><div><small>DISPLAY · BRICOLAGE GROTESQUE</small><p className={styles.display}>Creative systems that grow.</p></div><div><small>BODY · PLUS JAKARTA SANS</small><p>Strategy, design and execution connected to measurable revenue.</p></div></div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}><p>05</p><h2>Interface applications</h2></div>
        <div className={styles.mockups}>
          <div className={styles.headerMock}><img src={sitePath(A + 'soho-logo-horizontal.svg')} alt="" width="400" height="80"/><nav><span>Về SOHO</span><span>Dịch vụ</span><span>Dự án</span></nav><button>Nhận tư vấn</button></div>
          <div className={styles.mobileMock}><img src={sitePath(A + 'soho-logo-horizontal.svg')} alt="" width="400" height="80"/><span aria-hidden="true">☰</span></div>
        </div>
        <div className={styles.favicons}><h3>Favicon optical sizes</h3>{[16,24,32,48].map(n => <div key={n}><img src={sitePath(A + 'favicon.svg')} alt="" width={n} height={n}/><span>{n}px</span></div>)}</div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}><p>06</p><h2>Before and after</h2></div>
        <div className={styles.beforeAfter}><figure><div><img src={sitePath(A + 'archive/soho-logo-original.svg')} alt="SOHO logo before redesign" width="320" height="158"/></div><figcaption>Before · archived original</figcaption></figure><figure><div><img src={sitePath(A + 'soho-logo-primary.svg')} alt="SOHO logo after redesign" width="400" height="80"/></div><figcaption>After · geometric S system</figcaption></figure></div>
      </section>

      <section className={`${styles.section} ${styles.wrong}`}>
        <div className={styles.sectionHead}><p>07</p><h2>Incorrect usage</h2></div>
        <div><p>Do not stretch</p><img className={styles.stretch} src={sitePath(A + 'soho-logo-primary.svg')} alt="" width="400" height="80"/><p>Do not rotate</p><img className={styles.rotate} src={sitePath(A + 'soho-logo-primary.svg')} alt="" width="400" height="80"/><p>Do not add effects</p><img className={styles.effect} src={sitePath(A + 'soho-logo-primary.svg')} alt="" width="400" height="80"/></div>
      </section>
    </main>
  );
}
