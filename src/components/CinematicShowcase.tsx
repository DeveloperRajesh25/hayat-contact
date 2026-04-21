"use client";

import { motion } from "framer-motion";

export default function CinematicShowcase() {
  return (
    <section className="py-12 md:py-24 bg-zinc-50 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] text-brand-green uppercase tracking-[0.3em] font-medium mb-4"
            >
              Crafting Excellence
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl font-light text-white mb-6 leading-tight"
            >
              Experience The Hayat <br />
              <span className="italic text-brand-green">Transformation</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 font-sans text-sm sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed mb-8"
            >
              From raw blueprints to luxury living spaces. Watch our design philosophy come to life in this cinematic journey, captured in its original perspective.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center lg:justify-start"
            >
               <div className="h-[1px] w-24 bg-brand-green/30" />
            </motion.div>
          </div>

          {/* Vertical Video Showcase */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group aspect-[9/16] w-full max-w-[320px] sm:max-w-[380px] rounded-2xl overflow-hidden shadow-2xl shadow-brand-green/5 border border-zinc-200"
            >
              {/* Optimized Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
                className="w-full h-full object-cover"
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              
              {/* Decorative Corner Accents (Adjusted for vertical) */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-brand-green/30 rounded-tl-lg pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-brand-green/30 rounded-br-lg pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
