/* ─── Blog types & constants ───────────────────────────────────────
   Separated from blog.ts so client components can import these
   without pulling in Node.js `fs` / `path` modules.
   ─────────────────────────────────────────────────────────────────── */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: BlogCategory;
  tags: string[];
  featured: boolean;
  readTime: string;
  image?: string;
  content: string;
}

export type BlogCategory =
  | "AR & Collections"
  | "Job Costing"
  | "Cash Flow"
  | "Compliance"
  | "Close & Audit"
  | "AI in Finance"
  | "Construction Finance"
  | "Leadership";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "AR & Collections",
  "Job Costing",
  "Cash Flow",
  "Compliance",
  "Close & Audit",
  "AI in Finance",
  "Construction Finance",
  "Leadership",
];

export const CATEGORY_COLORS: Record<BlogCategory, string> = {
  "AR & Collections": "#ef4444",
  "Job Costing": "#8b5cf6",
  "Cash Flow": "#f59e0b",
  "Compliance": "#10b981",
  "Close & Audit": "#0ea5e9",
  "AI in Finance": "#3b82f6",
  "Construction Finance": "#6366f1",
  "Leadership": "#ec4899",
};
