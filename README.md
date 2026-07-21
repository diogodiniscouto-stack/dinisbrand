# Diogo Dinis — DinisBrands

A premium personal-brand website for **Diogo Dinis**, founder of **DinisBrands** — helping ambitious founders build profitable ecommerce brands through practical systems, frameworks and mentorship.

The design takes cues from Linear, Stripe, Raycast, Vercel, Apple and Notion: minimal, elegant, generous whitespace, rounded cards, subtle gradients and soft shadows on a black / white / neutral-gray palette with a single primary blue (`#3B82F6`).

## Tech stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** for animation

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx          Landing page composition
  globals.css       Global styles, tokens, utilities
components/
  Navbar.tsx        Sticky, scroll-aware navigation
  Hero.tsx          Hero copy + product mockup
  HeroMockup.tsx    Browser-framed dashboard with floating cards
  TrustedSystem.tsx Six-discipline feature grid
  StarterKit.tsx    Free starter kit offer
  ZeroToBrand.tsx   15-stage roadmap timeline
  Mentorship.tsx    1:1 mentorship offer
  About.tsx         Founder story + stats
  Newsletter.tsx    Email capture
  Footer.tsx        Footer + links
  Icons.tsx         Inline line-icon set
  ui/               Reusable primitives (Button, Badge, Container, …)
lib/
  motion.ts         Shared Framer Motion variants
  utils.ts          Helpers
```

## Landing page

Conversion-focused and distraction-free: **Navbar** (Resources · Newsletter · *Get Free Founder Toolkit*) → **Hero** (large email capture for the Free Founder Toolkit, toolkit dashboard mockup, handwritten annotations) → **Inside the Founder Toolkit** (7 tool cards) → **Zero to Brand™** teaser (15 modules · 72 frameworks · 40+ templates) → **Newsletter** → **Footer**. The hero email capture redirects to `/toolkit`.

## Funnel

The site is built as a value ladder:

1. **Landing (`/`)** — the hero captures an email in exchange for the free Starter Kit (`components/EmailCaptureForm.tsx`).
2. **Private Starter Kit dashboard (`/welcome`)** — a Notion/Linear/Stripe-inspired members area (see below).
3. **Paid roadmap** — Zero to Brand™, promoted through contextual CTAs throughout the dashboard.
4. **1:1 mentorship** — promoted alongside the roadmap.

Both starter-kit captures (hero + Free Starter Kit section) submit the email and redirect to `/welcome`.

## Starter Kit dashboard

A private, app-like experience under `/welcome` with a persistent sidebar, progress tracking and per-lesson templates.

```
app/welcome/
  layout.tsx          Dashboard shell (sidebar + mobile drawer), noindex
  page.tsx            Welcome overview (progress, continue, lesson grid)
  [slug]/page.tsx     Individual lesson (static-generated per lesson)
components/starter-kit/
  DashboardShell.tsx  Sidebar chrome + ProgressProvider
  Sidebar.tsx         Lesson nav, progress bar, unlock CTA
  progress.tsx        localStorage-backed progress context
  WelcomeOverview.tsx Dashboard home
  LessonView.tsx      Reading time · outcomes · download · mark-complete · next
  LessonBlocks.tsx    Structured content renderer
  DownloadTemplateButton.tsx  In-browser template download (Blob)
  ContextCTA.tsx      Alternating Zero to Brand™ / mentorship upsell
lib/starterKit.ts     Single source of truth: lessons, content, templates
```

The six lessons — **Brand Validation Framework**, **Product Research Checklist**, **Supplier Outreach Templates**, **Brand Positioning Canvas**, **Shopify Launch Checklist**, **AI Prompt Pack** — each ship with an estimated reading time, learning outcomes, a downloadable Markdown template, a completion toggle, and "Next lesson" navigation. Progress is stored per-visitor in `localStorage`.

## Founder Toolkit (interactive mini-app)

A premium, app-like set of **interactive tools** under `/toolkit` — its own sidebar, `#3B5BFF` accent, 8px spacing, and A4-printable layouts. Every editable tool persists to `localStorage`.

```
app/toolkit/
  layout.tsx                     Mini-app shell (sidebar + footer), noindex
  page.tsx                       Dashboard
  product-validation/            01 · Scorecard (sliders, auto-total, verdict)
  brand-canvas/                  02 · Positioning Canvas (12 editable blocks)
  supplier-templates/            03 · 7 copyable email cards
  shopify-checklist/             04 · Interactive checklist + progress bar
  ai-prompts/                    05 · Searchable prompt library + copy
  profit-calculator/             06 · Live margin / break-even ROAS calculator
  resources/                     07 · Resource directory cards
components/toolkit/              Shell, sidebar, tools, CopyButton, ToolHeader
lib/toolkit.ts                  All toolkit content (prompts, templates, …)
```

- **Printable:** the framework tools (`01`–`04`) have a *Print / PDF* button and `@media print` A4 styles that hide the app chrome.
- **Editable & saved:** scorecard, canvas, checklist and calculator all save automatically.
- Reachable from the members area (`/welcome`) via the "Founder Toolkit" card; the accent blue `#3B5BFF` is `accent` in the Tailwind theme.

## Notes

- The email capture, newsletter and unlock CTAs are wired to client-side placeholders. Connect the capture to your email provider (e.g. ConvertKit, Loops, Resend) in `components/EmailCaptureForm.tsx`.
- Toolkit content (prompts, templates, resources, checklist, canvas fields) lives in `lib/toolkit.ts`.
- Lesson content and templates live in `lib/starterKit.ts` — edit there to update any lesson.
- Zero to Brand™ CTAs point at `/#zero-to-brand` for now; repoint them once the sales page and Stripe checkout exist.
- The About portrait is a styled placeholder — drop in a real photo when available.
