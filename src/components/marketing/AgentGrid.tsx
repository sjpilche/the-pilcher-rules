"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AGENTS, CATEGORIES, COMPANY_TYPES, type AgentCategory, type CompanyType } from "@/lib/agents";
import { AgentCard } from "./AgentCard";
import { cn } from "@/lib/utils";

interface AgentGridProps {
  showFilter?: boolean;
  limit?: number;
}

type FilterMode = "role" | "company";

export function AgentGrid({ showFilter = false, limit }: AgentGridProps) {
  const [filterMode, setFilterMode] = useState<FilterMode>("role");
  const [activeCategory, setActiveCategory] = useState<AgentCategory | "All">("All");
  const [activeCompanyType, setActiveCompanyType] = useState<CompanyType | "All">("All");

  const filtered =
    filterMode === "role"
      ? activeCategory === "All"
        ? AGENTS
        : AGENTS.filter((a) => a.category === activeCategory)
      : activeCompanyType === "All"
        ? AGENTS
        : AGENTS.filter((a) => a.companyTypes.includes(activeCompanyType as CompanyType));

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {showFilter && (
        <div className="mb-10">
          {/* Filter mode toggle */}
          <div className="flex gap-2 justify-center mb-6">
            <button
              onClick={() => {
                setFilterMode("role");
                setActiveCategory("All");
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                filterMode === "role"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
              )}
            >
              By Role
            </button>
            <button
              onClick={() => {
                setFilterMode("company");
                setActiveCompanyType("All");
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                filterMode === "company"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
              )}
            >
              By Company Type
            </button>
          </div>

          {/* Category or Company Type filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filterMode === "role"
              ? (["All", ...CATEGORIES] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      activeCategory === cat
                        ? "bg-slate-400 text-white shadow-lg shadow-slate-400/25"
                        : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
                    )}
                  >
                    {cat}
                  </button>
                ))
              : (["All", ...COMPANY_TYPES] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveCompanyType(type)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      activeCompanyType === type
                        ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25"
                        : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
                    )}
                  >
                    {type}
                  </button>
                ))}
          </div>
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
