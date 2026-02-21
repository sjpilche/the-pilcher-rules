"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
            Ready to see it in action?
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Stop managing your books.
            <br />
            <span className="gradient-text">Start commanding them.</span>
          </h2>

          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Get a personalized demo with your actual financial data.
            We&apos;ll show you exactly which agents will move the needle
            for your business — in 30 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="group flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/agents"
              className="px-8 py-4 rounded-xl border border-white/15 text-slate-200 hover:text-white hover:border-white/30 font-semibold text-lg transition-all duration-200 hover:bg-white/5"
            >
              Explore Agents First
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
