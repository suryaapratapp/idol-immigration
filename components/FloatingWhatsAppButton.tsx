import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function FloatingWhatsAppButton() {
  return (
    <a
      className="fixed bottom-24 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:-translate-y-1 hover:shadow-glow sm:bottom-6 sm:right-6"
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Idol Immigration on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
