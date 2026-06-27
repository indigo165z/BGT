"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="bg-[#0a1f14]">
      <div className="max-w-7xl mx-auto px-10 pt-20 pb-[4.5rem] grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#2e8b57]/18 text-[#7ab890] text-xs font-bold tracking-widest uppercase px-[14px] py-[5px] rounded-full border border-[#7ab890]/30 mb-5"
          >
            <MapPin className="w-3 h-3" />
            Serving Southeast Queensland
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-serif text-[50px] md:text-[56px] text-white leading-[1.1] mb-5"
          >
            Grease trap experts you can{" "}
            <em className="italic text-[#7ab890]">rely on</em>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 bg-[#2e8b57] hover:bg-[#3dab6e] text-white font-semibold text-[15px] px-[30px] py-[14px] rounded-[10px] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {COMPANY.phone}
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center border border-[#c5d8cd]/30 text-[#c5d8cd] hover:text-white hover:border-[#c5d8cd]/60 font-medium text-[15px] px-[30px] py-[14px] rounded-[10px] transition-colors"
            >
              Our services
            </a>
          </motion.div>
        </div>

        {/* Right — stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="grid grid-cols-2 gap-[14px]"
        >
          {/* Direct contact card — spans full width */}
          <div className="col-span-2 bg-[#2e8b57]/13 border border-[#2e8b57]/28 rounded-[14px] p-5 flex items-center gap-4">
            <div className="w-[52px] h-[52px] bg-[#2e8b57]/28 rounded-[11px] flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-serif text-[28px] text-white leading-none mb-1">Direct contact</div>
              <div className="text-[#7ab890] text-[13px] font-semibold mb-1">Every time</div>
              <div className="text-[#a0bcac] text-[13px] leading-snug">
                <strong className="text-white font-semibold">No call centres, no run-around.</strong> When you call, you speak to the team doing the work.
              </div>
            </div>
          </div>

          {/* 24hr */}
          <div className="bg-white/5 border border-white/10 rounded-[14px] p-5">
            <div className="font-serif text-[38px] text-white leading-none mb-1">24hr</div>
            <div className="text-[#7ab890] text-[13px] font-semibold">Emergency response</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
