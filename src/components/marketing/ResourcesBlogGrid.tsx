"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Search, Newspaper } from "lucide-react";
import { BLOG_CATEGORIES, CATEGORY_COLORS, type BlogPost, type BlogCategory } from "@/lib/blog-types";
import { cn } from "@/lib/utils";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface ResourcesBlogGridProps {
  posts: BlogPost[];
}

export function ResourcesBlogGrid({ posts }: ResourcesBlogGridProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let results = posts;

    if (activeCategory !== "All") {
      results = results.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return results;
  }, [posts, activeCategory, searchQuery]);

  // Count per category
  const countByCategory = useMemo(() => {
    const counts: Record<string, number> = { All: posts.length };
    for (const cat of BLOG_CATEGORIES) {
      const c = posts.filter((p) => p.category === cat).length;
      if (c > 0) counts[cat] = c;
    }
    return counts;
  }, [posts]);

  const activeCats = BLOG_CATEGORIES.filter(
    (cat) => posts.some((p) => p.category === cat)
  );

  return (
    <div>
      {/* Search + filter row */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#FF6200]/40 focus:ring-1 focus:ring-[#FF6200]/20 transition-all"
          />
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={cn(
              "px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200",
              activeCategory === "All"
                ? "bg-[#FF6200] text-white shadow-lg shadow-[#FF6200]/25"
                : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
            )}
          >
            All ({countByCategory["All"]})
          </button>
          {activeCats.map((cat) => {
            const color = CATEGORY_COLORS[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "text-white shadow-lg"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
                )}
                style={
                  activeCategory === cat
                    ? { background: color, boxShadow: `0 4px 14px ${color}40` }
                    : undefined
                }
              >
                {cat} ({countByCategory[cat]})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((post, i) => {
            const color = CATEGORY_COLORS[post.category];
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <article
                    className="group relative rounded-2xl border p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${color}06, ${color}03)`,
                      borderColor: `${color}20`,
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                      style={{ boxShadow: `inset 0 0 60px ${color}10` }}
                    />

                    {/* Image placeholder */}
                    <div
                      className="w-full aspect-[16/9] rounded-xl mb-4 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${color}12, ${color}04)`,
                        border: `1px solid ${color}12`,
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Newspaper className="w-8 h-8" style={{ color: `${color}35` }} />
                      </div>
                      <div className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `linear-gradient(${color}10 1px, transparent 1px), linear-gradient(90deg, ${color}10 1px, transparent 1px)`,
                          backgroundSize: "16px 16px",
                        }}
                      />
                    </div>

                    {/* Category */}
                    <div className="relative z-10">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider"
                        style={{ color }}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-bold text-base leading-snug mb-2 mt-2 group-hover:text-[#FF6200] transition-colors relative z-10">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4 relative z-10 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta row */}
                    <div className="flex items-center justify-between relative z-10 pt-3 border-t" style={{ borderColor: `${color}12` }}>
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
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg mb-2">No articles match your search.</p>
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
