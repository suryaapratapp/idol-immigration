import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { whatsappLink } from "@/data/site";

type WhatsAppCTAProps = {
  title?: string;
  copy?: string;
  message?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  primaryLabel?: string;
  minimal?: boolean;
  dark?: boolean;
};

export function WhatsAppCTA({
  title = "Not sure which visa is right?",
  copy = "Send your profile on WhatsApp. We will help you understand the next sensible step without blind promises.",
  message,
  secondaryHref = "/services",
  secondaryLabel = "Explore services",
  primaryLabel = "Send profile for review",
  minimal = false,
  dark = false
}: WhatsAppCTAProps) {
  const showSecondary = !minimal && secondaryHref && secondaryLabel;

  return (
    <section
      className={[
        "relative overflow-hidden rounded-[8px] border p-6 shadow-sm sm:p-8",
        dark
          ? "border-white/10 bg-white/[0.09] text-white shadow-glow backdrop-blur"
          : "border-slate-200 bg-white text-ink"
      ].join(" ")}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-cyan to-ocean" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan/[0.07] via-transparent to-gold/10" />
      <div className={["relative flex flex-col gap-5", minimal ? "" : "2xl:flex-row 2xl:items-center 2xl:justify-between"].join(" ")}>
        <div>
          <h2 className={["text-balance font-semibold tracking-normal", minimal ? "text-xl" : "text-2xl"].join(" ")}>
            {title}
          </h2>
          <p className={["mt-2 max-w-2xl text-sm leading-7", minimal ? "max-w-none" : "", dark ? "text-white/70" : "text-slate-600"].join(" ")}>
            {copy}
          </p>
        </div>
        <div className={["flex gap-3", minimal ? "flex-col" : "flex-col sm:flex-row"].join(" ")}>
          <a
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold leading-5 text-ink shadow-gold transition hover:bg-white sm:w-auto"
            href={whatsappLink(message)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {primaryLabel}
          </a>
          {showSecondary ? (
            <Link
              className={[
                "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-center text-sm font-semibold leading-5 transition sm:w-auto",
                dark
                  ? "border-white/20 text-white hover:border-gold"
                  : "border-slate-200 text-ink hover:border-gold"
              ].join(" ")}
              href={secondaryHref}
            >
              {secondaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
