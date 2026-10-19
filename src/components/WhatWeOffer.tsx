"use client";

import { motion } from "framer-motion";

const services = [
  { name: "Modular Kitchens", icon: "🍳" },
  { name: "Wardrobes & Storage", icon: "🗄️" },
  { name: "Crockery Units", icon: "🍽️" },
  { name: "Living & TV Units", icon: "📺" },
  { name: "Study Areas", icon: "📚" },
  { name: "False Ceilings", icon: "🏠" },
  { name: "Lighting", icon: "💡" },
  { name: "Wallpapers & Wall Finishes", icon: "🎨" },
  { name: "Bathrooms", icon: "🚿" },
  { name: "Pooja Units", icon: "🪔" },
  { name: "Foyer & Entrance", icon: "🚪" },
  { name: "Kids' Bedrooms", icon: "🛏️" },
];

export default function WhatWeOffer() {
  return (
    <section className="py-16 md:py-24 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] text-brand-green uppercase tracking-[0.3em] font-medium mb-4">Hayat Interiors</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-4">What We Offer</h2>
          <p className="font-sans text-zinc-500 font-light max-w-xl mx-auto">
            End-to-end home interior solutions for modern homes in Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {services.map((s, i) => (
            <motion.a
              key={i}
              href="#consultation-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group bg-white rounded-xl p-6 md:p-8 text-center border border-zinc-100 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="text-2xl md:text-3xl mb-3">{s.icon}</div>
              <h3 className="font-sans text-xs sm:text-sm font-medium text-brand-black group-hover:text-brand-green transition-colors">
                {s.name}
              </h3>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#consultation-form"
            className="inline-flex items-center gap-3 bg-brand-green text-white px-10 py-4 font-sans text-xs uppercase tracking-[0.15em] font-bold transition-all hover:bg-brand-black"
          >
            Book Your Free Design Consultation →
          </a>
          <p className="text-zinc-400 text-xs mt-3">Includes a personalised mood board.</p>
        </div>
      </div>
    </section>
  );
}
