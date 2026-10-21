import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const iconLink =
  "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-green";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-6 pb-20 md:py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <Image
            src="/white-font-logo.png"
            alt="Hayat Interiors"
            width={140}
            height={35}
            className="h-8 w-auto"
          />

          <nav className="hidden md:flex items-center gap-5 text-xs text-zinc-400">
            <a href="#why-choose" className="hover:text-white transition-colors">About</a>
            <a href="#gallery" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#consultation-form" className="hover:text-white transition-colors">Book Consultation</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <a href="tel:+919886276722" aria-label="Call +91 98862 76722" className={iconLink}><Phone size={16} /></a>
            <a href="mailto:hello@hayatinteriors.com" aria-label="Email" className={iconLink}><Mail size={16} /></a>
            <a href="https://instagram.com/hayatinteriors.co" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={iconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg></a>
            <a href="https://linkedin.com/company/hayat-interiors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.75 9.75h3.83v1.57h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.12v5.88h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4z" /></svg></a>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs text-zinc-400">
            <a href="tel:+919886276722" className="hover:text-white transition-colors">+91 98862 76722</a>
            <a href="tel:+919535132943" className="hover:text-white transition-colors">+91 95351 32943</a>
          </div>
        </div>

        <div className="mt-4 border-t border-white/10 pt-3 text-center text-[10px] leading-relaxed text-zinc-500 md:flex md:justify-between md:text-left">
          <p>Near Manyata Tech Park, Bengaluru 560045</p>
          <p>
            © 2026 Hayat Interiors · Developed by{" "}
            <a href="https://webcros.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">webcros</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
