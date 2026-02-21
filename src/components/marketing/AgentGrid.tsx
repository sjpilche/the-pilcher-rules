"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AGENTS, CATEGORIES, type AgentCategory } from "@/lib/agents";
import { AgentCard } from "./AgentCard";
import { cn } from "@/lib/utils";

interface AgentGridProps {
  showFilter?: boolean;
  limit?: number;
}

export function AgentGrid({ showFilter = false, limit }: AgentGridProps) {
  const [activeCategory, setActiveCategory] = useState<AgentCategory | "All">("All");

  const filtered =
    activeCategory === "All"
      ? AGENTS
      : AGENTS.filter((a) => a.category === activeCategory);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {showFilter && (
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {(["All", ...CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {displayed.map((agent, i) => (
          <AgentCard key={agent.slug} agent={agent} index={i} />
        ))}
      </motion.div>
    </div>
  );
}
