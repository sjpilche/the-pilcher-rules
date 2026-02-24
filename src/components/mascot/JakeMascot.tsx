"use client";

import Image from "next/image";

interface JakeMascotProps {
  quote?: string;
  size?: number;
  className?: string;
  /** Which side the speech bubble's pointer arrow appears on */
  bubbleSide?: "left" | "right" | "bottom";
}

export function JakeMascot({
  quote,
  size = 80,
  className = "",
  bubbleSide = "bottom",
}: JakeMascotProps) {
  const width = Math.round(size * (72 / 120));

  return (
    <div className={`relative group inline-block ${className}`}>
      {/* Speech bubble — top, appears on hover */}
      {quote && (
        <div
          className={`absolute ${bubbleSide === "bottom" ? "-top-12 left-1/2 -translate-x-1/2" : bubbleSide === "left" ? "-top-12 left-0" : "-top-12 right-0"} whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10`}
        >
          <div className="px-3 py-1.5 rounded-lg bg-[#0c1018] border border-amber-500/30 text-amber-300 text-xs font-medium shadow-lg">
            {quote}
          </div>
          {bubbleSide === "bottom" && (
            <div className="w-2 h-2 bg-[#0c1018] border-r border-b border-amber-500/30 rotate-45 mx-auto -mt-1" />
          )}
        </div>
      )}

      <div className="animate-float drop-shadow-[0_0_14px_rgba(245,158,11,0.28)]">
        <Image
          src="/jake.png"
          alt="Jake — construction AI CFO"
          width={width}
          height={size}
          className="opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
