import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { countries } from "@/data/countries";
import { featuredServices } from "@/data/services";
import { navLinks, site, whatsappLink } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const quickLinks = [
    ...navLinks.slice(1, 7),
    { label: "UK Life Guide", href: "/founders/uk-experience" }
  ];

  return (
    <footer className="relative overflow-hidden bg-midnight text-white">
      <div className="absolute inset-0 premium-grid opacity-25" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-[8px] border border-gold/40 bg-gradient-to-br from-white/15 to-cyan/10 text-sm font-bold text-gold shadow-gold">
              II
            </span>
            <div>
              <p className="font-semibold">{site.name}</p>
              <p className="text-sm text-white/50">Global migration mentor brand</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            Visa, study abroad, immigration and overseas settlement guidance for
            Indian students, families and professionals.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-gold hover:text-white"
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {site.whatsappNumber}
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-gold hover:text-white"
              href={`mailto:${site.email}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.email}
            </a>
          </div>
        </div>

        <FooterColumn title="Quick links" links={quickLinks} />
        <FooterColumn
          title="Visa categories"
          links={featuredServices.map((service) => ({
            label: service.shortTitle,
            href: `/services/${service.slug}`
          }))}
        />
        <FooterColumn
          title="Countries"
          links={countries.slice(0, 8).map((country) => ({
            label: `${country.flag} ${country.name}`,
            href: `/countries/${country.slug}`
          }))}
        />
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs leading-6 text-white/50 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            Idol Immigration provides consultation and application support.
            Immigration rules, eligibility and outcomes depend on official
            government criteria and individual circumstances. We do not
            guarantee visa approval.
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
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 grid gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="text-sm text-white/60 transition hover:text-gold" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
