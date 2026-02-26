"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Clock,
  ShieldCheck,
  BadgeCheck,
  Building2,
  DollarSign,
  CalendarCheck,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

/* ─── Types ────────────────────────────────────────────────────────── */
export interface BeforeAfterMetric {
  label: string;
  before: string;
  after: string;
  direction: "up" | "down";   // up = good when it increases, down = good when it decreases
  color: string;
}

export interface CaseStudy {
  badge: string;
  companyDescription: string;
  revenue: string;
  headline: string;
  recoveredAmount: string;
  paybackPeriod: string;
  timeframe: string;
  agentsUsed: string[];
  metrics: BeforeAfterMetric[];
  pullQuote: string;
  quoteRole: string;
}

/* ─── Default case study ───────────────────────────────────────────── */
const DEFAULT_CASE_STUDY: CaseStudy = {
  badge: "Featured Case Study",
  companyDescription: "Multi-State General Contractor",
  revenue: "$140M",
  headline: "$2.1M Recovered in 90 Days",
  recoveredAmount: "$2.1M",
  paybackPeriod: "< 45 days",
  timeframe: "90-day engagement",
  agentsUsed: [
    "AR Collections",
    "Anomaly Detection",
    "Cash Flow Forecasting",
    "Close & Audit",
    "Job Costing",
  ],
  metrics: [
    {
      label: "Days Sales Outstanding",
      before: "68 days",
      after: "41 days",
      direction: "down",
      color: "#10b981",
    },
    {
      label: "Month-End Close",
      before: "8 days",
      after: "2.5 days",
      direction: "down",
      color: "#3b82f6",
    },
    {
      label: "AR Recovery Rate",
      before: "72%",
      after: "94%",
      direction: "up",
      color: "#FF6200",
    },
    {
      label: "Anomalies Caught / Month",
      before: "2 (manual)",
      after: "17 (automated)",
      direction: "up",
      color: "#f59e0b",
    },
    {
      label: "Cash Forecast Accuracy",
      before: "± 18%",
      after: "± 4.2%",
      direction: "down",
      color: "#8b5cf6",
    },
    {
      label: "Job Margin Visibility",
      before: "Monthly lag",
      after: "Real-time",
      direction: "up",
      color: "#ec4899",
    },
  ],
  pullQuote:
    "We thought we'd see results in six months. Jake flagged $184K in duplicate payments the first week and recovered $2.1M in stale receivables by day 90. My board asked me why we didn't do this two years ago.",
  quoteRole: "CFO — $140M Multi-State GC",
};

/* ─── Metric row ───────────────────────────────────────────────────── */
function MetricRow({ m, index }: { m: BeforeAfterMetric; index: number }) {
  const Arrow = m.direction === "up" ? TrendingUp : TrendingDown;
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.3 + index * 0.06 }}
      className="group/row grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 py-3 px-4 rounded-xl transition-colors duration-200 hover:bg-white/[0.03]"
    >
      {/* Label */}
      <span className="text-slate-300 text-sm font-medium">{m.label}</span>

      {/* Before */}
      <span className="text-slate-500 text-sm text-right line-through decoration-slate-600/50 decoration-1">
        {m.before}
      </span>

      {/* Arrow */}
      <Arrow className="w-4 h-4 flex-shrink-0" style={{ color: m.color }} />

      {/* After */}
      <span className="text-sm font-bold text-right" style={{ color: m.color }}>
        {m.after}
      </span>
    </motion.div>
  );
}

/* ─── Main export ──────────────────────────────────────────────────── */
interface CaseStudyCardProps {
  study?: CaseStudy;
  showCta?: boolean;
}

