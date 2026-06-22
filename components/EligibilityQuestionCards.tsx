import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/data/site";

const goals = [
  ["I want to study abroad", "study abroad"],
  ["I want to visit family/tourism", "visitor visa"],
  ["I want permanent residency", "PR or skilled migration"],
  ["I want to work abroad", "work abroad"],
  ["I want to move with my spouse/family", "spouse or family visa"],
  ["I want to start or invest in a business", "business or investor route"],
  ["I was refused before and need help", "visa refusal review"]
];

export function EligibilityQuestionCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {goals.map(([label, goal]) => (
        <a
          className="group relative flex min-h-28 items-center justify-between gap-4 overflow-hidden rounded-[8px] border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-cyan/60 hover:shadow-xl"
          href={whatsappLink(`Hi Idol Immigration, ${label.toLowerCase()}. Please guide me.`)}
          target="_blank"
          rel="noreferrer"
          key={label}
        >
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-cyan to-ocean opacity-0 transition group-hover:opacity-100" />
          <span className="relative">
            <span className="block text-base font-semibold text-ink">{label}</span>
            <span className="mt-2 block text-sm text-slate-500">Ask about {goal}</span>
          </span>
          <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-mist text-ocean transition group-hover:border-gold/50 group-hover:bg-ink group-hover:text-cyan">
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </a>
      ))}
    </div>
  );
}
