"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function StickyTopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneClass = `text-sm font-bold tracking-tight transition-colors ${
    isScrolled ? "text-white hover:text-white/80" : "text-brand-black hover:text-brand-green"
  }`;

  return (
    <nav
      className={`fixed top-0 z-[100] w-full px-4 py-3 transition-all duration-300 sm:px-6 sm:py-4 ${
        isScrolled
          ? "bg-black/30 border-b border-white/10 shadow-lg backdrop-blur-md"
          : "bg-white border-b border-zinc-100"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src={isScrolled ? "/white-font-logo.png" : "/dark-font-logo.png"}
            alt="Hayat Interiors"
            width={200}
            height={50}
            className="h-9 w-auto sm:h-11"
            priority
          />
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden items-center gap-4 sm:flex">
            <a href="tel:+919886276722" className={phoneClass}>+91 98862 76722</a>
            <span className={isScrolled ? "text-white/20 text-xs" : "text-zinc-300 text-xs"}>|</span>
            <a href="tel:+919535132943" className={phoneClass}>+91 95351 32943</a>
          </div>
          <a
            href="tel:+919886276722"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors sm:hidden ${
              isScrolled ? "bg-white/10 text-white" : "bg-brand-green text-white"
            }`}
            aria-label="Call Us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
