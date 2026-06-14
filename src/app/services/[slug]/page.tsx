import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Droplets, Wrench, CalendarCheck, BadgeCheck, Truck, ArrowRight, Phone, ChevronRight } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import HomeContactSection from "@/components/HomeContactSection";
import { COMPANY } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Droplets, Wrench, CalendarCheck, BadgeCheck, Truck,
};

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://brisbanegreastraps.com.au/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Droplets;
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1f14] pt-[88px] pb-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto pt-6">
          <nav className="flex items-center gap-1.5 text-sm text-[#3d5e47] mb-8">
            <Link href="/" className="hover:text-[#7ab890] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-[#7ab890] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#7ab890]">{service.shortTitle}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="w-14 h-14 bg-[#2e8b57]/20 rounded-[14px] flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-[#3dab6e]" />
              </div>
              <h1 className="font-serif text-[44px] sm:text-[50px] text-white leading-[1.1] mb-5">{service.title}</h1>
              <p className="text-[#a0bcac] text-lg leading-[1.75] max-w-2xl mb-8">{service.longDescription}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#2e8b57] hover:bg-[#3dab6e] text-white font-semibold px-7 py-[13px] rounded-[10px] transition-colors"
                >
                  Get a quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 font-medium px-7 py-[13px] rounded-[10px] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#3dab6e]" />
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            <div className="lg:w-64 bg-[#2e8b57]/13 border border-[#2e8b57]/28 rounded-[14px] p-6 flex-shrink-0">
              <ul className="space-y-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13px] text-[#a0bcac]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#3dab6e] flex-shrink-0 mt-[7px]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features + Process */}
      <section className="py-[4.5rem] px-6 lg:px-10 bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimateOnScroll direction="left">
            <h2 className="font-serif text-[28px] text-foreground mb-5">What&rsquo;s included</h2>
            <ul className="space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 bg-[#f2f5f3] dark:bg-[#0f2a1c] border border-border rounded-[11px] px-4 py-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#2e8b57] flex-shrink-0 mt-[8px]" />
                  <span className="text-[13px] text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <h2 className="font-serif text-[28px] text-foreground mb-5">Our process</h2>
            <ol className="space-y-4">
              {service.process.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#2e8b57] rounded-full text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <p className="text-[14px] text-muted-foreground pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Other services */}
      <section className="py-14 px-6 lg:px-10 bg-[#0a1f14]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-[26px] text-white mb-6">Other services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {otherServices.map((s) => {
              const OtherIcon = iconMap[s.icon] || Droplets;
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="bg-white/4 border border-white/8 hover:border-[#2e8b57]/40 rounded-[12px] p-5 transition-colors group">
                  <OtherIcon className="w-5 h-5 text-[#3dab6e] mb-3" />
                  <h3 className="text-white font-semibold text-sm mb-1">{s.shortTitle}</h3>
                  <p className="text-[#7ab890] text-xs leading-relaxed line-clamp-2">{s.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <HomeContactSection />
    </>
  );
}
