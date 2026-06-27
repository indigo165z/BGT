import type { Metadata } from "next";
import { Phone } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeContactSection from "@/components/HomeContactSection";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — Brisbane Grease Trap Specialists",
  description:
    "Brisbane Grease Traps specialises in keeping commercial kitchens compliant, operating efficiently, and environmentally responsible across Southeast Queensland.",
  alternates: { canonical: "https://brisbanegreastraps.com.au/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0a1f14] pt-[88px] pb-16 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto pt-8 text-center">
          <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#7ab890] mb-3">About us</p>
          <h1 className="font-serif text-[46px] sm:text-[52px] text-white leading-[1.1] mb-5">
            Built on reliability and expertise
          </h1>
          <a
            href={`tel:${COMPANY.phone}`}
            className="inline-flex items-center gap-2 bg-[#2e8b57] hover:bg-[#3dab6e] text-white font-semibold px-7 py-[13px] rounded-[10px] transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call now — {COMPANY.phone}
          </a>
        </div>
      </section>

      <AboutSection />
      <IndustriesSection />
      <WhyChooseUs />
      <HomeContactSection />
    </>
  );
}
