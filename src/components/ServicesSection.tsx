"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "✦",
    name: "Full Home Interior",
    desc: "Premium, end-to-end home transformation from concept to completion with expert site supervision.",
    price: "₹7 Lakhs",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center max-w-7xl">
        <div className="mb-12 md:mb-20">
          <p className="text-[10px] text-brand-green uppercase tracking-[0.3em] font-medium mb-4">Our Expertise</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-brand-black mb-4">Interior Design Services</h2>
          <p className="font-sans text-zinc-500 font-light max-w-xl mx-auto">Premium quality, bespoke designs, and transparent pricing tailored to your unique requirements.</p>
        </div>

        <div className="flex justify-center mb-16">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-[#FAFAFA] p-10 border border-zinc-100 transition-all duration-300 hover:border-brand-green/30 text-left hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.02] relative overflow-hidden max-w-md w-full"
            >
              <div className="absolute top-0 right-0 p-8 text-4xl text-zinc-100 font-serif group-hover:text-brand-green/5 transition-colors">
                 0{i + 1}
              </div>
              <div className="text-brand-green text-lg mb-8">{s.icon}</div>
              <h3 className="font-serif text-2xl font-light text-brand-black mb-3">{s.name}</h3>
              <p className="font-sans font-light text-sm text-zinc-500 mb-8 leading-relaxed">{s.desc}</p>
              
              <div className="flex items-end justify-between border-t border-zinc-100 pt-6 mt-auto">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 block mb-1">Starting from</span>
                  <span className="text-xl font-serif text-brand-green">{s.price}</span>
                </div>
                <a 
                  href="#consultation-form"
                  className="text-[10px] pb-1 border-b border-transparent uppercase tracking-[0.2em] text-zinc-400 group-hover:text-brand-green group-hover:border-brand-green transition-all"
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-[10px] text-zinc-400 font-sans uppercase tracking-[0.2em]">
          All prices include design fees, material, and installation. GST extra.
        </p>
      </div>
    </section>
  );
}
