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
      {/* Slideshow (Clickable for lead gen) */}
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
            {/* subtle vignettes for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/40 pointer-events-none z-10" />
          </motion.div>
        </AnimatePresence>
      </a>

      {/* Content Layer */}
      <div className="relative z-20 flex h-full items-center justify-center px-4 pt-24 text-center sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="w-full max-w-5xl flex flex-col items-center"
        >
        

          <h1 className="mb-8 font-serif text-5xl font-light leading-[1.1] text-white drop-shadow-2xl md:text-8xl lg:text-9xl">
            The Art of <br />
            <span className="italic text-brand-green text-3xl md:text-5xl lg:text-6xl block mt-4">Stunning Interior Design</span>
          </h1>

          <p className="mb-12 max-w-2xl text-sm font-light leading-relaxed text-white/80 sm:text-lg">
            Bespoke interior design solutions for premium homes in Bengaluru.
          </p>
          
          <div className="w-full max-w-xl flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#consultation-form"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-3 border border-brand-green bg-brand-green px-12 py-5 transition-all duration-300 text-white"
            >
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em]">Request Callback</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#consultation-form"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-md px-12 py-5 transition-all duration-300 text-white hover:border-brand-green"
            >
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em]">Enquire Now</span>
              <div className="absolute inset-0 z-[-1] h-full w-0 bg-brand-green transition-all duration-500 ease-out group-hover:w-full" />
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
              index === currentSlide ? "w-10 bg-brand-green" : "w-4 bg-white/20 hover:bg-white/40"
            }`}
             aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Location / Meta */}
      <div className="absolute bottom-10 right-10 z-30 hidden items-center gap-3 font-sans text-[9px] font-bold tracking-[0.2em] text-white/60 uppercase lg:flex">
        <span>EST. 2018</span>
        <div className="h-1 w-1 rounded-full bg-brand-green" />
        <span>Bespoke Solutions</span>
      </div>
    </section>
  );
}
