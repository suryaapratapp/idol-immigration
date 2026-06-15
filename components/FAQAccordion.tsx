"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FAQ } from "@/data/faqs";

type FAQAccordionProps = {
  faqs: FAQ[];
};

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-slate-200 rounded-[8px] border border-slate-200 bg-white">
      {faqs.map((faq, index) => {
        const active = open === index;
        return (
          <div key={faq.question}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-ink"
              type="button"
              onClick={() => setOpen(active ? -1 : index)}
              aria-expanded={active}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={[
                  "h-5 w-5 shrink-0 text-ocean transition",
                  active ? "rotate-180" : ""
                ].join(" ")}
                aria-hidden="true"
              />
            </button>
            {active ? (
              <div className="px-5 pb-5 text-sm leading-7 text-slate-600">
                {faq.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
