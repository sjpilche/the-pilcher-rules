import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, CATEGORY_COLORS } from "@/lib/blog";
import { Clock, ArrowRight, Calendar, Newspaper } from "lucide-react";
import { LeadMagnet } from "@/components/marketing/LeadMagnet";
import { ResourcesBlogGrid } from "@/components/marketing/ResourcesBlogGrid";

export const metadata: Metadata = {
  title: "Resources — Construction Finance Intelligence",
  description:
    "Deep-dive articles, free tools, and downloadable scorecards for construction CFOs. New posts every Tuesday.",
};

export default function ResourcesPage() {
  const allPosts = getAllPosts();
  const featured = allPosts.filter((p) => p.featured);
  const regular = allPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Hero ── */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#FF6200]/30 bg-[#FF6200]/10 text-[#FF6200] text-sm font-medium mb-4">
            Resources
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5">
            Construction finance,
            <br />
            <span className="gradient-text-orange">explained straight.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            No vendor fluff. No generic finance advice. Real, actionable
            intelligence for construction CFOs, controllers, and finance teams.
            Free tools. Free downloads. Written by people who&apos;ve done the job.
          </p>
        </div>

        {/* ── "New Posts Every Tuesday" banner ── */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">
              New posts every Tuesday
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* ── Lead Magnet — AI Readiness Scorecard ── */}
        <div className="mb-20">
          <LeadMagnet />
        </div>

        {/* ── Featured Articles ── */}
        {featured.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 rounded-full bg-[#FF6200]" />
              <h2 className="text-white font-bold text-xl">Featured Articles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((post) => {
                const color = CATEGORY_COLORS[post.category];
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="group relative rounded-2xl border p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${color}08, ${color}03)`,
                        borderColor: `${color}20`,
                      }}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                        style={{ boxShadow: `inset 0 0 60px ${color}10` }}
                      />

                      {/* Featured + Category row */}
                      <div className="flex items-center gap-2 mb-4 relative z-10">
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                          style={{ background: `${color}15`, color }}
                        >
                          Featured
                        </span>
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider"
                          style={{ color }}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Image placeholder */}
                      <div
                        className="w-full aspect-[16/9] rounded-xl mb-5 relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${color}15, ${color}05)`,
                          border: `1px solid ${color}15`,
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Newspaper className="w-10 h-10" style={{ color: `${color}40` }} />
                        </div>
                        {/* Decorative grid lines */}
                        <div className="absolute inset-0 opacity-30"
                          style={{
                            backgroundImage: `linear-gradient(${color}10 1px, transparent 1px), linear-gradient(90deg, ${color}10 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                          }}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#FF6200] transition-colors relative z-10">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5 relative z-10 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-3 text-slate-500 text-xs">
                          <span>{formatDate(post.date)}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-[#FF6200] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* ── All Articles — responsive grid ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 rounded-full bg-slate-600" />
            <h2 className="text-white font-bold text-xl">All Articles</h2>
            <span className="text-slate-600 text-sm font-medium">
              {allPosts.length} posts
            </span>
          </div>

          <ResourcesBlogGrid posts={regular} />
        </div>

        {/* ── Bottom CTA ── */}
        <div className="rounded-2xl border border-[#FF6200]/20 p-10 bg-gradient-to-b from-[#FF6200]/5 to-transparent text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Stop guessing.{" "}
            <span className="gradient-text-orange">Start knowing.</span>
          </h2>
          <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Every article above is based on patterns we see across real
            construction companies. Want to see what Jake finds in your books?
            The diagnostic is free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/diagnostic"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF6200] hover:bg-[#e85800] text-white font-bold transition-all hover:-translate-y-0.5 shadow-xl shadow-[#FF6200]/25"
            >
              Schedule Free Diagnostic
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/live-demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-slate-200 hover:text-white hover:border-white/30 font-semibold transition-all hover:bg-white/5"
            >
              See Live Demo
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
