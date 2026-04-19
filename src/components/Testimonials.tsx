"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    stars: 5,
    quote: "Hayat Interiors delivered beyond our expectations. The team was professional, on-time and the quality is stunning. Our 3BHK feels like a 5-star hotel now!",
    name: "Rahul & Deepika M.",
    area: "Whitefield",
    property: "3BHK Apartment",
  },
  {
    stars: 5,
    quote: "From concept to completion in 45 days. The free mood board they gave us helped us visualize everything before we even started. 100% recommend!",
    name: "Priya S.",
    area: "HSR Layout",
    property: "Full Villa",
  },
  {
    stars: 5,
    quote: "Best decision we made was calling Hayat Interiors. Transparent pricing, no surprises. Our full home interior gets compliments from every guest!",
    name: "Arjun K.",
    area: "Koramangala",
    property: "Full Home Interior",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F5F0EB] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <p className="text-[10px] text-brand-gold uppercase tracking-[0.3em] font-medium mb-4">Client Expressions</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white p-10 border border-zinc-200/50 relative group shadow-sm hover:shadow-xl hover:shadow-black/[0.02] transition-all"
            >
              <div className="flex gap-2 mb-8">
                {[...Array(t.stars)].map((_, j) => (
                  <span key={j} className="text-brand-gold text-xs">✦</span>
                ))}
              </div>
              <p className="font-sans font-light text-zinc-500 leading-relaxed mb-10 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-zinc-100 pt-6 mt-auto">
                <div className="font-serif text-lg text-brand-black font-light group-hover:text-brand-gold transition-colors">{t.name}</div>
                <div className="text-[9px] text-zinc-400 uppercase tracking-widest mt-1">
                  {t.area} <span className="mx-1 text-zinc-200">|</span> {t.property}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
