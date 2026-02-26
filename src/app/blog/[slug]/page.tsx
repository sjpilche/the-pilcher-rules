import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug, CATEGORY_COLORS } from "@/lib/blog";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Very simple markdown to HTML converter (no external deps)
function markdownToHtml(md: string): string {
  return md
    // H2
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Bullet lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr>')
    // Paragraphs (double newline)
    .replace(/\n\n(?!<[huol])/g, '</p><p>')
    // Wrap in paragraphs
    .replace(/^(?!<[huol])(.+)$/gm, (m) => m.startsWith('<') ? m : m)
    // Clean up
    .trim();
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const color = CATEGORY_COLORS[post.category];
  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  // Split content into paragraphs for simple rendering
  const paragraphs = post.content
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-10 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          All Articles
        </Link>

        {/* Header */}
        <header className="mb-12">
          {/* Category */}
          <div
            className="text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ color }}
          >
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl">
            {post.excerpt}
          </p>

          {/* Meta bar */}
          <div
            className="flex flex-wrap items-center gap-5 pb-8 border-b"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                style={{ background: color }}
              >
                J
              </div>
              {post.author}
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 text-sm">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 text-sm">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs text-slate-400 border border-white/10 bg-white/4"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Article body */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <article className="lg:col-span-3">
            <div className="prose-jake">
              {paragraphs.map((block, i) => {
                if (block.startsWith('## ')) {
                  return (
                    <h2 key={i} className="text-white font-black text-2xl mt-10 mb-4 leading-snug">
                      {block.replace('## ', '')}
                    </h2>
                  );
                }
                if (block.startsWith('### ')) {
                  return (
                    <h3 key={i} className="text-white font-bold text-lg mt-7 mb-3">
                      {block.replace('### ', '')}
                    </h3>
                  );
                }
                if (block === '---') {
                  return <hr key={i} className="border-white/10 my-10" />;
                }
                if (block.startsWith('- ') || block.includes('\n- ')) {
                  const items = block.split('\n').filter((l) => l.startsWith('- '));
                  return (
                    <ul key={i} className="space-y-2 my-5 ml-4">
                      {items.map((item, j) => (
                        <li key={j} className="text-slate-300 text-base leading-relaxed flex gap-3">
                          <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item
                                .replace('- ', '')
                                .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline">$1</a>'),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  );
                }
                // Regular paragraph
                const html = block
                  .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                  .replace(/\*(.+?)\*/g, '<em>$1</em>')
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline transition-colors">$1</a>');
                return (
                  <p
                    key={i}
                    className="text-slate-300 text-base leading-loose mb-5"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                );
              })}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              {/* Jake CTA */}
              <div
                className="rounded-2xl p-6 text-center"
                style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.2)" }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-black text-white text-xl mx-auto mb-4">
                  J
                </div>
                <h3 className="text-white font-bold text-sm mb-2">
                  See Jake handle this
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Watch Jake work through {post.category.toLowerCase()} challenges live — with real data.
                </p>
                <Link
                  href="/live-demo"
                  className="block w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold text-center transition-all"
                >
                  Live Demo →
                </Link>
                <Link
                  href="/demo"
                  className="block w-full py-2 rounded-lg text-slate-400 hover:text-white text-xs text-center transition-colors mt-2"
                >
                  Or schedule a real demo
                </Link>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div className="glass rounded-2xl p-5">
                  <h3 className="text-white font-bold text-sm mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                        <div
                          className="text-xs font-semibold uppercase tracking-wider mb-1"
                          style={{ color: CATEGORY_COLORS[r.category] }}
                        >
                          {r.category}
                        </div>
                        <div className="text-slate-300 text-xs leading-snug group-hover:text-white transition-colors">
                          {r.title}
                        </div>
                        <div className="text-slate-600 text-xs mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {r.readTime}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Bottom nav */}
        <div className="mt-16 pt-10 border-t border-white/5 flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            All Articles
          </Link>
          <Link
            href="/demo"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all group"
          >
            Meet Jake
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
