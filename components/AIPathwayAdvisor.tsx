"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleAlert,
  Download,
  ExternalLink,
  FileCheck2,
  FileText,
  Gauge,
  Globe2,
  LoaderCircle,
  LockKeyhole,
  MessageCircle,
  PlaneTakeoff,
  RefreshCw,
  Route,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Target,
  UploadCloud,
  WalletCards
} from "lucide-react";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import {
  advisorOptions,
  analyzePathway,
  type AdvisorAnalysis,
  type AdvisorProfile
} from "@/lib/pathwayAdvisor";
import { site, whatsappLink } from "@/data/site";

const emptyProfile: AdvisorProfile = {
  goal: "explore",
  age: "25 - 29",
  education: "Bachelor's degree",
  experience: "2 - 4 years",
  english: "Working proficiency",
  budget: "INR 10 - 20 lakh",
  preferredCountry: "Open to best fit",
  currentRole: "",
  cvText: ""
};

const sampleCv = `ARJUN MEHTA
Software Engineer | 4 years of experience

EXPERIENCE
Software Engineer, Fintech Product Company
- Built React and TypeScript customer journeys used by 80,000 monthly users.
- Reduced page load time by 34% through performance profiling and code splitting.
- Led delivery with product, design and QA teams across three major releases.
- Developed Node.js APIs and SQL reporting tools for operations teams.

EDUCATION
Bachelor of Technology in Computer Science

SKILLS
TypeScript, React, Node.js, SQL, AWS, Git, Agile delivery

CERTIFICATIONS
AWS Cloud Practitioner`;

type ResultTab = "routes" | "career" | "move" | "plan";

