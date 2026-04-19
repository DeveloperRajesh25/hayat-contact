"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-32 overflow-hidden bg-white border-t border-zinc-100">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-[0.03] grayscale">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Luxury Interior Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] text-brand-gold uppercase tracking-[0.3em] font-medium mb-4">Your Next Step</p>
          <h2 className="font-serif text-3xl sm:text-6xl font-light text-brand-black mb-6 leading-tight">Ready to Transform<br />Your Home?</h2>
          <p className="font-sans text-zinc-500 mb-12 font-light text-base max-w-lg mx-auto leading-relaxed">
            Book your complimentary consultation today. Our design team will reach out to you within 2 hours.
          </p>

          <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div 
              key="cta-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center gap-12"
            >
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="w-full flex flex-col md:flex-row gap-0 border border-zinc-100 p-1 bg-white shadow-xl shadow-black/[0.02]"
              >
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="flex-1 bg-transparent px-6 py-5 outline-none text-brand-black font-sans text-sm font-light border-b md:border-b-0 md:border-r border-zinc-100 placeholder:text-zinc-300"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 bg-transparent px-6 py-5 outline-none text-brand-black font-sans text-sm font-light placeholder:text-zinc-300"
                />
                <button
                  type="submit"
                  className="group relative flex items-center justify-center overflow-hidden bg-brand-gold px-12 py-5 font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-brand-black transition-all"
                >
                  <span className="relative z-10 transition-transform group-hover:-translate-y-0.5 group-hover:text-white">Book Now</span>
                  <div className="absolute inset-0 z-0 h-full w-0 bg-brand-black transition-all duration-500 ease-out group-hover:w-full"></div>
                </button>
              </form>

              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-4 w-full">
                  <div className="h-[1px] flex-1 bg-zinc-100"></div>
                  <p className="text-zinc-400 font-sans text-[10px] uppercase tracking-[0.2em]">Or Prefer Direct Chat</p>
                  <div className="h-[1px] flex-1 bg-zinc-100"></div>
                </div>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-zinc-200 bg-white text-zinc-600 font-sans text-[11px] uppercase tracking-widest px-8 py-4 hover:bg-zinc-50 hover:border-brand-gold transition-all"
                >
                  <span className="">WhatsApp Us</span>
                </a>
                <p className="text-[9px] text-zinc-400 font-sans uppercase tracking-[0.2em] mt-2">
                  Standard response time: within 2 hours (9AM–7PM)
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="cta-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-brand-gold/20 bg-brand-gold/5 p-16 text-center shadow-lg shadow-brand-gold/5"
            >
              <h3 className="text-3xl font-serif text-brand-black font-light mb-4 text-brand-gold">Request Received</h3>
              <p className="text-zinc-500 font-light text-sm max-w-sm mx-auto">We'll be in touch with you shortly to schedule your design consultation.</p>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
