"use client";

import { motion } from "framer-motion";
import { Stethoscope, Wrench, FlaskConical, Building2 } from "lucide-react";

const STAGES = [
  {
    number: "01",
    icon: Stethoscope,
    title: "Free AI Readiness Diagnostic",
    description:
      "We analyze your ERP and financial data and deliver an honest report: data quality score, reconciliation gaps, duplication problems, sync latency. You see exactly what's broken — before spending a dollar.",
    color: "#3b82f6",
    details: ["Data quality score (0–100)", "GL & AR integrity check", "Vendor/customer duplication scan", "AI Readiness Score report"],
    label: "Free",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Data Rehab",
    description:
      "We normalize your ERP, close the gaps, clean the duplicates, and patch the reconciliation issues. You get a database you own — AI-ready and usable anywhere. Starting at $5k. We invoice on delivery — not kickoff.",
    color: "#f59e0b",
    details: ["ERP normalization (BC, SQL Server, Sage)", "Reconciliation gap closure", "Database you own — use with any AI", "AI-ready certification"],
    label: "From $5k",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "1-Week Agent Trial on Your Data",
    description:
      "Once the data is clean, we run a 7-day guided trial on your real numbers — AR collections, cash position, anomaly detection, and close acceleration. You see what AI actually does before committing.",
    color: "#10b981",
    details: ["AR & cash agents on your books", "Anomaly detection on your GL", "Close acceleration on your trial balance", "AI-narrated daily summary"],
    label: "Included",
  },
  {
    number: "04",
    icon: Building2,
    title: "Full 18-Agent Platform",
    description:
      "After the trial you choose your pack. Every tier runs on your clean data layer with full trust governance, SOC 2–aligned controls, and live ERP sync. No spreadsheets. No surprises.",
    color: "#8b5cf6",
    details: ["Monitoring, Operational, or CFO Intelligence pack", "All 18 agents coordinated by CFO Manager", "Trust layer + full audit trail", "$3k–$15k/mo based on scope"],
    label: "Subscription",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-6">
            The Jake Proof Stack
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
            Inspect. Repair. Prove.
            <br />
            <span className="gradient-text">Then scale.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Most construction companies can&apos;t use AI because their data is a mess.
            We fix that first. Then we prove it works on your numbers. Then we hand you the platform.
          </p>
        </motion.div>

        {/* Stages — vertical timeline on mobile, horizontal on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/20 via-amber-500/20 to-purple-500/20" />

          {STAGES.map((stage, i) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative glass rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300 flex flex-col"
            >
              {/* Stage number */}
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-none"
                style={{ color: `${stage.color}25` }}
              >
                {stage.number}
              </div>

              {/* Icon + label */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${stage.color}18`, border: `1px solid ${stage.color}30` }}
                >
                  <stage.icon className="w-5 h-5" style={{ color: stage.color }} />
                </div>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${stage.color}18`, color: stage.color }}
                >
                  {stage.label}
                </span>
              </div>

              <h3 className="text-white font-bold text-base mb-3 leading-snug">{stage.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                {stage.description}
              </p>

              {/* Detail list */}
              <ul className="space-y-2">
                {stage.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-xs text-slate-400">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                      style={{ background: stage.color }}
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Confidence bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-400 text-sm">
            <span className="text-white font-semibold">Key rule:</span>{" "}
            We don&apos;t invoice Data Rehab until your quality gates pass and your data is documented AI-ready.
            No clean data, no invoice.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
