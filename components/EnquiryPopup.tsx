"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import { countries } from "@/data/countries";
import { allServiceCards } from "@/data/services";
import { whatsappLink } from "@/data/site";

const storageKey = "idol-enquiry-popup-dismissed";
const enquiryFinishedEvent = "idol:enquiry-finished";

export function EnquiryPopup() {
  const [open, setOpen] = useState(false);
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
    window.dispatchEvent(new CustomEvent(enquiryFinishedEvent));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hi Idol Immigration, I filled the website enquiry form.",
      `Name: ${form.get("name") || ""}`,
      `Phone/WhatsApp: ${form.get("phone") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Interested country: ${form.get("country") || ""}`,
      `Interested service: ${form.get("service") || ""}`,
      `Message: ${form.get("message") || ""}`
    ].join("\n");

    window.sessionStorage.setItem(storageKey, "true");
    setOpen(false);
    window.dispatchEvent(new CustomEvent(enquiryFinishedEvent));
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/55 px-3 py-3 backdrop-blur-sm sm:px-4">
      <div
        aria-labelledby="enquiry-popup-title"
        aria-modal="true"
        className="relative w-full max-w-xl overflow-hidden rounded-[8px] border border-stone-200 bg-white shadow-2xl"
        role="dialog"
      >
        <button
          aria-label="Close enquiry form"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-stone-200 bg-white text-slate-500 transition hover:border-gold hover:text-ink"
          onClick={close}
          ref={closeButtonRef}
          type="button"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="bg-ivory px-5 pb-4 pt-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Quick enquiry
          </p>
          <h2 className="mt-2 pr-10 text-2xl font-semibold tracking-normal text-ink" id="enquiry-popup-title">
            Speak to an expert
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Share the basics. We will continue on WhatsApp.
          </p>
        </div>

        <form className="grid gap-3 p-5 sm:p-6" onSubmit={handleSubmit}>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Phone / WhatsApp" name="phone" required />
            <Field label="Email" name="email" type="email" />
            <Select label="Interested country" name="country" options={["Not sure", ...countries.map((country) => country.name)]} />
            <div className="sm:col-span-2">
              <Select
                label="Interested service"
                name="service"
                options={["Not sure", ...allServiceCards.slice(0, 10).map((service) => service.shortTitle)]}
              />
            </div>
          </div>

          <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Short message
            <textarea
              className="min-h-16 resize-none rounded-[8px] border-stone-200 text-sm font-normal normal-case tracking-normal text-slate-700 focus:border-gold focus:ring-gold"
              name="message"
              placeholder="Target country, timeline, current situation..."
              rows={2}
            />
          </label>

          <button
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(15,23,42,0.18)] transition hover:bg-gold hover:text-ink"
            type="submit"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Submit Enquiry
          </button>
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
  type?: string;
};

function Field({ label, name, placeholder, required = false, type = "text" }: FieldProps) {
  return (
    <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
      {label}
      <input
        className="h-10 rounded-[8px] border-stone-200 text-sm font-normal normal-case tracking-normal text-slate-700 focus:border-gold focus:ring-gold"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
      {label}
      <select
        className="h-10 rounded-[8px] border-stone-200 text-sm font-normal normal-case tracking-normal text-slate-700 focus:border-gold focus:ring-gold"
        name={name}
      >
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </label>
  );
}
