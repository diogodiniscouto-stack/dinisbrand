// Founder Toolkit, data source of truth (content, no UI).

/* 01 · Product Validation Scorecard */
export const validationRows: {
  category: string;
  evaluate: string;
}[] = [
  {
    category: "Market Size",
    evaluate: "Is the audience big enough to build a real brand, but not impossibly broad?",
  },
  {
    category: "Competition",
    evaluate: "Is there proven demand without being a saturated race to the bottom?",
  },
  {
    category: "Margins",
    evaluate: "Can you sell at 3–5x landed cost with room for ads and returns?",
  },
  {
    category: "Content Potential",
    evaluate: "Is the product visual, demonstrable and easy to create content around?",
  },
  {
    category: "Price Point",
    evaluate: "Is the price high enough to be profitable, low enough to be an easy yes?",
  },
  {
    category: "Passion & Interest",
    evaluate: "Will you still care about this niche in 12 months?",
  },
];

export const validationBands = [
  { min: 0, max: 23, label: "Poor", tone: "red" as const, note: "Reconsider, the fundamentals aren't there yet." },
  { min: 24, max: 35, label: "Average", tone: "amber" as const, note: "Workable, but sharpen the weak categories first." },
  { min: 36, max: 49, label: "Good", tone: "blue" as const, note: "Strong candidate. Move to product research." },
  { min: 50, max: 60, label: "Excellent", tone: "green" as const, note: "Rare opportunity. Build with conviction." },
];

/* 02 · Brand Positioning Canvas */
export const canvasBlocks: {
  key: string;
  title: string;
  hint: string;
  placeholder: string;
  span?: 1 | 2;
}[] = [
  { key: "target", title: "Target Customer", hint: "Who exactly is this for?", placeholder: "e.g. Busy 28–40 y/o home cooks who care about design…", span: 1 },
  { key: "pains", title: "Pain Points", hint: "What frustrates them today?", placeholder: "The problems they'd pay to make go away…", span: 1 },
  { key: "dream", title: "Dream Outcome", hint: "What do they truly want?", placeholder: "The after-state they're buying…", span: 1 },
  { key: "uvp", title: "Unique Value Proposition", hint: "Why you, not the alternative?", placeholder: "The one-sentence reason to choose you…", span: 1 },
  { key: "positioning", title: "Positioning Statement", hint: "For [x] who [y], we are the [z] that…", placeholder: "For ___ who ___, [Brand] is the ___ that ___, because ___.", span: 2 },
  { key: "personality", title: "Brand Personality", hint: "If the brand were a person…", placeholder: "e.g. Confident, warm, a little rebellious…", span: 1 },
  { key: "visual", title: "Visual Direction", hint: "Look & feel in words", placeholder: "Colours, type, mood, references…", span: 1 },
  { key: "competitors", title: "Competitors", hint: "Who else is in the frame?", placeholder: "The 3–4 brands customers compare you to…", span: 1 },
  { key: "differentiators", title: "Key Differentiators", hint: "What you do that they can't", placeholder: "The hard-to-copy advantages…", span: 1 },
  { key: "voice", title: "Brand Voice", hint: "How you sound", placeholder: "We sound ___, ___, ___. We never sound ___.", span: 1 },
  { key: "tagline", title: "Tagline", hint: "5–7 memorable words", placeholder: "The line people remember…", span: 1 },
  { key: "mission", title: "Mission", hint: "Why the brand exists", placeholder: "The change you're here to make…", span: 2 },
];

