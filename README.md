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

## Sections

Navbar · Hero · Trusted System · Free Starter Kit · Zero to Brand™ · Mentorship · About · Newsletter · Footer

## Notes

- The newsletter and starter-kit forms are wired to a client-side placeholder. Connect them to your email provider (e.g. ConvertKit, Loops, Resend) when ready.
- The About portrait is a styled placeholder — drop in a real photo when available.
