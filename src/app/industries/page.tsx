import type { Metadata } from "next";
import {
  UtensilsCrossed, Building2, Factory, ShoppingBag,
  School, Fuel, Car, Warehouse, Truck, HardHat,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import HomeContactSection from "@/components/HomeContactSection";

export const metadata: Metadata = {
  title: "Industries We Serve — Brisbane Grease Traps",
  description:
    "Grease trap and wash-down bay services for restaurants, hotels, food manufacturing, service stations, car washes, industrial warehouses and more across Southeast Queensland.",
  alternates: { canonical: "https://brisbanegreastraps.com.au/industries" },
};

const industries = [
  { Icon: UtensilsCrossed, label: "Restaurants & cafés" },
  { Icon: Building2,       label: "Hotels & resorts" },
  { Icon: Factory,         label: "Food manufacturing & processing" },
  { Icon: ShoppingBag,     label: "Shopping centres" },
  { Icon: School,          label: "Schools, hospitals & aged-care" },
  { Icon: Fuel,            label: "Service stations" },
  { Icon: Car,             label: "Car washes" },
  { Icon: Warehouse,       label: "Industrial warehouses" },
  { Icon: Truck,           label: "Transport companies" },
  { Icon: HardHat,         label: "Mining" },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1f14] pt-[88px] pb-16 px-10">
        <div className="max-w-3xl mx-auto pt-8 text-center">
          <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#7ab890] mb-3">
            Industries we serve
          </p>
          <h1 className="font-serif text-[46px] sm:text-[52px] text-white leading-[1.1] mb-5">
            Trusted across a wide range of sectors
          </h1>
          <p className="text-[#a0bcac] text-lg leading-[1.75] max-w-xl mx-auto">
            From small cafés to large industrial sites.
          </p>
        </div>
      </section>

      {/* Industries grid */}
      <section className="bg-card py-[4.5rem] px-10">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
            >
              {industries.map((ind) => (
                <div
                  key={ind.label}
                  className="bg-[#f2f5f3] border border-border rounded-[12px] px-5 py-5 flex items-center gap-3"
                >
                  <ind.Icon className="w-5 h-5 text-[#2e8b57] flex-shrink-0" />
                  <span className="text-[14px] font-medium text-foreground leading-snug">{ind.label}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact */}
      <HomeContactSection />
    </>
  );
}
