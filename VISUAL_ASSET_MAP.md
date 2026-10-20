# SOHO — Visual Asset Map

This map records the implemented integration. The user approved one-pass production on 20 October 2026.

## Phase 1 — Audit and mapping

| Deliverable | Status | Evidence / destination |
| --- | --- | --- |
| Asset inventory and dimension verification | Complete | `ASSET_AUDIT.md`; local `public/` files |
| Integration map and production constraints | Complete | This file |
| Art direction board | Complete | `ART_DIRECTION_BOARD.md` |
| Logo protection decision | Locked | Retain existing files and current references |

## Phase 2 — Priority assets

| ID | Asset | Defined use | Format / source size | Responsive treatment | Proposed code touchpoint | Status |
| --- | --- | --- | --- | --- | --- | --- |
| H-01 | Hero ceramic “attract → consider → convert” object, desktop composition | Decorative right-side companion to existing HTML journey; heading/CTA and journey stay HTML | `/hero/customer-journey-desktop.webp`, 1536 × 1024, alpha | Decorative absolute layer; no layout contribution | `components/hero/HomeHero.js`, `HomeHero.module.css` | Implemented |
| H-02 | Hero ceramic “signal → qualified lead → revenue” object, mobile composition | Mobile-specific companion; not a scaled desktop crop | `/hero/customer-journey-mobile.webp`, 1024 × 1536, alpha | Selected by `<picture>` ≤980px; decorative | Same as H-01 | Implemented |
| S-01…S-06 | SEO, Google Ads, Meta/TikTok Ads, Website Design, Brand Identity, Mobile App Development illustrations | One per core service card | Six optimized SVGs, 96 × 96 viewBox | Rendered at 64px inside existing 48px top slot; card height unchanged | `components/servicePagesData.js`, `ServicesGrid.js`, `ServicesGrid.module.css` | Implemented |
| P-01…P-04 | Four portfolio cover treatments | Current real photos with consistent HTML metadata frame; no synthetic imagery | Existing WebP retained; actual intrinsic dimensions added to data | CSS `object-fit: cover`; focal position data-driven | Project showcase/grid/carousel and project detail route | Implemented |

### Service illustration semantic prompts

These are production briefs for SVG/vector rendering, not generated assets.

| Service | Core object | Narrative cue | Accent assignment |
| --- | --- | --- | --- |
| SEO | Ceramic search lens with indexed tiles | discovery and organic visibility | Violet discovery ray |
| Google Ads | Ceramic target with a click/auction token | intent captured at the right moment | Orange target, violet path |
| Facebook/TikTok Ads | Ceramic megaphone and signal cards | creative testing and demand generation | Coral signal wave |
| Website Design | Ceramic browser frame and modular page blocks | clear conversion path | Orange CTA tile |
| Brand Identity | Ceramic palette/monogram blocks | consistent recognition across touchpoints | Gradient swatch, restrained |
| Mobile App Development | Ceramic phone with connected task nodes | repeatable customer action | Violet node chain |

## Phase 3 — Supporting assets

| ID | Asset | Defined use | Format / source size | Integration location | Status |
| --- | --- | --- | --- | --- | --- |
| B-01…B-09 | Blog thumbnail system | Existing nine article card + banner surfaces | WebP 1600 × 1000 | `components/blogData.js`; `BlogCard.js`; article route | Audited and retained |
| C-01 | CTA conversion path | Decorative endpoint/path motif; form and CTA remain HTML | `/cta/conversion-path.svg`, 420 viewBox | `components/ui/CtaBand.*` | Implemented |
| O-01 | Site-wide OG banner | Root metadata social share | `/og/soho-og-v2.png`, 1200 × 630 | `app/layout.js` | Implemented |
| O-02 | Results OG banner | `/ket-qua/` social share | `/og/soho-projects-og.png`, 1200 × 630 | `app/ket-qua/page.js` | Implemented |
| G-01… | Supporting graphics | Only when an approved page has a measured content gap | SVG/CSS where informational | Named page/component required before creation | Deferred |

## Blog subject system

| Theme | Current matching article(s) | Visual grammar |
| --- | --- | --- |
| Marketing strategy systems | `framework-marketing-90-ngay`, `chien-luoc-seo-ads-song-hanh` | ceramic modules, planning path, restrained gradient route |
| SEO / discovery networks | `framework-seo-8-buoc` | search lens, indexed nodes, violet discovery links |
| Ads / performance signals | `toi-uu-roas-performance-ads`, `framework-ads-6-buoc`, `tracking-ga4-capi-2026` | signal bars, qualified-event tokens, orange performance point |
| AI Search / entities | `seo-ky-nguyen-ai-search` | entity cluster, citation path, violet/coral connection |
| CRO / conversion pathways | `toi-uu-cro-landing-page` | choice path, CTA token, completion state |
| Content / knowledge architecture | `content-hub-topic-cluster` | pillar-and-cluster structure, linked knowledge cards |

## Portfolio content frame

Every card should retain a real project image and present the following in HTML:

1. Client/project name (`h3`).
2. Service category/scope and period (`p` metadata).
3. Optional verified KPI only when `cases.js` explicitly contains it.

The existing lead card already largely implements this pattern. The integration work is a shared component/CSS normalization task, not an image-generation task.
