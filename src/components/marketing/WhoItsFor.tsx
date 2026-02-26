"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const GOOD_FIT = [
  "You run $10M–$500M in revenue with a real finance function",
  "You have an ERP or accounting system with actual data in it",
  "Your team spends real hours on manual reconciliation, collections, or close",
  "You want AI to take action, not just show you charts",
  "You're tired of being surprised by cash shortfalls, margin slippage, or overdue AR",
];

const NOT_FIT = [
  "You're pre-revenue or under $3M with no ERP or accounting system",
  "You want a reporting dashboard or BI tool, not automation",
  "You prioritize upfront cost over measurable ROI",
  "You don't have a finance person who can act on what Jake surfaces",
  "You want to experiment with AI concepts rather than run it in production",
];

export function WhoItsFor() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-slate-400 text-sm font-medium mb-4">
            Is Jake Right for You?
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5">
            This isn&apos;t for everyone.
            <br />
            <span className="gradient-text">Here&apos;s who it is — and isn&apos;t — for.</span>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Good fit */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 border border-green-500/20 bg-green-500/[0.04]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <h3 className="text-white font-bold text-lg">Good fit</h3>
            </div>
            <ul className="space-y-4">
              {GOOD_FIT.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not a fit */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 border border-white/8 bg-white/[0.02]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <X className="w-4 h-4 text-slate-500" />
              </div>
              <h3 className="text-slate-400 font-bold text-lg">Not a fit</h3>
            </div>
            <ul className="space-y-4">
              {NOT_FIT.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-500 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-slate-400 text-base mb-6">
            If you recognized yourself in the left column, we should talk.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF6200] hover:bg-[#e85800] text-white font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-[#FF6200]/25"
          >
            Schedule a 30-Minute Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
