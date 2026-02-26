"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Shield, Eye, Zap, TrendingUp } from "lucide-react";
import { JakeMascot } from "@/components/mascot/JakeMascot";

const PRINCIPLES = [
  {
    number: "01",
    icon: Shield,
    title: "Construction-native, not construction-adjacent.",
    body: "We didn't adapt a generic finance tool for construction. We built from the ground up — AIA billing, lien rights, job costing, WIP — these aren't add-ons. They're the foundation.",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    number: "02",
    icon: Eye,
    title: "AI that explains itself.",
    body: "Every insight the agents surface comes with a reason. We don't do black-box recommendations. You'll always know why the system flagged something — and what to do about it.",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    number: "03",
    icon: Zap,
    title: "The CFO is still in command.",
    body: "These agents work for you. The CFO Manager enforces your policy rules, your approval authorities, your governance. The AI amplifies your judgment — it doesn't replace it.",
    color: "#10b981",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Ruthless about ROI.",
    body: "Every one of Jake's capabilities has a measurable impact. We track it. We show it. If Jake isn't paying for himself within 90 days, we fix it. That's our guarantee.",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.15)",
  },
];

const STATS = [
  { value: "18", label: "Specialized agents" },
  { value: "48", label: "Detection rules" },
  { value: "85.3%", label: "ML job cost accuracy" },
  { value: "24/7", label: "Always watching" },
];

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0, 0, 1] },
  }),
};

export function AboutClient() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              About Jake
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tight"
          >
            The AI operations
            <br />
            <span className="gradient-text">layer for real businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-300 text-xl leading-relaxed max-w-3xl"
          >
            Jake is built for companies that want real automation — not experiments.
          </motion.p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fade}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-slate-500 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Origin story ── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* left — pull quote */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <div className="relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/10" />
                <div className="relative glass rounded-2xl p-10">
                  <div className="text-6xl text-blue-500/30 font-black leading-none mb-4">&ldquo;</div>
                  <p className="text-white text-xl font-semibold leading-relaxed mb-6">
                    Think of Jake as the operations analyst that never sleeps and never forgets to follow up.
                  </p>
                  <div className="h-px bg-white/10 mb-6" />
                  <p className="text-slate-400 text-sm">
                    Built by CFOs, operators, and finance engineers who spent years trying to bring AI into live businesses — and kept hitting the same wall.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* right — body copy */}
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              {[
                "Jake was designed by CFOs, operators, and finance engineers who spent years trying to bring AI into live businesses and ran into the same wall: tools could analyze data, but they couldn't responsibly run alongside a company's cash, customers, and decisions.",
                "So we built Jake to act like a disciplined finance team member.",
                "Jake connects to your systems, understands how the business operates, and runs specialized agents that monitor collections, margins, cash exposure, and operational risk in real time. Instead of dashboards waiting to be checked, the system actively watches the business and flags issues before they become surprises.",
                "The goal isn't to replace people — it's to remove manual oversight. Owners and managers stop chasing information and start receiving decisions that are already organized, explained, and prioritized.",
                "Jake exists to make AI usable inside an operating company. No prompt engineering. No fragile workflows. No black-box actions.",
                "It's what experienced finance teams build internally after complexity forces them to — standardized so you don't have to build it yourself.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fade}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-400 text-sm font-medium mb-4">
              The rules we live by
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Principles, not promises.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.number}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fade}
                  className="group relative rounded-2xl p-8 border border-white/8 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300"
                  style={{ boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05)` }}
                >
                  {/* number watermark */}
                  <div
                    className="absolute top-6 right-8 text-6xl font-black leading-none select-none transition-opacity duration-300 opacity-20 group-hover:opacity-30"
                    style={{ color: p.color }}
                  >
                    {p.number}
                  </div>

                  {/* icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: p.glow, border: `1px solid ${p.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3 pr-12">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>

                  {/* bottom accent */}
                  <div
                    className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${p.color}60, transparent)` }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-400 text-sm font-medium mb-4">
              Proof It Works
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              What CFOs are saying about Jake.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "We had a $300k reconciliation gap between AR and GL that nobody could explain. Within 6 weeks of Data Rehab, we identified the root cause and closed it. Month-end close dropped from 10 days to 5.",
                author: "CFO, $180M Regional GC",
                metric: "DSO reduced by 4.2 days",
              },
              {
                quote:
                  "Our finance team was spending 3 days every month just chasing reconciliation gaps. Now the Reconciliation Engine handles it automatically. We found real work for them to do instead.",
                author: "Controller, Subcontractor ($65M)",
                metric: "60% time saved on recons",
              },
              {
                quote:
                  "The diagnostic showed us data problems we didn't even know we had. We weren't going to fix them ourselves—the diagnostic made the business case for us. That was worth the fee alone.",
                author: "Finance Director, Multi-Entity GC",
                metric: "Diagnostic ROI: 3 months",
              },
              {
                quote:
                  "Jake handles our 1,200 invoices per month with 99.2% accuracy. The 0.8% exception queue actually gets reviewed instead of sitting in someone's inbox. It's just better process.",
                author: "AP Manager, PE-Backed Portfolio",
                metric: "98.5% first-touch processing",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fade}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="text-4xl text-slate-600 mb-4">"</div>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-start justify-between pt-6 border-t border-white/10">
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                  </div>
                  <p className="text-amber-400 font-semibold text-sm whitespace-nowrap">
                    {testimonial.metric}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-visible"
          >
            {/* Jake — already on the job */}
            <div className="absolute -bottom-2 right-6 hidden lg:block rotate-2 z-10">
              <JakeMascot quote="Already am." size={76} bubbleSide="left" />
            </div>

            {/* gradient bg */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 via-violet-600/10 to-transparent" />
            <div className="absolute inset-0 border border-blue-500/20 rounded-3xl" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/15 blur-[80px]" />

            <div className="relative px-10 py-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Ready when you are
              </div>
              <h3 className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
                Ready to put Jake to work?
              </h3>
              <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
                30 minutes. Your data. See exactly what Jake would flag,
                fix, and optimize in your construction financials — starting today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/30"
                >
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/agents"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-slate-300 hover:text-white hover:border-white/30 font-medium transition-all hover:bg-white/5"
                >
                  Explore the agents
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
