"use client";

import { useState } from "react";
import {
  SprayCan, ClipboardCheck, Wrench,
  Droplet, ClipboardList, Factory,
  UtensilsCrossed, Building2, ShoppingBag, School,
  Fuel, Car, Warehouse, Truck, HardHat, Check,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const tabs = [
  { id: "grease",     label: "Grease Traps" },
  { id: "washdown",   label: "Wash Down Bays & Oil Separators" },
  { id: "industries", label: "Industries we serve" },
];

/* ── Capability cards ── */
type PanelCard = { Icon: React.ElementType; title: string; items: string[] };

const panels: Record<string, PanelCard[]> = {
  grease: [
    {
      Icon: SprayCan,
      title: "Servicing",
      items: [
        "Emergency call-outs for urgent blockages or overflows",
        "High-pressure water cleaning",
        "Waste removal and environmentally compliant disposal",
        "Preventative maintenance plans",
        "Concrete remediation work and coatings",
        "Baffles and lid replacements",
      ],
    },
    {
      Icon: ClipboardCheck,
      title: "Compliance reports",
      items: [
        "Detailed reports to meet council and trade waste obligations",
        "Compliance checks and documentation",
        "Maintaining operations in line with local council regulations and meeting all relevant Queensland environmental compliance standards.",
      ],
    },
    {
      Icon: Wrench,
      title: "Installation services",
      items: [
        "Grease trap supply and installation",
        "Trade waste installations and modifications",
        "Location requirements assessment",
        "Temporary bypasses while still trading",
        "Concrete bunding around tank",
        "Excavation",
        "Wash down taps",
        "Steel bollards",
        "Concreting works",
        "Line marking",
      ],
    },
  ],
  washdown: [
    {
      Icon: Droplet,
      title: "Servicing",
      items: [
        "Service, inspections, and reports",
        "Pump replacements",
        "Filter replacement and cleans",
        "Lids and grates replacements",
        "Concrete remediation",
      ],
    },
    {
      Icon: ClipboardList,
      title: "Compliance reports",
      items: [
        "Detailed service reports for council and environmental requirements",
        "Compliance checks and documentation",
        "Advice on servicing and upgrades",
      ],
    },
    {
      Icon: Factory,
      title: "Installation services",
      items: [
        "Holding tanks",
        "Wash down bay packages",
        "Excavation",
        "Concreting works",
        "Washdown taps and sprayers",
        "Steel bollards",
        "Line marking",
      ],
    },
  ],
};

/* ── Industries & Why choose us ── */
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

const reasons = [
  { title: "All-in-one service",                   desc: "Servicing, compliance, and installation all under one roof — no need to juggle multiple contractors." },
  { title: "Reliable scheduling",                  desc: "No missed appointments. We show up when we say we will, every time." },
  { title: "Transparent pricing",                  desc: "Clear quotes upfront with no hidden fees or surprise charges." },
  { title: "Environmentally responsible",          desc: "All waste is removed and disposed of in full compliance with environmental regulations." },
  { title: "Minimal disruption",                   desc: "We work around your schedule with as little disturbance to your trading as possible." },
  { title: "Friendly, professional communication", desc: "You'll always know what's happening — clear updates every step of the way." },
];

type TabId = "grease" | "washdown" | "industries";

export default function CapabilitiesSection() {
  const [active, setActive] = useState<TabId>("grease");

  return (
    <section id="capabilities" className="bg-[#f2f5f3] dark:bg-[#0f2a1c] py-[4.5rem] px-10">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#2e8b57] mb-3">
            Our capabilities
          </p>
          <h2 className="font-serif text-[38px] text-foreground leading-[1.15] mb-3">
            Comprehensive services across two specialisations
          </h2>
          <p className="text-muted-foreground text-base max-w-[640px] leading-[1.75]">
            Select a category below to explore our full range of services, compliance solutions, and installation capabilities.
          </p>
        </AnimateOnScroll>

        {/* Tab buttons */}
        <div className="flex gap-2 flex-wrap mt-8 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id as TabId)}
              className={`px-5 py-[9px] rounded-full border text-[14px] font-medium transition-all cursor-pointer ${
                active === tab.id
                  ? "bg-[#0a1f14] dark:bg-[#2e8b57] text-white border-[#0a1f14] dark:border-[#2e8b57]"
                  : "bg-card text-muted-foreground border-border hover:border-[#2e8b57] hover:text-[#2e8b57]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service panels */}
        {(active === "grease" || active === "washdown") && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {panels[active].map((card, i) => (
              <AnimateOnScroll key={card.title} delay={i * 0.07}>
                <div className="bg-card border border-border rounded-[14px] p-6 h-full">
                  <div className="w-11 h-11 bg-[#e8f5ee] dark:bg-[#2e8b57]/20 rounded-[10px] flex items-center justify-center mb-4">
                    <card.Icon className="w-[22px] h-[22px] text-[#2e8b57]" />
                  </div>
                  <h4 className="text-[15px] font-semibold text-foreground mb-3">{card.title}</h4>
                  <ul className="space-y-[6px]">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px] text-muted-foreground leading-[1.5]">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#2e8b57] flex-shrink-0 mt-[7px]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        )}

        {/* Industries panel */}
        {active === "industries" && (
          <AnimateOnScroll>
            {/* Industries grid */}
            <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#2e8b57] mb-3">
              Industries we serve
            </p>
            <h3 className="font-serif text-[32px] text-foreground leading-[1.15] mb-3">
              Trusted across a wide range of sectors
            </h3>
            <p className="text-muted-foreground text-base max-w-[640px] leading-[1.75] mb-8">
              From small cafés to large industrial sites.
            </p>

            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
            >
              {industries.map((ind) => (
                <div
                  key={ind.label}
                  className="bg-card border border-border rounded-[12px] px-4 py-4 flex items-center gap-3"
                >
                  <ind.Icon className="w-5 h-5 text-[#2e8b57] flex-shrink-0" />
                  <span className="text-[13px] font-medium text-foreground leading-snug">{ind.label}</span>
                </div>
              ))}
            </div>

            {/* Why choose us */}
            <div className="mt-10 bg-[#0a1f14] rounded-[14px] px-8 py-8">
              <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#7ab890] mb-3">
                Why choose us
              </p>
              <h3 className="font-serif text-[32px] text-white leading-[1.15] mb-3">
                The all-in-one grease trap solution
              </h3>
              <p className="text-[#a0bcac] text-base max-w-[560px] leading-[1.75] mb-8">
                We handle everything from routine servicing to full installations — so you deal with one trusted team, not multiple contractors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reasons.map((r) => (
                  <div
                    key={r.title}
                    className="bg-white/4 border border-white/8 rounded-[14px] px-6 py-5 flex gap-[14px] items-start"
                  >
                    <div className="w-[30px] h-[30px] bg-[#2e8b57]/25 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#7ab890]" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-white mb-1">{r.title}</h4>
                      <p className="text-[13px] text-[#7ab890] leading-[1.55]">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
