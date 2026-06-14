import { CalendarCheck, Moon, FileText, DollarSign } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const highlights = [
  {
    icon: CalendarCheck,
    title: "On time, every time",
    desc: "Reliable scheduling with no missed appointments — we respect your time and your business.",
  },
  {
    icon: Moon,
    title: "Out-of-hours service",
    desc: "We work around your trading hours so there's no disruption to your kitchen or your customers.",
  },
  {
    icon: FileText,
    title: "Full compliance reports",
    desc: "Detailed service and compliance documentation for council, trade waste, and Queensland Health requirements.",
  },
  {
    icon: DollarSign,
    title: "Transparent pricing",
    desc: "No hidden fees. You get a clear quote upfront so you can plan with confidence.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-card py-[4.5rem] px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <AnimateOnScroll direction="left">
          <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#2e8b57] mb-3">About us</p>
          <h2 className="font-serif text-[38px] text-foreground leading-[1.15] mb-6">
            Built on reliability and expertise
          </h2>
          <div className="space-y-4 text-muted-foreground text-[16px] leading-[1.8]">
            <p>
              At Brisbane Grease Traps, we specialise in keeping commercial kitchens compliant, operating efficiently, and environmentally responsible. Our business is built on reliability, industry expertise, and a commitment to delivering fast, professional service across Southeast Queensland.
            </p>
            <p>
              We understand how critical a well-maintained grease trap is to the smooth operation of your business. That&rsquo;s why we provide comprehensive solutions designed to prevent further issues, avoid costly downtime, and ensure you meet all local council and environmental regulations.
            </p>
            <p>
              Our prompt solutions are delivered on time and on budget — from out-of-hours works to programmed maintenance. We offer detailed reports, 24-hour service solutions for trade waste issues, and we work within your schedule with minimal disturbance to trading.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right">
          <div className="flex flex-col gap-[14px]">
            {highlights.map((h) => (
              <div key={h.title} className="bg-[#f2f5f3] dark:bg-[#0f2a1c] border border-border rounded-[13px] p-5 flex gap-[13px] items-start">
                <div className="w-10 h-10 bg-[#e8f5ee] dark:bg-[#2e8b57]/20 rounded-[9px] flex items-center justify-center flex-shrink-0">
                  <h.icon className="w-5 h-5 text-[#2e8b57]" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-foreground mb-1">{h.title}</h4>
                  <p className="text-[13px] text-muted-foreground leading-[1.55]">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
