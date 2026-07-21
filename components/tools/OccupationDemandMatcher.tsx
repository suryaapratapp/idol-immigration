"use client";

import { ArrowUpRight, BriefcaseBusiness, Check, CircleAlert, Search } from "lucide-react";
import { FormEvent, useMemo, useRef, useState } from "react";
import { ToolActions } from "@/components/tools/ToolActions";
import { ToolDisclaimer } from "@/components/tools/ToolDisclaimer";
import { ToolInput } from "@/components/tools/ToolFields";
import { ToolLeadCapture } from "@/components/tools/ToolLeadCapture";
import { trackToolEvent } from "@/lib/analytics";
import { formatDataDate } from "@/lib/momentumTools";
import {
  matchOccupation,
  type DemandStatus,
  type OccupationMatch,
  type OccupationsData
} from "@/lib/occupationMatcher";
import { downloadToolPdf } from "@/lib/toolPdf";
import { useToolLead } from "@/lib/useToolLead";

const countries = {
  Canada: "🇨🇦",
  Australia: "🇦🇺",
  "United Kingdom": "🇬🇧",
  Germany: "🇩🇪"
};

const statusStyles: Record<DemandStatus, { label: string; className: string }> = {
  "in-demand": { label: "In demand", className: "border-emerald-200 bg-emerald-50 text-emerald-700" },
  eligible: { label: "Eligible route", className: "border-sky-200 bg-sky-50 text-sky-700" },
  "not-listed": { label: "Not listed", className: "border-slate-200 bg-slate-50 text-slate-600" }
};

