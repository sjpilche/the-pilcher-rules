"use client";

import { motion } from "framer-motion";

/*
 * TODO: Replace Steve's placeholder bio text and photo if a headshot is available.
 * Image: place at /public/steve-founder.jpg (or .png) and update the src below.
 * Keep the tone operator-first: frame expertise as "years running construction finance"
 * not "years building software."
 */

export function FounderTrust() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start gap-8 p-8 rounded-2xl border border-slate-800 bg-slate-900/50"
        >
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF6200] to-[#c94f00] flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-[#FF6200]/20">
              {/* TODO: Replace with <Image src="/steve-founder.jpg" alt="Steve Pilcher" fill className="object-cover rounded-2xl" /> */}
              S
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FF6200]/15 text-[#FF6200] mb-4">
              Built by operators, not consultants
            </div>
            <blockquote className="text-white text-lg font-semibold leading-relaxed mb-4">
              &ldquo;We built Jake because we kept watching construction companies pay for
              dashboards that didn&apos;t change the numbers. The problem was never reporting.
              It was dirty data, late AR follow-up, and close cycles that ate two weeks every
              month. Jake fixes those three things first — before anything else.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-white font-semibold text-sm">Steve Pilcher</p>
                <p className="text-slate-500 text-xs">
                  Founder — Former construction CFO and finance operator
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
