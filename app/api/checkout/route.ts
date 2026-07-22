import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

/**
 * Creates a Stripe Checkout Session for the Profitable Brand Roadmap and
 * returns its hosted URL. Requires two environment variables set in Vercel:
 *   STRIPE_SECRET_KEY  — your Stripe secret key (sk_live_… or sk_test_…)
 *   STRIPE_PRICE_ID    — the price id of the Roadmap product (price_…)
 */
export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;

  if (!secretKey || !priceId) {
    return NextResponse.json(
      { error: "Checkout is not configured yet." },
      { status: 503 },
    );
  }

  const origin =
    request.headers.get("origin") ?? new URL(request.url).origin;

  try {
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      success_url: `${origin}/toolkit/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/toolkit/next-steps`,
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json(
      { error: "Could not start checkout. Please try again." },
      { status: 500 },
    );
  }
}
