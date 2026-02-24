"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-xs text-slate-400 hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-all"
    >
      Logout
    </button>
  );
}
