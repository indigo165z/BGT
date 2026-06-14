import { UtensilsCrossed, Building2, Factory, ShoppingBag, School, Fuel, Car, Warehouse, Truck, HardHat } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const industries = [
  { icon: UtensilsCrossed, label: "Restaurants & cafés" },
  { icon: Building2, label: "Hotels & resorts" },
  { icon: Factory, label: "Food manufacturing & processing" },
  { icon: ShoppingBag, label: "Shopping centres" },
  { icon: School, label: "Schools, hospitals & aged-care" },
  { icon: Fuel, label: "Service stations" },
  { icon: Car, label: "Car washes" },
  { icon: Warehouse, label: "Industrial warehouses" },
  { icon: Truck, label: "Transport companies" },
  { icon: HardHat, label: "Mining" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-card py-[4.5rem] px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#2e8b57] mb-3">
            Industries we serve
          </p>
          <h2 className="font-serif text-[38px] text-foreground leading-[1.15] mb-3">
            Trusted across a wide range of sectors
          </h2>
          <p className="text-muted-foreground text-base max-w-[640px] leading-[1.75]">
            From small cafés to large industrial sites.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-3 mt-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
          {industries.map((ind, i) => (
            <AnimateOnScroll key={ind.label} delay={i * 0.05}>
              <div className="bg-[#f2f5f3] dark:bg-[#0f2a1c] border border-border rounded-[12px] px-4 py-4 flex items-center gap-3">
                <ind.icon className="w-5 h-5 text-[#2e8b57] flex-shrink-0" />
                <span className="text-[13px] font-medium text-foreground leading-snug">{ind.label}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
