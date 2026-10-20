# SOHO — Image QA Report

## Audit-stage result

**Status: PASS for production integration.**

The approved one-pass implementation adds two generated hero WebP assets, six code-native service SVGs, one CTA SVG and two rendered OG PNGs. Project photography and logo source files remain unchanged.

## Current-state checks

| Check | Result | Evidence |
| --- | --- | --- |
| Existing logo preserved | Pass | Current logo references remain `public/brand/soho-logo*` |
| Four named portfolio projects use real local assets | Pass | `components/data/cases.js` maps each project to `public/projects/` |
| Portfolio facts/KPIs remain data-driven HTML | Pass | Project components read `name`, `scope`, `period`, `kpis` from `cases.js` |
| Nine blog assets have a common format/dimension | Pass | 9 WebP files, 1600 × 1000 each |
| Current 3D asset language documented | Pass | 10 `/decor/` WebP assets, 400 × 400 each |
| Journey is vector/semantic, not raster | Pass | `components/diagrams/JourneyMatrix.js` |
| Process is typography/interaction, not raster | Pass | `components/home/ProcessAccordion.js` |
| Interactive traffic/revenue chart retained | Pass | `components/hero/RevenueToggle.js` remains used in `app/page.js` |
| Hero chart location verified | Attention | Chart is in the lower measurement section, not inside `HomeHero`; brief/code discrepancy is documented |
| Hero visual | Pass | Desktop/mobile alpha WebP assets use a decorative `<picture>` layer and do not replace HTML content |
| Six service illustrations | Pass | SVG files render decoratively with fixed intrinsic size; card minimum height is unchanged |
| Portfolio dimensions | Pass | Components now use each real source file's actual width/height and data-driven focal position |
| CTA visual | Pass | Lightweight SVG; CTA copy, button and form remain semantic HTML |
| Two OG banners | Pass | 1200 × 630 PNG; exact existing SOHO logo is composited, not regenerated |
| Production build | Pass | `npm run build`: 48 static/SSG pages generated successfully |
| Production HTTP smoke test | Pass | `/`, `/ket-qua/` and the desktop hero WebP returned HTTP 200; all new service/hero/OG references were present in exported HTML |
| Screenshot comparison | Not available | Browser runtime was not exposed in this environment; no browser screenshot was fabricated |

## Required QA for each approved new asset

- **Placement:** a named component and route must be present in `ASSET_MANIFEST.json` before production.
- **Rights:** client photography/artifacts require publication approval; never synthesize portfolio work.
- **Format:** SVG for service symbols and information graphics; WebP for raster/photographic 3D; no unnecessary PNG.
- **Dimensions:** reserve intrinsic `width`/`height` or `aspect-ratio`; no CLS.
- **Responsive:** inspect 1440px, 1024px, 390px and 320px. Hero requires both desktop and mobile checks.
- **Accessibility:** decorative image gets empty alt; semantic facts, titles and KPIs remain HTML; contrast conforms to existing token rules.
- **Performance:** below-fold images lazy-load; only actual LCP media is high-priority; verify optimized byte weight after export.
- **Motion:** preserve `prefers-reduced-motion`; no animation required for comprehension.
- **SEO:** preserve existing URLs, `alt` text on meaningful images, schema image references and metadata paths.
- **Build:** run `npm run build` after any asset/code integration.

## Completed gates

1. Art direction applied without changing the logo.
2. Interactive chart retained in its current measurement section.
3. Portfolio uses only the four existing published files.
4. Service set implemented as one SVG family.
5. Production build completed. Screenshot capture remains optional when a browser runtime is available.

## Generated raster provenance

Built-in ImageGen mode was used for H-01 and H-02. Both prompts specified: premium matte white ceramic, a three-stage discovery/qualified-customer/revenue journey, restrained orange–coral–violet accent, transparent background, no logo, no text, no chart, no chrome and no glass. Final project files were converted to alpha WebP and saved under `public/hero/`.
