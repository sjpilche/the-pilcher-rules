"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HardHat, ShieldCheck, TrendingUp, Database } from "lucide-react";

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
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden blueprint-bg">
      {/* Warm construction glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-900/5 rounded-full blur-3xl pointer-events-none" />

      {/* Structural corner accents — heavier */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-amber-500/30 pointer-events-none" />
      <div className="absolute top-24 right-8 w-16 h-16 border-t-2 border-r-2 border-amber-500/30 pointer-events-none" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-b-2 border-l-2 border-amber-500/30 pointer-events-none" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-b-2 border-r-2 border-amber-500/30 pointer-events-none" />

      {/* Diagonal caution stripe accents in corners */}
      <div className="absolute top-0 left-0 w-32 h-1 caution-stripe pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-1 caution-stripe pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-1 caution-stripe pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-1 caution-stripe pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-sm font-semibold mb-8 shadow-lg shadow-amber-500/10"
        >
          <HardHat className="w-4 h-4" />
          The AI CFO built for construction
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.05]"
        >
          <span className="gradient-text">Jake</span> runs your
          <br />
          construction finances.
          <br />
          <span className="text-3xl md:text-4xl font-bold text-slate-400 leading-relaxed">
            You run the business.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Collections follow-ups sent. Job margins monitored. Close cycle cut in half.
          Jake handles the financial operations your team is currently doing manually
          — so they don&apos;t have to.
        </motion.p>

        {/* Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {PILLS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/5 border border-amber-500/20 text-slate-300 text-sm"
            >
              <Icon className="w-3.5 h-3.5 text-amber-400" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/live-demo"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg transition-all duration-200 shadow-xl shadow-amber-500/25 hover:shadow-amber-400/40 hover:-translate-y-0.5"
          >
            See Jake in Action
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/agents"
            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-amber-500/20 text-slate-200 hover:text-white hover:border-amber-500/40 font-semibold text-lg transition-all duration-200 hover:bg-amber-500/5"
          >
            See All 18 Agents
          </Link>
        </motion.div>

        {/* Stats — steel plate style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-amber-500/15 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-900/20"
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-[#0c1018] px-6 py-8 flex flex-col items-center gap-1"
            >
              <span className="text-4xl font-black text-amber-400">{value}</span>
              <span className="text-sm text-slate-500 font-medium">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* I-beam divider below stats */}
        <div className="mt-16 mx-auto max-w-md">
          <div className="i-beam" />
        </div>
      </div>

      {/* Jake — standing watch in the corner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-16 right-10 hidden lg:block group"
      >
        {/* Speech bubble — appears on hover */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="px-3 py-1.5 rounded-lg bg-[#0c1018] border border-amber-500/30 text-amber-300 text-xs font-medium shadow-lg">
            On it.
          </div>
          <div className="w-2 h-2 bg-[#0c1018] border-r border-b border-amber-500/30 rotate-45 mx-auto -mt-1" />
        </div>

        <div className="animate-float drop-shadow-[0_0_16px_rgba(245,158,11,0.3)]">
          <Image
            src="/jake.png"
            alt="Jake — your construction AI CFO"
            width={72}
            height={120}
            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-amber-500/40 to-transparent" />
      </motion.div>
    </section>
  );
}
