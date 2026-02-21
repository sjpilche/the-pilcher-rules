import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, BLOG_CATEGORIES, CATEGORY_COLORS, type BlogCategory } from "@/lib/blog";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Construction Finance Intelligence",
  description:
    "Deep-dive articles on construction finance, AR collections, job costing, cash flow, compliance, and AI in finance. Written by Jake CFO.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featured = allPosts.filter((p) => p.featured);
  const regular = allPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Jake&apos;s Insights
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5">
            Construction finance,
            <br />
            <span className="gradient-text">explained straight.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            No vendor fluff. No generic finance advice. Real, actionable
            intelligence for construction CFOs, controllers, and finance teams.
          </p>
        </div>

        {/* Featured articles */}
        {featured.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-5 rounded-full bg-blue-500" />
              <h2 className="text-white font-bold text-lg">Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((post, i) => {
                const color = CATEGORY_COLORS[post.category];
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article
                      className="group glass rounded-2xl p-7 h-full flex flex-col hover:-translate-y-1 transition-all duration-200 cursor-pointer relative overflow-hidden"
                      style={{ borderColor: `${color}20` }}
                    >
                      {/* Featured badge */}
                      <div
                        className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{ background: `${color}15`, color }}
                      >
                        Featured
                      </div>

                      {/* Category */}
                      <div
                        className="text-xs font-semibold uppercase tracking-wider mb-3"
                        style={{ color }}
                      >
                        {post.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-blue-300 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-slate-500 text-xs">
                          <span>{formatDate(post.date)}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight
                          className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all"
                        />
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main articles */}
          <div className="lg:col-span-3">
            {regular.length > 0 && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-5 rounded-full bg-slate-600" />
                  <h2 className="text-white font-bold text-lg">All Articles</h2>
                </div>
                <div className="space-y-5">
                  {regular.map((post) => {
                    const color = CATEGORY_COLORS[post.category];
                    return (
                      <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <article className="group glass rounded-2xl p-6 flex gap-6 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                          {/* Color bar */}
                          <div
                            className="w-1 rounded-full flex-shrink-0 self-stretch"
                            style={{ background: color }}
                          />

                          <div className="flex-1 min-w-0">
                            <div
                              className="text-xs font-semibold uppercase tracking-wider mb-2"
                              style={{ color }}
                            >
                              {post.category}
                            </div>
                            <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-blue-300 transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-3">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-slate-500 text-xs">
                              <span>{formatDate(post.date)}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </span>
                              <span>{post.author}</span>
                            </div>
                          </div>

                          <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 flex-shrink-0 self-center group-hover:translate-x-0.5 transition-all" />
                        </article>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                Topics
              </h3>
              <div className="space-y-2">
                {BLOG_CATEGORIES.map((cat) => {
                  const count = allPosts.filter((p) => p.category === cat).length;
                  if (count === 0) return null;
                  const color = CATEGORY_COLORS[cat];
                  return (
                    <div
                      key={cat}
                      className="flex items-center justify-between py-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: color }}
                        />
                        <span className="text-slate-300 text-xs">{cat}</span>
                      </div>
                      <span className="text-slate-600 text-xs">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.2)" }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-black text-white text-xl mx-auto mb-4">
                J
              </div>
              <h3 className="text-white font-bold text-sm mb-2">
                See Jake in action
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                30 minutes with your actual financial data.
              </p>
              <Link
                href="/demo"
                className="block w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold text-center transition-all"
              >
                Meet Jake →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
