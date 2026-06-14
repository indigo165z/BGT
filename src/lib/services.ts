export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: string[];
  price: string;
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "cleaning",
    title: "Grease Trap Servicing",
    shortTitle: "Servicing",
    description:
      "Scheduled cleaning, pump-outs, emergency call-outs, and high-pressure water cleaning to keep your kitchen compliant and running smoothly.",
    longDescription:
      "Our expert technicians provide thorough grease trap servicing using industrial-grade vacuum trucks and high-pressure jetting equipment. We handle everything from scheduled pump-outs and preventative maintenance plans to emergency call-outs for urgent blockages or overflows. All waste is removed and disposed of in full compliance with Queensland environmental regulations. We work within your schedule with minimal disturbance to trading.",
    icon: "Droplets",
    features: [
      "Scheduled grease trap cleaning and pump-outs",
      "Emergency call-outs for urgent blockages or overflows",
      "High-pressure water cleaning",
      "Waste removal and environmentally compliant disposal",
      "Preventative maintenance plans",
      "Concrete remediation work and coatings",
      "Baffles and lid replacements",
    ],
    benefits: [
      "Avoid council fines and compliance notices",
      "Eliminate kitchen odours caused by FOG build-up",
      "Prevent costly drain blockages and plumbing repairs",
      "Works scheduled around your trading hours",
    ],
    process: [
      "Book your service online, by phone, or request a maintenance plan",
      "Our technician arrives in a fully equipped service vehicle at the agreed time",
      "Complete pump-out, high-pressure jet clean, and inspection performed on-site",
      "Waste hauled away and disposed of at a licenced facility",
      "Detailed service report issued for your compliance records",
    ],
    price: "From $180",
    metaTitle: "Grease Trap Cleaning & Servicing Brisbane | Brisbane Grease Traps",
    metaDescription:
      "Professional grease trap cleaning, pump-outs, and emergency servicing across Brisbane. Licensed, insured, and compliant with Queensland regulations. Call 0459 410 785.",
  },
  {
    slug: "compliance",
    title: "Compliance Reports",
    shortTitle: "Compliance",
    description:
      "Detailed service reports, compliance checks, and expert advice to ensure your business meets all council and Queensland environmental standards.",
    longDescription:
      "Brisbane City Council and Queensland Health require commercial kitchens to maintain grease traps in serviceable condition and keep thorough records. Our compliance service produces detailed reports for every service visit, provides compliance checks and documentation, and offers clear advice on meeting local council and Queensland environmental standards. We make the paperwork straightforward so you can focus on running your business.",
    icon: "BadgeCheck",
    features: [
      "Detailed service reports for council and trade waste requirements",
      "Compliance checks and documentation",
      "Advice on meeting local council and Queensland environmental standards",
      "24-hour turnaround on all compliance reports",
      "Records formatted for Queensland Health and BCC audits",
    ],
    benefits: [
      "Avoid trading licence suspensions and council fines",
      "Documentation always ready for health inspectors",
      "Expert guidance on regulatory changes",
      "Peace of mind that your records are audit-ready",
    ],
    process: [
      "We assess your current documentation and compliance position",
      "On-site service and inspection carried out",
      "Detailed report produced with photographic evidence",
      "Report delivered within 24 hours",
      "Ongoing monitoring to flag upcoming renewal dates",
    ],
    price: "Included with service",
    metaTitle: "Grease Trap Compliance Reports Brisbane | Brisbane Grease Traps",
    metaDescription:
      "Grease trap compliance reports and documentation for Brisbane food businesses. Meet Queensland Health and BCC requirements. Call Cameron on 0459 410 785.",
  },
  {
    slug: "installation",
    title: "Installation Services",
    shortTitle: "Installation",
    description:
      "Complete grease trap and trade waste installation including excavation, concreting, wash-down taps, steel bollards, and line marking.",
    longDescription:
      "Whether you're opening a new venue, carrying out a fitout, or upgrading an existing system, we handle the full scope — from council permits and excavation through to concreting, line marking, and handover. We also offer temporary bypasses so you can keep trading during works. Our all-in-one approach means you deal with one contractor, not five.",
    icon: "Wrench",
    features: [
      "Grease trap supply and installation",
      "Trade waste installations and modifications",
      "Location assessment and council requirements",
      "Temporary bypasses while still trading",
      "Concrete bunding around tank",
      "Excavation",
      "Wash-down taps",
      "Steel bollards",
      "Concreting works",
      "Line marking",
    ],
    benefits: [
      "Single contractor for the full scope — no coordination headaches",
      "Temporary bypass keeps your kitchen trading during works",
      "Council-approved installation protects your licence",
      "Correct sizing from the start prevents costly upgrades later",
    ],
    process: [
      "Site visit to assess drainage layout and requirements",
      "Detailed quote covering all civil, permit, and installation costs",
      "Council permit lodgement managed on your behalf",
      "Installation carried out by our licensed plumbers and civil crew",
      "Final inspection, commissioning, and handover documentation",
    ],
    price: "From $1,800",
    metaTitle: "Grease Trap Installation Brisbane | Brisbane Grease Traps",
    metaDescription:
      "Expert grease trap and trade waste installation across Brisbane. Excavation, concreting, bollards, line marking — all in one. Call 0459 410 785.",
  },
  {
    slug: "washdown-bays",
    title: "Wash-Down Bays & Oil Separators",
    shortTitle: "Wash-Down Bays",
    description:
      "Servicing, compliance reports, and full installation of wash-down bays, oil separators, and holding tanks for industrial and commercial sites.",
    longDescription:
      "Wash-down bays and oil separators are essential for service stations, car washes, industrial warehouses, and transport depots. We provide complete servicing including pump replacements, filter cleans, lid and grate replacements, and concrete remediation — as well as full installation packages with holding tanks, wash-down taps, sprayers, steel bollards, and line marking.",
    icon: "Truck",
    features: [
      "Service inspections and compliance reports",
      "Pump replacements",
      "Filter replacement and cleans",
      "Lid and grate replacements",
      "Concrete remediation",
      "Holding tank installation",
      "Wash-down bay packages",
      "Excavation and concreting works",
      "Wash-down taps and sprayers",
      "Steel bollards and line marking",
    ],
    benefits: [
      "Keep your site compliant with stormwater and trade waste regulations",
      "Prevent environmental contamination from oils and hydrocarbons",
      "Full-service provider — no need to manage multiple contractors",
      "Detailed compliance reports ready for council inspections",
    ],
    process: [
      "Site assessment to determine service or installation requirements",
      "Detailed quote and compliance gap review",
      "Service or installation works carried out on schedule",
      "Compliance report issued",
      "Ongoing maintenance plan available",
    ],
    price: "From $250",
    metaTitle: "Wash-Down Bays & Oil Separators Brisbane | Brisbane Grease Traps",
    metaDescription:
      "Wash-down bay and oil separator servicing and installation for Brisbane industrial and commercial sites. Call Cameron on 0459 410 785.",
  },
  {
    slug: "maintenance",
    title: "Preventative Maintenance Plans",
    shortTitle: "Maintenance",
    description:
      "Tailored scheduled maintenance programmes so you never miss a service, always have documentation ready, and avoid costly emergency call-outs.",
    longDescription:
      "A maintenance plan with Brisbane Grease Traps means your traps, separators, and wash-down systems are serviced on a schedule matched to your operation. We work within your trading hours, provide 24-hour service solutions for trade waste issues, and deliver reports after every visit. Fixed costs, no surprises, and one point of contact for everything.",
    icon: "CalendarCheck",
    features: [
      "Custom schedules from monthly to quarterly",
      "Works carried out out-of-hours or around trading",
      "Priority booking — no waiting during busy periods",
      "Discounted rates on all scheduled visits",
      "Digital maintenance log accessible any time",
      "Automatic service reminders",
      "24-hour service solutions for trade waste issues",
      "Annual compliance review included",
    ],
    benefits: [
      "Fixed costs make budgeting straightforward",
      "Compliance documentation always up to date",
      "Reduces risk of emergency call-outs",
      "Works scheduled with minimal disruption to trading",
    ],
    process: [
      "We assess your kitchen volume, trap size, and operational schedule",
      "We recommend the right service interval for your operation",
      "You approve the schedule and we lock in your dates",
      "Technicians arrive as scheduled — no follow-up needed from you",
      "Reports and compliance certificates emailed after every visit",
    ],
    price: "From $149/visit",
    metaTitle: "Grease Trap Maintenance Plans Brisbane | Brisbane Grease Traps",
    metaDescription:
      "Scheduled grease trap maintenance programmes for Brisbane restaurants and commercial kitchens. Minimal disruption, compliance guaranteed. Call 0459 410 785.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
