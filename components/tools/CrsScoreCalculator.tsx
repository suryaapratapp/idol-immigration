"use client";

import { Calculator, CheckCircle2, ExternalLink, Lightbulb, ShieldCheck } from "lucide-react";
import { type FormEvent, type ReactNode, useMemo, useRef, useState } from "react";
import { ToolActions } from "@/components/tools/ToolActions";
import { ToolDisclaimer } from "@/components/tools/ToolDisclaimer";
import { ToolSelect } from "@/components/tools/ToolFields";
import { ToolLeadCapture } from "@/components/tools/ToolLeadCapture";
import { trackToolEvent } from "@/lib/analytics";
import {
  calculateCrs,
  crsConfig,
  type CrsProfile,
  type CrsResult,
  type EducationId,
  type LanguageScores
} from "@/lib/crsCalculator";
import { formatDataDate } from "@/lib/momentumTools";
import { downloadToolPdf } from "@/lib/toolPdf";
import { useToolLead } from "@/lib/useToolLead";

const educationOptions: { value: EducationId; label: string }[] = [
  { value: "lessSecondary", label: "Less than secondary school" },
  { value: "secondary", label: "Secondary school diploma" },
  { value: "oneYear", label: "One-year post-secondary credential" },
  { value: "twoYear", label: "Two-year post-secondary credential" },
  { value: "bachelor", label: "Bachelor's degree or 3+ year program" },
  { value: "twoOrMore", label: "Two or more credentials (one is 3+ years)" },
  { value: "masters", label: "Master's or eligible professional degree" },
  { value: "doctorate", label: "Doctoral degree (PhD)" }
];

const languageLevels = [
  { value: 0, label: "Below CLB/NCLC 4 or no test" },
  { value: 4, label: "CLB/NCLC 4" },
  { value: 5, label: "CLB/NCLC 5" },
  { value: 6, label: "CLB/NCLC 6" },
  { value: 7, label: "CLB/NCLC 7" },
  { value: 8, label: "CLB/NCLC 8" },
  { value: 9, label: "CLB/NCLC 9" },
  { value: 10, label: "CLB/NCLC 10+" }
];

const defaultLanguage: LanguageScores = { speaking: 7, listening: 7, reading: 7, writing: 7 };
const noSecondLanguage: LanguageScores = { speaking: 0, listening: 0, reading: 0, writing: 0 };
const defaultProfile: CrsProfile = {
  maritalStatus: "single",
  age: 29,
  education: "bachelor",
  primaryLanguage: "english",
  firstLanguage: defaultLanguage,
  secondLanguage: noSecondLanguage,
  canadianExperience: 0,
  foreignExperience: 3,
  certificateOfQualification: false,
  provincialNomination: false,
  canadianEducation: "none",
  siblingInCanada: false,
  spouseEducation: "bachelor",
  spouseLanguage: defaultLanguage,
  spouseCanadianExperience: 0
};

const yesNo = (value: boolean) => value ? "yes" : "no";
const fromYesNo = (value: string) => value === "yes";

