import Link from "next/link";
import { Droplets, Wrench, CalendarCheck, ClipboardCheck, BadgeCheck, Truck, ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { services } from "@/lib/services";

const iconMap: Record<string, React.ElementType> = {
  Droplets,
  Wrench,
  CalendarCheck,
  ClipboardCheck,
  BadgeCheck,
  Truck,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-foreground">
              Grease Trap Services for Every Need
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From routine pump-outs to full installations and compliance certifications, we cover every aspect of commercial grease trap management in Brisbane.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Droplets;
            return (
              <AnimateOnScroll key={service.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block bg-card border border-border rounded-2xl p-6 hover:border-[#F97316]/50 hover:shadow-lg hover:shadow-orange-900/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#F97316]/10 group-hover:bg-[#F97316] rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#F97316] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#F97316] font-semibold text-sm">{service.price}</span>
                    <span className="flex items-center gap-1 text-[#F97316] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#F97316] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#F97316] font-semibold hover:underline"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
