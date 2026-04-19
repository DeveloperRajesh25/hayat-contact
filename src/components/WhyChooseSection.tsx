"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "10+ Years Experience",
    desc: "Crafting luxury interiors since 2014 with passion and unwavering precision.",
  },
  {
    number: "02",
    title: "Bespoke Consultation",
    desc: "Personalized design sessions with our expert principal architects.",
  },
  {
    number: "03",
    title: "Guaranteed Timelines",
    desc: "Projects delivered on strict schedules with integrated penalty clauses.",
  },
  {
    number: "04",
    title: "Transparent Pricing",
    desc: "Clear, itemized billing with absolutely no hidden costs or surprises.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <p className="text-[10px] text-brand-gold uppercase tracking-[0.3em] font-medium mb-4">The Hayat Difference</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-4">Why Homeowners Trust Us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-left space-y-6"
            >
              <div className="text-2xl font-serif text-brand-gold/20 pb-4 border-b border-zinc-100">
                {f.number}
              </div>
              <h3 className="font-serif text-xl font-light text-brand-black">{f.title}</h3>
              <p className="font-sans text-sm text-zinc-500 leading-relaxed font-light">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
