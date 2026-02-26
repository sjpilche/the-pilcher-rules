"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { JakeMascot } from "@/components/mascot/JakeMascot";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden group/section">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6200]/[0.04] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF6200]/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Jake — peeking in from the left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute left-8 bottom-16 hidden xl:block -rotate-3"
      >
        <JakeMascot quote="That's me." size={88} bubbleSide="right" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#FF6200]/30 bg-[#FF6200]/10 text-[#FF6200] text-sm font-medium mb-8">
            Ready to meet Jake?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Stop chasing
            <br />
            <span className="gradient-text-orange">your own financials.</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mb-10 sm:mb-12 max-w-xl mx-auto leading-relaxed">
            Start with the free diagnostic. One call, one data export — we&apos;ll
            show you exactly what&apos;s broken and what AI can do about it.
            No commitment. No credit card. No consultant-speak.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/diagnostic"
              className="group flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF6200] hover:bg-[#e85800] text-white font-bold text-base sm:text-lg transition-all duration-200 shadow-xl shadow-[#FF6200]/25 hover:shadow-[#FF6200]/40 hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Schedule Your Free Diagnostic
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/live-demo"
              className="px-8 py-4 rounded-xl border border-[#FF6200]/20 text-slate-200 hover:text-white hover:border-[#FF6200]/40 font-semibold text-base sm:text-lg transition-all duration-200 hover:bg-[#FF6200]/5"
            >
              Try the Interactive Demo First
            </Link>
          </div>

          <p className="text-slate-600 text-sm mt-8">
            Free diagnostic · No credit card · No 6-month onboarding
          </p>
        </motion.div>
      </div>
    </section>
  );
}
