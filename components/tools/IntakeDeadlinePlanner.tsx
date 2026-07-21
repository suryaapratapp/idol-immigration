"use client";

import { CalendarCheck2, Check, CircleAlert, Clock3 } from "lucide-react";
import { FormEvent, useMemo, useRef, useState } from "react";
import { ToolActions } from "@/components/tools/ToolActions";
import { ToolDisclaimer } from "@/components/tools/ToolDisclaimer";
import { ToolSelect } from "@/components/tools/ToolFields";
import { ToolLeadCapture } from "@/components/tools/ToolLeadCapture";
import { trackToolEvent } from "@/lib/analytics";
import {
  buildIntakePlan,
  formatPlannerDate,
  type EnglishStatus,
  type IntakePlan,
  type IntakePlannerConfig,
  type IntakePlannerInputs,
  type PlannerPurpose
} from "@/lib/intakePlanner";
import { downloadToolPdf } from "@/lib/toolPdf";
import { useToolLead } from "@/lib/useToolLead";

const urgencyStyles = {
  complete: {
    label: "Complete",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-600",
    icon: Check
  },
  "on-track": {
    label: "On track",
    badge: "bg-slate-50 text-slate-700 border-slate-200",
    dot: "bg-ink",
    icon: CalendarCheck2
  },
  "act-soon": {
    label: "Act soon",
    badge: "bg-amber-50 text-amber-800 border-amber-200",
    dot: "bg-amber-500",
    icon: Clock3
  },
  overdue: {
    label: "Act now",
    badge: "bg-red-50 text-red-700 border-red-200",
    dot: "bg-gold",
    icon: CircleAlert
  }
} as const;

