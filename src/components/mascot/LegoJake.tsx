interface LegoJakeProps {
  size?: number;
  className?: string;
  floating?: boolean;
}

export function LegoJake({ size = 80, className = "", floating = false }: LegoJakeProps) {
  const w = Math.round(size * (60 / 136));

  return (
    <svg
      width={w}
      height={size}
      viewBox="0 0 60 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${floating ? "animate-float" : ""} ${className}`.trim()}
      role="img"
      aria-label="Jake — your construction AI CFO"
    >
      {/* ── HARD HAT ── */}
      {/* Crown */}
      <rect x="17" y="4" width="26" height="20" rx="9" fill="#f97316" />
      {/* Brim */}
      <rect x="5" y="18" width="50" height="7" rx="3.5" fill="#c2410c" />
      {/* Highlight stripe */}
      <rect x="21" y="7" width="11" height="4" rx="2" fill="#fb923c" opacity="0.65" />

      {/* ── HEAD ── */}
      <rect x="14" y="24" width="32" height="32" rx="7" fill="#fef3c7" />
      {/* Chin shadow */}
      <rect x="14" y="48" width="32" height="8" rx="4" fill="#fde68a" />

      {/* Eyes */}
      <circle cx="23" cy="37" r="3.2" fill="#0f172a" />
      <circle cx="37" cy="37" r="3.2" fill="#0f172a" />
      {/* Eye shines */}
      <circle cx="24.2" cy="35.8" r="1.1" fill="white" />
      <circle cx="38.2" cy="35.8" r="1.1" fill="white" />

      {/* Smile */}
      <path
        d="M21 47 Q30 54 39 47"
        stroke="#0f172a"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />

      {/* ── NECK ── */}
      <rect x="24" y="56" width="12" height="8" fill="#fef3c7" />

      {/* ── TORSO ── */}
      {/* Orange body */}
      <rect x="11" y="62" width="38" height="32" rx="5" fill="#f97316" />
      {/* Blue vest left panel */}
      <rect x="14" y="65" width="9" height="26" rx="2" fill="#2563eb" />
      {/* Blue vest right panel */}
      <rect x="37" y="65" width="9" height="26" rx="2" fill="#2563eb" />
      {/* Centre chest clip / badge detail */}
      <rect x="26" y="70" width="8" height="7" rx="2" fill="#1d4ed8" opacity="0.85" />
      <rect x="27.5" y="71.5" width="5" height="4" rx="1" fill="#3b82f6" opacity="0.6" />

      {/* ── ARMS ── */}
      <rect x="2" y="64" width="9" height="23" rx="4" fill="#f97316" />
      <rect x="49" y="64" width="9" height="23" rx="4" fill="#f97316" />

      {/* ── HANDS ── */}
      <circle cx="6.5" cy="90" r="5.5" fill="#fef3c7" />
      <circle cx="53.5" cy="90" r="5.5" fill="#fef3c7" />

      {/* ── HIPS ── */}
      <rect x="13" y="94" width="34" height="12" rx="3.5" fill="#1d4ed8" />

      {/* ── LEGS ── */}
      <rect x="14" y="105" width="13" height="22" rx="4" fill="#3b82f6" />
      <rect x="33" y="105" width="13" height="22" rx="4" fill="#3b82f6" />

      {/* ── FEET ── */}
      <rect x="12" y="125" width="15" height="8" rx="3" fill="#1e40af" />
      <rect x="33" y="125" width="15" height="8" rx="3" fill="#1e40af" />
    </svg>
  );
}

/**
 * Just Jake's head + hard hat — used as a badge/icon (e.g. Navbar).
 * Designed to sit inside a square container; transparent background.
 */
export function LegoJakeHead({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Jake"
    >
      {/* Hard hat crown */}
      <rect x="7" y="1" width="14" height="10" rx="5" fill="#0f172a" />
      {/* Hard hat brim */}
      <rect x="2" y="8" width="24" height="4" rx="2" fill="#1c1917" />

      {/* Head */}
      <rect x="6" y="11" width="16" height="14" rx="4" fill="#0f172a" />

      {/* Eyes */}
      <circle cx="10" cy="17" r="1.4" fill="#fbbf24" />
      <circle cx="18" cy="17" r="1.4" fill="#fbbf24" />

      {/* Smile */}
      <path
        d="M10 22 Q14 25.5 18 22"
        stroke="#fbbf24"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
