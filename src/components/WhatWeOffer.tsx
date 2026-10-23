"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CookingPot,
  DoorClosed,
  Utensils,
  Tv,
  Laptop,
  Layers,
  Lightbulb,
  Paintbrush,
  Bath,
  Flower2,
  DoorOpen,
  BedDouble,
  type LucideIcon,
} from "lucide-react";

const services: { name: string; image: string; Icon: LucideIcon }[] = [
  { name: "Modular Kitchens", image: "/what-we-offer/modular kitchen.jpeg", Icon: CookingPot },
  { name: "Wardrobes & Storage", image: "/what-we-offer/Wardrobes & Storage.jpg", Icon: DoorClosed },
  { name: "Crockery Units", image: "/what-we-offer/Crockery Units.jpg", Icon: Utensils },
  { name: "Living & TV Units", image: "/what-we-offer/Living & TV Units.jpeg", Icon: Tv },
  { name: "Study Areas", image: "/what-we-offer/Study Areas.jpg", Icon: Laptop },
  { name: "False Ceilings", image: "/what-we-offer/False Ceilings.jpg", Icon: Layers },
  { name: "Lighting", image: "/what-we-offer/Lighting.jpeg", Icon: Lightbulb },
  { name: "Wallpapers & Wall Finishes", image: "/what-we-offer/Wallpapers & Wall Finishes.jpg", Icon: Paintbrush },
  { name: "Bathrooms", image: "/what-we-offer/Bathrooms.jpeg", Icon: Bath },
  { name: "Puja Units", image: "/what-we-offer/Puja Units.jpg", Icon: Flower2 },
  { name: "Foyer & Entrance", image: "/what-we-offer/Foyer & Entrance.jpeg", Icon: DoorOpen },
  { name: "Kids' Bedrooms", image: "/what-we-offer/Kids' Bedrooms.jpeg", Icon: BedDouble },
];

export default function WhatWeOffer() {
  return (
    <section className="py-10 md:py-14 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-[10px] text-brand-green uppercase tracking-[0.2em] pl-[0.2em] font-medium mb-3">Hayat Interiors</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-3">What We Offer</h2>
          <p className="font-sans text-zinc-500 font-light max-w-xl mx-auto text-sm sm:text-base">
            End-to-end home interior solutions for modern homes in Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-4 mb-6 md:mb-8">
          {services.map(({ name, image, Icon }, i) => (
            <motion.a
              key={name}
              href="#consultation-form"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.05, duration: 0.4 }}
              className="group flex h-24 sm:h-28 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
            >
              <div className="relative w-[42%] shrink-0">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 1024px) 22vw, 12vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-1.5 px-1.5 text-center">
                <Icon className="h-5 w-5 text-brand-green" strokeWidth={1.5} />
                <h3 className="font-sans text-[11px] sm:text-xs font-medium leading-tight text-brand-black">{name}</h3>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#consultation-form"
            className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-3 font-sans text-xs uppercase tracking-[0.15em] font-bold rounded-lg hover:bg-brand-black transition-colors"
          >
            Book Your Free Design Consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
