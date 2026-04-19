"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1920&q=80",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1920&q=80",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-white">
      {/* Slideshow with Zoom Effect */}
      <AnimatePresence initial={false}>
        <motion.div
           key={currentSlide}
           initial={{ opacity: 0, scale: 1.05 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide]}
            alt={`Luxury Interior ${currentSlide + 1}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          <span className="mb-6 inline-block font-sans text-[11px] font-bold tracking-[0.3em] text-brand-gold uppercase sm:text-xs drop-shadow-sm">
            Bangalore's Most Trusted Interior Studio
          </span>
          <h1 className="mb-6 font-serif text-4xl font-normal leading-tight text-brand-black md:text-6xl lg:text-7xl">
            Contemporary Luxury <br className="hidden md:block" />
            <span className="italic text-brand-black/90">Heritage Craftsmanship</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl font-sans text-sm font-light leading-relaxed text-zinc-900 sm:text-lg">
            Experience bespoke interior design where modern minimalism meets timeless Indian artistry. Near Manyata Tech Park, Bengaluru.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row pb-12">
            <a
              href="#consultation-form"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden bg-brand-gold px-10 py-5 font-sans text-xs font-semibold tracking-widest text-brand-black transition-all sm:w-auto"
            >
              <span className="relative z-10 uppercase transition-transform group-hover:-translate-y-0.5 group-hover:text-white">Start Your Project</span>
              <div className="absolute inset-0 z-0 h-full w-0 bg-brand-black transition-all duration-300 ease-out group-hover:w-full"></div>
            </a>
            <a
              href="https://wa.me/919886276722"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center border border-brand-black/20 bg-white/40 backdrop-blur-sm px-10 py-5 font-sans text-xs font-medium uppercase tracking-widest text-brand-black transition-all hover:bg-white/60 sm:w-auto"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 ${
              index === currentSlide ? "w-10 bg-brand-gold" : "w-2 bg-black/20"
            }`}
             aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
