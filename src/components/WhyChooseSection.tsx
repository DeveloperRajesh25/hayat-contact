"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "500+ Happy Homes",
    desc: "Over 500 homes across Bangalore designed and delivered with care.",
    image: "/why-choose-us/500-happy-homes.jpeg",
  },
  {
    title: "End-to-End Interior Solutions",
    desc: "One accountable team guiding your project from design to handover.",
    image: "/why-choose-us/end-to-end-design-mood-board.jpeg",
  },
  {
    title: "Transparent Pricing",
    desc: "Detailed, itemised quotations with clear inclusions and 0% EMI options.",
    image: "/why-choose-us/transparent-pricing-0-percent-emi.jpeg",
  },
  {
    title: "10-Year Woodwork Warranty",
    desc: "Added peace of mind with a 10-year warranty on modular woodwork.",
    image: "/why-choose-us/10-year-warranty.jpeg",
  },
  {
    title: "Clear Project Timelines",
    desc: "Project-specific schedules agreed upon before execution begins.",
    image: "/why-choose-us/clear-project-timelines.jpeg",
  },
  {
    title: "150+ Quality Check Points",
    desc: "We inspect finish, fit & functionality before handing over your home.",
    image: "/why-choose-us/150-quality-checks.jpeg",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-12 md:py-20 bg-white" id="why-choose">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-3">Why Choose Hayat Interiors?</h2>
          <p className="font-sans text-zinc-500 font-light max-w-2xl mx-auto text-sm sm:text-base">
            Thoughtful design. Transparent process. Lasting quality. A better home, without the stress.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="rounded-2xl border border-zinc-100 bg-brand-offwhite/50 p-4 md:p-6 text-center"
            >
              <div className="relative mx-auto mb-3 aspect-square w-3/4 max-w-[200px]">
                <Image src={f.image} alt={f.title} fill sizes="200px" className="object-contain" />
              </div>
              <h3 className="font-serif text-base md:text-lg font-normal text-brand-black mb-1">{f.title}</h3>
              <p className="font-sans text-xs md:text-sm text-zinc-500 leading-relaxed font-light">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
