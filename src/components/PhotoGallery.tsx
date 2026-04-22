"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/gallery-images/1.JPG", alt: "Luxury residence interior design" },
  { src: "/gallery-images/2.jpg", alt: "Modern living room concept" },
  { src: "/gallery-images/3.jpg", alt: "Premium kitchen design" },
  { src: "/gallery-images/4.JPG", alt: "Contemporary bedroom interior" },
  { src: "/gallery-images/5.JPG", alt: "Elegant dining area" },
  { src: "/gallery-images/6.JPG", alt: "Sophisticated lounge space" },
  { src: "/gallery-images/7.jpg", alt: "Minimalist workspace design" },
  { src: "/gallery-images/8.jpg", alt: "High-end bathroom finish" },
  { src: "/gallery-images/9.jpg", alt: "Curated decor details" },
  { src: "/gallery-images/10.jpg", alt: "Bespoke cabinetry project" },
  { src: "/gallery-images/11.png", alt: "Luxe lighting installation" },
  { src: "/gallery-images/12.JPG", alt: "Custom feature wall" },
  { src: "/gallery-images/13.JPG", alt: "Open-plan living design" },
  { src: "/gallery-images/14.jpg", alt: "Architectural lighting setup" },
  { src: "/gallery-images/15.JPG", alt: "Texture-rich interior layout" },
  { src: "/gallery-images/16.JPG", alt: "Modern stairwell architecture" },
  { src: "/gallery-images/17.jpg", alt: "Premium walk-in closet" },
  { src: "/gallery-images/18.jpeg", alt: "Cozy reading nook design" },
];

export default function PhotoGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden" id="gallery">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-semibold tracking-wider uppercase text-sm"
          >
            Visual Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-4xl md:text-5xl font-serif text-brand-black"
          >
            Design Masterpieces
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-zinc-600 max-w-2xl mx-auto"
          >
            A curated selection of our most innovative and inspiring architectural projects.
          </motion.p>
        </div>

        <div className="relative group px-4 md:px-0">
          {/* Navigation Buttons - Hidden on mobile, reveal on hover for desktop */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-xl text-brand-black hover:bg-brand-green hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center translate-x-[-10px] group-hover:translate-x-0"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-xl text-brand-black hover:bg-brand-green hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center translate-x-[10px] group-hover:translate-x-0"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-12 px-4 md:px-12 no-scrollbar select-none"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            }}
          >
            <style jsx global>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] aspect-[4/5] relative rounded-2xl md:rounded-3xl overflow-hidden group/item snap-center shadow-md bg-zinc-100"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index < 3}
                  quality={80}
                  className="object-cover transition-transform duration-1000 group-hover/item:scale-110"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 45vw"
                />


                
                {/* Hover Overlays */}
                <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
                  <motion.p 
                    className="text-white text-xs font-semibold tracking-[0.25em] uppercase"
                  >
                    Hayat Interiors
                  </motion.p>
                  <motion.h3 
                    className="text-white text-xl md:text-2xl font-serif mt-2"
                  >
                    {image.alt}
                  </motion.h3>
                </div>
              </div>
            ))}
          </div>

        </div>
        
        {/* Mobile Indicator */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium">Swipe to explore</span>
        </div>
      </div>
    </section>
  );
}

