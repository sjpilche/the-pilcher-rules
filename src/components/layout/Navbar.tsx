"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { LegoJakeHead } from "@/components/mascot/LegoJake";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/agents", label: "Agents" },
  { href: "/data-rehab", label: "Data Rehab" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/live-demo", label: "Live Demo" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0A2540]/90 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5"
          : "bg-[#0A2540]/70 backdrop-blur-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6200] to-[#e05500] flex items-center justify-center shadow-lg shadow-[#FF6200]/30 transition-shadow group-hover:shadow-[#FF6200]/50">
            <LegoJakeHead size={26} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-white text-lg tracking-tight">
              Jake
            </span>
            <span className="text-slate-400 text-[9px] font-medium tracking-widest uppercase">
              by Pilcher Rules
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-white bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/demo"
            className="px-5 py-2 rounded-lg bg-[#FF6200] hover:bg-[#e85800] text-white text-sm font-bold transition-all duration-200 shadow-lg shadow-[#FF6200]/25 hover:shadow-[#FF6200]/40"
          >
            Start Free Diagnostic
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-[#0A2540]/98 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all",
                    isActive
                      ? "text-white bg-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-white/10">
              <Link
                href="/demo"
                className="block w-full text-center px-5 py-3 rounded-lg bg-[#FF6200] hover:bg-[#e85800] text-white text-sm font-bold transition-all shadow-lg shadow-[#FF6200]/25"
              >
                Start Free Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
