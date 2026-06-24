import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Star, Youtube } from "lucide-react";
import { footerQuickLinks, site, whatsappLink } from "@/data/site";

const socialLinks = [
  { label: "Instagram", href: site.socials.instagram, icon: Instagram, className: "text-[#E4405F] hover:bg-[#E4405F]/10" },
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin, className: "text-[#0A66C2] hover:bg-[#0A66C2]/10" },
  { label: "Facebook", href: site.socials.facebook, icon: Facebook, className: "text-[#1877F2] hover:bg-[#1877F2]/10" },
  { label: "YouTube", href: site.socials.youtube, icon: Youtube, className: "text-[#FF0000] hover:bg-[#FF0000]/10" }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-stone-200 bg-ivory text-ink">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-[8px] border border-gold/40 bg-white text-sm font-bold text-ink shadow-[0_14px_38px_rgba(201,164,93,0.16)]">
              II
            </span>
            <div>
              <p className="font-semibold">{site.name}</p>
              <p className="text-sm text-slate-500">Premium immigration guidance from Gurugram</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-600">
            {site.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-gold"
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
              5.0 Google Reviews
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  aria-label={social.label}
                  className={[
                    "grid h-10 w-10 place-items-center rounded-full border border-stone-200 bg-white shadow-sm transition hover:border-gold",
                    social.className
                  ].join(" ")}
                  href={social.href}
                  key={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contact</p>
          <div className="mt-5 grid gap-4 text-sm leading-7 text-slate-600">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-ocean" aria-hidden="true" />
              <span>{site.address}</span>
            </p>
            <a className="flex gap-3 transition hover:text-ink" href={`mailto:${site.email}`}>
              <Mail className="mt-1 h-5 w-5 shrink-0 text-ocean" aria-hidden="true" />
              <span>{site.email}</span>
            </a>
            <a className="flex gap-3 transition hover:text-ink" href={whatsappLink()} target="_blank" rel="noreferrer">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-ocean" aria-hidden="true" />
              <span>{site.phoneDisplay} / WhatsApp {site.whatsappNumber}</span>
            </a>
          </div>
          <a
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(15,23,42,0.18)] transition hover:bg-gold hover:text-ink"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Quick WhatsApp Enquiry
          </a>
        </div>

        <FooterColumn title="Useful Links" links={footerQuickLinks} />
      </div>

      <div className="border-t border-stone-200 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs leading-6 text-slate-500 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
          <p className="max-w-4xl">
            Disclaimer: Idol Immigration provides consultation and application support. Immigration rules, eligibility, documents, timelines and outcomes depend on official government criteria and individual circumstances. Information on this website is for general guidance and should be verified with current official sources before applying. We do not guarantee visa approval.
          </p>
          <p className="shrink-0">Copyright {year} {site.shortName}.</p>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{title}</p>
      <ul className="mt-5 grid gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="text-sm text-slate-600 transition hover:text-ink" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
