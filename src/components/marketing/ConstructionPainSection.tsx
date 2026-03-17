"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const PAIN_BULLETS = [
  {
    label: "AR aging is already stale",
    body: "The report hits the PM's desk 2–3 days after close. By then, the follow-up window is smaller and the excuses are ready.",
  },
  {
    label: "Job cost doesn't tie to the PM system",
    body: "ERP says one number. The project manager's spreadsheet says another. Nobody reconciles until month-end — and by then, the damage is done.",
  },
  {
    label: "AIA billing runs on memory and manual pulls",
    body: "Stored value, retainage, change orders — all assembled from scratch each billing cycle. One missed line is a lien or a delayed draw.",
  },
  {
    label: "Month-end close takes 9–12 days",
    body: "Because the data isn't clean going in. The close isn't slow — the cleanup is slow. Jake fixes the data before the close starts.",
  },
  {
    label: "Cash position is estimated, not calculated",
    body: "AR collections projections built on gut feel. AP timing guessed from past patterns. The 13-week forecast is an approximation of an approximation.",
  },
  {
    label: "ERP has years of data rot",
    body: "Duplicate vendors. Mismatched GL codes. Orphaned journal entries from the last system migration. Every report built on top of it inherits the noise.",
  },
];

export function ConstructionPainSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6200]/4 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6200]/30 bg-[#FF6200]/8 text-[#FF6200] text-sm font-medium mb-6">
            <AlertTriangle className="w-3.5 h-3.5" />
            The financial leaks construction teams normalize
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] max-w-3xl mx-auto">
            The problem usually isn&apos;t your people.
            <br />
            <span className="gradient-text-orange">It&apos;s the data they&apos;re working from.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Most construction finance teams are reasonably skilled. But they&apos;re running on ERP
            data that hasn&apos;t been reconciled since the last audit, AR aging reports that are 3 days
            stale, and job cost reports that don&apos;t match the PM system. The result is reactive
            finance: cleaning up problems instead of preventing them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {PAIN_BULLETS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="relative p-5 rounded-xl border border-[#FF6200]/15 bg-[#FF6200]/5 hover:border-[#FF6200]/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6200] shrink-0 mt-2" />
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-slate-400 text-base max-w-xl mx-auto"
        >
          Jake doesn&apos;t just surface these problems.{" "}
          <span className="text-white font-semibold">
            It fixes the data first, then runs the workflows on clean numbers.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
