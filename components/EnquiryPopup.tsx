"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { CheckCircle2, LoaderCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { countries } from "@/data/countries";
import { allServiceCards } from "@/data/services";
import { submitToFormspree } from "@/lib/formspree";

const storageKey = "idol-enquiry-popup-dismissed";
const enquiryFinishedEvent = "idol:enquiry-finished";
const enquiryEndpoint = "https://formspree.io/f/mykrdryn";

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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitToFormspree(form, enquiryEndpoint);
      form.reset();
      window.sessionStorage.setItem(storageKey, "true");
      window.dispatchEvent(new CustomEvent(enquiryFinishedEvent));
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please try again."
      );
      setStatus("error");
    }
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

        {status === "success" ? (
          <div className="grid min-h-80 place-items-center p-6 text-center sm:p-10" role="status">
            <div>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-extrabold text-ink">Enquiry sent</h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-600">
                Thank you. The Idol Immigration team has received your details and will contact you shortly.
              </p>
              <button
                className="mt-6 inline-flex min-h-11 items-center justify-center bg-ink px-6 text-sm font-bold text-white transition hover:bg-gold"
                onClick={close}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form
            action={enquiryEndpoint}
            className="grid gap-2 p-3 sm:p-4"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input name="_subject" type="hidden" value="New quick enquiry from Idol Immigration website" />
            <input name="formSource" type="hidden" value="Website quick enquiry popup" />
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

            {status === "error" ? (
              <p className="text-center text-xs font-semibold text-red-700" role="alert">
                {errorMessage}
              </p>
            ) : null}

            <button
              className="mx-auto inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-7 py-2 text-base font-extrabold text-white shadow-[0_14px_34px_rgba(7,29,51,0.18)] transition hover:bg-gold disabled:cursor-wait disabled:opacity-65"
              disabled={status === "submitting"}
              type="submit"
            >
              {status === "submitting" ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
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
