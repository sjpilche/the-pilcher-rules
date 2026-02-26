import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

// Re-export types & constants from the client-safe module
export { BLOG_CATEGORIES, CATEGORY_COLORS } from "./blog-types";
export type { BlogPost, BlogCategory } from "./blog-types";

import type { BlogPost, BlogCategory } from "./blog-types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.(md|mdx)$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title ?? "Untitled",
      excerpt: data.excerpt ?? "",
      date: data.date ?? new Date().toISOString().split("T")[0],
      author: data.author ?? "Jake CFO Team",
      category: (data.category ?? "Construction Finance") as BlogCategory,
      tags: data.tags ?? [],
      featured: data.featured ?? false,
      readTime: stats.text,
      image: data.image,
      content,
    } satisfies BlogPost;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((p) => p.featured).slice(0, 3);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}
