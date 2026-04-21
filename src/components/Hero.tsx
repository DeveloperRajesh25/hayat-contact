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
      {/* Slideshow */}
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
          {/* Very subtle bottom vignette for legibility of indicators, but keeping images "fully visible" as requested */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Content Layer */}
      <div className="relative z-20 flex h-full items-center justify-center px-4 pt-20 text-center sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="max-w-5xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6 inline-block text-[10px] font-bold tracking-[0.4em] text-brand-gold uppercase sm:text-xs drop-shadow-sm"
          >
            Hayat Interiors • Bengaluru
          </motion.span>
          <h1 className="mb-10 font-serif text-5xl font-light leading-[1.1] text-white drop-shadow-2xl md:text-8xl lg:text-9xl">
            Contemporary <br />
            <span className="italic text-white/90">Luxury</span>
          </h1>
          
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            <a
              href="#consultation-form"
              className="group relative overflow-hidden border border-white/40 bg-white/5 backdrop-blur-[2px] px-14 py-5 font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:border-brand-gold"
            >
              <span className="relative z-10 transition-colors group-hover:text-brand-black">Enquire Now</span>
              <div className="absolute inset-0 z-0 h-full w-0 bg-brand-gold transition-all duration-300 ease-out group-hover:w-full"></div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Minimal Navigation Bar */}
      <div className="absolute bottom-10 left-10 z-30 flex items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-700 ${
              index === currentSlide ? "w-10 bg-brand-gold" : "w-4 bg-white/20 hover:bg-white/40"
            }`}
             aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Location / Meta */}
      <div className="absolute bottom-10 right-10 z-30 hidden items-center gap-3 font-sans text-[9px] font-bold tracking-[0.2em] text-white/60 uppercase lg:flex">
        <span>EST. 2018</span>
        <div className="h-1 w-1 rounded-full bg-brand-gold" />
        <span>Bespoke Solutions</span>
      </div>
    </section>
  );
}
