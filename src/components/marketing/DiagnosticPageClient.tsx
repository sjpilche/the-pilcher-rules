"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  Stethoscope,
  Clock,
  Shield,
  Zap,
  AlertTriangle,
  XCircle,
  Database,
  ArrowRight,
  TrendingDown,
  Users,
  FileWarning,
  Layers,
} from "lucide-react";
import { DiagnosticForm } from "./DiagnosticForm";

/* ── Animated data-health bars ────────────────────────────── */
const DATA_HEALTH_ITEMS = [
  { label: "GL Reconciliation", pct: 34, color: "#ef4444", status: "Critical" },
  { label: "Vendor Duplicates", pct: 22, color: "#ef4444", status: "67 found" },
  { label: "Cost Code Integrity", pct: 58, color: "#f59e0b", status: "Warning" },
  { label: "AR Aging Accuracy", pct: 41, color: "#ef4444", status: "Unreliable" },
  { label: "Job-to-GL Sync", pct: 73, color: "#f59e0b", status: "Gaps" },
  { label: "AP Invoice Matching", pct: 89, color: "#22c55e", status: "Good" },
];

/* ── Pain points that hit CFOs in the gut ─────────────────── */
const PAIN_STATS = [
  {
    icon: TrendingDown,
    stat: "23%",
    label: "of GC revenue leaks from dirty data",
    color: "#ef4444",
    glow: "rgba(239,68,68,0.12)",
  },
  {
    icon: Users,
    stat: "67",
    label: "avg duplicate vendors in a $50M+ GC",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.12)",
  },
  {
    icon: FileWarning,
    stat: "4.2 days",
    label: "lost per month-end close to bad data",
    color: "#FF6200",
    glow: "rgba(255,98,0,0.12)",
  },
  {
    icon: Layers,
    stat: "38%",
    label: "of cost codes map to wrong GL accounts",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.12)",
  },
];

/* ── What the diagnostic uncovers ─────────────────────────── */
const UNCOVERS = [
  {
    icon: Database,
    title: "Data Quality Score",
    body: "A 0–100 grade across 6 dimensions: GL integrity, vendor hygiene, cost code mapping, AR reliability, AP matching, and sync latency.",
    color: "#3b82f6",
  },
  {
    icon: XCircle,
    title: "Every Gap, Named",
    body: "Orphaned cost codes. Unmatched invoices. GL accounts with no activity. Vendors billed under 3 different names. We find them all.",
    color: "#ef4444",
  },
  {
    icon: AlertTriangle,
    title: "What It's Costing You",
    body: "We translate data problems into dollars — how much you're leaking in missed collections, duplicate payments, and month-end overtime.",
    color: "#f59e0b",
  },
  {
    icon: CheckCircle2,
    title: "Prioritized Fix Plan",
    body: "A ranked list of what to clean first, estimated effort, and whether Jake can automate the fix or if it needs a human decision.",
    color: "#22c55e",
  },
];

/* ── Process steps ────────────────────────────────────────── */
const STEPS = [
  { num: "01", title: "Schedule", body: "30-min call. We ask about your ERP, your pain, your goals." },
  { num: "02", title: "Connect", body: "Read-only connection to your ERP. Your data never leaves your environment." },
  { num: "03", title: "Scan", body: "Jake runs 200+ automated checks across your GL, AR, AP, job cost, and vendor tables." },
  { num: "04", title: "Report", body: "Full diagnostic delivered in 48 hours. Data Quality Score, gap map, fix plan, and dollar impact." },
];

