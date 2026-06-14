import { Check } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const reasons = [
  {
    title: "All-in-one service",
    desc: "Servicing, compliance, and installation all under one roof — no need to juggle multiple contractors.",
  },
  {
    title: "Reliable scheduling",
    desc: "No missed appointments. We show up when we say we will, every time.",
  },
  {
    title: "Transparent pricing",
    desc: "Clear quotes upfront with no hidden fees or surprise charges.",
  },
  {
    title: "Environmentally responsible",
    desc: "All waste is removed and disposed of in full compliance with environmental regulations.",
  },
  {
    title: "Minimal disruption",
    desc: "We work around your schedule with as little disturbance to your trading as possible.",
  },
  {
    title: "Friendly, professional communication",
    desc: "You'll always know what's happening — clear updates every step of the way.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-[#0a1f14] py-[4.5rem] px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#7ab890] mb-3">
            Why choose us
          </p>
          <h2 className="font-serif text-[38px] text-white leading-[1.15] mb-3">
            The all-in-one grease trap solution
          </h2>
          <p className="text-[#a0bcac] text-base max-w-[640px] leading-[1.75]">
            We handle everything from routine servicing to full installations — so you deal with one trusted team, not multiple contractors.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
          {reasons.map((r, i) => (
            <AnimateOnScroll key={r.title} delay={i * 0.07}>
              <div className="bg-white/4 border border-white/8 rounded-[14px] px-6 py-5 flex gap-[14px] items-start">
                <div className="w-[30px] h-[30px] bg-[#2e8b57]/25 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#7ab890]" />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-white mb-1">{r.title}</h4>
                  <p className="text-[13px] text-[#7ab890] leading-[1.55]">{r.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
