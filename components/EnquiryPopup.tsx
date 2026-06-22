"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { whatsappLink } from "@/data/site";

const storageKey = "idol-enquiry-popup-dismissed";
const purposes = ["Study", "Visit", "PR", "Work", "Business", "Family", "Refusal", "Not sure"];

export function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [purpose, setPurpose] = useState("Study");
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.sessionStorage.getItem(storageKey)) {
      return;
    }

    const timer = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function close() {
    window.sessionStorage.setItem(storageKey, "true");
    setOpen(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hi Idol Immigration, I want guidance. I filled the website enquiry form.",
      `Name: ${form.get("name") || ""}`,
      `Phone/WhatsApp: ${form.get("phone") || ""}`,
      `Target country: ${form.get("country") || ""}`,
      `Purpose: ${form.get("purpose") || purpose}`,
      `Message: ${form.get("message") || ""}`
    ].join("\n");

    window.sessionStorage.setItem(storageKey, "true");
    setOpen(false);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-midnight/75 px-4 py-6 backdrop-blur-sm">
      <div
        aria-labelledby="enquiry-popup-title"
        aria-modal="true"
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[8px] border border-white/15 bg-white shadow-2xl"
        role="dialog"
      >
        <button
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-gold hover:text-ink"
          onClick={close}
          ref={closeButtonRef}
          type="button"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="relative overflow-hidden bg-gradient-to-br from-midnight via-ink to-ocean px-6 pb-7 pt-8 text-white sm:px-8">
          <div className="absolute inset-0 premium-grid opacity-30" />
          <div className="absolute inset-0 route-lines opacity-40" />
          <div className="relative">
            <p className="inline-flex rounded-full border border-gold/30 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur">
              Quick enquiry
            </p>
            <h2 className="text-balance mt-3 pr-10 text-3xl font-semibold tracking-normal" id="enquiry-popup-title">
              Not sure where to start?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
              Share your goal in simple words. Idol Immigration will help you
              understand the sensible next step for study, visit, PR, work,
              business, family or refusal guidance.
            </p>
          </div>
        </div>

        <form className="grid gap-4 p-6 sm:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Phone / WhatsApp" name="phone" required />
            <Field label="Target country" name="country" placeholder="UK, Canada, Australia..." />
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Purpose
              <select
                className="rounded-[8px] border-slate-200 text-sm font-normal text-slate-700 focus:border-cyan focus:ring-cyan"
                name="purpose"
                onChange={(event) => setPurpose(event.target.value)}
                value={purpose}
              >
                {purposes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-ink">
            What do you need help with?
            <textarea
              className="min-h-28 rounded-[8px] border-slate-200 text-sm font-normal text-slate-700 focus:border-cyan focus:ring-cyan"
              name="message"
              placeholder="Tell us your background, timeline, target country or main confusion."
            />
          </label>

          <div className="rounded-[8px] border border-cyan/25 bg-cyan/10 p-4 text-sm leading-6 text-slate-600">
            We usually continue on WhatsApp so you can share documents,
            screenshots and questions easily.
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-gold transition hover:bg-ink hover:text-white"
              type="submit"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send on WhatsApp
            </button>
            <button
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-ink transition hover:border-gold"
              onClick={close}
              type="button"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Continue browsing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};

function Field({ label, name, placeholder, required = false }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      <input
        className="rounded-[8px] border-slate-200 text-sm font-normal text-slate-700 focus:border-cyan focus:ring-cyan"
        name={name}
        placeholder={placeholder}
        required={required}
        type="text"
      />
    </label>
  );
}
