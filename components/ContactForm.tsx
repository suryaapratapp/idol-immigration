"use client";

import { FormEvent } from "react";
import { countries } from "@/data/countries";
import { allServiceCards } from "@/data/services";
import { whatsappLink } from "@/data/site";

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
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hi Idol Immigration, I want guidance.",
      `Name: ${form.get("name") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Phone/WhatsApp: ${form.get("countryCode") || ""} ${form.get("phone") || ""}`,
      `Age: ${form.get("age") || ""}`,
      `Highest education: ${form.get("education") || ""}`,
      `Work experience: ${form.get("workExperience") || ""}`,
      `Visa type: ${form.get("visaType") || ""}`,
      `Country to immigrate: ${form.get("country") || ""}`
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="grid gap-4 border border-slate-300 bg-white p-5 shadow-sm sm:p-6" onSubmit={handleSubmit}>
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
      <p className="text-sm leading-6 text-slate-500">
        We usually begin with WhatsApp so you can share your situation easily.
      </p>
      <button
        className="mx-auto inline-flex min-h-14 items-center justify-center bg-ink px-10 py-3 text-lg font-extrabold text-white transition hover:bg-gold"
        type="submit"
      >
        Submit
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
