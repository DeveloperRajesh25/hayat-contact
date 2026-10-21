"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { User, Phone, Home, Wallet, ChevronDown, ArrowRight, ShieldCheck, Gift } from "lucide-react";

const propertyTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa"];
const budgets = ["₹ 3 - ₹ 6 Lakhs", "₹ 6 - ₹ 10 Lakhs", "₹ 10 - ₹ 15 Lakhs", "₹ 15 - ₹ 20 Lakhs", "Above ₹ 20 Lakhs"];

const inputClass =
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
    <section className="w-full bg-white pt-[72px] sm:pt-[80px]">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-4 p-4 md:flex-row md:items-stretch md:gap-6 md:p-6 md:min-h-[calc(100svh-80px)]">
        {/* Right image (shown first on mobile) */}
        <div className="relative order-1 h-[300px] w-full overflow-hidden rounded-2xl sm:h-[380px] md:order-2 md:h-auto md:w-[58%]">
          <Image
            src="/hero-banner.png"
            alt="Premium home interior design in Bangalore by Hayat Interiors"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <h1 className="absolute bottom-5 left-5 right-5 font-serif text-3xl font-light leading-[1.1] text-white sm:text-4xl md:bottom-10 md:left-10 md:text-5xl lg:text-6xl">
            Premium Home Interior
            <br />
            Designers in <span className="text-[#6ee7b7]">Bangalore</span>
          </h1>
        </div>


        {/* Left form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 flex w-full items-center md:order-1 md:w-[42%]"
        >
          <div className="relative w-full overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-15px_rgba(27,94,79,0.25)] ring-1 ring-zinc-100">
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-green via-brand-green-accent to-brand-green" />
            <div className="p-6 sm:p-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-green">
                <Gift size={12} /> Free 3D Mood Board
              </span>
              <h2 className="mt-3 font-serif text-2xl font-normal leading-tight text-brand-black sm:text-3xl">
                Book Your Free Consultation
              </h2>
              <p className="mt-1.5 mb-6 font-sans text-sm text-zinc-500">
                Share your details and our designer will call you within 2 working hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="relative">
                  <User size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
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
                  <Phone size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
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
                  <Home size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <select
                    required
                    className={`${inputClass} appearance-none pr-10 ${formData.propertyType ? "" : "text-zinc-400"}`}
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  >
                    <option value="">Property type</option>
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                </div>
                <div className="relative">
                  <Wallet size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <select
                    required
                    className={`${inputClass} appearance-none pr-10 ${formData.budget ? "" : "text-zinc-400"}`}
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="">Budget for interiors</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-brand-green/25 transition-all hover:bg-brand-black disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Book Free Consultation"}
                  {!isSubmitting && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
                </button>

                <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-zinc-400">
                  <ShieldCheck size={13} className="text-brand-green" />
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
