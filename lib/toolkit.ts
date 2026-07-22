// Profitable Brand Starter Kit content source of truth (no UI).

/* PAGE 1 · The Ecommerce Reality Check */
export const realityCheck: { q: string; a: string }[] = [
  {
    q: "How much money do I really need?",
    a: "Less than the gurus imply, more than €0. A lean, validated launch is realistic on €1,000–€3,000: a small first inventory or samples, a Shopify plan, a domain, and a modest ad-testing budget. Dropshipping lowers upfront inventory cost but not the cost of learning. Whatever the number, keep enough runway to make mistakes, because you will.",
  },
  {
    q: "How long does it take?",
    a: "Plan in months, not weeks. Picking a niche, validating demand, sourcing, and building a store is a 4–8 week job done properly. First sales can come fast, but a brand that pays you consistently usually takes 6–12 months of iteration. Speed comes from following a sequence instead of guessing.",
  },
  {
    q: "Is ecommerce still worth it in 2026?",
    a: "Yes, but the easy money is gone. Random dropshipping stores with a winning product and cheap ads mostly don't work anymore. What works is a real brand: a specific customer, a clear position, good content, and retention. Harder to start, far more durable once it clicks.",
  },
  {
    q: "Dropshipping vs holding inventory?",
    a: "Dropshipping is a great way to validate demand with low risk and slow shipping. Holding inventory gives you better margins, faster delivery, custom packaging, and a real brand, at the cost of upfront capital. Most successful founders start by validating (often dropshipping or small test batches) and move to inventory once a product proves itself.",
  },
  {
    q: "What do beginners usually earn?",
    a: "Honestly? Most earn nothing on their first store, and that's normal. The first store is tuition. The founders who win treat early losses as data, keep costs low, and reinvest. The ones who make it to consistent profit are usually on their second or third serious attempt, applying what the first one taught them.",
  },
  {
    q: "What mistakes destroy most brands?",
    a: "Building before validating, competing only on price, spending on ads too early, and quitting right before it works. Almost every failure traces back to skipping demand validation or running out of patience and cash at the same time. Avoid those and you're already ahead of most.",
  },
];

/* PAGE 2 · The Beginner Roadmap */
export const roadmapSteps: { title: string; text: string }[] = [
  {
    title: "Choose your niche",
    text: "Pick a specific audience with a real problem and money to spend. Narrow beats broad. You're looking for a group you understand and can create content for.",
  },
  {
    title: "Validate demand",
    text: "Prove people already want this before you build. Search volume, active communities, and profitable competitors are green lights. No demand, no business.",
  },
  {
    title: "Find suppliers",
    text: "Source samples from Alibaba, 1688 or local suppliers. Vet quality, MOQ, lead times and reliability before committing to a first order.",
  },
  {
    title: "Build your brand",
    text: "Define your positioning, name, voice and visual identity. This is the difference between a store and a brand people remember and return to.",
  },
  {
    title: "Create your Shopify store",
    text: "Launch a fast, trustworthy, mobile-first store with strong product pages, clear policies and email capture. Presentation is perceived quality.",
  },
  {
    title: "Launch",
    text: "Go live to a warm audience first, friends, community, email list, organic content. A soft launch surfaces problems before you spend on ads.",
  },
  {
    title: "Get your first sales",
    text: "Drive early traffic through content and small, tightly-targeted ad tests. Your first goal is data and proof, not scale.",
  },
  {
    title: "Scale",
    text: "Once the unit economics work, pour fuel on what's proven: scale winning ads, expand your catalogue and build retention with email and SMS.",
  },
];

/* PAGE 3 · Product Validation Framework */
export const validationBlocks: {
  key: string;
  title: string;
  hint: string;
}[] = [
  {
    key: "demand",
    title: "Demand",
    hint: "Are people already searching for and buying this? Existing demand beats demand you have to create.",
  },
  {
    key: "competition",
    title: "Competition",
    hint: "A few profitable competitors prove the market. A flood of identical sellers means a race to the bottom.",
  },
  {
    key: "margins",
    title: "Margins",
    hint: "Can you sell at 3–5x landed cost? Thin margins leave no room for ads, returns or mistakes.",
  },
  {
    key: "content",
    title: "Content Potential",
    hint: "Is the product visual and demonstrable? Easy content is free distribution.",
  },
];

