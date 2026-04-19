"use client";

export default function StickyTopBar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-black/5 py-2.5 px-4 transition-all shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-[9px] sm:text-[10px] tracking-widest uppercase font-sans">
        <div className="flex items-center gap-3 text-zinc-800">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse"></span>
          <span className="font-medium">Complimentary Design Consultation</span>
        </div>
        <a 
          href="tel:+919886276722" 
          className="text-brand-gold font-bold hover:text-brand-black transition-colors"
        >
          +91 98862 76722
        </a>
      </div>
    </div>
  );
}
