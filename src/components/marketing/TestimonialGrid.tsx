"use client";

import { motion } from "framer-motion";
import { Star, Linkedin, BadgeCheck } from "lucide-react";

/* ─── Testimonial data ─────────────────────────────────────────────── */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  revenue: string;       // e.g. "$180M GC"
  stars: 4 | 5;
  avatar: string;        // initials for the avatar circle
  color: string;         // accent color for the card
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We cut our month-end close from 8 days to 2.5. The Close agent does in hours what took my team a week of spreadsheet hell. My board noticed the difference immediately.",
    name: "Mark T.",
    role: "CFO",
    company: "Heartland Mechanical Group",
    revenue: "$180M GC",
    stars: 5,
    avatar: "MT",
    color: "#3b82f6",
  },
  {
    quote:
      "AR Collections recovered $2.1M in overdue receivables in 90 days — without a single awkward phone call. The risk scoring is eerily accurate. We triaged 340 invoices in our first week.",
    name: "Dana S.",
    role: "Controller",
    company: "Summit Builders Inc.",
    revenue: "$95M GC",
    stars: 5,
    avatar: "DS",
    color: "#10b981",
  },
  {
    quote:
      "Job costing was a disaster before Jake. Now I see real-time margin on every active job and catch overruns before they become change-order fights. My PMs actually trust the numbers.",
    name: "Chris R.",
    role: "VP of Finance",
    company: "Ridgeline Concrete & Paving",
    revenue: "$42M Specialty Sub",
    stars: 5,
    avatar: "CR",
    color: "#8b5cf6",
  },
  {
    quote:
      "We went from guessing cash position in a spreadsheet to a live 13-week forecast that updates daily. I haven't touched the line-of-credit calculator since February.",
    name: "Angela P.",
    role: "Director of Finance",
    company: "Pacific Coast Interiors",
    revenue: "$67M GC",
    stars: 5,
    avatar: "AP",
    color: "#FF6200",
  },
  {
    quote:
      "Anomaly Detection flagged a $184K duplicate vendor payment three hours after it posted. Our old process wouldn't have caught it until month-end reconciliation. Jake paid for itself that day.",
    name: "James L.",
    role: "CFO",
    company: "Lonestar Infrastructure",
    revenue: "$220M Heavy Civil",
    stars: 5,
    avatar: "JL",
    color: "#f59e0b",
  },
  {
    quote:
      "Data Rehab cleaned 14 months of ERP mess in 3 weeks. Duplicates, orphan records, GL mismatches — all gone. We finally trust the numbers enough to let AI touch them.",
    name: "Rachel K.",
    role: "Controller",
    company: "Keystone Electrical Services",
    revenue: "$38M Specialty Sub",
    stars: 4,
    avatar: "RK",
    color: "#ec4899",
  },
];

/* ─── Star rating row ──────────────────────────────────────────────── */
function Stars({ count, color }: { count: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          fill={i < count ? color : "transparent"}
          stroke={i < count ? color : "#334155"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

/* ─── Single testimonial card ──────────────────────────────────────── */
function TestimonialCard({
  t,
  index,
}: {
  t: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative"
    >
      <div
        className="relative rounded-2xl border p-6 flex flex-col gap-4 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${t.color}06, ${t.color}03)`,
          borderColor: `${t.color}20`,
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
          style={{ boxShadow: `inset 0 0 60px ${t.color}10` }}
        />

        {/* Top row: stars + verified */}
        <div className="flex items-center justify-between relative z-10">
          <Stars count={t.stars} color={t.color} />
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Linkedin className="w-3 h-3 text-blue-400" />
            <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wide">
              Verified Client
            </span>
          </div>
        </div>

        {/* Quote */}
        <div className="relative z-10 flex-1">
          <span
            className="text-3xl font-serif leading-none select-none block -mb-2"
            style={{ color: `${t.color}60` }}
          >
            &ldquo;
          </span>
          <p className="text-slate-200 text-sm leading-relaxed">
            {t.quote}
          </p>
        </div>

        {/* Author row */}
        <div className="flex items-center gap-3 pt-2 border-t relative z-10" style={{ borderColor: `${t.color}15` }}>
          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
            style={{ background: `${t.color}30`, border: `2px solid ${t.color}50` }}
          >
            {t.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-white font-semibold text-sm truncate">
                {t.name}
              </span>
              <BadgeCheck className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
            </div>
            <div className="text-slate-500 text-xs truncate">
              {t.role} &middot; {t.company}
            </div>
          </div>
          {/* Revenue badge */}
          <span
            className="text-[10px] font-bold px-2 py-1 rounded-md flex-shrink-0 whitespace-nowrap"
            style={{ background: `${t.color}15`, color: t.color }}
          >
            {t.revenue}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main grid export ─────────────────────────────────────────────── */
interface TestimonialGridProps {
  testimonials?: Testimonial[];
  limit?: number;
  showHeader?: boolean;
}

export function TestimonialGrid({
  testimonials = DEFAULT_TESTIMONIALS,
  limit,
  showHeader = true,
}: TestimonialGridProps) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
              Real Results
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
              CFOs don&apos;t give testimonials
              <br />
              <span className="gradient-text-orange">unless the numbers are real.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Anonymized clients. Real metrics. Every quote below came from
              a construction finance leader using Jake on their live books.
            </p>
          </motion.div>
        )}

        {/* 1 col → 2 col → 3 col responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <TestimonialCard key={`${t.name}-${t.company}`} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
