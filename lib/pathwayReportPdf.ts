import type { AdvisorAnalysis, AdvisorProfile } from "./pathwayAdvisor";

export type PathwayReportBranding = {
  name: string;
  shortName: string;
  email: string;
  phone: string;
  address: string;
  website: string;
};

const page = {
  width: 210,
  height: 297,
  left: 16,
  right: 194,
  contentWidth: 178,
  contentTop: 38,
  contentBottom: 278
};

function safeText(value: string) {
  return value
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\u2026/g, "...")
    .replace(/[^\x20-\x7E\n]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function goalLabel(goal: AdvisorProfile["goal"]) {
  return {
    study: "Study abroad",
    work: "Find work abroad",
    pr: "PR / skilled migration",
    explore: "Compare my best options"
  }[goal];
}

export async function createPathwayReportPdf(
  profile: AdvisorProfile,
  analysis: AdvisorAnalysis,
  branding: PathwayReportBranding,
  logoDataUrl?: string
) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({
    compress: true,
    format: "a4",
    orientation: "portrait",
    unit: "mm"
  });
  let pageNumber = 1;
  let y = page.contentTop;

  doc.setProperties({
    title: `${analysis.reportId} - AI Pathway Report`,
    subject: "Indicative international study, work and migration pathway analysis",
    author: branding.name,
    creator: `${branding.shortName} AI Pathway Advisor`,
    keywords: "immigration, study abroad, career pathways, relocation planning"
  });

  function setBodyFont(size = 9, colour: [number, number, number] = [71, 85, 105]) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    doc.setTextColor(...colour);
  }

  function drawPageChrome() {
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, page.width, page.height, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(31);
    doc.setTextColor(245, 247, 250);
    doc.text("IDOL IMMIGRATION", 105, 164, { align: "center", angle: 45 });

    if (logoDataUrl) {
      doc.addImage(logoDataUrl, "PNG", page.left, 7, 18, 18, undefined, "FAST");
    } else {
      doc.setFillColor(227, 27, 35);
      doc.rect(page.left, 7, 18, 18, "F");
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      doc.text("IDOL", page.left + 9, 18, { align: "center" });
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(7, 29, 51);
    doc.text(safeText(branding.name), 38, 12);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text("AI PATHWAY ADVISOR | PRIVATE PROFILE REPORT", 38, 17);

    doc.setFontSize(6.8);
    doc.text(safeText(`${branding.phone} | ${branding.email}`), page.right, 10, { align: "right" });
    doc.text(safeText(branding.website), page.right, 14, { align: "right" });
    doc.text(safeText(branding.address), page.right, 18, { align: "right", maxWidth: 72 });

    doc.setDrawColor(227, 27, 35);
    doc.setLineWidth(0.65);
    doc.line(page.left, 29, page.right, 29);

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(page.left, 283, page.right, 283);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.8);
    doc.setTextColor(100, 116, 139);
    doc.text(analysis.reportId, page.left, 288);
    doc.text(safeText(branding.website), 105, 288, { align: "center" });
    doc.text(`Page ${pageNumber}`, page.right, 288, { align: "right" });
  }

  function addPage() {
    doc.addPage();
    pageNumber += 1;
    y = page.contentTop;
    drawPageChrome();
  }

  function ensureSpace(height: number) {
    if (y + height > page.contentBottom) addPage();
  }

  function split(value: string, width: number, size = 9) {
    doc.setFontSize(size);
    return doc.splitTextToSize(safeText(value), width) as string[];
  }

  function sectionTitle(eyebrow: string, title: string, description?: string) {
    const descriptionLines = description ? split(description, page.contentWidth, 8.5) : [];
    const requiredHeight = 18 + descriptionLines.length * 4.2;
    ensureSpace(requiredHeight);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.2);
    doc.setTextColor(227, 27, 35);
    doc.text(safeText(eyebrow).toUpperCase(), page.left, y);
    y += 6;
    doc.setFontSize(17);
    doc.setTextColor(7, 29, 51);
    doc.text(safeText(title), page.left, y);
    y += 6;
    if (descriptionLines.length) {
      setBodyFont(8.5);
      doc.text(descriptionLines, page.left, y);
      y += descriptionLines.length * 4.2 + 2;
    }
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(page.left, y, page.right, y);
    y += 7;
  }

  function infoGrid(items: { label: string; value: string }[]) {
    const columnWidth = 86;
    const rows = Math.ceil(items.length / 2);
    ensureSpace(rows * 24 + 2);
    items.forEach((item, index) => {
      const column = index % 2;
      const row = Math.floor(index / 2);
      const x = page.left + column * 92;
      const top = y + row * 24;
      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(226, 232, 240);
      doc.roundedRect(x, top, columnWidth, 19, 1.5, 1.5, "FD");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(6.8);
      doc.setTextColor(100, 116, 139);
      doc.text(safeText(item.label).toUpperCase(), x + 4, top + 5);
      doc.setFontSize(9.2);
      doc.setTextColor(7, 29, 51);
      const valueLines = split(item.value, columnWidth - 8, 9.2).slice(0, 2);
      doc.text(valueLines, x + 4, top + 11);
    });
    y += rows * 24;
  }

  function callout(title: string, body: string, tone: "navy" | "red" | "pale" = "pale") {
    const bodyLines = split(body, page.contentWidth - 12, 8.5);
    const height = 17 + bodyLines.length * 4.2;
    ensureSpace(height + 4);
    const fill: [number, number, number] = tone === "navy"
      ? [7, 29, 51]
      : tone === "red"
        ? [254, 242, 242]
        : [248, 250, 252];
    const titleColour: [number, number, number] = tone === "navy" ? [255, 255, 255] : [7, 29, 51];
    const bodyColour: [number, number, number] = tone === "navy" ? [220, 226, 234] : [71, 85, 105];
    doc.setFillColor(...fill);
    doc.setDrawColor(tone === "red" ? 254 : 226, tone === "red" ? 202 : 232, tone === "red" ? 202 : 240);
    doc.roundedRect(page.left, y, page.contentWidth, height, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...titleColour);
    doc.text(safeText(title), page.left + 6, y + 7);
    setBodyFont(8.5, bodyColour);
    doc.text(bodyLines, page.left + 6, y + 13);
    y += height + 5;
  }

  function detailCard(config: {
    eyebrow?: string;
    title: string;
    score?: string;
    body?: string;
    bullets?: string[];
    footer?: string;
  }) {
    const titleWidth = config.score ? page.contentWidth - 36 : page.contentWidth - 12;
    const titleLines = split(config.title, titleWidth, 10.5);
    const bodyWidth = config.score ? page.contentWidth - 38 : page.contentWidth - 12;
    const bodyLines = config.body ? split(config.body, bodyWidth, 8.2) : [];
    const bulletLines = (config.bullets ?? []).map((bullet) => split(bullet, page.contentWidth - 18, 8));
    const footerLines = config.footer ? split(config.footer, page.contentWidth - 12, 7.8) : [];
    const height = 7
      + (config.eyebrow ? 4 : 0)
      + titleLines.length * 4.2
      + bodyLines.length * 3.7
      + bulletLines.reduce((total, lines) => total + lines.length * 3.5 + 1.1, 0)
      + footerLines.length * 3.6
      + (config.footer ? 3.5 : 0);
    ensureSpace(height + 2.5);
    const top = y;
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(page.left, top, page.contentWidth, height, 2, 2, "FD");
    let cardY = top + 5;

    if (config.eyebrow) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(6.8);
      doc.setTextColor(227, 27, 35);
      doc.text(safeText(config.eyebrow).toUpperCase(), page.left + 6, cardY);
      cardY += 4;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(7, 29, 51);
    doc.text(titleLines, page.left + 6, cardY);
    if (config.score) {
      doc.setFillColor(7, 29, 51);
      doc.roundedRect(page.right - 27, top + 5, 21, 9, 1.5, 1.5, "F");
      doc.setFontSize(8.5);
      doc.setTextColor(255, 255, 255);
      doc.text(safeText(config.score), page.right - 16.5, top + 11, { align: "center" });
    }
    cardY += titleLines.length * 4.2 + 1;

    if (bodyLines.length) {
      setBodyFont(8.2);
      doc.text(bodyLines, page.left + 6, cardY);
      cardY += bodyLines.length * 3.7 + 1.5;
    }

    bulletLines.forEach((lines) => {
      doc.setFillColor(227, 27, 35);
      doc.circle(page.left + 7.5, cardY - 0.8, 0.7, "F");
      setBodyFont(8);
      doc.text(lines, page.left + 11, cardY);
      cardY += lines.length * 3.5 + 1.1;
    });

    if (footerLines.length) {
      doc.setDrawColor(226, 232, 240);
      doc.line(page.left + 6, cardY, page.right - 6, cardY);
      cardY += 3;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.8);
      doc.setTextColor(7, 29, 51);
      doc.text(footerLines, page.left + 6, cardY);
    }
    y = top + height + 2.5;
  }

  drawPageChrome();

  doc.setFillColor(7, 29, 51);
  doc.roundedRect(page.left, 39, page.contentWidth, 58, 2.5, 2.5, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(255, 138, 145);
  doc.text("PRIVATE AI PATHWAY ANALYSIS", 23, 51);
  doc.setFontSize(23);
  doc.setTextColor(255, 255, 255);
  const coverTitle = split("Your international pathway report", 142, 23);
  doc.text(coverTitle, 23, 64);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(209, 218, 228);
  const findingLines = split(analysis.headline, 142, 8.5).slice(0, 2);
  doc.text(findingLines, 23, 79);
  doc.setFontSize(7.5);
  doc.setTextColor(164, 180, 197);
  doc.text(`${analysis.reportId} | Generated ${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}`, 23, 91);
  y = 106;

  const scoreWidth = 55.5;
  [
    ["Profile readiness", `${analysis.readiness}/100`],
    ["CV signal strength", `${analysis.cvScore}/100`],
    ["Routes compared", String(analysis.routes.length)]
  ].forEach(([label, value], index) => {
    const x = page.left + index * 61.25;
    doc.setFillColor(index === 0 ? 254 : 248, index === 0 ? 242 : 250, index === 0 ? 242 : 252);
    doc.setDrawColor(index === 0 ? 254 : 226, index === 0 ? 202 : 232, index === 0 ? 202 : 240);
    doc.roundedRect(x, y, scoreWidth, 27, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(17);
    doc.setTextColor(7, 29, 51);
    doc.text(value, x + 5, y + 12);
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(label.toUpperCase(), x + 5, y + 20);
  });
  y += 36;

  sectionTitle("Profile snapshot", "The evidence behind this report");
  infoGrid([
    { label: "Main goal", value: goalLabel(profile.goal) },
    { label: "Current role", value: profile.currentRole },
    { label: "Career family", value: analysis.roleFamily },
    { label: "Preferred destination", value: profile.preferredCountry },
    { label: "Education", value: profile.education },
    { label: "Experience", value: profile.experience },
    { label: "English readiness", value: profile.english },
    { label: "Budget", value: profile.budget }
  ]);

  addPage();
  sectionTitle(
    "01 / Profile intelligence",
    "How the advisor read your profile",
    "These signals combine the answers supplied with evidence detected in the CV text."
  );
  analysis.profileSignals.forEach((signal) => {
    detailCard({ eyebrow: signal.label, title: signal.value, body: signal.detail });
  });
  callout("Detected and recommended skill signals", analysis.detectedSkills.join(" | "));
  detailCard({ title: "Strong signals", bullets: analysis.strengths });
  detailCard({ title: "Priority gaps", bullets: analysis.gaps });

  addPage();
  sectionTitle(
    "02 / Country pathways",
    "Five destinations to investigate",
    "Fit scores rank profile alignment only. They are not legal eligibility or visa approval predictions."
  );
  analysis.routes.forEach((route, index) => {
    detailCard({
      eyebrow: `Route ${index + 1} | ${route.country}`,
      title: route.route,
      score: `${route.fit}% fit`,
      body: route.summary,
      bullets: route.reasons.slice(0, 2),
      footer: `Priority next move: ${route.nextMove}`
    });
  });

  addPage();
  sectionTitle(
    "03 / Career direction",
    "Roles that preserve your transferable evidence",
    "Use these as search hypotheses. Validate each one against live vacancies, licensing and local terminology."
  );
  analysis.roleMatches.forEach((role, index) => {
    detailCard({
      eyebrow: `Role match ${index + 1} | Best markets: ${role.bestMarkets.join(", ")}`,
      title: role.title,
      score: `${role.fit}% fit`,
      body: role.why,
      bullets: [`Skills to strengthen: ${role.skills.join(", ")}`],
      footer: `Priority action: ${role.priorityAction}`
    });
  });

  addPage();
  sectionTitle(
    "04 / Cost-aware Europe",
    "European countries to research on a tighter budget",
    "Affordability depends on course, city, funding, proof-of-funds rules and personal circumstances. Verify current figures on each official source."
  );
  analysis.europeOptions.forEach((option, index) => {
    detailCard({
      eyebrow: `${index + 1} | ${option.code} | ${option.budgetFit}`,
      title: option.country,
      score: `${option.fit}% fit`,
      body: option.why,
      bullets: [option.action],
      footer: `Official research: ${option.officialUrl}`
    });
  });

  addPage();
  sectionTitle(
    "05 / Before moving abroad",
    "Relocation readiness checklist",
    "Sequence these tasks alongside the visa or admission process so avoidable arrival risks do not become last-minute problems."
  );
  analysis.preDeparture.forEach((area, index) => {
    detailCard({
      eyebrow: `${index + 1} | ${area.timing}`,
      title: area.title,
      bullets: area.items
    });
  });

  addPage();
  sectionTitle(
    "06 / Execution plan",
    "Your next 90 days, sequenced",
    "Complete each phase with evidence. Do not pay application or visa costs until the route assumptions have been checked."
  );
  analysis.actionPlan.forEach((phase, index) => {
    detailCard({
      eyebrow: `Phase ${index + 1} | ${phase.period}`,
      title: phase.title,
      bullets: phase.actions
    });
  });
  callout(
    "Important planning note",
    "This automated report is for indicative planning only. It does not assess legal eligibility, guarantee employment, predict a visa decision or replace advice based on current official rules. Confirm requirements, costs, occupation lists and deadlines before acting.",
    "red"
  );
  callout(
    "Discuss this report with Idol Immigration",
    `Quote ${analysis.reportId} when contacting ${branding.phone} or ${branding.email}. A consultant can review documents, current route rules, costs and application risk in context.`,
    "navy"
  );

  return doc;
}
