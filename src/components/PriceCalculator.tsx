"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const packagePrices: Record<string, Record<string, number>> = {
  "2BHK": { Basic: 700000, Standard: 950000, Premium: 1450000, Luxury: 2100000 },
  "3BHK": { Basic: 950000, Standard: 1350000, Premium: 1950000, Luxury: 2800000 },
  "4BHK": { Basic: 1300000, Standard: 1850000, Premium: 2750000, Luxury: 3900000 },
  "Villa": { Basic: 1800000, Standard: 2600000, Premium: 3900000, Luxury: 5800000 },
};

export default function PriceCalculator() {
  const [propertyType, setPropertyType] = useState("2BHK");
  const [finishLevel, setFinishLevel] = useState("Standard");

  const total = useMemo(() => {
    return packagePrices[propertyType]?.[finishLevel] || 0;
  }, [propertyType, finishLevel]);

  const formatPrice = (num: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(num);

  return (
    <section className="py-24 bg-[#F5F0EB] border-y border-zinc-200/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-[10px] text-brand-gold uppercase tracking-[0.3em] font-medium mb-4">Investment Explorer</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-4">Full Home Investment Estimate</h2>
          <p className="font-sans font-light text-zinc-500">Get an instant rough estimate for your end-to-end interior project</p>
        </div>

        <div className="space-y-16">
          {/* Step 1: Property Type */}
          <div className="space-y-8">
            <h3 className="text-center text-[10px] uppercase tracking-[0.2em] text-zinc-400">Step 1: Property Type</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {Object.keys(packagePrices).map((type) => (
                <button
                  key={type}
                  onClick={() => setPropertyType(type)}
                  className={`p-4 sm:p-5 border transition-all duration-300 text-center ${
                    propertyType === type 
                    ? "border-brand-gold bg-white shadow-lg shadow-brand-gold/5" 
                    : "border-zinc-200 bg-white/50 hover:border-brand-gold/30 hover:bg-white"
                  }`}
                >
                  <span className={`block text-xs sm:text-sm tracking-widest uppercase font-medium ${propertyType === type ? "text-brand-gold" : "text-zinc-500"}`}>{type}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Finish Level */}
          <div className="space-y-8">
            <h3 className="text-center text-[10px] uppercase tracking-[0.2em] text-zinc-400">Step 2: Finish Level</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {["Basic", "Standard", "Premium", "Luxury"].map((level) => (
                <button
                  key={level}
                  onClick={() => setFinishLevel(level)}
                  className={`p-4 sm:p-5 border transition-all duration-300 text-center ${
                    finishLevel === level 
                    ? "border-brand-gold bg-white shadow-lg shadow-brand-gold/5" 
                    : "border-zinc-200 bg-white/50 hover:border-brand-gold/30 hover:bg-white"
                  }`}
                >
                  <span className={`block text-xs sm:text-sm tracking-widest uppercase font-medium ${finishLevel === level ? "text-brand-gold" : "text-zinc-500"}`}>{level}</span>
                  <span className={`text-[9px] block mt-1 uppercase tracking-[0.2em] ${finishLevel === level ? "text-brand-gold/60" : "text-zinc-400"}`}>
                    {level === 'Basic' ? 'Economy' : level === 'Standard' ? 'Popular' : level === 'Premium' ? 'High-End' : 'Bespoke'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 border border-brand-gold/20 bg-white p-12 text-center relative overflow-hidden shadow-2xl shadow-black/[0.02]"
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]">
               <span className="text-[20rem] font-serif text-brand-gold leading-none">₹</span>
             </div>
             <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-6 font-medium">Estimated Package Range</p>
                <div className="font-serif text-4xl sm:text-7xl font-light text-brand-gold mb-10 tracking-tight">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={total}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="inline-block"
                    >
                      {formatPrice(total * 0.9)} – {formatPrice(total * 1.1)}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <a 
                  href="#consultation-form"
                  className="group relative inline-flex items-center justify-center overflow-hidden bg-brand-gold px-12 py-5 font-sans text-[10px] font-semibold tracking-[0.2em] text-brand-black transition-all"
                >
                  <span className="relative z-10 transition-transform group-hover:-translate-y-0.5 group-hover:text-white">Get Detailed Quotation</span>
                  <div className="absolute inset-0 z-0 h-full w-0 bg-brand-black transition-all duration-500 ease-out group-hover:w-full"></div>
                </a>
                <p className="mt-8 text-[10px] text-zinc-400 max-w-md mx-auto uppercase tracking-widest font-light">
                  *Package includes design, materials, and end-to-end execution. GST extra.
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
