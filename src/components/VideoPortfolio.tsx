"use client";

import { motion } from "framer-motion";

const videos = [
  { id: "cslJ9ba7g_Q", title: "Home Interior Tour 1" },
  { id: "wldmqdKIObw", title: "Home Interior Tour 2" },
  { id: "QnrlSgLXHw8", title: "Home Interior Tour 3" },
  { id: "9TSTbZWbQuM", title: "Home Interior Tour 4" },
  { id: "buc1W0X8Aso", title: "Home Interior Tour 5" },
];

const duplicated = [...videos, ...videos, ...videos];

export default function VideoPortfolio() {
  return (
    <section className="py-10 md:py-14 bg-zinc-50 overflow-hidden" id="portfolio">
      <div className="container mx-auto px-4 max-w-7xl mb-8">
        <div className="text-center">
          <p className="text-sm sm:text-base text-brand-green uppercase tracking-[0.2em] pl-[0.2em] font-semibold mb-3">Portfolio</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-4">See Our Work In Action</h2>
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
              <a
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video rounded-xl overflow-hidden shadow-lg bg-black group/vid"
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
              </a>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
