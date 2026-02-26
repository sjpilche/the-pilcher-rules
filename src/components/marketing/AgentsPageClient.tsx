"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { AGENTS, CATEGORIES, type AgentCategory } from "@/lib/agents";
import { AgentCard } from "./AgentCard";
import { cn } from "@/lib/utils";

const FILTER_TABS: { label: string; value: AgentCategory | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Collections", value: "Collections" },
  { label: "Payments", value: "Payments" },
  { label: "Analytics", value: "Analytics" },
  { label: "Intelligence", value: "Intelligence" },
  { label: "Compliance", value: "Compliance" },
  { label: "Operations", value: "Operations" },
];

export function AgentsPageClient() {
  const [activeCategory, setActiveCategory] = useState<AgentCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let results = AGENTS;

    // Category filter
    if (activeCategory !== "All") {
      results = results.filter((a) => a.category === activeCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.tagline.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.capabilities.some((c) => c.toLowerCase().includes(q))
      );
    }

    return results;
  }, [activeCategory, searchQuery]);

  // Count agents per category for badge numbers
  const countByCategory = useMemo(() => {
    const counts: Record<string, number> = { All: AGENTS.length };
    for (const cat of CATEGORIES) {
      counts[cat] = AGENTS.filter((a) => a.category === cat).length;
    }
    return counts;
  }, []);

  return (
    <div>
      {/* Search bar */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          placeholder="Search agents by name, capability, or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#FF6200]/40 focus:ring-1 focus:ring-[#FF6200]/20 transition-all"
        />
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveCategory(tab.value)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2",
              activeCategory === tab.value
                ? "bg-[#FF6200] text-white shadow-lg shadow-[#FF6200]/25"
                : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
            )}
          >
            {tab.label}
            <span
              className={cn(
                "text-xs px-1.5 py-0.5 rounded-full",
                activeCategory === tab.value
                  ? "bg-white/20 text-white"
                  : "bg-white/5 text-slate-500"
              )}
            >
              {countByCategory[tab.value]}
            </span>
          </button>
        ))}
      </div>

      {/* Results count */}
      {searchQuery.trim() && (
        <p className="text-center text-slate-500 text-sm mb-6">
          {filtered.length} agent{filtered.length !== 1 ? "s" : ""} found
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </p>
      )}

      {/* Agent grid — 1 col mobile, 2 col tablet, 3 col desktop */}
      {filtered.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((agent, i) => (
            <AgentCard key={agent.slug} agent={agent} index={i} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg mb-2">No agents match your search.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="text-[#FF6200] hover:text-[#ff8533] text-sm font-medium transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