export function AIPathwayAdvisor() {
  const [profile, setProfile] = useState<AdvisorProfile>(emptyProfile);
  const [analysis, setAnalysis] = useState<AdvisorAnalysis | null>(null);
  const [status, setStatus] = useState<"idle" | "reading" | "scanning" | "ready">("idle");
  const [activeTab, setActiveTab] = useState<ResultTab>("routes");
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [formError, setFormError] = useState("");
  const [pdfStatus, setPdfStatus] = useState<"idle" | "building">("idle");
  const [pdfError, setPdfError] = useState("");
  const resultsRef = useRef<HTMLDivElement>(null);

  function updateProfile<Key extends keyof AdvisorProfile>(key: Key, value: AdvisorProfile[Key]) {
    setProfile((current) => ({ ...current, [key]: value }));
    setFormError("");
  }

  async function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
      setFileError("Please use a CV smaller than 8 MB.");
      return;
    }

    setStatus("reading");
    setFileError("");
    setFileName(file.name);

    try {
      const text = await extractCvText(file);
      if (text.trim().length < 80) {
        throw new Error("We could not find enough readable text in this CV. Paste the CV text below instead.");
      }
      updateProfile("cvText", text.slice(0, 30000));
      setStatus("idle");
    } catch (error) {
      setFileError(error instanceof Error ? error.message : "This CV could not be read. Please paste the text instead.");
      setStatus("idle");
    }
  }

  function loadSample() {
    setProfile({
      ...emptyProfile,
      goal: "work",
      currentRole: "Software Engineer",
      cvText: sampleCv
    });
    setFileName("Sample software engineer CV");
    setAnalysis(null);
    setFormError("");
    setFileError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!profile.currentRole.trim()) {
      setFormError("Add your current role or career area so the role match can be focused.");
      return;
    }
    if (profile.cvText.trim().length < 80) {
      setFormError("Upload a readable CV or paste at least a short profile summary to continue.");
      return;
    }

    setStatus("scanning");
    setAnalysis(null);
    setActiveTab("routes");
    window.setTimeout(() => {
      setAnalysis(analyzePathway(profile));
      setStatus("ready");
      window.setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }, 1100);
  }

  function resetAdvisor() {
    setAnalysis(null);
    setStatus("idle");
    setActiveTab("routes");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function downloadReport() {
    if (!analysis) return;
    setPdfStatus("building");
    setPdfError("");

    try {
      const [logoDataUrl, { createPathwayReportPdf }] = await Promise.all([
        loadImageDataUrl("/images/logo-idol.png"),
        import("@/lib/pathwayReportPdf")
      ]);
      const report = await createPathwayReportPdf(
        profile,
        analysis,
        {
          name: site.name,
          shortName: site.shortName,
          email: site.email,
          phone: site.phoneDisplay,
          address: site.address,
          website: site.url
        },
        logoDataUrl
      );
      report.save(`${analysis.reportId.toLowerCase()}-pathway-report.pdf`);
    } catch {
      setPdfError("The PDF could not be prepared. Please try again.");
    } finally {
      setPdfStatus("idle");
    }
  }

  const consultantMessage = analysis
    ? `Hi Idol Immigration, I completed the AI Pathway Advisor. Report ${analysis.reportId}. My goal is ${goalLabel(profile.goal)} and the top indicative route is ${analysis.routes[0].country} (${analysis.routes[0].route}). I would like a consultant review.`
    : "Hi Idol Immigration, I want help using the AI Pathway Advisor.";

  return (
    <div className="bg-ivory py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <form
          className="overflow-hidden border border-slate-200 bg-white shadow-[0_28px_90px_rgba(7,29,51,0.10)]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-5 border-b border-slate-200 bg-white px-5 py-5 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-ink text-white">
                <ScanSearch className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">Private profile scan</p>
                <h2 className="mt-1 text-xl font-extrabold text-ink sm:text-2xl">Build your international pathway report</h2>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
              <StatusPill icon={LockKeyhole} label="Processed in your browser" />
              <StatusPill icon={Gauge} label="2 minute analysis" />
              <StatusPill icon={CircleAlert} label="No approval prediction" />
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="border-b border-slate-200 p-5 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">01 / Your profile</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Use current information. You can rerun the report for another goal.</p>
                </div>
                <button
                  className="inline-flex min-h-10 shrink-0 items-center gap-2 border border-slate-200 bg-ivory px-3 py-2 text-xs font-bold text-ink transition hover:border-gold hover:text-gold"
                  onClick={loadSample}
                  type="button"
                >
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Try example
                </button>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField
                  className="sm:col-span-2"
                  label="What is your main goal?"
                  onChange={(value) => {
                    const goal = advisorOptions.goals.find((option) => option.label === value)?.value ?? "explore";
                    updateProfile("goal", goal as AdvisorProfile["goal"]);
                  }}
                  options={advisorOptions.goals.map((option) => option.label)}
                  value={goalLabel(profile.goal)}
                />

                <TextField
                  label="Current role or career area"
                  onChange={(value) => updateProfile("currentRole", value)}
                  placeholder="e.g. Software Engineer"
                  value={profile.currentRole}
                />
                <SelectField label="Preferred destination" onChange={(value) => updateProfile("preferredCountry", value)} options={advisorOptions.countries} value={profile.preferredCountry} />
                <SelectField label="Age range" onChange={(value) => updateProfile("age", value)} options={advisorOptions.ages} value={profile.age} />
                <SelectField label="Highest education" onChange={(value) => updateProfile("education", value)} options={advisorOptions.education} value={profile.education} />
                <SelectField label="Relevant experience" onChange={(value) => updateProfile("experience", value)} options={advisorOptions.experience} value={profile.experience} />
                <SelectField label="English readiness" onChange={(value) => updateProfile("english", value)} options={advisorOptions.english} value={profile.english} />
                <label className="grid gap-2 sm:col-span-2">
                  <span className="text-sm font-bold text-ink">Comfortable total budget</span>
                  <select
                    className="h-12 border-slate-300 bg-white px-4 text-sm font-medium text-ink focus:border-gold focus:ring-gold"
                    onChange={(event) => updateProfile("budget", event.target.value)}
                    value={profile.budget}
                  >
                    {advisorOptions.budgets.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
              </div>
            </div>

            <div className="bg-[#fbfcfe] p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">02 / CV intelligence</p>
              <h3 className="mt-2 text-xl font-extrabold text-ink">Add the evidence behind your profile</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">PDF, DOCX, TXT or MD. Your file is read transiently and is not saved by this tool.</p>

              <label className="mt-6 flex min-h-40 cursor-pointer flex-col items-center justify-center border-2 border-dashed border-slate-300 bg-white p-5 text-center transition hover:border-gold hover:bg-gold/[0.025]">
                {status === "reading" ? (
                  <LoaderCircle className="h-8 w-8 animate-spin text-gold" aria-hidden="true" />
                ) : fileName ? (
                  <FileCheck2 className="h-8 w-8 text-emerald-600" aria-hidden="true" />
                ) : (
                  <UploadCloud className="h-8 w-8 text-gold" aria-hidden="true" />
                )}
                <span className="mt-3 text-sm font-bold text-ink">
                  {status === "reading" ? "Reading CV..." : fileName || "Choose your CV"}
                </span>
                <span className="mt-1 text-xs leading-5 text-slate-500">
                  {fileName ? `${profile.cvText.trim().split(/\s+/).length} words extracted` : "Maximum file size 8 MB"}
                </span>
                <input accept=".pdf,.docx,.txt,.md,text/plain,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="sr-only" onChange={handleFile} type="file" />
              </label>

              {fileError ? <p className="mt-3 flex gap-2 text-sm leading-6 text-red-700"><CircleAlert className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />{fileError}</p> : null}

              <label className="mt-5 grid gap-2">
                <span className="flex items-center justify-between gap-3 text-sm font-bold text-ink">
                  CV text or profile summary
                  <span className="font-medium text-slate-400">{profile.cvText.length.toLocaleString()} characters</span>
                </span>
                <textarea
                  className="min-h-52 resize-y border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-ink placeholder:text-slate-400 focus:border-gold focus:ring-gold"
                  onChange={(event) => updateProfile("cvText", event.target.value.slice(0, 30000))}
                  placeholder="Paste CV text here, or upload a file above..."
                  value={profile.cvText}
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-slate-200 bg-white px-5 py-5 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold text-ink">Indicative planning report</p>
              <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">This tool supports route discovery. It does not assess legal eligibility, guarantee employment or predict a visa decision.</p>
              {formError ? <p className="mt-2 text-sm font-semibold text-red-700">{formError}</p> : null}
            </div>
            <button
              className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 bg-gold px-7 py-3 text-sm font-extrabold text-white shadow-[0_16px_36px_rgba(227,27,35,0.22)] transition hover:bg-ink disabled:cursor-wait disabled:opacity-70"
              disabled={status === "reading" || status === "scanning"}
              type="submit"
            >
              {status === "scanning" ? <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Bot className="h-5 w-5" aria-hidden="true" />}
              {status === "scanning" ? "Building your report..." : "Analyse my pathways"}
              {status !== "scanning" ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
            </button>
          </div>
        </form>

        {status === "scanning" ? <ScanningState /> : null}

        {analysis ? (
          <div className="scroll-mt-24 pt-12" ref={resultsRef}>
            <div className="overflow-hidden border border-slate-200 bg-white shadow-[0_28px_90px_rgba(7,29,51,0.10)]">
              <div className="relative overflow-hidden bg-ink px-5 py-7 text-white sm:px-7">
                <div className="absolute inset-0 premium-grid opacity-20" />
                <div className="relative flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                      <span>{analysis.reportId}</span>
                      <span className="h-1 w-1 bg-gold" />
                      <span>{analysis.roleFamily}</span>
                    </div>
                    <h2 className="mt-4 max-w-3xl text-2xl font-extrabold sm:text-4xl">{analysis.headline}</h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">Compare ranked routes, role matches, cost-aware European options, relocation preparation and your sequenced action plan.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:min-w-72">
                    <ScoreMetric label="Profile readiness" score={analysis.readiness} />
                    <ScoreMetric label="CV strength" score={analysis.cvScore} />
                  </div>
                </div>
              </div>

              <div className="border-b border-slate-200 bg-white px-3 pt-3 sm:px-6">
                <div className="grid grid-cols-2 gap-1 sm:grid-cols-4" role="tablist" aria-label="Pathway report sections">
                  <ResultTabButton active={activeTab === "routes"} icon={Route} label="Country routes" onClick={() => setActiveTab("routes")} />
                  <ResultTabButton active={activeTab === "career"} icon={BriefcaseBusiness} label="Career & CV" onClick={() => setActiveTab("career")} />
                  <ResultTabButton active={activeTab === "move"} icon={PlaneTakeoff} label="Before moving" onClick={() => setActiveTab("move")} />
                  <ResultTabButton active={activeTab === "plan"} icon={Target} label="90-day plan" onClick={() => setActiveTab("plan")} />
                </div>
              </div>

              <div className="p-5 sm:p-7">
                {activeTab === "routes" ? <RouteResults analysis={analysis} /> : null}
                {activeTab === "career" ? <CareerResults analysis={analysis} /> : null}
                {activeTab === "move" ? <BeforeMoveResults analysis={analysis} /> : null}
                {activeTab === "plan" ? <ActionResults analysis={analysis} /> : null}
              </div>

              <div className="flex flex-col gap-4 border-t border-slate-200 bg-ivory px-5 py-5 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-bold text-ink">Ready for a human review?</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">A consultant can validate live rules, documents, costs and risk before you act.</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button className="inline-flex min-h-11 items-center justify-center gap-2 border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-ink transition hover:border-gold" onClick={resetAdvisor} type="button">
                    <RefreshCw className="h-4 w-4" aria-hidden="true" />
                    Adjust profile
                  </button>
                  <button className="inline-flex min-h-11 items-center justify-center gap-2 border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-ink transition hover:border-gold disabled:cursor-wait disabled:opacity-60" disabled={pdfStatus === "building"} onClick={downloadReport} type="button">
                    {pdfStatus === "building" ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Download className="h-4 w-4" aria-hidden="true" />}
                    {pdfStatus === "building" ? "Preparing PDF..." : "Download PDF"}
                  </button>
                  <a className="inline-flex min-h-11 items-center justify-center gap-2 bg-gold px-4 py-2 text-sm font-extrabold text-white transition hover:bg-ink" href={whatsappLink(consultantMessage)} rel="noreferrer" target="_blank">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Review with an expert
                  </a>
                </div>
                {pdfError ? <p className="text-xs font-semibold text-red-700 lg:text-right">{pdfError}</p> : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function TextField({ label, onChange, placeholder, value }: { label: string; onChange: (value: string) => void; placeholder: string; value: string }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-ink">{label}</span>
      <input className="h-12 border-slate-300 bg-white px-4 text-sm font-medium text-ink placeholder:text-slate-400 focus:border-gold focus:ring-gold" onChange={(event) => onChange(event.target.value)} placeholder={placeholder} value={value} />
    </label>
  );
}

function SelectField({ className = "", label, onChange, options, value }: { className?: string; label: string; onChange: (value: string) => void; options: string[]; value: string }) {
  return (
    <label className={["grid gap-2", className].join(" ")}>
      <span className="text-sm font-bold text-ink">{label}</span>
      <select className="h-12 border-slate-300 bg-white px-4 text-sm font-medium text-ink focus:border-gold focus:ring-gold" onChange={(event) => onChange(event.target.value)} value={value}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

function StatusPill({ icon: Icon, label }: { icon: typeof LockKeyhole; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-slate-200 bg-ivory px-2.5 py-1.5">
      <Icon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
      {label}
    </span>
  );
}

function ScanningState() {
  return (
    <div className="mt-8 overflow-hidden border border-slate-200 bg-ink p-6 text-white shadow-glow" aria-live="polite">
      <div className="relative h-2 overflow-hidden bg-white/10">
        <span className="advisor-scan-progress absolute inset-y-0 left-0 bg-gold" />
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center">
        <span className="grid h-14 w-14 place-items-center border border-white/15 bg-white/[0.06] text-gold">
          <ScanSearch className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <p className="font-extrabold">Comparing CV signals, career families and international routes</p>
          <p className="mt-2 text-sm leading-6 text-white/60">Scoring route fit, identifying evidence gaps and sequencing your next 90 days.</p>
        </div>
      </div>
    </div>
  );
}

function ScoreMetric({ label, score }: { label: string; score: number }) {
  return (
    <div className="border border-white/15 bg-white/[0.07] p-4">
      <p className="text-2xl font-extrabold text-white">{score}<span className="text-sm text-white/45">/100</span></p>
      <p className="mt-1 text-xs font-semibold text-white/60">{label}</p>
    </div>
  );
}

function ResultTabButton({ active, icon: Icon, label, onClick }: { active: boolean; icon: typeof Route; label: string; onClick: () => void }) {
  return (
    <button
      aria-selected={active}
      className={[
        "flex min-h-14 items-center justify-center gap-2 border-b-2 px-2 py-3 text-xs font-bold transition sm:text-sm",
        active ? "border-gold text-gold" : "border-transparent text-slate-500 hover:text-ink"
      ].join(" ")}
      onClick={onClick}
      role="tab"
      type="button"
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}

function RouteResults({ analysis }: { analysis: AdvisorAnalysis }) {
  return (
    <div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Profile intelligence</p>
        <h3 className="mt-2 text-2xl font-extrabold text-ink">What is shaping your shortlist</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {analysis.profileSignals.map((signal) => (
            <article className="border border-slate-200 bg-ivory p-4" key={signal.label}>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{signal.label}</p>
              <p className="mt-2 text-sm font-extrabold text-ink">{signal.value}</p>
              <p className="mt-2 text-xs leading-5 text-slate-600">{signal.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-slate-200 pt-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Ranked route shortlist</p>
          <h3 className="mt-2 text-2xl font-extrabold text-ink">Where your profile may travel best</h3>
        </div>
        <p className="text-xs font-semibold text-slate-500">Indicative fit, not legal eligibility</p>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {analysis.routes.map((route, index) => (
          <article className="flex h-full flex-col border border-slate-200 bg-white p-5 shadow-sm" key={route.country}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center bg-ink text-sm font-extrabold text-white">{route.flag}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">#{index + 1} route</p>
                  <h4 className="mt-1 font-extrabold text-ink">{route.country}</h4>
                </div>
              </div>
              <span className="text-2xl font-extrabold text-ink">{route.fit}<span className="text-xs text-slate-400">%</span></span>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden bg-slate-100"><span className="block h-full bg-gold" style={{ width: `${route.fit}%` }} /></div>
            <p className="mt-4 text-sm font-extrabold text-ink">{route.route}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{route.summary}</p>
            <ul className="mt-4 grid gap-2">
              {route.reasons.map((reason) => (
                <li className="flex gap-2 text-xs leading-5 text-slate-600" key={reason}>
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
                  {reason}
                </li>
              ))}
            </ul>
            <div className="mt-5 border-l-2 border-gold bg-ivory px-3 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Priority next move</p>
              <p className="mt-1 text-xs leading-5 text-slate-600">{route.nextMove}</p>
            </div>
            <div className="mt-auto pt-5">
              <Link className="inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:text-ink" href={`/countries/${route.slug}`}>
                Explore this destination
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
      </div>

      <div className="mt-10 border-t border-slate-200 pt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Cost-aware Europe</p>
            <h3 className="mt-2 text-2xl font-extrabold text-ink">European countries to research on a lower budget</h3>
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500"><WalletCards className="h-4 w-4 text-gold" aria-hidden="true" />Costs and funding need live checks</span>
        </div>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">This list prioritises cost-aware research, not the cheapest promise. Course, city, funding, proof-of-funds and career outcomes still need to be compared together.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {analysis.europeOptions.map((option, index) => (
            <article className="flex h-full flex-col border border-slate-200 bg-white p-5" key={option.country}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center bg-ink text-xs font-extrabold text-white">{option.code}</span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold">#{index + 1} {option.budgetFit}</p>
                    <h4 className="mt-1 font-extrabold text-ink">{option.country}</h4>
                  </div>
                </div>
                <span className="text-sm font-extrabold text-ink">{option.fit}%</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{option.why}</p>
              <div className="mt-4 bg-ivory p-3 text-xs leading-5 text-slate-600"><strong className="text-ink">Research next:</strong> {option.action}</div>
              <a className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-bold text-gold transition hover:text-ink" href={option.officialUrl} rel="noreferrer" target="_blank">
                Open official source
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function CareerResults({ analysis }: { analysis: AdvisorAnalysis }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Role matching</p>
        <h3 className="mt-2 text-2xl font-extrabold text-ink">International career angles to test</h3>
        <div className="mt-6 grid gap-3">
          {analysis.roleMatches.map((role) => (
            <article className="border border-slate-200 bg-white p-5" key={role.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-extrabold text-ink">{role.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{role.why}</p>
                </div>
                <span className="shrink-0 bg-ink px-3 py-2 text-sm font-extrabold text-white">{role.fit}%</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.skills.map((skill) => <span className="border border-slate-200 bg-ivory px-2.5 py-1 text-xs font-semibold text-slate-600" key={skill}>{skill}</span>)}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Best markets</span>
                {role.bestMarkets.map((market) => <span className="bg-ink px-2 py-1 text-[11px] font-bold text-white" key={market}>{market}</span>)}
              </div>
              <p className="mt-4 border-l-2 border-gold pl-3 text-xs leading-5 text-slate-600"><strong className="text-ink">Priority action:</strong> {role.priorityAction}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="grid content-start gap-5">
        <div className="border border-slate-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <Globe2 className="h-5 w-5 text-gold" aria-hidden="true" />
            <p className="font-extrabold text-ink">Detected and recommended skills</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {analysis.detectedSkills.map((skill) => <span className="border border-slate-200 bg-ivory px-2.5 py-1 text-xs font-semibold text-slate-600" key={skill}>{skill}</span>)}
          </div>
        </div>
        <div className="border border-slate-200 bg-ivory p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-gold" aria-hidden="true" />
              <p className="font-extrabold text-ink">CV health</p>
            </div>
            <span className="text-sm font-extrabold text-ink">{analysis.wordCount} words</span>
          </div>
          <div className="mt-4 h-2 overflow-hidden bg-slate-200"><span className="block h-full bg-gold" style={{ width: `${analysis.cvScore}%` }} /></div>
          <p className="mt-3 text-xs leading-5 text-slate-500">The score checks structure, evidence, measurable impact and useful detail. It does not judge design or spelling.</p>
        </div>
        <InsightList icon={Check} items={analysis.strengths} title="Strong signals" tone="positive" />
        <InsightList icon={CircleAlert} items={analysis.gaps} title="Priority gaps" tone="warning" />
      </div>
    </div>
  );
}

function BeforeMoveResults({ analysis }: { analysis: AdvisorAnalysis }) {
  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Relocation readiness</p>
          <h3 className="mt-2 text-2xl font-extrabold text-ink">What to complete before moving abroad</h3>
        </div>
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500"><ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />Practical risk checks included</span>
      </div>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">Work through these alongside the visa or admission process. The timing is a planning guide and should be adjusted to the destination and route.</p>
      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        {analysis.preDeparture.map((area, index) => (
          <article className="border border-slate-200 bg-white p-5" key={area.title}>
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center bg-gold text-sm font-extrabold text-white">{index + 1}</span>
              <span className="text-right text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{area.timing}</span>
            </div>
            <h4 className="mt-5 font-extrabold text-ink">{area.title}</h4>
            <ul className="mt-4 grid gap-3">
              {area.items.map((item) => (
                <li className="flex gap-3 text-sm leading-6 text-slate-600" key={item}>
                  <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

function InsightList({ icon: Icon, items, title, tone }: { icon: typeof Check; items: string[]; title: string; tone: "positive" | "warning" }) {
  return (
    <div className="border border-slate-200 bg-white p-5">
      <p className="font-extrabold text-ink">{title}</p>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-6 text-slate-600" key={item}>
            <Icon className={["mt-1 h-4 w-4 shrink-0", tone === "positive" ? "text-emerald-600" : "text-gold"].join(" ")} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ActionResults({ analysis }: { analysis: AdvisorAnalysis }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Execution plan</p>
      <h3 className="mt-2 text-2xl font-extrabold text-ink">Your next 90 days, sequenced</h3>
      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {analysis.actionPlan.map((phase, index) => (
          <article className="relative border border-slate-200 bg-white p-5" key={phase.period}>
            <div className="flex items-center justify-between gap-4">
              <span className="grid h-9 w-9 place-items-center bg-gold text-sm font-extrabold text-white">{index + 1}</span>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{phase.period}</span>
            </div>
            <h4 className="mt-5 font-extrabold text-ink">{phase.title}</h4>
            <ul className="mt-4 grid gap-3">
              {phase.actions.map((action) => (
                <li className="flex gap-2 text-sm leading-6 text-slate-600" key={action}>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {action}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

async function extractCvText(file: File) {
  const extension = file.name.split(".").pop()?.toLowerCase();

  if (extension === "pdf" || file.type === "application/pdf") {
    const pdfjs = await import("pdfjs-dist");
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).toString();
    const document = await pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise;
    const pages: string[] = [];
    const pageLimit = Math.min(document.numPages, 30);

    for (let index = 1; index <= pageLimit; index += 1) {
      const page = await document.getPage(index);
      const content = await page.getTextContent();
      pages.push(content.items.map((item) => ("str" in item ? item.str : "")).join(" "));
    }
    return pages.join("\n\n");
  }

  if (extension === "docx") {
    const mammoth = await import("mammoth");
    const result = await mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() });
    return result.value;
  }

  if (["txt", "md", "rtf"].includes(extension ?? "") || file.type.startsWith("text/")) {
    return file.text();
  }

  throw new Error("Use a PDF, DOCX, TXT or MD file, or paste the CV text below.");
}

function goalLabel(goal: AdvisorProfile["goal"]) {
  return advisorOptions.goals.find((option) => option.value === goal)?.label ?? goal;
}

async function loadImageDataUrl(source: string) {
  const response = await fetch(source);
  if (!response.ok) throw new Error("Logo could not be loaded.");
  const blob = await response.blob();
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}
