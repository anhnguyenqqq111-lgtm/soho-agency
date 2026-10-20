# SOHO — Asset Audit

Audit date: 20 October 2026. Scope: local Next.js source and files in `public/`. One-pass implementation completed after audit; the existing logo source remains unchanged.

## Findings that affect the brief

- The homepage hero does **not** currently render `RevenueToggle`. It renders HTML copy, CTA buttons, a three-step customer journey and a CSS gradient (`components/hero/HomeHero.js`). The interactive traffic/revenue chart is rendered lower on the homepage in the “Khác ở chỗ: đo bằng doanh thu” section (`app/page.js`, `components/hero/RevenueToggle.js`). Preserve it there unless an approved layout change explicitly moves it.
- The six home service cards use Lucide-style inline SVG icons, not image slots. Replacing those icons with six raster illustrations would require a deliberate card-template change; it must retain the current minimum-height and mobile one-column behaviour.
- Four project covers are real local files and project facts are governed by `components/data/cases.js`. No generated imagery should represent these client projects.
- There are exactly nine blog cover files. They already share one 1600 × 1000 WebP source rule and appear both in cards and as article banners.
- Customer Journey is already an accessible React/SVG/CSS diagram, and Working Process is an accessible React accordion with inline icons. Neither needs a raster replacement.

## Asset-to-section comparison

| Current section | Existing asset | Current dimensions / display | Proposed asset | Reason for replacement or action | Design reference | Priority | Integration location |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Header / Footer | `public/brand/soho-logo*.{svg,webp,png}` | 305 × 120 raster; SVG scalable | Keep existing logo | Approved brand asset; no replacement is warranted | Existing SOHO logo | Locked | `components/header/SiteHeader.js`; `components/Footer.js` |
| Homepage hero | CSS chromatic gradient + HTML journey | Hero: min(100svh − header, 880px); journey column max 400px | Desktop/mobile alpha WebP supporting visuals | Adds the requested support while CSS/HTML remains primary and chart is preserved | White ceramic 3D, restrained orange–pink–violet gradient | P0 complete | Decorative `<picture>` layer in `components/hero/HomeHero.js`, styled in `HomeHero.module.css` |
| Traffic/revenue comparison | Inline interactive SVG | `viewBox 1140 × 450`; CSS height 150–240px | Keep as SVG/React | It is the requested interactive chart and already preserves motion/accessibility behaviour | Current controlled gradient line chart | P0 preserve | `app/page.js`; `components/hero/RevenueToggle.js` |
| Six home service cards | Inline SVG icons | 48 × 48px icon container; cards min-height 236px | Six matching SVG illustrations, 96 × 96px artboard, rendered at 64px | Delivers the requested illustration system without changing card minimum height | White ceramic object + one controlled chromatic accent | P0 complete | `coreServices` art paths; `components/home/ServicesGrid.js`; `ServicesGrid.module.css` |
| Service detail artifacts | Empty `ImageSlot` placeholders | 16:10; requested 1600 × 1000 | Real, permission-cleared client artifacts only | Source explicitly requests real/approved evidence; no AI substitute | Documentary project evidence, not decorative 3D | P1 / blocked by rights | `components/servicePagesData.js` → `app/dich-vu/[slug]/page.js` |
| Portfolio homepage / result pages | Four real project WebP covers | Le Viva 1200 × 457; King Decor 1200 × 542; Kronos 961 × 457; Helen 950 × 450. Display lead/cardless variants use crop containers | Normalize display treatment in HTML/CSS; retain source photos. Optional 16:10/OG derivatives only from approved originals | Inconsistent source ratios and hard-coded 1200 × 560 declarations create crop/metadata mismatch | Editorial project-cover frame, image + HTML name/category/KPI | P0 | `components/home/ProjectShowcase.js`; `components/proof/ProjectGrid.js`; `ProjectCarousel.js`; `app/du-an/[slug]/page.js` |
| Blog index and articles | Nine WebP covers | All 1600 × 1000; displayed 16:10 | Keep dimensions; establish six subject themes and retrofit only if editorially approved | Already scalable, shared card/banner source and compliant with current layout | White ceramic 3D + topic-specific signal colour | P1 | `components/blogData.js`, `BlogCard.js`, `BlogRow.js`, `app/blog/[slug]/page.js` |
| CTA band | CSS dark field and radial gradients | Responsive CSS | Lightweight conversion-path SVG | Adds a low-opacity visual anchor without affecting form layout | Dark ink field + soft orange/violet glow | P1 complete | `components/ui/CtaBand.js`, `CtaBand.module.css` |
| Decorative section accents | Ten 400 × 400 WebP 3D icons | Display width 140–290px desktop, 120px mobile | Keep and use as material/style reference | They establish the existing white-ceramic 3D language | Current `/decor/` white 3D | Preserve | `components/ui/Section.js`, `Section.module.css` |
| Customer Journey | React/CSS/SVG JourneyMatrix | Responsive CSS grid | Keep; no bitmap | Meets requirement for accessible interactive/vector diagram | Existing system diagram | Preserve | `components/diagrams/JourneyMatrix.js` |
| Working Process | React accordion + Lucide icons | Responsive typography/cards | Keep; no bitmap | Meets brief; avoids raster information graphic | Existing type-led process UI | Preserve | `components/home/ProcessAccordion.js` |
| Site Open Graph | `public/og/soho-og.png` | 1200 × 630 | Site-wide and results-page OG banners | Provides defined share contexts; both composite the exact existing logo | Brand gradient, approved logo, concise baked share copy | P1 complete | `app/layout.js`; `app/ket-qua/page.js` |

## Verified inventory

| Group | Count | Formats | Notes |
| --- | ---: | --- | --- |
| Brand | 6 | SVG, WebP, PNG | Logo is protected; avatar is 256 × 256 PNG |
| 3D decor | 10 | WebP | All 400 × 400, used as decorative assets |
| Project photos | 4 | WebP | Existing projects named in this brief |
| Blog covers | 9 | WebP | All 1600 × 1000 |
| Client/partner marks | 7 | PNG, SVG | Preserve provenance and contrast treatment |
| Social image | 1 | PNG | Existing 1200 × 630 site OG image |

## Layout and implementation constraints

1. Keep `width`/`height` or CSS `aspect-ratio` whenever a new image is introduced; use `loading="lazy"` below the fold and `fetchPriority="high"` only for the page LCP image.
2. Portfolio source photos remain semantic `<img>` elements with meaningful alt text; titles, categories and KPIs remain HTML.
3. Service artwork must be decorative (`alt=""`) because the link label already names the service. Its art box must be fixed at 72–96px so cards retain their 236px minimum height.
4. Do not add a hero bitmap until desktop/mobile compositing confirms it does not obscure the journey column or reduce heading/CTA contrast.
5. Production status and exact output paths are recorded in `ASSET_MANIFEST.json`.
