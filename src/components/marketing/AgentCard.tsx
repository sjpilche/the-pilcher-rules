"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { type Agent } from "@/lib/agents";
import { cn } from "@/lib/utils";

interface AgentCardProps {
  agent: Agent;
  index?: number;
  compact?: boolean;
}

export function AgentCard({ agent, index = 0, compact = false }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div
        className={cn(
          "group relative rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col h-full",
          "hover:-translate-y-1 hover:shadow-2xl",
          compact ? "p-5" : "p-6"
        )}
        style={{
          background: agent.bgColor,
          borderColor: agent.borderColor,
          boxShadow: `0 0 0 1px ${agent.borderColor}`,
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
          style={{ boxShadow: `inset 0 0 40px ${agent.glowColor}` }}
        />

        {/* Status badge */}
        {agent.status === "production" && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-medium">Live</span>
          </div>
        )}
        {agent.status === "beta" && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-400 text-xs font-medium">Beta</span>
          </div>
        )}

        {/* Icon */}
        <div
          className="text-3xl mb-4 w-12 h-12 flex items-center justify-center rounded-xl"
          style={{ background: `${agent.color}18` }}
        >
          {agent.icon}
        </div>

        {/* Category label */}
        <div
          className="text-xs font-semibold uppercase tracking-wider mb-2"
          style={{ color: agent.color }}
        >
          {agent.category}
        </div>

        {/* Name */}
        <h3 className="text-white font-bold text-lg mb-2 leading-tight">
          {agent.name}
        </h3>

        {/* Description — 1-sentence tagline */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {agent.tagline}
        </p>

        {/* Metrics — always show top 2 */}
        {!compact && (
          <div className="flex flex-wrap gap-4 mb-5">
            {agent.metrics.slice(0, 2).map((m) => (
              <div key={m.label} className="flex flex-col">
                <span
                  className="text-sm font-bold"
                  style={{ color: agent.color }}
                >
                  {m.value}
                </span>
                <span className="text-xs text-slate-500">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Spacer to push buttons to bottom */}
        <div className="flex-1" />

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-2 relative z-10">
          {/* Watch demo — placeholder link */}
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border"
            style={{
              color: agent.color,
              borderColor: `${agent.color}30`,
              background: `${agent.color}08`,
            }}
            onClick={(e) => {
              e.stopPropagation();
              // Placeholder — will link to actual demo video per agent
              window.open(`/agents/${agent.slug}#demo`, "_self");
            }}
          >
            <Play className="w-3 h-3" />
            45-sec demo
          </button>

          {/* Learn more */}
          <Link
            href={`/agents/${agent.slug}`}
            className="flex items-center gap-1 text-xs font-semibold transition-all duration-200 group/link hover:gap-2"
            style={{ color: agent.color }}
          >
            Learn more
            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
