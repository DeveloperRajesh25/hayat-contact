"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function StickyBottomMobile() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] h-14 bg-brand-green flex items-stretch md:hidden border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <a
        href="tel:+919886276722"
        className="flex-1 flex flex-col items-center justify-center text-white transition-all hover:bg-white/10 border-r border-white/10"
      >
        <Phone size={14} className="mb-0.5" />
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]">Call 1</span>
      </a>
      <a
        href="tel:+919535132943"
        className="flex-1 flex flex-col items-center justify-center text-white transition-all hover:bg-white/10 border-r border-white/10"
      >
        <Phone size={14} className="mb-0.5" />
        <span className="text-[7px] font-bold uppercase tracking-[0.1em]">Call 2</span>
      </a>
      
      <a
        href="https://wa.me/919886276722"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center text-[#25D366] transition-all hover:bg-white/10 border-r border-white/10"
      >
        <MessageCircle size={14} className="mb-0.5" />
        <span className="text-[8px] font-bold uppercase tracking-[0.2em]">WhatsApp</span>
      </a>
 
      <a
        href="#consultation-form"
        className="flex-[1.5] flex items-center justify-center bg-white text-brand-green transition-all active:scale-[0.98]"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Enquire Now</span>
      </a>
    </div>
  );
}
