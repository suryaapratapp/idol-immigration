import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { whatsappLink } from "@/data/site";

type WhatsAppCTAProps = {
  title?: string;
  copy?: string;
  message?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  dark?: boolean;
};

export function WhatsAppCTA({
  title = "Not sure which visa is right?",
  copy = "Send your profile on WhatsApp. We will help you understand the next sensible step without blind promises.",
  message,
  secondaryHref = "/services",
  secondaryLabel = "Explore services",
  dark = false
}: WhatsAppCTAProps) {
  return (
    <section
      className={[
        "rounded-[8px] border p-6 sm:p-8",
        dark
          ? "border-white/10 bg-white/10 text-white"
          : "border-slate-200 bg-white text-ink shadow-sm"
      ].join(" ")}
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-normal">{title}</h2>
          <p className={["mt-2 max-w-2xl text-sm leading-7", dark ? "text-white/70" : "text-slate-600"].join(" ")}>
            {copy}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-midnight transition hover:bg-white"
            href={whatsappLink(message)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Send profile for review
          </a>
          <Link
            className={[
              "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition",
              dark
                ? "border-white/20 text-white hover:border-cyan"
                : "border-slate-200 text-ink hover:border-cyan"
            ].join(" ")}
            href={secondaryHref}
          >
            {secondaryLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
