"use client";

import { motion } from "framer-motion";
import { Plug, Settings, Zap } from "lucide-react";

const STEPS = [
  {
    day: "Day 1",
    icon: Plug,
    title: "We connect to your systems",
    body: "We map to your existing ERP, accounting software, or bank feeds. QuickBooks, Sage, Procore, Vista — we've done it. You don't move data. We come to it.",
    color: "#3b82f6",
  },
  {
    day: "Days 2–3",
    icon: Settings,
    title: "Agents are configured to your business",
    body: "We set your collections thresholds, margin targets, approval rules, and lien state requirements. Jake learns your business before he starts acting on it.",
    color: "#8b5cf6",
  },
  {
    day: "Day 4+",
    icon: Zap,
    title: "Jake starts working",
    body: "Collections follow-ups go out. Alerts start firing. Your team stops doing the manual work. You start seeing what was always happening — you just couldn't see it.",
    color: "#10b981",
  },
];

export function HowFastItStarts() {
  return (
    <section className="py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-4">
            Getting Started
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Up and running in days.
            <br />
            <span className="gradient-text">Not months.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We&apos;ve seen too many &ldquo;implementations&rdquo; become 6-month IT projects.
            Jake is different. Here&apos;s how it actually goes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-green-500/30" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.day}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center lg:items-center"
                >
                  {/* Icon circle */}
                  <div
                    className="relative w-24 h-24 rounded-full flex items-center justify-center mb-6 border"
                    style={{
                      background: `radial-gradient(circle, ${step.color}15, transparent)`,
                      borderColor: `${step.color}30`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: step.color }} />
                    {/* Step number */}
                    <span
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs font-black flex items-center justify-center text-white"
                      style={{ background: step.color }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Day label */}
                  <span
                    className="text-xs font-semibold tracking-widest uppercase mb-2"
                    style={{ color: step.color }}
                  >
                    {step.day}
                  </span>

                  <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/8 text-slate-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            Most clients see their first Jake-generated action on day 4. Average time to first recovered dollar: 11 days.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