/* PAGE 4 · Product Research Resources */
export const researchGroups: {
  title: string;
  items: { name: string; desc: string; url: string }[];
}[] = [
  {
    title: "Product Ideas",
    items: [
      { name: "Minea", desc: "Ad-spy and winning-product discovery across platforms.", url: "https://www.minea.com" },
      { name: "Kalodata", desc: "TikTok Shop analytics, find what's actually selling.", url: "https://www.kalodata.com" },
      { name: "Amazon Movers & Shakers", desc: "Biggest gainers by category, real demand signals.", url: "https://www.amazon.com/gp/movers-and-shakers" },
      { name: "TikTok Creative Center", desc: "Trending products, hashtags and creatives.", url: "https://ads.tiktok.com/business/creativecenter" },
    ],
  },
  {
    title: "Suppliers",
    items: [
      { name: "Alibaba", desc: "Global wholesale and manufacturing marketplace.", url: "https://www.alibaba.com" },
      { name: "1688", desc: "China domestic wholesale, lower prices, more legwork.", url: "https://www.1688.com" },
      { name: "Made-in-China", desc: "Verified manufacturers across categories.", url: "https://www.made-in-china.com" },
    ],
  },
  {
    title: "Competitor Research",
    items: [
      { name: "SimilarWeb", desc: "Traffic sources, volume and audience of any store.", url: "https://www.similarweb.com" },
      { name: "BuiltWith", desc: "See the exact tech and apps a store runs on.", url: "https://builtwith.com" },
    ],
  },
  {
    title: "Ads Research",
    items: [
      { name: "Meta Ads Library", desc: "Every active ad your competitors run on Meta.", url: "https://www.facebook.com/ads/library" },
      { name: "TikTok Ads Library", desc: "Browse live TikTok ads by region and keyword.", url: "https://library.tiktok.com" },
    ],
  },
];

/* PAGE 5 · 100 AI Prompts I Actually Use */
export const promptCategories = [
  "Product Research",
  "Competitor Analysis",
  "Branding",
  "Shopify",
  "Copywriting",
  "Email Marketing",
  "Ads",
  "Content Creation",
] as const;

export type PromptCategory = (typeof promptCategories)[number];

