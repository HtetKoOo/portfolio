# Verification — 2026-09-12

- Production Webpack build passed; `/` is statically prerendered.
- ESLint and strict TypeScript passed after migration.
- Frozen-lockfile offline pnpm install passed. No imported npm lockfile or copied node_modules.
- Production dependency audit: no known vulnerabilities reported.
- Production browser preview: 1440×900 desktop, 768×1024 tablet, 390×844 mobile and 320×720 small mobile.
- Project grid has two columns on desktop/tablet and one on mobile. About/Skills stacks on mobile. No horizontal overflow in checked viewports.
- Projects anchor navigation works; About/Skills and Contact visually checked at 320px. Browser console had no warnings/errors in checked session.
- Header, main, navigation and named sections; one h1; visible keyboard focus and skip-to-content link; reduced-motion preference disables smooth scrolling.
- No rendered images or external web fonts. The initial migration had no application client components; Copy email is now the only isolated client component.
- Resume endpoint returned HTTP 200 with application/pdf. Local warm homepage request returned HTTP 200, ~6.2ms TTFB; this is not throttled mobile/network performance.
- Generated initial referenced assets, locally gzip-compressed: CSS 3,185 bytes; JavaScript 170,950 bytes including 39,627-byte legacy polyfill; HTML 4,327 bytes. These are bundle-size measurements, not browser transfer or Lighthouse metrics. Next.js framework JavaScript remains.

## Still to confirm before publication

### Contact and navigation update

- Added Email me (mailto) and Copy email without dependencies or an email API.
- Copy success tested in production preview; accessible status also provides manual-copy guidance if Clipboard API fails. Failure branch not simulated in browser.
- Resume has target=_blank, noopener/noreferrer and a visible new-tab notice.
- CSS-sticky header checked while scrolled at 320px and 1440px: top=0, heights 82px/65px, no horizontal overflow. Anchor offset accounts for the two-row small-mobile header.
- Lint, TypeScript and production build passed after this update. Previous bundle-size figures describe the initial migration, not this client-component update.

### Preview CSS incident

The final rebuild was initially performed while the production preview server was still running. The server returned HTML referencing the previous CSS hash, while disk assets belonged to the new build. CSS requests failed and the page appeared unstyled. Restarted the preview server against the completed build and confirmed the new stylesheet loads and computed Arial styling/project grid are restored. Always stop the production server before rebuilding and restart it afterward.

- Project roles/contributions and provisional resume content.
- Ownership/accuracy of the canonical domain and external repository/social links.
- Lighthouse mobile throttling, Core Web Vitals and real-device testing were not measured. This check is a local layout/bundle baseline, not a performance score or comprehensive accessibility audit.
- ESLint 9 upstream deprecation remains a tooling limitation; ESLint 10 is incompatible with current bundled plugin peer ranges.

Security release reference: https://nextjs.org/blog/august-2026-security-release (16.3.3 patched release; installed 16.3.5).