export function DiagnosticPageClient() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* ── HERO: Split layout ──────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: pitch */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6200]/30 bg-[#FF6200]/10 text-[#FF6200] text-sm font-medium mb-6">
                <Stethoscope className="w-3.5 h-3.5" />
                Free Data Diagnostic
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                Your ERP has{" "}
                <span className="gradient-text-orange">secrets.</span>
                <br />
                <span className="text-slate-400 text-2xl sm:text-3xl md:text-4xl">Jake will find every one.</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Duplicate vendors. Orphaned cost codes. AR that says one thing while
                your bank says another. Every construction company has data rot — most
                just don&apos;t know how much it&apos;s costing them.
              </p>
            </motion.div>

            {/* Animated data health preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-sm">
                  Sample Data Health Scan
                </h3>
                <span className="text-xs font-mono text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-0.5 rounded-full">
                  Score: 47 / 100
                </span>
              </div>
              <div className="space-y-3">
                {DATA_HEALTH_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-400 text-xs">{item.label}</span>
                      <span
                        className="text-xs font-mono font-medium"
                        style={{ color: item.color }}
                      >
                        {item.status}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.pct}%` }}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-slate-600 text-[10px] mt-3 text-center italic">
                Actual results from a $65M general contractor. Anonymized.
              </p>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              {[
                { icon: Clock, text: "30-min call" },
                { icon: Shield, text: "Read-only access" },
                { icon: Zap, text: "Results in 48 hrs" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-1.5 text-slate-400 text-xs"
                  >
                    {i > 0 && <span className="text-slate-700 mx-1">/</span>}
                    <Icon className="w-3 h-3 text-[#FF6200]" />
                    {item.text}
                  </div>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-slate-500 text-sm"
            >
              Want a full product walkthrough instead?{" "}
              <Link href="/demo" className="text-[#FF6200] hover:text-[#ff8533] underline">
                Book a 30-minute demo
              </Link>
            </motion.p>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DiagnosticForm />
          </motion.div>
        </div>
      </div>

      {/* ── PAIN STATS: Numbers that hurt ───────────────────── */}
      <section className="mt-24 sm:mt-32 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">
              The cost of{" "}
              <span className="text-red-400">dirty data</span>
              {" "}in construction
            </h2>
            <p className="text-slate-400 text-base max-w-lg mx-auto">
              These aren&apos;t hypotheticals. This is what we find in every diagnostic.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PAIN_STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 text-center"
                >
                  <div
                    className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{ background: s.glow, border: `1px solid ${s.color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black mb-1" style={{ color: s.color }}>
                    {s.stat}
                  </div>
                  <p className="text-slate-400 text-xs leading-snug">{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT THE DIAGNOSTIC UNCOVERS ─────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#FF6200]/30 bg-[#FF6200]/10 text-[#FF6200] text-sm font-medium mb-4">
              What You Get
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
              A full MRI of your{" "}
              <span className="gradient-text-orange">financial data.</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Not a sales pitch disguised as an audit. A real technical diagnostic — the kind
              your controller wishes someone would actually do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {UNCOVERS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl p-6 border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                  <div
                    className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${item.color}50, transparent)` }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS: 4 steps ────────────────────────────── */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6200]/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
              Four steps. Zero risk.
            </h2>
            <p className="text-slate-400">You keep your data. We give you the truth about it.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-5"
              >
                <span className="text-[#FF6200]/30 text-4xl font-black absolute top-4 right-5 leading-none">
                  {step.num}
                </span>
                <h4 className="text-white font-bold text-lg mb-2 mt-1">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
              You already suspect your data is messy.
              <br />
              <span className="gradient-text-orange">Now find out what it&apos;s costing you.</span>
            </h2>
            <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
              The diagnostic is free. The report is yours to keep — whether you
              ever use Jake or not. No strings. No catch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF6200] hover:bg-[#e85800] text-white font-bold text-lg transition-all shadow-xl shadow-[#FF6200]/25 hover:shadow-[#FF6200]/40 hover:-translate-y-0.5"
              >
                <Stethoscope className="w-5 h-5" />
                Schedule Free Diagnostic
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                href="/data-rehab"
                className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-slate-200 hover:text-white hover:border-white/30 font-semibold transition-all hover:bg-white/5"
              >
                Learn about Data Rehab
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
