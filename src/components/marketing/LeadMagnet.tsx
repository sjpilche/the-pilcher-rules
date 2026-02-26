"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  Sparkles,
  Shield,
  BarChart3,
  Target,
} from "lucide-react";

const SCORECARD_FEATURES = [
  {
    icon: BarChart3,
    label: "50-point AI readiness audit",
    description: "ERP health, data quality, reconciliation gaps",
  },
  {
    icon: Target,
    label: "Priority action plan",
    description: "Ranked fixes with estimated ROI for each",
  },
  {
    icon: Shield,
    label: "Vendor-neutral scoring",
    description: "Works with any ERP — Sage, Viewpoint, BC, Procore",
  },
  {
    icon: Sparkles,
    label: "AI deployment timeline",
    description: "Realistic week-by-week rollout based on your score",
  },
];

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    // Placeholder — wire to your email API (Resend, ConvertKit, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl overflow-hidden"
    >
      {/* Outer glow */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#FF6200]/30 via-[#FF6200]/10 to-blue-500/20 pointer-events-none" />

      <div className="relative rounded-3xl bg-gradient-to-br from-[#0f1318] via-[#0d1117] to-[#0f1318] border border-white/[0.06] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: content */}
          <div className="p-5 sm:p-8 md:p-10 lg:p-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6200]/10 border border-[#FF6200]/25 mb-6">
              <FileSpreadsheet className="w-3.5 h-3.5 text-[#FF6200]" />
              <span className="text-[11px] font-bold text-[#FF6200] uppercase tracking-wider">
                Free Download
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
              2026 Construction CFO
              <br />
              <span className="gradient-text-orange">AI Readiness Scorecard</span>
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
              The same 50-point scoring framework we use in our free diagnostic —
              now available as a self-serve scorecard. Grade your ERP data quality,
              reconciliation maturity, and AI deployment readiness in under 15 minutes.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-8">
              {SCORECARD_FEATURES.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6200]/10 border border-[#FF6200]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <f.icon className="w-4 h-4 text-[#FF6200]" />
                  </div>
                  <div>
                    <span className="text-white text-sm font-semibold block">
                      {f.label}
                    </span>
                    <span className="text-slate-500 text-xs">
                      {f.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-slate-600 text-xs">
              No spam. No phone calls. Just the scorecard PDF.
            </p>
          </div>

          {/* Right: form */}
          <div className="flex items-center justify-center p-5 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-[#FF6200]/[0.04] to-blue-500/[0.03] border-t lg:border-t-0 lg:border-l border-white/[0.06]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Check your inbox.
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                  The 2026 AI Readiness Scorecard is on its way.
                  Look for an email from <strong className="text-white">jake@jakecfo.com</strong>.
                </p>
              </motion.div>
            ) : (
              <div className="w-full max-w-sm">
                {/* Preview mockup */}
                <div className="relative mx-auto mb-8 w-48">
                  <div className="aspect-[8.5/11] rounded-lg bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-white/10 shadow-2xl p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded bg-[#FF6200]/30" />
                      <div className="h-2 w-16 rounded bg-white/10" />
                    </div>
                    <div className="h-1.5 w-full rounded bg-white/5 mb-1.5" />
                    <div className="h-1.5 w-3/4 rounded bg-white/5 mb-3" />
                    <div className="grid grid-cols-2 gap-1.5 mb-3">
                      {[1, 2, 3, 4].map((n) => (
                        <div key={n} className="aspect-square rounded bg-[#FF6200]/[0.06] border border-[#FF6200]/10" />
                      ))}
                    </div>
                    <div className="flex-1" />
                    <div className="h-1.5 w-2/3 rounded bg-white/5" />
                  </div>
                  {/* Float badge */}
                  <div className="absolute -bottom-3 -right-3 px-2.5 py-1.5 rounded-lg bg-[#FF6200] shadow-lg shadow-[#FF6200]/30 text-white text-[10px] font-bold">
                    PDF
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="lead-email" className="text-slate-400 text-xs font-medium block mb-1.5">
                      Work email
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      required
                      placeholder="you@yourcompany.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#FF6200]/40 focus:ring-1 focus:ring-[#FF6200]/20 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF6200] hover:bg-[#e85800] disabled:opacity-60 text-white font-bold text-sm transition-all shadow-lg shadow-[#FF6200]/25 hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Download Free Scorecard
                      </>
                    )}
                  </button>
                </form>

                <p className="text-center text-slate-600 text-[10px] mt-3">
                  By downloading you agree to our{" "}
                  <a href="/legal/privacy" className="underline hover:text-slate-400 transition-colors">privacy policy</a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
