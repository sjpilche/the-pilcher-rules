"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "We cut our month-end close from 8 days to 2.5. The Close & Audit agent does in hours what used to take my team a week of spreadsheet hell.",
    author: "CFO",
    company: "$180M Regional Contractor",
    color: "#3b82f6",
  },
  {
    quote:
      "The AR Collections agent recovered $2.1M in overdue receivables in the first 90 days. The risk scoring is eerily accurate.",
    author: "Controller",
    company: "Multi-State GC",
    color: "#10b981",
  },
  {
    quote:
      "Our job costing was a disaster before this. Now I can see real-time margin on every job and catch overruns before they become disasters.",
    author: "VP of Finance",
    company: "Specialty Subcontractor",
    color: "#8b5cf6",
  },
];

const PROOF_STATS = [
  { value: "$2.1M+", label: "AR recovered in 90 days (avg)" },
  { value: "70%", label: "Close cycle time reduction" },
  { value: "99.2%", label: "AP processing accuracy" },
  { value: "18 days", label: "Average DSO improvement" },
];

export function SocialProof() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Proof stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 mb-20"
        >
          {PROOF_STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-[#0d1424] px-6 py-8 text-center"
            >
              <div className="text-3xl font-black text-white mb-1">{value}</div>
              <div className="text-sm text-slate-500">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-4">
            Real Results
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            CFOs don&apos;t give testimonials
            <br />
            <span className="gradient-text">unless the numbers are real.</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-7 flex flex-col gap-5"
            >
              {/* Quote mark */}
              <div
                className="text-5xl font-serif leading-none"
                style={{ color: t.color }}
              >
                &ldquo;
              </div>
              <p className="text-slate-200 text-sm leading-relaxed flex-1">
                {t.quote}
              </p>
              <div>
                <div className="text-white font-semibold text-sm">{t.author}</div>
                <div className="text-slate-500 text-xs mt-0.5">{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
