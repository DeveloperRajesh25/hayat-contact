"use client";

import { motion } from "framer-motion";

export default function OverviewSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] text-brand-green uppercase tracking-[0.3em] font-medium mb-4">About Us</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-8 leading-tight">
            Thoughtfully Designed Homes.<br />Made for Everyday Living.
          </h2>
          <p className="font-sans text-zinc-600 font-light leading-relaxed mb-6 text-sm sm:text-base">
            Hayat Interiors is an end-to-end interior design company in Bangalore, creating personalised homes that balance style, comfort and functionality. From contemporary luxury to minimalist, Scandinavian and Japandi-inspired spaces, every design is tailored to your lifestyle, preferences and budget.
          </p>
          <p className="font-sans text-zinc-600 font-light leading-relaxed text-sm sm:text-base">
            From modular kitchens and custom wardrobes to complete home interiors, we manage every stage under one accountable team, with a clear, itemised quotation so you know exactly what you&apos;re getting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
