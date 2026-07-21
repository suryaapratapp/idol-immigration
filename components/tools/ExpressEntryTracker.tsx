"use client";

import { ArrowUpRight, ChartNoAxesCombined, CircleAlert, Gauge, TrendingUp } from "lucide-react";
import { FormEvent, useMemo, useRef, useState } from "react";
import { ToolActions } from "@/components/tools/ToolActions";
import { ToolDisclaimer } from "@/components/tools/ToolDisclaimer";
import { ToolInput } from "@/components/tools/ToolFields";
import { ToolLeadCapture } from "@/components/tools/ToolLeadCapture";
import { trackToolEvent } from "@/lib/analytics";
import {
  formatDrawDate,
  type DrawType,
  type ExpressEntryDraw,
  type ExpressEntryDrawData
} from "@/lib/expressEntry";
import { formatDataDate } from "@/lib/momentumTools";
import { downloadToolPdf } from "@/lib/toolPdf";
import { useToolLead } from "@/lib/useToolLead";

type Filter = "all" | DrawType;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "cec", label: "CEC" },
  { id: "pnp", label: "PNP" },
  { id: "category", label: "Category-based" }
];

export function ExpressEntryTracker({ data, compact = false }: { data: ExpressEntryDrawData; compact?: boolean }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [score, setScore] = useState("");
  const [checkedScore, setCheckedScore] = useState<number>();
  const [downloading, setDownloading] = useState(false);
  const started = useRef(false);

  const filtered = useMemo(
    () => (filter === "all" ? data.draws : data.draws.filter((draw) => draw.type === filter)),
    [data.draws, filter]
  );
  const latest = filtered[0] ?? data.draws[0];
  const comparisonDraws = filtered.slice(0, 10);
  const metCount = checkedScore == null ? 0 : comparisonDraws.filter((draw) => checkedScore >= draw.crsCutoff).length;
  const gapToLatest = checkedScore == null ? 0 : latest.crsCutoff - checkedScore;
  const inputRecord = useMemo(() => ({ crsScore: checkedScore ?? null, filter }), [checkedScore, filter]);
  const resultRecord = useMemo(() => ({ latestRound: latest.round, latestCutoff: latest.crsCutoff, metCount, drawsCompared: comparisonDraws.length }), [comparisonDraws.length, latest.crsCutoff, latest.round, metCount]);
  const { saveEmail, markWhatsAppClicked } = useToolLead("express-entry-tracker", inputRecord, resultRecord);

  function startTool() {
    if (!started.current) {
      started.current = true;
      trackToolEvent("tool_start", "express-entry-tracker");
    }
  }

  function selectFilter(next: Filter) {
    startTool();
    setFilter(next);
    setCheckedScore(undefined);
  }

  function checkScore(event: FormEvent) {
    event.preventDefault();
    const numeric = Number(score);
    if (!Number.isFinite(numeric) || numeric < 0 || numeric > 1200) return;
    setCheckedScore(numeric);
    trackToolEvent("tool_complete", "express-entry-tracker", { crs_score: numeric, filter });
  }

  const scoreMessage = checkedScore == null
    ? ""
    : metCount > 0
      ? `A CRS of ${checkedScore} would have met ${metCount} of these ${comparisonDraws.length} cutoffs.`
      : gapToLatest > 0
        ? `A CRS of ${checkedScore} is ${gapToLatest} points below this filter's latest cutoff.`
        : `A CRS of ${checkedScore} meets the latest displayed cutoff.`;
  const summary = checkedScore == null
    ? `Hi Idol Immigration, I reviewed Express Entry round #${latest.round} (${latest.category}), with a CRS cutoff of ${latest.crsCutoff} and ${latest.invitationsIssued.toLocaleString("en-IN")} invitations. Please help me check my CRS and strongest route.`
    : `Hi Idol Immigration, my CRS is ${checkedScore}. In the ${filters.find((item) => item.id === filter)?.label} view, it would have met ${metCount} of the last ${comparisonDraws.length} displayed cutoffs. The latest shown cutoff is ${latest.crsCutoff}. Please help me identify realistic ways to improve my score or route.`;

  async function handleDownload() {
    setDownloading(true);
    trackToolEvent("pdf_download", "express-entry-tracker", { filter, crs_score: checkedScore });
    try {
      await downloadToolPdf({
        fileName: "idol-express-entry-draw-summary.pdf",
        eyebrow: "EXPRESS ENTRY DRAW TRACKER",
        title: checkedScore == null ? "Recent Express Entry draw summary" : `CRS ${checkedScore}: recent draw comparison`,
        summary: checkedScore == null ? `Latest displayed round: #${latest.round}, ${latest.category}, cutoff ${latest.crsCutoff}.` : scoreMessage,
        sections: [{
          heading: `${filters.find((item) => item.id === filter)?.label} rounds`,
          lines: comparisonDraws.map((draw) => `${formatDrawDate(draw.date)} | Round #${draw.round} | ${draw.category} | CRS ${draw.crsCutoff} | ${draw.invitationsIssued.toLocaleString("en-IN")} invitations`)
        }],
        dataNote: `Official IRCC snapshot version ${data.version}, data as of ${data.lastUpdated}. Cutoffs vary by round type and do not predict a future invitation. Verify on the official IRCC source.`
      });
    } finally {
      setDownloading(false);
    }
  }

  return (
    <section className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,51,0.09)]">
      <div className="border-b border-slate-200 bg-ink p-5 text-white sm:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">Latest displayed round</p>
              <span className="rounded-[6px] border border-white/15 bg-white/[0.06] px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white/70">Round #{latest.round}</span>
            </div>
            <h2 className="mt-3 max-w-3xl text-2xl font-extrabold sm:text-4xl">{latest.category}</h2>
            <p className="mt-2 text-sm text-white/65">{formatDrawDate(latest.date)} | Official IRCC snapshot</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:min-w-80">
            <Metric label="CRS cutoff" value={latest.crsCutoff.toLocaleString("en-IN")} />
            <Metric label="Invitations" value={latest.invitationsIssued.toLocaleString("en-IN")} />
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white p-3 sm:px-7">
        <div className="flex gap-2 overflow-x-auto" aria-label="Filter Express Entry draws" role="group">
          {filters.map((item) => (
            <button
              aria-pressed={filter === item.id}
              className={`min-h-10 shrink-0 rounded-[6px] border px-3 text-xs font-extrabold transition ${filter === item.id ? "border-gold bg-gold text-white" : "border-slate-200 bg-white text-slate-600 hover:border-gold hover:text-gold"}`}
              key={item.id}
              onClick={() => selectFilter(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className={`grid gap-7 p-5 sm:p-7 ${compact ? "" : "lg:grid-cols-[1.3fr_0.7fr]"}`}>
        <div>
          <div className="flex items-center justify-between gap-4">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Cutoff trend</p><h3 className="mt-2 text-xl font-extrabold text-ink">Recent CRS movement</h3></div>
            <TrendingUp className="h-5 w-5 text-gold" aria-hidden="true" />
          </div>
          {filtered.length ? <CutoffChart draws={comparisonDraws} /> : <EmptyFilter />}
        </div>

        <div className="border-t border-slate-200 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Your CRS</p>
          <h3 className="mt-2 text-xl font-extrabold text-ink">How would your score compare?</h3>
          <form className="mt-5 grid gap-3" onSubmit={checkScore}>
            <ToolInput label="Enter your CRS score" max={1200} min={0} onChange={(event) => { startTool(); setScore(event.target.value); }} placeholder="e.g. 510" required type="number" value={score} />
            <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-gold px-5 text-sm font-extrabold text-white transition hover:bg-ink" type="submit"><Gauge className="h-4 w-4" aria-hidden="true" />Check my score</button>
          </form>
          {checkedScore != null ? (
            <div className="mt-5 rounded-[6px] border border-slate-200 bg-ivory p-4" aria-live="polite">
              <p className="text-2xl font-extrabold text-ink">{metCount}/{comparisonDraws.length}</p>
              <p className="mt-2 text-sm font-bold leading-6 text-ink">{scoreMessage}</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">PNP, CEC and category rounds have different eligibility. A raw cutoff comparison is not an eligibility result.</p>
            </div>
          ) : null}
        </div>
      </div>

      {!compact ? (
        <div className="border-t border-slate-200 px-5 py-6 sm:px-7">
          <div className="flex items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Round history</p><h3 className="mt-2 text-xl font-extrabold text-ink">Recent invitations</h3></div><ChartNoAxesCombined className="h-5 w-5 text-gold" aria-hidden="true" /></div>
          {filtered.length ? (
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead><tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-[0.12em] text-slate-400"><th className="pb-3 pr-4">Date</th><th className="pb-3 pr-4">Category</th><th className="pb-3 pr-4">Invitations</th><th className="pb-3 text-right">CRS</th></tr></thead>
                <tbody>{filtered.slice(0, 10).map((draw) => <tr className="border-b border-slate-100 last:border-0" key={draw.round}><td className="py-4 pr-4 text-sm font-bold text-ink">{formatDrawDate(draw.date)}<span className="ml-2 text-xs font-medium text-slate-400">#{draw.round}</span></td><td className="py-4 pr-4 text-sm text-slate-600">{draw.category}</td><td className="py-4 pr-4 text-sm font-bold text-ink">{draw.invitationsIssued.toLocaleString("en-IN")}</td><td className="py-4 text-right text-sm font-extrabold text-gold">{draw.crsCutoff}</td></tr>)}</tbody>
              </table>
            </div>
          ) : <EmptyFilter />}
        </div>
      ) : null}

      <div className="grid gap-5 border-t border-slate-200 bg-ivory p-5 sm:p-7">
        <p className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
          Data as of {formatDataDate(data.lastUpdated)}.
          <a className="inline-flex items-center gap-1 font-extrabold text-ink transition hover:text-gold" href={data.officialSource} rel="noreferrer" target="_blank">Verify on official IRCC page <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
        </p>
        <ToolActions downloading={downloading} onDownload={() => void handleDownload()} onWhatsApp={() => { trackToolEvent("whatsapp_click", "express-entry-tracker", { crs_score: checkedScore, filter }); markWhatsAppClicked(); }} summary={summary} />
        <ToolLeadCapture onSubmit={saveEmail} />
        <ToolDisclaimer />
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-[6px] border border-white/15 bg-white/[0.06] p-4"><p className="text-2xl font-extrabold">{value}</p><p className="mt-1 text-xs font-semibold text-white/60">{label}</p></div>;
}

function EmptyFilter() {
  return <div className="mt-5 flex gap-3 rounded-[6px] border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"><CircleAlert className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />No rounds of this type appear in the current snapshot. Switch filters or verify the official history.</div>;
}

function CutoffChart({ draws }: { draws: ExpressEntryDraw[] }) {
  const ordered = [...draws].reverse();
  const values = ordered.map((draw) => draw.crsCutoff);
  const minimum = Math.min(...values) - 25;
  const maximum = Math.max(...values) + 25;
  const range = Math.max(1, maximum - minimum);
  const points = ordered.map((draw, index) => {
    const x = ordered.length === 1 ? 50 : 7 + (index / (ordered.length - 1)) * 86;
    const y = 88 - ((draw.crsCutoff - minimum) / range) * 70;
    return { draw, x, y };
  });
  const polyline = points.map((point) => `${point.x},${point.y}`).join(" ");

  return (
    <div className="mt-5">
      <div className="aspect-[16/7] min-h-52 w-full rounded-[6px] border border-slate-200 bg-ivory p-3">
        <svg aria-label={`CRS cutoff trend from ${values[0]} to ${values[values.length - 1]}`} className="h-full w-full" role="img" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[20, 50, 80].map((y) => <line key={y} stroke="#dce3ea" strokeWidth="0.45" x1="5" x2="95" y1={y} y2={y} />)}
          <polyline fill="none" points={polyline} stroke="#e31b23" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          {points.map((point) => <circle cx={point.x} cy={point.y} fill="#ffffff" key={point.draw.round} r="2" stroke="#e31b23" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />)}
        </svg>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs font-semibold text-slate-500"><span>{formatDrawDate(ordered[0].date)}</span><span>CRS range {Math.min(...values)}-{Math.max(...values)}</span><span>{formatDrawDate(ordered[ordered.length - 1].date)}</span></div>
    </div>
  );
}
