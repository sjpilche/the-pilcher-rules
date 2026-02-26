"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * Secondary jump-link navigation bar pinned below the main header.
 * Appears after scrolling past the hero.
 * Highlights the active section based on scroll position.
 */

const JUMP_LINKS = [
  { href: "#what-jake-does", label: "What Jake Does" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#is-jake-right", label: "Is Jake Right For You?" },
  { href: "#results", label: "Results" },
];

export function JumpNav() {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);

      // Determine active section
      const ids = JUMP_LINKS.map((l) => l.href.slice(1));
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section is active when its top is above the midpoint of viewport
          if (rect.top <= window.innerHeight / 2) {
            current = id;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120; // offset for both navbars
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "fixed top-16 left-0 right-0 z-40 transition-all duration-300",
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-[#0A2540]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-1 h-10 overflow-x-auto scrollbar-none">
          {JUMP_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all duration-200",
                  isActive
                    ? "text-[#FF6200] bg-[#FF6200]/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
