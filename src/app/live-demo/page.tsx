import type { Metadata } from "next";
import Link from "next/link";
import { InteractiveDemo } from "@/components/demo/InteractiveDemo";
import { ArrowRight, AlertCircle } from "lucide-react";

/* CHANGED: branding → "Jake", removed "The Pilcher Rules" */
export const metadata: Metadata = {
  title: "Live Demo",
  description:
    "Interactive demo of the Jake AI CFO Suite — explore CFO Insights, AR Collections, Job Costing, and Anomaly Detection with sample construction finance data.",
};

export default function LiveDemoPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── HEADER ── */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#FF6200]/30 bg-[#FF6200]/10 text-[#FF6200] text-sm font-medium mb-4">
            Interactive Demo
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Click around.{" "}
            <span className="gradient-text-orange">See what you&apos;ve been missing.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Four live agent dashboards. Sample data. No login required.
            This is what your CFO command center looks like.
          </p>
        </div>

        {/* ── ADDED: Top CTA + Disclaimer bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 px-4 py-4 rounded-xl bg-[#FF6200]/5 border border-[#FF6200]/20">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#FF6200] flex-shrink-0" />
            <p className="text-slate-300 text-sm">
              <span className="text-white font-semibold">This is sample data.</span>{" "}
              Want to see this with <em>your</em> numbers? We&apos;ll run it on your books — free.
            </p>
          </div>
          <Link
            href="/demo"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF6200] hover:bg-[#e85800] text-white text-sm font-bold transition-all shadow-lg shadow-[#FF6200]/25"
          >
            Start Free Diagnostic
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── DEMO ── */}
        <InteractiveDemo />

        {/* ── ADDED: Bottom CTA — stronger, bigger ── */}
        <div className="mt-14 rounded-2xl border border-[#FF6200]/20 p-10 bg-gradient-to-b from-[#FF6200]/5 to-transparent text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to see this with{" "}
            <span className="gradient-text-orange">your</span> data?
          </h2>
          <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Everything above runs on sample data. We&apos;ll connect to your ERP and
            show you what Jake finds in your actual books — AR risk, margin leaks,
            anomalies, cash position. Free diagnostic. No commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF6200] hover:bg-[#e85800] text-white font-bold transition-all hover:-translate-y-0.5 shadow-xl shadow-[#FF6200]/25"
            >
              Start Free Diagnostic
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-slate-200 hover:text-white hover:border-white/30 font-semibold transition-all hover:bg-white/5"
            >
              Explore All 18 Agents
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
