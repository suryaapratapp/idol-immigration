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
          className="group flex min-h-28 items-center justify-between gap-4 rounded-[8px] border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-cyan/60 hover:shadow-xl"
          href={whatsappLink(`Hi Idol Immigration, ${label.toLowerCase()}. Please guide me.`)}
          target="_blank"
          rel="noreferrer"
          key={label}
        >
          <span>
            <span className="block text-base font-semibold text-ink">{label}</span>
            <span className="mt-2 block text-sm text-slate-500">Ask about {goal}</span>
          </span>
          <ArrowRight className="h-5 w-5 shrink-0 text-ocean transition group-hover:translate-x-1" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