export const prompts: {
  id: string;
  category: PromptCategory;
  title: string;
  prompt: string;
}[] = [
  // Product Research
  { id: "pr1", category: "Product Research", title: "Pain point mining", prompt: "Act as an ecommerce researcher. For [niche], list 10 specific customer pain points ranked by intensity. For each, give the exact words customers use and a product angle that solves it." },
  { id: "pr2", category: "Product Research", title: "Trend validation", prompt: "Is demand for [product] rising, flat or fading? Summarise the evidence you'd check (search trends, communities, marketplaces) and give me a go / wait / avoid verdict with reasons." },
  { id: "pr3", category: "Product Research", title: "Niche scoring", prompt: "Score this niche [niche] from 1–10 on demand, competition, margin potential, content potential and passion. Explain each score and give a final recommendation." },
  { id: "pr4", category: "Product Research", title: "Adjacent products", prompt: "My core product is [product] for [customer]. List 8 adjacent products this customer also buys, so I can plan a brand instead of a one-product store." },
  { id: "pr5", category: "Product Research", title: "Angle generator", prompt: "Give me 10 marketing angles for [product], each targeting a different motivation (status, convenience, fear, identity, savings...). Rank by how underused each is." },
  // Competitor Analysis
  { id: "ca1", category: "Competitor Analysis", title: "Gap analysis", prompt: "Analyse these competitors: [links/notes]. For each, summarise positioning, price, and weaknesses. Then identify 3 gaps I could own with [product]." },
  { id: "ca2", category: "Competitor Analysis", title: "Review mining", prompt: "Here are competitor reviews: [paste]. Cluster the top complaints and top praises. Turn each complaint into a product or messaging opportunity for my brand." },
  { id: "ca3", category: "Competitor Analysis", title: "Offer teardown", prompt: "Break down this competitor offer: [describe]. What makes it compelling, what's weak, and how could I build a clearly stronger offer for [customer]?" },
  { id: "ca4", category: "Competitor Analysis", title: "Positioning map", prompt: "Given these competitors [list], map them on two axes I choose (e.g. price vs premium feel). Show me where the open space is and how to position there." },
  // Branding
  { id: "br1", category: "Branding", title: "Positioning statement", prompt: "Write a one-sentence positioning statement for [brand]: For [customer] who [need], [brand] is the [category] that [benefit], because [reason]. Give 3 variations." },
  { id: "br2", category: "Branding", title: "Brand names", prompt: "Suggest 15 brand names for a [category] brand that feels [3 adjectives]. Mix invented words, real words and compounds. Flag likely .com issues." },
  { id: "br3", category: "Branding", title: "Brand voice", prompt: "Define a brand voice for [brand] selling [product] to [customer]. Give 3 voice adjectives, 3 things we never sound like, and 5 example sentences." },
  { id: "br4", category: "Branding", title: "Tagline", prompt: "Write 10 taglines for [brand] (5–7 words each) that capture [core benefit]. Range from literal to bold." },
  // Shopify
  { id: "sh1", category: "Shopify", title: "Product page", prompt: "Write a Shopify product page for [product]: a benefit-led title, 3 subheads, a 120-word description, 5 bullet benefits, and an FAQ answering 5 objections. Voice: [adjectives]." },
  { id: "sh2", category: "Shopify", title: "Store structure", prompt: "Plan the page and navigation structure for a Shopify store selling [products]. Include homepage sections, collections, and trust pages in priority order." },
  { id: "sh3", category: "Shopify", title: "Trust checklist", prompt: "Audit my Shopify store for trust. List everything a first-time visitor checks (subconsciously) before buying, and how to satisfy each on the page." },
  { id: "sh4", category: "Shopify", title: "Upsell ideas", prompt: "Suggest 6 upsell and cross-sell ideas for [product] I can set up in Shopify, with the exact placement (cart, post-purchase, product page) for each." },
  // Copywriting
  { id: "cw1", category: "Copywriting", title: "Hero variations", prompt: "Write 8 hero headline + subhead pairs for [brand] selling [product] to [customer]. Range from rational to emotional. Headlines under 8 words." },
  { id: "cw2", category: "Copywriting", title: "Objection handling", prompt: "List the top 7 reasons someone wouldn't buy [product], then write one short, honest line that dissolves each objection." },
  { id: "cw3", category: "Copywriting", title: "Benefit rewrite", prompt: "Turn these product features into customer benefits: [paste features]. For each, use the 'which means you' method to reach the real outcome." },
  { id: "cw4", category: "Copywriting", title: "Founder story", prompt: "Write a 150-word founder story for [brand] that builds trust and explains why we exist, without sounding corporate or fake." },
  // Email Marketing
  { id: "em1", category: "Email Marketing", title: "Welcome flow", prompt: "Draft a 5-email welcome flow for a new subscriber who claimed [lead magnet / discount]. Warm and useful, one soft CTA each. Give subject lines and outlines." },
  { id: "em2", category: "Email Marketing", title: "Abandoned cart", prompt: "Write a 3-email abandoned-cart sequence for [product]: reminder, objection-handling, gentle urgency. Include subject lines and preview text." },
  { id: "em3", category: "Email Marketing", title: "Launch campaign", prompt: "Plan a 4-email launch campaign for [product/offer]: teaser, launch, social proof, last-chance. Give the goal and angle of each email." },
  { id: "em4", category: "Email Marketing", title: "Win-back", prompt: "Write a 2-email win-back sequence for customers who haven't bought in 90 days from [brand]. Make it feel personal, not desperate." },
  // Ads
  { id: "ad1", category: "Ads", title: "Primary text angles", prompt: "Write 5 Meta ad primary-text variations for [product], each a different angle (PAS, testimonial, us-vs-them, founder story, listicle). 90–120 words each." },
  { id: "ad2", category: "Ads", title: "Video hooks", prompt: "Give me 15 scroll-stopping first-3-second hooks for a video ad selling [product] to [customer]. Make them specific and pattern-interrupting." },
  { id: "ad3", category: "Ads", title: "UGC script", prompt: "Write a 30-second UGC-style ad script for [product]: hook, problem, product reveal, proof, CTA. Native and casual, not salesy." },
  { id: "ad4", category: "Ads", title: "Audience ideas", prompt: "Suggest 10 interest and behaviour targeting ideas on Meta for [product] and [customer], grouped by intent level." },
  // Content Creation
  { id: "cc1", category: "Content Creation", title: "TikTok concepts", prompt: "Write 10 TikTok video concepts for [product]: a hook, a 15–30s outline and an on-screen text idea for each. Native, not ad-like." },
  { id: "cc2", category: "Content Creation", title: "Content calendar", prompt: "Build a 2-week content calendar for [brand] on [platform]. For each post give a hook, format, and goal (reach, trust, or conversion)." },
  { id: "cc3", category: "Content Creation", title: "Repurpose", prompt: "Turn this long piece [paste] into 5 short-form scripts, 3 email snippets and 5 tweet-style hooks, keeping the brand voice." },
  { id: "cc4", category: "Content Creation", title: "Hook bank", prompt: "Give me 20 reusable content hooks for the [niche] audience, mixing curiosity, contrarian takes, and relatable pain. Keep each under 12 words." },
];

