"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-brand-black">
      <a href="#consultation-form" className="absolute inset-0 z-10 cursor-pointer overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
             key={currentSlide}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 2, ease: "easeInOut" }}
             className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide]}
              alt={`Luxury Interior ${currentSlide + 1}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 pointer-events-none z-10" />
          </motion.div>
        </AnimatePresence>
      </a>

      <div className="relative z-20 flex h-full items-end justify-center px-4 pb-24 sm:pb-32 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="w-full max-w-4xl flex flex-col items-center"
        >
          <h1 className="mb-4 font-serif text-3xl font-light leading-[1.15] text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
            Premium Home Interior<br />Designers in Bangalore
          </h1>

          <p className="mb-8 max-w-2xl text-sm font-light leading-relaxed text-white/80 sm:text-lg">
            Personalised interiors for apartments and villas, designed and delivered from concept to handover by one accountable team.
          </p>

          <div className="w-full max-w-lg flex flex-col items-center gap-3">
            <p className="text-white font-semibold text-sm sm:text-base">Book Your Free Design Consultation</p>
            <p className="text-white/60 text-xs sm:text-sm">Includes a personalised mood board for your home.</p>
            <a
              href="#consultation-form"
              className="group relative mt-2 flex items-center justify-center gap-3 bg-brand-green px-10 py-4 sm:px-14 sm:py-5 transition-all duration-300 text-white rounded-sm"
            >
              <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">Book My Consultation</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-6 z-30 flex items-center gap-3 sm:bottom-10 sm:left-10 sm:gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-700 ${
              index === currentSlide ? "w-10 bg-brand-green" : "w-4 bg-white/20 hover:bg-white/40"
            }`}
             aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
