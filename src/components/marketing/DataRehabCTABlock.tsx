"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";
import Link from "next/link";

export function DataRehabCTABlock() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6200]/8 via-transparent to-[#FF6200]/4 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6200]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6200]/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6200]/30 bg-[#FF6200]/8 text-[#FF6200] text-sm font-medium mb-6">
            <Wrench className="w-3.5 h-3.5" />
            Step 2: Data Rehab
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-[1.1]">
            Clean data is the product.
            <br />
            <span className="gradient-text-orange">The agents are what you do with it.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Data Rehab normalizes your ERP, closes GL gaps, deduplicates vendors, and reconciles
            your AR, AP, and bank — all documented and delivered as a clean database you own.
            Starts at <span className="text-white font-semibold">$5k</span>. We invoice on
            delivery, not kickoff.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/data-rehab"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF6200] hover:bg-[#e85800] text-white font-bold text-base transition-all duration-200 shadow-xl shadow-[#FF6200]/20 hover:-translate-y-0.5"
            >
              See what Data Rehab delivers
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/diagnostic"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-[#FF6200]/20 text-slate-300 hover:text-white hover:border-[#FF6200]/40 font-semibold text-base transition-all duration-200 hover:bg-[#FF6200]/5"
            >
              Start with free diagnostic first
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-slate-600">
            {[
              "Fixed fee — no hourly surprises",
              "Invoice on delivery",
              "Database you own forever",
              "CFO can expense without board approval",
            ].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span className="hidden sm:inline">·</span>}
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