export function CrsScoreCalculator() {
  const [profile, setProfile] = useState<CrsProfile>(defaultProfile);
  const [result, setResult] = useState<CrsResult>();
  const [downloading, setDownloading] = useState(false);
  const started = useRef(false);
  const withSpouse = profile.maritalStatus === "spouse-accompanying";
  const inputRecord = useMemo(() => ({ ...profile }), [profile]);
  const resultRecord = useMemo(
    () => result ? { total: result.total, core: result.core, spouse: result.spouse, transferability: result.transferability, additional: result.additional } : {},
    [result]
  );
  const { saveEmail, markWhatsAppClicked } = useToolLead("crs-score-calculator", inputRecord, resultRecord);

  function startTool() {
    if (started.current) return;
    started.current = true;
    trackToolEvent("tool_start", "crs-score-calculator");
  }

  function update<K extends keyof CrsProfile>(key: K, value: CrsProfile[K]) {
    setResult(undefined);
    setProfile((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const next = calculateCrs(profile);
    setResult(next);
    trackToolEvent("tool_complete", "crs-score-calculator", { crs_score: next.total });
    requestAnimationFrame(() => document.getElementById("crs-result")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  const summary = result
    ? `Hi Idol Immigration, I used your CRS calculator and received an indicative score of ${result.total}/1200. My profile: age ${profile.age}, ${educationOptions.find((item) => item.value === profile.education)?.label}, ${profile.foreignExperience}+ years foreign experience, ${profile.canadianExperience} years Canadian experience, and ${withSpouse ? "an accompanying spouse" : "no accompanying spouse"}. Please review my Express Entry and PNP options.`
    : "Hi Idol Immigration, I would like help calculating and improving my CRS score.";

  async function handleDownload() {
    if (!result) return;
    setDownloading(true);
    trackToolEvent("pdf_download", "crs-score-calculator", { crs_score: result.total });
    try {
      await downloadToolPdf({
        fileName: "idol-crs-score-report.pdf",
        eyebrow: "CRS SCORE CALCULATOR",
        title: `Indicative CRS score: ${result.total} / 1,200`,
        summary: `Profile scored using the IRCC Comprehensive Ranking System criteria published ${formatDataDate(crsConfig.lastUpdated)}.`,
        sections: [
          {
            heading: "Score breakdown",
            lines: [
              `Core / human capital: ${result.core}`,
              `Spouse factors: ${result.spouse}`,
              `Skill transferability: ${result.transferability}`,
              `Additional points: ${result.additional}`
            ]
          },
          {
            heading: "Profile used",
            lines: [
              `Age ${profile.age}; ${educationOptions.find((item) => item.value === profile.education)?.label}.`,
              `${profile.foreignExperience}+ years foreign skilled work; ${profile.canadianExperience} years Canadian skilled work.`,
              `First-language CLB/NCLC: S${profile.firstLanguage.speaking}, L${profile.firstLanguage.listening}, R${profile.firstLanguage.reading}, W${profile.firstLanguage.writing}.`
            ]
          },
          { heading: "Priority improvements", lines: result.priorities }
        ],
        dataNote: `Version ${crsConfig.version}. Job offers receive 0 CRS points under the current rule. This estimate is guidance only; verify the result in the official IRCC calculator and confirm Express Entry programme eligibility separately.`
      });
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
      <form
        className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,51,0.09)]"
        onChangeCapture={startTool}
        onSubmit={submit}
      >
        <div className="bg-ink p-5 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">Official criteria, clearer inputs</p>
          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Build your Express Entry points profile</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">Enter CLB or NCLC levels, not raw IELTS, PTE, CELPIP, TEF or TCF scores. Use the equivalency shown on your official test report.</p>
        </div>

        <div className="grid gap-8 p-5 sm:p-7">
          <FormSection number="01" title="Personal profile">
            <div className="grid gap-4 md:grid-cols-3">
              <ToolSelect label="Relationship status" onChange={(event) => update("maritalStatus", event.target.value as CrsProfile["maritalStatus"])} value={profile.maritalStatus}>
                <option value="single">Single / no spouse</option>
                <option value="spouse-accompanying">Spouse accompanying</option>
                <option value="spouse-not-accompanying">Spouse not accompanying / Canadian</option>
              </ToolSelect>
              <ToolSelect label="Age" onChange={(event) => update("age", Number(event.target.value))} value={profile.age}>
                {Array.from({ length: 29 }, (_, index) => index + 17).map((age) => <option key={age} value={age}>{age}{age === 45 ? " or more" : ""}</option>)}
              </ToolSelect>
              <ToolSelect label="Highest education" onChange={(event) => update("education", event.target.value as EducationId)} value={profile.education}>
                {educationOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </ToolSelect>
            </div>
          </FormSection>

          <FormSection number="02" title="Language proficiency">
            <ToolSelect className="max-w-sm" label="Your first official language" onChange={(event) => update("primaryLanguage", event.target.value as CrsProfile["primaryLanguage"])} value={profile.primaryLanguage}>
              <option value="english">English</option>
              <option value="french">French</option>
            </ToolSelect>
            <LanguageGrid label={`First language: ${profile.primaryLanguage === "english" ? "English" : "French"}`} onChange={(scores) => update("firstLanguage", scores)} scores={profile.firstLanguage} />
            <LanguageGrid hint="Leave all four below CLB/NCLC 4 if you have no valid second-language test." label={`Second language: ${profile.primaryLanguage === "english" ? "French" : "English"}`} onChange={(scores) => update("secondLanguage", scores)} scores={profile.secondLanguage} />
          </FormSection>

          <FormSection number="03" title="Skilled work and trade factors">
            <div className="grid gap-4 md:grid-cols-3">
              <ToolSelect label="Canadian skilled experience" onChange={(event) => update("canadianExperience", Number(event.target.value))} value={profile.canadianExperience}>
                <ExperienceOptions maxLabel="5 years or more" />
              </ToolSelect>
              <ToolSelect label="Foreign skilled experience" onChange={(event) => update("foreignExperience", Number(event.target.value))} value={profile.foreignExperience}>
                <option value={0}>None / under 1 year</option><option value={1}>1-2 years</option><option value={3}>3 years or more</option>
              </ToolSelect>
              <ToolSelect label="Canadian trade certificate" onChange={(event) => update("certificateOfQualification", fromYesNo(event.target.value))} value={yesNo(profile.certificateOfQualification)}>
                <option value="no">No</option><option value="yes">Yes</option>
              </ToolSelect>
            </div>
          </FormSection>

          {withSpouse ? (
            <FormSection number="04" title="Accompanying spouse factors">
              <div className="grid gap-4 md:grid-cols-2">
                <ToolSelect label="Spouse's highest education" onChange={(event) => update("spouseEducation", event.target.value as EducationId)} value={profile.spouseEducation}>
                  {educationOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
                </ToolSelect>
                <ToolSelect label="Spouse's Canadian experience" onChange={(event) => update("spouseCanadianExperience", Number(event.target.value))} value={profile.spouseCanadianExperience}>
                  <ExperienceOptions maxLabel="5 years or more" />
                </ToolSelect>
              </div>
              <LanguageGrid label="Spouse's first official language" onChange={(scores) => update("spouseLanguage", scores)} scores={profile.spouseLanguage} />
            </FormSection>
          ) : null}

          <FormSection number={withSpouse ? "05" : "04"} title="Additional points">
            <div className="grid gap-4 md:grid-cols-3">
              <ToolSelect label="Provincial nomination" onChange={(event) => update("provincialNomination", fromYesNo(event.target.value))} value={yesNo(profile.provincialNomination)}>
                <option value="no">No</option><option value="yes">Yes, valid nomination</option>
              </ToolSelect>
              <ToolSelect label="Eligible Canadian education" onChange={(event) => update("canadianEducation", event.target.value as CrsProfile["canadianEducation"])} value={profile.canadianEducation}>
                <option value="none">None</option><option value="short">One or two-year credential</option><option value="long">Three+ years / master&apos;s / doctorate</option>
              </ToolSelect>
              <ToolSelect label="Eligible sibling in Canada" onChange={(event) => update("siblingInCanada", fromYesNo(event.target.value))} value={yesNo(profile.siblingInCanada)}>
                <option value="no">No</option><option value="yes">Yes</option>
              </ToolSelect>
            </div>
            <p className="flex gap-2 rounded-[6px] border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-900">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Job offers currently receive 0 CRS points. They may still matter for programme eligibility, so include them in your official Express Entry profile where required.
            </p>
          </FormSection>

          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-gold px-6 py-3 text-sm font-extrabold text-white shadow-gold transition hover:bg-ink" type="submit">
            <Calculator className="h-4 w-4" aria-hidden="true" />
            Calculate my CRS score
          </button>
        </div>
      </form>

      <aside className="lg:sticky lg:top-24" id="crs-result">
        {result ? (
          <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,51,0.09)]" aria-live="polite">
            <div className="relative overflow-hidden bg-ink p-6 text-white">
              <div className="absolute inset-0 premium-grid opacity-20" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">Your indicative CRS</p>
                <p className="mt-3 text-6xl font-extrabold">{result.total}<span className="text-xl text-white/40">/1,200</span></p>
                <div className="mt-5 h-2 bg-white/10"><span className="block h-full bg-gold" style={{ width: `${Math.min(100, result.total / 12)}%` }} /></div>
                <p className="mt-4 text-xs leading-5 text-white/60">A CRS score does not confirm eligibility or predict an invitation. Draw type and cutoffs change.</p>
              </div>
            </div>
            <div className="grid gap-6 p-5 sm:p-6">
              <div className="grid grid-cols-2 gap-3">
                <ScoreLine label="Core profile" score={result.core} />
                <ScoreLine label="Spouse factors" score={result.spouse} />
                <ScoreLine label="Transferability" score={result.transferability} />
                <ScoreLine label="Additional" score={result.additional} />
              </div>
              <div>
                <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-gold"><Lightbulb className="h-4 w-4" aria-hidden="true" />Priority improvements</p>
                <div className="mt-4 grid gap-3">
                  {result.priorities.map((priority) => <p className="flex gap-2 text-sm leading-6 text-slate-600" key={priority}><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />{priority}</p>)}
                </div>
              </div>
              <ToolActions downloadLabel="Download my CRS report (PDF)" downloading={downloading} onDownload={handleDownload} onWhatsApp={() => { trackToolEvent("whatsapp_click", "crs-score-calculator", { crs_score: result.total }); markWhatsAppClicked(); }} summary={summary} />
              <ToolLeadCapture onSubmit={saveEmail} />
              <p className="text-xs leading-5 text-slate-500">Scoring rules checked {formatDataDate(crsConfig.lastUpdated)}. <a className="font-bold text-ink underline decoration-gold underline-offset-4" href={crsConfig.officialSource} rel="noreferrer" target="_blank">Verify the criteria on IRCC</a>.</p>
              <ToolDisclaimer />
            </div>
          </div>
        ) : (
          <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Transparent scoring</p>
            <h2 className="mt-3 text-2xl font-extrabold text-ink">Your result will show every major score section.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Complete the form to see your estimated total, factor breakdown and practical priorities for improving the profile.</p>
            <a className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-ink underline decoration-gold underline-offset-4" href={crsConfig.officialCalculator} rel="noreferrer" target="_blank">Verify with the official IRCC calculator<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a>
            <p className="mt-5 text-xs text-slate-500">Rules checked {formatDataDate(crsConfig.lastUpdated)}</p>
          </div>
        )}
      </aside>
    </div>
  );
}

function FormSection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return <section className="grid gap-5 border-b border-slate-200 pb-8 last:border-0 last:pb-0"><div className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-[6px] bg-ink text-xs font-extrabold text-white">{number}</span><h3 className="text-lg font-extrabold text-ink">{title}</h3></div>{children}</section>;
}

function LanguageGrid({ label, hint, scores, onChange }: { label: string; hint?: string; scores: LanguageScores; onChange: (scores: LanguageScores) => void }) {
  return (
    <fieldset className="rounded-[6px] border border-slate-200 bg-ivory p-4">
      <legend className="px-2 text-sm font-extrabold text-ink">{label}</legend>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {(Object.keys(scores) as (keyof LanguageScores)[]).map((ability) => (
          <label className="grid gap-2" key={ability}>
            <span className="text-xs font-bold capitalize text-slate-600">{ability}</span>
            <select className="h-11 w-full rounded-[6px] border-slate-300 bg-white px-3 text-xs font-semibold text-ink focus:border-gold focus:ring-gold" onChange={(event) => onChange({ ...scores, [ability]: Number(event.target.value) })} value={scores[ability]}>
              {languageLevels.map((level) => <option key={level.value} value={level.value}>{level.label}</option>)}
            </select>
          </label>
        ))}
      </div>
      {hint ? <p className="mt-3 text-xs leading-5 text-slate-500">{hint}</p> : null}
    </fieldset>
  );
}

function ExperienceOptions({ maxLabel }: { maxLabel: string }) {
  return <><option value={0}>None / under 1 year</option><option value={1}>1 year</option><option value={2}>2 years</option><option value={3}>3 years</option><option value={4}>4 years</option><option value={5}>{maxLabel}</option></>;
}

function ScoreLine({ label, score }: { label: string; score: number }) {
  return <div className="rounded-[6px] border border-slate-200 bg-ivory p-3"><p className="text-2xl font-extrabold text-ink">{score}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p></div>;
}