/* PAGE 6 · Shopify Launch Checklist */
export const shopifySections: { title: string; items: string[] }[] = [
  {
    title: "Foundations",
    items: [
      "Custom domain connected and SSL active",
      "Fast, mobile-first theme installed",
      "Logo, favicon and brand colours applied",
      "Brand fonts set in theme settings",
    ],
  },
  {
    title: "Landing & product pages",
    items: [
      "Benefit-led headline above the fold (not just a product name)",
      "Emotion first, logic second, objections handled before the price",
      "Professional photos: multiple angles + lifestyle",
      "Clear pricing, variants and stock",
      "Reviews / social proof block visible",
      "Strong, sticky add-to-cart",
    ],
  },
  {
    title: "Trust",
    items: [
      "About page with a real story",
      "Working contact method",
      "Refund, privacy, shipping and terms policies",
      "Secure-checkout and payment badges visible",
    ],
  },
  {
    title: "Capture emails before you spend on ads",
    items: [
      "Email + SMS capture with a welcome offer",
      "Pop-up or embedded form on the homepage",
      "Welcome flow live so new subscribers get value",
    ],
  },
  {
    title: "Conversion essentials",
    items: [
      "Abandoned-cart flow live",
      "Free-shipping threshold or clear shipping cost",
      "Cross-sell / bundle on the cart",
      "Trust-building FAQ on product pages",
    ],
  },
  {
    title: "Payments & shipping",
    items: [
      "Shopify Payments / provider live",
      "PayPal and express checkout enabled",
      "Shipping rates, zones and delivery times configured",
    ],
  },
  {
    title: "Tracking & analytics",
    items: [
      "Meta Pixel + Conversions API installed",
      "GA4 and Google Ads tags firing",
      "TikTok pixel installed (if used)",
      "Key events (add-to-cart, checkout) tracked",
    ],
  },
  {
    title: "Pre-flight",
    items: [
      "Place a real test order with a live card",
      "Order confirmation + shipping emails styled",
      "Proofread every page on mobile",
      "Soft-launch to a warm audience before paid ads",
    ],
  },
];

/* PAGE 7 · 12 Mistakes That Kill Ecommerce Brands */
export const mistakes: { title: string; why: string; fix: string }[] = [
  {
    title: "Choosing products because they're trending",
    why: "Trends peak and crash. By the time you've sourced and launched, the market is saturated and the hype is gone.",
    fix: "Pick products with durable demand you can build a brand around. Use trends as traffic, not as your foundation.",
  },
  {
    title: "Spending months designing a logo",
    why: "A logo doesn't make sales, and perfectionism here is just productive procrastination that delays real feedback.",
    fix: "Ship a clean, simple logo in a day. Refine your brand once you have customers and revenue.",
  },
  {
    title: "Ordering too much inventory",
    why: "Big first orders lock up your cash and punish you hard if the product doesn't sell. Most first products don't.",
    fix: "Validate with samples or a small batch. Reorder from profit once demand is proven.",
  },
  {
    title: "Ignoring content marketing",
    why: "If you only exist through paid ads, your costs rise forever and one account ban can end the business.",
    fix: "Build organic content from day one. It compounds, lowers CAC, and gives you owned distribution.",
  },
  {
    title: "Launching without collecting emails",
    why: "Traffic you don't capture is gone forever. Without a list, every launch and promo starts from zero.",
    fix: "Add email + SMS capture before you drive any traffic, and build a welcome flow that delivers value.",
  },
  {
    title: "Not validating demand",
    why: "Building a store for a product nobody wants is the single most common way founders waste months and money.",
    fix: "Prove demand exists (search, communities, competitors) before you build or buy anything.",
  },
  {
    title: "Running ads too early",
    why: "Ads amplify whatever you have. Point traffic at an unproven store and you just pay to confirm it doesn't convert.",
    fix: "Get organic proof and a converting page first. Then test ads with small, controlled budgets.",
  },
  {
    title: "Competing only on price",
    why: "There's always someone cheaper. A price war destroys the margins you need to survive and grow.",
    fix: "Compete on positioning, experience and brand. Give people a reason to choose you beyond cost.",
  },
  {
    title: "Copying competitors",
    why: "A copy is always a worse version of the original, and it gives customers no reason to switch to you.",
    fix: "Study competitors for gaps, then differentiate. Be the obvious choice for a specific person.",
  },
  {
    title: "Ignoring customer retention",
    why: "If every sale is a new customer, you're on a treadmill. Acquisition is expensive; repeat buyers are where profit lives.",
    fix: "Invest in email, post-purchase experience and product quality so customers come back and refer others.",
  },
  {
    title: "No clear positioning",
    why: "If you're for everyone, you're for no one. Vague brands are forgettable and hard to market.",
    fix: "Choose a specific customer and a sharp angle. Say clearly who you're for and why you're different.",
  },
  {
    title: "Quitting too early",
    why: "Most brands are abandoned right before the lessons compound into results. Early failure looks identical to almost-there.",
    fix: "Set a realistic runway, treat losses as tuition, and keep iterating. Persistence with feedback wins.",
  },
];