/* 03 · Supplier Outreach Templates */
export const supplierTemplates: {
  id: string;
  title: string;
  tag: string;
  subject: string;
  body: string;
}[] = [
  {
    id: "alibaba-first",
    title: "Alibaba First Contact",
    tag: "Sourcing",
    subject: "Wholesale enquiry, [Product] for our brand",
    body: `Hi [Name],

I'm sourcing [product] for our brand, [Brand]. We're preparing our first production run and building a shortlist of long-term suppliers.

Could you please share:
• MOQ and unit price at MOQ and at 2x MOQ
• Production and shipping lead times
• Customization options (logo, packaging, materials)
• Sample cost and timeline

We plan to reorder monthly once sell-through is proven. Looking forward to working together.

Best,
[Your name], [Brand]
[website]`,
  },
  {
    id: "european",
    title: "European Supplier",
    tag: "Sourcing",
    subject: "Partnership enquiry, [Brand] ([Country])",
    body: `Hello [Name],

We're [Brand], a growing ecommerce brand based in [Country]. We're looking for a reliable European supplier for [product] to shorten lead times and support local stock.

Could you tell me more about:
• Wholesale pricing and minimum order
• Lead times for stock and reorders
• Whitelabel / private-label options
• Payment terms

Happy to jump on a quick call if easier.

Kind regards,
[Your name]
[Brand], [website]`,
  },
  {
    id: "sample",
    title: "Sample Request",
    tag: "Quality",
    subject: "Sample order, [Product] / [Variant]",
    body: `Hi [Name],

The specs look great. Before our first bulk order I'd like to order a sample of [variant] to check quality and finish.

Please share:
• Sample cost and how to pay
• Estimated delivery time
• Whether the sample cost is credited against the first order

If quality matches, our opening order would be around [qty], with monthly reorders.

Thanks,
[Your name], [Brand]`,
  },
  {
    id: "moq",
    title: "MOQ Negotiation",
    tag: "Negotiation",
    subject: "MOQ flexibility for a first order",
    body: `Hi [Name],

Thanks for the details. We're excited to start, but [MOQ] is above our first-run budget as we validate demand.

Would you be open to:
• A reduced first-order MOQ of [target qty], or
• MOQ at current price with a committed reorder within [timeframe]?

We're building for the long term and want you as our main supplier. What can we make work?

Best,
[Your name], [Brand]`,
  },
  {
    id: "price",
    title: "Price Negotiation",
    tag: "Negotiation",
    subject: "Pricing for [qty] units, [Product]",
    body: `Hi [Name],

Quality looks strong and we're ready to move. To make the unit economics work at [qty], I'm aiming for [target price]/unit.

If we can meet there, I'll place the order this week and commit to reordering [cadence] provided sell-through holds. Happy to increase volume as we scale.

Can we agree on [target price]?

Thanks,
[Your name], [Brand]`,
  },
  {
    id: "follow-up",
    title: "Follow-up",
    tag: "Ops",
    subject: "Following up, [Product] quote",
    body: `Hi [Name],

Just following up on my message about [product]. We're finalising suppliers this week and would love to include you.

If you can share [MOQ / price / lead time], I can move quickly. Anything you need from my side to speed things up?

Thanks,
[Your name], [Brand]`,
  },
  {
    id: "agreement",
    title: "Final Agreement",
    tag: "Ops",
    subject: "Confirming our first order, [Brand]",
    body: `Hi [Name],

Great working this out. Confirming the details of our first order:

• Product: [product / variant]
• Quantity: [qty]
• Unit price: [price]
• Total: [total]
• Lead time: [days]
• Payment terms: [deposit %] deposit, balance on [milestone]
• Shipping: [method / Incoterm]

Please send the proforma invoice and I'll arrange the deposit. Looking forward to a long partnership.

Best,
[Your name], [Brand]`,
  },
];

/* 04 · Shopify Launch Checklist */
export const checklistSections: { title: string; items: string[] }[] = [
  {
    title: "Brand",
    items: [
      "Logo, favicon and brand colours applied",
      "Brand fonts set in theme settings",
      "Consistent tone of voice across pages",
    ],
  },
  {
    title: "Store",
    items: [
      "Fast, mobile-first theme installed",
      "Homepage with clear value proposition",
      "Navigation and footer links complete",
      "Custom domain connected",
    ],
  },
  {
    title: "Products",
    items: [
      "Benefit-led titles and descriptions",
      "Professional photos (angles + lifestyle)",
      "Variants, pricing and inventory set",
      "Reviews / social proof enabled",
    ],
  },
  {
    title: "Payments",
    items: [
      "Shopify Payments / provider live",
      "PayPal and express checkout enabled",
      "Test order placed with a real card",
    ],
  },
  {
    title: "Shipping",
    items: [
      "Shipping rates and zones configured",
      "Free-shipping threshold decided",
      "Delivery times shown on product pages",
    ],
  },
  {
    title: "Legal",
    items: [
      "Refund, privacy and terms policies added",
      "Cookie / GDPR banner configured",
      "Contact page with working method",
    ],
  },
  {
    title: "Tracking",
    items: [
      "Meta Pixel + Conversions API installed",
      "Google Ads / GA4 tags firing",
      "TikTok pixel installed (if used)",
    ],
  },
  {
    title: "Marketing",
    items: [
      "Email + SMS capture with welcome offer",
      "Abandoned-cart flow live",
      "Launch offer / bundle ready",
    ],
  },
  {
    title: "Analytics",
    items: [
      "GA4 configured and reporting",
      "Key events (add-to-cart, checkout) tracked",
      "Dashboard bookmarked for daily review",
    ],
  },
];

