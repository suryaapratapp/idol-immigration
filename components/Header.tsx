"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site, whatsappLink } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
          href="/"
          aria-label="Idol Immigration home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-[8px] border border-cyan/30 bg-white/10 text-sm font-bold text-cyan shadow-glow">
            II
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-white">Idol Immigration</span>
            <span className="hidden text-xs text-white/50 sm:block">
              Overseas Consultants
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                className={[
                  "rounded-full px-3 py-2 text-xs font-medium transition",
                  active ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                ].join(" ")}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-cyan px-4 py-2 text-sm font-semibold text-midnight transition hover:bg-white"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp Consultation
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white xl:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-midnight px-4 py-4 shadow-2xl xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                className="rounded-[8px] border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white/80"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-midnight"
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Consultation
            </a>
            <p className="px-1 pt-2 text-xs text-white/50">
              Confused where to start? Message us on WhatsApp: {site.whatsappNumber}
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
