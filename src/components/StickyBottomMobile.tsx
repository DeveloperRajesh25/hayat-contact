"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function StickyBottomMobile() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] h-14 bg-white/90 backdrop-blur-xl border-t border-zinc-100 flex items-stretch md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      <a
        href="tel:+919886276722"
        className="flex-1 flex flex-col items-center justify-center text-zinc-600 transition-all hover:text-brand-black hover:bg-zinc-50 active:scale-[0.98] border-r border-zinc-100/50"
      >
        <Phone size={16} className="mb-0.5" />
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] mt-0.5">Call Us</span>
      </a>
      
      <a
        href="https://wa.me/919886276722"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center text-[#25D366] transition-all hover:text-[#1da851] hover:bg-zinc-50 active:scale-[0.98] border-r border-zinc-100/50"
      >
        <MessageCircle size={16} className="mb-0.5" />
        <span className="text-[9px] font-medium uppercase tracking-[0.2em]">WhatsApp</span>
      </a>

      <a
        href="#consultation-form"
        className="flex-[1.5] flex flex-col items-center justify-center bg-brand-gold text-brand-black transition-all hover:bg-brand-black hover:text-white active:scale-[0.98] shadow-lg shadow-brand-gold/10"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Book Consultation</span>
      </a>
    </div>
  );
}
