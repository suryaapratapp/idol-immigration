import { site } from "@/data/site";

export type ToolPdfSection = {
  heading: string;
  lines: string[];
};

export type ToolPdfOptions = {
  fileName: string;
  title: string;
  eyebrow: string;
  summary: string;
  sections: ToolPdfSection[];
  dataNote?: string;
};

const page = {
  width: 210,
  height: 297,
  left: 16,
  right: 194,
  contentWidth: 178,
  contentTop: 39,
  contentBottom: 277
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

async function getLogoDataUrl() {
  if (typeof window === "undefined" || typeof FileReader === "undefined") return undefined;
  try {
    const response = await fetch("/images/logo-idol.png");
    const blob = await response.blob();
    return await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch {
    return undefined;
  }
}

export async function createToolPdfDocument(options: ToolPdfOptions) {
  const { jsPDF } = await import("jspdf");
  const logoDataUrl = await getLogoDataUrl();
  const doc = new jsPDF({ compress: true, format: "a4", orientation: "portrait", unit: "mm" });
  let pageNumber = 1;
  let y = page.contentTop;

  doc.setProperties({
    title: options.title,
    subject: options.summary,
    author: site.name,
    creator: `${site.shortName} Momentum Tools`
  });

  function split(value: string, width: number, size = 9) {
    doc.setFontSize(size);
    return doc.splitTextToSize(safeText(value), width) as string[];
  }

  function drawChrome() {
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, page.width, page.height, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(30);
    doc.setTextColor(246, 247, 249);
    doc.text("IDOL IMMIGRATION", 105, 164, { align: "center", angle: 45 });

    if (logoDataUrl) {
      doc.addImage(logoDataUrl, "PNG", page.left, 7, 18, 18, undefined, "FAST");
    } else {
      doc.setFillColor(227, 27, 35);
      doc.rect(page.left, 7, 18, 18, "F");
      doc.setFontSize(9);
      doc.setTextColor(255, 255, 255);
      doc.text("IDOL", page.left + 9, 18, { align: "center" });
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(7, 29, 51);
    doc.text(site.name, 38, 12);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text("MOMENTUM TOOLS | PERSONALISED PLANNING SUMMARY", 38, 17);
    doc.text(`${site.phoneDisplay} | ${site.email}`, page.right, 10, { align: "right" });
    doc.text(site.domain, page.right, 14, { align: "right" });
    doc.setDrawColor(227, 27, 35);
    doc.setLineWidth(0.65);
    doc.line(page.left, 29, page.right, 29);

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(page.left, 283, page.right, 283);
    doc.setFontSize(6.8);
    doc.setTextColor(100, 116, 139);
    doc.text("Indicative planning guidance, not legal advice.", page.left, 288);
    doc.text(site.domain, 105, 288, { align: "center" });
    doc.text(`Page ${pageNumber}`, page.right, 288, { align: "right" });
  }

  function addPage() {
    doc.addPage();
    pageNumber += 1;
    y = page.contentTop;
    drawChrome();
  }

  function ensureSpace(height: number) {
    if (y + height > page.contentBottom) addPage();
  }

  drawChrome();
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(227, 27, 35);
  doc.text(safeText(options.eyebrow).toUpperCase(), page.left, y);
  y += 7;
  doc.setFontSize(21);
  doc.setTextColor(7, 29, 51);
  const titleLines = split(options.title, page.contentWidth, 21);
  doc.text(titleLines, page.left, y);
  y += titleLines.length * 8 + 2;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.2);
  doc.setTextColor(71, 85, 105);
  const summaryLines = split(options.summary, page.contentWidth, 9.2);
  doc.text(summaryLines, page.left, y);
  y += summaryLines.length * 4.4 + 8;

  options.sections.forEach((section, sectionIndex) => {
    const prepared = section.lines.map((line) => split(line, page.contentWidth - 14, 8.7));
    const height = 17 + prepared.reduce((total, lines) => total + lines.length * 4 + 2.5, 0);
    const reserveForDataNote = sectionIndex === options.sections.length - 1 && options.dataNote ? 8 : 0;
    ensureSpace(Math.min(height, 65) + reserveForDataNote);
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    const availableHeight = Math.min(height, page.contentBottom - y);
    doc.roundedRect(page.left, y, page.contentWidth, availableHeight, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(7, 29, 51);
    doc.text(safeText(section.heading), page.left + 6, y + 8);
    let lineY = y + 15;
    prepared.forEach((lines) => {
      if (lineY + lines.length * 4 > page.contentBottom - 4) {
        addPage();
        lineY = y;
      }
      doc.setFillColor(227, 27, 35);
      doc.circle(page.left + 7.5, lineY - 1, 0.7, "F");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.7);
      doc.setTextColor(71, 85, 105);
      doc.text(lines, page.left + 11, lineY);
      lineY += lines.length * 4 + 2.5;
    });
    y = Math.max(y + availableHeight + 5, lineY + 3);
  });

  if (options.dataNote) {
    const noteLines = split(options.dataNote, page.contentWidth, 7.5);
    ensureSpace(noteLines.length * 3.5 + 2);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(noteLines, page.left, y);
  }

  return doc;
}

export async function downloadToolPdf(options: ToolPdfOptions) {
  const doc = await createToolPdfDocument(options);
  doc.save(options.fileName);
}
