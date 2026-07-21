"use client";

import { ToolHeader } from "./ToolHeader";
import { useLocalState } from "@/lib/useLocalState";
import { TrendingUp } from "@/components/Icons";
import { cn } from "@/lib/utils";

type Inputs = {
  price: number;
  cogs: number;
  shipping: number;
  packaging: number;
  fees: number; // % of price
  marketing: number; // per order
  returns: number; // %
};

const initial: Inputs = {
  price: 49.9,
  cogs: 12,
  shipping: 4,
  packaging: 1.5,
  fees: 2.9,
  marketing: 12,
  returns: 5,
};

const fields: {
  key: keyof Inputs;
  label: string;
  suffix: "€" | "%";
}[] = [
  { key: "price", label: "Selling Price", suffix: "€" },
  { key: "cogs", label: "COGS", suffix: "€" },
  { key: "shipping", label: "Shipping", suffix: "€" },
  { key: "packaging", label: "Packaging", suffix: "€" },
  { key: "fees", label: "Transaction Fees", suffix: "%" },
  { key: "marketing", label: "Marketing Cost", suffix: "€" },
  { key: "returns", label: "Returns", suffix: "%" },
];

const eur = (n: number) =>
  new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(n) ? n : 0);

export function ProfitCalculator() {
  const [inp, setInp] = useLocalState<Inputs>("toolkit:profit", initial);

  const feeAmount = inp.price * (inp.fees / 100);
  const returnsCost = inp.price * (inp.returns / 100);
  const grossMargin =
    inp.price - inp.cogs - inp.shipping - inp.packaging - feeAmount;
  const netProfit = grossMargin - inp.marketing - returnsCost;
  const profitPct = inp.price > 0 ? (netProfit / inp.price) * 100 : 0;
  const breakEvenRoas = grossMargin > 0 ? inp.price / grossMargin : Infinity;
  const profitable = netProfit > 0;

  function set(key: keyof Inputs, value: number) {
    setInp((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div>
      <ToolHeader
        index="06 · Calculator"
        title="Profit Calculator"
        description="Know your real margins before you spend a cent on ads. Adjust the inputs and watch your net profit, margin and break-even ROAS update instantly."
        onReset={() => setInp(initial)}
      />

      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        {/* Inputs */}
        <div className="rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-soft">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-400">
            Inputs — per order
          </h3>
          <div className="flex flex-col gap-3">
            {fields.map((f) => (
              <label
                key={f.key}
                className="flex items-center justify-between gap-4"
              >
                <span className="text-[0.95rem] font-medium text-neutral-700">
                  {f.label}
                </span>
                <span className="relative">
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={f.suffix === "%" ? 0.1 : 0.5}
                    value={Number.isFinite(inp[f.key]) ? inp[f.key] : 0}
                    onChange={(e) => set(f.key, Number(e.target.value))}
                    className="h-10 w-32 rounded-xl border border-neutral-200 bg-neutral-50/60 pl-3 pr-8 text-right text-[0.95rem] font-semibold text-neutral-900 outline-none transition-colors focus:border-accent/40 focus:bg-white focus:ring-2 focus:ring-accent/10"
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-400">
                    {f.suffix}
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Outputs */}
        <div className="flex flex-col gap-4">
          {/* Profit card */}
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl border p-6 shadow-card transition-colors",
              profitable
                ? "border-emerald-200 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white"
                : "border-neutral-200 bg-neutral-900 text-white",
            )}
          >
            <div className="flex items-center gap-2 text-sm font-medium text-white/80">
              <TrendingUp className="h-4 w-4" />
              Net Profit — per order
            </div>
            <div className="mt-2 text-4xl font-semibold tracking-tighter">
              {eur(netProfit)}
            </div>
            <div className="mt-1 text-sm text-white/70">
              {profitable
                ? `${profitPct.toFixed(1)}% profit margin`
                : "Not profitable at these numbers"}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <Metric label="Gross Margin" value={eur(grossMargin)} />
            <Metric
              label="Profit %"
              value={`${profitPct.toFixed(1)}%`}
              tone={profitable ? "green" : "red"}
            />
            <Metric
              label="Break-even ROAS"
              value={
                Number.isFinite(breakEvenRoas)
                  ? `${breakEvenRoas.toFixed(2)}x`
                  : "—"
              }
            />
            <Metric
              label="Fees + Returns"
              value={eur(feeAmount + returnsCost)}
            />
          </div>

          <p className="px-1 text-xs leading-relaxed text-neutral-400">
            Break-even ROAS is the ad return you need just to cover costs — spend
            below it and every sale loses money. Aim comfortably above it.
          </p>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  tone = "neutral",
}: {
  label: string;
  value: string;
  tone?: "neutral" | "green" | "red";
}) {
  return (
    <div className="rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-soft">
      <div className="text-xs font-medium uppercase tracking-[0.1em] text-neutral-400">
        {label}
      </div>
      <div
        className={cn(
          "mt-1.5 text-xl font-semibold tracking-tight",
          tone === "green" && "text-emerald-600",
          tone === "red" && "text-red-500",
          tone === "neutral" && "text-neutral-900",
        )}
      >
        {value}
      </div>
    </div>
  );
}
