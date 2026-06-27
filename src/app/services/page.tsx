import type { Metadata } from "next";
import CapabilitiesSection from "@/components/CapabilitiesSection";

export const metadata: Metadata = {
  title: "Grease Trap Services Brisbane",
  description:
    "Full range of grease trap and wash-down bay services for Brisbane and Southeast Queensland — cleaning, installation, compliance, and maintenance.",
  alternates: { canonical: "https://brisbanegreastraps.com.au/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1f14] pt-[88px] pb-16 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto pt-8 text-center">
          <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#7ab890] mb-3">Our services</p>
          <h1 className="font-serif text-[46px] sm:text-[52px] text-white leading-[1.1] mb-5">
            Complete grease trap solutions
          </h1>
          <p className="text-[#a0bcac] text-lg leading-[1.75] max-w-xl mx-auto">
            From a single service to a fully managed programme — all services, all in one place.
          </p>
        </div>
      </section>

      {/* Tabbed capabilities */}
      <CapabilitiesSection />

    </>
  );
}
