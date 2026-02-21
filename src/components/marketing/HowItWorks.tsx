"use client";

import { motion } from "framer-motion";
import { Database, Cpu, BarChart3 } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Database,
    title: "Connect Your Data",
    description:
      "Point the suite at your existing ERP, accounting system, or bank feeds. We map your data schema in hours, not weeks. No rip-and-replace.",
    color: "#3b82f6",
    details: ["Azure PostgreSQL native", "REST API connectors", "CSV/Excel imports", "Real-time sync"],
  },
  {
    number: "02",
    icon: Cpu,
    title: "Agents Get to Work",
    description:
      "12 specialized agents analyze your data continuously. ML models classify, anomaly engines scan, and the CFO Manager coordinates it all through a governance layer.",
    color: "#8b5cf6",
    details: ["48 anomaly rules active", "ML cost classification", "Policy enforcement", "Real-time processing"],
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Alerts, Explanations, and Next Steps",
    description:
      "Jake flags what needs attention and tells you why — cash exposure, overdue collections, margin slippage — before it becomes a problem. No dashboard-diving required.",
    color: "#10b981",
    details: ["Plain-English explanations", "Priority-ranked alerts", "Suggested next actions", "Escalation when it matters"],
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            From messy data to CFO clarity
            <br />
            <span className="gradient-text">in three steps.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No six-month implementation. No 200-page consultant deck.
            Just connect, activate, and watch the agents work.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative glass rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Step number */}
              <div
                className="text-6xl font-black mb-6 leading-none"
                style={{ color: `${step.color}25` }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${step.color}18`, border: `1px solid ${step.color}30` }}
              >
                <step.icon className="w-6 h-6" style={{ color: step.color }} />
              </div>

              <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Detail list */}
              <ul className="space-y-2">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-sm text-slate-400">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: step.color }}
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
