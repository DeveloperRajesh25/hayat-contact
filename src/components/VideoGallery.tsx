"use client";

import { motion } from "framer-motion";

const videos = [
  "dQw4w9WgXcQ",
  "dQw4w9WgXcQ",
  "dQw4w9WgXcQ",
];

export default function VideoGallery() {
  return (
    <section className="py-8 md:py-24 bg-white border-y border-zinc-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-[10px] text-brand-green uppercase tracking-[0.3em] font-medium mb-4">Portfolio in Motion</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-4">See Our Work In Action</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((id, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden bg-[#FAFAFA] aspect-video border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-black/[0.04] transition-all"
            >
              <iframe
                className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                src={`https://www.youtube.com/embed/${id}`}
                title={`Transformation Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] text-zinc-400 font-sans tracking-[0.2em] uppercase hover:text-brand-green transition-colors pb-1 border-b border-transparent hover:border-brand-green"
          >
            Explore Full Video Gallery →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
