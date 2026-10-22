"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { User, Phone, Home, Wallet, ChevronDown, ArrowRight, ShieldCheck, Gift } from "lucide-react";

const propertyTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa"];
const budgets = ["₹ 3 - ₹ 6 Lakhs", "₹ 6 - ₹ 10 Lakhs", "₹ 10 - ₹ 15 Lakhs", "₹ 15 - ₹ 20 Lakhs", "Above ₹ 20 Lakhs"];

const inputClass =
  "w-full rounded-xl bg-white/10 backdrop-blur-sm pl-11 pr-4 py-3.5 text-sm text-white outline-none border border-white/20 focus:border-brand-green focus:bg-white/15 focus:ring-4 focus:ring-brand-green/20 transition-all placeholder:text-white/50";

const inputClassLight =
  "w-full rounded-xl bg-zinc-50 pl-11 pr-4 py-3.5 text-sm text-brand-black outline-none border border-zinc-200 focus:border-brand-green focus:bg-white focus:ring-4 focus:ring-brand-green/10 transition-all placeholder:text-zinc-400";

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", phone: "", propertyType: "", budget: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.propertyType || !formData.budget) {
      alert("Please fill all required fields.");
      return;
    }
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzT9RgKCeuKbvHIACe0XZMJ5Y5WGf60qVP12d6aTzjYjgqqt-twupFzTHWBmwmOgkOiNg/exec";
      const payload = {
        fullName: formData.name,
        phone: formData.phone,
        propertyType: formData.propertyType,
        budget: formData.budget,
        message: "Hero Section Form",
        source: "Landing Page Hero Form",
        timestamp: new Date().toLocaleString(),
      };

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Submission failed");
      const result = await response.json().catch(() => null);
      if (result && result.status === "error") throw new Error(result.message || "Submission failed");

      router.push("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center">
      <Image
        src="/hero-banner.png"
        alt="Premium home interior design in Bangalore by Hayat Interiors"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-24 md:flex-row md:items-center md:justify-between md:gap-12 md:px-6 lg:px-8">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-xl"
        >
          <h1 className="font-serif text-3xl font-normal leading-[1.15] text-zinc-100 sm:text-4xl lg:text-5xl xl:text-6xl">
            Premium Home
            <br />
            Interior Designers
            <br />
            in <span className="text-[#6ee7b7]">Bangalore</span>
          </h1>
          <p className="mt-6 text-base text-white/70 leading-relaxed max-w-lg sm:text-lg">
            Personalised interiors for apartments and villas, designed and delivered from concept to handover by one accountable team.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-brand-green" />
              <span>500+ Homes Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-brand-green" />
              <span>10-Year Warranty</span>
            </div>
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* removed green top strip */}
            <div className="p-6 sm:p-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6ee7b7]">
                <Gift size={12} /> Free 3D Mood Board
              </span>
              <h2 className="mt-3 font-serif text-2xl font-normal leading-tight text-white sm:text-3xl">
                Book Your Free Consultation
              </h2>
              <p className="mt-1.5 mb-6 font-sans text-sm text-white/50">
                Share your details and our designer will call you within 2 working hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="relative">
                  <User size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    className={inputClass}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value.replace(/[^a-zA-Z\s]/g, "") })}
                  />
                </div>
                <div className="relative">
                  <Phone size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    placeholder="Phone number"
                    className={inputClass}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                    pattern="[6-9][0-9]{9}"
                    title="Please enter a valid 10-digit Indian phone number"
                  />
                </div>
                <div className="relative">
                  <Home size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <select
                    required
                    className={`${inputClass} appearance-none pr-10 ${formData.propertyType ? "text-white" : "text-white/50"}`}
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  >
                    <option value="" className="text-zinc-800">Property type</option>
                    {propertyTypes.map((t) => (
                      <option key={t} value={t} className="text-zinc-800">{t}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40" />
                </div>
                <div className="relative">
                  <Wallet size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <select
                    required
                    className={`${inputClass} appearance-none pr-10 ${formData.budget ? "text-white" : "text-white/50"}`}
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="" className="text-zinc-800">Budget for interiors</option>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="text-zinc-800">{b}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-brand-green/30 transition-all hover:bg-brand-green-accent disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Book Free Consultation"}
                  {!isSubmitting && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
                </button>

                <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-white/40">
                  <ShieldCheck size={13} className="text-[#6ee7b7]" />
                  <span>Your details are 100% secure. No spam.</span>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
