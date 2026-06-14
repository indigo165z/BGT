"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const testimonials = [
  {
    name: "Marco Rosetti",
    role: "Owner, Rosetti's Italian Kitchen — Fortitude Valley",
    text: "Brisbane Grease Traps have been servicing our restaurant for over three years. They always show up on time, the team is professional, and the compliance reports are ready within hours. Couldn't ask for better service.",
    initials: "MR",
  },
  {
    name: "Sarah Nguyen",
    role: "Operations Manager, The Riverside Hotel — South Bank",
    text: "We had a grease trap emergency on a Friday evening before a large function. Brisbane Grease Traps had someone on-site within two hours and sorted the problem completely. Absolute lifesavers — highly recommend.",
    initials: "SN",
  },
  {
    name: "James Tran",
    role: "Head Chef, Spice Garden Restaurant — West End",
    text: "Switched to Brisbane Grease Traps after a bad experience with another provider. The difference is night and day — thorough work, detailed reports, and the team actually explains what they've done. Great value for money.",
    initials: "JT",
  },
  {
    name: "Lisa Carmichael",
    role: "Café Owner, Grounds & Co — Newstead",
    text: "As a small café operator, compliance paperwork used to stress me out. BGT handles everything — they remind me when my next service is due and provide all the documentation I need for council. Total peace of mind.",
    initials: "LC",
  },
  {
    name: "David Okafor",
    role: "Facilities Manager, Grand Pacific Hotel — Brisbane CBD",
    text: "We manage multiple commercial kitchens and Brisbane Grease Traps handles them all. Their account management is excellent — one point of contact, consistent quality, and all documentation organised impeccably.",
    initials: "DO",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[idx];

  return (
    <section className="py-[4.5rem] px-6 lg:px-10 bg-[#f2f5f3] dark:bg-[#0f2a1c]">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#2e8b57] mb-3 text-center">Client reviews</p>
          <h2 className="font-serif text-[38px] text-foreground leading-[1.15] mb-10 text-center">
            What Brisbane businesses say
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="relative bg-card border border-border rounded-[16px] p-8 sm:p-10">
            <Quote className="absolute top-6 right-8 w-12 h-12 text-[#2e8b57]/10" />

            <div className="flex gap-0.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#2e8b57] text-lg">★</span>
              ))}
            </div>

            <p className="text-foreground text-lg leading-[1.75] mb-7">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#2e8b57] flex items-center justify-center text-white font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={prev} aria-label="Previous" className="w-9 h-9 bg-[#f2f5f3] dark:bg-white/5 hover:bg-[#2e8b57] hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-muted-foreground text-xs">{idx + 1} / {testimonials.length}</span>
                <button onClick={next} aria-label="Next" className="w-9 h-9 bg-[#f2f5f3] dark:bg-white/5 hover:bg-[#2e8b57] hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="flex justify-center gap-2 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-[#2e8b57]" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
