import Link from "next/link";
import { Droplets } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#060f09] py-10 px-10 text-center text-[#3d5e47] text-[13px]">
      {/* Logo row */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-8 h-8 bg-[#2e8b57] rounded-[8px] flex items-center justify-center">
          <Droplets className="w-[17px] h-[17px] text-white" />
        </div>
        <span className="font-serif text-[17px] text-[#7a9e87]">Brisbane Grease Traps</span>
      </div>

      {/* Nav links */}
      <div className="flex justify-center gap-7 flex-wrap mb-5">
        <Link href="/#about" className="hover:text-[#7ab890] transition-colors">About</Link>
        <Link href="/#capabilities" className="hover:text-[#7ab890] transition-colors">Services</Link>
        <Link href="/#industries" className="hover:text-[#7ab890] transition-colors">Industries</Link>
        <Link href="/contact" className="hover:text-[#7ab890] transition-colors">Contact</Link>
      </div>

      <p>Contact: {COMPANY.contactName} &nbsp;|&nbsp; <a href={`tel:${COMPANY.phone}`} className="hover:text-[#7ab890] transition-colors">{COMPANY.phone}</a> &nbsp;|&nbsp; Southeast Queensland, Australia</p>
      <p className="mt-2">&copy; {new Date().getFullYear()} Brisbane Grease Traps. All rights reserved. Licensed &amp; insured.</p>
    </footer>
  );
}
