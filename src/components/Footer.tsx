import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#overview" },
  { label: "Why Us", href: "#why-choose" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Partners", href: "#partners" },
  { label: "Book Consultation", href: "#consultation-form" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/hayatinteriors.co",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/hayat-interiors",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.75 9.75h3.83v1.57h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.12v5.88h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-brand-black border-t border-zinc-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-10 md:py-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Image
              src="/dark-font-logo.png"
              alt="Hayat Interiors"
              width={160}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Premium home interiors for apartments and villas in Bangalore. From concept to handover, one team delivers your dream home.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 hover:text-brand-green hover:border-brand-green transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-5">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-zinc-600 hover:text-brand-green transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-5">Get in Touch</h4>
            <div className="space-y-4">
              <a href="tel:+919886276722" className="flex items-center gap-3 text-sm text-zinc-600 hover:text-brand-green transition-colors">
                <Phone size={16} className="text-brand-green shrink-0" />
                +91 98862 76722
              </a>
              <a href="tel:+919535132943" className="flex items-center gap-3 text-sm text-zinc-600 hover:text-brand-green transition-colors">
                <Phone size={16} className="text-brand-green shrink-0" />
                +91 95351 32943
              </a>
              <a href="mailto:hello@hayatinteriors.com" className="flex items-center gap-3 text-sm text-zinc-600 hover:text-brand-green transition-colors">
                <Mail size={16} className="text-brand-green shrink-0" />
                hello@hayatinteriors.com
              </a>
              <div className="flex items-start gap-3 text-sm text-zinc-600">
                <MapPin size={16} className="text-brand-green shrink-0 mt-0.5" />
                Near Manyata Tech Park, Bengaluru 560045
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-100 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Hayat Interiors. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a href="https://webcros.in" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
              webcros
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