/* 05 · AI Prompt Library */
export const promptCategories = [
  "Product Research",
  "Branding",
  "Copywriting",
  "Facebook Ads",
  "Google Ads",
  "SEO",
  "Email Marketing",
  "Customer Service",
  "TikTok",
  "LinkedIn",
] as const;

export type PromptCategory = (typeof promptCategories)[number];

export const prompts: {
  id: string;
  category: PromptCategory;
  title: string;
  prompt: string;
}[] = [
  {
    id: "pr-1",
    category: "Product Research",
    title: "Find underserved pain points",
    prompt:
      "Act as an ecommerce researcher. For [niche], list 10 specific customer pain points, ranked by intensity. For each, give the exact words customers use and a product angle that solves it.",
  },
  {
    id: "pr-2",
    category: "Product Research",
    title: "Competitor gap analysis",
    prompt:
      "Analyse these competitors: [links/notes]. For each, summarise their positioning, price, and weaknesses. Then identify 3 gaps in the market I could own with [product].",
  },
  {
    id: "br-1",
    category: "Branding",
    title: "Positioning angles",
    prompt:
      "Give me 5 distinct positioning angles for [product] aimed at [customer]. Rank them by how hard they'd be for competitors to copy and explain why.",
  },
  {
    id: "br-2",
    category: "Branding",
    title: "Brand name ideas",
    prompt:
      "Suggest 15 brand name ideas for a [category] brand that feels [3 adjectives]. Mix invented words, real words and compounds. Note which likely have .com availability issues.",
  },
  {
    id: "cw-1",
    category: "Copywriting",
    title: "High-converting product page",
    prompt:
      "Write a product page for [product]: a benefit-led headline, 3 subheads, a 120-word description, 5 bullet benefits, and an FAQ of 5 objections with answers. Voice: [adjectives].",
  },
  {
    id: "cw-2",
    category: "Copywriting",
    title: "Hero section variations",
    prompt:
      "Write 8 hero headline + subhead pairs for [brand] selling [product] to [customer]. Range from rational to emotional. Keep headlines under 8 words.",
  },
  {
    id: "fb-1",
    category: "Facebook Ads",
    title: "Primary text angles",
    prompt:
      "Write 5 Facebook primary-text variations for [product], each using a different angle (problem-agitate-solve, testimonial, us-vs-them, founder story, listicle). 90–120 words each.",
  },
  {
    id: "fb-2",
    category: "Facebook Ads",
    title: "Hook lines for creatives",
    prompt:
      "Give me 15 scroll-stopping first-3-second hooks for a video ad selling [product] to [customer]. Make them pattern-interrupting and specific.",
  },
  {
    id: "gg-1",
    category: "Google Ads",
    title: "Search ad copy",
    prompt:
      "Write a Google Search ad for [product]: 12 headlines (≤30 chars) and 4 descriptions (≤90 chars). Include benefits, offer and a clear CTA. Target keyword: [keyword].",
  },
  {
    id: "gg-2",
    category: "Google Ads",
    title: "Keyword themes",
    prompt:
      "List 20 high-intent keywords for [product], grouped into 4 ad-group themes. Mark which are bottom-of-funnel vs research-stage.",
  },
  {
    id: "seo-1",
    category: "SEO",
    title: "Blog cluster plan",
    prompt:
      "Build a content cluster for [topic]: 1 pillar page and 8 supporting articles. For each, give the target keyword, search intent and a compelling title.",
  },
  {
    id: "seo-2",
    category: "SEO",
    title: "Collection page copy",
    prompt:
      "Write an SEO-friendly intro (120 words) for a [category] collection page targeting [keyword]. Natural, helpful, not stuffed. Add a 3-question FAQ.",
  },
  {
    id: "em-1",
    category: "Email Marketing",
    title: "Welcome flow",
    prompt:
      "Draft a 5-email welcome flow for a subscriber who claimed our [lead magnet]. Warm and useful, one soft CTA each. Give subject lines and body outlines.",
  },
  {
    id: "em-2",
    category: "Email Marketing",
    title: "Abandoned cart series",
    prompt:
      "Write a 3-email abandoned-cart sequence for [product]. Email 1 reminder, email 2 objection-handling, email 3 gentle urgency. Include subject lines.",
  },
  {
    id: "cs-1",
    category: "Customer Service",
    title: "Refund response",
    prompt:
      "Write an empathetic response to a customer requesting a refund for [reason]. Keep the relationship, follow our policy: [policy], and offer a fair resolution.",
  },
  {
    id: "cs-2",
    category: "Customer Service",
    title: "FAQ from tickets",
    prompt:
      "Here are recent support messages: [paste]. Cluster them into the top 8 recurring questions and write a clear, on-brand answer for each.",
  },
  {
    id: "tt-1",
    category: "TikTok",
    title: "Video script hooks",
    prompt:
      "Write 10 TikTok video concepts for [product]: a hook, a 15–30s script outline and an on-screen text idea for each. Native, not ad-like.",
  },
  {
    id: "tt-2",
    category: "TikTok",
    title: "Trend adaptation",
    prompt:
      "Given this trend/format: [describe], give me 5 ways [brand] could adapt it authentically to showcase [product] without feeling forced.",
  },
  {
    id: "li-1",
    category: "LinkedIn",
    title: "Founder build-in-public post",
    prompt:
      "Write a LinkedIn post sharing a lesson from building [brand]: a strong hook, a short story, 3 takeaways and a question to drive comments. No hashtags spam.",
  },
  {
    id: "li-2",
    category: "LinkedIn",
    title: "Milestone announcement",
    prompt:
      "Draft a LinkedIn post announcing [milestone] for [brand]. Humble, specific, credits the team/customers, and invites the reader into the journey.",
  },
];

