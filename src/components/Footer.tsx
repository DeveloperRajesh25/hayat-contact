"use client";

export default function Footer() {
  return (
    <footer className="bg-white text-brand-black pt-16 md:pt-24 pb-12 md:pb-20 border-t border-zinc-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 md:mb-20 border-b border-zinc-100 pb-12 md:pb-20">

          {/* Logo & Tagline */}
          <div className="space-y-6 text-center md:text-left md:col-span-2 pr-0 md:pr-12 md:border-r border-zinc-100/50">
            <div className="font-serif text-3xl font-light tracking-wide text-brand-black uppercase">
              Hayat <span className="text-brand-green italic">Interiors</span>
            </div>
            <p className="font-sans text-[10px] text-zinc-400 uppercase tracking-[0.3em] leading-loose">
              Contemporary living and heritage-inspired <br className="hidden lg:block" /> interior design with exceptional craftsmanship
            </p>
            <div className="pt-8 space-y-4">
              <h4 className="text-zinc-900 font-medium uppercase tracking-[0.2em] text-[10px]">Office Hours</h4>
              <div className="text-[10px] text-zinc-500 space-y-1 font-light uppercase tracking-wider">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: Closed <span className="text-zinc-400 italic font-sans">(Emergency support available)</span></p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-xs font-sans text-zinc-500 font-light">
            <h4 className="text-zinc-900 font-medium uppercase tracking-[0.2em] text-[10px] mb-4">Explore</h4>
            <a href="https://www.hayatinteriors.com" className="hover:text-brand-green transition-colors">Home</a>
            <a href="https://www.hayatinteriors.com/our-projects" className="hover:text-brand-green transition-colors">Portfolio</a>
            <a href="https://www.hayatinteriors.com/about" className="hover:text-brand-green transition-colors">Philosophy</a>
            <a href="#consultation-form" className="hover:text-brand-green transition-colors text-brand-green">Book Consultation</a>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-xs font-sans text-zinc-500 font-light">
            <h4 className="text-zinc-900 font-medium uppercase tracking-[0.2em] text-[10px] mb-4">Get in Touch</h4>
            <p className="text-center md:text-left leading-relaxed">
              Near Manyata Tech Park,<br />
              Bengaluru 560045, India
            </p>
            <a href="tel:+919886276722" className="hover:text-brand-green transition-colors">+91 98862 76722</a>
            <a href="mailto:hello@hayatinteriors.com" className="hover:text-brand-green transition-colors">hello@hayatinteriors.com</a>

            <div className="flex gap-4 pt-4">
              <a href="https://instagram.com/hayatinteriors.co" target="_blank" className="hover:text-brand-green transition-colors">Instagram</a>
              <a href="https://threads.net/@hayatinteriors.co" target="_blank" className="hover:text-brand-green transition-colors">Threads</a>
            </div>
            <a
              href="https://wa.me/919886276722"
              className="mt-2 inline-block border-b border-brand-green/20 pb-0.5 text-brand-green hover:border-brand-green transition-colors"
            >
              Message via WhatsApp
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-zinc-400 font-sans uppercase tracking-[0.2em] font-light text-center md:text-left">
          <p>© 2026 Hayat Interiors. All Rights Reserved.</p>
          <p>Developed by <a href="https://webcros.in" target="_blank" className="hover:text-brand-green transition-colors">webcros</a></p>
        </div>
      </div>
    </footer>
  );
}
