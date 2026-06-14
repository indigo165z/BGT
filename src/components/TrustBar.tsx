import { Award, ShieldCheck, Clock, Recycle, FileCheck } from "lucide-react";

const items = [
  { icon: Award, label: "Queensland licensed" },
  { icon: ShieldCheck, label: "Fully insured" },
  { icon: Clock, label: "Same-day & after-hours available" },
  { icon: Recycle, label: "Environmentally compliant disposal" },
  { icon: FileCheck, label: "Council-ready compliance reports" },
];

export default function TrustBar() {
  return (
    <div className="bg-[#f0f5f2] border-b border-[#d5e4dc] py-4 px-10 flex items-center justify-center gap-10 flex-wrap">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-[13px] font-semibold text-[#1f4d31]">
          <item.icon className="w-[17px] h-[17px] text-[#2e8b57]" />
          {item.label}
        </div>
      ))}
    </div>
  );
}
