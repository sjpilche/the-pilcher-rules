import type { Metadata } from "next";
import { AgentGrid } from "@/components/marketing/AgentGrid";

export const metadata: Metadata = {
  title: "All Agents",
  description:
    "Explore all 17 AI agents in the Jake CFO suite — from AR Collections and ERP Integration to Financial Controls and Data Trust.",
};

export default function AgentsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            The Full Suite
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5">
            18 agents.{" "}
            <span className="gradient-text">One platform.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Each agent is a specialist. Together, they form a complete CFO
            intelligence layer — covering every dollar that flows through your
            construction business.
          </p>
        </div>

        <AgentGrid showFilter />
      </div>
    </div>
  );
}
