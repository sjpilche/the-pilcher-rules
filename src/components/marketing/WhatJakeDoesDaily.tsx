"use client";

import { motion } from "framer-motion";
import { Mail, AlertTriangle, FileText, Shield, DollarSign, CheckCircle } from "lucide-react";

const ACTIONS = [
  {
    time: "8:02 AM",
    icon: Mail,
    title: "AR follow-up sent",
    body: "Jake identified 3 invoices past 45 days for Thornton GC and sent a payment reminder with the invoice attached. No one on your team touched it.",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.12)",
  },
  {
    time: "9:14 AM",
    icon: AlertTriangle,
    title: "Margin alert",
    body: "Job #4471 (Westside Office Build) crossed below 8% gross margin. Jake flagged it, explained why (labor overrun in electrical), and suggested a change order.",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.12)",
  },
  {
    time: "11:30 AM",
    icon: FileText,
    title: "Lien deadline",
    body: "A preliminary notice deadline for Mesa County project expires in 6 days. Jake created the notice draft and queued it for your review.",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.12)",
  },
  {
    time: "2:15 PM",
    icon: Shield,
    title: "Anomaly detected",
    body: "AP invoice from Acme Supply is 31% above their 90-day average. Jake held it for approval and flagged the line item.",
    color: "#ef4444",
    glow: "rgba(239,68,68,0.12)",
  },
  {
    time: "4:00 PM",
    icon: DollarSign,
    title: "Cash position updated",
    body: "Jake updated your 30-day cash forecast based on today's collections and upcoming draws. $340K expected by Friday.",
    color: "#10b981",
    glow: "rgba(16,185,129,0.12)",
  },
  {
    time: "End of day",
    icon: CheckCircle,
    title: "Close prep",
    body: "Jake reconciled 94% of GL entries automatically. 3 items flagged for human review. Month-end is 2 days away and you're already mostly done.",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.12)",
  },
];

export function WhatJakeDoesDaily() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            A Day in the Life
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            What Jake actually does
            <br />
            <span className="gradient-text">while you&apos;re running the business.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Not reports. Not dashboards. Decisions already made, issues already flagged,
            follow-ups already sent.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACTIONS.map((action, i) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.time}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative rounded-2xl p-6 border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300"
              >
                {/* Time badge */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full"
                    style={{ color: action.color, background: action.glow, border: `1px solid ${action.color}25` }}
                  >
                    {action.time}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: action.glow, border: `1px solid ${action.color}25` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: action.color }} />
                  </div>
                </div>

                <h3 className="text-white font-semibold text-base mb-2">{action.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{action.body}</p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${action.color}50, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          Every one of these happened without a single person on your team initiating it.
        </motion.p>
      </div>
    </section>
  );
}
