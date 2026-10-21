"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Hettich", logo: "/brands-trusted-partners/hettich.svg" },
  { name: "Century Ply", logo: "/brands-trusted-partners/Century_Plyboards.svg.png" },
  { name: "Greenply", logo: "/brands-trusted-partners/Greenply_logo.svg.png" },
  { name: "Asian Paints", logo: "/brands-trusted-partners/asianpaints.png" },
  { name: "Hafele", logo: "/brands-trusted-partners/hafele.png" },
  { name: "Sirca", logo: "/brands-trusted-partners/sirca.svg" },
  { name: "VAWE", logo: "/brands-trusted-partners/vawe.svg" },
  { name: "Kridha", logo: "/brands-trusted-partners/kridha.jpg" },
  { name: "Merino", logo: "/brands-trusted-partners/merino.png" },
  { name: "Philips", logo: "/brands-trusted-partners/philips.png" },
  { name: "Saint-Gobain", logo: "/brands-trusted-partners/Saint-Gobain.png" },
];

export default function TrustedPartners() {
  return (
    <section className="py-10 md:py-14 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-medium">Our Trusted Partners</p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 md:w-24 bg-gradient-to-r from-zinc-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 md:w-24 bg-gradient-to-l from-zinc-50 to-transparent" />
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
        >
          {[...partners, ...partners].map((p, i) => (
            <div key={i} className="relative mx-5 md:mx-8 h-10 w-24 md:h-12 md:w-32 shrink-0 opacity-70">
              <Image src={p.logo} alt={p.name} fill sizes="128px" className="object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
