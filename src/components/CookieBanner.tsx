"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies_accepted")) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a1f14] border-t border-white/10 shadow-2xl p-4 md:p-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-[#a0bcac] flex-1">
          We use cookies to improve your experience on our website.{" "}
          <a href="/contact" className="text-[#3dab6e] underline hover:no-underline">Learn more</a>
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={accept}
            className="bg-[#2e8b57] hover:bg-[#3dab6e] text-white font-semibold text-sm px-5 py-2 rounded-[9px] transition-colors"
          >
            Accept
          </button>
          <button onClick={() => setVisible(false)} aria-label="Dismiss" className="text-[#7ab890] hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
