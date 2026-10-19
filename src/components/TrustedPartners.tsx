"use client";

import { motion } from "framer-motion";

const partners = [
  "Hettich",
  "Century Ply",
  "Greenlam",
  "Asian Paints",
  "Hafele",
  "Sirca",
  "VAWE",
];

export default function TrustedPartners() {
  return (
    <section className="py-12 md:py-16 bg-zinc-50 border-y border-zinc-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <p className="text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-medium">Our Trusted Partners</p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {partners.map((p, i) => (
            <div
              key={i}
              className="text-zinc-400 font-serif text-lg md:text-xl font-light hover:text-brand-green transition-colors"
            >
              {p}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
