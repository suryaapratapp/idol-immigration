import { MessageCircle, PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import { whatsappLink } from "@/data/site";

export function MobileBottomCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-3 shadow-2xl backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-3 text-sm font-semibold text-white"
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp Us
        </a>
        <Link
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-3 text-sm font-semibold text-white"
          href="/services"
        >
          <PanelsTopLeft className="h-4 w-4" aria-hidden="true" />
          Explore Services
        </Link>
      </div>
    </div>
  );
}
