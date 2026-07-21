"use client";

import { Check, LoaderCircle, Mail } from "lucide-react";
import { FormEvent, useState } from "react";

export function ToolLeadCapture({
  onSubmit
}: {
  onSubmit: (email: string) => Promise<void>;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("saving");
    try {
      await onSubmit(email);
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  if (status === "saved") {
    return (
      <p className="flex min-h-12 items-center gap-2 text-sm font-bold text-emerald-700" role="status">
        <Check className="h-4 w-4" aria-hidden="true" />
        Your result has been saved for follow-up.
      </p>
    );
  }

  return (
    <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={handleSubmit}>
      <label className="relative">
        <span className="sr-only">Email for a branded summary</span>
        <Mail className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-slate-400" aria-hidden="true" />
        <input
          className="h-12 w-full rounded-[6px] border-slate-300 bg-white pl-11 pr-4 text-sm text-ink placeholder:text-slate-400 focus:border-gold focus:ring-gold"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email me this result (optional)"
          required
          type="email"
          value={email}
        />
      </label>
      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] border border-slate-300 bg-white px-5 text-sm font-extrabold text-ink transition hover:border-gold hover:text-gold disabled:opacity-60"
        disabled={status === "saving"}
        type="submit"
      >
        {status === "saving" ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
        Email summary
      </button>
      {status === "error" ? (
        <p className="text-xs font-semibold text-red-700 sm:col-span-2" role="alert">
          Email capture is temporarily unavailable. Your WhatsApp and PDF options still work.
        </p>
      ) : null}
    </form>
  );
}
