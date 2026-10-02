# Htet Ko Oo portfolio

A minimal, responsive Next.js App Router + TypeScript portfolio. All presentation content is server-rendered; no profile photo, animation runtime, theme toggle, upload widget, or contact-form JavaScript.

The compact header is CSS-sticky. Resume opens in a new tab with an explicit notice. Contact uses a mailto link and a small isolated client component for copying the email address, with an accessible success/error status. No email-sending API or additional dependency is required.

## Development

Use Node.js 22 or 24 and pnpm 10.26.2 (pinned in packageManager).

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

Development and production builds use Webpack because Turbopack's PostCSS worker cannot bind its internal port in this restricted environment. This does not change the Next.js App Router or static rendering.

Stop `pnpm start` before rebuilding, then run `pnpm build` followed by `pnpm start` again. A running production server retains old asset references when `.next` is rebuilt underneath it, which can make CSS/JavaScript requests fail. Do not run development and production servers against the same build directory at the same time.

## Edit content

- Projects: `data/portfolio.ts`. Each project is one object, so add, remove, or update a card in one place. Use `kind: "featured"` for the three primary cards and `kind: "more"` for the supporting list.
- Case studies: add a `caseStudy` object to a featured project in `data/portfolio.ts`. That project automatically receives a `/projects/<slug>` page and a “View case study” link on its card.
- Project images (optional): put a compressed cover image at `public/projects/<project-slug>/cover.webp`, then add `image: { src: "/projects/<project-slug>/cover.webp", alt: "..." }` to that project object. Cards intentionally have no empty image area until a real image is supplied.
- Introduction, About, Skills, Contact: `app/page.tsx`.
- Design and responsive breakpoints: `app/globals.css`.
- SEO and canonical domain: `app/layout.tsx`.
- Resume: the editable source is `documents/resume/Htet-Ko-Oo-Resume.docx`; the portfolio downloads `public/resume.pdf`. The reproducible layout source is `documents/resume/build_resume.py`.

Before publishing, confirm the project wording, canonical domain, and each live-demo link.

## Migration and preservation

Compared against the previous output copy before migration; the current Git worktree was clean. Imported only the updated presentation files, project data and resume—not node_modules or lockfiles. pnpm resolved fresh dependencies and generated `pnpm-lock.yaml` with strict peer checks. Dependency versions are pinned.

Original source, npm lockfile, legacy components/API, and previous build cache are preserved locally under `.migration-backup/` (Git-ignored). `.env.local` is unchanged and is not included in the source archive. The old contact API is inactive; Contact now uses email and social links. `data/index.ts` and existing public assets are retained but unused.

Next.js and eslint-config-next are matched at 16.3.5; React/React DOM at 19.3.0; Tailwind/PostCSS plugin at 4.3.3; TypeScript at 5.9.3. ESLint is held at 9.39.5: ESLint 10 failed strict peer checks for the bundled import, React and accessibility plugins. ESLint 9 is deprecated upstream; revisit this tooling dependency when those plugins support ESLint 10. No peer overrides are used. Install scripts are disabled; unrs-resolver uses its packaged native dependency successfully in lint checks.

## Verification

See `docs/verification.md` for checks and remaining limitations. Deployment is not performed.
