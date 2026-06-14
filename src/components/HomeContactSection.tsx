import { Phone, MapPin, AlertCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/constants";

export default function HomeContactSection() {
  return (
    <section id="contact" className="bg-card py-[4.5rem] px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left — info */}
        <AnimateOnScroll direction="left">
          <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#2e8b57] mb-3">
            Get in touch
          </p>
          <h2 className="font-serif text-[38px] text-foreground leading-[1.15] mb-4">
            Talk to Cameron directly
          </h2>
          <p className="text-muted-foreground text-[16px] leading-[1.75] max-w-[480px]">
            For bookings, quotes, or emergency service, reach out to Cameron Melville — the owner and operator of Brisbane Grease Traps.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {/* Phone */}
            <div className="flex items-center gap-[13px]">
              <div className="w-10 h-10 bg-[#e8f5ee] rounded-[10px] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#2e8b57]" />
              </div>
              <div>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-[17px] font-semibold text-foreground block leading-tight"
                >
                  {COMPANY.phone}
                </a>
                <span className="text-[13px] text-muted-foreground">
                  {COMPANY.contactName} — available 24hrs for emergencies
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-[13px]">
              <div className="w-10 h-10 bg-[#e8f5ee] rounded-[10px] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#2e8b57]" />
              </div>
              <span className="text-[15px] text-foreground">
                Servicing Greater Brisbane, Southeast Queensland
              </span>
            </div>
          </div>

          {/* Emergency badge */}
          <div className="mt-8 bg-[#0a1f14] rounded-[14px] px-6 py-5 flex items-start gap-[14px]">
            <AlertCircle className="w-[30px] h-[30px] text-[#7ab890] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white text-[15px] font-semibold block mb-1">
                Grease trap emergency?
              </strong>
              <span className="text-[13px] text-[#7ab890]">
                Call Cameron now on{" "}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-white font-semibold hover:text-[#3dab6e] transition-colors"
                >
                  {COMPANY.phone}
                </a>{" "}
                — 24-hour emergency response across Southeast Queensland.
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Right — form */}
        <AnimateOnScroll direction="right">
          <div className="bg-[#f2f5f3] border border-border rounded-[16px] p-8">
            <h3 className="text-[19px] font-semibold text-foreground mb-5">Send an enquiry</h3>
            <ContactForm />
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
