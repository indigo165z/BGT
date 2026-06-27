"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Phone, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#0a1f14]/95 backdrop-blur-md shadow-lg" : "bg-[#0a1f14]"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-[38px] h-[38px] bg-[#2e8b57] rounded-[9px] flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-white text-[19px] leading-tight block">Brisbane Grease Traps</span>
            </div>
            <span className="sm:hidden font-serif text-white text-lg">BGT</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-[#7ab890]"
                    : "text-[#c5d8cd] hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 bg-[#2e8b57] hover:bg-[#3dab6e] text-white text-sm font-semibold px-[22px] py-[10px] rounded-[9px] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call now
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="text-white hover:bg-white/10 rounded-md p-2" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0a1f14] border-white/10 w-[280px]">
                <SheetHeader>
                  <SheetTitle className="text-white text-left flex items-center gap-2 font-serif">
                    <div className="w-8 h-8 bg-[#2e8b57] rounded-[8px] flex items-center justify-center">
                      <Droplets className="w-4 h-4 text-white" />
                    </div>
                    Brisbane Grease Traps
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        pathname === link.href
                          ? "bg-[#2e8b57]/10 text-[#7ab890]"
                          : "text-[#c5d8cd] hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 px-2">
                  <a
                    href={`tel:${COMPANY.phone}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-[#2e8b57] hover:bg-[#3dab6e] text-white font-semibold py-3 rounded-[9px] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call now — {COMPANY.phone}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
