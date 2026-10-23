import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

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
    label: "YouTube",
    href: "https://www.youtube.com/@hayatinteriors",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
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
          <div className="md:col-span-5">
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

          {/* Contact Info */}
          <div className="md:col-span-5 md:col-start-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-5">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex flex-nowrap items-center gap-x-4 sm:gap-x-6">
                <a href="tel:+919886276722" className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 hover:text-brand-green transition-colors whitespace-nowrap">
                  <Phone size={16} className="text-brand-green shrink-0" />
                  +91 98862 76722
                </a>
                <a href="tel:+919535132943" className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 hover:text-brand-green transition-colors whitespace-nowrap">
                  <Phone size={16} className="text-brand-green shrink-0" />
                  +91 95351 32943
                </a>
              </div>
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
