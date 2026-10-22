"use client";

import Image from "next/image";

const navLinks = [
  { label: "About", href: "#overview" },
  { label: "Why Us", href: "#why-choose" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#consultation-form" },
];

export default function StickyTopBar() {
  return (
    <nav className="absolute top-0 z-[100] w-full px-4 py-4 sm:px-6 sm:py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/white-font-logo.png"
            alt="Hayat Interiors"
            width={200}
            height={50}
            className="h-9 w-auto sm:h-11"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#consultation-form"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
        >
          Book Consultation
        </a>
      </div>
    </nav>
  );
}
