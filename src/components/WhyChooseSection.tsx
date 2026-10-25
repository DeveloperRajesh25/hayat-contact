"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "End-to-End Interior Solutions",
    desc: "One accountable team from design to handover.",
    image: "/why-choose-us/end-to-end.jpeg",
  },
  {
    title: "Complimentary Mood Board & Site Visit",
    desc: "A personalised starting point for your dream home.",
    image: "/why-choose-us/mood-board-site-visit.jpeg",
  },
  {
    title: "Clear Project Timelines",
    desc: "Your home journey, thoughtfully planned from start to finish.",
    image: "/why-choose-us/clear-timelines.jpeg",
  },
  {
    title: "150+ Quality Check Points",
    desc: "Quality checks covering finish, fit and functionality before handover.",
    image: "/why-choose-us/quality-checks.jpeg",
  },
  {
    title: "10-Year Modular Woodwork Warranty",
    desc: "Long-term assurance on modular woodwork, subject to warranty terms.",
    image: "/why-choose-us/10-year-warranty.jpeg",
  },
  {
    title: "EMI Options Available",
    desc: "Flexible payment options for eligible customers.",
    image: "/why-choose-us/emi-options.jpeg",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-10 md:py-14 bg-white" id="why-choose">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] text-brand-green uppercase tracking-[0.2em] font-medium mb-4"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-4"
          >
            The Hayat Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-zinc-500 font-light max-w-2xl mx-auto text-sm sm:text-base"
          >
            Thoughtful design. Transparent process. Lasting quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-2xl border border-zinc-100 bg-zinc-50/50 p-4 md:p-5 text-center hover:shadow-lg hover:border-zinc-200 transition-all duration-300"
            >
              <div className="relative mx-auto mb-2.5 h-16 w-16 md:h-20 md:w-20">
                <Image src={f.image} alt={f.title} fill sizes="80px" className="object-contain" />
              </div>
              <h3 className="font-serif text-base md:text-lg font-normal text-brand-black mb-1.5">{f.title}</h3>
              <p className="font-sans text-sm md:text-base text-zinc-500 leading-relaxed font-light">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
