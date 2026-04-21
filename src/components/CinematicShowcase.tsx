"use client";

import { motion } from "framer-motion";

export default function CinematicShowcase() {
  return (
    <section className="py-12 md:py-24 bg-zinc-50 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.a 
            href="#consultation-form"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 cursor-pointer group order-1 lg:order-1"
          >
            <div>
              <p className="text-[10px] text-brand-green uppercase tracking-[0.3em] font-medium mb-4">The Hayat Aesthetic</p>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-6 leading-tight">Crafting Timeless <br/><span className="italic text-zinc-400">Living Spaces</span></h2>
              <p className="font-sans text-zinc-500 font-light leading-relaxed max-w-lg">
                Our design philosophy merges contemporary minimalism with rich heritage elements, creating spaces that are both luxurious and deeply personal.
              </p>
            </div>

            <div className="pt-4">
              <span className="group-hover:text-brand-green transition-colors text-[10px] uppercase tracking-[0.2em] font-bold border-b border-brand-green/30 pb-2">View Portfolio Projects</span>
            </div>
          </motion.a>

          {/* Vertical Video Showcase - Clickable */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <motion.a 
              href="#consultation-form"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group block aspect-[9/16] w-full max-w-[320px] sm:max-w-[380px] rounded-2xl overflow-hidden shadow-2xl shadow-brand-green/5 border border-zinc-200 cursor-pointer"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="bg-brand-green/90 text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm">Enquire Now</div>
              </div>
              
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-brand-green/30 rounded-tl-lg pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-brand-green/30 rounded-br-lg pointer-events-none" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
