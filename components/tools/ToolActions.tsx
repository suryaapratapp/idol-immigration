"use client";

import { Download, LoaderCircle, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/momentumTools";

export function ToolActions({
  summary,
  downloading,
  onDownload,
  onWhatsApp
}: {
  summary: string;
  downloading?: boolean;
  onDownload: () => void;
  onWhatsApp: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-[#128c4a] px-5 text-sm font-extrabold text-white shadow-[0_14px_32px_rgba(18,140,74,0.22)] transition hover:bg-[#0d713c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#128c4a] focus-visible:ring-offset-2"
        href={buildWhatsAppUrl(summary)}
        onClick={onWhatsApp}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Review this with an expert
      </a>
      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] border border-slate-300 bg-white px-5 text-sm font-extrabold text-ink transition hover:border-gold hover:text-gold disabled:opacity-60"
        disabled={downloading}
        onClick={onDownload}
        type="button"
      >
        {downloading ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Download className="h-4 w-4" aria-hidden="true" />}
        {downloading ? "Preparing PDF..." : "Download my plan (PDF)"}
      </button>
    </div>
  );
}
