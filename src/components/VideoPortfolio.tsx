"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  { id: "cslJ9ba7g_Q", title: "Home Interior Tour 1" },
  { id: "wldmqdKIObw", title: "Home Interior Tour 2" },
  { id: "QnrlSgLXHw8", title: "Home Interior Tour 3" },
  { id: "9TSTbZWbQuM", title: "Home Interior Tour 4" },
  { id: "buc1W0X8Aso", title: "Home Interior Tour 5" },
];

const duplicated = [...videos, ...videos, ...videos];

export default function VideoPortfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-10 md:py-14 bg-zinc-50 overflow-hidden" id="portfolio">
      <div className="container mx-auto px-4 max-w-7xl mb-8">
        <div className="text-center">
          <p className="text-sm sm:text-base text-brand-green uppercase tracking-[0.2em] pl-[0.2em] font-semibold mb-3">Portfolio</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-4">See How Thoughtful Design Comes to Life</h2>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-zinc-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-zinc-50 to-transparent z-10" />

        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {duplicated.map((v, i) => (
            <div
              key={i}
              className="shrink-0 mr-6 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[32vw]"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(v.id)}
                className="relative block w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black group/vid"
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/vid:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-3xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
                className="absolute -top-10 right-0 text-white text-sm uppercase tracking-[0.2em] hover:opacity-70"
              >
                Close
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
