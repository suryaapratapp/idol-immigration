import { CheckCircle2 } from "lucide-react";

const steps = [
  "Goal Discovery",
  "Eligibility & Risk Review",
  "Country / Route Shortlisting",
  "Document Planning",
  "Application Preparation",
  "Pre-Departure & Settlement Support"
];

export function ProcessTimeline() {
  return (
    <ol className="grid gap-4 lg:grid-cols-6">
      {steps.map((step, index) => (
        <li
          className="relative overflow-hidden rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan/50 hover:shadow-xl"
          key={step}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-cyan to-ocean" />
          <div className="flex items-center gap-3 lg:block">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cyan/25 bg-ink text-sm font-semibold text-cyan shadow-glow">
              {index + 1}
            </span>
            <h3 className="text-base font-semibold text-ink lg:mt-5">{step}</h3>
          </div>
          <CheckCircle2 className="absolute right-4 top-4 hidden h-5 w-5 text-gold lg:block" aria-hidden="true" />
        </li>
      ))}
    </ol>
  );
}
