import { MapPin } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { SERVICE_AREAS } from "@/lib/constants";

const featured = SERVICE_AREAS.slice(0, 24);

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-background" id="service-areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-widest">
              Coverage
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-foreground">
              Servicing All Brisbane Suburbs
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our mobile service teams cover the entire Brisbane metro area. If your suburb isn&rsquo;t listed below, give us a call — we probably service it.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex flex-wrap gap-3">
              {featured.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 bg-[#F97316]/5 border border-[#F97316]/20 text-foreground text-sm px-3 py-1.5 rounded-full hover:bg-[#F97316]/10 transition-colors"
                >
                  <MapPin className="w-3 h-3 text-[#F97316]" />
                  {area}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 bg-[#0F172A] text-white text-sm px-3 py-1.5 rounded-full">
                + many more
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
