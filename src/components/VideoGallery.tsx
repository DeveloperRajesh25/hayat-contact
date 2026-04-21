"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    title: "Luxury Home Transformation",
    category: "Full Home",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80",
    title: "Modern Minimalist Kitchen",
    category: "Kitchen",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1920&q=80",
    title: "Heritage Living Room",
    category: "Living Room",
  },
];

export default function VideoGallery() {
  return (
    <section className="py-8 md:py-24 bg-white border-y border-zinc-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-[10px] text-brand-green uppercase tracking-[0.3em] font-medium mb-4">Portfolio in Motion</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-4">See Our Work In Action</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <motion.a 
              key={i} 
              href="#consultation-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group block bg-white border border-zinc-100 transition-all duration-300 hover:border-brand-green/30 hover:shadow-xl hover:shadow-black/[0.05] relative overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={v.thumbnail}
                  alt={v.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Play Button Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                    <svg className="w-5 h-5 text-brand-green ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[10px] text-brand-green uppercase tracking-[0.2em] font-bold mb-2">{v.category}</p>
                <h3 className="font-serif text-lg text-brand-black mb-1 leading-tight group-hover:text-brand-green transition-colors">{v.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a 
            href="#consultation-form"
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
