import type { ComponentType, SVGProps } from "react";
import {
  ShieldCheck,
  Target,
  Box,
  Compass,
  Store,
  Bolt,
} from "@/components/Icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "callout"; title: string; text: string };

export type Lesson = {
  slug: string;
  number: number;
  title: string;
  summary: string;
  icon: Icon;
  readingTime: string;
  outcomes: string[];
  template: { label: string; filename: string; content: string };
  blocks: Block[];
};

export const lessons: Lesson[] = [
  {
    slug: "brand-validation",
    number: 1,
    title: "Brand Validation Framework",
    summary:
      "Validate that people actually want what you're about to sell, before you spend a cent on inventory or ads.",
    icon: ShieldCheck,
    readingTime: "7 min read",
    outcomes: [
      "Score any product idea against a repeatable 5-signal model",
      "Separate real demand from wishful thinking with fast, free tests",
      "Make a confident go / no-go decision backed by evidence",
    ],
    template: {
      label: "Brand Validation Scorecard",
      filename: "brand-validation-scorecard.md",
      content: `# Brand Validation Scorecard

Score your idea 1–5 on each signal. Anything below 18/25 needs work before you commit.

| Signal | What great looks like | Score (1–5) |
| --- | --- | --- |
| Demand | People already search for and buy this | |
| Differentiation | You can offer a clearly better angle | |
| Margin | Sells for 3–5x landed cost | |
| Access | You can reach buyers without paid ads first | |
| Passion | You'd still care about this in 12 months | |

Total: ___ / 25

## 48-hour validation test
- [ ] 20 customer interviews or DM conversations
- [ ] 1 landing page with a waitlist / pre-order button
- [ ] $50 of traffic OR 3 organic posts to the page
- [ ] Track: click-through, email opt-in %, "would you buy" replies

## Decision
- 21–25 → Build. Move to Product Research.
- 18–20 → Refine the angle, retest one weak signal.
- < 18 → Kill it. Better ideas are cheap; wasted months are not.
`,
    },
    blocks: [
      { type: "h", text: "Why validation comes first" },
      {
        type: "p",
        text: "Most brands don't fail at execution, they fail because nobody wanted the product in the first place. Validation is how you buy certainty cheaply. A weekend of tests can save you six months and thousands of euros in inventory.",
      },
      {
        type: "p",
        text: "The goal isn't to prove you're right. It's to find out you're wrong as fast and as cheaply as possible.",
      },
      { type: "h", text: "The 5 validation signals" },
      {
        type: "steps",
        items: [
          {
            title: "Demand",
            text: "Are people already searching for and spending money on this? Existing demand is easier to capture than demand you have to create.",
          },
          {
            title: "Differentiation",
            text: "Can you offer a clearly better angle, better positioning, audience, or experience, not just another me-too product?",
          },
          {
            title: "Margin",
            text: "Does it sell for 3–5x landed cost? Thin margins leave no room for ads, returns, or mistakes while you learn.",
          },
          {
            title: "Access",
            text: "Can you reach the first 100 buyers without burning cash on ads? An audience, a niche community, or content beats paid traffic on day one.",
          },
          {
            title: "Passion",
            text: "Will you still care in 12 months? Brands are a long game, genuine interest is what carries you through the boring middle.",
          },
        ],
      },
      {
        type: "callout",
        title: "Rule of thumb",
        text: "If you can't score at least 4/5 on Demand and Margin, keep looking. Those two are the hardest to fix later.",
      },
      { type: "h", text: "Run the test in 48 hours" },
      {
        type: "checklist",
        items: [
          "Talk to 20 potential customers, DMs, communities, or in person",
          "Build one simple landing page with a waitlist or pre-order button",
          "Drive a little traffic (organic posts or ~€50 of ads)",
          "Measure opt-in rate and count how many say they'd actually pay",
        ],
      },
      {
        type: "p",
        text: "Download the scorecard below, run your idea through it, and only move forward when the evidence, not the excitement, tells you to.",
      },
    ],
  },
  {
    slug: "product-research",
    number: 2,
    title: "Product Research Checklist",
    summary:
      "A repeatable process to find products with real demand, healthy margins, and room to build a brand around them.",
    icon: Target,
    readingTime: "8 min read",
    outcomes: [
      "Source product ideas from signals instead of guesswork",
      "Vet every idea against clear demand and margin criteria",
      "Spot the red flags that sink beginner stores",
    ],
    template: {
      label: "Product Research Checklist",
      filename: "product-research-checklist.md",
      content: `# Product Research Checklist

## Sourcing ideas
- [ ] Trending communities (Reddit, TikTok, niche forums)
- [ ] Amazon Movers & Shakers + "Best Sellers" by category
- [ ] Google Trends (12-month, rising not fading)
- [ ] Competitor catalogues, what's sold out or reviewed most

## Demand check
- [ ] Steady or rising search volume
- [ ] Active conversations / content getting engagement
- [ ] At least 2–3 competitors already profitable (demand is proven)

## Economics check
- [ ] Landed cost known (product + shipping + duties)
- [ ] Sells at 3–5x landed cost
- [ ] Lightweight / not fragile / easy to ship
- [ ] No cold-chain, batteries, or heavy regulation headaches

## Brand potential
- [ ] Room for a distinct angle or audience
- [ ] Repeat-purchase or expandable product line
- [ ] Not 100% dependent on one platform trend

## Red flags (any = reconsider)
- [ ] Saturated with identical dropshippers racing to the bottom
- [ ] Margin under 2x
- [ ] Restricted / high-liability category
- [ ] You can't explain why a customer would pick you
`,
    },
    blocks: [
      { type: "h", text: "Research beats inspiration" },
      {
        type: "p",
        text: "Good products aren't found in a flash of genius, they're found by systematically following signals. Your job is to gather enough evidence that demand exists and the numbers work, then move.",
      },
      { type: "h", text: "Where to look" },
      {
        type: "list",
        items: [
          "Communities where your future customers already hang out",
          "Marketplaces, bestsellers, movers, and heavily-reviewed items",
          "Trend tools to confirm interest is rising, not fading",
          "Competitor stores, what's sold out or reviewed the most",
        ],
      },
      { type: "h", text: "The three filters" },
      {
        type: "steps",
        items: [
          {
            title: "Demand",
            text: "Proven interest and a few profitable competitors. Competition is a signal that money is being made, not a reason to stop.",
          },
          {
            title: "Economics",
            text: "Landed cost you can 3–5x, easy to ship, no regulatory landmines. The margin funds your mistakes while you learn.",
          },
          {
            title: "Brand potential",
            text: "Room to stand out and sell more than one thing. You want a brand, not a single lucky product.",
          },
        ],
      },
      {
        type: "callout",
        title: "Avoid the trap",
        text: "A saturated market full of identical dropshippers with 2x margins isn't an opportunity, it's a race to the bottom. Look for demand you can serve differently.",
      },
      {
        type: "p",
        text: "Run every idea through the checklist below. When one clears all three filters with no red flags, you're ready to talk to suppliers.",
      },
    ],
  },
  {
    slug: "supplier-outreach",
    number: 3,
    title: "Supplier Outreach Templates",
    summary:
      "Find reliable suppliers and open the conversation like a professional buyer, with scripts you can copy and send today.",
    icon: Box,
    readingTime: "6 min read",
    outcomes: [
      "Know where to find and how to shortlist suppliers",
      "Send a first message that gets taken seriously",
      "Ask the right questions before you ever place an order",
    ],
    template: {
      label: "Supplier Outreach Email Templates",
      filename: "supplier-outreach-templates.md",
      content: `# Supplier Outreach Templates

## 1. First contact
Subject: Wholesale enquiry, [Product] for our brand

Hi [Name],

I'm sourcing [product] for our brand, [Brand]. We're preparing our first
production run and building a shortlist of long-term suppliers.

Could you share:
- MOQ and unit price at MOQ and at 2x MOQ
- Production and shipping lead times
- Available customization (logo, packaging, materials)
- Samples cost and timeline

Looking forward to working together.

[Your name], [Brand], [website]

## 2. Sample request
Hi [Name], the specs look great. I'd like to order a sample of [variant]
to check quality before our first order. Please share the sample cost and
how to pay. If quality matches, our opening order would be around [qty].

## 3. Negotiation nudge
Thanks [Name]. The quality is good. To move forward at [qty], I'm aiming
for [target price] per unit. If we can meet there, I'm ready to place the
order this week and reorder monthly if sell-through is strong.

## Supplier vetting questions
- How long have you produced this exact product?
- Can you share references or reviews from other buyers?
- What is your defect/return policy?
- Who handles QC before shipping?
- What are payment terms (deposit %, balance on shipment)?
`,
    },
    blocks: [
      { type: "h", text: "Suppliers are partners, not vending machines" },
      {
        type: "p",
        text: "The way you open the conversation signals whether you're a serious buyer or a tyre-kicker. A clear, professional first message gets better prices, faster replies, and more flexibility.",
      },
      { type: "h", text: "Where to find them" },
      {
        type: "list",
        items: [
          "B2B marketplaces (Alibaba, Faire, local wholesale directories)",
          "Trade shows and industry directories for your category",
          "Referrals from other founders in your niche",
          "The 'made by' or packaging clues on competitor products",
        ],
      },
      { type: "h", text: "The outreach sequence" },
      {
        type: "steps",
        items: [
          {
            title: "First contact",
            text: "Introduce your brand, ask for MOQ, pricing at two volumes, lead times, and customization. Specific questions get specific answers.",
          },
          {
            title: "Sample",
            text: "Never order in volume before holding a sample. Quality on screen and quality in hand are different things.",
          },
          {
            title: "Negotiate",
            text: "Once quality checks out, anchor a target price tied to a real order and a reorder commitment. Volume and reliability earn discounts.",
          },
        ],
      },
      {
        type: "callout",
        title: "Protect yourself",
        text: "Always confirm defect policy, QC process, and payment terms in writing before paying a deposit. The templates below include the exact questions to ask.",
      },
    ],
  },
  {
    slug: "brand-positioning",
    number: 4,
    title: "Brand Positioning Canvas",
    summary:
      "Define the one angle that makes your brand the obvious choice for a specific person, so you never compete on price alone.",
    icon: Compass,
    readingTime: "7 min read",
    outcomes: [
      "Write a one-sentence positioning statement that guides every decision",
      "Identify the specific customer you're built for",
      "Turn your positioning into messaging you can use everywhere",
    ],
    template: {
      label: "Brand Positioning Canvas",
      filename: "brand-positioning-canvas.md",
      content: `# Brand Positioning Canvas

## 1. Target customer
For [specific person] who [situation / need]...

## 2. Category
...our [product category]...

## 3. Key benefit
...is the one that [single most important benefit]...

## 4. Reason to believe
...because [proof: ingredient, process, founder story, guarantee].

## 5. Enemy / alternative
Unlike [the status-quo alternative], we [meaningful difference].

## Positioning statement (fill in)
For ______ who ______, [Brand] is the ______ that ______, because ______.

## Messaging pillars (3)
1. ______
2. ______
3. ______

## Voice
We sound: ______, ______, ______ (e.g. warm, direct, confident).
We never sound: ______ (e.g. hypey, corporate, salesy).
`,
    },
    blocks: [
      { type: "h", text: "Positioning is a choice, not a slogan" },
      {
        type: "p",
        text: "Positioning is deciding who you're for, what you stand for, and why you're different, before you write a single line of copy. Get it right and marketing becomes easy. Get it wrong and no amount of ad spend saves you.",
      },
      { type: "h", text: "The five inputs" },
      {
        type: "steps",
        items: [
          {
            title: "Target customer",
            text: "A specific person, not 'everyone'. The narrower you go, the louder you land.",
          },
          {
            title: "Category",
            text: "The frame of reference the customer uses to understand you.",
          },
          {
            title: "Key benefit",
            text: "The single most important outcome you deliver. One, not ten.",
          },
          {
            title: "Reason to believe",
            text: "Proof that makes the benefit credible, process, ingredient, founder story, or guarantee.",
          },
          {
            title: "The alternative",
            text: "What the customer does today. Your difference only matters relative to a status quo.",
          },
        ],
      },
      {
        type: "callout",
        title: "The one-liner",
        text: "For [customer] who [need], [Brand] is the [category] that [benefit], because [reason]. If you can say this cleanly, everything downstream gets easier.",
      },
      {
        type: "p",
        text: "Fill in the canvas below and pin it somewhere visible. Every product, email, and ad should ladder back to it.",
      },
    ],
  },
  {
    slug: "shopify-launch",
    number: 5,
    title: "Shopify Launch Checklist",
    summary:
      "Everything that has to be true before you flip your store live, so you launch fast without leaving conversions on the table.",
    icon: Store,
    readingTime: "9 min read",
    outcomes: [
      "Set up a store that looks trustworthy from the first second",
      "Cover the conversion essentials most beginners forget",
      "Launch with confidence using a pre-flight checklist",
    ],
    template: {
      label: "Shopify Launch Checklist",
      filename: "shopify-launch-checklist.md",
      content: `# Shopify Launch Checklist

## Foundations
- [ ] Custom domain connected
- [ ] Clean theme, mobile-first, fast loading
- [ ] Logo, favicon, and consistent brand colours
- [ ] Professional product photography (multiple angles + lifestyle)

## Product pages
- [ ] Benefit-led title and description
- [ ] Clear pricing, variants, and stock
- [ ] Reviews / social proof block
- [ ] Shipping + returns answered on the page
- [ ] Strong, visible add-to-cart

## Trust
- [ ] About page with a real story
- [ ] Contact method that works
- [ ] Refund, privacy, and terms policies
- [ ] Trust badges / secure checkout visible

## Conversion essentials
- [ ] Email + SMS capture (welcome offer)
- [ ] Abandoned-cart flow live
- [ ] Free-shipping threshold or clear shipping cost
- [ ] Cross-sell / bundle on cart

## Pre-flight
- [ ] Test checkout with a real card
- [ ] Order confirmation + shipping emails styled
- [ ] Analytics + pixels firing
- [ ] Proofread everything on mobile
`,
    },
    blocks: [
      { type: "h", text: "Launch fast, but launch trustworthy" },
      {
        type: "p",
        text: "You don't need a perfect store, you need a credible one. Shoppers decide in seconds whether you look legit. This checklist covers the essentials that build trust and the conversion details beginners skip.",
      },
      { type: "h", text: "The four layers" },
      {
        type: "steps",
        items: [
          {
            title: "Foundations",
            text: "Domain, fast mobile-first theme, consistent branding, and real product photography. Presentation is perceived quality.",
          },
          {
            title: "Product pages",
            text: "Benefit-led copy, clear pricing, social proof, and shipping answered right there. This is where the sale is won or lost.",
          },
          {
            title: "Trust",
            text: "A real About page, working contact, and clear policies. These quietly remove the reasons people don't buy.",
          },
          {
            title: "Conversion",
            text: "Email/SMS capture, abandoned-cart flow, and a cart cross-sell. Small systems that lift revenue from day one.",
          },
        ],
      },
      {
        type: "callout",
        title: "Before you go live",
        text: "Place a real test order with your own card and read every confirmation email. Nothing erodes trust like a broken checkout on launch day.",
      },
      {
        type: "p",
        text: "Work top to bottom through the checklist below. When every box is ticked, you're ready to send traffic.",
      },
    ],
  },
  {
    slug: "ai-prompt-pack",
    number: 6,
    title: "AI Prompt Pack",
    summary:
      "Operate like a full team of one. Copy-paste prompts to research, write, and plan faster without losing your brand voice.",
    icon: Bolt,
    readingTime: "5 min read",
    outcomes: [
      "Use AI as a research and drafting partner, not a crutch",
      "Keep every output on-brand with a reusable brand brief",
      "Ship copy, content, and plans in a fraction of the time",
    ],
    template: {
      label: "AI Prompt Pack",
      filename: "ai-prompt-pack.md",
      content: `# AI Prompt Pack

## 0. Brand brief (paste this first, every time)
You are my brand strategist for [Brand]. We sell [product] to [customer].
Our positioning: [one-liner]. Our voice is [3 adjectives] and never [avoid].
Keep replies concrete, no hype, no filler.

## Research
- "List 10 specific pain points [customer] has around [problem]. For each, give the exact words they'd use."
- "Analyse these 3 competitors [links/notes]. Where is each weak, and what gap could we own?"

## Product & positioning
- "Give me 5 positioning angles for [product] aimed at [customer]. Rank by how hard they'd be to copy."
- "Write 8 benefit-led product titles and 3 description variants for [product]."

## Content & email
- "Draft a 5-email welcome flow for a new subscriber who got our free [lead magnet]. Warm, useful, one soft CTA each."
- "Turn this product page into 10 short-form video hooks for [platform]."

## Ops & planning
- "Build a 4-week launch plan for [product] with weekly goals, tasks, and one key metric each."
- "I have [budget/time]. What are the 3 highest-leverage things to do this week?"

## Tip
Always give AI your brand brief, real inputs, and a clear format. Vague in,
vague out. You're the editor, never ship a first draft unread.
`,
    },
    blocks: [
      { type: "h", text: "AI is leverage, not autopilot" },
      {
        type: "p",
        text: "Used well, AI compresses hours of research, writing, and planning into minutes, so a solo founder can move like a team. Used lazily, it produces generic sludge. The difference is how you brief it.",
      },
      { type: "h", text: "The three rules" },
      {
        type: "steps",
        items: [
          {
            title: "Always brief the brand",
            text: "Paste a short brand brief, who you are, who you serve, your voice, at the start of every session. Context is everything.",
          },
          {
            title: "Feed it real inputs",
            text: "Give it your actual notes, competitors, and customer language. Vague in, vague out.",
          },
          {
            title: "Stay the editor",
            text: "AI drafts, you decide. Never ship an output you haven't read and shaped in your voice.",
          },
        ],
      },
      {
        type: "callout",
        title: "Where it pays off most",
        text: "Research, first drafts, and planning. Use AI to get to a strong starting point fast, then bring the taste and judgement it can't.",
      },
      {
        type: "p",
        text: "The pack below has ready-to-use prompts for research, positioning, content, email, and planning. Start with the brand brief at the top.",
      },
    ],
  },
];

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getLessonNav(slug: string): {
  prev?: Lesson;
  next?: Lesson;
} {
  const i = lessons.findIndex((l) => l.slug === slug);
  return {
    prev: i > 0 ? lessons[i - 1] : undefined,
    next: i >= 0 && i < lessons.length - 1 ? lessons[i + 1] : undefined,
  };
}
