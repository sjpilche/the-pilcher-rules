import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { AGENTS } from "@/lib/agents";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jakecfo.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/agents`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solutions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/demo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];

  const agentRoutes: MetadataRoute.Sitemap = AGENTS.map((agent) => ({
    url: `${base}/agents/${agent.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const posts = getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...agentRoutes, ...blogRoutes];
}
