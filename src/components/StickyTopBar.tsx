"use client";
import Image from "next/image";

export default function StickyTopBar() {
  return (
    <nav className="fixed top-0 z-[100] w-full bg-black/10 backdrop-blur-sm border-b border-white/5 py-5 px-6 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image 
            src="/white-font-logo.png" 
            alt="Hayat Interiors" 
            width={180} 
            height={60} 
            className="h-10 w-auto object-contain sm:h-12"
            priority
          />
        </div>

        {/* Right Info */}
        <div className="flex items-center gap-6">
          <div className="hidden flex-col items-end gap-1 sm:flex">
            <span className="text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase">Design Consultation</span>
            <a
              href="tel:+919886276722"
              className="text-xs font-medium tracking-widest text-white hover:text-brand-gold transition-colors"
            >
              +91 98862 76722
            </a>
          </div>
          {/* Mobile phone icon or small text */}
          <a
            href="tel:+919886276722"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white sm:hidden"
            aria-label="Call Us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
