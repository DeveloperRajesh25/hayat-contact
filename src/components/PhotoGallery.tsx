"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/gallery-images/1.JPG", alt: "Modern architectural project 1", className: "md:col-span-2 md:row-span-2 col-span-2 row-span-2" },
  { src: "/gallery-images/2.jpg", alt: "Modern architectural project 2", className: "col-span-1 row-span-1" },
  { src: "/gallery-images/3.jpg", alt: "Modern architectural project 3", className: "col-span-1 row-span-1" },
  { src: "/gallery-images/4.JPG", alt: "Modern architectural project 4", className: "md:col-span-1 md:row-span-2 col-span-2 row-span-1" },
  { src: "/gallery-images/5.JPG", alt: "Modern architectural project 5", className: "col-span-1 row-span-1" },
  { src: "/gallery-images/7.jpg", alt: "Modern architectural project 6", className: "md:col-span-2 md:row-span-1 col-span-2 row-span-1" },
  { src: "/gallery-images/8.jpg", alt: "Modern architectural project 7", className: "col-span-1 row-span-1" },
  { src: "/gallery-images/9.jpg", alt: "Modern architectural project 8", className: "col-span-1 row-span-1" },
  { src: "/gallery-images/10.jpg", alt: "Modern architectural project 9", className: "md:col-span-2 md:row-span-2 col-span-2 row-span-2" },
  { src: "/gallery-images/11.png", alt: "Modern architectural project 10", className: "col-span-1 row-span-1" },
  { src: "/gallery-images/12.JPG", alt: "Modern architectural project 11", className: "col-span-1 row-span-1" },
  { src: "/gallery-images/14.jpg", alt: "Modern architectural project 12", className: "md:col-span-1 md:row-span-2 col-span-1 row-span-1" },
  { src: "/gallery-images/15.JPG", alt: "Modern architectural project 13", className: "md:col-span-2 md:row-span-1 col-span-1 row-span-1" },
  { src: "/gallery-images/17.jpg", alt: "Modern architectural project 14", className: "col-span-1 row-span-1" },
  { src: "/gallery-images/18.jpeg", alt: "Modern architectural project 15", className: "col-span-1 row-span-1" },
];

export default function PhotoGallery() {
  return (
    <section className="py-20 bg-white" id="gallery">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[200px] md:auto-rows-[300px] grid-flow-dense px-2 md:px-0">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index % 5) * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group bg-zinc-100 rounded-xl md:rounded-2xl ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <p className="text-white text-xs font-medium tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Hayat Interiors
                </p>
                <h3 className="text-white text-lg md:text-2xl font-serif mt-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  Featured Space
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
