"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BookingForm from "@/components/BookingForm";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Mobile layout: image on top with heading overlaid, clean white form below */}
      <div className="md:hidden">
        <div className="relative w-full h-[28rem] sm:h-[32rem]">
          <Image
            src="/hero-banner.jpg"
            alt="Premium home interior design in Bangalore by Hayat Interiors"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-x-0 bottom-0 px-4 pb-8"
          >
            <h1 className="font-serif text-3xl font-normal leading-[1.15] text-zinc-100 sm:text-4xl">
              Premium Home
              <br />
              Interior Designers
              <br />
              in <span className="text-[#6ee7b7]">Bangalore</span>
            </h1>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              Personalised interiors for apartments and villas, designed and delivered from concept to handover by one accountable team.
            </p>
          </motion.div>
        </div>

        <div className="bg-white px-4 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white border border-zinc-100 shadow-xl">
              <div className="p-6 sm:p-8">
                <BookingForm theme="light" source="Landing Page Hero Form" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop layout: image as background behind side-by-side content */}
      <div className="relative hidden w-full min-h-screen items-center md:flex">
        <Image
          src="/hero-banner.jpg"
          alt="Premium home interior design in Bangalore by Hayat Interiors"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-row items-center justify-between gap-12 px-6 py-24 lg:px-8">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-xl"
          >
            <h1 className="font-serif text-4xl font-normal leading-[1.15] text-zinc-100 lg:text-5xl xl:text-6xl">
              Premium Home
              <br />
              Interior Designers
              <br />
              in <span className="text-[#6ee7b7]">Bangalore</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
              Personalised interiors for apartments and villas, designed and delivered from concept to handover by one accountable team.
            </p>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md"
          >
            <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="p-6 sm:p-8">
                <BookingForm theme="dark" source="Landing Page Hero Form" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
