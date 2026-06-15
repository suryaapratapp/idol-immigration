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
          className="relative rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm"
          key={step}
        >
          <div className="flex items-center gap-3 lg:block">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold text-cyan">
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