export function IntakeDeadlinePlanner({ config }: { config: IntakePlannerConfig }) {
  const [inputs, setInputs] = useState<IntakePlannerInputs>({
    intakeId: config.intakes[0].id,
    country: "Canada",
    purpose: "study",
    englishStatus: "not-taken"
  });
  const [plan, setPlan] = useState<IntakePlan>();
  const [downloading, setDownloading] = useState(false);
  const started = useRef(false);

  const inputRecord = useMemo(() => ({ ...inputs }), [inputs]);
  const resultRecord = useMemo(
    () => plan ? { headline: plan.headline, urgentCount: plan.urgentCount, milestones: plan.milestones } : {},
    [plan]
  );
  const { saveEmail, markWhatsAppClicked } = useToolLead(
    "intake-deadline-planner",
    inputRecord,
    resultRecord
  );

  function updateInput<Key extends keyof IntakePlannerInputs>(key: Key, value: IntakePlannerInputs[Key]) {
    if (!started.current) {
      started.current = true;
      trackToolEvent("tool_start", "intake-deadline-planner");
    }
    setInputs((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const nextPlan = buildIntakePlan(config, inputs);
    setPlan(nextPlan);
    trackToolEvent("tool_complete", "intake-deadline-planner", {
      country: inputs.country,
      purpose: inputs.purpose,
      urgent_count: nextPlan.urgentCount
    });
    window.setTimeout(() => document.getElementById("planner-result")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }

  const summary = plan
    ? `Hi Idol Immigration, I'm planning a ${plan.intakeLabel} ${plan.country} ${plan.purpose} intake. My planner says ${plan.headline} ${plan.milestones[0].label} is targeted for ${formatPlannerDate(plan.milestones[0].targetDate)} and the visa application for ${formatPlannerDate(plan.milestones.find((item) => item.id === "visa-application")?.targetDate ?? plan.intakeDate)}. Please help me stay on track.`
    : "";

  async function handleDownload() {
    if (!plan) return;
    setDownloading(true);
    trackToolEvent("pdf_download", "intake-deadline-planner", { country: plan.country });
    try {
      await downloadToolPdf({
        fileName: `idol-${plan.country.toLowerCase().replace(/\s+/g, "-")}-${plan.intakeLabel.toLowerCase().replace(/\s+/g, "-")}-plan.pdf`,
        eyebrow: "INTAKE DEADLINE PLANNER",
        title: `${plan.intakeLabel} ${plan.country} plan`,
        summary: `${plan.headline} ${plan.summary}`,
        sections: [
          {
            heading: "Your dated checklist",
            lines: plan.milestones.map((milestone) =>
              `${formatPlannerDate(milestone.targetDate)} - ${milestone.label} (${urgencyStyles[milestone.urgency].label})`
            )
          },
          {
            heading: "Recommended next step",
            lines: [
              plan.urgentCount
                ? "Book a document and timeline review now so overdue or close milestones can be resequenced."
                : "Validate institution, programme and visa-specific requirements before committing funds."
            ]
          }
        ],
        dataNote: `Planning assumptions version ${config.version}, updated ${config.lastUpdated}. Always verify live requirements on the relevant official government website.`
      });
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="grid gap-8">
      <form
        className="rounded-[8px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,51,0.09)]"
        onSubmit={handleSubmit}
      >
        <div className="border-b border-slate-200 p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">01 / Your target</p>
          <h2 className="mt-2 text-2xl font-extrabold text-ink">Build the plan backwards</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Choose the destination and intake. The planner converts that fixed date into a working sequence.
          </p>
        </div>
        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-7">
          <ToolSelect label="Target intake" onChange={(event) => updateInput("intakeId", event.target.value)} value={inputs.intakeId}>
            {config.intakes.map((intake) => <option key={intake.id} value={intake.id}>{intake.label}</option>)}
          </ToolSelect>
          <ToolSelect label="Destination country" onChange={(event) => updateInput("country", event.target.value)} value={inputs.country}>
            {config.countries.map((country) => <option key={country}>{country}</option>)}
          </ToolSelect>
          <ToolSelect label="Purpose" onChange={(event) => updateInput("purpose", event.target.value as PlannerPurpose)} value={inputs.purpose}>
            {config.purposes.map((purpose) => <option key={purpose.id} value={purpose.id}>{purpose.label}</option>)}
          </ToolSelect>
          <ToolSelect label="English-test status" onChange={(event) => updateInput("englishStatus", event.target.value as EnglishStatus)} value={inputs.englishStatus}>
            {config.englishStatuses.map((status) => <option key={status.id} value={status.id}>{status.label}</option>)}
          </ToolSelect>
        </div>
        <div className="flex flex-col gap-4 border-t border-slate-200 bg-ivory p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p className="max-w-xl text-xs leading-5 text-slate-500">
            Dates are planning targets, deliberately earlier than final government deadlines to preserve recovery time.
          </p>
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-gold px-6 text-sm font-extrabold text-white shadow-gold transition hover:bg-ink" type="submit">
            <CalendarCheck2 className="h-4 w-4" aria-hidden="true" />
            Build my timeline
          </button>
        </div>
      </form>

      {plan ? (
        <section
          className="scroll-mt-24 overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,51,0.09)]"
          id="planner-result"
          aria-live="polite"
        >
          <div className="bg-ink p-5 text-white sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">Your momentum plan</p>
                <h2 className="mt-3 max-w-3xl text-2xl font-extrabold sm:text-4xl">{plan.headline}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">{plan.summary}</p>
              </div>
              <div className="min-w-32 rounded-[6px] border border-white/15 bg-white/[0.06] p-4">
                <p className="text-3xl font-extrabold">{plan.urgentCount}</p>
                <p className="mt-1 text-xs font-semibold text-white/60">urgent milestones</p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            <ol className="relative ml-3 border-l border-slate-200">
              {plan.milestones.map((milestone) => {
                const style = urgencyStyles[milestone.urgency];
                const Icon = style.icon;
                return (
                  <li className="relative pb-7 pl-7 last:pb-0" key={milestone.id}>
                    <span className={`absolute -left-2 top-1 h-4 w-4 rounded-full border-4 border-white ${style.dot}`} />
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <time className="text-xs font-extrabold uppercase tracking-[0.14em] text-gold" dateTime={milestone.targetDate}>
                          {formatPlannerDate(milestone.targetDate)}
                        </time>
                        <h3 className="mt-1 text-base font-extrabold text-ink">{milestone.label}</h3>
                        <p className="mt-1 text-xs text-slate-500">
                          {milestone.urgency === "complete"
                            ? "Already accounted for in this plan"
                            : milestone.daysAway < 0
                              ? `${Math.abs(milestone.daysAway)} days past the planning target`
                              : `${milestone.daysAway} days from today`}
                        </p>
                      </div>
                      <span className={`inline-flex w-fit items-center gap-1.5 rounded-[6px] border px-2.5 py-1.5 text-xs font-extrabold ${style.badge}`}>
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {style.label}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="grid gap-5 border-t border-slate-200 bg-ivory p-5 sm:p-7">
            <ToolActions
              downloading={downloading}
              onDownload={() => void handleDownload()}
              onWhatsApp={() => {
                trackToolEvent("whatsapp_click", "intake-deadline-planner", { country: plan.country });
                markWhatsAppClicked();
              }}
              summary={summary}
            />
            <ToolLeadCapture onSubmit={saveEmail} />
            <ToolDisclaimer />
          </div>
        </section>
      ) : null}
    </div>
  );
}
