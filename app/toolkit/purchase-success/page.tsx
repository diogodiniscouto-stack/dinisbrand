import type { Metadata } from "next";
import Link from "next/link";
import Stripe from "stripe";

export const metadata: Metadata = { title: "Purchase complete" };

export default async function PurchaseSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  const secretKey = process.env.STRIPE_SECRET_KEY;

  let email: string | null = null;
  let paid = false;
  if (secretKey && session_id) {
    try {
      const stripe = new Stripe(secretKey);
      const session = await stripe.checkout.sessions.retrieve(session_id);
      paid = session.payment_status === "paid";
      email = session.customer_details?.email ?? null;
    } catch {
      /* show a friendly success regardless */
    }
  }

  return (
    <div className="mx-auto max-w-xl py-6 text-center">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-soft">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <h1 className="mt-6 text-3xl font-semibold tracking-tighter text-neutral-900 sm:text-4xl">
        You&apos;re in. Welcome aboard.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-pretty text-lg leading-relaxed text-neutral-500">
        {paid
          ? "Your payment went through. The Profitable Brand Roadmap is yours, with lifetime access and updates."
          : "Thanks for your purchase. The Profitable Brand Roadmap is on its way."}
        {email ? ` A receipt is heading to ${email}.` : ""}
      </p>

      <div className="mt-8 flex flex-col items-center gap-3">
        <Link
          href="/toolkit"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-[0.98rem] font-semibold text-white shadow-soft transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98]"
        >
          Back to the Dashboard
        </Link>
        <a
          href="https://www.linkedin.com/in/diogo-dinis-a16bb1188/"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline"
        >
          Questions? Message me on LinkedIn
        </a>
      </div>
    </div>
  );
}
