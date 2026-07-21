"use client";

import { ArrowUpRight, Check, Scale } from "lucide-react";
import { FormEvent, useMemo, useRef, useState } from "react";
import { ScoreBadge } from "@/components/tools/ScoreBadge";
import { ToolActions } from "@/components/tools/ToolActions";
import { ToolDisclaimer } from "@/components/tools/ToolDisclaimer";
import { ToolInput, ToolSelect } from "@/components/tools/ToolFields";
import { ToolLeadCapture } from "@/components/tools/ToolLeadCapture";
import { trackToolEvent } from "@/lib/analytics";
import {
  compareCountries,
  type ComparisonInputs,
  type ComparisonPurpose,
  type CountryComparison,
  type CountryProfilesData,
  type CountryScore
} from "@/lib/countryComparison";
import { formatDataDate } from "@/lib/momentumTools";
import { downloadToolPdf } from "@/lib/toolPdf";
import { useToolLead } from "@/lib/useToolLead";

const englishOptions = [
  { id: "starting", label: "Not started" },
  { id: "preparing", label: "Preparing" },
  { id: "test-ready", label: "Test booked / ready" },
  { id: "strong", label: "Strong verified score" }
] as const;

export function CountryComparisonTool({ data }: { data: CountryProfilesData }) {
  const [inputs, setInputs] = useState<ComparisonInputs>({
    countryA: "canada",
    countryB: "australia",
    purpose: "study",
    budget: "25-40",
    english: "preparing",
    experience: 3,
    familySize: 1,
    field: "Technology"
  });
  const [comparison, setComparison] = useState<CountryComparison>();
  const [formError, setFormError] = useState("");
  const [downloading, setDownloading] = useState(false);
  const started = useRef(false);

  const inputRecord = useMemo(() => ({ ...inputs }), [inputs]);
  const resultRecord = useMemo(
    () => comparison ? { winner: comparison.winner.country.name, scores: { [comparison.left.country.name]: comparison.left.total, [comparison.right.country.name]: comparison.right.total }, verdict: comparison.verdict } : {},
    [comparison]
  );
  const { saveEmail, markWhatsAppClicked } = useToolLead("compare-countries", inputRecord, resultRecord);

  function update<Key extends keyof ComparisonInputs>(key: Key, value: ComparisonInputs[Key]) {
    if (!started.current) {
      started.current = true;
      trackToolEvent("tool_start", "compare-countries");
    }
    setInputs((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (inputs.countryA === inputs.countryB) {
      setFormError("Choose two different destinations to compare.");
      return;
    }
    const next = compareCountries(data, inputs);
    setFormError("");
    setComparison(next);
    trackToolEvent("tool_complete", "compare-countries", {
      winner: next.winner.country.name,
      purpose: inputs.purpose,
      score: next.winner.total
    });
    window.setTimeout(() => document.getElementById("comparison-result")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }

  const summary = comparison
    ? `Hi Idol Immigration, I compared ${comparison.left.country.name} and ${comparison.right.country.name} for ${inputs.purpose}, with a ${data.budgetBands.find((band) => band.id === inputs.budget)?.label} budget, ${inputs.english.replace(/-/g, " ")} English readiness, ${inputs.experience} years of experience, family size ${inputs.familySize}, and a ${inputs.field} background. ${comparison.winner.country.name} scored ${comparison.winner.total}% and looks like the better fit. Please review the route with me.`
    : "";

  async function handleDownload() {
    if (!comparison) return;
    setDownloading(true);
    trackToolEvent("pdf_download", "compare-countries", { winner: comparison.winner.country.name });
    try {
      await downloadToolPdf({
        fileName: `idol-${comparison.left.country.id}-vs-${comparison.right.country.id}.pdf`,
        eyebrow: "HEAD-TO-HEAD COUNTRY COMPARISON",
        title: `${comparison.left.country.name} vs ${comparison.right.country.name}`,
        summary: `${comparison.verdict} This is a planning score based on your selected profile inputs.`,
        sections: [comparison.left, comparison.right].map((countryScore) => ({
          heading: `${countryScore.country.name} - ${countryScore.total}% overall match`,
          lines: countryScore.dimensions.map((dimension) => `${dimension.label}: ${dimension.score}/100 - ${dimension.headline}. ${dimension.reason}`)
        })),
        dataNote: `Scoring model version ${data.version}, reviewed ${data.lastUpdated}. Costs and immigration settings change; validate live rules and obtain a detailed profile assessment before acting.`
      });
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="grid gap-8">
      <form className="rounded-[8px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,51,0.09)]" onSubmit={handleSubmit}>
        <div className="border-b border-slate-200 p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">01 / Build your match lens</p>
          <h2 className="mt-2 text-2xl font-extrabold text-ink">Compare the same profile in two destinations</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Purpose changes the weighting: settlement matters more for PR, job market for work, and cost plus post-study rights for study.</p>
        </div>
        <div className="grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3 sm:p-7">
          <ToolSelect label="Country A" onChange={(event) => update("countryA", event.target.value)} value={inputs.countryA}>
            {data.profiles.map((profile) => <option key={profile.id} value={profile.id}>{profile.flag} {profile.name}</option>)}
          </ToolSelect>
          <ToolSelect label="Country B" onChange={(event) => update("countryB", event.target.value)} value={inputs.countryB}>
            {data.profiles.map((profile) => <option key={profile.id} value={profile.id}>{profile.flag} {profile.name}</option>)}
          </ToolSelect>
          <ToolSelect label="Main purpose" onChange={(event) => update("purpose", event.target.value as ComparisonPurpose)} value={inputs.purpose}>
            <option value="study">Study</option><option value="work">Work</option><option value="pr">Permanent residence</option>
          </ToolSelect>
          <ToolSelect label="Total comfortable budget" onChange={(event) => update("budget", event.target.value)} value={inputs.budget}>
            {data.budgetBands.map((band) => <option key={band.id} value={band.id}>{band.label}</option>)}
          </ToolSelect>
          <ToolSelect label="English readiness" onChange={(event) => update("english", event.target.value as ComparisonInputs["english"])} value={inputs.english}>
            {englishOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
          </ToolSelect>
          <ToolSelect label="Career field" onChange={(event) => update("field", event.target.value)} value={inputs.field}>
            {data.fields.map((field) => <option key={field}>{field}</option>)}
          </ToolSelect>
          <ToolInput label="Years of experience" max={40} min={0} onChange={(event) => update("experience", Number(event.target.value))} type="number" value={inputs.experience} />
          <ToolInput label="Family size travelling" max={8} min={1} onChange={(event) => update("familySize", Number(event.target.value))} type="number" value={inputs.familySize} />
        </div>
        <div className="flex flex-col gap-4 border-t border-slate-200 bg-ivory p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="text-xs leading-5 text-slate-500">Model reviewed {formatDataDate(data.lastUpdated)}. Scores compare fit, not legal eligibility.</p>
            {formError ? <p className="mt-1 text-xs font-bold text-red-700" role="alert">{formError}</p> : null}
          </div>
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-gold px-6 text-sm font-extrabold text-white shadow-gold transition hover:bg-ink" type="submit"><Scale className="h-4 w-4" aria-hidden="true" />Compare my countries</button>
        </div>
      </form>

      {comparison ? (
        <section className="scroll-mt-24 overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,51,0.09)]" id="comparison-result" aria-live="polite">
          <div className="bg-ink p-5 text-white sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">Your better current fit</p>
            <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold sm:text-4xl">{comparison.winner.country.flag} {comparison.winner.country.name}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70">{comparison.verdict}</p>
              </div>
              <ScoreBadge label="#1 match" score={comparison.winner.total} />
            </div>
          </div>

          <div className="hidden p-7 md:block">
            <div className="grid grid-cols-[170px_1fr_1fr] border-b border-slate-200 pb-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Dimension</p>
              {[comparison.left, comparison.right].map((score) => <div className="flex items-center justify-between gap-3 px-4" key={score.country.id}><h3 className="font-extrabold text-ink">{score.country.flag} {score.country.name}</h3><span className="text-lg font-extrabold text-ink">{score.total}%</span></div>)}
            </div>
            {comparison.left.dimensions.map((leftDimension) => {
              const rightDimension = comparison.right.dimensions.find((item) => item.id === leftDimension.id)!;
              const leftWins = leftDimension.score >= rightDimension.score;
              return (
                <div className="grid grid-cols-[170px_1fr_1fr] border-b border-slate-100 py-4 last:border-0" key={leftDimension.id}>
                  <p className="pt-2 text-sm font-extrabold text-ink">{leftDimension.label}</p>
                  <DimensionCell dimension={leftDimension} winner={leftWins} />
                  <DimensionCell dimension={rightDimension} winner={!leftWins} />
                </div>
              );
            })}
          </div>

          <div className="grid gap-4 p-5 md:hidden">
            {[comparison.left, comparison.right].map((score) => <MobileCountryScore countryScore={score} key={score.country.id} winner={score.country.id === comparison.winner.country.id} />)}
          </div>

          <div className="grid gap-5 border-t border-slate-200 bg-ivory p-5 sm:p-7">
            <div className="flex flex-wrap gap-4">
              {[comparison.left, comparison.right].map((score) => <a className="inline-flex items-center gap-1.5 text-xs font-extrabold text-ink transition hover:text-gold" href={score.country.officialSource} key={score.country.id} rel="noreferrer" target="_blank">Verify {score.country.name} rules <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>)}
            </div>
            <ToolActions downloading={downloading} onDownload={() => void handleDownload()} onWhatsApp={() => { trackToolEvent("whatsapp_click", "compare-countries", { winner: comparison.winner.country.name }); markWhatsAppClicked(); }} summary={summary} />
            <ToolLeadCapture onSubmit={saveEmail} />
            <ToolDisclaimer />
          </div>
        </section>
      ) : null}
    </div>
  );
}

function DimensionCell({ dimension, winner }: { dimension: CountryScore["dimensions"][number]; winner: boolean }) {
  return (
    <div className={`mx-4 rounded-[6px] border p-4 ${winner ? "border-emerald-200 bg-emerald-50/70" : "border-slate-200 bg-white"}`}>
      <div className="flex items-center justify-between gap-3"><p className="text-sm font-extrabold text-ink">{dimension.score}/100</p>{winner ? <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-emerald-700"><Check className="h-3 w-3" aria-hidden="true" />Winner</span> : null}</div>
      <p className="mt-2 text-xs font-bold text-ink">{dimension.headline}</p>
      <p className="mt-1 text-xs leading-5 text-slate-500">{dimension.reason}</p>
    </div>
  );
}

function MobileCountryScore({ countryScore, winner }: { countryScore: CountryScore; winner: boolean }) {
  return (
    <article className={`rounded-[8px] border p-5 ${winner ? "border-gold bg-red-50/30" : "border-slate-200 bg-white"}`}>
      <div className="flex items-center justify-between gap-4"><h3 className="font-extrabold text-ink">{countryScore.country.flag} {countryScore.country.name}</h3><ScoreBadge label={winner ? "#1 match" : "match"} score={countryScore.total} /></div>
      <div className="mt-5 grid gap-4">{countryScore.dimensions.map((dimension) => <div className="border-t border-slate-200 pt-3" key={dimension.id}><div className="flex items-center justify-between gap-3"><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{dimension.label}</p><p className="text-sm font-extrabold text-ink">{dimension.score}/100</p></div><p className="mt-2 text-sm font-bold text-ink">{dimension.headline}</p><p className="mt-1 text-xs leading-5 text-slate-500">{dimension.reason}</p></div>)}</div>
    </article>
  );
}