export function CaseStudyCard({
  study = DEFAULT_CASE_STUDY,
  showCta = true,
}: CaseStudyCardProps) {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#FF6200]/30 via-[#FF6200]/10 to-emerald-500/20 pointer-events-none" />

          {/* Card body */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0f1318] via-[#0d1117] to-[#0f1318] border border-white/[0.06] overflow-hidden">

            {/* Top ribbon */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF6200]/10 via-[#FF6200]/5 to-emerald-500/5 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6200]/15 border border-[#FF6200]/25">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF6200]" />
                  <span className="text-[11px] font-bold text-[#FF6200] uppercase tracking-wider">
                    {study.badge}
                  </span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <BadgeCheck className="w-3 h-3 text-blue-400" />
                  <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wide">
                    Verified
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <Building2 className="w-3.5 h-3.5" />
                <span>{study.companyDescription}</span>
                <span className="text-slate-600">&middot;</span>
                <span className="font-semibold text-slate-400">{study.revenue}</span>
              </div>
            </div>

            {/* ── Main content ── */}
            <div className="p-5 sm:p-8 md:p-10">

              {/* Headline + hero stats */}
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-10">
                {/* Left: headline */}
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
                    {study.headline}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    {study.timeframe} &middot; 5 agents deployed on live ERP data
                  </p>
                </div>

                {/* Right: 3 hero stat cards */}
                <div className="flex flex-wrap gap-3 flex-shrink-0">
                  {/* Recovered */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="flex flex-col items-center px-5 py-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20"
                  >
                    <DollarSign className="w-5 h-5 text-emerald-400 mb-1" />
                    <span className="text-2xl font-black text-emerald-400">{study.recoveredAmount}</span>
                    <span className="text-[10px] text-emerald-400/70 font-medium uppercase tracking-wider">
                      Recovered
                    </span>
                  </motion.div>

                  {/* Payback */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    className="flex flex-col items-center px-5 py-4 rounded-xl bg-[#FF6200]/[0.08] border border-[#FF6200]/20"
                  >
                    <Clock className="w-5 h-5 text-[#FF6200] mb-1" />
                    <span className="text-2xl font-black text-[#FF6200]">{study.paybackPeriod}</span>
                    <span className="text-[10px] text-[#FF6200]/70 font-medium uppercase tracking-wider">
                      Payback
                    </span>
                  </motion.div>

                  {/* ROI */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                    className="flex flex-col items-center px-5 py-4 rounded-xl bg-blue-500/[0.08] border border-blue-500/20"
                  >
                    <BarChart3 className="w-5 h-5 text-blue-400 mb-1" />
                    <span className="text-2xl font-black text-blue-400">40:1</span>
                    <span className="text-[10px] text-blue-400/70 font-medium uppercase tracking-wider">
                      ROI Ratio
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* ── Before / After metrics ── */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <CalendarCheck className="w-4 h-4 text-slate-500" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Before &amp; After — {study.timeframe}
                  </span>
                </div>

                {/* Column headers */}
                <div className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 px-4 pb-2 border-b border-white/[0.06]">
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Metric</span>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider text-right">Before</span>
                  <span className="w-4" />
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider text-right">After</span>
                </div>

                {/* Rows */}
                <div className="divide-y divide-white/[0.03]">
                  {study.metrics.map((m, i) => (
                    <MetricRow key={m.label} m={m} index={i} />
                  ))}
                </div>
              </div>

              {/* ── Pull quote ── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative rounded-2xl bg-gradient-to-r from-[#FF6200]/[0.06] to-emerald-500/[0.04] border border-[#FF6200]/15 p-7 mb-8"
              >
                <span className="absolute -top-3 left-6 text-5xl font-serif text-[#FF6200]/30 select-none leading-none">&ldquo;</span>
                <p className="text-slate-200 text-base leading-relaxed italic pl-4 relative z-10">
                  {study.pullQuote}
                </p>
                <div className="flex items-center gap-2 mt-4 pl-4">
                  <div className="w-8 h-8 rounded-full bg-[#FF6200]/20 border-2 border-[#FF6200]/40 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-[#FF6200]">CFO</span>
                  </div>
                  <span className="text-sm text-slate-400 font-medium">{study.quoteRole}</span>
                  <BadgeCheck className="w-3.5 h-3.5 text-blue-400" />
                </div>
              </motion.div>

              {/* ── Agents used ── */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mr-1">
                  Agents deployed:
                </span>
                {study.agentsUsed.map((agent) => (
                  <span
                    key={agent}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-medium"
                  >
                    {agent}
                  </span>
                ))}
              </div>

              {/* ── CTA row ── */}
              {showCta && (
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/[0.06]">
                  <p className="text-slate-400 text-sm flex-1">
                    Want to see what Jake finds in <strong className="text-white">your</strong> books? The diagnostic is free.
                  </p>
                  <Link
                    href="/demo"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6200] hover:bg-[#e85800] text-white text-sm font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-[#FF6200]/25"
                  >
                    Start Free Diagnostic
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="/live-demo"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-medium transition-colors"
                  >
                    See live demo
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
