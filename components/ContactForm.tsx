"use client";

import { CheckCircle2, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { countries } from "@/data/countries";
import { allServiceCards } from "@/data/services";
import { submitToFormspree } from "@/lib/formspree";

const contactEndpoint = "https://formspree.io/f/xqerdral";

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

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitToFormspree(form, contactEndpoint);
      form.reset();
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

  if (status === "success") {
    return (
      <div className="grid min-h-[520px] place-items-center border border-slate-300 bg-white p-6 text-center shadow-sm" role="status">
        <div>
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-700">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-ink">Thank you</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">
            Your enquiry has been sent to Idol Immigration. Our team will review your details and contact you shortly.
          </p>
          <button
            className="mt-7 inline-flex min-h-12 items-center justify-center bg-ink px-6 text-sm font-bold text-white transition hover:bg-gold"
            onClick={() => setStatus("idle")}
            type="button"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      action={contactEndpoint}
      className="grid gap-4 border border-slate-300 bg-white p-5 shadow-sm sm:p-6"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input name="_subject" type="hidden" value="New contact enquiry from Idol Immigration website" />
      <input name="formSource" type="hidden" value="Contact page" />
      <Field name="name" placeholder="Name*" required />
      <Field name="email" placeholder="Email*" required type="email" />
      <div className="grid gap-4 sm:grid-cols-[0.32fr_0.68fr]">
        <select
          aria-label="Country code"
          className="h-14 border border-slate-300 bg-white px-5 text-lg font-semibold text-ink focus:border-gold focus:ring-gold"
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
      <p className="text-sm leading-6 text-slate-500">Your details are sent securely to the Idol Immigration team.</p>
      {status === "error" ? (
        <p className="text-center text-sm font-semibold text-red-700" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <button
        className="mx-auto inline-flex min-h-14 items-center justify-center gap-2 bg-ink px-10 py-3 text-lg font-extrabold text-white transition hover:bg-gold disabled:cursor-wait disabled:opacity-65"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting" ? <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" /> : null}
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}

type FieldProps = {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
};

function Field({ name, placeholder, type = "text", required = false }: FieldProps) {
  return (
    <input
      aria-label={placeholder.replace("*", "")}
      className="h-14 border border-slate-300 bg-white px-5 text-lg font-medium text-ink placeholder:text-slate-500 focus:border-gold focus:ring-gold"
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
      className="h-14 border border-slate-300 bg-white px-5 text-lg font-medium text-ink focus:border-gold focus:ring-gold"
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
