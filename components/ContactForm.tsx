"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { whatsappLink } from "@/data/site";

const purposes = ["Study", "Visit", "PR", "Work", "Business", "Family", "Refusal", "Not sure"];

export function ContactForm() {
  const [purpose, setPurpose] = useState("Study");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hi Idol Immigration, I want guidance.",
      `Name: ${form.get("name") || ""}`,
      `Phone/WhatsApp: ${form.get("phone") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Current city: ${form.get("city") || ""}`,
      `Target country: ${form.get("country") || ""}`,
      `Purpose: ${form.get("purpose") || purpose}`,
      `Message: ${form.get("message") || ""}`
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="grid gap-4 rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone / WhatsApp" name="phone" required />
        <Field label="Email" name="email" type="email" />
        <Field label="Current city" name="city" />
        <Field label="Target country" name="country" />
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Purpose
          <select
            className="rounded-[8px] border-slate-200 text-sm font-normal text-slate-700 focus:border-cyan focus:ring-cyan"
            name="purpose"
            value={purpose}
            onChange={(event) => setPurpose(event.target.value)}
          >
            {purposes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Message
        <textarea
          className="min-h-32 rounded-[8px] border-slate-200 text-sm font-normal text-slate-700 focus:border-cyan focus:ring-cyan"
          name="message"
          placeholder="Tell us your target country, background, timeline or concern."
        />
      </label>
      <p className="text-sm leading-6 text-slate-500">
        We usually begin with WhatsApp so you can share your situation easily.
      </p>
      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ocean"
        type="submit"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Start with WhatsApp Consultation
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", required = false }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      <input
        className="rounded-[8px] border-slate-200 text-sm font-normal text-slate-700 focus:border-cyan focus:ring-cyan"
        name={name}
        required={required}
        type={type}
      />
    </label>
  );
}
