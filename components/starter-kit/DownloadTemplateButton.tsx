"use client";

import { useState } from "react";
import { Download, Check } from "@/components/Icons";
import { cn } from "@/lib/utils";

/**
 * Generates the template file in the browser and triggers a download, no
 * server or static asset needed.
 */
export function DownloadTemplateButton({
  label,
  filename,
  content,
  className,
}: {
  label: string;
  filename: string;
  content: string;
  className?: string;
}) {
  const [done, setDone] = useState(false);

  function handleDownload() {
    try {
      const blob = new Blob([content], {
        type: "text/markdown;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setDone(true);
      window.setTimeout(() => setDone(false), 2500);
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98]",
        className,
      )}
    >
      {done ? (
        <>
          <Check className="h-4 w-4 text-emerald-300" strokeWidth={2.5} />
          Downloaded
        </>
      ) : (
        <>
          <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          {label}
        </>
      )}
    </button>
  );
}
