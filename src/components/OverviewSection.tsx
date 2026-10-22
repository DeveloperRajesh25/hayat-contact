"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-stretch gap-6 md:gap-12"
        >
          <div className="relative w-full aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden">
            <Image
              src="/gallery-images/1.JPG"
              alt="Hayat Interiors - About Us"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm sm:text-base text-brand-green uppercase tracking-[0.3em] font-semibold mb-3">About Us</p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-brand-black mb-5 leading-tight">
              Thoughtfully Designed Homes. Made for Everyday Living.
            </h2>
            <p className="font-sans text-zinc-600 font-light leading-relaxed mb-3 text-sm">
              Hayat Interiors is an end-to-end interior design company in Bangalore, creating personalised homes that balance style, comfort and functionality. From contemporary luxury to minimalist, Scandinavian and Japandi-inspired spaces, every design is tailored to your lifestyle, preferences and budget.
            </p>
            <p className="font-sans text-zinc-600 font-light leading-relaxed text-sm mb-6">
              From modular kitchens and custom wardrobes to complete home interiors, we manage every stage under one accountable team, with a clear, itemised quotation so you know exactly what you&apos;re getting.
            </p>
            <div>
              <a
                href="#consultation-form"
                className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-3 font-sans text-xs uppercase tracking-[0.15em] font-bold rounded-lg hover:bg-brand-black transition-colors"
              >
                Book Free Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
