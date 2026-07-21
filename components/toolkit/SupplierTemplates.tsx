"use client";

import { ToolHeader } from "./ToolHeader";
import { CopyButton } from "./CopyButton";
import { supplierTemplates } from "@/lib/toolkit";

export function SupplierTemplates() {
  return (
    <div className="print-full">
      <ToolHeader
        index="03 · Templates"
        title="Supplier Outreach Templates"
        description="Seven ready-to-send emails for every stage of sourcing, from first contact to final agreement. Copy, swap the [brackets], and send."
        printable
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {supplierTemplates.map((tpl) => (
          <div
            key={tpl.id}
            className="print-break flex flex-col overflow-hidden rounded-3xl border border-neutral-200/70 bg-white shadow-soft"
          >
            {/* Card head */}
            <div className="flex items-center justify-between gap-3 border-b border-neutral-100 bg-neutral-50/60 px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <span className="rounded-full border border-accent/20 bg-accent/[0.06] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-accent">
                  {tpl.tag}
                </span>
                <h3 className="text-[0.98rem] font-semibold tracking-tight text-neutral-900">
                  {tpl.title}
                </h3>
              </div>
              <div className="print-hide">
                <CopyButton text={`Subject: ${tpl.subject}\n\n${tpl.body}`} />
              </div>
            </div>

            {/* Subject */}
            <div className="border-b border-neutral-100 px-5 py-3">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-neutral-400">
                Subject
              </span>
              <p className="mt-1 text-sm font-medium text-neutral-800">
                {tpl.subject}
              </p>
            </div>

            {/* Body */}
            <pre className="flex-1 whitespace-pre-wrap px-5 py-4 font-sans text-[0.9rem] leading-relaxed text-neutral-600">
              {tpl.body}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
