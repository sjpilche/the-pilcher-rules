"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HardHat, ShieldCheck, TrendingUp, Database } from "lucide-react";

/* ─── A/B Test: Hero Variants ──────────────────────────────────────
   Variant A (control): "Your CFO Never Sleeps."
   Variant B (challenger): "Stop Losing Money You Already Earned."
   Assignment is sticky per session via sessionStorage.
   Track via GA4 event: gtag('event','hero_variant',{variant:'A'|'B'})
   ─────────────────────────────────────────────────────────────────── */
type HeroVariant = "A" | "B";

const HERO_COPY: Record<HeroVariant, { headline: string; highlightLine: string; subHeadline: string }> = {
  A: {
    headline: "Your CFO",
    highlightLine: "Never Sleeps.",
    subHeadline: "18 AI agents running your construction finances. You run the business.",
  },
  B: {
    headline: "Stop Losing Money",
    highlightLine: "You Already Earned.",
    subHeadline: "$2.1M recovered in 90 days. 18 AI agents that collect, protect, and forecast — automatically.",
  },
};

function getHeroVariant(): HeroVariant {
  try {
    const stored = sessionStorage.getItem("jake-hero-variant");
    if (stored === "A" || stored === "B") return stored;
    const variant: HeroVariant = Math.random() < 0.5 ? "A" : "B";
    sessionStorage.setItem("jake-hero-variant", variant);
    // Fire GA4 event for tracking
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
        "event",
        "hero_variant",
        { variant }
      );
    }
    return variant;
  } catch {
    return "A"; // SSR or private browsing fallback
  }
}

const STATS = [
  { value: "18", label: "Specialized Agents" },
  { value: "100+", label: "KPIs Monitored Daily" },
  { value: "48", label: "Anomaly Detection Rules" },
  { value: "85.3%", label: "Job Cost ML Accuracy" },
];

const PILLS = [
  { icon: HardHat, label: "Built for Construction" },
  { icon: Database, label: "Data Rehab First" },
  { icon: ShieldCheck, label: "Surety & Lender Ready" },
  { icon: TrendingUp, label: "Takes Action, Not Just Reports" },
];

export function Hero() {
  const [variant, setVariant] = useState<HeroVariant>("A");
  useEffect(() => { setVariant(getHeroVariant()); }, []);
  const copy = HERO_COPY[variant];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden blueprint-bg">
      {/* CHANGED: glow orbs → brand orange + brand blue */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6200]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#FF6200]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0A2540]/40 rounded-full blur-3xl pointer-events-none" />

      {/* CHANGED: structural corners → brand orange */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-[#FF6200]/30 pointer-events-none" />
      <div className="absolute top-24 right-8 w-16 h-16 border-t-2 border-r-2 border-[#FF6200]/30 pointer-events-none" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-b-2 border-l-2 border-[#FF6200]/30 pointer-events-none" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-b-2 border-r-2 border-[#FF6200]/30 pointer-events-none" />

      {/* Diagonal caution stripe accents in corners */}
      <div className="absolute top-0 left-0 w-32 h-1 caution-stripe pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-1 caution-stripe pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-1 caution-stripe pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-1 caution-stripe pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* CHANGED: Badge → brand orange */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FF6200]/40 bg-[#FF6200]/10 text-[#FF6200] text-sm font-semibold mb-8 shadow-lg shadow-[#FF6200]/10"
        >
          <HardHat className="w-4 h-4" />
          The AI CFO built for construction
        </motion.div>

        {/* A/B tested headline — variant assigned per session */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[1.0]"
        >
          {copy.headline}
          <br />
          <span className="gradient-text-orange">{copy.highlightLine}</span>
        </motion.h1>

        {/* Sub-headline — also A/B tested */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-300 mb-4 leading-snug"
        >
          {copy.subHeadline}
        </motion.p>

        {/* Sub-copy — kept existing tone */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Collections follow-ups sent. Job margins monitored. Close cycle cut in half.
          Jake handles the financial operations your team is currently doing manually
          — so they don&apos;t have to.
        </motion.p>

        {/* ADDED: Founder credibility line with photo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6200] to-[#e05500] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#FF6200]/25 overflow-hidden">
            J
          </div>
          <p className="text-slate-400 text-sm">
            <span className="text-white font-semibold">Jake</span>
            <span className="text-slate-500"> — built by construction CFOs, for construction CFOs</span>
          </p>
        </motion.div>

        {/* CHANGED: Pills → brand orange */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {PILLS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6200]/5 border border-[#FF6200]/20 text-slate-300 text-sm"
            >
              <Icon className="w-3.5 h-3.5 text-[#FF6200]" />
              {label}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/diagnostic"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF6200] hover:bg-[#e85800] text-white font-bold text-lg transition-all duration-200 shadow-xl shadow-[#FF6200]/25 hover:shadow-[#FF6200]/40 hover:-translate-y-0.5"
          >
            Schedule Free Diagnostic
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/agents"
            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-[#FF6200]/20 text-slate-200 hover:text-white hover:border-[#FF6200]/40 font-semibold text-lg transition-all duration-200 hover:bg-[#FF6200]/5"
          >
            See All 18 Agents
          </Link>
        </motion.div>

        {/* CHANGED: Stats bar → brand orange accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#FF6200]/15 rounded-2xl overflow-hidden border border-[#FF6200]/20 shadow-2xl shadow-[#FF6200]/10"
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-[#0c1018] px-4 py-5 sm:px-6 sm:py-8 flex flex-col items-center gap-1"
            >
              <span className="text-4xl font-black text-[#FF6200]">{value}</span>
              <span className="text-sm text-slate-500 font-medium">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* I-beam divider below stats */}
        <div className="mt-16 mx-auto max-w-md">
          <div className="i-beam" />
        </div>
      </div>

      {/* Jake — standing watch in the corner, CHANGED: glow → brand orange */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-16 right-10 hidden lg:block group"
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="px-3 py-1.5 rounded-lg bg-[#0c1018] border border-[#FF6200]/30 text-[#FF6200] text-xs font-medium shadow-lg">
            On it.
          </div>
          <div className="w-2 h-2 bg-[#0c1018] border-r border-b border-[#FF6200]/30 rotate-45 mx-auto -mt-1" />
        </div>

        <div className="animate-float drop-shadow-[0_0_16px_rgba(255,98,0,0.3)]">
          <Image
            src="/jake.png"
            alt="Jake — your construction AI CFO"
            width={72}
            height={120}
            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </motion.div>

      {/* Scroll indicator — CHANGED: gradient → brand orange */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#FF6200]/40 to-transparent" />
      </motion.div>
    </section>
  );
}
