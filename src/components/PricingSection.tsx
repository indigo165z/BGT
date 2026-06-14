import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const plans = [
  {
    name: "Basic",
    price: "$180",
    period: "per service",
    description: "Ideal for smaller cafés and low-volume kitchens.",
    features: [
      "Single grease trap pump-out",
      "Visual inspection included",
      "Waste disposal at licenced facility",
      "Service report emailed",
      "Next service reminder",
    ],
    cta: "Book Basic Service",
    highlight: false,
  },
  {
    name: "Standard",
    price: "$299",
    period: "per service",
    description: "Our most popular choice for restaurants and hotels.",
    features: [
      "Everything in Basic",
      "High-pressure pipe jetting",
      "Baffle and lid inspection",
      "Photographic documentation",
      "Compliance certificate issued",
      "Priority scheduling",
    ],
    cta: "Book Standard Service",
    highlight: true,
  },
  {
    name: "Premium",
    price: "$499",
    period: "per service",
    description: "Full-service package for high-volume operations and chains.",
    features: [
      "Everything in Standard",
      "Full structural inspection report",
      "Council liaison if required",
      "Dedicated account manager",
      "Annual compliance review",
      "Emergency call-out included",
      "Multi-site discount available",
    ],
    cta: "Book Premium Service",
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-[#0F172A]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-widest">
              Transparent Pricing
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
              Simple, Upfront Pricing
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              No hidden call-out fees. No surprises. Choose the package that suits your kitchen, or contact us for a custom quote.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <AnimateOnScroll key={plan.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#F97316] border-[#F97316] shadow-2xl shadow-orange-900/30 scale-105"
                    : "bg-[#1E293B] border-white/10 hover:border-white/20"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#F97316] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className={`text-sm mt-1 ${plan.highlight ? "text-orange-100" : "text-gray-400"}`}>
                    {plan.description}
                  </p>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className={`text-sm mb-1 ${plan.highlight ? "text-orange-100" : "text-gray-400"}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-white" : "text-[#F97316]"}`}
                      />
                      <span className={`text-sm ${plan.highlight ? "text-orange-50" : "text-gray-300"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  render={<Link href="/contact" />}
                  className={`w-full font-semibold ${
                    plan.highlight
                      ? "bg-white text-[#F97316] hover:bg-orange-50"
                      : "bg-[#F97316] hover:bg-[#EA6C0A] text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.4}>
          <p className="text-center text-gray-500 text-sm mt-8">
            Prices exclude GST. Contact us for maintenance contract discounts and multi-site pricing.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
