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
    <section className="py-16 md:py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl mb-12">
        <div className="text-center">
          <p className="text-sm sm:text-base text-brand-green uppercase tracking-[0.3em] pl-[0.3em] font-semibold mb-3">Portfolio</p>
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
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {duplicated.map((v, i) => (
            <div
              key={i}
              className="shrink-0 mr-6 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[32vw]"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <a
          href="#consultation-form"
          className="inline-flex items-center gap-2 text-brand-green font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:underline"
        >
          Book Your Free Design Consultation →
        </a>
      </div>
    </section>
  );
}
