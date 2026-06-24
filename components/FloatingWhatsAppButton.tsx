"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { whatsappLink } from "@/data/site";

const enquiryFinishedEvent = "idol:enquiry-finished";

export function FloatingWhatsAppButton() {
  const [showNudge, setShowNudge] = useState(false);

  useEffect(() => {
    let timer: number | undefined;

    function handleEnquiryFinished() {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setShowNudge(true), 2600);
    }

    window.addEventListener(enquiryFinishedEvent, handleEnquiryFinished);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(enquiryFinishedEvent, handleEnquiryFinished);
    };
  }, []);

  return (
    <div className="fixed bottom-24 right-4 z-40 flex max-w-[calc(100vw-2rem)] items-end gap-3 sm:bottom-6 sm:right-6">
      {showNudge ? (
        <div className="relative mb-1 w-72 rounded-[8px] border border-emerald-200 bg-white p-4 pr-10 text-left shadow-2xl">
          <button
            aria-label="Close WhatsApp message"
            className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full border border-stone-200 bg-white text-slate-500 transition hover:border-gold hover:text-ink"
            onClick={() => setShowNudge(false)}
            type="button"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <p className="text-sm font-semibold text-ink">Still deciding?</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Send us your country and visa goal on WhatsApp. We will guide your next step clearly.
          </p>
          <a
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white"
            href={whatsappLink("Hi Idol Immigration, I need help choosing the right visa or country.")}
            target="_blank"
            rel="noreferrer"
            onClick={() => setShowNudge(false)}
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Message on WhatsApp
          </a>
        </div>
      ) : null}
      <a
        className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:-translate-y-1 hover:shadow-glow"
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Idol Immigration on WhatsApp"
        onClick={() => setShowNudge(false)}
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
