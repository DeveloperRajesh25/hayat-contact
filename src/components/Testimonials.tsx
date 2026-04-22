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
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-12 md:py-24 bg-[#F5F0EB] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl mb-12 md:mb-20">
        <div className="text-center">
          <p className="text-[10px] text-brand-green uppercase tracking-[0.3em] font-medium mb-4">Client Expressions</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-4">What Our Clients Say</h2>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#F5F0EB] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#F5F0EB] to-transparent z-10" />

        <motion.div 
          className="flex gap-6 md:gap-8 hover:pause-marquee"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-white p-8 md:p-10 border border-zinc-100 w-[300px] md:w-[450px] flex-shrink-0 group transition-all duration-300 hover:border-brand-green/30 hover:shadow-xl hover:shadow-black/[0.02]"
            >
              <div className="flex gap-2 mb-8">
                {[...Array(t.stars)].map((_, j) => (
                  <span key={j} className="text-brand-green text-xs">✦</span>
                ))}
              </div>
              <p className="font-sans font-light text-zinc-500 leading-relaxed mb-10 italic text-sm md:text-base whitespace-normal">
                "{t.quote}"
              </p>
              <div className="border-t border-zinc-100 pt-6 mt-auto">
                <div className="font-serif text-lg text-brand-black font-light group-hover:text-brand-green transition-colors">{t.name}</div>
                <div className="text-[9px] text-zinc-400 uppercase tracking-widest mt-1">
                  {t.area} <span className="mx-1 text-zinc-200">|</span> {t.property}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <style jsx>{`
        .hover\:pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

