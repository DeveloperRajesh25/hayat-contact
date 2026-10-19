"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Complimentary Consultation & Mood Board",
    desc: "Share your vision, style and budget. We'll create a personalised mood board to establish the design direction for your home.",
  },
  {
    number: "02",
    title: "Site Measurements & Space Planning",
    desc: "Our team visits your home to take precise measurements and plan a layout that maximises your space and functionality.",
  },
  {
    number: "03",
    title: "3D Design & Itemised Quotation",
    desc: "Visualise your home through 3D renders, supported by a detailed quotation outlining the design, scope, materials and inclusions.",
  },
  {
    number: "04",
    title: "Finalise Materials, Finishes & Drawings",
    desc: "We'll finalise the design, select materials and finishes, and prepare detailed technical drawings for your approval.",
  },
  {
    number: "05",
    title: "Production & Execution",
    desc: "Your interiors are crafted and executed by our expert team, with regular updates at every stage of the project.",
  },
  {
    number: "06",
    title: "Installation & Handover",
    desc: "We run 150+ quality checks before handing over your home, backed by a 10-year warranty on modular woodwork.",
  },
];

const highlights = [
  "150+ Quality Check Points",
  "10-Year Modular Woodwork Warranty",
  "Clear Project Timelines",
  "Dedicated Project Support",
];

export default function OurProcess() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] text-brand-green uppercase tracking-[0.3em] font-medium mb-4">Our Process</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-4">
            From First Discussion to Handover
          </h2>
          <p className="font-sans text-zinc-500 font-light max-w-2xl mx-auto">
            A seamless, transparent journey to bring your dream home to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-zinc-50 rounded-xl p-6 md:p-8 border border-zinc-100 hover:border-brand-green/20 transition-all"
            >
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-green text-white text-xs font-bold mb-4">
                {step.number}
              </div>
              <h3 className="font-serif text-lg font-light text-brand-black mb-3">{step.title}</h3>
              <p className="font-sans text-sm text-zinc-500 leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-3 bg-brand-offwhite rounded-lg p-4">
              <div className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
              <span className="font-sans text-xs text-brand-black font-medium">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
