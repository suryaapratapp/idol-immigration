"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { countries } from "@/data/countries";
import { allServiceCards } from "@/data/services";
import { whatsappLink } from "@/data/site";

const storageKey = "idol-enquiry-popup-dismissed";
const enquiryFinishedEvent = "idol:enquiry-finished";

const countryCodes = ["+91", "+1", "+44", "+61", "+64", "+971", "+49"];
const ageOptions = ["Select Your Age", "Under 18", "18 - 24", "25 - 34", "35 - 44", "45+"];
const educationOptions = [
  "Select Your Highest Education",
  "Higher secondary",
  "Diploma",
  "Bachelor's degree",
  "Master's degree",
  "Doctorate",
  "Other"
];
const workExperienceOptions = [
  "Select Your Work Experience",
  "No work experience",
  "Less than 1 year",
  "1 - 3 years",
  "3 - 5 years",
  "5+ years"
];
const visaTypeOptions = ["Visa Type*", ...allServiceCards.slice(0, 10).map((service) => service.shortTitle)];
const countryOptions = ["Country to immigrate*", ...countries.map((country) => country.name), "Not sure"];

export function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (pathname === "/ai-pathway-advisor") {
      setOpen(false);
      return;
    }

    if (window.sessionStorage.getItem(storageKey)) {
      return;
    }

    const timer = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, [pathname]);

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
      `Email: ${form.get("email") || ""}`,
      `Phone/WhatsApp: ${form.get("countryCode") || ""} ${form.get("phone") || ""}`,
      `Age: ${form.get("age") || ""}`,
      `Highest education: ${form.get("education") || ""}`,
      `Work experience: ${form.get("workExperience") || ""}`,
      `Visa type: ${form.get("visaType") || ""}`,
      `Country to immigrate: ${form.get("country") || ""}`
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
    <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/65 px-2 py-2 backdrop-blur-sm sm:px-3">
      <div
        aria-labelledby="enquiry-popup-title"
        aria-modal="true"
        className="relative max-h-[calc(100dvh-16px)] w-full max-w-[574px] overflow-hidden rounded-[20px] border border-slate-300 bg-white shadow-2xl"
        role="dialog"
      >
        <button
          aria-label="Close enquiry form"
          className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center border border-slate-300 bg-white text-slate-500 transition hover:border-gold hover:text-ink"
          onClick={close}
          ref={closeButtonRef}
          type="button"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-2">
          <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border border-slate-200 bg-white">
            <Image
              src="/images/logo-idol.png"
              alt="Idol Immigration logo"
              width={64}
              height={64}
              className="h-full w-full object-contain p-1"
            />
          </span>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">
              Idol Immigration Services
            </p>
            <h2 className="mt-0.5 pr-10 text-xl font-extrabold tracking-normal text-ink" id="enquiry-popup-title">
              Quick Enquiry
            </h2>
          </div>
        </div>

        <form className="grid gap-2 p-3 sm:p-4" onSubmit={handleSubmit}>
          <Field name="name" placeholder="Name*" required />
          <Field name="email" placeholder="Email*" required type="email" />

          <div className="grid grid-cols-[0.32fr_0.68fr] gap-2">
            <select
              aria-label="Country code"
              className="h-11 border border-slate-300 bg-white px-3 text-sm font-semibold text-ink focus:border-gold focus:ring-gold"
              defaultValue="+91"
              name="countryCode"
            >
              {countryCodes.map((code) => (
                <option key={code}>{code}</option>
              ))}
            </select>
            <Field name="phone" placeholder="Phone No*" required type="tel" />
          </div>

          <Select name="age" options={ageOptions} required />
          <Select name="education" options={educationOptions} />
          <Select name="workExperience" options={workExperienceOptions} />
          <Select name="visaType" options={visaTypeOptions} required />
          <Select name="country" options={countryOptions} required />

          <button
            className="mx-auto inline-flex min-h-12 items-center justify-center bg-ink px-7 py-2 text-base font-extrabold text-white shadow-[0_14px_34px_rgba(7,29,51,0.18)] transition hover:bg-gold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

type FieldProps = {
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
};

function Field({ name, placeholder, required = false, type = "text" }: FieldProps) {
  return (
    <input
      aria-label={placeholder.replace("*", "")}
      className="h-11 border border-slate-300 bg-white px-3 text-sm font-medium text-ink placeholder:text-slate-500 focus:border-gold focus:ring-gold"
      name={name}
      placeholder={placeholder}
      required={required}
      type={type}
    />
  );
}

function Select({ name, options, required = false }: { name: string; options: string[]; required?: boolean }) {
  const placeholder = options[0];

  return (
    <select
      aria-label={placeholder.replace("*", "")}
      className="h-11 border border-slate-300 bg-white px-3 text-sm font-medium text-ink focus:border-gold focus:ring-gold"
      defaultValue=""
      name={name}
      required={required}
    >
      {options.map((item, index) => (
        <option disabled={index === 0} key={item} value={index === 0 ? "" : item}>
          {item}
        </option>
      ))}
    </select>
  );
}
