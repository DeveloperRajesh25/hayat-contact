"use client";

import { motion } from "framer-motion";

export default function OfferStrip() {
  return (
    <div className="w-full bg-[#fdfaf6] py-3 border-y border-[#f5f0eb]">
      <div className="container mx-auto px-4 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 font-sans text-[9px] font-medium text-brand-green uppercase tracking-[0.2em] sm:text-[10px]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-green/40 animate-pulse"></span>
          <span>
            Complimentary Design Mood Board + 3D Visualization Worth ₹15,000 — Limited to First 10 Consultations
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-green/40 animate-pulse"></span>
        </motion.p>
      </div>
    </div>
  );
}
