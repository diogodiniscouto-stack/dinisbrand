import type { Block } from "@/lib/starterKit";
import { Check, Sparkle } from "@/components/Icons";

/** Renders a lesson's structured content blocks with premium typography. */
export function LessonBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h":
            return (
              <h2
                key={i}
                className="mt-2 text-xl font-semibold tracking-tight text-neutral-900 sm:text-[1.4rem]"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p
                key={i}
                className="text-[1.02rem] leading-relaxed text-neutral-600"
              >
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="flex flex-col gap-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-[1.02rem] leading-relaxed text-neutral-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "checklist":
            return (
              <ul key={i} className="flex flex-col gap-2.5">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 rounded-2xl border border-neutral-200/70 bg-neutral-50/60 px-4 py-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-300">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-[0.98rem] leading-relaxed text-neutral-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "steps":
            return (
              <ol key={i} className="flex flex-col gap-3">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-4 rounded-3xl border border-neutral-200/70 bg-white p-5 shadow-soft"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white">
                      {j + 1}
                    </span>
                    <div>
                      <h3 className="text-[1.02rem] font-semibold tracking-tight text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[0.97rem] leading-relaxed text-neutral-500">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <div
                key={i}
                className="flex gap-3.5 rounded-3xl border border-primary/20 bg-primary/[0.04] p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkle className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="text-[0.98rem] font-semibold tracking-tight text-neutral-900">
                    {block.title}
                  </h4>
                  <p className="mt-1 text-[0.97rem] leading-relaxed text-neutral-600">
                    {block.text}
                  </p>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