export function OccupationDemandMatcher({ data }: { data: OccupationsData }) {
  const [title, setTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [match, setMatch] = useState<OccupationMatch>();
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);
  const started = useRef(false);

  const inputRecord = useMemo(() => ({ title, yearsExperience: experience ? Number(experience) : null }), [experience, title]);
  const resultRecord = useMemo(
    () => match ? { occupation: match.occupation.title, confidence: match.confidence, topCountries: match.topCountries } : {},
    [match]
  );
  const { saveEmail, markWhatsAppClicked } = useToolLead("occupation-in-demand", inputRecord, resultRecord);

  function begin() {
    if (!started.current) {
      started.current = true;
      trackToolEvent("tool_start", "occupation-in-demand");
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    begin();
    const nextMatch = matchOccupation(data, title, experience ? Number(experience) : undefined);
    if (!nextMatch) {
      setMatch(undefined);
      setError("We could not confidently map that title yet. Try a broader title such as nurse, civil engineer, accountant or software developer.");
      return;
    }
    setError("");
    setMatch(nextMatch);
    trackToolEvent("tool_complete", "occupation-in-demand", {
      occupation: nextMatch.occupation.title,
      confidence: nextMatch.confidence
    });
    window.setTimeout(() => document.getElementById("occupation-result")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }

  const summary = match
    ? `Hi Idol Immigration, I matched my role as ${match.occupation.title}${experience ? ` with ${experience} years of experience` : ""}. The strongest indicative demand signals are ${match.topCountries.join(", ")}. Please help me compare the most realistic skilled routes and licensing steps.`
    : "";

  async function handleDownload() {
    if (!match) return;
    setDownloading(true);
    trackToolEvent("pdf_download", "occupation-in-demand", { occupation: match.occupation.title });
    try {
      await downloadToolPdf({
        fileName: `idol-${match.occupation.id}-country-match.pdf`,
        eyebrow: "OCCUPATION-IN-DEMAND MATCHER",
        title: `${match.occupation.title}: international route signals`,
        summary: `${match.confidence}% title-match confidence. ${match.experienceNote}`,
        sections: Object.entries(match.occupation.countries).map(([country, result]) => ({
          heading: `${country} - ${statusStyles[result.status].label}`,
          lines: [result.classification, result.list, `Routes: ${result.routes.join(", ")}`, result.note]
        })),
        dataNote: `Indicative dataset version ${data.version}, reviewed ${data.lastUpdated}. Occupation lists and rules change; verify on the linked official government source before acting.`
      });
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="grid gap-8">
      <form className="rounded-[8px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,51,0.09)]" onSubmit={handleSubmit}>
        <div className="border-b border-slate-200 p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">01 / Your occupation</p>
          <h2 className="mt-2 text-2xl font-extrabold text-ink">Use the title you would put on your CV</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            The matcher checks job-title variations and synonyms, then separates current demand-list signals from broader route eligibility.
          </p>
        </div>
        <div className="grid gap-5 p-5 sm:grid-cols-[1fr_220px] sm:p-7">
          <div>
            <ToolInput
              autoComplete="off"
              label="Job title"
              list="occupation-titles"
              onChange={(event) => { begin(); setTitle(event.target.value); }}
              placeholder="e.g. Cyber Security Analyst"
              required
              value={title}
            />
            <datalist id="occupation-titles">
              {data.occupations.map((occupation) => <option key={occupation.id} value={occupation.title} />)}
            </datalist>
          </div>
          <ToolInput
            hint="Optional"
            label="Years of experience"
            max={40}
            min={0}
            onChange={(event) => { begin(); setExperience(event.target.value); }}
            placeholder="e.g. 4"
            type="number"
            value={experience}
          />
        </div>
        <div className="flex flex-col gap-4 border-t border-slate-200 bg-ivory p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p className="text-xs leading-5 text-slate-500">
            Dataset reviewed {formatDataDate(data.lastUpdated)}. Matching uses titles as a starting point; official assessment uses your duties.
          </p>
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-gold px-6 text-sm font-extrabold text-white shadow-gold transition hover:bg-ink" type="submit">
            <Search className="h-4 w-4" aria-hidden="true" />
            Match my occupation
          </button>
        </div>
        {error ? <p className="flex gap-2 border-t border-red-100 bg-red-50 p-5 text-sm leading-6 text-red-700" role="alert"><CircleAlert className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />{error}</p> : null}
      </form>

      {match ? (
        <section className="scroll-mt-24 overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,51,0.09)]" id="occupation-result" aria-live="polite">
          <div className="bg-ink p-5 text-white sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">Matched occupation</p>
                <h2 className="mt-3 text-3xl font-extrabold">{match.occupation.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/70">{match.occupation.sector} | {match.experienceNote}</p>
              </div>
              <div className="rounded-[6px] border border-white/15 bg-white/[0.06] p-4 text-right">
                <p className="text-3xl font-extrabold">{match.confidence}%</p>
                <p className="mt-1 text-xs font-semibold text-white/60">title match</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-2 sm:p-7">
            {Object.entries(match.occupation.countries).map(([country, result]) => {
              const status = statusStyles[result.status];
              return (
                <article className="flex flex-col rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm" key={country}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl" aria-hidden="true">{countries[country as keyof typeof countries]}</span>
                      <h3 className="font-extrabold text-ink">{country}</h3>
                    </div>
                    <span className={`rounded-[6px] border px-2.5 py-1.5 text-xs font-extrabold ${status.className}`}>{status.label}</span>
                  </div>
                  <p className="mt-5 text-sm font-extrabold text-ink">{result.classification}</p>
                  <p className="mt-1 text-xs font-semibold text-gold">{result.list}</p>
                  <ul className="mt-4 grid gap-2">
                    {result.routes.map((route) => <li className="flex gap-2 text-xs leading-5 text-slate-600" key={route}><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />{route}</li>)}
                  </ul>
                  <p className="mt-4 flex-1 border-l-2 border-gold bg-ivory px-3 py-2 text-xs leading-5 text-slate-600">{result.note}</p>
                  <a className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-ink transition hover:text-gold" href={data.sources[country]} rel="noreferrer" target="_blank">
                    Verify on official source <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>

          <div className="grid gap-5 border-t border-slate-200 bg-ivory p-5 sm:p-7">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[6px] bg-white text-gold shadow-sm"><BriefcaseBusiness className="h-4 w-4" aria-hidden="true" /></span>
              <div>
                <p className="text-sm font-extrabold text-ink">Your role travels best where the route and licensing plan work together.</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">Top indicative signals: {match.topCountries.join(", ")}.</p>
              </div>
            </div>
            <ToolActions
              downloading={downloading}
              onDownload={() => void handleDownload()}
              onWhatsApp={() => {
                trackToolEvent("whatsapp_click", "occupation-in-demand", { occupation: match.occupation.title });
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
