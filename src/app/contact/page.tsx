import type { Metadata } from "next";
import { Phone, MapPin, AlertCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Talk to Cameron Directly",
  description:
    "For bookings, quotes, or emergency service, reach out to Cameron Melville — the owner and operator of Brisbane Grease Traps. Call 0459 410 785.",
  alternates: { canonical: "https://brisbanegreastraps.com.au/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1f14] pt-[88px] pb-16 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto pt-8 text-center">
          <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#7ab890] mb-3">Get in touch</p>
          <h1 className="font-serif text-[46px] sm:text-[52px] text-white leading-[1.1] mb-5">
            Talk to Cameron directly
          </h1>
          <p className="text-[#a0bcac] text-lg leading-[1.75] max-w-xl mx-auto">
            For bookings, quotes, or emergency service, reach out to Cameron Melville — the owner and operator of Brisbane Grease Traps.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-[4.5rem] px-6 lg:px-10 bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — contact info */}
          <AnimateOnScroll direction="left">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#e8f5ee] dark:bg-[#2e8b57]/20 rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#2e8b57]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-0.5">Phone</p>
                  <a href={`tel:${COMPANY.phone}`} className="text-[17px] font-semibold text-foreground hover:text-[#2e8b57] transition-colors block">
                    {COMPANY.phone}
                  </a>
                  <p className="text-[13px] text-muted-foreground">{COMPANY.contactName} — available 24hrs for emergencies</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#e8f5ee] dark:bg-[#2e8b57]/20 rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#2e8b57]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-0.5">Service area</p>
                  <p className="text-foreground font-medium">Servicing Greater Brisbane, Southeast Queensland</p>
                </div>
              </div>
            </div>

            {/* Emergency badge */}
            <div className="mt-8 bg-[#0a1f14] rounded-[14px] p-5 flex items-start gap-4">
              <AlertCircle className="w-7 h-7 text-[#7ab890] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-[15px] font-semibold block mb-1">Grease trap emergency?</strong>
                <span className="text-[#7ab890] text-[13px]">
                  Call Cameron now on{" "}
                  <a href={`tel:${COMPANY.phone}`} className="text-white font-semibold hover:text-[#3dab6e] transition-colors">
                    {COMPANY.phone}
                  </a>{" "}
                  — 24-hour emergency response across Southeast Queensland.
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right — form */}
          <AnimateOnScroll direction="right">
            <div className="bg-[#f2f5f3] dark:bg-[#0f2a1c] border border-border rounded-[16px] p-8">
              <h2 className="text-[19px] font-semibold text-foreground mb-6">Send an enquiry</h2>
              <ContactForm />
            </div>
          </AnimateOnScroll>

        </div>
      </section>
    </>
  );
}
