"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/15 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-8">
            Ready to meet Jake?
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Stop chasing
            <br />
            <span className="gradient-text">your own financials.</span>
          </h2>

          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Let Jake walk through your financials live. 30 minutes, your real
            data, and you&apos;ll see exactly what he would catch, fix, and
            optimize starting day one.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="group flex items-center gap-2.5 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg transition-all duration-200 shadow-xl shadow-amber-500/25 hover:shadow-amber-400/40 hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              See What Jake Would Flag in Your Business
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/live-demo"
              className="px-8 py-4 rounded-xl border border-amber-500/20 text-slate-200 hover:text-white hover:border-amber-500/40 font-semibold text-lg transition-all duration-200 hover:bg-amber-500/5"
            >
              See Jake Live First
            </Link>
          </div>

          <p className="text-slate-600 text-sm mt-8">
            No contracts. No 6-month onboarding. No BS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
