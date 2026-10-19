"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "End-to-End Interior Solutions",
    desc: "One accountable team guiding your project from design to handover.",
  },
  {
    number: "02",
    title: "Transparent Pricing",
    desc: "Detailed, itemised quotations with clear inclusions and exclusions.",
  },
  {
    number: "03",
    title: "10-Year Woodwork Warranty",
    desc: "Added peace of mind with a 10-year warranty on modular woodwork.",
  },
  {
    number: "04",
    title: "Clear Project Timelines",
    desc: "Project-specific schedules agreed upon before execution begins.",
  },
  {
    number: "05",
    title: "150+ Quality Check Points",
    desc: "We inspect finish, fit & functionality through 150+ quality check points before handing over your home.",
  },
];

const stats = [
  { value: "5000+", label: "Happy Homes" },
  { value: "34", label: "Days Delivery" },
  { value: "150+", label: "Quality Checks" },
  { value: "0%", label: "EMI Options" },
  { value: "10", label: "Years Warranty" },
  { value: "3", label: "Experience Centre" },
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="why-choose">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] text-brand-green uppercase tracking-[0.3em] font-medium mb-4">Hayat Interiors</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-4">Why Choose Hayat Interiors?</h2>
          <p className="font-sans text-zinc-500 font-light max-w-2xl mx-auto">
            Thoughtful design. Transparent process. Lasting quality. A better home, without the stress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 md:mb-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold">
                {f.number}
              </div>
              <h3 className="font-serif text-lg font-light text-brand-black">{f.title}</h3>
              <p className="font-sans text-sm text-zinc-500 leading-relaxed font-light">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-offwhite rounded-xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/3 text-center md:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-brand-black mb-2">
                Why We&apos;re <span className="text-brand-green">Different</span>
              </h3>
              <p className="font-sans text-sm text-zinc-500 font-light">
                Numbers that showcase credibility, experience, and success
              </p>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-6 md:gap-8">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif text-2xl sm:text-4xl font-light text-brand-black">{s.value}</div>
                  <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
