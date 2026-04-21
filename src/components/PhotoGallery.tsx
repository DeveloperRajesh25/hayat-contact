"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/gallery-images/1.JPG", alt: "Modern architectural project 1" },
  { src: "/gallery-images/2.jpg", alt: "Modern architectural project 2" },
  { src: "/gallery-images/3.jpg", alt: "Modern architectural project 3" },
  { src: "/gallery-images/4.JPG", alt: "Modern architectural project 4" },
  { src: "/gallery-images/5.JPG", alt: "Modern architectural project 5" },
  { src: "/gallery-images/7.jpg", alt: "Modern architectural project 6" },
  { src: "/gallery-images/8.jpg", alt: "Modern architectural project 7" },
  { src: "/gallery-images/9.jpg", alt: "Modern architectural project 8" },
  { src: "/gallery-images/10.jpg", alt: "Modern architectural project 9" },
  { src: "/gallery-images/11.png", alt: "Modern architectural project 10" },
  { src: "/gallery-images/12.JPG", alt: "Modern architectural project 11" },
  { src: "/gallery-images/14.jpg", alt: "Modern architectural project 12" },
  { src: "/gallery-images/15.JPG", alt: "Modern architectural project 13" },
  { src: "/gallery-images/17.jpg", alt: "Modern architectural project 14" },
  { src: "/gallery-images/18.jpeg", alt: "Modern architectural project 15" },
];

export default function PhotoGallery() {
  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-semibold tracking-wider uppercase text-sm"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-4xl md:text-5xl font-serif text-brand-black"
          >
            Visual Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-zinc-600 max-w-2xl mx-auto"
          >
            A glimpse into our meticulously crafted spaces and architectural masterpieces.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-zinc-100 break-inside-avoid group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1200}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm font-medium tracking-wide">
                  View Project
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
