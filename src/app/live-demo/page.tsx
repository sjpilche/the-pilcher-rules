import type { Metadata } from "next";
import Link from "next/link";
import { InteractiveDemo } from "@/components/demo/InteractiveDemo";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Live Demo",
  description:
    "Interactive demo of The Pilcher Rules CFO AI Suite — explore CFO Insights, AR Collections, Job Costing, and Anomaly Detection with real sample data.",
};

export default function LiveDemoPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Interactive Demo
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Click around.{" "}
            <span className="gradient-text">See what you&apos;ve been missing.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Four live agent dashboards. Sample data. No login required.
            This is what your CFO command center looks like.
          </p>
        </div>

        {/* Demo */}
        <InteractiveDemo />

        {/* CTA below demo */}
        <div className="mt-14 text-center">
          <p className="text-slate-400 mb-6 text-lg">
            Ready to see this with <strong className="text-white">your</strong> data?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:-translate-y-0.5 shadow-xl shadow-blue-600/25"
            >
              Schedule a Real Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-slate-200 hover:text-white hover:border-white/30 font-semibold transition-all hover:bg-white/5"
            >
              Explore All 12 Agents
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
