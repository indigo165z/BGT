"use client";

import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Call Now — mobile only */}
      <a
        href={`tel:${COMPANY.phone}`}
        aria-label="Call now"
        className="fixed bottom-6 left-6 z-50 md:hidden flex items-center gap-2 bg-[#2e8b57] hover:bg-[#3dab6e] text-white px-4 py-3 rounded-full shadow-lg font-semibold text-sm transition-transform hover:scale-105"
      >
        <Phone className="w-5 h-5" />
        Call Cameron
      </a>
    </>
  );
}
