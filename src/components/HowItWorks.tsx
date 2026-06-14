import { CalendarDays, Truck, Sparkles, FileText } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const steps = [
  {
    icon: CalendarDays,
    step: "01",
    title: "Book Online or Call",
    description:
      "Get in touch via our quick quote form or phone us directly. We&rsquo;ll confirm your booking and arrival window within the hour.",
  },
  {
    icon: Truck,
    step: "02",
    title: "We Arrive On Time",
    description:
      "Our fully equipped service vehicle arrives at your premises at the agreed time — we respect your kitchen&rsquo;s operating schedule.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Full Service Completed",
    description:
      "We perform a complete pump-out, high-pressure jet clean, and visual inspection — all waste is removed and disposed of lawfully.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Report & Certificate Issued",
    description:
      "You receive a detailed service report and compliance certificate by email, ready for your council records.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#0F172A]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-widest">
              Simple Process
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
              How It Works
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Four straightforward steps — from booking to compliance certificate.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#F97316]/0 via-[#F97316]/30 to-[#F97316]/0" />

          {steps.map((step, i) => (
            <AnimateOnScroll key={step.step} delay={i * 0.1}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-20 h-20 bg-[#1E293B] border-2 border-[#F97316]/20 rounded-2xl flex items-center justify-center mb-5">
                  <step.icon className="w-9 h-9 text-[#F97316]" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#F97316] rounded-full text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
