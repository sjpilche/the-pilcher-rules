"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

/*
 * TODO: Replace placeholder cards with real redacted assets.
 * Required from team:
 *   1. Redacted AI Readiness Diagnostic preview (PDF screenshot or image)
 *   2. Before/after reconciliation sample (side-by-side table or annotated export)
 *   3. Trial daily summary screenshot (one day from a real 1-week trial)
 *   4. Quality gate snapshot (showing gates passed before go-live)
 *
 * Until assets are available, this section shows representative placeholders
 * with honest framing ("here's what you'll see") rather than fake screenshots.
 */

const ARTIFACTS = [
  {
    label: "AI Readiness Diagnostic",
    description:
      "A scored report — data quality, AR integrity, GL gaps, ERP anomalies. You see exactly what's broken before spending a dollar.",
    tag: "Free · Delivered in 48 hrs",
    color: "#3b82f6",
    // TODO: Replace with actual redacted diagnostic preview image
    placeholder: true,
  },
  {
    label: "Before / After: Reconciliation",
    description:
      "Side-by-side of your GL vs. AR vs. bank before Data Rehab, and the clean version after. Every gap closed and documented.",
    tag: "Delivered with Data Rehab",
    color: "#f59e0b",
    // TODO: Replace with actual redacted reconciliation sample
    placeholder: true,
  },
  {
    label: "Trial Daily Summary",
    description:
      "What Jake actually did on Day 4 of a real 1-week trial — follow-ups sent, anomalies flagged, cash position updated. No dashboards. Just actions.",
    tag: "From 1-week trial",
    color: "#10b981",
    // TODO: Replace with actual daily summary screenshot
    placeholder: true,
  },
  {
    label: "Quality Gate Snapshot",
    description:
      "The 27-point checklist Jake runs before any agent goes live on your data. Every gate must pass before the first workflow fires.",
    tag: "Trust & Governance",
    color: "#8b5cf6",
    // TODO: Replace with actual quality gate output screenshot
    placeholder: true,
  },
];

export function ProofArtifacts() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-sm font-medium mb-6">
            <FileText className="w-3.5 h-3.5" />
            See what &ldquo;real&rdquo; looks like
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-[1.1]">
            Don&apos;t take our word for it.
            <br />
            <span className="gradient-text-orange">Look at the output.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Four deliverables. All redacted. All real. This is what you get before you
            commit to anything.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {ARTIFACTS.map((artifact, i) => (
            <motion.div
              key={artifact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden group hover:border-slate-700 transition-colors"
            >
              {/* Placeholder preview area — replace with <Image> when assets available */}
              <div
                className="h-40 flex items-center justify-center border-b border-slate-800"
                style={{ background: `${artifact.color}08` }}
              >
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{ background: `${artifact.color}20`, border: `1px solid ${artifact.color}30` }}
                  >
                    <FileText className="w-5 h-5" style={{ color: artifact.color }} />
                  </div>
                  {/* TODO: Replace this div with:
                    <Image src="/proof/diagnostic-preview.png" alt="..." fill className="object-cover" />
                  */}
                  <p className="text-xs font-medium" style={{ color: artifact.color }}>
                    Sample coming soon
                  </p>
                </div>
              </div>

              <div className="p-5">
                <div
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                  style={{ background: `${artifact.color}15`, color: artifact.color }}
                >
                  {artifact.tag}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{artifact.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{artifact.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center"
        >
          <Link
            href="/diagnostic"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF6200] hover:bg-[#e85800] text-white font-bold text-base transition-all duration-200 shadow-xl shadow-[#FF6200]/20 hover:-translate-y-0.5"
          >
            Start with the free diagnostic
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <p className="text-slate-600 text-sm mt-3">
            One call. One export. You see the score before you spend anything.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
