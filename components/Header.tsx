"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { countries } from "@/data/countries";
import { navLinks, serviceNavLinks, whatsappLink } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    const pendingDropdown = window.sessionStorage.getItem("idol-header-dropdown");
    window.sessionStorage.removeItem("idol-header-dropdown");

    if (pendingDropdown === "services" && pathname.startsWith("/services")) {
      setServicesOpen(true);
      setCountriesOpen(false);
      return;
    }

    if (pendingDropdown === "countries" && pathname.startsWith("/countries")) {
      setCountriesOpen(true);
      setServicesOpen(false);
      return;
    }

    setServicesOpen(false);
    setCountriesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function closeDropdowns(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
        setCountriesOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setCountriesOpen(false);
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", closeDropdowns);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeDropdowns);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/92 shadow-[0_12px_34px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          href="/"
          aria-label="Idol Immigration home"
        >
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-[8px] border border-gold/40 bg-white shadow-[0_12px_30px_rgba(224,122,95,0.16)]">
            <Image
              src="/images/logo-idol.png"
              alt="Idol Immigration logo"
              width={44}
              height={44}
              className="h-full w-full object-contain p-0.5"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink">Idol Immigration</span>
            <span className="hidden text-xs text-slate-500 sm:block">
              Overseas Consultants
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-stone-200 bg-ivory/70 p-1 xl:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            if (link.label === "Services") {
              return (
                <div
                  className="relative"
                  key={link.href}
                  onFocusCapture={() => {
                    setServicesOpen(true);
                    setCountriesOpen(false);
                  }}
                  onMouseEnter={() => {
                    setServicesOpen(true);
                    setCountriesOpen(false);
                  }}
                >
                  <Link
                    aria-expanded={servicesOpen}
                    aria-haspopup="menu"
                    className={[
                      "inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold transition",
                      active
                        ? "bg-white text-ink shadow-sm ring-1 ring-gold/30"
                        : "text-slate-600 hover:bg-white hover:text-ink"
                    ].join(" ")}
                    href="/services"
                    onClick={() => {
                      window.sessionStorage.setItem("idol-header-dropdown", "services");
                      setServicesOpen(true);
                      setCountriesOpen(false);
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      className={[
                        "h-3.5 w-3.5 transition",
                        servicesOpen ? "rotate-180" : ""
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </Link>
                  <div
                    className={[
                      "absolute left-0 top-full w-80 pt-3 transition",
                      servicesOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    ].join(" ")}
                  >
                    <div
                      className="max-h-[calc(100vh-6rem)] overflow-y-auto rounded-[8px] border border-stone-200 bg-white p-2 shadow-2xl"
                      role="menu"
                    >
                      <Link
                        className="block rounded-[8px] bg-ivory px-4 py-3 text-sm font-semibold text-ink transition hover:bg-stone-100"
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        role="menuitem"
                      >
                        All Services
                      </Link>
                      <div className="my-2 h-px bg-stone-200" />
                      {serviceNavLinks.map((serviceLink) => (
                        <Link
                          className="block rounded-[8px] px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-ivory hover:text-ink"
                          href={serviceLink.href}
                          key={serviceLink.href}
                          onClick={() => setServicesOpen(false)}
                          role="menuitem"
                        >
                          {serviceLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (link.label === "Countries") {
              return (
                <div
                  className="relative"
                  key={link.href}
                  onFocusCapture={() => {
                    setCountriesOpen(true);
                    setServicesOpen(false);
                  }}
                  onMouseEnter={() => {
                    setCountriesOpen(true);
                    setServicesOpen(false);
                  }}
                >
                  <Link
                    aria-expanded={countriesOpen}
                    aria-haspopup="menu"
                    className={[
                      "inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold transition",
                      active
                        ? "bg-white text-ink shadow-sm ring-1 ring-gold/30"
                        : "text-slate-600 hover:bg-white hover:text-ink"
                    ].join(" ")}
                    href="/countries"
                    onClick={() => {
                      window.sessionStorage.setItem("idol-header-dropdown", "countries");
                      setCountriesOpen(true);
                      setServicesOpen(false);
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      className={[
                        "h-3.5 w-3.5 transition",
                        countriesOpen ? "rotate-180" : ""
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </Link>
                  <div
                    className={[
                      "absolute left-0 top-full w-80 pt-3 transition",
                      countriesOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    ].join(" ")}
                  >
                    <div
                      className="overflow-hidden rounded-[8px] border border-stone-200 bg-white p-2 shadow-2xl"
                      role="menu"
                    >
                      <Link
                        className="block rounded-[8px] bg-ivory px-4 py-3 text-sm font-semibold text-ink transition hover:bg-stone-100"
                        href="/countries"
                        onClick={() => setCountriesOpen(false)}
                        role="menuitem"
                      >
                        All Countries
                      </Link>
                      <div className="my-2 h-px bg-stone-200" />
                      {countries.map((country) => (
                        <Link
                          className="flex items-center gap-3 rounded-[8px] px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-ivory hover:text-ink"
                          href={`/countries/${country.slug}`}
                          key={country.slug}
                          onClick={() => setCountriesOpen(false)}
                          role="menuitem"
                        >
                          <span aria-hidden="true">{country.flag}</span>
                          {country.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                className={[
                  "rounded-full px-3 py-2 text-xs font-semibold transition",
                  active ? "bg-white text-ink shadow-sm ring-1 ring-gold/30" : "text-slate-600 hover:bg-white hover:text-ink"
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
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(15,23,42,0.18)] transition hover:bg-gold hover:text-ink"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Enquire Now
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-ivory text-ink xl:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-stone-200 bg-white px-4 py-4 shadow-2xl xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div className="rounded-[8px] border border-stone-200 bg-ivory p-2" key={link.href}>
                    <Link
                      className="flex items-center justify-between rounded-[8px] px-3 py-3 text-sm font-semibold text-ink"
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      Services
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <div className="grid gap-1 pt-1">
                      {serviceNavLinks.map((serviceLink) => (
                        <Link
                          className="rounded-[8px] px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-ink"
                          href={serviceLink.href}
                          key={serviceLink.href}
                          onClick={() => setOpen(false)}
                        >
                          {serviceLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (link.label === "Countries") {
                return (
                  <div className="rounded-[8px] border border-stone-200 bg-ivory p-2" key={link.href}>
                    <Link
                      className="flex items-center justify-between rounded-[8px] px-3 py-3 text-sm font-semibold text-ink"
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      Countries
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <div className="grid gap-1 pt-1">
                      {countries.map((country) => (
                        <Link
                          className="rounded-[8px] px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-ink"
                          href={`/countries/${country.slug}`}
                          key={country.slug}
                          onClick={() => setOpen(false)}
                        >
                          <span className="mr-2" aria-hidden="true">{country.flag}</span>
                          {country.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  className="rounded-[8px] border border-stone-200 bg-ivory px-4 py-3 text-sm font-medium text-ink"
                  href={link.href}
                  key={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Enquiry
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
