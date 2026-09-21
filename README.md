# Tejas Pingale — Developer Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui-style primitives (Radix) · Framer Motion · Lucide.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run typecheck && npm run lint
```

## Where things live

| Path | Purpose |
| --- | --- |
| `data/portfolio.ts` | **All content.** Edit here; no component changes needed. |
| `types/portfolio.ts` | Types for the content model (`Project`, `ArchitectureDoc`, ...). |
| `components/ArchitectureViewer.tsx` | Interactive system-design dialog (flow, decisions, original diagram + zoom). |
| `components/ui/*` | shadcn-style primitives (Button, Badge, Card, Dialog, Tabs, Input). |
| `public/Tejas_Resume.pdf` | Resume served by every "Download" button. |
| `public/architecture/*` | Architecture diagrams used in the viewer / card covers. |

## Content TODOs (deliberately left empty, not invented)

- `projects[].links.live` / `links.repo` — only `HealthCheck_Bot` has a public repo today. Add URLs for the others when they exist.
- `certifications[].credentialUrl` — add AWS / Google Cloud verification links.

## Deploy

Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) so metadata, sitemap and the Open Graph image resolve correctly, then deploy to Vercel or any Node host.

The contact form has no backend: it validates natively and opens the visitor's mail client with a prefilled `mailto:` message.
