"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function StickyTopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[100] w-full py-4 px-4 sm:px-6 transition-all duration-300 ${isScrolled
          ? "bg-black/25 border-b border-white/10 shadow-lg backdrop-blur-md"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <Image
              src="/white-font-logo.png"
              alt="Hayat Interiors"
              width={200}
              height={50}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+919886276722"
            className="hidden sm:block text-sm font-bold tracking-tight text-white hover:text-white/80 transition-colors"
          >
            +91 98862 76722
          </a>
          {/* Mobile Action */}
          <a
            href="tel:+919886276722"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors sm:hidden ${isScrolled ? "bg-white/10 text-white" : "bg-black/20 text-white backdrop-blur-sm"
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
