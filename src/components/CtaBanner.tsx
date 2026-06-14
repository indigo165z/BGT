import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { COMPANY } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="bg-[#2e8b57] py-20 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="font-serif text-[38px] text-white leading-[1.15] mb-4">
            Ready to sort your grease trap?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto leading-[1.75]">
            Get in touch with Cameron directly — same-day service available across Southeast Queensland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-[#0a1f14] hover:bg-[#060f09] text-white font-semibold text-[15px] px-8 py-[14px] rounded-[10px] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:bg-white/10 font-medium text-[15px] px-8 py-[14px] rounded-[10px] transition-colors"
            >
              Send an enquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
