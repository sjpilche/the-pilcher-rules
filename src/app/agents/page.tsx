import type { Metadata } from "next";
import { AgentsPageClient } from "@/components/marketing/AgentsPageClient";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export const metadata: Metadata = {
  title: "All 18 Agents",
  description:
    "Explore all 18 AI agents in the Jake suite — from AR Collections and ERP Integration to Financial Controls, Board-Ready Reporting, and Data Trust. They talk to each other.",
};

export default function AgentsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#FF6200]/30 bg-[#FF6200]/10 text-[#FF6200] text-sm font-medium mb-4">
            The Full Suite
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5">
            18 Purpose-Built
            <br />
            <span className="gradient-text-orange">Construction Agents.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            They talk to each other. Every agent is a specialist — together they
            form a complete CFO intelligence layer covering every dollar that
            flows through your construction business.
          </p>
        </div>

        <AgentsPageClient />
      </div>

      {/* Consistent CTA at bottom of every page */}
      <FinalCTA />
    </div>
  );
}