/* 07 · Resource Directory */
export const resources: {
  name: string;
  category: string;
  description: string;
  url: string;
}[] = [
  { name: "Alibaba", category: "Sourcing", description: "Global wholesale & manufacturing marketplace.", url: "https://www.alibaba.com" },
  { name: "1688", category: "Sourcing", description: "China domestic wholesale, lower prices, more legwork.", url: "https://www.1688.com" },
  { name: "CJ Dropshipping", category: "Fulfilment", description: "Sourcing, warehousing and fulfilment for dropshipping.", url: "https://cjdropshipping.com" },
  { name: "AutoDS", category: "Fulfilment", description: "Product research and dropshipping automation.", url: "https://www.autods.com" },
  { name: "Canva", category: "Design", description: "Fast, on-brand design for creative and social.", url: "https://www.canva.com" },
  { name: "ChatGPT", category: "AI", description: "AI assistant for research, copy and planning.", url: "https://chat.openai.com" },
  { name: "Claude", category: "AI", description: "AI assistant for long-form thinking and writing.", url: "https://claude.ai" },
  { name: "Shopify", category: "Store", description: "The ecommerce platform to build and run your store.", url: "https://www.shopify.com" },
  { name: "Klaviyo", category: "Email", description: "Email & SMS marketing built for ecommerce.", url: "https://www.klaviyo.com" },
  { name: "Meta Ads Library", category: "Research", description: "See every active ad your competitors run.", url: "https://www.facebook.com/ads/library" },
  { name: "Google Trends", category: "Research", description: "Validate demand and spot rising interest.", url: "https://trends.google.com" },
  { name: "Exploding Topics", category: "Research", description: "Find trends before they peak.", url: "https://explodingtopics.com" },
];
